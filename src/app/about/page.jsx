"use client";

import React from "react";
import Button from "../../components/Button";
import FadeUp from "../../components/FadeUp";
import CtaSection from "../../components/CtaSection";
import "./about.css";

// 2. Who We Are - Highlight Cards Data
const whoHighlights = [
  {
    num: "01",
    title: "Strategy",
    desc: "We understand your business before we start building.",
  },
  {
    num: "02",
    title: "Creativity",
    desc: "We create experiences that are meaningful, memorable, and engaging.",
  },
  {
    num: "03",
    title: "Technology",
    desc: "We use modern technologies to build reliable and scalable solutions.",
  },
  {
    num: "04",
    title: "Growth",
    desc: "Everything we do is focused on creating measurable business value.",
  },
];

// 3. What We Offer Cards Data (.avif assets)
const whatWeOfferCards = [
  {
    id: "ai-strategy",
    image: "/images/Luxury Mosaic Tech Globe.avif",
    title: "AI Strategy",
    desc: "Turn your ideas into real world AI opportunities.",
  },
  {
    id: "custom-dev",
    image: "/images/Faceted Gold-Trimmed Origami Sculpture.avif",
    title: "Custom Development",
    desc: "Build tailored AI products and automation flows.",
  },
  {
    id: "integration",
    image: "/images/Futuristic Molecular Network Sculpture.avif",
    title: "Integration & Automation",
    desc: "Seamlessly connect your systems and workflows.",
  },
  {
    id: "ongoing-support",
    image: "/images/Marble Orb with Golden Shattered Lattice.avif",
    title: "Ongoing Support",
    desc: "Continuous improvement for long-term growth.",
  },
  {
    id: "enterprise-ai",
    image: "/images/Golden Neural Network Mesh.avif",
    title: "Enterprise AI Solutions",
    desc: "Deploy robust neural architectures built to scale with your business.",
  },
];

// 5. The Principles Behind Everything We Do Data
const principlesCards = [
  {
    id: "client-first",
    title: "Client First",
    desc: "Your success is our priority.",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0e1217"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2a3 3 0 0 1 3 3v1a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" />
        <path d="M21.5 8.5a3 3 0 0 1-.8 4.2l-.9.5a3 3 0 0 1-3-5.2l.9-.5a3 3 0 0 1 3.8 1z" />
        <path d="M18 21a3 3 0 0 1-4.2-.8l-.5-.9a3 3 0 0 1 5.2-3l.5.9a3 3 0 0 1-1 3.8z" />
        <path d="M6 21a3 3 0 0 1-1-3.8l.5-.9a3 3 0 0 1 5.2 3l-.5.9a3 3 0 0 1-4.2.8z" />
        <path d="M2.5 8.5a3 3 0 0 1 3.8-1l.9.5a3 3 0 0 1-3 5.2l-.9-.5a3 3 0 0 1-.8-4.2z" />
      </svg>
    ),
  },
  {
    id: "innovation",
    title: "Innovation",
    desc: "We embrace change and explore new possibilities.",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0e1217"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="2.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          transform="rotate(30 12 12)"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="10"
          ry="4.5"
          transform="rotate(-30 12 12)"
        />
      </svg>
    ),
  },
  {
    id: "quality",
    title: "Quality",
    desc: "We deliver reliable, scalable and high-performance solutions.",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0e1217"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L4 5v6c0 5.5 3.5 10.7 8 12 4.5-1.3 8-6.5 8-12V5l-8-3z" />
        <path d="M12 7l3 3-3 3-3-3 3-3z" />
        <circle cx="12" cy="10" r="1.5" />
      </svg>
    ),
  },
  {
    id: "transparency",
    title: "Transparency",
    desc: "Open communication at every step.",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0e1217"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="13" height="13" rx="3" />
        <path d="M8 8h11a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-3" />
        <circle cx="9.5" cy="9.5" r="2" />
      </svg>
    ),
  },
  {
    id: "integrity",
    title: "Integrity",
    desc: "We do what's right, always.",
    icon: (
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#0e1217"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.5 6.5C4 9 4 12 6.5 14.5L12 12L6.5 6.5Z" />
        <path d="M17.5 17.5C20 15 20 12 17.5 9.5L12 12L17.5 17.5Z" />
        <path d="M6.5 17.5C9 20 12 20 14.5 17.5L12 12L6.5 17.5Z" />
        <path d="M17.5 6.5C15 4 12 4 9.5 6.5L12 12L17.5 6.5Z" />
        <circle cx="12" cy="12" r="1.5" />
      </svg>
    ),
  },
];

// 5. Values Data
const values = [
  {
    num: "01",
    title: "Client First",
    desc: "We listen, understand, and build around our clients' real business goals.",
  },
  {
    num: "02",
    title: "Innovation",
    desc: "We continuously explore better ideas, modern technologies, and smarter ways to solve problems.",
  },
  {
    num: "03",
    title: "Quality",
    desc: "We believe great work comes from attention to detail, thoughtful design, and strong execution.",
  },
  {
    num: "04",
    title: "Transparency",
    desc: "We communicate clearly, set realistic expectations, and keep our process transparent.",
  },
  {
    num: "05",
    title: "Integrity",
    desc: "We build relationships based on honesty, accountability, and trust.",
  },
  {
    num: "06",
    title: "Continuous Growth",
    desc: "We believe businesses, technology, and people should never stop evolving.",
  },
];

// 6. What Makes Us Different Data
const differences = [
  {
    title: "Business Understanding",
    desc: "We focus on understanding your goals, challenges, customers, and market before recommending a solution.",
  },
  {
    title: "One Digital Partner",
    desc: "Marketing, design, development, and technology under one roof.",
  },
  {
    title: "Tailored Solutions",
    desc: "We don't believe in one-size-fits-all solutions. Every strategy and product is built around your specific needs.",
  },
  {
    title: "Modern Approach",
    desc: "We combine modern technology, data, design, and creative thinking to create better outcomes.",
  },
  {
    title: "Long-Term Thinking",
    desc: "We build solutions that can evolve as your business grows.",
  },
  {
    title: "Results Driven",
    desc: "We measure success by the value we create for your business, not just by project completion.",
  },
];

// 7. How We Work Data
const approachSteps = [
  {
    step: "01",
    title: "Understand",
    desc: "We start by understanding your business, audience, challenges, and objectives.",
  },
  {
    step: "02",
    title: "Think",
    desc: "We research, analyze, and develop a strategy that aligns with your goals.",
  },
  {
    step: "03",
    title: "Create",
    desc: "Our designers, marketers, and developers turn the strategy into a practical digital solution.",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "We build, test, launch, and optimize with attention to quality and performance.",
  },
  {
    step: "05",
    title: "Grow",
    desc: "We continue analyzing results and identifying opportunities for improvement and growth.",
  },
];

// 8. Expertise 3-Column Data
const expertiseColumns = [
  {
    title: "Marketing",
    desc: "Data-driven strategies designed to increase visibility, engagement, leads, and conversions.",
    tags: "SEO · Paid Ads · Social Media · Content · Lead Generation",
  },
  {
    title: "Design",
    desc: "Thoughtful digital experiences that make brands and products easier to understand and use.",
    tags: "UI/UX · Branding · Web Design · Creative",
  },
  {
    title: "Technology",
    desc: "Scalable digital products and software designed to solve real business problems.",
    tags: "Web Apps · Mobile Apps · SaaS · CRM · APIs",
  },
];

// 9. Technology Mindset Data
const techPrinciples = [
  {
    title: "Scalable",
    desc: "Built to grow with your business.",
  },
  {
    title: "Secure",
    desc: "Designed with reliability and security in mind.",
  },
  {
    title: "Flexible",
    desc: "Easy to improve and adapt as requirements evolve.",
  },
  {
    title: "Performance Focused",
    desc: "Optimized for speed, usability, and efficiency.",
  },
];

// 10. Our Journey Data
const journeyMilestones = [
  {
    num: "01",
    title: "Started With an Idea",
    desc: "We began with a simple belief — businesses deserve better digital solutions.",
  },
  {
    num: "02",
    title: "Expanded Our Expertise",
    desc: "We brought marketing, design, and technology together to provide businesses with a complete digital partner.",
  },
  {
    num: "03",
    title: "Built Digital Products",
    desc: "We expanded into custom software, web applications, dashboards, automation, and scalable digital platforms.",
  },
  {
    num: "04",
    title: "Growing With Our Clients",
    desc: "Today, we continue helping businesses transform ideas into digital experiences that create meaningful results.",
  },
];

// 11. Numbers That Matter Data
const impactNumbers = [
  { num: "150+", label: "Projects Delivered" },
  { num: "50+", label: "Businesses Served" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "5+", label: "Years of Experience" },
  { num: "10+", label: "Industries Served" },
  { num: "15+", label: "Digital Solutions" },
];

export default function AboutPage() {
  const offerSliderRef = React.useRef(null);

  const scrollOfferLeft = () => {
    if (offerSliderRef.current) {
      offerSliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollOfferRight = () => {
    if (offerSliderRef.current) {
      offerSliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <div className="about-page-root">
      {/* FIXED BACKGROUND VIDEO MATCHING SERVICES PAGE */}
      <video
        className="about-fixed-video"
        autoPlay
        muted
        loop
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4"
      />

      {/* 1. HERO SECTION */}
      <section className="about-hero-section">
        <div className="about-hero-content-block">
          <FadeUp delay={0.1} y={20}>
            <div className="about-pill-badge">
              <span className="dot" />
              <span>ABOUT US</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} y={30}>
            <h1 className="about-hero-heading">
              We Build Digital Experiences That
              <span className="gradient-text">Move Businesses Forward.</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.35} y={24}>
            <p className="about-hero-subtext">
              We are a digital marketing and software development agency helping
              businesses turn ideas into impactful digital experiences. From
              building powerful software products to creating growth-driven
              marketing strategies, we combine creativity, technology, and
              strategy to deliver solutions that create real business value.
            </p>
          </FadeUp>

          <FadeUp delay={0.5} y={20}>
            <div className="about-hero-actions">
              <Button href="/contact" size="lg">
                Start a Conversation
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={0.65} y={20}>
            <div className="about-hero-stats-row">
              <div className="about-hero-stat-item">
                <span className="about-hero-stat-num">150+</span>
                <span className="about-hero-stat-label">
                  Projects Delivered
                </span>
              </div>
              <div className="about-hero-stat-divider" />
              <div className="about-hero-stat-item">
                <span className="about-hero-stat-num">50+</span>
                <span className="about-hero-stat-label">Businesses Served</span>
              </div>
              <div className="about-hero-stat-divider" />
              <div className="about-hero-stat-item">
                <span className="about-hero-stat-num">98%</span>
                <span className="about-hero-stat-label">
                  Client Satisfaction
                </span>
              </div>
              <div className="about-hero-stat-divider" />
              <div className="about-hero-stat-item">
                <span className="about-hero-stat-num">5+</span>
                <span className="about-hero-stat-label">
                  Years of Experience
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="who-section-fullwidth" id="who-we-are">
        <div className="who-showcase">
          {/* Image */}
          <div className="who-image-area">
            <img
              src="/images/About-us.avif"
              alt="A Digital Partner for Modern Businesses"
              className="who-backdrop-img"
            />

            <div className="who-image-overlay" />

            <div className="who-image-label">
              <span>WHO WE ARE</span>
              <span>02 — 09</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="who-content">
            <div className="who-top-row">
              <div className="who-index-tag">002 / 009</div>

              <span className="who-top-note">
                DIGITAL • TECHNOLOGY • GROWTH
              </span>
            </div>

            <div className="who-heading-area">
              <h2 className="who-display-heading">
                A DIGITAL PARTNER <br />
                FOR <span className="who-display-muted">MODERN</span> <br />
                <span className="who-display-muted">BUSINESSES.</span>
              </h2>

              <div className="who-heading-side">
                <span className="who-side-line" />

                <p className="who-header-note">
                  More than a vendor — we're your long-term technology partner,
                  committed to real outcomes.
                </p>
              </div>
            </div>

            <div className="who-description-row">
              <p className="who-body-copy">
                We combine strategy, creativity and technology to help
                businesses unlock their next stage of growth with AI-driven
                solutions.
              </p>

              <div className="who-explore">
                <span>EXPLORE OUR STORY</span>
                <span className="who-explore-arrow">↗</span>
              </div>
            </div>

            {/* Stats */}
            <div className="who-stats-strip">
              <div className="who-stat-col">
                <span className="who-stat-index">01</span>
                <span className="who-stat-digit">150+</span>
                <span className="who-stat-text">Projects Delivered</span>
              </div>

              <div className="who-stat-col">
                <span className="who-stat-index">02</span>
                <span className="who-stat-digit">50+</span>
                <span className="who-stat-text">Global Clients</span>
              </div>

              <div className="who-stat-col">
                <span className="who-stat-index">03</span>
                <span className="who-stat-digit">98%</span>
                <span className="who-stat-text">Client Satisfaction</span>
              </div>

              <div className="who-stat-col">
                <span className="who-stat-index">04</span>
                <span className="who-stat-digit">10+</span>
                <span className="who-stat-text">Industries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE WHAT WE OFFER */}
      <section className="offer-section-fullwidth" id="what-we-offer">
        <div className="offer-header-row">
          <div className="offer-header-left">
            <div className="offer-index-tag">003 / 009</div>
            <h2 className="offer-display-heading">
              EXPLORE <br />
              WHAT WE OFFER.
            </h2>
          </div>
          <div className="offer-header-right">
            <p className="offer-header-note">
              We provide end-to-end AI automation services
              <br />
              in one place — from strategy to execution.
            </p>
            <div className="offer-nav-btns">
              <button
                type="button"
                className="offer-nav-btn"
                onClick={scrollOfferLeft}
                aria-label="Previous offers"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
              <button
                type="button"
                className="offer-nav-btn"
                onClick={scrollOfferRight}
                aria-label="Next offers"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="offer-cards-track" ref={offerSliderRef}>
          {whatWeOfferCards.map((card) => (
            <div key={card.id} className="offer-card">
              <div className="offer-card-media">
                <img
                  src={card.image}
                  alt={card.title}
                  className="offer-card-img"
                />
              </div>
              <div className="offer-card-body">
                <h3 className="offer-card-title">{card.title}</h3>
                <p className="offer-card-desc">{card.desc}</p>
                <a
                  href="/services"
                  className="offer-card-btn"
                  aria-label={`Explore ${card.title}`}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MAKING DIGITAL TRANSFORMATION SIMPLER */}
      <section className="transform-section" id="digital-transformation">
        <div className="transform-container">
          {/* Top Meta */}
          <div className="transform-meta">
            <span>004 / 009</span>
            <span>DIGITAL TRANSFORMATION</span>
          </div>

          {/* Main Content */}
          <div className="transform-main">
            {/* Decorative Number */}
            <div className="transform-bg-number">04</div>

            <div className="transform-grid">
              {/* Left — Typography */}
              <div className="transform-copy">
                <div className="transform-eyebrow">
                  <span className="transform-eyebrow-line"></span>
                  <span>REDEFINING POSSIBILITY</span>
                </div>

                <h2 className="transform-heading">
                  MAKING DIGITAL
                  <br />
                  <span>TRANSFORMATION</span>
                  <br />
                  SIMPLER<span className="transform-dot">.</span>
                </h2>

                <div className="transform-description-wrap">
                  <p className="transform-description">
                    We simplify complex technology with human-centered design
                    and AI-powered solutions that deliver real business value.
                  </p>

                  <div className="transform-button">
                    <Button href="/contact" size="md">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>

              {/* Center — Image */}
              <div className="transform-visual">
                <div className="transform-image-wrap">
                  <img
                    src="/images/Golden Neural Network Mesh.avif"
                    alt="Digital Transformation AI Neural Mesh"
                    className="transform-image"
                  />

                  <div className="transform-image-overlay"></div>

                  <div className="transform-image-top">AI / 01</div>

                  <div className="transform-image-bottom">
                    <span>INTELLIGENCE</span>
                    <span>SYSTEMS</span>
                  </div>

                  <div className="transform-ai-marker">AI</div>
                </div>
              </div>

              {/* Right — Process */}
              <div className="transform-process">
                <div className="transform-process-header">
                  <span>PROCESS</span>
                  <span>03 STEPS</span>
                </div>

                <div className="transform-timeline">
                  {/* Step 01 */}
                  <div className="transform-step transform-step-active">
                    <span className="transform-step-dot"></span>

                    <div className="transform-step-content">
                      <span className="transform-step-number">01</span>

                      <h3>Strategy & Discovery</h3>

                      <p>Understand your goals and identify opportunities.</p>
                    </div>
                  </div>

                  {/* Step 02 */}
                  <div className="transform-step">
                    <span className="transform-step-dot"></span>

                    <div className="transform-step-content">
                      <span className="transform-step-number">02</span>

                      <h3>Build & Integrate</h3>

                      <p>Develop and connect AI solutions seamlessly.</p>
                    </div>
                  </div>

                  {/* Step 03 */}
                  <div className="transform-step">
                    <span className="transform-step-dot"></span>

                    <div className="transform-step-content">
                      <span className="transform-step-number">03</span>

                      <h3>Scale & Optimize</h3>

                      <p>Continuously improve for long-term success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="transform-bottom">
              <span className="transform-bottom-label">FROM COMPLEXITY</span>

              <p>
                Technology should make your business
                <span> better — not harder.</span>
              </p>

              <span className="transform-bottom-label">TO POSSIBILITY ↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE PRINCIPLES BEHIND EVERYTHING WE DO */}
      <section className="principles-section-fullwidth" id="our-values">
        <div className="principles-header-row">
          <div className="principles-header-left">
            <div className="principles-index-tag">005 / 009</div>
            <h2 className="principles-display-heading">
              THE PRINCIPLES <br />
              BEHIND EVERYTHING <br />
              WE DO.
            </h2>
          </div>
          <div className="principles-header-right">
            <p className="principles-header-note">
              Our work is guided by a clear set of values
              <br />
              that keep us focused on what matters most.
            </p>
          </div>
        </div>

        <div className="principles-cards-grid">
          {principlesCards.map((card) => (
            <div key={card.id} className="principles-card">
              <div className="principles-card-icon">{card.icon}</div>
              <h3 className="principles-card-title">{card.title}</h3>
              <p className="principles-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="partners-section" id="why-choose-us">
        <div className="partners-container">

          {/* Top Meta */}
          <div className="partners-meta">
            <span>006 / 009</span>
            <span>WHY CHOOSE US</span>
          </div>

          {/* Main Content */}
          <div className="partners-main">

            {/* Left Content */}
            <div className="partners-intro">

              <span className="partners-eyebrow">
                BUILT FOR THE LONG RUN
              </span>

              <h2 className="partners-heading">
                WE DON'T JUST
                <br />
                DELIVER
                <br />
                <span>PROJECTS.</span>
                <br />
                WE BUILD
                <br />
                <span>PARTNERSHIPS.</span>
              </h2>

              <div className="partners-description-wrap">
                <span className="partners-description-line"></span>

                <p className="partners-description">
                  From startups to global enterprises, we work closely
                  with our clients to create solutions that last.
                </p>

                <Button href="/work" size="md">
                  Our Case Studies
                </Button>
              </div>

            </div>


            {/* Right Partnership System */}
            <div className="partners-system">

              {/* Connecting Lines */}
              <div className="partners-system-line line-1"></div>
              <div className="partners-system-line line-2"></div>
              <div className="partners-system-line line-3"></div>
              <div className="partners-system-line line-4"></div>
              <div className="partners-system-line line-5"></div>

              {/* Center */}
              <div className="partners-core">
                <span className="partners-core-small">
                  OUR
                </span>

                <span className="partners-core-title">
                  PARTNER
                </span>

                <span className="partners-core-arrow">
                  ↗
                </span>
              </div>


              {/* Business Understanding */}
              <div className="partner-principle principle-1">
                <span className="principle-number">01</span>

                <div>
                  <span className="principle-label">
                    UNDERSTAND
                  </span>

                  <h3>
                    Business Understanding
                  </h3>

                  <p>
                    Deep industry research
                    before we build.
                  </p>
                </div>
              </div>


              {/* Tailored Solutions */}
              <div className="partner-principle principle-2">
                <span className="principle-number">02</span>

                <div>
                  <span className="principle-label">
                    CREATE
                  </span>

                  <h3>
                    Tailored Solutions
                  </h3>

                  <p>
                    Built around your
                    unique needs.
                  </p>
                </div>
              </div>


              {/* Proven Results */}
              <div className="partner-principle principle-3">
                <span className="principle-number">03</span>

                <div>
                  <span className="principle-label">
                    PROVE
                  </span>

                  <h3>
                    Proven Results
                  </h3>

                  <p>
                    Focused on measurable
                    business outcomes.
                  </p>
                </div>
              </div>


              {/* Modern Approach */}
              <div className="partner-principle principle-4">
                <span className="principle-number">04</span>

                <div>
                  <span className="principle-label">
                    EVOLVE
                  </span>

                  <h3>
                    Modern Approach
                  </h3>

                  <p>
                    Strategy, design and
                    technology working together.
                  </p>
                </div>
              </div>


              {/* Long Term */}
              <div className="partner-principle principle-5">
                <span className="principle-number">05</span>

                <div>
                  <span className="principle-label">
                    GROW
                  </span>

                  <h3>
                    Long-Term Thinking
                  </h3>

                  <p>
                    Solutions that scale
                    with your business.
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* Bottom Statement */}
          <div className="partners-footer">

            <span className="partners-footer-label">
              NOT A VENDOR
            </span>

            <div className="partners-footer-line"></div>

            <p>
              Your goals become
              <span> our goals.</span>
            </p>

            <span className="partners-footer-arrow">
              ↗
            </span>

          </div>

        </div>
      </section>

      {/* 7. FROM IDEAS TO DIGITAL IMPACT TOGETHER. */}
      <section className="impact-section-fullwidth" id="our-approach">
        <div className="impact-bg-wireframe">
          <img
            src="/images/Golden Neural Network Mesh.avif"
            alt="Impact  Trails"
            className="impact-wireframe-img"
          />
        </div>

        <div className="impact-container">

          {/* SECTION HEADER */}
          <div className="impact-section-header">
            <div className="impact-index-tag">007 / 009</div>

            <div className="impact-header-line"></div>
          </div>

          {/* HERO AREA */}
          <div className="impact-intro">

            <div className="impact-intro-heading">
              <h2 className="impact-display-heading">
                FROM IDEAS <br />
                TO DIGITAL IMPACT <br />
                <span className="impact-heading-muted">TOGETHER.</span>
              </h2>
            </div>

            <div className="impact-intro-description">
              <div className="impact-description-marker"></div>

              <p className="impact-description">
                We turn ambitious ideas into measurable outcomes with the power of
                AI and automation.
              </p>
            </div>

          </div>

          {/* PROCESS */}
          <div className="impact-process">

            {/* PROCESS HEADER */}
            <div className="impact-process-header">
              <span>PROCESS</span>
              <span>01 — 04</span>
            </div>

            {/* TIMELINE */}
            <div className="impact-timeline">

              <div className="impact-timeline-line">
                <span></span>
              </div>

              {/* STEP 1 */}
              <div className="impact-step-card">
                <div className="impact-step-number">
                  01
                </div>

                <div className="impact-step-content">
                  <h3 className="impact-step-title">
                    Understand
                  </h3>

                  <p className="impact-step-desc">
                    We learn about your business, goals and challenges.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="impact-step-card">
                <div className="impact-step-number">
                  02
                </div>

                <div className="impact-step-content">
                  <h3 className="impact-step-title">
                    Think
                  </h3>

                  <p className="impact-step-desc">
                    We explore ideas and design the right approach.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="impact-step-card">
                <div className="impact-step-number">
                  03
                </div>

                <div className="impact-step-content">
                  <h3 className="impact-step-title">
                    Create
                  </h3>

                  <p className="impact-step-desc">
                    We build, integrate and test solutions.
                  </p>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="impact-step-card">
                <div className="impact-step-number">
                  04
                </div>

                <div className="impact-step-content">
                  <h3 className="impact-step-title">
                    Deliver
                  </h3>

                  <p className="impact-step-desc">
                    We launch and support for long-term success.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. STRATEGY MEETS CREATIVITY & TECHNOLOGY. */}
      <section className="strategy-section-fullwidth" id="our-expertise">
        <div className="strategy-container">
          <div className="strategy-left-col">
            <div className="strategy-index-tag">008 / 009</div>
            <h2 className="strategy-display-heading">
              STRATEGY MEETS <br />
              CREATIVITY &amp; <br />
              <span className="strategy-heading-muted">TECHNOLOGY.</span>
            </h2>
            <p className="strategy-description">
              A perfect blend of innovative thinking, stunning design and
              powerful technology to create solutions that work.
            </p>
            <Button href="/work" size="md">
              Explore Our Work
            </Button>
          </div>

          <div className="strategy-right-col">
            <div className="strategy-cards-grid">
              {/* Marketing Card */}
              <div className="strategy-card">
                <div className="strategy-card-media">
                  <img
                    src="/images/Futuristic Molecular Network Sculpture.avif"
                    alt="Marketing"
                    className="strategy-card-img"
                  />
                </div>
                <h3 className="strategy-card-title">Marketing</h3>
                <p className="strategy-card-desc">
                  Data driven strategies for real growth.
                </p>
              </div>

              {/* Design Card */}
              <div className="strategy-card">
                <div className="strategy-card-media">
                  <img
                    src="/images/Faceted Gold-Trimmed Origami Sculpture.avif"
                    alt="Design"
                    className="strategy-card-img"
                  />
                </div>
                <h3 className="strategy-card-title">Design</h3>
                <p className="strategy-card-desc">
                  Human centered design that inspires.
                </p>
              </div>

              {/* Technology Card */}
              <div className="strategy-card">
                <div className="strategy-card-media">
                  <img
                    src="/images/Marble Orb with Golden Shattered Lattice.avif"
                    alt="Technology"
                    className="strategy-card-img"
                  />
                </div>
                <h3 className="strategy-card-title">Technology</h3>
                <p className="strategy-card-desc">
                  Scalable solutions built for the future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. HAVE AN IDEA? LET'S BRING IT TO LIFE. */}
      <CtaSection tag="009 / 009" />
    </div>
  );
}
