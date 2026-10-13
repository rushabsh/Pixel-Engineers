'use client';

import React, { useState } from 'react';
import Button from './Button';
import './home-sections.css';

// 1. Innovative Company Logos
const trustedLogos = [
  {
    name: 'Shopify',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.3 6.6c-.1-.4-.4-.6-.8-.6-.3 0-2.4-.2-2.4-.2s-1.6-1.6-1.8-1.8c-.2-.2-.5-.3-.8-.3-.1 0-.3 0-.4.1-.1-1.3-.8-2.6-2.5-2.6-1.4 0-2.2.9-2.7 2.1-.8.2-1.4.5-1.5.5L4.7 18.2 14.8 20.3c.4.1.8 0 1.1-.2.4-.2.6-.6.7-1 .3-1.6 2.7-12.5 2.7-12.5zm-6.2-4c.9 0 1.2.9 1.3 1.8l-2.6.8c.2-1.3.7-2.6 1.3-2.6zm-2.4 2.1c.3-.1.6-.2 1-.3l-1.3 6.6-2-1.2 2.3-5.1zm4.4 12.8L5.7 15.6l1.6-9.2c.5-.2 2.5-.8 2.5-.8l1.4 7.5 3.9-7.5s2 .2 2.2.2c0 0-2.2 11.7-2.2 11.7z" />
      </svg>
    ),
  },
  {
    name: 'Webflow',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.8 7.3c-.7 1.9-2 3.4-3.5 4.3.1-.9.2-1.8.2-2.7 0-1.8-.7-3.4-2-4.5.3 1.6.4 3.2.4 4.8 0 1.5-.2 3.1-.7 4.5-1.3-.9-2.4-2.1-3.2-3.6-.8 2.4-1.1 4.9-1 7.4-1.2-1.5-2-3.3-2.3-5.3-.3 1.9-.1 3.9.6 5.7.7 1.8 2 3.4 3.6 4.4 1.7 1 3.7 1.5 5.7 1.2 2-.3 3.9-1.3 5.3-2.8 1.4-1.5 2.2-3.5 2.3-5.6 0-2.9-1.2-5.7-3.4-7.8z" />
      </svg>
    ),
  },
  {
    name: 'AWS',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5h-2v-5h2v5zm4 0h-2v-5h2v5zm2-7H7V8h10v1.5z" />
      </svg>
    ),
  },
  {
    name: 'Google',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.053 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    name: 'Meta',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-1.8 11.2c-1.3 0-2.4-.9-2.7-2.2-.3-1.3.4-2.6 1.7-3 1.3-.4 2.6.4 3 1.7.3 1.3-.4 2.6-1.7 3 0 .3-.1.5-.3.5zm3.6 0c-.2 0-.3-.2-.3-.5.4-.4 1.1-1.7.8-3-.4-1.3-1.7-2.1-3-1.7-1.3.4-2 1.7-1.7 3 .3 1.3 1.4 2.2 2.7 2.2z" />
      </svg>
    ),
  },
  {
    name: 'Microsoft',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.4 11.4H2.4V2.4h9v9zm10.2 0h-9V2.4h9v9zM11.4 21.6H2.4v-9h9v9zm10.2 0h-9v-9h9v9z" />
      </svg>
    ),
  },
];

// 2. Services Cards
const homeServices = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    desc: 'Data-driven strategies to increase visibility and generate leads.',
    image: '/images/Faceted Gold-Trimmed Origami Sculpture.avif',
  },
  {
    id: 'web-app',
    title: 'Web & App Development',
    desc: 'Custom websites and applications built for performance and scale.',
    image: '/images/Golden Neural Network Mesh.avif',
  },
  {
    id: 'branding',
    title: 'Branding & Creative Design',
    desc: 'Creative designs that make your brand stand out in a competitive market.',
    image: '/images/Marble Orb with Golden Shattered Lattice.avif',
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting',
    desc: 'Strategic guidance and technology solutions to streamline your business.',
    image: '/images/Luxury Mosaic Tech Globe.avif',
  },
];

// 3. Process Steps (01 to 05)
const processFlowSteps = [
  {
    num: '01',
    title: 'Discover',
    desc: 'Understand your business goals.',
  },
  {
    num: '02',
    title: 'Plan',
    desc: 'Create a strategy tailored to your needs.',
  },
  {
    num: '03',
    title: 'Design',
    desc: 'Build with creativity and precision.',
  },
  {
    num: '04',
    title: 'Develop',
    desc: 'Turn ideas into high-performance solutions.',
  },
  {
    num: '05',
    title: 'Launch',
    desc: 'Deploy, optimize and ensure success.',
  },
];

// 4. Industries
const industriesList = [
  {
    name: 'Agriculture',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-9" />
        <path d="M9 13a4.5 4.5 0 0 0-4.5-4.5c-.8 0-1.5.2-2.1.6 1.8 1.8 2.6 4.2 2.6 6.9" />
        <path d="M15 13a4.5 4.5 0 0 1 4.5-4.5c.8 0 1.5.2 2.1.6-1.8 1.8-2.6 4.2-2.6 6.9" />
      </svg>
    ),
  },
  {
    name: 'Healthcare',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    name: 'Education',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    name: 'Real Estate',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: 'Retail & E-commerce',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    name: 'Manufacturing',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    name: 'Automotive',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C1.4 11.2 1 12 1 13v3c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
];

// 5. Testimonials
const testimonials = [
  {
    quote:
      'Pixel Engineers delivered an exceptional website for our business. Their team understood our requirements and provided a solution that exceeded our expectations.',
    name: 'Rahul Sharma',
    role: 'Founder, GreenGlobe Agriculture',
    avatar: '/images/avatar-1-1.png',
  },
  {
    quote:
      'Great experience working with Pixel Engineers. They delivered a high-quality solution on time and provided excellent support.',
    name: 'Priya Mehta',
    role: 'CEO, Evara Interiors',
    avatar: '/images/avatar-11.png',
  },
];

export default function HomeSections() {
  const [activeTestimonialDot, setActiveTestimonialDot] = useState(0);

  return (
    <div className="home-sections-root">
      {/* =========================================================================
          0. TRUSTED BY INNOVATIVE COMPANIES (LOGO MARQUEE STRIP)
          ========================================================================= */}
      <section className="home-strip-section" id="trusted-by">
        <div className="home-container">
          <p className="home-strip-tag">TRUSTED BY INNOVATIVE COMPANIES</p>
          <div className="home-strip-logos-row">
            {trustedLogos.map((item) => (
              <div key={item.name} className="home-strip-logo-item">
                <span className="home-logo-svg">{item.icon}</span>
                <span className="home-logo-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          1. OUR SERVICES: DIGITAL SOLUTIONS BUILT AROUND YOUR GOALS
          ========================================================================= */}
      <section className="home-showcase-section" id="services">
        <div className="home-container">
          <div className="home-section-header">
            <div className="home-header-left">
              <div className="home-index-tag">001 / 007</div>
              <h2 className="home-display-heading">
                Digital Solutions <br />
                Built Around <span className="home-heading-muted">Your Goals.</span>
              </h2>
            </div>
            <div className="home-header-right">
              <p className="home-lead-desc">
                From digital marketing to custom software development, we provide end-to-end solutions to help businesses grow in the digital world.
              </p>
              <Button href="/services" size="md">
                Explore Services
              </Button>
            </div>
          </div>

          {/* 4 Services Grid Columns */}
          <div className="home-services-grid">
            {homeServices.map((service) => (
              <div key={service.id} className="home-service-card">
                <div className="service-card-art-box">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-card-art-img"
                  />
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <a href="/services" className="service-card-bottom-btn" aria-label={`Learn more about ${service.title}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FEATURED WORK: IDEAS TRANSFORMED INTO REAL IMPACT
          ========================================================================= */}
      <section className="home-showcase-section" id="featured-work">
        <div className="home-container">
          <div className="home-section-header">
            <div className="home-header-left">
              <div className="home-index-tag">002 / 007</div>
              <h2 className="home-display-heading">
                Ideas Transformed <br />
                Into <span className="home-heading-muted">Real Impact.</span>
              </h2>
            </div>
            <div className="home-header-right">
              <p className="home-lead-desc">
                Explore how we've helped businesses turn ideas into digital solutions that create measurable value.
              </p>
              <Button href="/work" size="md">
                View All Work
              </Button>
            </div>
          </div>

          {/* Featured Showcase Card (GreenGlobe Agriculture Laptop Mockup) */}
          <div className="home-featured-card">
            <a href="/work" className="home-featured-external-link" aria-label="View case study">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            <div className="home-featured-left">
              <span className="home-featured-badge">Web Development</span>
              <h3 className="home-featured-title">GreenGlobe Agriculture</h3>
              <p className="home-featured-summary">
                A modern web application to manage agriculture operations, track data and improve productivity.
              </p>
              <Button href="/work" variant="secondary" size="md">
                View Case Study
              </Button>

              {/* Progress counter */}
              <div className="home-featured-counter-row">
                <span className="counter-text">01 / 05</span>
                <div className="counter-progress-bar">
                  <div className="counter-progress-fill" />
                </div>
              </div>
            </div>

            <div className="home-featured-right">
              {/* Laptop Mockup */}
              <div className="home-laptop-wrapper">
                <div className="home-laptop-screen">
                  <div className="home-laptop-camera" />
                  <div className="home-laptop-display">
                    <div className="laptop-site-navbar">
                      <span className="laptop-site-brand">🌱 GreenGlobe</span>
                      <div className="laptop-site-navlinks">
                        <span>Solutions</span>
                        <span>About</span>
                        <span>Insights</span>
                      </div>
                    </div>
                    <div className="laptop-site-body">
                      <div className="laptop-site-copy">
                        <h4 className="laptop-site-h4">Sustainable Agriculture for a Better Tomorrow</h4>
                        <div className="laptop-site-button">Explore Solutions</div>
                      </div>
                      <div className="laptop-site-graphic">
                        <div className="sprout-avatar-glow" />
                        <span className="sprout-symbol">🌱</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-laptop-base" />
              </div>

              {/* Card Controls */}
              <div className="home-featured-controls">
                <button type="button" className="home-ctrl-btn" aria-label="Previous project">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button type="button" className="home-ctrl-btn" aria-label="Next project">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR PROCESS: FROM IDEAS TO DIGITAL IMPACT
          ========================================================================= */}
      <section className="home-showcase-section home-process-section" id="process">
        {/* Background 3D mesh artwork on the right */}

        <div className="home-container">
          <div className="home-process-header">
            <div className="home-index-tag">003 / 007</div>
            <h2 className="home-display-heading">
              From Ideas to <br />
              Digital <span className="home-heading-muted">Impact.</span>
            </h2>
            <p className="home-lead-desc" style={{ maxWidth: '520px', marginTop: '16px' }}>
              A clear and collaborative approach to deliver solutions that create real business value.
            </p>
          </div>

          {/* 5-Step Process Timeline Flow */}
          <div className="home-process-flow-track">
            {processFlowSteps.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="home-process-step-node">
                  <div className="step-circle-badge">
                    <span>{step.num}</span>
                  </div>
                  <h3 className="step-node-title">{step.title}</h3>
                  <p className="step-node-desc">{step.desc}</p>
                </div>
                {idx < processFlowSteps.length - 1 && (
                  <div className="step-connector-line">
                    <span className="step-connector-dot" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INDUSTRIES WE SERVE: DIGITAL SOLUTIONS FOR EVERY INDUSTRY
          ========================================================================= */}
      <section className="home-showcase-section" id="industries">
        <div className="home-container">
          <div className="home-section-header">
            <div className="home-header-left">
              <div className="home-index-tag">004 / 007</div>
              <h2 className="home-display-heading">
                Digital Solutions <br />
                for <span className="home-heading-muted">Every Industry.</span>
              </h2>
            </div>
            <div className="home-header-right">
              <p className="home-lead-desc">
                We deliver tailored digital solutions across multiple industries, helping businesses overcome challenges and achieve growth.
              </p>
              <div className="home-slider-nav-arrows">
                <button type="button" className="home-ctrl-btn" aria-label="Previous industry">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button type="button" className="home-ctrl-btn" aria-label="Next industry">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Industries Horizontal Strip */}
          <div className="home-industries-grid">
            {industriesList.map((ind) => (
              <div key={ind.name} className="home-industry-item">
                <div className="industry-icon-box">{ind.icon}</div>
                <span className="industry-label">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. NUMBERS THAT TELL OUR STORY: BUILT ON EXPERIENCE. DRIVEN BY RESULTS.
          ========================================================================= */}
      <section className="home-showcase-section home-numbers-section" id="numbers">
        <div className="home-container home-numbers-layout">
          {/* Left Column: Heading */}
          <div className="home-numbers-left">
            <div className="home-index-tag">005 / 007</div>
            <h2 className="home-display-heading">
              Built on Experience. <br />
              <span className="home-heading-muted">Driven by Results.</span>
            </h2>
          </div>

          {/* Right Column: 4 Stat Columns */}
          <div className="home-numbers-right">
            <div className="home-stat-metric-col">
              <h3 className="metric-big-number">150+</h3>
              <p className="metric-caption">Projects Delivered</p>
            </div>
            <div className="home-stat-divider" />

            <div className="home-stat-metric-col">
              <h3 className="metric-big-number">50+</h3>
              <p className="metric-caption">Global Clients</p>
            </div>
            <div className="home-stat-divider" />

            <div className="home-stat-metric-col">
              <h3 className="metric-big-number">98%</h3>
              <p className="metric-caption">Client Satisfaction</p>
            </div>
            <div className="home-stat-divider" />

            <div className="home-stat-metric-col">
              <h3 className="metric-big-number">10+</h3>
              <p className="metric-caption">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHAT OUR CLIENTS SAY (TESTIMONIALS)
          ========================================================================= */}
      <section className="home-showcase-section" id="testimonials">
        <div className="home-container">
          <div className="home-section-header">
            <div className="home-header-left">
              <div className="home-index-tag">006 / 007</div>
              <h2 className="home-display-heading">
                Trusted by Businesses <br />
                <span className="home-heading-muted">Worldwide.</span>
              </h2>
            </div>
            <div className="home-header-right">
              <p className="home-lead-desc">
                We take pride in delivering quality, innovation and measurable results for our clients.
              </p>
              <div className="home-slider-nav-arrows">
                <button type="button" className="home-ctrl-btn" aria-label="Previous review">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button type="button" className="home-ctrl-btn" aria-label="Next review">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials 2-Column Split: 3D Artwork on Left, Cards on Right */}
          <div className="home-testimonials-layout">
            <div className="testimonials-art-col">
              <img
                src="/images/Golden Neural Network Mesh.avif"
                alt="3D Sculpture Client Trust"
                className="testimonials-art-img"
              />
            </div>

            <div className="testimonials-cards-col">
              <div className="testimonials-grid-row">
                {testimonials.map((item, idx) => (
                  <div key={idx} className="home-testimonial-card">
                    <span className="testimonial-quote-mark">“</span>
                    <p className="testimonial-quote-text">{item.quote}</p>
                    <div className="testimonial-author-row">
                      <div className="testimonial-avatar-wrap">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="testimonial-avatar-img"
                        />
                      </div>
                      <div className="testimonial-author-meta">
                        <h4 className="author-name">{item.name}</h4>
                        <p className="author-role">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots indicator */}
              <div className="testimonial-dots-row">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <button
                    key={dot}
                    type="button"
                    onClick={() => setActiveTestimonialDot(dot)}
                    className={`testimonial-dot ${activeTestimonialDot === dot ? 'active' : ''}`}
                    aria-label={`Go to slide ${dot + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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
            <div className="srv-index-tag">007 / 007</div>
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
