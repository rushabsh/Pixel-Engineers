"use client";

import React from "react";
import Button from "../../components/Button";
import FadeUp from "../../components/FadeUp";
import CtaSection from "../../components/CtaSection";
import "./about.css";

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
    <div className="about-page-root relative bg-[#070708] text-white font-['Inter_Tight',sans-serif] overflow-x-hidden min-h-screen">
      {/* FIXED BACKGROUND VIDEO MATCHING SERVICES PAGE */}
      <video
        className="about-fixed-video fixed top-0 left-0 w-full h-screen object-cover z-0 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4"
      />

      {/* 1. HERO SECTION */}
      <section className="about-hero-section relative z-[1] flex flex-col justify-center items-center min-h-screen pt-28 pb-16 px-6 sm:px-8 max-md:pt-28 max-md:pb-12 max-md:px-5 bg-transparent overflow-hidden">
        <div className="about-hero-content-block flex flex-col items-center text-center max-w-[880px] mx-auto w-full relative z-[4]">
          <FadeUp delay={0.1} y={20}>
            <div className="about-pill-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.18] font-mono text-[11px] font-semibold tracking-[0.14em] uppercase text-[#c4b5fd] mb-6 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
              <span className="dot w-1.5 h-1.5 rounded-full bg-[#a855f7] shadow-[0_0_10px_#a855f7]" />
              <span>ABOUT US</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} y={30}>
            <h1 className="about-hero-heading font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(34px,4.4vw,60px)] font-bold leading-[1.1] tracking-[-0.025em] text-white mx-auto max-w-[860px] text-center [text-shadow:0_4px_24px_rgba(0,0,0,0.7)]">
              We Build Digital Experiences That{" "}
              <span className="gradient-text bg-gradient-to-br from-white via-[#c4b5fd] to-[#864FFE] bg-clip-text text-transparent">
                Move Businesses Forward.
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.35} y={24}>
            <p className="about-hero-subtext mt-5 mx-auto text-base leading-[1.65] text-white/90 max-w-[660px] text-center [text-shadow:0_2px_14px_rgba(0,0,0,0.8)]">
              We are a digital marketing and software development agency helping
              businesses turn ideas into impactful digital experiences. From
              building powerful software products to creating growth-driven
              marketing strategies, we combine creativity, technology, and
              strategy to deliver solutions that create real business value.
            </p>
          </FadeUp>

          <FadeUp delay={0.5} y={20}>
            <div className="about-hero-actions flex items-center justify-center gap-4 mt-8 mx-auto flex-wrap">
              <Button href="/contact" size="lg">
                Start a Conversation
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore Our Services
              </Button>
            </div>
          </FadeUp>

          <FadeUp delay={0.65} y={20}>
            <div className="about-hero-stats-row flex items-center justify-center gap-7 mt-12 px-8 py-4 bg-[#0e121a]/55 border border-white/[0.18] rounded-full backdrop-blur-[20px] shadow-[0_20px_45px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] flex-wrap max-sm:rounded-2xl max-sm:gap-3.5 max-sm:p-4 max-sm:flex-col">
              <div className="about-hero-stat-item flex items-center gap-2.5">
                <span className="about-hero-stat-num font-mono text-lg font-semibold text-white">150+</span>
                <span className="about-hero-stat-label text-[13px] text-white/60">
                  Projects Delivered
                </span>
              </div>
              <div className="about-hero-stat-divider w-[1px] h-5 bg-white/10 max-sm:hidden" />
              <div className="about-hero-stat-item flex items-center gap-2.5">
                <span className="about-hero-stat-num font-mono text-lg font-semibold text-white">50+</span>
                <span className="about-hero-stat-label text-[13px] text-white/60">Businesses Served</span>
              </div>
              <div className="about-hero-stat-divider w-[1px] h-5 bg-white/10 max-sm:hidden" />
              <div className="about-hero-stat-item flex items-center gap-2.5">
                <span className="about-hero-stat-num font-mono text-lg font-semibold text-white">98%</span>
                <span className="about-hero-stat-label text-[13px] text-white/60">
                  Client Satisfaction
                </span>
              </div>
              <div className="about-hero-stat-divider w-[1px] h-5 bg-white/10 max-sm:hidden" />
              <div className="about-hero-stat-item flex items-center gap-2.5">
                <span className="about-hero-stat-num font-mono text-lg font-semibold text-white">5+</span>
                <span className="about-hero-stat-label text-[13px] text-white/60">
                  Years of Experience
                </span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="who-section-fullwidth relative z-[2] w-full py-28 max-md:py-16 overflow-hidden text-white bg-transparent" id="who-we-are">
        <div className="who-showcase relative w-full min-h-[780px] max-md:min-h-0">
          {/* Image */}
          <div className="who-image-area absolute left-0 top-0 w-[48%] max-lg:w-[43%] max-md:relative max-md:w-full h-[650px] max-lg:h-[600px] max-md:h-[500px] max-sm:h-[340px] overflow-hidden group">
            <img
              src="/images/About-us.avif"
              alt="A Digital Partner for Modern Businesses"
              className="who-backdrop-img w-full h-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />

            <div className="who-image-overlay absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/35 pointer-events-none" />

            <div className="who-image-label absolute left-7 right-7 bottom-7 flex justify-between items-center text-[10px] tracking-[0.16em] text-white font-mono uppercase">
              <span>WHO WE ARE</span>
              <span>02 — 09</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="who-content relative w-[68%] max-lg:w-[73%] max-md:w-full ml-auto max-md:ml-0 pt-14 max-md:pt-10 pl-[9%] max-lg:pl-[8%] max-md:px-6 pr-6 sm:pr-12 z-[2]">
            <div className="who-top-row flex items-center justify-between pb-9 border-b border-white/15 text-white">
              <div className="who-index-tag font-mono text-xs tracking-[0.14em]">002 / 009</div>

              <span className="who-top-note font-mono text-[9px] tracking-[0.16em] text-white/65 uppercase">
                DIGITAL • TECHNOLOGY • GROWTH
              </span>
            </div>

            <div className="who-heading-area grid grid-cols-[minmax(0,1fr)_220px] max-lg:grid-cols-[1fr_180px] max-md:grid-cols-1 gap-14 max-lg:gap-8 pt-16">
              <h2 className="who-display-heading m-0 font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(48px,5vw,78px)] max-lg:text-[clamp(42px,5vw,65px)] max-sm:text-4xl font-bold leading-[0.96] tracking-[-0.055em] text-white uppercase">
                A DIGITAL PARTNER <br />
                FOR <span className="who-display-muted text-white/45">MODERN</span> <br />
                <span className="who-display-muted text-white/45">BUSINESSES.</span>
              </h2>

              <div className="who-heading-side flex items-start gap-4 pt-2.5 max-md:pt-0">
                <span className="who-side-line block w-6 h-[1px] mt-2 bg-white/40 flex-shrink-0" />

                <p className="who-header-note m-0 text-xs leading-[1.65] text-white/75">
                  More than a vendor — we're your long-term technology partner,
                  committed to real outcomes.
                </p>
              </div>
            </div>

            <div className="who-description-row flex justify-between items-end max-md:flex-col max-md:items-start gap-12 max-md:gap-7 mt-16 pb-16 border-b border-white/15">
              <p className="who-body-copy max-w-[460px] m-0 text-sm leading-[1.75] text-white/85">
                We combine strategy, creativity and technology to help
                businesses unlock their next stage of growth with AI-driven
                solutions.
              </p>

              <div className="who-explore inline-flex items-center gap-4 text-[10px] tracking-[0.13em] text-white font-mono uppercase whitespace-nowrap cursor-pointer transition-opacity group">
                <span>EXPLORE OUR STORY</span>
                <span className="who-explore-arrow flex items-center justify-center w-8 h-8 rounded-full border border-white/25 text-base transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-white/15">↗</span>
              </div>
            </div>

            {/* Stats */}
            <div className="who-stats-strip grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 mt-0">
              <div className="who-stat-col flex flex-col min-h-[150px] pt-8 pr-7 pl-0 border-r border-white/15 max-sm:border-r-0 max-sm:border-b max-sm:pb-6 group">
                <span className="who-stat-index font-mono text-[9px] tracking-[0.12em] text-white/55 mb-5">01</span>
                <span className="who-stat-digit font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(36px,4vw,58px)] max-sm:text-4xl font-bold leading-[0.9] tracking-[-0.055em] text-white transition-transform duration-300 group-hover:translate-x-1.5">150+</span>
                <span className="who-stat-text mt-4 text-[11px] leading-snug text-white/75">Projects Delivered</span>
              </div>

              <div className="who-stat-col flex flex-col min-h-[150px] pt-8 px-7 border-r border-white/15 max-sm:px-0 max-sm:border-r-0 max-sm:border-b max-sm:pb-6 group">
                <span className="who-stat-index font-mono text-[9px] tracking-[0.12em] text-white/55 mb-5">02</span>
                <span className="who-stat-digit font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(36px,4vw,58px)] max-sm:text-4xl font-bold leading-[0.9] tracking-[-0.055em] text-white transition-transform duration-300 group-hover:translate-x-1.5">50+</span>
                <span className="who-stat-text mt-4 text-[11px] leading-snug text-white/75">Global Clients</span>
              </div>

              <div className="who-stat-col flex flex-col min-h-[150px] pt-8 px-7 border-r border-white/15 max-sm:px-0 max-sm:border-r-0 max-sm:border-b max-sm:pb-6 group">
                <span className="who-stat-index font-mono text-[9px] tracking-[0.12em] text-white/55 mb-5">03</span>
                <span className="who-stat-digit font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(36px,4vw,58px)] max-sm:text-4xl font-bold leading-[0.9] tracking-[-0.055em] text-white transition-transform duration-300 group-hover:translate-x-1.5">98%</span>
                <span className="who-stat-text mt-4 text-[11px] leading-snug text-white/75">Client Satisfaction</span>
              </div>

              <div className="who-stat-col flex flex-col min-h-[150px] pt-8 pl-7 max-sm:pl-0 border-r-0 group">
                <span className="who-stat-index font-mono text-[9px] tracking-[0.12em] text-white/55 mb-5">04</span>
                <span className="who-stat-digit font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(36px,4vw,58px)] max-sm:text-4xl font-bold leading-[0.9] tracking-[-0.055em] text-white transition-transform duration-300 group-hover:translate-x-1.5">10+</span>
                <span className="who-stat-text mt-4 text-[11px] leading-snug text-white/75">Industries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPLORE WHAT WE OFFER */}
      <section className="offer-section-fullwidth relative z-[2] w-full bg-[#eaedef] text-[#0e1217] py-20 px-6 sm:px-12 md:px-16 border-t border-black/5 min-h-[720px] max-md:min-h-0 flex flex-col justify-between box-border" id="what-we-offer">
        <div className="offer-header-row flex justify-between items-end max-md:flex-col max-md:items-start gap-8 mb-11">
          <div className="offer-header-left flex flex-col">
            <div className="offer-index-tag font-mono text-[13px] font-semibold tracking-[0.14em] text-[#64748b] uppercase mb-4">003 / 009</div>
            <h2 className="offer-display-heading font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(32px,3.2vw,46px)] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0e1217] uppercase m-0">
              EXPLORE <br />
              WHAT WE OFFER.
            </h2>
          </div>
          <div className="offer-header-right flex items-center max-sm:flex-col max-sm:items-start gap-8">
            <p className="offer-header-note text-sm leading-[1.55] text-[#525866] max-w-[320px] m-0">
              We provide end-to-end AI automation services
              <br />
              in one place — from strategy to execution.
            </p>
            <div className="offer-nav-btns flex items-center gap-2.5 flex-shrink-0">
              <button
                type="button"
                className="offer-nav-btn w-[42px] h-[42px] rounded-full border border-black/15 bg-white/70 text-[#0e1217] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#0e1217] hover:text-white hover:border-[#0e1217] hover:scale-105 active:scale-95"
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
                className="offer-nav-btn w-[42px] h-[42px] rounded-full border border-black/15 bg-white/70 text-[#0e1217] flex items-center justify-center cursor-pointer transition-all duration-200 hover:bg-[#0e1217] hover:text-white hover:border-[#0e1217] hover:scale-105 active:scale-95"
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

        <div className="offer-cards-track flex gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden" ref={offerSliderRef}>
          {whatWeOfferCards.map((card) => (
            <div key={card.id} className="offer-card flex-[0_0_calc((100%-60px)/4)] max-xl:flex-[0_0_calc((100%-40px)/3)] max-md:flex-[0_0_calc((100%-20px)/2)] max-sm:flex-[0_0_85%] min-w-[260px] max-sm:min-w-[240px] bg-[#f4f6f8] border border-black/[0.08] rounded-[22px] p-6 flex flex-col justify-between box-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-black/15 group">
              <div className="offer-card-media w-full h-[200px] flex items-center justify-center mb-4 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="offer-card-img max-w-full max-h-full object-contain transition-transform duration-400 group-hover:scale-105 drop-shadow-[0_12px_24px_rgba(0,0,0,0.08)]"
                />
              </div>
              <div className="offer-card-body flex flex-col items-start">
                <h3 className="offer-card-title font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[19px] font-bold leading-tight text-[#0e1217] mb-2">{card.title}</h3>
                <p className="offer-card-desc text-[13.5px] leading-relaxed text-[#555d6b] mb-6 min-h-[40px]">{card.desc}</p>
                <a
                  href="/services"
                  className="offer-card-btn w-[38px] h-[38px] rounded-full border border-black/20 bg-white flex items-center justify-center text-[#0e1217] transition-all duration-250 group-hover:bg-[#0e1217] group-hover:text-white group-hover:border-[#0e1217] group-hover:rotate-45"
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
      <section className="transform-section relative z-[2] w-full overflow-hidden py-36 max-md:py-20 text-white bg-transparent" id="digital-transformation">
        <div className="transform-container w-[90%] max-w-[1500px] mx-auto text-white">
          {/* Top Meta */}
          <div className="transform-meta flex items-center justify-between pb-5 border-b border-white/20 text-white/70 font-mono text-[10px] tracking-[0.2em] uppercase">
            <span>004 / 009</span>
            <span>DIGITAL TRANSFORMATION</span>
          </div>

          {/* Main Content */}
          <div className="transform-main relative mt-10 min-h-[780px] max-md:min-h-0">
            {/* Decorative Number */}
            <div className="transform-bg-number absolute -top-5 -right-10 text-[220px] font-medium leading-none tracking-[-0.08em] text-white opacity-[0.04] pointer-events-none select-none max-lg:hidden">04</div>

            <div className="transform-grid relative z-[2] grid grid-cols-[minmax(0,5fr)_minmax(0,5fr)_minmax(180px,2fr)] max-lg:grid-cols-2 max-md:grid-cols-1 gap-0 max-lg:gap-12">
              {/* Left — Typography */}
              <div className="transform-copy relative z-[3] pt-20 max-lg:pt-10 max-md:pt-4 text-white">
                <div className="transform-eyebrow flex items-center gap-4 mb-10 font-mono text-[9px] tracking-[0.22em] text-white/65 uppercase">
                  <span className="transform-eyebrow-line block w-10 h-[1px] bg-white opacity-80"></span>
                  <span>REDEFINING POSSIBILITY</span>
                </div>

                <h2 className="transform-heading m-0 max-w-[1000px] font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(48px,8vw,65px)] max-sm:text-4xl font-medium leading-[0.86] tracking-[-0.075em] text-white uppercase">
                  MAKING DIGITAL
                  <br />
                  <span className="text-white/40">TRANSFORMATION</span>
                  <br />
                  SIMPLER<span className="transform-dot text-white/40">.</span>
                </h2>

                <div className="transform-description-wrap max-w-[390px] mt-12">
                  <p className="transform-description m-0 text-[13px] leading-[1.8] text-white/85">
                    We simplify complex technology with human-centered design
                    and AI-powered solutions that deliver real business value.
                  </p>

                  <div className="transform-button mt-8">
                    <Button href="/contact" size="md">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>

              {/* Center — Image */}
              <div className="transform-visual relative -ml-10 max-lg:ml-0 group">
                <div className="transform-image-wrap relative w-full h-[700px] max-lg:h-[550px] max-md:h-[380px] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/Golden Neural Network Mesh.avif"
                    alt="Digital Transformation AI Neural Mesh"
                    className="transform-image block w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  />

                  <div className="transform-image-overlay absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

                  <div className="transform-image-top absolute top-5 left-5 text-white font-mono text-[8px] tracking-[0.2em] opacity-60">AI / 01</div>

                  <div className="transform-image-bottom absolute left-5 right-5 bottom-5 flex justify-between text-white font-mono text-[8px] tracking-[0.18em] opacity-60">
                    <span>INTELLIGENCE</span>
                    <span>SYSTEMS</span>
                  </div>

                  <div className="transform-ai-marker absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full border border-white/30 text-white font-mono text-[9px] tracking-[0.15em] backdrop-blur-md">AI</div>
                </div>
              </div>

              {/* Right — Process */}
              <div className="transform-process relative z-[3] pt-20 max-lg:pt-6 pl-12 max-lg:pl-0 max-lg:col-span-2 max-md:col-span-1">
                <div className="transform-process-header flex flex-col max-lg:flex-row max-lg:justify-between gap-3 mb-10 font-mono text-[9px] tracking-[0.2em] text-white/70 uppercase">
                  <span>PROCESS</span>
                  <span>03 STEPS</span>
                </div>

                <div className="transform-timeline relative pl-7 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1 before:w-[1px] before:bg-white/20">
                  {/* Step 01 */}
                  <div className="transform-step transform-step-active relative pb-12 last:pb-0 group">
                    <span className="transform-step-dot absolute top-0 -left-7 w-[9px] h-[9px] border border-white rounded-full bg-white opacity-100 transition-all duration-300"></span>

                    <div className="transform-step-content">
                      <span className="transform-step-number block font-mono text-[9px] tracking-[0.15em] text-white/60 uppercase">01</span>

                      <h3 className="mt-3.5 mb-0 text-sm font-medium leading-tight text-white">Strategy & Discovery</h3>

                      <p className="max-w-[210px] mt-3 mb-0 text-[10px] leading-[1.7] text-white/75">Understand your goals and identify opportunities.</p>
                    </div>
                  </div>

                  {/* Step 02 */}
                  <div className="transform-step relative pb-12 last:pb-0 group">
                    <span className="transform-step-dot absolute top-0 -left-7 w-[9px] h-[9px] border border-white rounded-full bg-transparent opacity-50 transition-all duration-300 group-hover:bg-white group-hover:scale-125 group-hover:opacity-100"></span>

                    <div className="transform-step-content">
                      <span className="transform-step-number block font-mono text-[9px] tracking-[0.15em] text-white/60 uppercase">02</span>

                      <h3 className="mt-3.5 mb-0 text-sm font-medium leading-tight text-white">Build & Integrate</h3>

                      <p className="max-w-[210px] mt-3 mb-0 text-[10px] leading-[1.7] text-white/75">Develop and connect AI solutions seamlessly.</p>
                    </div>
                  </div>

                  {/* Step 03 */}
                  <div className="transform-step relative pb-12 last:pb-0 group">
                    <span className="transform-step-dot absolute top-0 -left-7 w-[9px] h-[9px] border border-white rounded-full bg-transparent opacity-50 transition-all duration-300 group-hover:bg-white group-hover:scale-125 group-hover:opacity-100"></span>

                    <div className="transform-step-content">
                      <span className="transform-step-number block font-mono text-[9px] tracking-[0.15em] text-white/60 uppercase">03</span>

                      <h3 className="mt-3.5 mb-0 text-sm font-medium leading-tight text-white">Scale & Optimize</h3>

                      <p className="max-w-[210px] mt-3 mb-0 text-[10px] leading-[1.7] text-white/75">Continuously improve for long-term success.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="transform-bottom relative z-[3] flex items-end justify-between max-md:flex-col max-md:items-start gap-7 mt-16 pt-6 border-t border-white/20 opacity-90">
              <span className="transform-bottom-label flex-shrink-0 font-mono text-[9px] tracking-[0.2em] opacity-35 uppercase">FROM COMPLEXITY</span>

              <p className="max-w-[600px] m-0 font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(20px,2.5vw,32px)] font-normal leading-[1.05] tracking-[-0.04em] opacity-70">
                Technology should make your business
                <span className="opacity-35"> better — not harder.</span>
              </p>

              <span className="transform-bottom-label flex-shrink-0 font-mono text-[9px] tracking-[0.2em] opacity-35 uppercase">TO POSSIBILITY ↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. THE PRINCIPLES BEHIND EVERYTHING WE DO */}
      <section className="principles-section-fullwidth relative z-[2] w-full bg-[#eaedef] text-[#0e1217] py-20 px-6 sm:px-12 md:px-16 border-t border-black/5 min-h-[720px] max-md:min-h-0 flex flex-col justify-between box-border" id="our-values">
        <div className="principles-header-row flex justify-between items-end max-md:flex-col max-md:items-start gap-8 mb-11">
          <div className="principles-header-left flex flex-col">
            <div className="principles-index-tag font-mono text-[13px] font-semibold tracking-[0.14em] text-[#64748b] uppercase mb-4">005 / 009</div>
            <h2 className="principles-display-heading font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0e1217] uppercase m-0">
              THE PRINCIPLES <br />
              BEHIND EVERYTHING <br />
              WE DO.
            </h2>
          </div>
          <div className="principles-header-right flex items-end">
            <p className="principles-header-note text-sm leading-[1.55] text-[#525866] max-w-[380px] m-0">
              Our work is guided by a clear set of values
              <br />
              that keep us focused on what matters most.
            </p>
          </div>
        </div>

        <div className="principles-cards-grid grid grid-cols-5 max-xl:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4 w-full">
          {principlesCards.map((card) => (
            <div key={card.id} className="principles-card bg-[#f4f6f8] border border-black/[0.08] rounded-[22px] p-8 max-sm:p-6 flex flex-col items-start transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-black/15 group">
              <div className="principles-card-icon w-12 h-12 flex items-center justify-center mb-6 text-[#0e1217] transition-transform duration-300 group-hover:scale-110">{card.icon}</div>
              <h3 className="principles-card-title font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-lg font-bold leading-tight text-[#0e1217] mb-2">{card.title}</h3>
              <p className="principles-card-desc text-[13.5px] leading-relaxed text-[#555d6b] m-0">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. PARTNERSHIPS */}
      <section className="partners-section relative z-[2] w-full overflow-hidden py-36 max-md:py-20 bg-[#f5f5f3] text-[#0e1217]" id="why-choose-us">
        <div className="partners-container w-[90%] max-w-[1500px] mx-auto">

          {/* Top Meta */}
          <div className="partners-meta flex items-center justify-between pb-5 border-b border-[#0e1217]/15 font-mono text-[10px] tracking-[0.2em] opacity-45 uppercase">
            <span>006 / 009</span>
            <span>WHY CHOOSE US</span>
          </div>

          {/* Main Content */}
          <div className="partners-main grid grid-cols-[0.95fr_1.05fr] max-lg:grid-cols-1 gap-20 max-lg:gap-10 mt-20 max-md:mt-10">

            {/* Left Content */}
            <div className="partners-intro relative z-[2]">

              <span className="partners-eyebrow block mb-8 font-mono text-[9px] tracking-[0.23em] opacity-45 uppercase">
                BUILT FOR THE LONG RUN
              </span>

              <h2 className="partners-heading m-0 font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(36px,4.2vw,60px)] font-medium leading-[0.92] tracking-[-0.06em] text-[#0e1217] uppercase">
                WE DON'T JUST
                <br />
                DELIVER
                <br />
                <span className="opacity-35">PROJECTS.</span>
                <br />
                WE BUILD
                <br />
                <span className="opacity-35">PARTNERSHIPS.</span>
              </h2>

              <div className="partners-description-wrap max-w-[380px] mt-14">
                <span className="partners-description-line block w-11 h-[1px] mb-6 bg-current opacity-40"></span>

                <p className="partners-description m-0 text-sm leading-relaxed text-[#525866] mb-8">
                  From startups to global enterprises, we work closely
                  with our clients to create solutions that last.
                </p>

                <Button href="/work" size="md">
                  Our Case Studies
                </Button>
              </div>

            </div>


            {/* Right Partnership System */}
            <div className="partners-system relative min-h-[650px] max-lg:min-h-[500px] -mt-5 max-lg:mt-0">

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
          <div className="partners-footer flex items-center justify-between gap-6 mt-20 pt-6 border-t border-[#0e1217]/15">

            <span className="partners-footer-label font-mono text-[9px] tracking-[0.2em] opacity-45 uppercase">
              NOT A VENDOR
            </span>

            <div className="partners-footer-line flex-1 h-[1px] bg-[#0e1217]/10"></div>

            <p className="m-0 font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-base max-sm:text-sm font-medium tracking-tight">
              Your goals become
              <span className="opacity-45"> our goals.</span>
            </p>

            <span className="partners-footer-arrow text-base opacity-50">
              ↗
            </span>

          </div>

        </div>
      </section>

      {/* 7. FROM IDEAS TO DIGITAL IMPACT TOGETHER. */}
      <section className="impact-section-fullwidth relative z-[2] w-full bg-[#eaedef] text-[#0e1217] py-20 px-6 sm:px-12 md:px-16 border-t border-black/5 overflow-hidden" id="our-approach">
        <div className="impact-bg-wireframe absolute inset-0 pointer-events-none opacity-20 overflow-hidden">
          <img
            src="/images/Golden Neural Network Mesh.avif"
            alt="Impact Trails"
            className="impact-wireframe-img w-full h-full object-cover"
          />
        </div>

        <div className="impact-container relative z-[2] w-full max-w-[1440px] mx-auto">

          {/* SECTION HEADER */}
          <div className="impact-section-header flex items-center justify-between py-6 border-b border-[#0e1217]/15 text-[#0e1217]">
            <div className="impact-index-tag font-mono text-[13px] font-semibold tracking-[0.14em] uppercase">007 / 009</div>

            <div className="impact-header-line flex-1 h-[1px] ml-7 bg-[#0e1217]/10"></div>
          </div>

          {/* HERO AREA */}
          <div className="impact-intro grid grid-cols-[minmax(0,1fr)_340px] max-md:grid-cols-1 gap-20 max-md:gap-8 py-20 max-md:py-10">

            <div className="impact-intro-heading flex items-center">
              <h2 className="impact-display-heading m-0 font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(32px,3.8vw,56px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#0e1217] uppercase">
                FROM IDEAS <br />
                TO DIGITAL IMPACT <br />
                <span className="impact-heading-muted text-[#828894]">TOGETHER.</span>
              </h2>
            </div>

            <div className="impact-intro-description flex items-start pt-5">
              <div className="impact-description-marker w-[1px] min-w-[1px] h-[75px] mr-6 bg-[#0e1217] opacity-35"></div>

              <p className="impact-description m-0 text-sm leading-relaxed text-[#525866] max-w-[300px]">
                We turn ambitious ideas into measurable outcomes with the power of
                AI and automation.
              </p>
            </div>

          </div>

          {/* PROCESS */}
          <div className="impact-process relative pb-16">

            {/* PROCESS HEADER */}
            <div className="impact-process-header flex justify-between items-center py-4 border-y border-[#0e1217]/15 font-mono text-[10px] leading-none tracking-[0.14em] uppercase text-[#0e1217] opacity-70">
              <span>PROCESS</span>
              <span>01 — 04</span>
            </div>

            {/* TIMELINE */}
            <div className="impact-timeline relative grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 pt-16">

              <div className="impact-timeline-line absolute top-[90px] left-0 right-0 h-[1px] bg-[#0e1217]/20 max-sm:hidden">
                <span className="block w-1/4 h-[1px] bg-[#0e1217]"></span>
              </div>

              {/* STEP 1 */}
              <div className="impact-step-card relative px-9 max-sm:px-0 border-l border-[#0e1217]/12 first:border-l-0 max-sm:border-l-0 max-sm:border-b max-sm:pb-6 transition-all duration-300 hover:-translate-y-1">
                <div className="impact-step-number relative z-[2] font-mono text-2xl font-bold text-[#0e1217] mb-4">
                  01
                </div>

                <div className="impact-step-content">
                  <h3 className="impact-step-title font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-lg font-bold leading-snug text-[#0e1217] mb-2">
                    Understand
                  </h3>

                  <p className="impact-step-desc text-[13px] leading-relaxed text-[#555d6b] m-0">
                    We learn about your business, goals and challenges.
                  </p>
                </div>
              </div>

              {/* STEP 2 */}
              <div className="impact-step-card relative px-9 max-sm:px-0 border-l border-[#0e1217]/12 max-sm:border-l-0 max-sm:border-b max-sm:pb-6 transition-all duration-300 hover:-translate-y-1">
                <div className="impact-step-number relative z-[2] font-mono text-2xl font-bold text-[#0e1217] mb-4">
                  02
                </div>

                <div className="impact-step-content">
                  <h3 className="impact-step-title font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-lg font-bold leading-snug text-[#0e1217] mb-2">
                    Think
                  </h3>

                  <p className="impact-step-desc text-[13px] leading-relaxed text-[#555d6b] m-0">
                    We explore ideas and design the right approach.
                  </p>
                </div>
              </div>

              {/* STEP 3 */}
              <div className="impact-step-card relative px-9 max-sm:px-0 border-l border-[#0e1217]/12 max-sm:border-l-0 max-sm:border-b max-sm:pb-6 transition-all duration-300 hover:-translate-y-1">
                <div className="impact-step-number relative z-[2] font-mono text-2xl font-bold text-[#0e1217] mb-4">
                  03
                </div>

                <div className="impact-step-content">
                  <h3 className="impact-step-title font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-lg font-bold leading-snug text-[#0e1217] mb-2">
                    Create
                  </h3>

                  <p className="impact-step-desc text-[13px] leading-relaxed text-[#555d6b] m-0">
                    We build, integrate and test solutions.
                  </p>
                </div>
              </div>

              {/* STEP 4 */}
              <div className="impact-step-card relative px-9 max-sm:px-0 border-l border-[#0e1217]/12 max-sm:border-l-0 transition-all duration-300 hover:-translate-y-1">
                <div className="impact-step-number relative z-[2] font-mono text-2xl font-bold text-[#0e1217] mb-4">
                  04
                </div>

                <div className="impact-step-content">
                  <h3 className="impact-step-title font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-lg font-bold leading-snug text-[#0e1217] mb-2">
                    Deliver
                  </h3>

                  <p className="impact-step-desc text-[13px] leading-relaxed text-[#555d6b] m-0">
                    We launch and support for long-term success.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. STRATEGY MEETS CREATIVITY & TECHNOLOGY. */}
      <section className="strategy-section-fullwidth relative z-[2] w-full bg-[#eaedef] text-[#0e1217] py-20 px-6 sm:px-12 md:px-16 border-t border-black/5 min-h-[720px] max-md:min-h-0 flex items-center box-border" id="our-expertise">
        <div className="strategy-container grid grid-cols-[1fr_1.3fr] max-lg:grid-cols-1 items-center gap-12 w-full max-w-[1440px] mx-auto">
          <div className="strategy-left-col flex flex-col items-start">
            <div className="strategy-index-tag font-mono text-[13px] font-semibold tracking-[0.14em] text-[#64748b] uppercase mb-5">008 / 009</div>
            <h2 className="strategy-display-heading m-0 font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(30px,3.1vw,42px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0e1217] uppercase">
              STRATEGY MEETS <br />
              CREATIVITY &amp; <br />
              <span className="strategy-heading-muted text-[#828894]">TECHNOLOGY.</span>
            </h2>
            <p className="strategy-description text-[14.5px] leading-relaxed text-[#525866] max-w-[440px] my-6">
              A perfect blend of innovative thinking, stunning design and
              powerful technology to create solutions that work.
            </p>
            <Button href="/work" size="md">
              Explore Our Work
            </Button>
          </div>

          <div className="strategy-right-col w-full">
            <div className="strategy-cards-grid grid grid-cols-3 max-md:grid-cols-1 gap-5 w-full">
              {/* Marketing Card */}
              <div className="strategy-card bg-[#f4f6f8] border border-black/[0.08] rounded-[22px] p-6 flex flex-col items-start transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-black/15 group">
                <div className="strategy-card-media w-full h-[175px] flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="/images/Futuristic Molecular Network Sculpture.avif"
                    alt="Marketing"
                    className="strategy-card-img max-w-full max-h-full object-contain transition-transform duration-400 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
                  />
                </div>
                <h3 className="strategy-card-title font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-lg font-bold text-[#0e1217] mb-2">Marketing</h3>
                <p className="strategy-card-desc text-[13.5px] leading-relaxed text-[#555d6b] m-0">
                  Data driven strategies for real growth.
                </p>
              </div>

              {/* Design Card */}
              <div className="strategy-card bg-[#f4f6f8] border border-black/[0.08] rounded-[22px] p-6 flex flex-col items-start transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-black/15 group">
                <div className="strategy-card-media w-full h-[175px] flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="/images/Faceted Gold-Trimmed Origami Sculpture.avif"
                    alt="Design"
                    className="strategy-card-img max-w-full max-h-full object-contain transition-transform duration-400 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
                  />
                </div>
                <h3 className="strategy-card-title font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-lg font-bold text-[#0e1217] mb-2">Design</h3>
                <p className="strategy-card-desc text-[13.5px] leading-relaxed text-[#555d6b] m-0">
                  Human centered design that inspires.
                </p>
              </div>

              {/* Technology Card */}
              <div className="strategy-card bg-[#f4f6f8] border border-black/[0.08] rounded-[22px] p-6 flex flex-col items-start transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:border-black/15 group">
                <div className="strategy-card-media w-full h-[175px] flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="/images/Marble Orb with Golden Shattered Lattice.avif"
                    alt="Technology"
                    className="strategy-card-img max-w-full max-h-full object-contain transition-transform duration-400 group-hover:scale-105 drop-shadow-[0_10px_20px_rgba(0,0,0,0.06)]"
                  />
                </div>
                <h3 className="strategy-card-title font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-lg font-bold text-[#0e1217] mb-2">Technology</h3>
                <p className="strategy-card-desc text-[13.5px] leading-relaxed text-[#555d6b] m-0">
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
