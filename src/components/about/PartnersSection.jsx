'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../Button';

const partners = [
  {
    title: 'Meta Marketing Partner',
    desc: "As a Meta Marketing Partner, we specialize in digital marketing strategies that leverage Meta's platforms to drive your business growth. Our tailored approaches enhance your advertising efforts.",
    logo: '/images/meta.png',
  },
  {
    title: 'Google Ads Certified Partner',
    desc: "As a Google Ads Certified Partner, we specialize in high-converting search, display, and YouTube campaigns that capture high-intent buyers with optimal cost-per-acquisition.",
    logo: '/images/google-ads-certified.png',
  },
  {
    title: 'Klaviyo Elite Partner',
    desc: 'As an elite Klaviyo Partner, we build hyper-segmented email & SMS lifecycle automations that dramatically improve customer retention, repeat orders, and customer lifetime value.',
    logo: '/images/klaviyo.png',
  },
];

export default function PartnersSection() {
  return (
    <section className="nexsas-partners-section">
      <div className="section-inner">
        {/* Top Header */}
        <div className="partners-header text-center">
          <div className="section-badge-wrap mx-auto">
            <img
              src="/images/Star-9.png"
              alt="Star"
              width={16}
              height={16}
              className="section-badge-icon"
            />
            <span className="section-badge-text">Partnerships</span>
          </div>

          <h2 className="section-title">Certified by the Best</h2>

          <p className="section-subtitle mx-auto">
            Our strategic enterprise partnerships grant our clients early beta feature access,
            dedicated platform support, and lower programmatic bidding rates.
          </p>
        </div>

        {/* Partner Cards Grid */}
        <div className="partners-cards-grid">
          {partners.map((p, idx) => (
            <div key={idx} className="partner-card-item group">
              <div className="partner-card-glow-bg" />
              <div className="partner-card-inner">
                <div className="partner-card-logo-box">
                  <img src={p.logo} alt={p.title} className="partner-card-logo" />
                </div>
                <div className="partner-card-content">
                  <h3 className="partner-card-title">{p.title}</h3>
                  <p className="partner-card-desc">{p.desc}</p>
                </div>
                <div className="partner-card-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="partners-cta-row text-center mt-12">
          <Button href="/contact" className="inline-flex">
            Let's Get Started
          </Button>
        </div>
      </div>
    </section>
  );
}
