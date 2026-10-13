'use client';

import React from 'react';

const clients = [
  { name: 'Scapic', src: '/images/scapic-1.svg', width: 136, height: 45 },
  { name: 'Notion', src: '/images/notion-v2-1.svg', width: 129, height: 45 },
  { name: 'Lattice', src: '/images/lattice.png', width: 237, height: 73 },
  { name: 'Hotjar', src: '/images/hotjar-1.svg', width: 124, height: 45 },
  { name: 'Discord', src: '/images/discord.png', width: 256, height: 73 },
  { name: 'Dropbox', src: '/images/dropbox.png', width: 263, height: 73 },
  { name: 'Stripe', src: '/images/stripe-1.svg', width: 124, height: 45 },
  { name: 'Spotify', src: '/images/spotify-1.png', width: 222, height: 73 },
  { name: 'Outreach', src: '/images/outreach.png', width: 270, height: 73 },
  { name: 'Asana', src: '/images/asana.png', width: 206, height: 73 },
  { name: 'Squarespace', src: '/images/squarespace.png', width: 403, height: 73 },
];

export default function ClientsSection() {
  return (
    <section className="nexsas-clients-section">
      <div className="section-inner">
        {/* Badge */}
        <div className="section-badge-wrap">
          <img
            src="/images/Star-8.svg"
            alt="Star"
            width={16}
            height={16}
            className="section-badge-icon"
          />
          <span className="section-badge-text">Our clients</span>
        </div>

        {/* Heading */}
        <h2 className="section-title">
          Helping local businesses and national brands <br className="hidden md:inline" />
          succeed with data-backed marketing.
        </h2>

        {/* Subtitle */}
        <p className="section-subtitle">
          Trusted by 100+ businesses in retail, healthcare, tech, and more.
        </p>

        {/* Client Logos Grid */}
        <div className="clients-logos-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-logo-item">
              <img
                src={client.src}
                alt={client.name}
                className="client-logo-img"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
