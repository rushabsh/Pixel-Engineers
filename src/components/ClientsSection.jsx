import React from 'react';
import './clients.css';

const clientLogos = [
  { name: 'Stripe', src: '/images/stripe-1.svg', category: 'Fintech & Payments' },
  { name: 'Notion', src: '/images/notion-v2-1.svg', category: 'Productivity' },
  { name: 'Spotify', src: '/images/spotify-1.png', category: 'Streaming & Media' },
  { name: 'Dropbox', src: '/images/dropbox.png', category: 'Cloud Storage' },
  { name: 'Asana', src: '/images/asana.png', category: 'Project Management' },
  { name: 'Discord', src: '/images/discord.png', category: 'Community & Chat' },
  { name: 'Squarespace', src: '/images/squarespace.png', category: 'E-commerce' },
  { name: 'Hotjar', src: '/images/hotjar-1.svg', category: 'Product Analytics' },
  { name: 'Lattice', src: '/images/lattice.png', category: 'People Operations' },
  { name: 'Outreach', src: '/images/outreach.png', category: 'Sales Engagement' },
  { name: 'Scapic', src: '/images/scapic-1.svg', category: 'AR & 3D Commerce' },
  { name: 'Meta', src: '/images/meta.png', category: 'Social & Ads' },
];

const stats = [
  { value: '150+', label: 'Projects Delivered' },
  { value: '50+', label: 'Businesses Served' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '5+', label: 'Years Experience' },
];

export default function ClientsSection() {
  return (
    <section className="clients-section-root" id="clients">
      {/* Top transition line */}
      <div className="clients-top-accent" />

      <div className="clients-container">
        {/* Header Block */}
        <div className="clients-header">
          <div className="clients-pill-badge">
            <span className="clients-badge-dot" />
            <span>TRUSTED BY BUSINESSES</span>
          </div>

          <h2 className="clients-heading">
            Helping Businesses Build, <br />
            <span className="clients-heading-highlight">Grow & Scale Digitally.</span>
          </h2>

          <p className="clients-description">
            From startups to established businesses, we work with teams that want to create
            better digital experiences and achieve measurable growth.
          </p>
        </div>

        {/* Stats Row */}
        <div className="clients-stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="clients-stat-card">
              <span className="clients-stat-value">{stat.value}</span>
              <span className="clients-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className="clients-logos-grid">
          {clientLogos.map((client, index) => (
            <div key={index} className="client-logo-card">
              <div className="client-logo-img-wrap">
                <img
                  src={client.src}
                  alt={client.name}
                  className="client-logo-img"
                  loading="lazy"
                />
              </div>
              <span className="client-logo-category">{client.category}</span>
            </div>
          ))}
        </div>

        {/* Bottom Trust Banner */}
        <div className="clients-trust-banner">
          <div className="clients-trust-pill">
            <span className="trust-sparkle">✦</span>
            <span>Partnered with visionary teams across 10+ industries worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
