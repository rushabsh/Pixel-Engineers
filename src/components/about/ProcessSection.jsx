'use client';

import React from 'react';

const stairCards = [
  {
    step: '01',
    title: 'Strategy first, AI-enhanced execution',
    desc: 'We craft comprehensive cross-channel roadmaps before algorithmic campaign activation.',
    gradient: 'linear-gradient(190deg, #744FB3 52%, #FF9C7B 93%)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M20 5L35 30H5L20 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Performance marketing across every channel',
    desc: 'Targeting high-intent buyers across Google, Meta, YouTube, and programmatic ad exchanges.',
    gradient: 'linear-gradient(190deg, #4facfe 52%, #00f2fe 93%)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Clear reporting, real insights, weekly wins',
    desc: 'Live transparent dashboards connecting marketing spend directly to customer acquisition.',
    gradient: 'linear-gradient(190deg, #864ffe 52%, #c6f56f 93%)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
        <line x1="8" y1="16" x2="32" y2="16" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'End-to-end execution that compounds results',
    desc: 'From custom landing page design to automated lifecycle retention funnels that multiply lifetime value.',
    gradient: 'linear-gradient(190deg, #f9eb57 52%, #ff6900 93%)',
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
        <path d="M12 28L28 12M28 12H16M28 12V24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ProcessSection() {
  return (
    <section className="nexsas-process-section">
      <div className="section-inner">
        {/* Top Header */}
        <div className="process-header">
          <div className="section-badge-wrap">
            <img
              src="/images/Star-8.svg"
              alt="Star"
              width={16}
              height={16}
              className="section-badge-icon"
            />
            <span className="section-badge-text">Why Choose Us</span>
          </div>

          <h2 className="section-title left-aligned">
            Why businesses trust Nexsas
          </h2>

          <p className="section-subtitle left-aligned">
            Businesses trust Nexsas because of its proven ability to deliver data-driven insights
            that drive real results. With advanced AI technology, robust security protocols, and
            specialized marketing directors.
          </p>
        </div>

        {/* 4 Stair Cards Grid */}
        <div className="process-stair-grid">
          {stairCards.map((card, idx) => (
            <div key={idx} className="stair-card-item group">
              {/* Glowing hover spotlight in top right */}
              <div
                className="stair-card-glow-spotlight"
                style={{ background: card.gradient }}
              />

              {/* Icon & Step Number */}
              <div className="stair-card-top">
                <div className="stair-card-icon">{card.icon}</div>
                <span className="stair-card-step-badge">{card.step}</span>
              </div>

              {/* Text */}
              <div className="stair-card-bottom">
                <h3 className="stair-card-title">{card.title}</h3>
                <p className="stair-card-desc">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ambient Bottom Wave Gradient */}
      <div className="process-ambient-gradient">
        <img
          src="/images/Gradient-ai-marketing-agency-2-scaled.png"
          alt="Ambient Gradient"
        />
      </div>
    </section>
  );
}
