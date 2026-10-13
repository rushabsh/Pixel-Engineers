'use client';

import React from 'react';
import Button from '../../components/Button';
import FadeUp from '../../components/FadeUp';
import './services.css';

// Process Steps Data (Section 06)
const processSteps = [
  {
    step: '01',
    title: 'Discover',
    desc: 'Understand your goals, audience, and technical requirements.',
    deliverables: ['Stakeholder Workshops', 'Technical Feasibility Audit', 'Market & KPI Alignment'],
  },
  {
    step: '02',
    title: 'Plan',
    desc: 'Create an actionable strategy, sprint roadmap, and blueprints.',
    deliverables: ['Architecture Blueprint', 'Sprint Milestone Roadmap', 'UI/UX Wireframes & Scope'],
  },
  {
    step: '03',
    title: 'Develop',
    desc: 'Design, code, integrate, and test with speed and precision.',
    deliverables: ['Agile 2-Week Sprints', 'Automated QA & Code Review', 'Bi-Weekly Working Demos'],
  },
  {
    step: '04',
    title: 'Launch',
    desc: 'Deploy, monitor performance, and provide long-term growth support.',
    deliverables: ['Zero-Downtime Release', 'Performance & SEO Verification', 'Continuous SLA Support'],
  },
];

// Why Choose Data (Section 07)
const whyChooseFeatures = [
  {
    title: 'Result-Driven Approach',
    desc: 'Focused on real business growth and measurable conversion outcomes.',
    bullets: ['Data-backed decisions & KPIs', 'Weekly growth analytics reporting'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0e1217" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.45 1-1 1H7v4h10v-4h-2c-.55 0-1-.45-1-1v-2.34" />
        <path d="M6 4h12v6a6 6 0 0 1-12 0V4z" />
      </svg>
    ),
  },
  {
    title: 'Experienced Team',
    desc: 'Cross-functional specialists in marketing, design, and engineering.',
    bullets: ['Senior full-stack architects', 'Dedicated account leadership'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0e1217" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Tailored Solutions',
    desc: '100% bespoke strategies built around your distinct workflows.',
    bullets: ['Zero vendor lock-in code', 'Modular scalable architecture'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0e1217" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Partnership',
    desc: 'Ongoing maintenance, product evolution, and strategic tech advisory.',
    bullets: ['Guaranteed uptime SLAs', 'Continuous proactive improvements'],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0e1217" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <div className="services-page-root">
      {/* FIXED BACKGROUND VIDEO (Kept exactly as requested, black overlay removed) */}
      <video
        className="services-fixed-video"
        autoPlay
        muted
        loop
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4"
      />

      {/* 1. HERO SECTION (Untouched, exactly as requested) */}
      <section className="services-hero-section">
        <div className="services-hero-content-block">
          <FadeUp delay={0.1} y={20}>
            <div className="services-pill-badge">
              <span className="dot" />
              <span>OUR SERVICES</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} y={30}>
            <h1 className="services-hero-heading">
              Digital Solutions Built to <br />
              <span className="gradient-text">Grow Your Business</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.35} y={24}>
            <p className="services-hero-subtext">
              From powerful digital marketing strategies to custom software solutions, we help
              businesses build their online presence, attract the right audience, and turn ideas into
              scalable digital products.
            </p>
          </FadeUp>

          <FadeUp delay={0.5} y={20}>
            <div className="services-hero-actions">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
              <Button href="#digital-marketing" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={0.65} y={20}>
            <div className="services-hero-stats-row">
              <div className="services-hero-stat-item">
                <span className="services-hero-stat-num">150+</span>
                <span className="services-hero-stat-label">Projects Delivered</span>
              </div>
              <div className="services-hero-stat-divider" />
              <div className="services-hero-stat-item">
                <span className="services-hero-stat-num">98%</span>
                <span className="services-hero-stat-label">Client Satisfaction</span>
              </div>
              <div className="services-hero-stat-divider" />
              <div className="services-hero-stat-item">
                <span className="services-hero-stat-num">5+</span>
                <span className="services-hero-stat-label">Years of Experience</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. 02 / 08 DIGITAL MARKETING SERVICES */}
      <section className="srv-showcase-section srv-theme-light" id="digital-marketing">
        <div className="srv-showcase-container srv-media-left-layout">
          {/* Left: 3D Artwork */}
          <div className="srv-artwork-col">
            <div className="srv-artwork-frame">
              <img
                src="/images/Golden Neural Network Mesh.avif"
                alt="Digital Marketing AI Mesh"
                className="srv-artwork-img srv-glow-effect"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="srv-content-col">
            <div className="srv-index-tag">002 / 008</div>
            <h2 className="srv-display-heading">
              Digital Marketing <br />
              <span className="srv-heading-muted">Services.</span>
            </h2>
            <p className="srv-lead-desc">
              Data-driven marketing strategies to increase visibility, generate qualified leads, and drive profitable business growth.
            </p>

            <div className="srv-sub-split-row">
              {/* Checklist column */}
              <div className="srv-checklist-col">
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Search Engine Optimization (SEO & Local)</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Paid Advertising (Google, Meta & LinkedIn)</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Social Media Marketing & Brand Reach</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Content Marketing & Inbound Strategy</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Conversion Rate Optimization (CRO & Funnels)</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Performance Analytics & ROI Attribution</span>
                </div>
              </div>

              {/* Pitch column with dash, value badge, and link */}
              <div className="srv-pitch-col">
                <div className="srv-orange-dash" />
                <p className="srv-pitch-text">
                  We help brands reach the right audience with creative campaigns, optimized funnels, and measurable revenue outcomes.
                </p>

                {/* Highlight Impact Callout */}
                <div className="srv-callout-box">
                  <span className="srv-callout-tag">✦ PROVEN IMPACT</span>
                  <p className="srv-callout-text">
                    Average 3.4x Return on Ad Spend (ROAS) and +140% organic organic search visibility within 90 days.
                  </p>
                </div>

                <a href="/contact" className="srv-text-link">
                  Explore Marketing
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Deliverables Tags Strip */}
            <div className="srv-deliverables-strip">
              <span className="srv-strip-label">KEY DELIVERABLES:</span>
              <span className="srv-strip-tag">Technical SEO Audits</span>
              <span className="srv-strip-tag">PPC Campaign Management</span>
              <span className="srv-strip-tag">High-Converting Copywriting</span>
              <span className="srv-strip-tag">Live Analytics Dashboards</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 03 / 08 SOFTWARE DEVELOPMENT SERVICES */}
      <section className="srv-showcase-section srv-theme-light" id="software-development">
        <div className="srv-showcase-container srv-media-right-layout">
          {/* Left: Content */}
          <div className="srv-content-col">
            <div className="srv-index-tag">003 / 008</div>
            <h2 className="srv-display-heading">
              Software Development <br />
              <span className="srv-heading-muted">Services.</span>
            </h2>
            <p className="srv-lead-desc">
              Build powerful, scalable and custom digital solutions tailored precisely to your operational and customer needs.
            </p>

            <div className="srv-sub-split-row">
              {/* Checklist column */}
              <div className="srv-checklist-col">
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Custom Full-Stack Web Applications</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">CRM, ERP & Business Management Systems</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Multi-Tenant SaaS Architecture & Platforms</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Native & Cross-Platform Mobile Apps</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">RESTful & GraphQL API Integration</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Workflow Automation & Third-Party Sync</span>
                </div>
              </div>

              {/* Pitch column with dash and link */}
              <div className="srv-pitch-col">
                <div className="srv-orange-dash" />
                <p className="srv-pitch-text">
                  From innovative web applications to enterprise systems, we turn complex requirements into high-performance products built to scale.
                </p>

                {/* Highlight Impact Callout */}
                <div className="srv-callout-box">
                  <span className="srv-callout-tag">✦ ENGINEERING EXCELLENCE</span>
                  <p className="srv-callout-text">
                    Engineered with 99.9% uptime reliability, modular clean-code standards, and enterprise data security.
                  </p>
                </div>

                <a href="/contact" className="srv-text-link">
                  Explore Development
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Deliverables Tags Strip */}
            <div className="srv-deliverables-strip">
              <span className="srv-strip-label">TECH STACK:</span>
              <span className="srv-strip-tag">Next.js & React</span>
              <span className="srv-strip-tag">Node.js / Express</span>
              <span className="srv-strip-tag">PostgreSQL & MongoDB</span>
              <span className="srv-strip-tag">AWS & Docker</span>
              <span className="srv-strip-tag">React Native</span>
            </div>
          </div>

          {/* Right: 3D Artwork */}
          <div className="srv-artwork-col">
            <div className="srv-artwork-frame">
              <img
                src="/images/Faceted Gold-Trimmed Origami Sculpture.avif"
                alt="Software Development Origami Sculpture"
                className="srv-artwork-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. 04 / 08 BRANDING & CREATIVE DESIGN */}
      <section className="srv-showcase-section srv-theme-light" id="branding-design">
        <div className="srv-showcase-container srv-media-left-layout">
          {/* Left: 3D Artwork */}
          <div className="srv-artwork-col">
            <div className="srv-artwork-frame">
              <img
                src="/images/Marble Orb with Golden Shattered Lattice.avif"
                alt="Branding Design Lattice Orb"
                className="srv-artwork-img"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="srv-content-col">
            <div className="srv-index-tag">004 / 008</div>
            <h2 className="srv-display-heading">
              Branding &amp; <br />
              Creative <span className="srv-heading-muted">Design.</span>
            </h2>
            <p className="srv-lead-desc">
              Creative digital designs that make your brand stand out, captivate audiences, and elevate user experience.
            </p>

            <div className="srv-sub-split-row">
              {/* Checklist column */}
              <div className="srv-checklist-col">
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Brand Strategy & Complete Identity Systems</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">User Experience (UX) Research & Personas</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">UI Design, Wireframes & Screen Architecture</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Scalable Design Systems & Component Tokens</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Clickable Interactive Figma Prototypes</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Marketing Visuals, 3D Assets & Pitch Assets</span>
                </div>
              </div>

              {/* Pitch column with dash and link */}
              <div className="srv-pitch-col">
                <div className="srv-orange-dash" />
                <p className="srv-pitch-text">
                  We create engaging and memorable brand experiences that connect with your audience and turn casual visitors into loyal brand advocates.
                </p>

                {/* Highlight Impact Callout */}
                <div className="srv-callout-box">
                  <span className="srv-callout-tag">✦ HUMAN-CENTERED DESIGN</span>
                  <p className="srv-callout-text">
                    Tested for intuitive navigation, accessibility compliance (WCAG 2.1), and effortless mobile responsiveness.
                  </p>
                </div>

                <a href="/contact" className="srv-text-link">
                  Explore Design
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Deliverables Tags Strip */}
            <div className="srv-deliverables-strip">
              <span className="srv-strip-label">DESIGN ASSETS:</span>
              <span className="srv-strip-tag">Figma Master Files</span>
              <span className="srv-strip-tag">Brand Style Guide</span>
              <span className="srv-strip-tag">Component Libraries</span>
              <span className="srv-strip-tag">Vector Icon Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 05 / 08 IT CONSULTING SERVICES */}
      <section className="srv-showcase-section srv-theme-light" id="it-consulting">
        <div className="srv-showcase-container srv-media-right-layout">
          {/* Left: Content */}
          <div className="srv-content-col">
            <div className="srv-index-tag">005 / 008</div>
            <h2 className="srv-display-heading">
              IT Consulting <br />
              <span className="srv-heading-muted">Services.</span>
            </h2>
            <p className="srv-lead-desc">
              Strategic technical guidance and modern infrastructure solutions to streamline operations and future-proof your business.
            </p>

            <div className="srv-sub-split-row">
              {/* Checklist column */}
              <div className="srv-checklist-col">
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Enterprise Technology Roadmap & Strategy</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Digital Transformation & Legacy Modernization</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Cloud Migration & Cost Optimization (AWS/GCP)</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">Cybersecurity Audits & Data Governance</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">DevOps Automation & CI/CD Pipelines</span>
                </div>
                <div className="srv-checklist-item">
                  <span className="srv-arrow-icon-circle">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </span>
                  <span className="srv-checklist-label">24/7 Managed Infrastructure Support & SLA</span>
                </div>
              </div>

              {/* Pitch column with dash and link */}
              <div className="srv-pitch-col">
                <div className="srv-orange-dash" />
                <p className="srv-pitch-text">
                  We analyze, plan and implement the right technology stack to eliminate bottlenecks, cut operating overhead, and help you grow efficiently.
                </p>

                {/* Highlight Impact Callout */}
                <div className="srv-callout-box">
                  <span className="srv-callout-tag">✦ ADVISORY IMPACT</span>
                  <p className="srv-callout-text">
                    Average 35% reduction in cloud infrastructure spend and zero unplanned downtime across client deployments.
                  </p>
                </div>

                <a href="/contact" className="srv-text-link">
                  Explore Consulting
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Deliverables Tags Strip */}
            <div className="srv-deliverables-strip">
              <span className="srv-strip-label">CORE ADVISORY:</span>
              <span className="srv-strip-tag">Cloud Infrastructure</span>
              <span className="srv-strip-tag">DevOps CI/CD</span>
              <span className="srv-strip-tag">Disaster Recovery</span>
              <span className="srv-strip-tag">Security & Compliance</span>
            </div>
          </div>

          {/* Right: 3D Artwork */}
          <div className="srv-artwork-col">
            <div className="srv-artwork-frame">
              <img
                src="/images/Futuristic Molecular Network Sculpture.avif"
                alt="IT Consulting Molecular Network Sculpture"
                className="srv-artwork-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. 06 / 08 OUR PROCESS FROM IDEAS TO IMPACT */}
      <section className="srv-showcase-section srv-theme-light" id="our-process">
        <div className="srv-showcase-container srv-process-layout">
          {/* Left Column */}
          <div className="srv-process-left-col">
            <div className="srv-index-tag">006 / 008</div>
            <h2 className="srv-display-heading">
              Our Process <br />
              From Ideas to <span className="srv-heading-muted">Impact.</span>
            </h2>
            <p className="srv-lead-desc">
              A transparent, agile, and collaborative approach structured to minimize risk and deliver solutions that create genuine business value.
            </p>
            <Button href="/contact" size="md">
              Learn More
            </Button>
          </div>

          {/* Right Column: 4 Steps Horizontal Flow */}
          <div className="srv-process-right-col">
            <div className="srv-process-track">
              {processSteps.map((step, idx) => (
                <div key={step.step} className="srv-process-node">
                  <div className="srv-process-node-top">
                    <span className="srv-process-badge">{step.step}</span>
                    {idx < processSteps.length - 1 && (
                      <span className="srv-process-connector-dash">——</span>
                    )}
                  </div>
                  <h3 className="srv-process-title">{step.title}</h3>
                  <p className="srv-process-desc">{step.desc}</p>
                  <ul className="srv-process-deliverables-list">
                    {step.deliverables.map((item) => (
                      <li key={item} className="srv-process-deliverable-item">
                        <span className="srv-deliverable-dot">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. 07 / 08 WHY CHOOSE PIXEL ENGINEERS? */}
      <section className="srv-showcase-section srv-theme-light" id="why-choose-pixel">
        <div className="srv-showcase-container srv-why-layout">
          {/* Left Column: Heading */}
          <div className="srv-why-left-col">
            <div className="srv-index-tag">007 / 008</div>
            <h2 className="srv-display-heading">
              Why Choose <br />
              <span className="srv-heading-muted">Pixel Engineers?</span>
            </h2>
            <p className="srv-lead-desc">
              We combine strategy, creativity and engineering rigor to deliver measurable results for ambitious businesses across industries.
            </p>
          </div>

          {/* Right Column: 4 Columns with Divider Lines */}
          <div className="srv-why-right-col">
            <div className="srv-why-features-grid">
              {whyChooseFeatures.map((item) => (
                <div key={item.title} className="srv-why-feature-col">
                  <div className="srv-why-feature-icon">{item.icon}</div>
                  <h3 className="srv-why-feature-title">{item.title}</h3>
                  <p className="srv-why-feature-desc">{item.desc}</p>
                  <div className="srv-why-bullets">
                    {item.bullets.map((b) => (
                      <div key={b} className="srv-why-bullet-row">
                        <span className="srv-bullet-check">✓</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. 08 / 08 READY TO GROW YOUR BUSINESS? (WITH VIDEO) */}
      <section className="srv-showcase-section srv-theme-light srv-cta-section" id="ready-to-grow">
        {/* Background Video inside section on the right */}
        <div className="srv-cta-video-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4"
            className="srv-cta-video-element"
          />
        </div>

        <div className="srv-showcase-container srv-cta-layout">
          <div className="srv-cta-content-col">
            <div className="srv-index-tag">008 / 008</div>
            <h2 className="srv-display-heading">
              Ready to Grow <br />
              <span className="srv-heading-muted">Your Business?</span>
            </h2>
            <p className="srv-lead-desc">
              Let's discuss how our tailored services can help you automate workflows, scale customer acquisition, and build industry-leading digital products.
            </p>

            <div className="srv-cta-actions-row">
              <Button href="/contact" size="lg">
                Start a Conversation
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>

            {/* Trust highlights under buttons */}
            <div className="srv-cta-trust-strip">
              <span className="srv-cta-trust-item">✓ Fast 24-Hour Response</span>
              <span className="srv-cta-trust-dot">•</span>
              <span className="srv-cta-trust-item">✓ NDA Protected</span>
              <span className="srv-cta-trust-dot">•</span>
              <span className="srv-cta-trust-item">✓ Free Discovery Session</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
