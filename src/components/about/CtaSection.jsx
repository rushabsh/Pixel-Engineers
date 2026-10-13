'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../Button';

export default function CtaSection() {
  return (
    <section className="nexsas-cta-section">
      <div className="section-inner text-center">
        {/* Floating Avatar Badges */}
        <div className="cta-avatars-row">
          <img
            src="/images/cta-img-4.png"
            alt="Client"
            className="cta-avatar-item"
          />
          <img
            src="/images/cta-img-5.png"
            alt="Client"
            className="cta-avatar-item"
          />
          <img
            src="/images/cta-img-6.png"
            alt="Client"
            className="cta-avatar-item"
          />
          <img
            src="/images/cta-img-7.png"
            alt="Client"
            className="cta-avatar-item"
          />
        </div>

        {/* Big Heading with Pill graphic */}
        <h2 className="cta-big-title">
          Turn clicks{' '}
          <span className="cta-title-badge-wrap">
            <img
              src="/images/cta-img-8.png"
              alt="Badge Graphic"
              className="cta-title-badge-img"
            />
          </span>{' '}
          Into customers
        </h2>

        {/* Subtitle */}
        <p className="cta-subtitle mx-auto">
          From strategy to execution, we take care of the details so you can focus on building
          your business. Start scaling your brand with data-backed AI marketing today.
        </p>

        {/* Action Button */}
        <div className="cta-btn-wrap mt-8">
          <Button href="/contact" className="inline-flex">
            Book A Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
}
