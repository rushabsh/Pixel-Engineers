'use client';

import React from 'react';
import Button from './Button';
import './cta-section.css';

/**
 * Dynamic CTA Section ("HAVE AN IDEA? LET'S BRING IT TO LIFE.")
 * Reusable across About, Homepage, Services, and Work pages.
 */
export default function CtaSection({
  tag = '009 / 009',
  title,
  titleLine1 = 'HAVE AN IDEA?',
  titleLine2Prefix = "LET'S ",
  titleLine2Muted = 'BRING IT TO LIFE.',
  description = "Whether you're looking to automate workflows, build a custom AI product, or explore new opportunities — we're here to help.",
  primaryBtnText = 'Start a Conversation',
  primaryBtnHref = '/contact',
  secondaryBtnText = 'Explore Our Services',
  secondaryBtnHref = '/services',
  videoSrc = 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4',
  id = 'contact-cta',
  className = '',
  showTrustBadges = false,
  trustBadges = ['✓ Fast 24-Hour Response', '✓ NDA Protected', '✓ Free Discovery Session'],
}) {
  const renderedHeading = title ? (
    title
  ) : (
    <>
      {titleLine1} <br />
      {titleLine2Prefix}
      <span className="cta-heading-muted">{titleLine2Muted}</span>
    </>
  );

  return (
    <section className={`cta-section-fullwidth ${className}`.trim()} id={id}>
      {/* Background Video directly integrated */}
      {videoSrc && (
        <div className="cta-video-backdrop-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            src={videoSrc}
            className="cta-backdrop-video"
          />
        </div>
      )}

      <div className="cta-content-container">
        {tag && <div className="cta-index-tag">{tag}</div>}
        <h2 className="cta-display-heading">{renderedHeading}</h2>
        {description && <p className="cta-description">{description}</p>}

        <div className="cta-buttons-row">
          {primaryBtnText && (
            <Button href={primaryBtnHref} size="lg">
              {primaryBtnText}
            </Button>
          )}
          {secondaryBtnText && (
            <Button href={secondaryBtnHref} variant="secondary" size="lg">
              {secondaryBtnText}
            </Button>
          )}
        </div>

        {showTrustBadges && trustBadges && trustBadges.length > 0 && (
          <div className="cta-trust-strip">
            {trustBadges.map((badge, idx) => (
              <React.Fragment key={idx}>
                <span className="cta-trust-item">{badge}</span>
                {idx < trustBadges.length - 1 && <span className="cta-trust-dot">•</span>}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// Named alias for convenience
export { CtaSection as IdeaCtaSection };
