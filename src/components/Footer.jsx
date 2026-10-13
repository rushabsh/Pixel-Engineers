'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Background Warm Bronze/Orange Glows */}
      <div
        className="footer-glow footer-glow-1"
        style={{
          background:
            'radial-gradient(ellipse at bottom right, rgba(234, 110, 42, 0.45), rgba(160, 70, 20, 0.25) 45%, transparent 75%)',
        }}
      />
      <div
        className="footer-glow footer-glow-2"
        style={{
          background:
            'radial-gradient(circle, rgba(190, 95, 30, 0.35), transparent 70%)',
        }}
      />

      <div className="footer-inner">
        {/* Main Content Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand & Short Company Description */}
          <div className="footer-col-brand">
            {/* Logo */}
            <Link href="/" className="footer-logo">
              <div className="footer-logo-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <span className="footer-brand-title">PIXEL ENGINEERS</span>
            </Link>

            {/* Short Company Description */}
            <p className="footer-info-text" style={{ marginTop: '14px', lineHeight: '1.6', maxWidth: '280px' }}>
              We help businesses grow through digital marketing, modern technology, and custom software solutions.
            </p>

            {/* Social Icons */}
            <div className="footer-social-row" style={{ marginTop: '20px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer-social-btn">
                <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
                <svg className="social-svg" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="footer-social-btn">
                <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
                <svg className="social-svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">Company</h3>
            <ul className="footer-links-list">
              <li><Link href="/about" className="footer-link">About Us</Link></li>
              <li><Link href="/services" className="footer-link">Services</Link></li>
              <li><Link href="/work" className="footer-link">Work</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">Services</h3>
            <ul className="footer-links-list">
              <li><Link href="/services" className="footer-link">Digital Marketing</Link></li>
              <li><Link href="/services" className="footer-link">Web Development</Link></li>
              <li><Link href="/services" className="footer-link">Software Development</Link></li>
              <li><Link href="/services" className="footer-link">Mobile App Development</Link></li>
              <li><Link href="/services" className="footer-link">Branding</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div className="footer-nav-col">
            <h3 className="footer-col-title">Contact</h3>
            <ul className="footer-links-list">
              <li><a href="mailto:hello@pixelengineers.com" className="footer-link">Email</a></li>
              <li><a href="tel:+12025550130" className="footer-link">Phone</a></li>
              <li><span className="footer-link" style={{ cursor: 'default' }}>Sheridan, WY 82801</span></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">Social Media</a></li>
            </ul>
          </div>
        </div>

        {/* Huge Watermark Brand Text: PIXEL ENGINEERS */}
        <div className="footer-watermark-row">
          <span className="footer-watermark-text">PIXEL ENGINEERS</span>
        </div>

        {/* Bottom Bar with Separator */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            © 2026 Pixel Engineers. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link href="/about" className="footer-bottom-link">
              Privacy Policy
            </Link>
            <Link href="/about" className="footer-bottom-link">
              Terms of Service
            </Link>
            <button type="button" className="footer-settings-btn">
              Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
