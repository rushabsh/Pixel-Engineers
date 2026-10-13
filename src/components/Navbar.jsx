'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Work', href: '/work' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on route change, screen resize, or Escape key
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 860) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container" aria-label="Main Navigation">
        {/* Brand Logo */}
        <Link
          href="/"
          className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity navbar-brand-icon"
          aria-label="Home"
          onClick={() => setMobileMenuOpen(false)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 16 16"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Pixelated Chevron Logo */}
            <rect x="2" y="2" width="2.2" height="2.2" rx="0.3" />
            <rect x="4.6" y="4.6" width="2.2" height="2.2" rx="0.3" />
            <rect x="7.2" y="7.2" width="2.2" height="2.2" rx="0.3" />
            <rect x="4.6" y="9.8" width="2.2" height="2.2" rx="0.3" />
            <rect x="2" y="12.4" width="2.2" height="2.2" rx="0.3" />

            <rect x="5.2" y="2" width="2.2" height="2.2" rx="0.3" />
            <rect x="7.8" y="4.6" width="2.2" height="2.2" rx="0.3" />
            <rect x="10.4" y="7.2" width="2.2" height="2.2" rx="0.3" />
            <rect x="7.8" y="9.8" width="2.2" height="2.2" rx="0.3" />
            <rect x="5.2" y="12.4" width="2.2" height="2.2" rx="0.3" />
          </svg>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="navbar-links">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                <span className="link-text">{item.name}</span>
                {isActive && <span className="active-glow-dot" />}
              </Link>
            );
          })}
        </div>

        {/* Right CTA & Mobile Toggle */}
        <div className="navbar-actions">
          <Button href="/contact" size="sm" className="navbar-cta-desktop">
            Let's Talk
          </Button>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={`mobile-toggle-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="bar" />
            <span className="bar" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'is-visible' : ''}`}>
        <div className="mobile-menu-links">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="mobile-nav-number">0{navItems.indexOf(item) + 1}</span>
                <span className="mobile-nav-name">{item.name}</span>
              </Link>
            );
          })}
          <div className="mobile-drawer-cta">
            <Button
              href="/contact"
              size="md"
              fullWidth
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
