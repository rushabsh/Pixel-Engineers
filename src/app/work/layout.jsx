const siteUrl = 'https://pixelengineers.com';

export const metadata = {
  title: 'Featured Work & Case Studies | Software & Web Portfolio',
  description:
    'Explore featured projects and case studies by Pixel Engineers: Custom software platforms, high-performance web applications, and custom CRM systems built for ambitious businesses.',
  keywords: [
    'software development case studies',
    'web development portfolio',
    'custom CRM portfolio',
    'SaaS application examples',
    'software engineering projects',
    'Pixel Engineers work',
  ],
  alternates: {
    canonical: `${siteUrl}/work`,
  },
  openGraph: {
    title: 'Featured Work & Case Studies | Software & Web Portfolio | Pixel Engineers',
    description:
      'Real impact, measurable results: Browse our portfolio of custom software, enterprise web applications, and CRM implementations.',
    url: `${siteUrl}/work`,
    type: 'website',
  },
};

const workSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Pixel Engineers Portfolio & Case Studies',
  url: `${siteUrl}/work`,
  description:
    'A showcase of custom software platforms, modern websites, and CRM systems engineered by Pixel Engineers.',
  provider: {
    '@type': 'Organization',
    name: 'Pixel Engineers',
    url: siteUrl,
  },
};

export default function WorkLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />
      {children}
    </>
  );
}

