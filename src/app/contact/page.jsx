"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    agreeTerms: false,
  });

  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Map zoom state
  const [mapZoom, setMapZoom] = useState(1);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage("");
    }, 2800);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === "message") {
      if (value.length <= 500) {
        setCharCount(value.length);
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      showToast("Please agree to Terms and Privacy Policy.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast("Thank you! Your message has been sent.");
    }, 700);
  };

  return (
    <div className="relative min-h-screen bg-[#eaedef] text-[#0e1217] font-['Inter_Tight',sans-serif] overflow-x-hidden">
      {/* Toast popup */}
      {toastMessage && (
        <div
          className="fixed bottom-7 right-7 z-[100] inline-flex items-center gap-2.5 bg-[#0e1217] text-white px-5 py-3 rounded-full text-sm font-semibold shadow-2xl transition-all duration-300"
          role="status"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ea580c"
            strokeWidth="2.5"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =========================================================================
          SECTION 1: HERO CONTACT SECTION (MATCHING REFERENCE UI DESIGN)
          ========================================================================= */}
      <section className="relative w-full min-h-screen bg-gradient-to-b from-[#bcc0c9] via-[#9da2ab] to-[#767b84] text-[#0e1217] pt-32 sm:pt-36 lg:pt-40 pb-16 px-4 sm:px-8 lg:px-14 flex flex-col justify-between overflow-hidden">
        {/* Soft studio lighting radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_42%,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.06)_45%,transparent_75%)] pointer-events-none select-none" />

        {/* Subtle background concentric orbit circles */}
        <div className="absolute top-[46%] left-[32%] -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full border border-white/15 pointer-events-none select-none max-lg:hidden" />
        <div className="absolute top-[46%] left-[32%] -translate-x-1/2 -translate-y-1/2 w-[920px] h-[920px] rounded-full border border-white/10 pointer-events-none select-none max-lg:hidden" />
        <div className="absolute top-[46%] left-[32%] -translate-x-1/2 -translate-y-1/2 w-[1120px] h-[1120px] rounded-full border border-white/5 pointer-events-none select-none max-lg:hidden" />

        {/* Glowing 3D Neural Wireframe Mesh */}
        <div className="absolute top-[46%] left-[32%] -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] pointer-events-none select-none max-lg:hidden z-0">
          <svg
            viewBox="0 0 500 500"
            className="w-full h-full opacity-85 drop-shadow-[0_0_40px_rgba(245,158,11,0.35)]"
          >
            <defs>
              <radialGradient id="sparkGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="1" />
                <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#334155" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#475569" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Wireframe lattice connections */}
            <g stroke="url(#wireGrad)" strokeWidth="1.2" fill="none">
              <polygon points="120,180 180,120 250,130 220,200 150,220" />
              <polygon points="180,120 250,130 310,100 290,170 220,200" />
              <polygon points="250,130 310,100 370,120 360,180 290,170" />
              <polygon points="310,100 370,120 410,170 360,220 290,170" />
              <polygon points="120,180 150,220 130,290 90,260 80,200" />
              <polygon points="150,220 220,200 240,280 180,310 130,290" />
              <polygon points="220,200 290,170 330,240 280,300 240,280" />
              <polygon points="290,170 360,180 390,250 330,240" />
              <polygon points="360,180 410,170 430,230 390,250" />
              <polygon points="130,290 180,310 190,380 130,370 100,330" />
              <polygon points="180,310 240,280 270,360 210,390 190,380" />
              <polygon points="240,280 280,300 320,360 270,360" />
              <polygon points="280,300 330,240 370,310 320,360" />
              <polygon points="330,240 390,250 380,320 370,310" />
              <polygon points="190,380 210,390 230,440 170,430" />
              <polygon points="210,390 270,360 280,420 230,440" />
              <polygon points="270,360 320,360 310,420 280,420" />
            </g>

            {/* Glowing Golden Spark Nodes */}
            <circle cx="120" cy="180" r="16" fill="url(#sparkGlow)" />
            <circle cx="120" cy="180" r="4.5" fill="#ffffff" />
            <circle cx="220" cy="200" r="22" fill="url(#sparkGlow)" />
            <circle cx="220" cy="200" r="5" fill="#ffffff" />
            <circle cx="290" cy="170" r="18" fill="url(#sparkGlow)" />
            <circle cx="290" cy="170" r="4" fill="#ffffff" />
            <circle cx="360" cy="180" r="14" fill="url(#sparkGlow)" />
            <circle cx="360" cy="180" r="3.5" fill="#ffffff" />
            <circle cx="180" cy="310" r="20" fill="url(#sparkGlow)" />
            <circle cx="180" cy="310" r="4.5" fill="#ffffff" />
            <circle cx="240" cy="280" r="24" fill="url(#sparkGlow)" />
            <circle cx="240" cy="280" r="6" fill="#ffffff" />
            <circle cx="330" cy="240" r="18" fill="url(#sparkGlow)" />
            <circle cx="330" cy="240" r="4" fill="#ffffff" />
            <circle cx="270" cy="360" r="16" fill="url(#sparkGlow)" />
            <circle cx="270" cy="360" r="4" fill="#ffffff" />

            {/* Minor structural vertices */}
            <circle cx="180" cy="120" r="2.5" fill="#334155" />
            <circle cx="250" cy="130" r="3" fill="#334155" />
            <circle cx="310" cy="100" r="2.5" fill="#334155" />
            <circle cx="370" cy="120" r="2.5" fill="#334155" />
            <circle cx="410" cy="170" r="2.5" fill="#334155" />
            <circle cx="150" cy="220" r="3" fill="#334155" />
            <circle cx="130" cy="290" r="2.5" fill="#334155" />
            <circle cx="280" cy="300" r="3" fill="#334155" />
            <circle cx="390" cy="250" r="2.5" fill="#334155" />
            <circle cx="320" cy="360" r="3" fill="#334155" />
            <circle cx="210" cy="390" r="2.5" fill="#334155" />
          </svg>
        </div>

        {/* Top Header Status Row (Matching Mockup: Brand & Tagline) */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex items-center justify-between font-mono text-[11px] tracking-[0.2em] text-white/70 uppercase mb-8 select-none">
          <div className="flex items-center gap-2.5">
            <span className="w-5 h-5 rounded-full bg-black/85 text-white flex items-center justify-center text-[10px] font-bold">
              N&apos;
            </span>
            <span className="font-semibold text-white/90">PIXEL ENGINEERS</span>
          </div>
          <div className="tracking-[0.22em] text-white/60 hidden sm:block">
            DIGITAL &bull; TECHNOLOGY &bull; GROWTH
          </div>
        </div>

        {/* Main 2-Column Cards Layout */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row items-stretch justify-between gap-8 lg:gap-12">
          {/* Left Glass Card */}
          <div className="relative backdrop-blur-xl bg-white/[0.08] border border-white/25 rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-[0_24px_50px_rgba(0,0,0,0.14)] flex flex-col justify-between w-full lg:w-[44%] lg:max-w-[480px] min-h-[520px] z-10 box-border">
            <div>
              <div className="font-mono text-xs tracking-[0.22em] text-white/70 uppercase mb-8 font-semibold">
                003 / 003
              </div>

              <h1 className="font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(32px,3.6vw,50px)] font-black leading-[1.0] tracking-[-0.035em] text-white uppercase m-0">
                CONTACT US <br />
                LET&apos;S BUILD <br />
                <span className="text-white/40">YOUR NEXT</span> <br />
                BIG MOVE.
              </h1>

              <p className="mt-7 text-white/75 text-[13.5px] sm:text-sm leading-relaxed max-w-sm font-normal">
                Have a project in mind? Get in touch with our team to discuss
                your goals, explore ideas, or start a collaboration.
              </p>
            </div>

            <div className="pt-8">
              <a
                href="#global-presence"
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/30 bg-white/[0.06] hover:bg-white/[0.14] text-white font-mono text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 group"
              >
                <span>OUR OFFICES</span>
                <span className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right Glass Form Card */}
          <div className="relative backdrop-blur-xl bg-white/[0.08] border border-white/25 rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-[0_24px_50px_rgba(0,0,0,0.14)] w-full lg:w-[56%] lg:max-w-[620px] min-h-[520px] z-10 flex flex-col justify-between box-border">
            <div>
              {/* Form Tag Row with Aligned Minimalist Plus Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className="font-mono text-[11px] tracking-[0.22em] text-white/75 uppercase font-semibold flex items-center gap-2">
                  <span className="text-white/40 font-mono">—</span>
                  <span>SEND US A MESSAGE</span>
                </div>
                <span className="text-white/40 text-xl font-light select-none pointer-events-none">
                  +
                </span>
              </div>

              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 px-4">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                    ✓
                  </div>
                  <h3 className="font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-2xl font-bold text-white mb-2">
                    Message Sent Successfully
                  </h3>
                  <p className="text-white/80 text-sm max-w-md leading-relaxed mb-8">
                    Thank you, <strong>{formData.fullName || "friend"}</strong>.
                    Our team will review your inquiry and respond within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        phone: "",
                        email: "",
                        subject: "",
                        message: "",
                        agreeTerms: false,
                      });
                      setCharCount(0);
                    }}
                    className="bg-white hover:bg-neutral-100 text-black px-6 py-2.5 rounded-full font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block font-mono text-[10px] tracking-[0.18em] text-white/70 uppercase font-semibold mb-1.5"
                      >
                        FULL NAME *
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/20 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-white/60 focus:bg-white/[0.12] transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-mono text-[10px] tracking-[0.18em] text-white/70 uppercase font-semibold mb-1.5"
                      >
                        PHONE NUMBER
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/20 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-white/60 focus:bg-white/[0.12] transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Your Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-mono text-[10px] tracking-[0.18em] text-white/70 uppercase font-semibold mb-1.5"
                    >
                      YOUR EMAIL *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/20 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-white/60 focus:bg-white/[0.12] transition-all"
                    />
                  </div>

                  {/* Row 3: Subject Dropdown */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block font-mono text-[10px] tracking-[0.18em] text-white/70 uppercase font-semibold mb-1.5"
                    >
                      SUBJECT
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.06] border border-white/20 text-white text-sm focus:outline-none focus:border-white/60 focus:bg-white/[0.12] transition-all appearance-none cursor-pointer pr-10"
                      >
                        <option
                          value=""
                          disabled
                          className="bg-[#1b1f24] text-white"
                        >
                          Select a subject
                        </option>
                        <option
                          value="Web Development"
                          className="bg-[#1b1f24] text-white"
                        >
                          Web Development &amp; Next.js
                        </option>
                        <option
                          value="Mobile App"
                          className="bg-[#1b1f24] text-white"
                        >
                          Mobile App Development
                        </option>
                        <option
                          value="Custom CRM"
                          className="bg-[#1b1f24] text-white"
                        >
                          Custom CRM &amp; ERP Solutions
                        </option>
                        <option
                          value="Digital Marketing"
                          className="bg-[#1b1f24] text-white"
                        >
                          Digital Marketing &amp; SEO
                        </option>
                        <option
                          value="Custom Software"
                          className="bg-[#1b1f24] text-white"
                        >
                          Custom Software &amp; Cloud
                        </option>
                        <option
                          value="General Inquiry"
                          className="bg-[#1b1f24] text-white"
                        >
                          General Partnership Inquiry
                        </option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 pointer-events-none text-xs">
                        ▾
                      </span>
                    </div>
                  </div>

                  {/* Row 4: Your Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-mono text-[10px] tracking-[0.18em] text-white/70 uppercase font-semibold mb-1.5"
                    >
                      YOUR MESSAGE *
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        required
                        placeholder="Tell us about your project, goals, or requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 pb-7 rounded-xl bg-white/[0.06] border border-white/20 text-white placeholder:text-white/35 text-sm focus:outline-none focus:border-white/60 focus:bg-white/[0.12] transition-all resize-none"
                      />
                      <span className="absolute right-3 bottom-2 font-mono text-[10px] text-white/50 tracking-wider">
                        {charCount}/500
                      </span>
                    </div>
                  </div>

                  {/* Row 5: Agreement Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-center gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="sr-only peer"
                      />
                      <span className="w-4 h-4 rounded border border-white/40 bg-black/20 flex items-center justify-center transition-all peer-checked:bg-white peer-checked:border-white">
                        {formData.agreeTerms && (
                          <svg
                            className="w-3 h-3 text-black"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </span>
                      <span className="text-xs text-white/80 font-normal">
                        I agree to the{" "}
                        <a
                          href="/contact"
                          className="underline hover:text-white transition-colors"
                        >
                          Terms and Privacy Policy
                        </a>
                        .
                      </span>
                    </label>
                  </div>

                  {/* Row 6: Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-white hover:bg-neutral-100 disabled:opacity-70 text-[#0e1217] pl-6 pr-2 py-2 rounded-full font-mono text-xs font-bold tracking-[0.12em] uppercase inline-flex items-center gap-4 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] group cursor-pointer"
                    >
                      <span>
                        {isSubmitting ? "Sending..." : "SEND MESSAGE"}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-[#0e1217] text-white flex items-center justify-center text-sm transition-transform duration-200 group-hover:translate-x-0.5">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Full-Width Bottom Strip: Our Impact in Numbers */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto mt-16 pt-8 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            {/* Left Label */}
            <div className="flex items-center gap-6">
              <div className="font-mono text-[11px] tracking-[0.18em] text-white/75 uppercase leading-snug font-semibold">
                OUR IMPACT <br /> IN NUMBERS
              </div>
              <div className="w-8 h-[1px] bg-white/20 hidden sm:block"></div>
            </div>

            {/* 4 Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 col-span-1 md:col-span-4 gap-6 sm:gap-8">
              {/* 150+ Clients */}
              <div>
                <div className="font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none">
                  150+
                </div>
                <div className="font-mono text-[10px] tracking-[0.16em] text-white/65 uppercase mt-2">
                  CLIENTS
                </div>
              </div>

              {/* 50+ Industries */}
              <div>
                <div className="font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none">
                  50+
                </div>
                <div className="font-mono text-[10px] tracking-[0.16em] text-white/65 uppercase mt-2">
                  INDUSTRIES
                </div>
              </div>

              {/* 98% Client Satisfaction */}
              <div>
                <div className="font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none">
                  98%
                </div>
                <div className="font-mono text-[10px] tracking-[0.16em] text-white/65 uppercase mt-2">
                  CLIENT SATISFACTION
                </div>
              </div>

              {/* 10+ Years of Experience */}
              <div>
                <div className="font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-3xl sm:text-4xl font-bold text-white tracking-tight leading-none">
                  10+
                </div>
                <div className="font-mono text-[10px] tracking-[0.16em] text-white/65 uppercase mt-2">
                  YEARS OF EXPERIENCE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR GLOBAL PRESENCE (PURE TAILWIND CSS)
          ========================================================================= */}
      <section
        className="w-full py-20 px-6 sm:px-12 md:px-16 bg-[#eaedef] text-[#0e1217] border-t border-black/5"
        id="global-presence"
      >
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-[680px]">
              <div className="font-mono text-xs tracking-[0.14em] text-[#64748b] uppercase mb-4 font-semibold">
                002 / 002
              </div>
              <h2 className="font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(30px,3.2vw,44px)] font-extrabold leading-[1.08] tracking-[-0.025em] text-[#0e1217] uppercase m-0">
                Where Ideas <br />
                Create <span className="text-[#828894]">Impact.</span>
              </h2>
            </div>
            <div className="max-w-[520px]">
              <p className="text-sm leading-relaxed text-[#525866] m-0">
                We work with businesses across the globe, delivering digital
                solutions that create real value. No matter where you are, we're
                ready to collaborate.
              </p>
            </div>
          </div>

          {/* Map Showcase Card */}
          <div className="bg-white border border-black/[0.08] rounded-3xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 shadow-[0_14px_36px_rgba(0,0,0,0.03)] relative overflow-hidden">
            {/* Left Column: Vertical Stats List */}
            <div className="flex flex-col justify-center gap-7 lg:border-r border-black/[0.06] lg:pr-8">
              <div className="flex items-start gap-4">
                <div className="w-[3.5px] h-10 bg-[#ea580c] rounded-full shrink-0" />
                <div>
                  <h3 className="font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-3xl font-extrabold text-[#0e1217] leading-none m-0 tracking-tight">
                    10+
                  </h3>
                  <p className="text-xs text-[#64748b] mt-1.5 font-medium m-0">
                    Countries Served
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[3.5px] h-10 bg-[#ea580c] rounded-full shrink-0" />
                <div>
                  <h3 className="font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-3xl font-extrabold text-[#0e1217] leading-none m-0 tracking-tight">
                    150+
                  </h3>
                  <p className="text-xs text-[#64748b] mt-1.5 font-medium m-0">
                    Projects Worldwide
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-[3.5px] h-10 bg-[#ea580c] rounded-full shrink-0" />
                <div>
                  <h3 className="font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-3xl font-extrabold text-[#0e1217] leading-none m-0 tracking-tight">
                    50+
                  </h3>
                  <p className="text-xs text-[#64748b] mt-1.5 font-medium m-0">
                    Global Clients
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: World Map with Glowing Connected Arcs */}
            <div className="relative w-full min-h-[380px] flex items-center justify-center overflow-hidden bg-[#fbfcfd] rounded-2xl border border-black/[0.04] p-2">
              <svg
                viewBox="0 0 1000 480"
                className="w-full h-full max-h-[460px]"
                style={{
                  transform: `scale(${mapZoom})`,
                  transformOrigin: "center center",
                  transition: "transform 0.3s ease",
                }}
              >
                <defs>
                  {/* Subtle map gradient */}
                  <linearGradient
                    id="arcGlow"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#ea580c" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fb923c" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* CONTINENTS & MAJOR LANDMASSES IN CLEAN LIGHT SLATE GRAY */}
                <g
                  fill="#cbd5e1"
                  stroke="#b0bec5"
                  strokeWidth="0.8"
                  strokeLinejoin="round"
                  opacity="0.85"
                >
                  {/* North America */}
                  <path d="M 60,65 L 120,55 L 175,60 L 210,50 L 240,65 L 285,60 L 295,95 L 315,105 L 305,125 L 275,130 L 280,155 L 295,170 L 270,185 L 250,175 L 235,190 L 220,180 L 195,215 L 180,245 L 170,240 L 165,220 L 140,195 L 125,160 L 135,135 L 110,130 L 85,95 Z" />
                  {/* Alaska */}
                  <path d="M 50,60 L 85,55 L 90,85 L 60,85 L 45,75 Z" />
                  {/* Greenland */}
                  <path d="M 370,30 L 425,25 L 445,45 L 435,80 L 415,95 L 380,85 L 365,60 Z" />
                  {/* South America */}
                  <path d="M 220,275 L 255,270 L 290,280 L 335,300 L 345,335 L 330,370 L 305,425 L 290,440 L 280,430 L 270,380 L 250,335 L 230,305 L 215,285 Z" />
                  {/* Europe */}
                  <path d="M 445,95 L 480,80 L 515,85 L 525,115 L 505,125 L 520,140 L 490,165 L 475,175 L 450,170 L 435,145 L 440,125 L 435,105 Z" />
                  {/* Scandinavia */}
                  <path d="M 480,60 L 500,55 L 515,75 L 495,85 Z" />
                  {/* British Isles */}
                  <path d="M 430,110 L 445,105 L 450,125 L 438,135 L 425,125 Z" />
                  {/* Africa */}
                  <path d="M 450,178 L 495,168 L 545,185 L 565,225 L 560,285 L 540,345 L 510,380 L 495,385 L 475,345 L 450,290 L 425,230 L 430,195 Z" />
                  {/* Madagascar */}
                  <path d="M 575,320 L 588,315 L 585,355 L 572,360 Z" />
                  {/* Eurasia & Russia */}
                  <path d="M 520,90 L 580,75 L 670,60 L 760,55 L 840,65 L 900,80 L 890,115 L 850,125 L 800,120 L 745,115 L 680,110 L 610,120 L 555,115 L 530,100 Z" />
                  {/* Middle East */}
                  <path d="M 535,165 L 565,160 L 590,185 L 610,205 L 585,235 L 565,225 L 550,195 Z" />
                  {/* Asia / China */}
                  <path d="M 610,120 L 720,115 L 790,125 L 840,150 L 825,185 L 780,215 L 730,225 L 670,210 L 635,175 L 600,165 Z" />
                  {/* India */}
                  <path d="M 640,205 L 675,200 L 690,230 L 670,270 L 650,275 L 635,240 Z" />
                  {/* Southeast Asia */}
                  <path d="M 725,220 L 755,225 L 765,260 L 745,275 L 730,260 Z" />
                  {/* Japan */}
                  <path d="M 845,145 L 860,140 L 855,175 L 840,180 Z" />
                  {/* Australia */}
                  <path d="M 785,310 L 835,295 L 880,315 L 895,355 L 870,405 L 825,410 L 785,385 L 765,345 Z" />
                  {/* New Zealand */}
                  <path d="M 925,385 L 938,380 L 930,410 L 920,415 Z" />
                </g>

                {/* CONNECTED GLOWING FLIGHT PATH ARCS RADIATING FROM TEXAS (x:240, y:180) */}
                <g
                  fill="none"
                  stroke="rgba(234, 88, 12, 0.45)"
                  strokeWidth="1.4"
                  strokeDasharray="4 4"
                >
                  <path d="M 240,180 Q 345,100 450,120" />
                  <path d="M 240,180 Q 365,110 490,130" />
                  <path d="M 240,180 Q 285,280 310,370" />
                  <path d="M 240,180 Q 545,50 850,160" />
                  <path d="M 240,180 Q 495,160 750,265" />
                  <path d="M 240,180 Q 550,300 860,375" />
                  <path d="M 450,120 Q 650,90 850,160" />
                  <path d="M 490,130 Q 620,180 750,265" />
                  <path d="M 750,265 Q 805,320 860,375" />
                </g>

                {/* DESTINATION NODES */}
                <circle cx="450" cy="120" r="3" fill="#ea580c" />
                <circle
                  cx="450"
                  cy="120"
                  r="7"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1"
                  opacity="0.6"
                />

                <circle cx="490" cy="130" r="3" fill="#ea580c" />
                <circle
                  cx="490"
                  cy="130"
                  r="6"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1"
                  opacity="0.6"
                />

                <circle cx="310" cy="370" r="3" fill="#ea580c" />
                <circle
                  cx="310"
                  cy="370"
                  r="7"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1"
                  opacity="0.6"
                />

                <circle cx="850" cy="160" r="3" fill="#ea580c" />
                <circle
                  cx="850"
                  cy="160"
                  r="7"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1"
                  opacity="0.6"
                />

                <circle cx="750" cy="265" r="3" fill="#ea580c" />
                <circle
                  cx="750"
                  cy="265"
                  r="7"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1"
                  opacity="0.6"
                />

                <circle cx="860" cy="375" r="3" fill="#ea580c" />
                <circle
                  cx="860"
                  cy="375"
                  r="7"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="1"
                  opacity="0.6"
                />

                {/* TEXAS HEADQUARTERS HUB (x:240, y:180) */}
                <circle
                  cx="240"
                  cy="180"
                  r="14"
                  fill="rgba(234, 88, 12, 0.2)"
                />
                <circle
                  cx="240"
                  cy="180"
                  r="9"
                  fill="none"
                  stroke="#ea580c"
                  strokeWidth="2"
                />
                <circle cx="240" cy="180" r="4.5" fill="#ea580c" />
              </svg>

              {/* Texas USA Tooltip Pin */}
              <div className="absolute top-[37%] left-[24%] -translate-x-1/2 -translate-y-full bg-[#0e1217] text-white px-3 py-1.5 rounded-full text-[11px] font-semibold flex items-center gap-1.5 shadow-xl pointer-events-none z-10 whitespace-nowrap">
                <span>Texas, USA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c] shadow-[0_0_8px_#ea580c]" />
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-4 right-4 flex flex-col bg-white border border-black/10 rounded-lg shadow-md overflow-hidden z-10">
                <button
                  type="button"
                  onClick={() => setMapZoom((z) => Math.min(1.4, z + 0.1))}
                  className="w-8 h-8 flex items-center justify-center text-[#0e1217] text-base font-bold hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <div className="w-full h-[1px] bg-black/10" />
                <button
                  type="button"
                  onClick={() => setMapZoom((z) => Math.max(0.8, z - 0.1))}
                  className="w-8 h-8 flex items-center justify-center text-[#0e1217] text-base font-bold hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Zoom out"
                >
                  −
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
