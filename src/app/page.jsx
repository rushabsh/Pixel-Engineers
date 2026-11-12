import PixelExperience from "../components/PixelExperience";
import HomeSections from "../components/HomeSections";

const siteUrl = "https://pixelengineers.com";

export const metadata = {
  title: "Pixel Engineers | Custom Software, Website & CRM Development Agency",
  description:
    "Award-winning custom software development, modern website development, and custom CRM engineering agency. We build scalable SaaS applications, web platforms, and business systems.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title:
      "Pixel Engineers | Custom Software, Website & CRM Development Agency",
    description:
      "We engineer custom software platforms, high-speed modern websites, enterprise CRM solutions, and SaaS applications built for scale and ROI.",
    url: siteUrl,
    type: "website",
  },
};

// FAQ Schema for Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO)
const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Pixel Engineers offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pixel Engineers provides end-to-end custom software development, modern website development, custom CRM and ERP development, SaaS platform engineering, UI/UX design, and AI-driven digital marketing solutions.",
      },
    },
    {
      "@type": "Question",
      name: "Can Pixel Engineers develop a custom CRM tailored to my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Pixel Engineers specializes in bespoke CRM and ERP development tailored 100% to your sales cycle, customer workflows, and operational requirements, with zero per-user seat fees and complete proprietary ownership.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Pixel Engineers use for web and software development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We leverage modern, enterprise-grade technologies including Next.js, React, Node.js, Python, TypeScript, PostgreSQL, Redis, AWS cloud architecture, and Three.js/WebGL for interactive visual experiences.",
      },
    },
    {
      "@type": "Question",
      name: "Why should I choose Pixel Engineers for software and website development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pixel Engineers combines deep full-stack engineering expertise with data-backed digital marketing. We deliver clean, scalable code, 95+ PageSpeed scores, robust security, and measurable conversion growth.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started with a software or web development project?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can visit our contact page at https://pixelengineers.com/contact to book a free discovery call and receive a detailed technical roadmap and project estimate.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      {/* FAQ Schema for AI Search Engines (ChatGPT, Gemini, Perplexity) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqSchema) }}
      />

      {/* 1. HERO SECTION (100% UNTOUCHED AS REQUESTED) */}
      <PixelExperience />

      {/* 2. ALL HOME SECTIONS MATCHING USER REFERENCE IMAGE */}
      <HomeSections />
    </main>
  );
}
