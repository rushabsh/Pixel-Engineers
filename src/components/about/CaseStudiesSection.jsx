'use client';

import React from 'react';
import Link from 'next/link';

export default function CaseStudiesSection() {
  return (
    <section className="nexsas-casestudies-section">
      <div className="section-inner">
        {/* Top Header */}
        <div className="casestudies-header text-center">
          <div className="section-badge-wrap mx-auto">
            <img
              src="/images/Star-9.png"
              alt="Star"
              width={16}
              height={16}
              className="section-badge-icon"
            />
            <span className="section-badge-text">Case Studies</span>
          </div>

          <h2 className="section-title">
            Success Stories That <span className="highlight-purple">Speak for Themselves.</span>
          </h2>
        </div>

        {/* Featured Case Study Hero Card */}
        <div className="casestudy-hero-card group">
          {/* Main Visual */}
          <div className="casestudy-media-wrapper">
            <img
              src="/images/opai-img-158-scaled.jpg"
              alt="Foodly Case Study"
              className="casestudy-bg-img"
            />
            <div className="casestudy-dark-overlay" />
          </div>

          {/* Floating Arrow Action */}
          <div className="casestudy-floating-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Glassmorphic Metrics Card at Bottom */}
          <div className="casestudy-bottom-bar">
            <div className="casestudy-info">
              <h3 className="casestudy-client-title">Foodly</h3>
              <p className="casestudy-client-desc">
                AI delivery optimization cut response times, reduced delivery failures, and boosted app conversions.
              </p>
            </div>

            {/* Statistics Bar */}
            <div className="casestudy-stats-grid">
              <div className="casestudy-stat-item">
                <span className="casestudy-stat-number">85%</span>
                <span className="casestudy-stat-label">More conversions</span>
              </div>
              <div className="casestudy-stat-item">
                <span className="casestudy-stat-number">-34%</span>
                <span className="casestudy-stat-label">Failed deliveries cut</span>
              </div>
              <div className="casestudy-stat-item">
                <span className="casestudy-stat-number">74%</span>
                <span className="casestudy-stat-label">More deliveries</span>
              </div>
              <div className="casestudy-stat-item">
                <span className="casestudy-stat-number">4X</span>
                <span className="casestudy-stat-label">Faster scheduling</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
