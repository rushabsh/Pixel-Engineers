"use client";

import React, { useState, useEffect, useRef } from "react";

const servicesCardsData = [
  {
    id: "service-card-1",
    step: "01 / 06",
    subTag: "01 / 06 • CUSTOM ARCHITECTURE",
    title: "Custom Software Development",
    desc: "Bespoke enterprise software, microservices, and workflow automation built for reliability and scale.",
    image: "/images/Glowing Voxel Cube Network.avif",
    alt: "Custom Software Development",
    statLabel: "Enterprise Performance",
    statValue: "99.99%",
    statBadge: "Microservices Scale",
    chartBars: [45, 65, 55, 85, 75, 100],
    chartMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    actionText: "View Details",
  },
  {
    id: "service-card-2",
    step: "02 / 06",
    subTag: "02 / 06 • NEXT.JS & FULL-STACK",
    title: "Website & Web App Development",
    desc: "High-performance websites and full-stack web applications engineered for speed, SEO, and conversions.",
    image: "/images/Golden Neural Network Mesh.avif",
    alt: "Website & Web App Development",
    statLabel: "Core Web Vitals",
    statValue: "99 / 100",
    statBadge: "Lighthouse Speed",
    chartBars: [60, 75, 80, 90, 95, 99],
    chartMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    actionText: "View Details",
  },
  {
    id: "service-card-3",
    step: "03 / 06",
    subTag: "03 / 06 • DATA & WORKFLOW CRM",
    title: "Custom CRM & ERP Solutions",
    desc: "Tailored CRM systems and business management software to centralize customer data and accelerate sales pipelines.",
    image: "/images/Futuristic Black and Gold UI Showcase.avif",
    alt: "Custom CRM & ERP Solutions",
    statLabel: "Pipeline Acceleration",
    statValue: "+4.8x",
    statBadge: "Automated Pipeline",
    chartBars: [35, 50, 68, 72, 88, 98],
    chartMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    actionText: "View Details",
  },
  {
    id: "service-card-4",
    step: "04 / 06",
    subTag: "04 / 06 • AEO & SEARCH RANKING",
    title: "Digital Marketing & AEO / SEO",
    desc: "Data-driven SEO, Answer Engine Optimization (AEO), and performance marketing to dominate search and AI platforms.",
    image: "/images/Faceted Gold-Trimmed Origami Sculpture.avif",
    alt: "Digital Marketing & AEO / SEO",
    statLabel: "AI Engine Visibility",
    statValue: "+380%",
    statBadge: "ChatGPT & Search Rank",
    chartBars: [40, 58, 70, 82, 92, 100],
    chartMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    actionText: "View Details",
  },
  {
    id: "service-card-5",
    step: "05 / 06",
    subTag: "05 / 06 • DESIGN SYSTEM & UI",
    title: "Branding & UI/UX Design",
    desc: "Memorable brand identities and intuitive digital user experiences that turn visitors into loyal customers.",
    image: "/images/Marble Orb with Golden Shattered Lattice.avif",
    alt: "Branding & UI/UX Design",
    statLabel: "User Retention Rate",
    statValue: "+64%",
    statBadge: "Conversion-Focused",
    chartBars: [50, 62, 74, 80, 88, 96],
    chartMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    actionText: "View Details",
  },
  {
    id: "service-card-6",
    step: "06 / 06",
    subTag: "06 / 06 • CLOUD & SECURITY",
    title: "IT Consulting & Cloud Architecture",
    desc: "Strategic technical guidance, secure cloud infrastructure, and system integrations for modern enterprises.",
    image: "/images/Luxury Mosaic Tech Globe.avif",
    alt: "IT Consulting & Cloud Architecture",
    statLabel: "Global Edge Latency",
    statValue: "0.12s",
    statBadge: "AWS & SOC2 Certified",
    chartBars: [88, 85, 92, 95, 98, 100],
    chartMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    actionText: "View Details",
  },
];

export default function EnergyScrollSection() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const updateActiveStep = () => {
      if (!sectionRef.current) return;
      const cards = sectionRef.current.querySelectorAll(".energy-card-item");
      if (!cards.length) return;

      const activationPoint = window.innerHeight * 0.4;
      let activeIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const distance = activationPoint - rect.top;
        if (distance >= 0 && distance < closestDistance) {
          closestDistance = distance;
          activeIndex = index;
        }
      });

      setActiveStep(activeIndex);
      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveStep);
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    updateActiveStep();

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const handleStepClick = (e, index, cardId) => {
    e.preventDefault();
    setActiveStep(index);
    const target = document.getElementById(cardId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="digital-solutions"
      className="relative w-full bg-white text-[#171b17] py-12 sm:py-16 md:py-20 px-4 sm:px-8 lg:px-14 border-t border-black/[0.06] overflow-visible"
    >
      {/* Layout grid */}
      <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-[7%] items-start">
        {/* LEFT: STICKY SIDEBAR */}
        <div className="relative lg:sticky lg:top-[85px] lg:h-[calc(100vh-100px)] lg:min-h-[520px] flex items-start w-full">
          <div className="w-full">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-slate-200 bg-white rounded-full text-[10px] tracking-[0.14em] font-bold text-slate-700 shadow-sm uppercase font-mono mb-5">
              <span className="w-2 h-2 rounded-full bg-[#ea580c] inline-block" />
              <span>001 / 006 • DIGITAL SOLUTIONS</span>
            </div>

            {/* Heading */}
            <h2 className="text-[clamp(30px,3.4vw,46px)] leading-[1.08] tracking-[-0.04em] font-bold text-[#10151c] uppercase m-0">
              Digital Solutions
              <br />
              Built Around
              <br />
              <span className="text-[#718096] font-semibold">Your Goals.</span>
            </h2>

            {/* Description */}
            <p className="mt-4 max-w-[430px] text-[15px] leading-relaxed text-[#586477]">
              From custom software and website development to proprietary CRM
              systems and data-driven digital marketing, we engineer scalable
              solutions that drive measurable business growth.
            </p>

            {/* Timeline */}
            <div className="mt-8 flex flex-col gap-4">
              {servicesCardsData.map((item, index) => {
                const isActive = activeStep === index;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleStepClick(e, index, item.id)}
                    className={`relative flex flex-col gap-1 text-left no-underline transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "pl-3.5 text-[#11151b] opacity-100"
                        : "pl-0 text-slate-400 opacity-80 hover:opacity-100 hover:text-slate-700"
                    }`}
                  >
                    {/* Active vertical bar */}
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#ea580c] rounded-full shadow-[0_0_10px_rgba(234,88,12,0.35)]" />
                    )}

                    <span
                      className={`font-mono text-[10px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
                        isActive ? "text-[#ea580c]" : "text-inherit"
                      }`}
                    >
                      {item.step}
                    </span>

                    <strong
                      className={`text-[14px] tracking-tight flex items-center justify-between transition-all duration-300 ${
                        isActive
                          ? "font-bold text-[#11151b]"
                          : "font-medium text-inherit"
                      }`}
                    >
                      <span>{item.title}</span>
                      <i
                        className={`not-italic text-[16px] ml-2 transition-transform duration-300 ${
                          isActive
                            ? "text-[#ea580c] translate-x-1"
                            : "text-inherit"
                        }`}
                      >
                        ›
                      </i>
                    </strong>
                  </a>
                );
              })}
            </div>

            {/* Explore Services Button */}
            <div className="mt-8">
              <a
                href="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#10151c] hover:bg-[#ea580c] text-white text-[13px] font-semibold tracking-wide transition-all duration-300 shadow-md hover:-translate-y-0.5"
              >
                <span>Explore Services</span>
                <span className="text-sm">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT: OVERLAPPING CARDS */}
        <div className="relative w-full pb-[12vh]">
          {servicesCardsData.map((card, index) => {
            const zClass =
              index === 0
                ? "z-10"
                : index === 1
                ? "z-20"
                : index === 2
                ? "z-30"
                : index === 3
                ? "z-40"
                : index === 4
                ? "z-50"
                : "z-[60]";

            return (
              <article
                key={card.id}
                id={card.id}
                className={`energy-card-item sticky top-[70px] sm:top-[75px] lg:top-[85px] scroll-mt-[90px] w-full mb-12 sm:mb-16 lg:mb-[90px] bg-white rounded-[20px] overflow-hidden shadow-[0_14px_40px_rgba(15,23,42,0.09)] border border-black/[0.06] origin-top ${zClass}`}
              >
                {/* IMAGE CONTAINER */}
                <div className="group relative w-full h-[300px] sm:h-[350px] lg:h-[420px] overflow-hidden rounded-t-[20px] bg-slate-900">
                  <img
                    src={card.image}
                    alt={card.alt}
                    loading={index < 2 ? "eager" : "lazy"}
                    className="block w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  />

                  {/* Gradient Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

                  {/* Bottom Left Badge on Image */}
                  <div className="absolute bottom-4 left-5 z-10 flex items-center gap-2.5">
                    <span className="font-mono text-[11px] font-semibold text-white tracking-[0.15em]">
                      {card.step}
                    </span>
                    <span className="w-6 h-[1px] bg-white/60" />
                    <span className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-white/90">
                      {card.subTag}
                    </span>
                  </div>

                  {/* Floating Statistics Glass Widget (Top Right) */}
                  <div className="pointer-events-none absolute right-4 top-4 z-10 w-[190px] sm:w-[220px] rounded-2xl border border-white/25 bg-black/60 backdrop-blur-xl p-4 text-white shadow-2xl">
                    <span className="block font-mono text-[9px] font-semibold uppercase tracking-[0.13em] text-white/70">
                      {card.statLabel}
                    </span>

                    <div className="my-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-white">
                      {card.statValue}
                    </div>

                    {/* Mini Bar Chart */}
                    <div className="mt-2.5 border-t border-white/15 pt-2.5">
                      <div className="flex h-9 items-end justify-between gap-1.5 px-0.5">
                        {card.chartBars.map((height, bIdx) => {
                          const isLast = bIdx === card.chartBars.length - 1;
                          return (
                            <div
                              key={bIdx}
                              className="flex h-full flex-1 items-end justify-center"
                            >
                              <div
                                className={`w-2 rounded-t-sm transition-all duration-500 ${
                                  isLast
                                    ? "bg-[#ea580c] shadow-[0_0_10px_rgba(234,88,12,0.45)]"
                                    : "bg-white/45"
                                }`}
                                style={{ height: `${Math.max(height, 18)}%` }}
                              />
                            </div>
                          );
                        })}
                      </div>

                      <div className="mt-1.5 flex justify-between font-mono text-[8px] text-white/60">
                        {card.chartMonths.map((m) => (
                          <span key={m}>{m}</span>
                        ))}
                      </div>
                    </div>

                    {/* Status Line */}
                    <div className="mt-2.5 flex items-center justify-between border-t border-white/15 pt-2">
                      <div className="flex items-center gap-1.5 text-[10px] font-medium text-white/90 truncate">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span className="truncate">{card.statBadge}</span>
                      </div>

                      <span className="ml-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-wider text-emerald-300">
                        Active
                      </span>
                    </div>
                  </div>
                </div>

                {/* CAPTION FOOTER */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:px-6 sm:py-5 bg-white">
                  <div className="flex-1">
                    <span className="flex items-center gap-2 text-[#ea580c] font-mono text-[10px] font-bold tracking-[0.14em] uppercase mb-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                      {card.subTag}
                    </span>
                    <p className="text-[14px] leading-relaxed text-[#596477] m-0">
                      {card.desc}
                    </p>
                  </div>

                  <a
                    href="/services"
                    className="inline-flex shrink-0 items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#ea580c] border border-slate-200 hover:border-[#ea580c] text-slate-800 hover:text-white text-[12px] font-semibold whitespace-nowrap shadow-sm transition-all duration-300 self-start sm:self-center"
                  >
                    <span>{card.actionText}</span>
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
