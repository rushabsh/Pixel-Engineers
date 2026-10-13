'use client';

import { useState } from 'react';

export default function WorldMap({ onShowToast }) {
  const [activePin, setActivePin] = useState(null);
  const [isSatellite, setIsSatellite] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const locations = [
    {
      id: 'nj',
      city: 'Mesa, New Jersey',
      country: 'United States',
      role: 'Global Support & Headquarters',
      address: '2464 Royal Ln. Mesa, New Jersey 45463',
      phone: '+391 (0) 35 2568 4593',
      status: 'Online Now (24/7)',
      x: 235,
      y: 160,
      isHQ: true,
    },
    {
      id: 'london',
      city: 'London',
      country: 'United Kingdom',
      role: 'EMEA Regional Hub',
      address: '100 Bishopsgate, London',
      phone: '+44 20 7946 0912',
      status: 'Online Now',
      x: 480,
      y: 120,
      isHQ: false,
    },
    {
      id: 'frankfurt',
      city: 'Frankfurt',
      country: 'Germany',
      role: 'Central Europe Datacenter',
      address: 'Mainzer Landstraße, Frankfurt',
      phone: '+49 69 1234 5678',
      status: 'Online Now',
      x: 512,
      y: 128,
      isHQ: false,
    },
    {
      id: 'tokyo',
      city: 'Tokyo',
      country: 'Japan',
      role: 'APAC Operations Hub',
      address: 'Roppongi Hills Mori Tower',
      phone: '+81 3 5555 0143',
      status: 'Online Now',
      x: 845,
      y: 162,
      isHQ: false,
    },
    {
      id: 'singapore',
      city: 'Singapore',
      country: 'Singapore',
      role: 'South East Asia Gateway',
      address: 'Marina Bay Financial Centre',
      phone: '+65 6789 0123',
      status: 'Online Now',
      x: 745,
      y: 250,
      isHQ: false,
    },
    {
      id: 'sydney',
      city: 'Sydney',
      country: 'Australia',
      role: 'Oceania Dispatch Hub',
      address: 'International Towers, Barangaroo',
      phone: '+61 2 9876 5432',
      status: 'Online Now',
      x: 875,
      y: 335,
      isHQ: false,
    },
  ];

  const oceanBg = isSatellite ? '#0f1f2e' : '#60cae8';
  const landFill = isSatellite ? '#2d4538' : '#d8ebd5';
  const landStroke = isSatellite ? '#3a5847' : '#bddcbd';

  return (
    <div className={`contact-map-frame ${isFullscreen ? 'map-fullscreen' : ''}`}>
      {/* Top Left Floating Google Maps Link Button */}
      <a
        href="https://maps.google.com/?q=2464+Royal+Ln+Mesa+New+Jersey"
        target="_blank"
        rel="noopener noreferrer"
        className="map-open-btn"
        title="Open location in Google Maps"
      >
        <span>Open In Maps</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>

      {/* Interactive Tooltip Card for Active Pin */}
      {activePin && (
        <div className="map-tooltip-overlay">
          <div className="tooltip-status-dot" />
          <div>
            <div className="tooltip-title">{activePin.city} — {activePin.role}</div>
            <div className="tooltip-desc">{activePin.address} • {activePin.status}</div>
          </div>
          <button
            type="button"
            onClick={() => setActivePin(null)}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              fontSize: '14px',
              padding: '0 4px',
            }}
            aria-label="Dismiss tooltip"
          >
            ✕
          </button>
        </div>
      )}

      {/* SVG Vector World Map */}
      <svg
        className="map-svg-canvas"
        viewBox="0 0 1000 480"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="mapShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodColor="#000000" floodOpacity="0.12" />
          </filter>
        </defs>

        {/* Ocean Background */}
        <rect width="1000" height="480" fill={oceanBg} />

        {/* Ocean Waves Grid */}
        <g stroke={isSatellite ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.18)'} strokeWidth="0.75" fill="none">
          <line x1="0" y1="120" x2="1000" y2="120" strokeDasharray="3 6" />
          <line x1="0" y1="240" x2="1000" y2="240" strokeDasharray="4 8" />
          <line x1="0" y1="360" x2="1000" y2="360" strokeDasharray="3 6" />
          <line x1="250" y1="0" x2="250" y2="480" strokeDasharray="3 6" />
          <line x1="500" y1="0" x2="500" y2="480" strokeDasharray="4 8" />
          <line x1="750" y1="0" x2="750" y2="480" strokeDasharray="3 6" />
        </g>

        {/* Ocean Names */}
        <g
          fill={isSatellite ? 'rgba(255,255,255,0.35)' : 'rgba(23, 76, 120, 0.48)'}
          fontSize="9.5"
          fontWeight="600"
          letterSpacing="0.08em"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          <text x="390" y="200" textAnchor="middle">North Atlantic Ocean</text>
          <text x="440" y="340" textAnchor="middle">South Atlantic Ocean</text>
          <text x="135" y="230" textAnchor="middle">North Pacific Ocean</text>
          <text x="180" y="345" textAnchor="middle">South Pacific Ocean</text>
          <text x="640" y="340" textAnchor="middle">Indian Ocean</text>
          <text x="920" y="240" textAnchor="middle">Pacific Ocean</text>
          <text x="520" y="445" textAnchor="middle">Southern Ocean</text>
        </g>

        {/* CONTINENTS & MAJOR ISLANDS */}
        <g
          fill={landFill}
          stroke={landStroke}
          strokeWidth="0.8"
          strokeLinejoin="round"
          filter="url(#mapShadow)"
        >
          {/* North America */}
          <path d="M 60,65 L 120,55 L 175,60 L 210,50 L 240,65 L 285,60 L 295,95 L 315,105 L 305,125 L 275,130 L 280,155 L 295,170 L 270,185 L 250,175 L 235,190 L 220,180 L 195,215 L 180,245 L 170,240 L 165,220 L 140,195 L 125,160 L 135,135 L 110,130 L 85,95 Z" />
          
          {/* Alaska */}
          <path d="M 50,60 L 85,55 L 90,85 L 60,85 L 45,75 Z" />

          {/* Canadian Arctic Archipelago */}
          <path d="M 180,35 L 225,30 L 240,45 L 210,52 Z" />
          <path d="M 235,28 L 275,25 L 285,42 L 250,45 Z" />
          <path d="M 285,38 L 305,40 L 300,55 L 280,52 Z" />

          {/* Greenland */}
          <path d="M 370,30 L 425,25 L 445,45 L 435,80 L 415,95 L 380,85 L 365,60 Z" />

          {/* Central America & Caribbean */}
          <path d="M 175,240 L 195,250 L 220,270 L 210,275 L 185,255 Z" />
          <circle cx="250" cy="225" r="3" />
          <circle cx="270" cy="235" r="2.5" />

          {/* South America */}
          <path d="M 220,275 L 255,270 L 290,280 L 335,300 L 345,335 L 330,370 L 305,425 L 290,440 L 280,430 L 270,380 L 250,335 L 230,305 L 215,285 Z" />

          {/* Europe */}
          <path d="M 445,95 L 480,80 L 515,85 L 525,115 L 505,125 L 520,140 L 490,165 L 475,175 L 450,170 L 435,145 L 440,125 L 435,105 Z" />
          <path d="M 480,60 L 500,55 L 515,75 L 495,85 Z" /> {/* Scandinavia */}

          {/* British Isles */}
          <path d="M 430,110 L 445,105 L 450,125 L 438,135 L 425,125 Z" />
          <path d="M 418,118 L 426,115 L 424,130 L 416,126 Z" />

          {/* Africa */}
          <path d="M 450,178 L 495,168 L 545,185 L 565,225 L 560,285 L 540,345 L 510,380 L 495,385 L 475,345 L 450,290 L 425,230 L 430,195 Z" />

          {/* Madagascar */}
          <path d="M 575,320 L 588,315 L 585,355 L 572,360 Z" />

          {/* Eurasia / Russia / Northern Asia */}
          <path d="M 520,90 L 580,75 L 670,60 L 760,55 L 840,65 L 900,80 L 890,115 L 850,125 L 800,120 L 745,115 L 680,110 L 610,120 L 555,115 L 530,100 Z" />

          {/* Middle East */}
          <path d="M 535,165 L 565,160 L 590,185 L 610,205 L 585,235 L 565,225 L 550,195 Z" />

          {/* Central & East Asia (China, Mongolia, etc.) */}
          <path d="M 610,120 L 720,115 L 790,125 L 840,150 L 825,185 L 780,215 L 730,225 L 670,210 L 635,175 L 600,165 Z" />

          {/* India */}
          <path d="M 640,205 L 675,200 L 690,230 L 670,270 L 650,275 L 635,240 Z" />

          {/* Southeast Asia */}
          <path d="M 725,220 L 755,225 L 765,260 L 745,275 L 730,260 Z" />

          {/* Indonesia & Philippines */}
          <path d="M 750,285 L 790,280 L 810,295 L 760,295 Z" />
          <path d="M 810,275 L 840,270 L 835,288 L 815,290 Z" />
          <circle cx="785" cy="245" r="3" />
          <circle cx="795" cy="255" r="2.5" />

          {/* Japan */}
          <path d="M 845,145 L 860,140 L 855,175 L 840,180 Z" />

          {/* Australia */}
          <path d="M 785,310 L 835,295 L 880,315 L 895,355 L 870,405 L 825,410 L 785,385 L 765,345 Z" />

          {/* New Zealand */}
          <path d="M 925,385 L 938,380 L 930,410 L 920,415 Z" />
          <path d="M 932,415 L 942,410 L 935,435 L 925,435 Z" />

          {/* Antarctica (Coastline at bottom) */}
          <path d="M 0,465 Q 250,455 500,465 T 1000,465 L 1000,480 L 0,480 Z" opacity="0.9" />
        </g>

        {/* Country Text Labels (Google Maps style) */}
        <g
          fill={isSatellite ? 'rgba(255,255,255,0.45)' : 'rgba(51, 65, 85, 0.65)'}
          fontSize="8"
          fontWeight="600"
          fontFamily="system-ui, -apple-system, sans-serif"
        >
          <text x="390" y="65">Greenland</text>
          <text x="180" y="95">Canada</text>
          <text x="180" y="145">United States</text>
          <text x="270" y="340">Brazil</text>
          <text x="680" y="85">Russia</text>
          <text x="730" y="165">China</text>
          <text x="650" y="235">India</text>
          <text x="820" y="360">Australia</text>
        </g>

        {/* INTERACTIVE LOCATION PINS */}
        {locations.map((loc) => {
          const isSelected = activePin?.id === loc.id;
          const isHQ = loc.isHQ;

          return (
            <g
              key={loc.id}
              className="map-pin"
              onClick={() => {
                setActivePin(loc);
                if (onShowToast) onShowToast(`Selected ${loc.city} Hub`);
              }}
              style={{ cursor: 'pointer' }}
            >
              {/* Outer Pulsing Wave Ring */}
              <circle
                cx={loc.x}
                cy={loc.y}
                r="9"
                className="pin-pulse-ring"
                fill="none"
                stroke={isHQ ? '#f59e0b' : '#3b82f6'}
                strokeWidth="2.2"
              />

              {/* Pin Shadow */}
              <ellipse
                cx={loc.x}
                cy={loc.y + 3}
                rx="5"
                ry="2.5"
                fill="rgba(0,0,0,0.3)"
              />

              {/* Pin Base Circle */}
              <circle
                cx={loc.x}
                cy={loc.y}
                r={isSelected ? '7' : '5'}
                fill={isHQ ? '#ea580c' : '#2563eb'}
                stroke="#ffffff"
                strokeWidth="2"
              />

              {/* HQ Golden Center */}
              {isHQ && (
                <circle
                  cx={loc.x}
                  cy={loc.y}
                  r="2"
                  fill="#ffffff"
                />
              )}

              {/* Permanent Badge for Mesa New Jersey HQ */}
              {isHQ && (
                <g transform={`translate(${loc.x - 42}, ${loc.y - 26})`}>
                  <rect
                    width="84"
                    height="19"
                    rx="5"
                    fill="#18181b"
                    opacity="0.94"
                  />
                  <text
                    x="42"
                    y="13"
                    fill="#ffffff"
                    fontSize="8.5"
                    fontWeight="700"
                    textAnchor="middle"
                    fontFamily="system-ui, -apple-system, sans-serif"
                  >
                    New Jersey HQ
                  </text>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      {/* Bottom Left Satellite View Toggle Box */}
      <div
        className="map-satellite-box"
        onClick={() => {
          setIsSatellite(!isSatellite);
          if (onShowToast) onShowToast(isSatellite ? 'Switched to Street Map' : 'Switched to Satellite Map');
        }}
        title={isSatellite ? 'Switch to Standard Map' : 'Switch to Satellite Map'}
        style={{
          backgroundImage: isSatellite
            ? 'linear-gradient(135deg, #0f172a, #1e293b)'
            : 'linear-gradient(135deg, #0284c7, #10b981)',
        }}
      >
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '9px',
          color: '#ffffff',
          fontWeight: '700',
          letterSpacing: '0.04em',
          textShadow: '0 1px 2px rgba(0,0,0,0.8)',
        }}>
          {isSatellite ? 'MAP' : 'SAT'}
        </div>
      </div>

      {/* Bottom Center Google Branding Watermark */}
      <div className="map-google-logo">
        <span style={{ color: '#4285F4' }}>G</span>
        <span style={{ color: '#EA4335' }}>o</span>
        <span style={{ color: '#FBBC05' }}>o</span>
        <span style={{ color: '#4285F4' }}>g</span>
        <span style={{ color: '#34A853' }}>l</span>
        <span style={{ color: '#EA4335' }}>e</span>
      </div>

      {/* Bottom Right Fullscreen Toggle */}
      <button
        type="button"
        className="map-fullscreen-btn"
        onClick={() => {
          setIsFullscreen(!isFullscreen);
          if (onShowToast) onShowToast(isFullscreen ? 'Restored Map Size' : 'Expanded Map Fullscreen');
        }}
        aria-label="Toggle Fullscreen"
        title="Toggle Fullscreen"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
        </svg>
      </button>

      {/* Bottom Right Attribution Bar */}
      <div className="map-attribution-bar">
        <span>Keyboard shortcuts</span>
        <span>•</span>
        <span>Map data ©2026</span>
        <span>•</span>
        <span>Terms</span>
      </div>
    </div>
  );
}
