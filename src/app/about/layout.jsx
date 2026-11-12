const siteUrl = 'https://pixelengineers.com';

export const metadata = {
  title: 'About Us | Premier Software & Web Engineering Agency',
  description:
    'Learn about Pixel Engineers — our mission, leadership, and team of software architects, web developers, and CRM specialists engineering modern digital solutions.',
  keywords: [
    'about Pixel Engineers',
    'software engineering company',
    'web development agency team',
    'custom CRM architects',
    'software agency story',
    'experienced software developers',
  ],
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: 'About Us | Premier Software & Web Engineering Agency | Pixel Engineers',
    description:
      'We combine engineering rigor with design excellence to build custom software, web platforms, and tailored CRM systems that power industry leaders.',
    url: `${siteUrl}/about`,
    type: 'profile',
  },
};

const aboutSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'About Pixel Engineers',
  url: `${siteUrl}/about`,
  description:
    'Pixel Engineers is a forward-thinking digital agency specializing in custom software development, modern web architecture, and proprietary CRM platforms.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Pixel Engineers',
    url: siteUrl,
    knowsAbout: [
      'Custom Software Development',
      'High-Performance Web Development',
      'CRM & ERP Systems Engineering',
      'Digital Marketing & Growth',
    ],
  },
};

export default function AboutLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {children}
    </>
  );
}

