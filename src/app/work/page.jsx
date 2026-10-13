'use client';

import React, { useState } from 'react';
import Button from '../../components/Button';
import FadeUp from '../../components/FadeUp';
import './work.css';

// Featured Projects Data (matching the user-provided reference image)
const featuredProjects = [
  {
    id: 'greenglobe',
    badge: 'Web Development',
    title: 'GreenGlobe Agriculture',
    desc: 'A modern web application to manage agriculture operations, track data and improve productivity.',
    caseStudyUrl: '/contact',
    type: 'laptop',
    screenTag: 'GreenGlobe',
    screenHeadline: 'Sustainable Agriculture for a Better Tomorrow',
    screenTheme: 'agri',
    wide: true,
  },
  {
    id: 'transitpay',
    badge: 'Mobile App',
    title: 'TransitPay',
    desc: 'A React Native app for seamless public transport payments with QR scanning and wallet features.',
    caseStudyUrl: '/contact',
    type: 'phone',
    screenTag: 'TransitPay',
    screenHeadline: 'Tap, Ride, and Pay Effortlessly',
    screenTheme: 'transit',
    wide: false,
  },
  {
    id: 'revup',
    badge: 'Web Development',
    title: 'RevUp Bikes',
    desc: 'A bike rental platform built with WooCommerce, custom plugin and advanced booking features.',
    caseStudyUrl: '/contact',
    type: 'laptop',
    screenTag: 'RevUp',
    screenHeadline: 'Ride Your Next Adventure',
    screenTheme: 'bike',
    wide: false,
  },
  {
    id: 'evara',
    badge: 'Branding & Design',
    title: 'Evara Interiors',
    desc: 'A premium website design for an interior design brand with elegant and modern UI.',
    caseStudyUrl: '/contact',
    type: 'laptop',
    screenTag: 'Evara',
    screenHeadline: 'Design Spaces That Inspire',
    screenTheme: 'interior',
    wide: false,
  },
  {
    id: 'mrsuppliers',
    badge: 'Digital Marketing',
    title: 'MR Suppliers',
    desc: 'Complete digital marketing and SEO solution to improve brand visibility and leads.',
    caseStudyUrl: '/contact',
    type: 'laptop',
    screenTag: 'MR Suppliers',
    screenHeadline: 'Quality Components for a Better Tomorrow',
    screenTheme: 'industrial',
    wide: false,
  },
];

export default function WorkPage() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);

  const handlePrev = () => {
    setActiveProjectIdx((prev) => (prev > 0 ? prev - 1 : featuredProjects.length - 1));
    const target = document.getElementById('featured-projects');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNext = () => {
    setActiveProjectIdx((prev) => (prev < featuredProjects.length - 1 ? prev + 1 : 0));
    const target = document.getElementById('featured-projects');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="work-page-root">
      {/* FIXED BACKGROUND VIDEO MATCHING ABOUT US & SERVICES PAGE */}
      <video
        className="work-fixed-video"
        autoPlay
        muted
        loop
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4"
      />

      <div className="work-content-wrapper">
        {/* =========================================================================
            1. HERO SECTION (REDESIGNED BASED ON ABOUT US & SERVICES PAGES)
            ========================================================================= */}
        <section className="work-hero-section">
          <div className="work-hero-content">
            <FadeUp delay={0.1} y={20}>
              <div className="work-pill-badge">
                <span className="dot" />
                <span>PORTFOLIO & CASE STUDIES</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.2} y={30}>
              <h1 className="work-hero-heading">
                Work That <br />
                <span className="gradient-text">Makes an Impact.</span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.35} y={24}>
              <p className="work-hero-subtext">
                We create digital experiences that solve real problems, strengthen brands, and drive
                business growth. From high-converting digital marketing and scalable web applications to
                custom software systems, explore our proven track record of client success.
              </p>
            </FadeUp>

            <FadeUp delay={0.5} y={20}>
              <div className="work-hero-actions">
                <Button href="#featured-projects" size="lg">
                  Explore Featured Work
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Start a Project
                </Button>
              </div>
            </FadeUp>

            {/* Frosted Stats Bar */}
            <FadeUp delay={0.65} y={20}>
              <div className="work-stats-row">
                <div className="work-stat-item">
                  <span className="work-stat-num">150+</span>
                  <span className="work-stat-label">Projects Delivered</span>
                </div>
                <div className="work-stat-divider" />
                <div className="work-stat-item">
                  <span className="work-stat-num">50+</span>
                  <span className="work-stat-label">Businesses Served</span>
                </div>
                <div className="work-stat-divider" />
                <div className="work-stat-item">
                  <span className="work-stat-num">98%</span>
                  <span className="work-stat-label">Client Satisfaction</span>
                </div>
                <div className="work-stat-divider" />
                <div className="work-stat-item">
                  <span className="work-stat-num">10+</span>
                  <span className="work-stat-label">Industries Served</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* =========================================================================
            2. FEATURED PROJECTS SECTION (02 / 08 —— EXACTLY AS REFERENCE IMAGE)
            ========================================================================= */}
        <section className="work-showcase-section work-theme-light" id="featured-projects">
          <div className="work-showcase-container">
            {/* Header Block with 02 / 08, Title, Subtitle, and Carousel Controls */}
            <div className="work-section-header">
              <div className="work-header-left">
                <div className="work-index-tag">002 / 003</div>
                <h2 className="work-display-heading">
                  Featured Projects <br />
                  That <span className="work-heading-muted">Make a Difference.</span>
                </h2>
              </div>

              <div className="work-header-right">
                <p className="work-lead-desc">
                  From startups to established enterprises, we build digital solutions that create real business value.
                </p>
                <div className="work-slider-nav">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="work-nav-arrow-btn"
                    aria-label="Previous project"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="work-nav-arrow-btn"
                    aria-label="Next project"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Projects Container: 1 Wide Card + 4 Grid Cards */}
            <div className="work-projects-showcase-layout">
              {/* TOP FULL-WIDTH CARD: GreenGlobe Agriculture */}
              <div className="work-card-outer work-card-wide">
                <a
                  href="/contact"
                  className="work-card-external-btn"
                  aria-label="Open GreenGlobe Agriculture Case Study"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>

                <div className="work-card-content-col">
                  <span className="work-category-pill">Web Development</span>
                  <h3 className="work-project-title">GreenGlobe Agriculture</h3>
                  <p className="work-project-summary">
                    A modern web application to manage agriculture operations, track data and improve productivity.
                  </p>
                  <a href="/contact" className="work-case-study-link">
                    <span>View Case Study</span>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                </div>

                <div className="work-card-visual-col work-visual-wide">
                  <div className="work-ambient-glow agri-glow" />
                  {/* Laptop Mockup */}
                  <div className="laptop-mockup-wrapper">
                    <div className="laptop-screen-frame">
                      <div className="laptop-camera-notch" />
                      <div className="laptop-screen-content theme-agri">
                        <div className="screen-navbar">
                          <div className="screen-logo agri-logo">
                            <span className="logo-leaf">🌱</span> GreenGlobe
                          </div>
                          <div className="screen-nav-links">
                            <span>Solutions</span>
                            <span>About</span>
                            <span>Insights</span>
                          </div>
                          <div className="screen-nav-cta agri-cta">Dashboard</div>
                        </div>
                        <div className="screen-body-agri">
                          <div className="screen-text-pane">
                            <h4 className="screen-main-headline">
                              Sustainable Agriculture for a Better Tomorrow
                            </h4>
                            <p className="screen-body-subtext">
                              Precision crop analytics and intelligent yield optimization.
                            </p>
                          </div>
                          <div className="screen-agri-illustration">
                            <div className="agri-sprout-visual">
                              <div className="sprout-leaf left-leaf" />
                              <div className="sprout-leaf right-leaf" />
                              <div className="sprout-stem" />
                              <div className="sprout-soil-base" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="laptop-base-chassis">
                      <div className="laptop-trackpad-notch" />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2x2 GRID FOR REMAINING 4 PROJECTS */}
              <div className="work-cards-grid-row">
                {/* CARD 2: TransitPay (Mobile App) */}
                <div className="work-card-outer work-card-grid-item">
                  <a
                    href="/contact"
                    className="work-card-external-btn"
                    aria-label="Open TransitPay Case Study"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>

                  <div className="work-card-content-col">
                    <span className="work-category-pill">Mobile App</span>
                    <h3 className="work-project-title">TransitPay</h3>
                    <p className="work-project-summary">
                      A React Native app for seamless public transport payments with QR scanning and wallet features.
                    </p>
                    <a href="/contact" className="work-case-study-link">
                      <span>View Case Study</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>

                  <div className="work-card-visual-col work-visual-phone">
                    <div className="work-ambient-glow phone-glow" />
                    {/* Phone Mockup */}
                    <div className="phone-mockup-wrapper">
                      <div className="phone-outer-shell">
                        <div className="phone-island-notch" />
                        <div className="phone-screen-content">
                          <div className="phone-status-bar">
                            <span>9:41</span>
                            <div className="phone-status-icons">●●●</div>
                          </div>
                          <div className="phone-app-header">
                            <span className="phone-brand-title">TransitPay</span>
                            <span className="phone-bell-icon">🔔</span>
                          </div>
                          <div className="phone-card-graphic">
                            <div className="phone-card-inner">
                              <span className="card-chip">💳</span>
                              <span className="card-balance">$48.20</span>
                              <span className="card-route">Express Metro Pass</span>
                            </div>
                          </div>
                          <div className="phone-bus-art">
                            <div className="phone-3d-bus">
                              <span className="bus-emoji">🚌</span>
                              <div className="bus-tag">Line 04 • Downtown</div>
                            </div>
                          </div>
                          <div className="phone-bottom-actions">
                            <div className="phone-action-btn active">QR Pay</div>
                            <div className="phone-action-btn">Top Up</div>
                            <div className="phone-action-btn">History</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 3: RevUp Bikes (Web Development) */}
                <div className="work-card-outer work-card-grid-item">
                  <a
                    href="/contact"
                    className="work-card-external-btn"
                    aria-label="Open RevUp Bikes Case Study"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>

                  <div className="work-card-content-col">
                    <span className="work-category-pill">Web Development</span>
                    <h3 className="work-project-title">RevUp Bikes</h3>
                    <p className="work-project-summary">
                      A bike rental platform built with WooCommerce, custom plugin and advanced booking features.
                    </p>
                    <a href="/contact" className="work-case-study-link">
                      <span>View Case Study</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>

                  <div className="work-card-visual-col work-visual-compact-laptop">
                    <div className="work-ambient-glow bike-glow" />
                    <div className="laptop-mockup-wrapper compact">
                      <div className="laptop-screen-frame">
                        <div className="laptop-camera-notch" />
                        <div className="laptop-screen-content theme-bike">
                          <div className="screen-navbar">
                            <div className="screen-logo bike-logo">REVUP</div>
                            <div className="screen-nav-links">
                              <span>Bikes</span>
                              <span>Tours</span>
                              <span>Rent</span>
                            </div>
                          </div>
                          <div className="screen-body-bike">
                            <div className="screen-text-pane">
                              <h4 className="screen-main-headline">
                                Ride Your <br />Next Adventure
                              </h4>
                              <div className="screen-badge-pill">Book Online →</div>
                            </div>
                            <div className="bike-art-pane">
                              <div className="bike-motorcycle-graphic">
                                <span className="bike-icon">🏍️</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="laptop-base-chassis">
                        <div className="laptop-trackpad-notch" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 4: Evara Interiors (Branding & Design) */}
                <div className="work-card-outer work-card-grid-item">
                  <a
                    href="/contact"
                    className="work-card-external-btn"
                    aria-label="Open Evara Interiors Case Study"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>

                  <div className="work-card-content-col">
                    <span className="work-category-pill">Branding & Design</span>
                    <h3 className="work-project-title">Evara Interiors</h3>
                    <p className="work-project-summary">
                      A premium website design for an interior design brand with elegant and modern UI.
                    </p>
                    <a href="/contact" className="work-case-study-link">
                      <span>View Case Study</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>

                  <div className="work-card-visual-col work-visual-compact-laptop">
                    <div className="work-ambient-glow interior-glow" />
                    <div className="laptop-mockup-wrapper compact">
                      <div className="laptop-screen-frame">
                        <div className="laptop-camera-notch" />
                        <div className="laptop-screen-content theme-interior">
                          <div className="screen-navbar">
                            <div className="screen-logo interior-logo">EVARA</div>
                            <div className="screen-nav-links">
                              <span>Portfolios</span>
                              <span>Studio</span>
                              <span>Journal</span>
                            </div>
                          </div>
                          <div className="screen-body-interior">
                            <div className="screen-text-pane">
                              <h4 className="screen-main-headline">
                                Design Spaces <br />That Inspire
                              </h4>
                              <p className="screen-body-subtext">Minimalist architecture.</p>
                            </div>
                            <div className="interior-art-pane">
                              <div className="interior-living-room">
                                <span className="interior-icon">🛋️</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="laptop-base-chassis">
                        <div className="laptop-trackpad-notch" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* CARD 5: MR Suppliers (Digital Marketing) */}
                <div className="work-card-outer work-card-grid-item">
                  <a
                    href="/contact"
                    className="work-card-external-btn"
                    aria-label="Open MR Suppliers Case Study"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>

                  <div className="work-card-content-col">
                    <span className="work-category-pill">Digital Marketing</span>
                    <h3 className="work-project-title">MR Suppliers</h3>
                    <p className="work-project-summary">
                      Complete digital marketing and SEO solution to improve brand visibility and leads.
                    </p>
                    <a href="/contact" className="work-case-study-link">
                      <span>View Case Study</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </a>
                  </div>

                  <div className="work-card-visual-col work-visual-compact-laptop">
                    <div className="work-ambient-glow industrial-glow" />
                    <div className="laptop-mockup-wrapper compact">
                      <div className="laptop-screen-frame">
                        <div className="laptop-camera-notch" />
                        <div className="laptop-screen-content theme-industrial">
                          <div className="screen-navbar">
                            <div className="screen-logo industrial-logo">MR SUPPLIERS</div>
                            <div className="screen-nav-links">
                              <span>Catalogue</span>
                              <span>Specs</span>
                              <span>OEM</span>
                            </div>
                          </div>
                          <div className="screen-body-industrial">
                            <div className="screen-text-pane">
                              <h4 className="screen-main-headline">
                                Quality Components <br />for a Better Tomorrow
                              </h4>
                              <p className="screen-body-subtext">Precision engineered systems.</p>
                            </div>
                            <div className="industrial-art-pane">
                              <div className="industrial-gears">
                                <span className="gears-icon">⚙️</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="laptop-base-chassis">
                        <div className="laptop-trackpad-notch" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. READY TO GROW YOUR BUSINESS? SECTION (SAME AS SERVICES PAGE)
            ========================================================================= */}
        <section className="work-showcase-section work-theme-light work-cta-section" id="ready-to-grow">
          {/* Background Video inside section on the right */}
          <div className="work-cta-video-wrapper">
            <video
              autoPlay
              muted
              loop
              playsInline
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4"
              className="work-cta-video-element"
            />
          </div>

          <div className="work-showcase-container work-cta-layout">
            <div className="work-cta-content-col">
              <div className="work-index-tag">003 / 003</div>
              <h2 className="work-display-heading">
                Ready to Grow <br />
                <span className="work-heading-muted">Your Business?</span>
              </h2>
              <p className="work-lead-desc">
                Let's discuss how our tailored services can help you automate workflows, scale customer acquisition, and build industry-leading digital products.
              </p>

              <div className="work-cta-actions-row">
                <Button href="/contact" size="lg">
                  Start a Conversation
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Explore Our Services
                </Button>
              </div>

              {/* Trust highlights under buttons */}
              <div className="work-cta-trust-strip">
                <span className="work-cta-trust-item">✓ Fast 24-Hour Response</span>
                <span className="work-cta-trust-dot">•</span>
                <span className="work-cta-trust-item">✓ NDA Protected</span>
                <span className="work-cta-trust-dot">•</span>
                <span className="work-cta-trust-item">✓ Free Discovery Session</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
