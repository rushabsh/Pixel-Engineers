'use client';

import React, { useState } from 'react';
import Button from '../../components/Button';
import './contact.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    agreeTerms: false,
  });

  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // CTA form state
  const [ctaEmail, setCtaEmail] = useState('');
  const [ctaSubmitted, setCtaSubmitted] = useState(false);

  // Map zoom state
  const [mapZoom, setMapZoom] = useState(1);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 2800);
  };

  const handleCopy = (text, label) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      showToast(`${label} copied to clipboard!`);
    } else {
      showToast(`${label}: ${text}`);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name === 'message') {
      if (value.length <= 500) {
        setCharCount(value.length);
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      showToast('Please agree to Terms and Privacy Policy.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      showToast('Thank you! Your message has been sent.');
    }, 700);
  };

  const handleCtaSubmit = (e) => {
    e.preventDefault();
    if (!ctaEmail) return;
    setCtaSubmitted(true);
    setTimeout(() => {
      setCtaSubmitted(false);
      setCtaEmail('');
      showToast('Free trial initiated! Welcome aboard.');
    }, 1200);
  };

  return (
    <div className="contact-page-root">
      {/* Toast popup */}
      {toastMessage && (
        <div className="contact-toast" role="status">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* =========================================================================
          SECTION 1: HERO + 3 INFO CARDS + FORM (SAME AS REFERENCE IMAGE)
          ========================================================================= */}
      <section className="contact-section-wrapper contact-hero-section">
        <div className="contact-container">
          {/* Header Block */}
          <div className="contact-hero-header">
            <div className="contact-index-tag">001 / 002</div>
            <h1 className="contact-display-heading">
              Reach Out to <br />
              Our Team <span className="contact-heading-muted">for Help.</span>
            </h1>
            <p className="contact-lead-desc">
              Whether you have a question, need technical assistance, or just want to explore new opportunities — we're here to help. Fill out the form and our team will get back to you shortly.
            </p>
          </div>

          {/* Main 2-Column Grid: 3 Left Info Cards + Right Form Card */}
          <div className="contact-main-grid-layout">
            {/* Left Column: 3 Info Cards */}
            <div className="contact-info-cards-col">
              {/* Card 1: Our Office */}
              <div
                className="contact-info-glass-card"
                onClick={() => handleCopy('2461 Royal Ln, Mesquite, Texas, 75149', 'Address')}
                title="Click to copy address"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCopy('2461 Royal Ln, Mesquite, Texas, 75149', 'Address')}
              >
                <div className="info-card-left">
                  <div className="info-card-icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div className="info-card-meta">
                    <span className="info-card-label">OUR OFFICE</span>
                    <p className="info-card-value">2461 Royal Ln, Mesquite, Texas, 75149</p>
                  </div>
                </div>
                <div className="info-card-artwork">
                  <img
                    src="/images/Faceted Gold-Trimmed Origami Sculpture.avif"
                    alt="Office 3D Geometry"
                    className="info-artwork-thumbnail"
                  />
                </div>
              </div>

              {/* Card 2: Email Us */}
              <div
                className="contact-info-glass-card"
                onClick={() => handleCopy('hello@pixelengineers.com', 'Email')}
                title="Click to copy email"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCopy('hello@pixelengineers.com', 'Email')}
              >
                <div className="info-card-left">
                  <div className="info-card-icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="3" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div className="info-card-meta">
                    <span className="info-card-label">EMAIL US</span>
                    <p className="info-card-value">hello@pixelengineers.com</p>
                  </div>
                </div>
                <div className="info-card-artwork">
                  <img
                    src="/images/Marble Orb with Golden Shattered Lattice.avif"
                    alt="Email 3D Orb"
                    className="info-artwork-thumbnail"
                  />
                </div>
              </div>

              {/* Card 3: Call Us */}
              <div
                className="contact-info-glass-card"
                onClick={() => handleCopy('+1 (214) 325 8846', 'Phone number')}
                title="Click to copy phone"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCopy('+1 (214) 325 8846', 'Phone number')}
              >
                <div className="info-card-left">
                  <div className="info-card-icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div className="info-card-meta">
                    <span className="info-card-label">CALL US</span>
                    <p className="info-card-value">+1 (214) 325 8846</p>
                  </div>
                </div>
                <div className="info-card-artwork">
                  <img
                    src="/images/Faceted Gold-Trimmed Origami Sculpture.avif"
                    alt="Call 3D Geometry"
                    className="info-artwork-thumbnail"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Form Card */}
            <div className="contact-form-panel">
              <div className="form-sub-tag">
                <span className="form-orange-dash">—</span>
                <span>SEND US A MESSAGE</span>
              </div>
              <h2 className="form-panel-heading">
                Let's Start a <span className="contact-highlight-orange">Conversation.</span>
              </h2>

              {submitted ? (
                <div className="form-success-box">
                  <div className="form-success-icon">✓</div>
                  <h3 className="form-success-title">Message Sent Successfully</h3>
                  <p className="form-success-desc">
                    Thank you, <strong>{formData.fullName || 'friend'}</strong>. Our team will review your inquiry and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        phone: '',
                        email: '',
                        subject: '',
                        message: '',
                        agreeTerms: false,
                      });
                      setCharCount(0);
                    }}
                    className="contact-send-btn"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-grid">
                  {/* Row 1: Full Name & Phone Number */}
                  <div className="form-row-two-col">
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">Full Name</label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        placeholder="Enter your name"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Row 2: Your Email */}
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>

                  {/* Row 3: Subject Dropdown */}
                  <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <div className="form-select-wrapper">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-select"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="Web Development">Web Development & Next.js</option>
                        <option value="Mobile App">Mobile App Development</option>
                        <option value="Digital Marketing">Digital Marketing & SEO</option>
                        <option value="Custom Software">Custom Software & Cloud</option>
                        <option value="General Inquiry">General Partnership Inquiry</option>
                      </select>
                      <span className="select-chevron">▾</span>
                    </div>
                  </div>

                  {/* Row 4: Your Message */}
                  <div className="form-group">
                    <label htmlFor="message" className="form-label">Your Message</label>
                    <div className="form-textarea-wrapper">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                      />
                      <span className="form-char-counter">{charCount}/500</span>
                    </div>
                  </div>

                  {/* Row 5: Agreement Checkbox */}
                  <div className="form-checkbox-row">
                    <label className="checkbox-container">
                      <input
                        type="checkbox"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="checkbox-input"
                      />
                      <span className="checkbox-custom">
                        {formData.agreeTerms && <span className="checkbox-check">✓</span>}
                      </span>
                      <span className="checkbox-label-text">
                        I agree to the <a href="/contact" className="policy-link">Terms and Privacy Policy.</a>
                      </span>
                    </label>
                  </div>

                  {/* Row 6: Submit Button */}
                  <div className="contact-submit-row">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      loading={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR GLOBAL PRESENCE (SAME AS REFERENCE IMAGE)
          ========================================================================= */}
      <section className="contact-section-wrapper contact-presence-section" id="global-presence">
        <div className="contact-container">
          {/* Section Header */}
          <div className="contact-presence-header">
            <div className="presence-header-left">
              <div className="contact-index-tag">002 / 002</div>
              <h2 className="contact-display-heading">
                Where Ideas <br />
                Create <span className="contact-heading-muted">Impact.</span>
              </h2>
            </div>
            <div className="presence-header-right">
              <p className="contact-lead-desc">
                We work with businesses across the globe, delivering digital solutions that create real value. No matter where you are, we're ready to collaborate.
              </p>
            </div>
          </div>

          {/* Map Showcase Card */}
          <div className="presence-map-card">
            {/* Left Column: Vertical Stats List */}
            <div className="presence-stats-column">
              <div className="presence-stat-block">
                <div className="stat-orange-bar" />
                <div>
                  <h3 className="presence-stat-number">10+</h3>
                  <p className="presence-stat-caption">Countries Served</p>
                </div>
              </div>

              <div className="presence-stat-block">
                <div className="stat-orange-bar" />
                <div>
                  <h3 className="presence-stat-number">150+</h3>
                  <p className="presence-stat-caption">Projects Worldwide</p>
                </div>
              </div>

              <div className="presence-stat-block">
                <div className="stat-orange-bar" />
                <div>
                  <h3 className="presence-stat-number">50+</h3>
                  <p className="presence-stat-caption">Global Clients</p>
                </div>
              </div>
            </div>

            {/* Right Column: World Map with Glowing Connected Arcs */}
            <div className="presence-map-viewport">
              <svg
                viewBox="0 0 1000 480"
                className="presence-map-svg"
                style={{ transform: `scale(${mapZoom})`, transformOrigin: 'center center', transition: 'transform 0.3s ease' }}
              >
                <defs>
                  {/* Subtle map gradient */}
                  <linearGradient id="arcGlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ea580c" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#fb923c" stopOpacity="0.2" />
                  </linearGradient>
                </defs>

                {/* CONTINENTS & MAJOR LANDMASSES IN CLEAN LIGHT SLATE GRAY */}
                <g fill="#cbd5e1" stroke="#b0bec5" strokeWidth="0.8" strokeLinejoin="round" opacity="0.85">
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
                <g fill="none" stroke="rgba(234, 88, 12, 0.45)" strokeWidth="1.4" strokeDasharray="4 4">
                  {/* Texas to London (x:450, y:120) */}
                  <path d="M 240,180 Q 345,100 450,120" />
                  {/* Texas to Frankfurt (x:490, y:130) */}
                  <path d="M 240,180 Q 365,110 490,130" />
                  {/* Texas to São Paulo (x:310, y:370) */}
                  <path d="M 240,180 Q 285,280 310,370" />
                  {/* Texas to Tokyo (x:850, y:160) */}
                  <path d="M 240,180 Q 545,50 850,160" />
                  {/* Texas to Singapore (x:750, y:265) */}
                  <path d="M 240,180 Q 495,160 750,265" />
                  {/* Texas to Sydney (x:860, y:375) */}
                  <path d="M 240,180 Q 550,300 860,375" />
                  {/* London to Tokyo */}
                  <path d="M 450,120 Q 650,90 850,160" />
                  {/* Frankfurt to Singapore */}
                  <path d="M 490,130 Q 620,180 750,265" />
                  {/* Singapore to Sydney */}
                  <path d="M 750,265 Q 805,320 860,375" />
                </g>

                {/* DESTINATION NODES */}
                {/* London */}
                <circle cx="450" cy="120" r="3" fill="#ea580c" />
                <circle cx="450" cy="120" r="7" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.6" />

                {/* Frankfurt */}
                <circle cx="490" cy="130" r="3" fill="#ea580c" />
                <circle cx="490" cy="130" r="6" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.6" />

                {/* São Paulo */}
                <circle cx="310" cy="370" r="3" fill="#ea580c" />
                <circle cx="310" cy="370" r="7" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.6" />

                {/* Tokyo */}
                <circle cx="850" cy="160" r="3" fill="#ea580c" />
                <circle cx="850" cy="160" r="7" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.6" />

                {/* Singapore */}
                <circle cx="750" cy="265" r="3" fill="#ea580c" />
                <circle cx="750" cy="265" r="7" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.6" />

                {/* Sydney */}
                <circle cx="860" cy="375" r="3" fill="#ea580c" />
                <circle cx="860" cy="375" r="7" fill="none" stroke="#ea580c" strokeWidth="1" opacity="0.6" />

                {/* TEXAS HEADQUARTERS HUB (x:240, y:180) - PULSING RINGS */}
                <circle cx="240" cy="180" r="14" fill="rgba(234, 88, 12, 0.2)" />
                <circle cx="240" cy="180" r="9" fill="none" stroke="#ea580c" strokeWidth="2" />
                <circle cx="240" cy="180" r="4.5" fill="#ea580c" />
              </svg>

              {/* Texas USA Tooltip Pin */}
              <div className="texas-tooltip-pin">
                <span>Texas, USA</span>
                <span className="texas-dot" />
              </div>

              {/* Zoom Controls */}
              <div className="presence-zoom-controls">
                <button
                  type="button"
                  onClick={() => setMapZoom((z) => Math.min(1.4, z + 0.1))}
                  className="zoom-btn"
                  aria-label="Zoom in"
                >
                  +
                </button>
                <div className="zoom-divider" />
                <button
                  type="button"
                  onClick={() => setMapZoom((z) => Math.max(0.8, z - 0.1))}
                  className="zoom-btn"
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
