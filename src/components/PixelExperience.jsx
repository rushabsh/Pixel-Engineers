'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import Lenis from 'lenis';

const coverVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const coverFragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform vec2 uImageResolution;
  uniform float uDissolve;
  uniform vec2 uCenter;
  uniform float uTime;
  uniform float uGrayscale;
  uniform float uEdgeIntensity;
  uniform float uEdgeBrightness;
  varying vec2 vUv;

  mat3 sobelX = mat3(
    -1.0, 0.0, 1.0,
    -2.0, 0.0, 2.0,
    -1.0, 0.0, 1.0
  );

  mat3 sobelY = mat3(
    -1.0, -2.0, -1.0,
     0.0,  0.0,  0.0,
     1.0,  2.0,  1.0
  );

  float getLuminance(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
  }

  float sobel(sampler2D tex, vec2 uv, vec2 texelSize) {
    float gx = 0.0;
    float gy = 0.0;

    for (int i = -1; i <= 1; i++) {
      for (int j = -1; j <= 1; j++) {
        vec2 offset = vec2(float(i), float(j)) * texelSize;
        float lum = getLuminance(texture2D(tex, uv + offset).rgb);
        gx += lum * sobelX[i + 1][j + 1];
        gy += lum * sobelY[i + 1][j + 1];
      }
    }

    return sqrt(gx * gx + gy * gy);
  }

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    
    for (int i = 0; i < 5; i++) {
      value += amplitude * noise(p * frequency);
      amplitude *= 0.5;
      frequency *= 2.0;
    }
    
    return value;
  }

  void main() {
    vec2 ratio = vec2(
      min((uResolution.x / uResolution.y) / (uImageResolution.x / uImageResolution.y), 1.0),
      min((uResolution.y / uResolution.x) / (uImageResolution.y / uImageResolution.x), 1.0)
    );

    vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    vec4 texColor = texture2D(uTexture, uv);
    
    float gray = getLuminance(texColor.rgb);
    vec3 grayscaleColor = vec3(gray);
    texColor.rgb = mix(texColor.rgb, grayscaleColor, uGrayscale);
    
    vec2 centeredUv = vUv - uCenter;
    float aspect = uResolution.x / uResolution.y;
    centeredUv.x *= aspect;
    float dist = length(centeredUv);
    
    float angle = atan(centeredUv.y, centeredUv.x);
    
    float noiseScale = 6.0;
    vec2 pixelatedUv = floor(vUv * uResolution / noiseScale) * noiseScale / uResolution;
    float blockNoise = fbm(pixelatedUv * 100.0) * 0.15;
    
    float angularNoise = fbm(vec2(angle * 5.0, 0.0)) * 0.15;
    
    float totalNoise = blockNoise + angularNoise;
    float noisyDist = dist + totalNoise;
    
    float maxDist = length(vec2(aspect * 0.5, 0.5));
    float normalizedDist = noisyDist / maxDist;
    
    float dissolveThreshold = uDissolve * 1.5;
    
    vec2 texelSize = 1.0 / uResolution;
    float edge = sobel(uTexture, uv, texelSize);
    
    edge = pow(edge, 0.7) * 2.0;
    edge = clamp(edge, 0.0, 1.0);
    
    float dissolveMask = smoothstep(dissolveThreshold - 0.03, dissolveThreshold, normalizedDist);
    
    vec3 edgeColor = vec3(1.0, 1.0, 1.0);
    
    vec3 baseColor = mix(texColor.rgb, vec3(0.0), uGrayscale);
    vec3 finalColor = baseColor;
    
    float edgeGlowIntensity = uEdgeIntensity * 2.0;
    float edgeGlow = edge * edgeGlowIntensity * (1.0 + uGrayscale * 3.0);
    finalColor += edgeColor * edgeGlow * uEdgeBrightness;
    
    float edgeZoneWidth = 0.15 * (1.0 - uDissolve) + 0.02;
    float edgeZone = smoothstep(dissolveThreshold - edgeZoneWidth, dissolveThreshold - edgeZoneWidth + 0.04, normalizedDist) * 
                     smoothstep(dissolveThreshold + 0.02, dissolveThreshold - 0.02, normalizedDist);
    float sparkle = hash(floor(vUv * uResolution / 4.0)) * edgeZone;
    
    float edgeBrightness = (1.0 - uDissolve) * uEdgeBrightness * (1.0 + uGrayscale * 2.0);
    finalColor += vec3(sparkle * 3.0 * edgeBrightness);
    
    float alpha = dissolveMask * texColor.a;

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

const coverFragmentShaderReverse = `
  uniform sampler2D uTexture;
  uniform vec2 uResolution;
  uniform vec2 uImageResolution;
  uniform float uDissolve;
  uniform vec2 uCenter;
  uniform float uTime;
  uniform float uBrightness;
  uniform float uEdgeIntensity;
  uniform float uDarkness;
  uniform float uGrayscale;
  varying vec2 vUv;

  mat3 sobelX = mat3(
    -1.0, 0.0, 1.0,
    -2.0, 0.0, 2.0,
    -1.0, 0.0, 1.0
  );

  mat3 sobelY = mat3(
    -1.0, -2.0, -1.0,
     0.0,  0.0,  0.0,
     1.0,  2.0,  1.0
  );

  float getLuminance(vec3 color) {
    return dot(color, vec3(0.299, 0.587, 0.114));
  }

  float sobel(sampler2D tex, vec2 uv, vec2 texelSize) {
    float gx = 0.0;
    float gy = 0.0;

    for (int i = -1; i <= 1; i++) {
      for (int j = -1; j <= 1; j++) {
        vec2 offset = vec2(float(i), float(j)) * texelSize;
        float lum = getLuminance(texture2D(tex, uv + offset).rgb);
        gx += lum * sobelX[i + 1][j + 1];
        gy += lum * sobelY[i + 1][j + 1];
      }
    }

    return sqrt(gx * gx + gy * gy);
  }

  void main() {
    vec2 ratio = vec2(
      min((uResolution.x / uResolution.y) / (uImageResolution.x / uImageResolution.y), 1.0),
      min((uResolution.y / uResolution.x) / (uImageResolution.y / uImageResolution.x), 1.0)
    );

    vec2 uv = vec2(
      vUv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      vUv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );

    vec4 texColor = texture2D(uTexture, uv);
    
    float gray = getLuminance(texColor.rgb);
    vec3 grayscaleColor = vec3(gray);
    texColor.rgb = mix(texColor.rgb, grayscaleColor, uGrayscale);
    
    vec2 texelSize = 1.0 / uResolution;
    float edge = sobel(uTexture, uv, texelSize);
    
    edge = pow(edge, 0.7) * 2.0;
    edge = clamp(edge, 0.0, 1.0);
    
    vec3 edgeColor = vec3(1.0, 1.0, 1.0);
    vec3 darkBase = vec3(0.0);
    vec3 baseColor = mix(texColor.rgb, darkBase, uDarkness);
    
    float edgeGlow = edge * uEdgeIntensity * 2.0;
    baseColor += edgeColor * edgeGlow;
    
    vec3 finalColor = clamp(baseColor, 0.0, 1.0);

    gl_FragColor = vec4(finalColor, texColor.a);
  }
`;

export default function PixelExperience() {
  const canvas1Ref = useRef(null);
  const canvas2Ref = useRef(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const container1 = canvas1Ref.current;
    const container2 = canvas2Ref.current;
    if (!container1 || !container2) return;

    const lenis = new Lenis();

    const scene1 = new THREE.Scene();
    const camera1 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera1.position.z = 1;

    const renderer1 = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer1.setSize(window.innerWidth, window.innerHeight);
    renderer1.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container1.appendChild(renderer1.domElement);

    const scene2 = new THREE.Scene();
    const camera2 = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
    camera2.position.z = 1;

    const renderer2 = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer2.setSize(window.innerWidth, window.innerHeight);
    renderer2.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container2.appendChild(renderer2.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);

    const createVideo = (src) => {
      const video = document.createElement('video');
      video.src = src;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.autoplay = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
      video.setAttribute('muted', '');
      video.setAttribute('loop', '');
      video.play().catch(() => { });
      return video;
    };

    const video1 = createVideo('/Hero-1.mp4');
    const video2 = createVideo('/Hero-3.mp4');

    const texture1 = new THREE.VideoTexture(video1);
    texture1.minFilter = THREE.LinearFilter;
    texture1.magFilter = THREE.LinearFilter;

    const texture2 = new THREE.VideoTexture(video2);
    texture2.minFilter = THREE.LinearFilter;
    texture2.magFilter = THREE.LinearFilter;

    const initialRes1 = video1.videoWidth && video1.videoHeight
      ? new THREE.Vector2(video1.videoWidth, video1.videoHeight)
      : new THREE.Vector2(1920, 1080);

    const material1 = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture1 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uImageResolution: { value: initialRes1 },
        uDissolve: { value: 0.0 },
        uCenter: { value: new THREE.Vector2(0.5, 0.5) },
        uTime: { value: 0.0 },
        uGrayscale: { value: 0.0 },
        uEdgeIntensity: { value: 0.0 },
        uEdgeBrightness: { value: 1.0 },
      },
      vertexShader: coverVertexShader,
      fragmentShader: coverFragmentShader,
      transparent: true,
    });

    const mesh1 = new THREE.Mesh(geometry, material1);
    scene1.add(mesh1);

    const initialRes2 = video2.videoWidth && video2.videoHeight
      ? new THREE.Vector2(video2.videoWidth, video2.videoHeight)
      : new THREE.Vector2(1920, 1080);

    const material2 = new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture2 },
        uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        uImageResolution: { value: initialRes2 },
        uDissolve: { value: 0.0 },
        uCenter: { value: new THREE.Vector2(0.5, 0.5) },
        uTime: { value: 0.0 },
        uBrightness: { value: 0.0 },
        uEdgeIntensity: { value: 0.6 },
        uDarkness: { value: 1.0 },
        uGrayscale: { value: 1.0 },
      },
      vertexShader: coverVertexShader,
      fragmentShader: coverFragmentShaderReverse,
      transparent: true,
    });

    const mesh2 = new THREE.Mesh(geometry, material2);
    scene2.add(mesh2);

    const onVideo1Metadata = () => {
      if (video1.videoWidth && video1.videoHeight) {
        material1.uniforms.uImageResolution.value.set(video1.videoWidth, video1.videoHeight);
      }
    };
    const onVideo2Metadata = () => {
      if (video2.videoWidth && video2.videoHeight) {
        material2.uniforms.uImageResolution.value.set(video2.videoWidth, video2.videoHeight);
      }
    };

    video1.addEventListener('loadedmetadata', onVideo1Metadata);
    video2.addEventListener('loadedmetadata', onVideo2Metadata);

    const ensureVideosPlay = () => {
      if (video1.paused) video1.play().catch(() => { });
      if (video2.paused) video2.play().catch(() => { });
    };
    window.addEventListener('click', ensureVideosPlay, { once: true });
    window.addEventListener('touchstart', ensureVideosPlay, { once: true });

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      renderer1.setSize(width, height);
      renderer2.setSize(width, height);

      if (material1) {
        material1.uniforms.uResolution.value.set(width, height);
      }
      if (material2) {
        material2.uniforms.uResolution.value.set(width, height);
      }
    };

    window.addEventListener('resize', handleResize);

    const handleScroll = (e) => {
      // The hero container is 300vh, so scrollable distance across the hero is 200vh (2 * window.innerHeight)
      const maxHeroScroll = Math.max(1, window.innerHeight * 2);
      const currentScroll = typeof e?.scroll === 'number' ? e.scroll : (window.scrollY || 0);
      const progress = Math.min(1.0, Math.max(0.0, currentScroll / maxHeroScroll));

      setScrollPercent(Math.round(progress * 100));
      const dissolveAmount = progress;

      if (material1) {
        material1.uniforms.uDissolve.value = dissolveAmount;
        const grayscaleProgress = Math.min(1.0, progress / 0.4);
        material1.uniforms.uGrayscale.value = grayscaleProgress;
        material1.uniforms.uEdgeIntensity.value = progress * 0.5;
        material1.uniforms.uEdgeBrightness.value = 1.0 - progress;
      }

      if (material2) {
        const acceleratedProgress = Math.min(1.0, progress * 1.1);
        material2.uniforms.uEdgeIntensity.value = 0.6 * (1.0 - acceleratedProgress);
        material2.uniforms.uDarkness.value = 1.0 - acceleratedProgress;
        material2.uniforms.uGrayscale.value = 1.0 - acceleratedProgress;
      }
    };

    lenis.on('scroll', handleScroll);

    let animationFrameId;
    const raf = (time) => {
      lenis.raf(time);

      const timeInSeconds = time * 0.001;
      if (material1) {
        material1.uniforms.uTime.value = timeInSeconds;
      }
      if (material2) {
        material2.uniforms.uTime.value = timeInSeconds;
      }

      renderer1.render(scene1, camera1);
      renderer2.render(scene2, camera2);

      animationFrameId = requestAnimationFrame(raf);
    };

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', ensureVideosPlay);
      window.removeEventListener('touchstart', ensureVideosPlay);
      video1.removeEventListener('loadedmetadata', onVideo1Metadata);
      video2.removeEventListener('loadedmetadata', onVideo2Metadata);
      lenis.destroy();

      video1.pause();
      video1.removeAttribute('src');
      video1.load();
      texture1.dispose();

      video2.pause();
      video2.removeAttribute('src');
      video2.load();
      texture2.dispose();

      if (material1) {
        material1.dispose();
      }
      if (material2) {
        material2.dispose();
      }
      geometry.dispose();

      renderer1.dispose();
      renderer2.dispose();

      if (container1.contains(renderer1.domElement)) {
        container1.removeChild(renderer1.domElement);
      }
      if (container2.contains(renderer2.domElement)) {
        container2.removeChild(renderer2.domElement);
      }
    };
  }, []);

  return (
    <div className="container">
      {/* Three.js Canvas containers */}
      <div ref={canvas1Ref} className="canvas1" aria-hidden="true" />
      <div ref={canvas2Ref} className="canvas2" aria-hidden="true" />

      {/* Modern UI Overlay */}
      <header className="ui-overlay">
        <div className="ui-header">
          <span className="brand-badge">Pixel Dynamics</span>
          <div className="brand-status">
            <span className="status-dot" />
            <span>WebGL 2.0 • Live Shader</span>
          </div>
        </div>

        <div className="ui-center">
          <h1 className="hero-title">PIXELSHIFT</h1>
          <p className="hero-subtitle">Transforming Ideas Into Digital Experiences.</p>
        </div>

        <div className="ui-footer">
          <div className="scroll-indicator">
            <span className="scroll-line" />
            <span>Scroll to dissolve</span>
          </div>
          <div className="progress-counter">
            <span>{String(scrollPercent).padStart(3, '0')}%</span>
          </div>
        </div>
      </header>
    </div>
  );
}
