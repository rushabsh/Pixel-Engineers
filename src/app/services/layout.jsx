const siteUrl = 'https://pixelengineers.com';

export const metadata = {
  title: 'Custom Software, Website & CRM Development Services',
  description:
    'Full-suite digital engineering services by Pixel Engineers: Custom Software Development, High-Performance Websites, Bespoke CRM/ERP Systems, SaaS Architecture, and Digital Marketing.',
  keywords: [
    'software development services',
    'website development services',
    'custom CRM development',
    'CRM software development',
    'ERP development services',
    'SaaS engineering agency',
    'full stack development services',
    'custom web application development',
    'cloud and devops services',
    'digital marketing agency services',
  ],
  alternates: {
    canonical: `${siteUrl}/services`,
  },
  openGraph: {
    title: 'Custom Software, Website & CRM Development Services | Pixel Engineers',
    description:
      'Discover our specialized engineering services: Custom Software, High-Performance Web Apps, Tailored CRM Solutions, and Enterprise Cloud Infrastructure.',
    url: `${siteUrl}/services`,
    type: 'website',
  },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pixel Engineers Services',
  description: 'Specialized Custom Software, Website & CRM Development Services',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Custom Software Development',
        serviceType: 'Software Development',
        provider: {
          '@type': 'Organization',
          name: 'Pixel Engineers',
        },
        description:
          'Bespoke software platforms, multi-tenant SaaS architecture, cloud microservices, and enterprise automation engineered for reliability and scale.',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Website & Web Application Development',
        serviceType: 'Web Development',
        provider: {
          '@type': 'Organization',
          name: 'Pixel Engineers',
        },
        description:
          'High-performance modern websites and full-stack web applications built on Next.js, React, and serverless infrastructure with 95+ PageSpeed scores.',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Custom CRM & ERP Development',
        serviceType: 'CRM Development',
        provider: {
          '@type': 'Organization',
          name: 'Pixel Engineers',
        },
        description:
          'Proprietary CRM and ERP software built around your exact business pipelines, automated lead routing, custom reporting, and third-party integrations.',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Digital Marketing & Generative Engine Optimization',
        serviceType: 'Digital Marketing',
        provider: {
          '@type': 'Organization',
          name: 'Pixel Engineers',
        },
        description:
          'Performance marketing, technical SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) ensuring top rankings on Google and AI platforms.',
      },
    },
  ],
};

export default function ServicesLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      {children}
    </>
  );
}

