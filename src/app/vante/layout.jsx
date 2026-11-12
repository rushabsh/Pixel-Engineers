const siteUrl = 'https://pixelengineers.com';

export const metadata = {
  title: 'Vante 3D Showcase | Creative WebGL Engineering',
  description:
    'An interactive 3D WebGL video ribbon and creative design experience engineered by Pixel Engineers using Three.js and custom GLSL shaders.',
  keywords: [
    'Vante showcase',
    '3D WebGL experience',
    'Three.js creative engineering',
    'interactive web design',
    'custom web graphics',
  ],
  alternates: {
    canonical: `${siteUrl}/vante`,
  },
  openGraph: {
    title: 'Vante 3D Showcase | Creative WebGL Engineering | Pixel Engineers',
    description:
      'Interactive 3D WebGL experience showcasing cutting-edge frontend graphics and custom Three.js shaders.',
    url: `${siteUrl}/vante`,
    type: 'website',
  },
};

export default function VanteLayout({ children }) {
  return children;
}

