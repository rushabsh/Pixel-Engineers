'use client';

import React from 'react';

const testimonials = [
  {
    quote:
      'Nexsas completely revolutionized our inbound customer acquisition. The AI automation workflows they deployed reduced our customer acquisition cost by 42% in just ninety days.',
    name: 'Marcus Chen',
    role: 'VP of Growth at Foodly',
    avatar: '/images/ns-avatar-33.png',
    rating: 5,
  },
  {
    quote:
      'The level of transparency and strategic insight is unmatched. We partner directly with senior directors who proactively identify untapped market verticals and compound our revenue.',
    name: 'Elena Rostova',
    role: 'CMO at Lumina Tech',
    avatar: '/images/ns-avatar-30-1.png',
    rating: 5,
  },
  {
    quote:
      'Scaling our omnichannel ad spend seemed terrifying until Nexsas automated our predictive bid management. Our blended ROAS spiked to 10.4x within two quarters.',
    name: 'David Vance',
    role: 'Founder at Apex Scale',
    avatar: '/images/ns-avatar-37.png',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="nexsas-testimonials-section">
      <div className="section-inner">
        {/* Top Header */}
        <div className="testimonials-header text-center">
          <div className="section-badge-wrap mx-auto">
            <img
              src="/images/Star-8.svg"
              alt="Star"
              width={16}
              height={16}
              className="section-badge-icon"
            />
            <span className="section-badge-text">Testimonials</span>
          </div>

          <h2 className="section-title">
            What Our Clients <span className="highlight-purple">Are Saying.</span>
          </h2>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {testimonials.map((item, idx) => (
            <div key={idx} className="testimonial-card-item group">
              {/* Star Rating */}
              <div className="testimonial-stars-row">
                {Array.from({ length: item.rating }).map((_, sIdx) => (
                  <svg
                    key={sIdx}
                    className="testimonial-star-icon"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="#864FFE"
                  >
                    <path d="M8 1.3L9.7 5.2L13.9 5.5L10.7 8.4L11.7 12.5L8 10.3L4.3 12.5L5.3 8.4L2.1 5.5L6.3 5.2L8 1.3Z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="testimonial-quote-text">"{item.quote}"</p>

              {/* Author */}
              <div className="testimonial-author-row">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonial-author-avatar"
                />
                <div className="testimonial-author-meta">
                  <h4 className="testimonial-author-name">{item.name}</h4>
                  <p className="testimonial-author-role">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
