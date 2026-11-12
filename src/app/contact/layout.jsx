const siteUrl = 'https://pixelengineers.com';

export const metadata = {
  title: 'Contact Us | Hire Custom Software & Web Developers',
  description:
    'Get in touch with Pixel Engineers. Discuss your custom software development, website redesign, or custom CRM/ERP project with our engineering team for a free consultation.',
  keywords: [
    'contact Pixel Engineers',
    'hire software developers',
    'hire web development agency',
    'custom CRM consultation',
    'software development quote',
    'software engineering inquiry',
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Us | Hire Custom Software & Web Developers | Pixel Engineers',
    description:
      'Ready to build your next breakthrough digital product? Contact our team of software and web engineers today.',
    url: `${siteUrl}/contact`,
    type: 'website',
  },
};

const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Pixel Engineers',
  url: `${siteUrl}/contact`,
  description:
    'Contact Pixel Engineers for custom software development, modern website engineering, and bespoke CRM solutions.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Pixel Engineers',
    url: siteUrl,
    email: 'contact@pixelengineers.com',
    telephone: '+1-800-PIXEL-ENG',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'contact@pixelengineers.com',
      availableLanguage: ['English'],
    },
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {children}
    </>
  );
}

