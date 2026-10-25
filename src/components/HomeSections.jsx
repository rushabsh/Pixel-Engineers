"use client";

import React, { useState } from "react";
import Button from "./Button";
import CtaSection from "./CtaSection";
import "./home-sections.css";

// 1. Innovative Company Logos
const trustedLogos = [
  {
    name: "Shopify",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.3 6.6c-.1-.4-.4-.6-.8-.6-.3 0-2.4-.2-2.4-.2s-1.6-1.6-1.8-1.8c-.2-.2-.5-.3-.8-.3-.1 0-.3 0-.4.1-.1-1.3-.8-2.6-2.5-2.6-1.4 0-2.2.9-2.7 2.1-.8.2-1.4.5-1.5.5L4.7 18.2 14.8 20.3c.4.1.8 0 1.1-.2.4-.2.6-.6.7-1 .3-1.6 2.7-12.5 2.7-12.5zm-6.2-4c.9 0 1.2.9 1.3 1.8l-2.6.8c.2-1.3.7-2.6 1.3-2.6zm-2.4 2.1c.3-.1.6-.2 1-.3l-1.3 6.6-2-1.2 2.3-5.1zm4.4 12.8L5.7 15.6l1.6-9.2c.5-.2 2.5-.8 2.5-.8l1.4 7.5 3.9-7.5s2 .2 2.2.2c0 0-2.2 11.7-2.2 11.7z" />
      </svg>
    ),
  },
  {
    name: "Webflow",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.8 7.3c-.7 1.9-2 3.4-3.5 4.3.1-.9.2-1.8.2-2.7 0-1.8-.7-3.4-2-4.5.3 1.6.4 3.2.4 4.8 0 1.5-.2 3.1-.7 4.5-1.3-.9-2.4-2.1-3.2-3.6-.8 2.4-1.1 4.9-1 7.4-1.2-1.5-2-3.3-2.3-5.3-.3 1.9-.1 3.9.6 5.7.7 1.8 2 3.4 3.6 4.4 1.7 1 3.7 1.5 5.7 1.2 2-.3 3.9-1.3 5.3-2.8 1.4-1.5 2.2-3.5 2.3-5.6 0-2.9-1.2-5.7-3.4-7.8z" />
      </svg>
    ),
  },
  {
    name: "AWS",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5h-2v-5h2v5zm4 0h-2v-5h2v5zm2-7H7V8h10v1.5z" />
      </svg>
    ),
  },
  {
    name: "Google",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.053 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
      </svg>
    ),
  },
  {
    name: "Meta",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 4.5c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm-1.8 11.2c-1.3 0-2.4-.9-2.7-2.2-.3-1.3.4-2.6 1.7-3 1.3-.4 2.6.4 3 1.7.3 1.3-.4 2.6-1.7 3 0 .3-.1.5-.3.5zm3.6 0c-.2 0-.3-.2-.3-.5.4-.4 1.1-1.7.8-3-.4-1.3-1.7-2.1-3-1.7-1.3.4-2 1.7-1.7 3 .3 1.3 1.4 2.2 2.7 2.2z" />
      </svg>
    ),
  },
  {
    name: "Microsoft",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.4 11.4H2.4V2.4h9v9zm10.2 0h-9V2.4h9v9zM11.4 21.6H2.4v-9h9v9zm10.2 0h-9v-9h9v9z" />
      </svg>
    ),
  },
];

// 2. Services Cards
const homeServices = [
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    desc: "Data-driven strategies to increase visibility and generate leads.",
    image: "/images/Faceted Gold-Trimmed Origami Sculpture.avif",
  },
  {
    id: "web-app",
    title: "Web & App Development",
    desc: "Custom websites and applications built for performance and scale.",
    image: "/images/Golden Neural Network Mesh.avif",
  },
  {
    id: "branding",
    title: "Branding & Creative Design",
    desc: "Creative designs that make your brand stand out in a competitive market.",
    image: "/images/Marble Orb with Golden Shattered Lattice.avif",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    desc: "Strategic guidance and technology solutions to streamline your business.",
    image: "/images/Luxury Mosaic Tech Globe.avif",
  },
];

// 3. Process Steps (01 to 05)
const processFlowSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand your business goals.",
  },
  {
    num: "02",
    title: "Plan",
    desc: "Create a strategy tailored to your needs.",
  },
  {
    num: "03",
    title: "Design",
    desc: "Build with creativity and precision.",
  },
  {
    num: "04",
    title: "Develop",
    desc: "Turn ideas into high-performance solutions.",
  },
  {
    num: "05",
    title: "Launch",
    desc: "Deploy, optimize and ensure success.",
  },
];

// 4. Industries
const industriesList = [
  {
    id: "agriculture",
    num: "01",
    name: "Agriculture",
    headline: "AGRICULTURE",
    desc: "Tailored digital solutions designed to solve complex challenges and create measurable business growth in the agriculture industry.",
    image: "/images/AGRICULTURE.avif",
    features: [
      {
        title: "Smart Solutions",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22v-9" />
            <path d="M9 13a4.5 4.5 0 0 0-4.5-4.5c-.8 0-1.5.2-2.1.6 1.8 1.8 2.6 4.2 2.6 6.9" />
            <path d="M15 13a4.5 4.5 0 0 1 4.5-4.5c.8 0 1.5.2 2.1.6-1.8 1.8-2.6 4.2-2.6 6.9" />
          </svg>
        ),
      },
      {
        title: "Operational Efficiency",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 20V10" />
            <path d="M12 20V4" />
            <path d="M6 20v-6" />
          </svg>
        ),
      },
      {
        title: "Sustainable Growth",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <circle cx="19" cy="5" r="2" />
            <circle cx="5" cy="19" r="2" />
            <path d="M10.4 10.4 6.4 17.6" />
            <path d="M13.6 13.6 17.6 6.4" />
          </svg>
        ),
      },
    ],
    tabIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22v-9" />
        <path d="M9 13a4.5 4.5 0 0 0-4.5-4.5c-.8 0-1.5.2-2.1.6 1.8 1.8 2.6 4.2 2.6 6.9" />
        <path d="M15 13a4.5 4.5 0 0 1 4.5-4.5c.8 0 1.5.2 2.1.6-1.8 1.8-2.6 4.2-2.6 6.9" />
      </svg>
    ),
  },
  {
    id: "healthcare",
    num: "02",
    name: "Healthcare",
    headline: "HEALTHCARE",
    desc: "HIPAA-compliant patient portals, telemedicine workflows, and digital health software built to deliver secure, superior clinical outcomes.",
    image: "/images/HEALTHCARE.avif",
    features: [
      {
        title: "HIPAA Compliant",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        ),
      },
      {
        title: "Patient Care",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        ),
      },
      {
        title: "Telehealth Sync",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        ),
      },
    ],
    tabIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    ),
  },
  {
    id: "education",
    num: "03",
    name: "Education",
    headline: "EDUCATION",
    desc: "Interactive LMS architectures, virtual classrooms, and intuitive learning portals engineered to scale global knowledge delivery.",
    image: "/images/EDUCATION.avif",
    features: [
      {
        title: "Adaptive Learning",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
          </svg>
        ),
      },
      {
        title: "Student Portals",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
        ),
      },
      {
        title: "Scalable LMS",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2" />
            <path d="M7 7h10" />
            <path d="M7 12h10" />
            <path d="M7 17h10" />
          </svg>
        ),
      },
    ],
    tabIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    id: "realestate",
    num: "04",
    name: "Real Estate",
    headline: "REAL ESTATE",
    desc: "3D virtual listing experiences, smart CRM automation, and high-converting portals designed for property developers and brokers.",
    image: "/images/REAL ESTATE.avif",
    features: [
      {
        title: "Virtual 3D Tours",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        ),
      },
      {
        title: "Lead Acquisition",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        ),
      },
      {
        title: "MLS & CRM Sync",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </svg>
        ),
      },
    ],
    tabIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "retail",
    num: "05",
    name: "Retail & E-commerce",
    headline: "RETAIL & E-COMMERCE",
    desc: "High-performance headless storefronts, seamless payment funnels, and real-time inventory management built to boost conversion and lifetime value.",
    image: "/images/RETAIL & E-COMMERCE.avif",
    features: [
      {
        title: "Frictionless Cart",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
        ),
      },
      {
        title: "Omnichannel Sync",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
        ),
      },
      {
        title: "Conversion Engine",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        ),
      },
    ],
    tabIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>
    ),
  },
  {
    id: "manufacturing",
    num: "06",
    name: "Manufacturing",
    headline: "MANUFACTURING",
    desc: "Industrial IoT telemetry dashboards, automated production tracking, and predictive maintenance portals engineered for zero downtime.",
    image: "/images/MANUFACTURING.avif",
    features: [
      {
        title: "Industrial IoT",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
        ),
      },
      {
        title: "Smart Automation",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        ),
      },
      {
        title: "Predictive Analytics",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h5l3 7 4-14 3 7h5" />
          </svg>
        ),
      },
    ],
    tabIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    id: "automotive",
    num: "07",
    name: "Automotive",
    headline: "AUTOMOTIVE",
    desc: "Connected vehicle interfaces, dealership inventory management, and digital customer booking platforms that accelerate sales velocity.",
    image: "/images/AUTOMOTIVE.avif",
    features: [
      {
        title: "Connected Fleets",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C1.4 11.2 1 12 1 13v3c0 .6.4 1 1 1h2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
          </svg>
        ),
      },
      {
        title: "Dealership CRM",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <polyline points="16 11 18 13 22 9" />
          </svg>
        ),
      },
      {
        title: "Instant Booking",
        icon: (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
            <line x1="16" x2="16" y1="2" y2="6" />
            <line x1="8" x2="8" y1="2" y2="6" />
            <line x1="3" x2="21" y1="10" y2="10" />
          </svg>
        ),
      },
    ],
    tabIcon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C1.4 11.2 1 12 1 13v3c0 .6.4 1 1 1h2" />
        <circle cx="7" cy="17" r="2" />
        <circle cx="17" cy="17" r="2" />
      </svg>
    ),
  },
];

// 5. Testimonials
const testimonials = [
  {
    quote:
      "Pixel Engineers delivered an exceptional website for our business. Their team understood our requirements and provided a solution that exceeded our expectations.",
    name: "Rahul Sharma",
    role: "Founder, GreenGlobe Agriculture",
    avatar: "/images/avatar-1-1.png",
  },
  {
    quote:
      "Great experience working with Pixel Engineers. They delivered a high-quality solution on time and provided excellent support.",
    name: "Priya Mehta",
    role: "CEO, Evara Interiors",
    avatar: "/images/avatar-11.png",
  },
];

export default function HomeSections() {
  const [activeTestimonialDot, setActiveTestimonialDot] = useState(0);
  const [activeIndustryIndex, setActiveIndustryIndex] = useState(0);

  const handlePrevIndustry = () => {
    setActiveIndustryIndex((prev) =>
      prev === 0 ? industriesList.length - 1 : prev - 1
    );
  };

  const handleNextIndustry = () => {
    setActiveIndustryIndex((prev) =>
      prev === industriesList.length - 1 ? 0 : prev + 1
    );
  };

  const currentIndustry = industriesList[activeIndustryIndex] || industriesList[0];

  return (
    <div className="home-sections-root relative z-30 bg-[#eaedef] text-[#0e1217] w-full overflow-x-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)] font-['Inter_Tight',sans-serif]">
      {/* =========================================================================
          0. TRUSTED BY INNOVATIVE COMPANIES (LOGO MARQUEE STRIP)
          ========================================================================= */}
      <section className="home-strip-section w-full bg-white border-y border-black/6 py-8 md:py-8.5 px-5 sm:px-8 md:px-16" id="trusted-by">
        <div className="home-container w-full max-w-360 mx-auto relative z-2">
          <p className="home-strip-tag font-['IBM_Plex_Mono',monospace] text-[11.5px] font-bold tracking-[0.14em] text-slate-400 mb-5 uppercase">
            TRUSTED BY INNOVATIVE COMPANIES
          </p>
          <div className="home-strip-logos-row flex items-center justify-between flex-wrap gap-7 max-sm:justify-center max-sm:gap-5">
            {trustedLogos.map((item) => (
              <div key={item.name} className="home-strip-logo-item flex items-center gap-2.5 text-slate-800 opacity-85 transition-all duration-200 ease-out hover:opacity-100 hover:-translate-y-0.5">
                <span className="home-logo-svg flex items-center">{item.icon}</span>
                <span className="home-logo-name font-['Helvetica_Now_Var',sans-serif] text-base font-bold tracking-[-0.01em]">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          1. OUR SERVICES: DIGITAL SOLUTIONS BUILT AROUND YOUR GOALS
          ========================================================================= */}
      <section
        className="home-showcase-section w-full max-w-full relative flex items-center justify-center py-16 md:py-20 px-6 sm:px-10 md:px-16 border-t border-black/5 overflow-hidden"
        id="services"
      >
        <div className="home-container w-full max-w-360 mx-auto relative z-2">
          {/* HEADER */}

          <div
            className="
          home-section-header
          w-full
          flex
          flex-col
          md:flex-row
          md:items-end
          justify-between
          gap-8
          md:gap-10
          lg:gap-14
          mb-12 
          sm:mb-14
          md:mb-16
          lg:mb-18
        "
          >

            {/* LEFT */}
            <div
              className="
            home-header-left
            w-full
            max-w-170
          "
            >

              {/* INDEX */}
              <div
                className="
              home-index-tag
              inline-flex
              items-center
              gap-2.5
              font-['IBM_Plex_Mono',monospace]
              text-[13px]
              font-semibold
              tracking-[0.14em]
              text-slate-500
              mb-4
              uppercase
            "
              >
                001 / 007
              </div>


              {/* HEADING */}
              <h2
                className="
              home-display-heading
              font-['Helvetica_Now_Var','Inter_Tight',sans-serif]
              text-[clamp(30px,3.1vw,42px)]
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-[#0e1217]
              uppercase
              m-0
            "
              >
                Digital Solutions <br />

                Built Around{" "}

                <span
                  className="
                home-heading-muted
                text-[#828894]
                font-extrabold
              "
                >
                  Your Goals.
                </span>
              </h2>

            </div>


            {/* RIGHT */}
            <div
              className="
            home-header-right
            w-full
            max-w-155
            flex
            flex-col
            md:flex-row
            md:items-end
            gap-5
            lg:gap-8
          "
            >

              {/* DESCRIPTION */}
              <p
                className="
              home-lead-desc
              w-full
              font-['Inter_Tight',sans-serif]
              text-[15px]
              leading-[1.65]
              text-[#525866]
              m-0
              max-w-135
            "
              >
                From digital marketing to custom software development, we
                provide end-to-end solutions to help businesses grow in the
                digital world.
              </p>


              {/* BUTTON */}
              <div className="shrink-0">

                <Button
                  href="/services"
                  size="md"
                >
                  Explore Services
                </Button>

              </div>

            </div>

          </div>


          {/* ===================================================== */}
          {/* SERVICES */}
          {/* ===================================================== */}

          <div className="relative w-full">

            {/* TOP BORDER */}
            <div className="w-full h-px bg-black/10" />


            {homeServices.map((service, index) => (

              <a
                key={service.id}
                href="/services"
                className="
              group
              relative
              block
              w-full
              no-underline
              border-b
              border-black/10
            "
              >

                <div
                  className="
                relative
                grid
                grid-cols-12
                items-center
                w-full

                min-h-27
                sm:min-h-28
                md:min-h-32
                lg:min-h-34

                px-3
                sm:px-4
                md:px-6
                lg:px-8
                xl:px-10

                py-6
                sm:py-7
                md:py-8

                pr-3
                sm:pr-4
                md:pr-6
                lg:pr-8
                xl:pr-10

                overflow-hidden
              "
                >

                  {/* ================================================= */}
                  {/* NUMBER */}
                  {/* ================================================= */}

                  <div
                    className="
                  col-span-2
                  md:col-span-1
                  self-start
                  pt-1
                  md:pt-2
                "
                  >

                    <span
                      className="
                    inline-block
                    font-['IBM_Plex_Mono',monospace]
                    text-[11px]
                    md:text-[12px]
                    font-semibold
                    tracking-[0.12em]
                    text-[#9aa0a8]
                    transition-all
                    duration-300
                    group-hover:text-[#ea580c]
                    group-hover:-translate-y-0.5
                  "
                    >
                      0{index + 1}
                    </span>

                  </div>


                  {/* ================================================= */}
                  {/* TITLE */}
                  {/* ================================================= */}

                  <div
                    className="
                  col-span-8
                  md:col-span-5
                  lg:col-span-5
                  min-w-0
                  pr-3
                  sm:pr-5
                  md:pr-6
                "
                  >

                    <h3
                      className="
                    font-['Helvetica_Now_Var','Inter_Tight',sans-serif]
                    text-[19px]
                    font-bold
                    leading-tight
                    tracking-tight
                    text-[#0e1217]
                    m-0
                    transition-all
                    duration-400
                    ease-[cubic-bezier(0.16,1,0.3,1)]
                    group-hover:translate-x-1
                    group-hover:text-[#ea580c]
                  "
                    >
                      {service.title}
                    </h3>


                    {/* MOBILE DESCRIPTION */}
                    <p
                      className="
                    md:hidden
                    font-['Inter_Tight',sans-serif]
                    text-sm
                    leading-[1.6]
                    text-[#525866]
                    m-0
                    mt-2
                    max-w-105
                  "
                    >
                      {service.desc}
                    </p>

                  </div>


                  {/* ================================================= */}
                  {/* DESKTOP DESCRIPTION */}
                  {/* ================================================= */}

                  <div
                    className="
                  hidden
                  md:block
                  md:col-span-5
                  lg:col-span-4
                  min-w-0
                  pr-8
                  lg:pr-24
                "
                  >

                    <p
                      className="
                    font-['Inter_Tight',sans-serif]
                    text-sm
                    leading-[1.65]
                    text-[#7a8089]
                    m-0
                    max-w-105
                    transition-all
                    duration-400
                    ease-out
                    group-hover:text-[#525866]
                    group-hover:translate-x-1
                  "
                    >
                      {service.desc}
                    </p>

                  </div>


                  {/* ================================================= */}
                  {/* FLOATING IMAGE */}
                  {/* ================================================= */}

                  <div
                    className="
                  hidden
                  lg:flex
                  absolute
                  right-20
                  xl:right-28
                  2xl:right-32
                  top-1/2
                  -translate-y-1/2

                  w-20
                  h-20
                  xl:w-24
                  xl:h-24

                  items-center
                  justify-center

                  pointer-events-none

                  opacity-0
                  scale-75
                  rotate-6

                  transition-all
                  duration-500
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  group-hover:opacity-100
                  group-hover:scale-100
                  group-hover:rotate-0
                "
                  >

                    <img
                      src={service.image}
                      alt={service.title}
                      className="
                    max-w-full
                    max-h-full
                    object-contain
                    drop-shadow-[0_16px_25px_rgba(0,0,0,0.10)]
                  "
                    />

                  </div>


                  {/* ================================================= */}
                  {/* ARROW */}
                  {/* ================================================= */}

                  <div
                    className="
                  col-span-2
                  md:col-span-1
                  flex
                  justify-end
                "
                  >

                    <span
                      className="
                    w-9
                    h-9
                    shrink-0
                    rounded-full
                    border
                    border-black/10
                    bg-white
                    inline-flex
                    items-center
                    justify-center
                    text-[#0e1217]

                    transition-all
                    duration-300
                    ease-out

                    group-hover:border-[#ea580c]
                    group-hover:bg-[#ea580c]
                    group-hover:text-white
                    group-hover:rotate-[-45deg]
                  "
                    >

                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line
                          x1="5"
                          y1="12"
                          x2="19"
                          y2="12"
                        />

                        <polyline
                          points="12 5 19 12 12 19"
                        />
                      </svg>

                    </span>

                  </div>


                  {/* ================================================= */}
                  {/* HOVER ACCENT */}
                  {/* ================================================= */}

                  <span
                    className="
                  absolute
                  left-3
                  sm:left-4
                  md:left-6
                  lg:left-8
                  xl:left-10

                  right-3
                  sm:right-4
                  md:right-6
                  lg:right-8
                  xl:right-10

                  bottom-0

                  h-[2px]

                  bg-[#ea580c]

                  origin-left
                  scale-x-0

                  transition-transform
                  duration-500
                  ease-[cubic-bezier(0.16,1,0.3,1)]

                  group-hover:scale-x-100
                "
                  />

                </div>

              </a>

            ))}


            {/* BOTTOM BORDER */}
            <div className="w-full h-px bg-black/10" />

          </div>


          {/* ===================================================== */}
          {/* FOOTER META */}
          {/* ===================================================== */}

          <div
            className="
          flex
          flex-col
          sm:flex-row
          sm:items-center
          sm:justify-between
          gap-3
          px-3
          sm:px-4
          md:px-6
          lg:px-8
          xl:px-10
          pt-5
        "
          >

            <span
              className="
            font-['IBM_Plex_Mono',monospace]
            text-[11px]
            tracking-[0.12em]
            uppercase
            text-slate-400
          "
            >
              Our Capabilities
            </span>


            <span
              className="
            font-['IBM_Plex_Mono',monospace]
            text-[11px]
            tracking-[0.12em]
            uppercase
            text-slate-400
          "
            >
              {String(homeServices.length).padStart(2, "0")} Services
            </span>

          </div>

        </div>
      </section>

      {/* =========================================================================
          2. FEATURED WORK: IDEAS TRANSFORMED INTO REAL IMPACT
          ========================================================================= */}
      <section className="home-showcase-section w-full max-w-full relative flex items-center justify-center py-16 md:py-20 px-6 sm:px-10 md:px-16 border-t border-black/5" id="featured-work">
        <div className="home-container w-full max-w-360 mx-auto relative z-2">
          <div className="home-section-header flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-10 mb-9 md:mb-12 w-full">
            <div className="home-header-left max-w-170">
              <div className="home-index-tag inline-flex items-center gap-2.5 font-['IBM_Plex_Mono',monospace] text-[13px] font-semibold tracking-[0.14em] text-slate-500 mb-4 md:mb-4.5 uppercase">
                002 / 007
              </div>
              <h2 className="home-display-heading font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(30px,3.1vw,42px)] font-extrabold leading-[1.08] tracking-tight text-[#0e1217] uppercase m-0">
                Ideas Transformed <br />
                Into <span className="home-heading-muted text-[#828894] font-extrabold">Real Impact.</span>
              </h2>
            </div>
            <div className="home-header-right flex flex-col md:flex-row md:items-end gap-4 md:gap-8 max-w-155">
              <p className="home-lead-desc font-['Inter_Tight',sans-serif] text-[15px] leading-[1.65] text-[#525866] m-0">
                Explore how we've helped businesses turn ideas into digital
                solutions that create measurable value.
              </p>
              <div className="shrink-0">
                <Button href="/work" size="md">
                  View All Work
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Showcase Card (GreenGlobe Agriculture Laptop Mockup) */}
          <div className="home-featured-card relative bg-[#13161f] rounded-3xl border border-white/8 overflow-hidden shadow-[0_20px_48px_-10px_rgba(0,0,0,0.35)] grid grid-cols-1 lg:grid-cols-[1fr_1.35fr] min-h-110 transition-all duration-350 hover:border-white/16 hover:shadow-[0_28px_60px_-10px_rgba(0,0,0,0.5)]">
            <a
              href="/work"
              className="home-featured-external-link absolute top-6 right-6 w-10.5 h-10.5 rounded-full bg-white/8 border border-white/16 flex items-center justify-center text-white no-underline z-10 backdrop-blur-sm transition-all duration-200 ease-out hover:bg-white hover:text-[#0e1217] hover:scale-105 hover:rotate-6"
              aria-label="View case study"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>

            <div className="home-featured-left p-8 sm:p-10 md:p-12 flex flex-col justify-center items-start z-3">
              <span className="home-featured-badge inline-block bg-purple-600/18 text-[#c084fc] border border-purple-500/35 text-xs font-semibold px-3.5 py-1 rounded-full mb-4.5">
                Web Development
              </span>
              <h3 className="home-featured-title font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-2xl sm:text-3xl lg:text-[32px] font-bold text-white mb-3.5 leading-[1.2]">
                GreenGlobe Agriculture
              </h3>
              <p className="home-featured-summary font-['Inter_Tight',sans-serif] text-[15px] leading-[1.62] text-slate-400 mb-7 max-w-110">
                A modern web application to manage agriculture operations, track
                data and improve productivity.
              </p>
              <div className="mb-8">
                <Button href="/work" variant="secondary" size="md">
                  View Case Study
                </Button>
              </div>

              {/* Progress counter */}
              <div className="home-featured-counter-row flex items-center gap-4 w-full max-w-55">
                <span className="counter-text font-['IBM_Plex_Mono',monospace] text-xs font-bold text-slate-400">
                  01 / 05
                </span>
                <div className="counter-progress-bar flex-1 h-0.75 bg-white/12 rounded-full overflow-hidden">
                  <div className="counter-progress-fill w-[20%] h-full bg-[#ea580c] rounded-full" />
                </div>
              </div>
            </div>

            <div className="home-featured-right relative flex items-center justify-center p-6 sm:p-8 md:p-10 lg:p-12 bg-[radial-gradient(circle_at_60%_40%,#1e2230_0%,#10121a_100%)]">
              {/* Laptop Mockup */}
              <div className="home-laptop-wrapper relative w-full max-w-130 flex flex-col items-center drop-shadow-[0_20px_36px_rgba(0,0,0,0.7)]">
                <div className="home-laptop-screen w-full bg-[#1e2230] border-[3px] border-[#33384a] rounded-t-xl rounded-b-xs box-border relative overflow-hidden aspect-16/10 flex flex-col">
                  <div className="home-laptop-camera absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#0f1118] border border-white/20 z-5" />
                  <div className="home-laptop-display w-full h-full bg-[#0c0e14] flex flex-col p-2.5 sm:p-3.5 box-border">
                    <div className="laptop-site-navbar flex items-center justify-between border-b border-white/8 pb-2 mb-3">
                      <span className="laptop-site-brand font-['Helvetica_Now_Var',sans-serif] text-xs font-bold text-green-400">
                        🌱 GreenGlobe
                      </span>
                      <div className="laptop-site-navlinks flex gap-2.5 text-[9px] text-slate-400">
                        <span>Solutions</span>
                        <span>About</span>
                        <span>Insights</span>
                      </div>
                    </div>
                    <div className="laptop-site-body grid grid-cols-[1.25fr_1fr] items-center h-full gap-3">
                      <div className="laptop-site-copy">
                        <h4 className="laptop-site-h4 font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-sm sm:text-[15px] font-extrabold leading-tight text-white mb-2.5">
                          Sustainable Agriculture for a Better Tomorrow
                        </h4>
                        <div className="laptop-site-button inline-block bg-green-500 text-green-950 text-[8.5px] font-bold px-2.5 py-1 rounded w-fit">
                          Explore Solutions
                        </div>
                      </div>
                      <div className="laptop-site-graphic relative flex items-center justify-center h-full">
                        <div className="sprout-avatar-glow absolute w-22.5 h-22.5 rounded-full bg-[radial-gradient(circle,rgba(34,197,94,0.35)_0%,transparent_70%)]" />
                        <span className="sprout-symbol text-[42px] drop-shadow-[0_6px_14px_rgba(34,197,94,0.5)]">
                          🌱
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="home-laptop-base w-[114%] h-2.5 bg-linear-to-b from-[#33384a] to-[#1e2230] rounded-b-[10px] shadow-[0_6px_16px_rgba(0,0,0,0.6)]" />
              </div>

              {/* Card Controls */}
              <div className="home-featured-controls absolute bottom-6 right-7 flex items-center gap-2.5 z-10">
                <button
                  type="button"
                  className="home-ctrl-btn w-10 h-10 rounded-full bg-[#dfe4e8] border border-black/8 inline-flex items-center justify-center text-[#0e1217] cursor-pointer transition-all duration-200 ease-out hover:bg-[#0e1217] hover:text-white hover:-translate-y-0.5"
                  aria-label="Previous project"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="home-ctrl-btn w-10 h-10 rounded-full bg-[#dfe4e8] border border-black/8 inline-flex items-center justify-center text-[#0e1217] cursor-pointer transition-all duration-200 ease-out hover:bg-[#0e1217] hover:text-white hover:-translate-y-0.5"
                  aria-label="Next project"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. OUR PROCESS: FROM IDEAS TO DIGITAL IMPACT (REDESIGNED MATCHING ABOUT PAGE 004 / 009)
          ========================================================================= */}
      <section className="home-transform-section" id="process">
        {/* Ambient Background Video Matching About Page */}
        <div className="home-transform-video-wrapper">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="home-transform-video"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4"
          />
          <div className="home-transform-video-overlay" />
        </div>

        <div className="home-transform-container">
          {/* Top Meta */}
          <div className="home-transform-meta">
            <span>003 / 007</span>
            <span>OUR PROCESS</span>
          </div>

          {/* Main Content */}
          <div className="home-transform-main">
            {/* Decorative Number */}
            <div className="home-transform-bg-number">03</div>

            <div className="home-transform-grid">
              {/* Left — Typography */}
              <div className="home-transform-copy">
                <div className="home-transform-eyebrow">
                  <span className="home-transform-eyebrow-line"></span>
                  <span>REDEFINING POSSIBILITY</span>
                </div>

                <h2 className="home-transform-heading">
                  FROM IDEAS
                  <br />
                  TO
                  <span> DIGITAL</span>
                  <br />
                  IMPACT<span className="home-transform-dot">.</span>
                </h2>

                <div className="home-transform-description-wrap">
                  <p className="home-transform-description">
                    A clear and collaborative approach to deliver solutions that
                    create real business value.
                  </p>

                  <div className="home-transform-button">
                    <Button href="/contact" size="md">
                      Start a Conversation
                    </Button>
                  </div>
                </div>
              </div>

              {/* Center — Image */}
              <div className="home-transform-visual">
                <div className="home-transform-image-wrap">
                  <img
                    src="/images/Golden Neural Network Mesh.avif"
                    alt="From Ideas to Digital Impact"
                    className="home-transform-image"
                  />

                  <div className="home-transform-image-overlay"></div>

                  <div className="home-transform-image-top">PROCESS / 03</div>

                  <div className="home-transform-image-bottom">
                    <span>IDEAS</span>
                    <span>IMPACT</span>
                  </div>

                  <div className="home-transform-ai-marker">03</div>
                </div>
              </div>

              {/* Right — Process */}
              <div className="home-transform-process">
                <div className="home-transform-process-header">
                  <span>PROCESS</span>
                  <span>05 STEPS</span>
                </div>

                <div className="home-transform-timeline">
                  {processFlowSteps.map((step, idx) => (
                    <div
                      key={step.num}
                      className={`home-transform-step ${idx === 0 ? "home-transform-step-active" : ""}`}
                    >
                      <span className="home-transform-step-dot"></span>

                      <div className="home-transform-step-content">
                        <span className="home-transform-step-number">{step.num}</span>

                        <h3>{step.title}</h3>

                        <p>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="home-transform-bottom">
              <span className="home-transform-bottom-label">FROM IDEAS</span>

              <p>
                A clear and collaborative approach to deliver solutions
                <span> that create real business value.</span>
              </p>

              <span className="home-transform-bottom-label">TO IMPACT ↗</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. INDUSTRIES WE SERVE: DIGITAL SOLUTIONS FOR EVERY INDUSTRY
          ========================================================================= */}
      <section
        className="home-showcase-section w-full max-w-full relative flex items-center justify-center py-16 md:py-20 px-6 sm:px-10 md:px-16 border-t border-black/5 overflow-hidden"
        id="industries"
      >
        <div className="home-container w-full max-w-360 mx-auto relative z-2">
          {/* HEADER */}
          <div className="home-section-header flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-10 mb-12 md:mb-16">

            <div className="home-header-left max-w-170">
              <div className="home-index-tag inline-flex items-center gap-3 font-['IBM_Plex_Mono',monospace] text-[13px] font-semibold tracking-[0.14em] text-slate-500 mb-4 md:mb-4.5 uppercase">
                <span>004 / 007</span>
                <span className="w-8 h-[1.5px] bg-[#0e1217]/35 inline-block"></span>
              </div>

              <h2
                className="
              home-display-heading
              font-['Helvetica_Now_Var','Inter_Tight',sans-serif]
              text-[clamp(30px,3.1vw,42px)]
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-[#0e1217]
              uppercase
              m-0
            "
              >
                Digital Solutions <br />
                for{" "}
                <span className="home-heading-muted text-[#828894] font-extrabold">
                  Every Industry.
                </span>
              </h2>
            </div>

            <div className="home-header-right flex flex-col md:flex-row md:items-end gap-4 md:gap-8 max-w-160">

              <p
                className="
              home-lead-desc
              font-['Inter_Tight',sans-serif]
              text-[15px]
              leading-[1.65]
              text-[#525866]
              m-0
            "
              >
                We deliver tailored digital solutions across multiple
                industries, helping businesses overcome challenges and achieve
                growth.
              </p>

              <div className="home-slider-nav-arrows flex items-center gap-2.5 shrink-0">

                <button
                  type="button"
                  onClick={handlePrevIndustry}
                  className="
                w-10
                h-10
                rounded-full
                bg-[#dfe4e8]
                border
                border-black/8
                inline-flex
                items-center
                justify-center
                text-[#0e1217]
                cursor-pointer
                transition-all
                duration-200
                hover:bg-[#0e1217]
                hover:text-white
                hover:-translate-y-0.5
              "
                  aria-label="Previous industry"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleNextIndustry}
                  className="
                w-10
                h-10
                rounded-full
                bg-[#dfe4e8]
                border
                border-black/8
                inline-flex
                items-center
                justify-center
                text-[#0e1217]
                cursor-pointer
                transition-all
                duration-200
                hover:bg-[#0e1217]
                hover:text-white
                hover:-translate-y-0.5
              "
                  aria-label="Next industry"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>

              </div>
            </div>
          </div>

          {/* INDUSTRY EXPERIENCE: 2-COLUMN SECTION */}
          <div className="home-industries-wrapper">
            {/* LEFT TABS (7 INDUSTRIES) */}
            <div className="home-industries-nav">
              {industriesList.map((ind, idx) => {
                const isActive = idx === activeIndustryIndex;
                return (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() => setActiveIndustryIndex(idx)}
                    className={`home-industry-tab-btn ${isActive ? "active" : ""}`}
                  >
                    {/* Number */}
                    <span className="home-industry-tab-num">
                      {ind.num}
                    </span>

                    {/* Tab Icon */}
                    <span className="home-industry-tab-icon">
                      {ind.tabIcon}
                    </span>

                    {/* Name */}
                    <span className="home-industry-tab-name">
                      {ind.name}
                    </span>

                    {/* Active Arrow Circle Badge */}
                    {isActive && (
                      <span className="home-industry-tab-arrow">
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* RIGHT FEATURED INDUSTRY CARD */}
            <div className="home-industry-featured-card">
              {/* TOP RIGHT TAG & CORNER BRACKET */}
              <div className="home-industry-card-tag-wrap">
                <span className="home-industry-card-tag">
                  INDUSTRIES / 07
                </span>
                <div className="home-industry-corner-bracket" />
              </div>

              {/* GIANT BACKGROUND WATERMARK "07" */}
              <div className="home-industry-watermark">
                07
              </div>

              {/* CARD GRID */}
              <div className="home-industry-card-body">
                {/* LEFT CONTENT */}
                <div className="home-industry-left-content">
                  {/* Eyebrow */}
                  <span className="home-industry-eyebrow">
                    FEATURED INDUSTRY
                  </span>

                  {/* Headline */}
                  <h3 className="home-industry-title">
                    {currentIndustry.headline}
                  </h3>

                  {/* Description */}
                  <p className="home-industry-desc">
                    {currentIndustry.desc}
                  </p>

                  {/* Horizontal Accent Line */}
                  <div className="home-industry-divider" />

                  {/* 3 Features */}
                  <div className="home-industry-features">
                    {currentIndustry.features.map((feat, fIdx) => (
                      <div key={fIdx} className="home-industry-feat-item">
                        <div className="home-industry-feat-icon">
                          {feat.icon}
                        </div>
                        <div className="home-industry-feat-text">
                          {feat.title.split(" ").map((word, wIdx) => (
                            <span key={wIdx}>
                              {word}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Explore Button */}
                  <a
                    href="/services"
                    className="home-industry-cta-btn"
                  >
                    <span>Explore Industry</span>
                    <span className="home-industry-cta-badge">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </span>
                  </a>
                </div>

                {/* RIGHT GLOBE GRAPHIC */}
                <div className="home-industry-right-visual">
                  <img
                    key={currentIndustry.id}
                    src={currentIndustry.image}
                    alt={currentIndustry.name}
                    className="home-industry-globe-img"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. NUMBERS THAT TELL OUR STORY: BUILT ON EXPERIENCE. DRIVEN BY RESULTS.
          ========================================================================= */}
      <section
        className="home-showcase-section home-numbers-section w-full max-w-full relative flex items-center justify-center py-16 md:py-20 px-6 sm:px-10 md:px-16 border-t border-black/5 overflow-hidden"
        id="numbers"
      >
        <div className="home-container w-full max-w-360 mx-auto relative z-2">
          {/* Section Header */}
          <div className="home-numbers-header flex flex-col pb-16 md:pb-24 border-b border-black/15">
            <div className="home-index-tag inline-flex items-center gap-2.5 font-['IBM_Plex_Mono',monospace] text-[13px] font-semibold tracking-[0.14em] text-slate-500 mb-4 md:mb-4.5 uppercase">
              005 / 007
            </div>

            <div className="home-numbers-heading-wrap max-w-212.5">
              <h2 className="home-display-heading font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(30px,3.1vw,42px)] font-extrabold leading-[1.08] tracking-tight text-[#0e1217] uppercase m-0">
                Built on Experience. <br />
                <span className="home-heading-muted text-[#828894] font-extrabold">Driven by Results.</span>
              </h2>

              <p className="home-numbers-intro max-w-117.5 mt-6 md:mt-8 text-sm leading-[1.7] text-[#0e1217]/55">
                We combine creative thinking, technology, and strategy to create
                digital experiences that move businesses forward.
              </p>
            </div>
          </div>

          {/* Metrics */}
          <div className="home-numbers-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            <div className="home-number-item group relative min-h-55 lg:min-h-77.5 p-6 lg:p-[35px_35px_30px_0] border-b sm:border-b-0 border-r-0 sm:border-r border-black/15 transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
              <div className="home-number-top flex items-center justify-between mb-12 lg:mb-16">
                <span className="home-number-index text-[11px] tracking-[0.12em] opacity-45 font-mono">01</span>
                <span className="home-number-arrow text-lg opacity-35 transition-all duration-350 ease-out group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>

              <h3 className="metric-big-number font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(48px,5.5vw,92px)] font-extrabold text-[#0e1217] leading-[0.85] tracking-[-0.07em] m-0 transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">150+</h3>

              <div className="home-number-bottom absolute left-0 bottom-6 lg:bottom-7.5">
                <span className="metric-caption font-['Inter_Tight',sans-serif] text-xs text-[#0e1217]/55 leading-normal m-0 font-medium whitespace-nowrap">Projects Delivered</span>
              </div>
            </div>

            <div className="home-number-item group relative min-h-55 lg:min-h-77.5 p-6 lg:p-[35px_35px_30px] border-b sm:border-b-0 border-r-0 lg:border-r border-black/15 transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
              <div className="home-number-top flex items-center justify-between mb-12 lg:mb-16">
                <span className="home-number-index text-[11px] tracking-[0.12em] opacity-45 font-mono">02</span>
                <span className="home-number-arrow text-lg opacity-35 transition-all duration-350 ease-out group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>

              <h3 className="metric-big-number font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(48px,5.5vw,92px)] font-extrabold text-[#0e1217] leading-[0.85] tracking-[-0.07em] m-0 transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">50+</h3>

              <div className="home-number-bottom absolute left-6 lg:left-8.75 bottom-6 lg:bottom-7.5">
                <span className="metric-caption font-['Inter_Tight',sans-serif] text-xs text-[#0e1217]/55 leading-normal m-0 font-medium whitespace-nowrap">Global Clients</span>
              </div>
            </div>

            <div className="home-number-item group relative min-h-55 lg:min-h-77.5 p-6 lg:p-[35px_35px_30px] border-b sm:border-b-0 border-r-0 sm:border-r border-black/15 transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
              <div className="home-number-top flex items-center justify-between mb-12 lg:mb-16">
                <span className="home-number-index text-[11px] tracking-[0.12em] opacity-45 font-mono">03</span>
                <span className="home-number-arrow text-lg opacity-35 transition-all duration-350 ease-out group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>

              <h3 className="metric-big-number font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(48px,5.5vw,92px)] font-extrabold text-[#0e1217] leading-[0.85] tracking-[-0.07em] m-0 transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">98%</h3>

              <div className="home-number-bottom absolute left-6 lg:left-8.75 bottom-6 lg:bottom-7.5">
                <span className="metric-caption font-['Inter_Tight',sans-serif] text-xs text-[#0e1217]/55 leading-normal m-0 font-medium whitespace-nowrap">Client Satisfaction</span>
              </div>
            </div>

            <div className="home-number-item group relative min-h-55 lg:min-h-77.5 p-6 lg:p-[35px_35px_30px] transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-2">
              <div className="home-number-top flex items-center justify-between mb-12 lg:mb-16">
                <span className="home-number-index text-[11px] tracking-[0.12em] opacity-45 font-mono">04</span>
                <span className="home-number-arrow text-lg opacity-35 transition-all duration-350 ease-out group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>

              <h3 className="metric-big-number font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(48px,5.5vw,92px)] font-extrabold text-[#0e1217] leading-[0.85] tracking-[-0.07em] m-0 transition-transform duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">10+</h3>

              <div className="home-number-bottom absolute left-6 lg:left-8.75 bottom-6 lg:bottom-7.5">
                <span className="metric-caption font-['Inter_Tight',sans-serif] text-xs text-[#0e1217]/55 leading-normal m-0 font-medium whitespace-nowrap">Industries Served</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. WHAT OUR CLIENTS SAY (TESTIMONIALS)
          ========================================================================= */}
      <section className="home-showcase-section w-full max-w-full relative flex items-center justify-center py-16 md:py-20 px-6 sm:px-10 md:px-16 border-t border-black/5" id="testimonials">
        <div className="home-container w-full max-w-360 mx-auto relative z-2">
          <div className="home-section-header flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-10 mb-9 md:mb-12 w-full">
            <div className="home-header-left max-w-170">
              <div className="home-index-tag inline-flex items-center gap-2.5 font-['IBM_Plex_Mono',monospace] text-[13px] font-semibold tracking-[0.14em] text-slate-500 mb-4 md:mb-4.5 uppercase">
                006 / 007
              </div>
              <h2 className="home-display-heading font-['Helvetica_Now_Var','Inter_Tight',sans-serif] text-[clamp(30px,3.1vw,42px)] font-extrabold leading-[1.08] tracking-tight text-[#0e1217] uppercase m-0">
                Trusted by Businesses <br />
                <span className="home-heading-muted text-[#828894] font-extrabold">Worldwide.</span>
              </h2>
            </div>
            <div className="home-header-right flex flex-col md:flex-row md:items-end gap-4 md:gap-8 max-w-155">
              <p className="home-lead-desc font-['Inter_Tight',sans-serif] text-[15px] leading-[1.65] text-[#525866] m-0">
                We take pride in delivering quality, innovation and measurable
                results for our clients.
              </p>
              <div className="home-slider-nav-arrows flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  className="home-ctrl-btn w-10 h-10 rounded-full bg-[#dfe4e8] border border-black/8 inline-flex items-center justify-center text-[#0e1217] cursor-pointer transition-all duration-200 ease-out hover:bg-[#0e1217] hover:text-white hover:-translate-y-0.5"
                  aria-label="Previous review"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="home-ctrl-btn w-10 h-10 rounded-full bg-[#dfe4e8] border border-black/8 inline-flex items-center justify-center text-[#0e1217] cursor-pointer transition-all duration-200 ease-out hover:bg-[#0e1217] hover:text-white hover:-translate-y-0.5"
                  aria-label="Next review"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Testimonials 2-Column Split: 3D Artwork on Left, Cards on Right */}
          <div className="home-testimonials-layout grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12 items-center">
            <div className="testimonials-art-col hidden lg:flex w-full h-80 items-center justify-center">
              <img
                src="/images/About-us.avif"
                alt="3D Sculpture Client Trust"
                className="testimonials-art-img max-w-full max-h-full object-contain drop-shadow-[0_16px_36px_rgba(234,88,12,0.22)]"
              />
            </div>

            <div className="testimonials-cards-col flex flex-col gap-7">
              <div className="testimonials-grid-row grid grid-cols-1 sm:grid-cols-2 gap-6">
                {testimonials.map((item, idx) => (
                  <div key={idx} className="home-testimonial-card group bg-white border border-black/8 rounded-[20px] p-7 md:p-8 shadow-[0_10px_28px_rgba(0,0,0,0.03)] flex flex-col justify-between transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#ea580c]/35 hover:shadow-[0_18px_36px_rgba(0,0,0,0.08)]">
                    <span className="testimonial-quote-mark font-['Helvetica_Now_Var',serif] text-4xl text-[#ea580c] leading-none mb-2">“</span>
                    <p className="testimonial-quote-text font-['Inter_Tight',sans-serif] text-[15px] leading-[1.65] text-[#525866] mb-6">{item.quote}</p>
                    <div className="testimonial-author-row flex items-center gap-3.5">
                      <div className="testimonial-avatar-wrap w-11 h-11 rounded-full overflow-hidden bg-slate-200 shrink-0">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="testimonial-avatar-img w-full h-full object-cover"
                        />
                      </div>
                      <div className="testimonial-author-meta flex flex-col gap-0.5">
                        <h4 className="author-name font-['Helvetica_Now_Var',sans-serif] text-sm font-bold text-[#0e1217] m-0">{item.name}</h4>
                        <p className="author-role text-xs text-slate-500 m-0">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Dots indicator */}
              <div className="testimonial-dots-row flex items-center justify-center gap-2">
                {[0, 1, 2, 3, 4].map((dot) => (
                  <button
                    key={dot}
                    type="button"
                    onClick={() => setActiveTestimonialDot(dot)}
                    className={`testimonial-dot h-2 rounded-full border-none cursor-pointer transition-all duration-200 ease-out ${activeTestimonialDot === dot
                      ? "active bg-[#ea580c] w-5.5"
                      : "bg-slate-300 w-2 hover:bg-slate-400"
                      }`}
                    aria-label={`Go to slide ${dot + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HAVE AN IDEA? LET'S BRING IT TO LIFE. */}
      <CtaSection tag="007 / 007" />
    </div>
  );
}
