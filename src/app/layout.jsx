import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const siteUrl = "https://pixelengineers.com";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Pixel Engineers | Custom Software, Website & CRM Development Agency",
    template: "%s | Pixel Engineers",
  },
  description:
    "Pixel Engineers is an elite custom software engineering, modern website development, and CRM/ERP development agency. We build scalable SaaS platforms, enterprise web applications, and data-driven digital marketing solutions.",
  applicationName: "Pixel Engineers",
  authors: [{ name: "Pixel Engineers", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "software development",
    "software development company",
    "custom software development",
    "website development",
    "web development agency",
    "CRM development",
    "custom CRM development",
    "CRM software solutions",
    "ERP development",
    "SaaS development agency",
    "full stack web development",
    "enterprise software solutions",
    "digital marketing agency",
    "AEO optimization",
    "GEO optimization",
    "SEO services",
    "mobile app development",
    "UI UX design agency",
    "cloud infrastructure",
    "API integration services",
    "Pixel Engineers",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Pixel Engineers",
  publisher: "Pixel Engineers",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Pixel Engineers",
    title:
      "Pixel Engineers | Custom Software, Website & CRM Development Agency",
    description:
      "Premier software engineering company delivering custom software, high-performance websites, tailored CRM & ERP systems, and AI-optimized digital products for high-growth businesses.",
    images: [
      {
        url: `${siteUrl}/images/Glowing%20Voxel%20Cube%20Network.avif`,
        width: 1200,
        height: 630,
        alt: "Pixel Engineers - Custom Software, Web & CRM Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pixel Engineers | Custom Software, Website & CRM Development Agency",
    description:
      "Engineered for speed, scale, and conversion: Custom Software Development, Modern Websites, Enterprise CRM Systems & Digital Growth.",
    images: [`${siteUrl}/images/Glowing%20Voxel%20Cube%20Network.avif`],
    creator: "@pixelengineers",
  },
  category: "technology",
};

// Rich Structured Data (JSON-LD) for Search Engines & AI Models (Google, ChatGPT, Gemini, Perplexity)
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteUrl}/#organization`,
      name: "Pixel Engineers",
      legalName: "Pixel Engineers",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/Glowing%20Voxel%20Cube%20Network.avif`,
        caption: "Pixel Engineers Logo",
      },
      image: `${siteUrl}/images/Glowing%20Voxel%20Cube%20Network.avif`,
      description:
        "Pixel Engineers is an elite custom software engineering, modern website development, and CRM/ERP development company helping ambitious brands and enterprises build scalable, mission-critical digital products.",
      email: "contact@pixelengineers.com",
      telephone: "+1-800-PIXEL-ENG",
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        addressCountry: "US",
      },
      sameAs: [
        "https://twitter.com/pixelengineers",
        "https://linkedin.com/company/pixelengineers",
        "https://github.com/pixelengineers",
      ],
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 37.7749,
          longitude: -122.4194,
        },
      },
      knowsAbout: [
        "Custom Software Development",
        "Website Development & Modern Web Architecture",
        "CRM Development & Custom Business Management Systems",
        "ERP Software Development",
        "SaaS Product Architecture & Multi-Tenant Platforms",
        "Full-Stack Web Applications (React, Next.js, Node.js)",
        "Mobile Application Development (iOS & Android)",
        "Cloud Infrastructure, AWS, DevOps & Microservices",
        "UI/UX Product Design & Design Systems",
        "Digital Marketing, SEO, AEO & GEO Optimization",
        "Generative AI Integration & Intelligent Systems",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Core Engineering & Digital Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom Software Development",
              description:
                "End-to-end bespoke software engineering, enterprise applications, secure microservices, and workflow automation tailored to business operations.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Website & Web Application Development",
              description:
                "High-performance, ultra-fast, modern websites and full-stack web applications built on Next.js, React, and serverless architectures.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Custom CRM & ERP Development",
              description:
                "Tailored customer relationship management (CRM) and enterprise resource planning (ERP) platforms designed to centralize business data and maximize sales velocity.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Digital Marketing, SEO & Generative Engine Optimization",
              description:
                "Data-driven digital marketing campaigns, technical SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) ensuring presence on Google, ChatGPT, and AI platforms.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "UI/UX Design & Brand Systems",
              description:
                "Human-centered product design, design systems, interactive prototypes, and high-converting user experiences.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Pixel Engineers",
      description:
        "Official website of Pixel Engineers: Custom Software, Website & CRM Development Agency.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: `${siteUrl}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Inter+Tight:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* Structured Data for SEO, AEO, and GEO (Google, ChatGPT Search, Perplexity, Gemini) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
