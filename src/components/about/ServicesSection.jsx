'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../Button';

const services = [
  {
    title: 'Email & SMS marketing',
    desc: 'Targeted campaigns that nurture leads, reduce churn, and drive measurable repeat sales.',
    icon: '/images/2D-51.svg',
    hoverIcon: '/images/2D-43.svg',
    image: '/images/opai-img-52.png',
    link: '/services',
  },
  {
    title: 'SEO (Local & Global)',
    desc: 'Rank higher on Google with strategic keyword clustering, site speed optimization, and link authority.',
    icon: '/images/2D-44.svg',
    hoverIcon: '/images/2D-42.svg',
    image: '/images/opai-img-53.png',
    link: '/services',
  },
  {
    title: 'PPC & paid media',
    desc: 'Laser-focused ad spend across Google, Bing, and YouTube with continuous ROAS optimization.',
    icon: '/images/2D-45.svg',
    hoverIcon: '/images/2D-43.svg',
    image: '/images/opai-img-54.png',
    link: '/services',
  },
  {
    title: 'Social media ads',
    desc: 'High-converting visual creatives for Meta, TikTok, and LinkedIn targeting qualified buyers.',
    icon: '/images/2D-49.svg',
    hoverIcon: '/images/2D-43.svg',
    image: '/images/opai-img-55.png',
    link: '/services',
  },
  {
    title: 'Social media management',
    desc: 'Authentic brand storytelling, content calendar automation, and active community engagement.',
    icon: '/images/2D-50.svg',
    hoverIcon: '/images/2D-42.svg',
    image: '/images/opai-img-57.png',
    link: '/services',
  },
];

export default function ServicesSection() {
  const [activeImage, setActiveImage] = useState(services[0].image);

  return (
    <section className="nexsas-services-section">
      <div className="section-inner">
        {/* Left Column: Heading, Subtitle, CTA */}
        <div className="services-left-col">
          <div className="section-badge-wrap">
            <img
              src="/images/Star-8.svg"
              alt="Star"
              width={16}
              height={16}
              className="section-badge-icon"
            />
            <span className="section-badge-text">Our services</span>
          </div>

          <h2 className="section-title left-aligned">
            Marketing solutions that drive results
          </h2>

          <p className="section-subtitle left-aligned">
            Custom strategies powered by real-time data and AI automation.
          </p>

          <Button href="/services" className="mt-4 inline-flex">
            Explore All Services
          </Button>
        </div>

        {/* Right Column: Interactive List & Preview Frame */}
        <div className="services-right-col">
          {/* Services List */}
          <div className="services-accordion-list">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="service-list-item group"
                onMouseEnter={() => setActiveImage(item.image)}
              >
                <div className="service-item-hover-bg" />
                <div className="service-item-content">
                  <div className="service-icon-box">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="service-icon normal"
                    />
                    <img
                      src={item.hoverIcon}
                      alt={item.title}
                      className="service-icon hover"
                    />
                  </div>
                  <div className="service-text-box">
                    <h3 className="service-item-title">{item.title}</h3>
                    <p className="service-item-desc">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Floating Media Preview */}
          <div className="service-media-preview-container">
            <img
              src={activeImage}
              alt="Service Preview"
              className="service-media-preview-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
