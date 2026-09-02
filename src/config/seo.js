export const SITE_URL = 'https://solvexa.com'

export const seo = {
  en: {
    title: 'Solvexa | Web Development & Mobile Apps — Riyadh, Saudi Arabia',
    description:
      'Solvexa builds high-performance custom websites and mobile apps in Riyadh, Saudi Arabia. Web development, iOS & Android apps, UI/UX design — aligned with Vision 2030.',
    keywords:
      'web development Saudi Arabia, mobile app development Riyadh, website design KSA, app development company Saudi, custom software Riyadh, UI UX design Saudi Arabia, Vision 2030 digital solutions, Solvexa',
    locale: 'en_SA',
  },
  ar: {
    title: 'سولڤكسا | تطوير مواقع وتطبيقات جوال — الرياض، السعودية',
    description:
      'سولڤكسا تبني مواقع إلكترونية وتطبيقات جوال مخصصة وعالية الأداء في الرياض، المملكة العربية السعودية. تطوير مواقع، تطبيقات iOS و Android، وتصميم UI/UX متوافقة مع رؤية 2030.',
    keywords:
      'تطوير مواقع السعودية, تطبيقات جوال الرياض, تصميم مواقع الرياض, شركة برمجة السعودية, برمجة خاصة الرياض, تصميم واجهات المستخدم, رؤية 2030, سولڤكسا',
    locale: 'ar_SA',
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Solvexa',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/solvexa-logo.png`,
    caption: 'Solvexa Digital Solutions',
  },
  image: `${SITE_URL}/solvexa-logo.png`,
  description: seo.en.description,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'King Fahd Road',
    addressLocality: 'Riyadh',
    addressRegion: 'Riyadh Province',
    addressCountry: 'SA',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+966-57-366-0378',
    contactType: 'customer service',
    email: 'info.solvexadigital@gmail.com',
    areaServed: 'SA',
    availableLanguage: ['English', 'Arabic'],
  },
  sameAs: [
    'https://facebook.com',
    'https://instagram.com',
    'https://www.linkedin.com/in/solvexa-digital-solutions-provider-b092a8403/',
    'https://twitter.com',
  ],
}

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#localbusiness`,
  name: 'Solvexa',
  image: `${SITE_URL}/solvexa-logo.png`,
  url: SITE_URL,
  telephone: '+966-57-366-0378',
  email: 'info.solvexadigital@gmail.com',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'King Fahd Road',
    addressLocality: 'Riyadh',
    addressRegion: 'Riyadh Province',
    addressCountry: 'SA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.7136,
    longitude: 46.6753,
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Saudi Arabia',
    },
    {
      '@type': 'City',
      name: 'Riyadh',
    },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
    opens: '09:00',
    closes: '18:00',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Digital Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development',
          description: 'Custom, responsive websites built with React, Next.js, and modern tech stacks.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile Applications',
          description: 'Native and cross-platform mobile apps for iOS and Android using Flutter & React Native.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design',
          description: 'Modern user-centered design, Figma wireframes, and interactive prototypes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Cloud Solutions',
          description: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud with high availability.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Software',
          description: 'Tailored enterprise software and internal business automation solutions.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Strategy',
          description: 'Strategic consulting and digital roadmap aligned with Saudi Vision 2030.',
        },
      },
    ],
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Solvexa',
  url: SITE_URL,
  inLanguage: ['en-SA', 'ar-SA'],
  publisher: {
    '@id': `${SITE_URL}/#organization`,
  },
}

export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: `${SITE_URL}#services`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Portfolio',
      item: `${SITE_URL}#portfolio`,
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'About',
      item: `${SITE_URL}#about`,
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Contact',
      item: `${SITE_URL}#contact`,
    },
  ],
}

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What services does Solvexa provide in Saudi Arabia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solvexa specializes in custom web development, mobile application development (iOS & Android), UI/UX design, cloud solutions, custom software engineering, and digital strategy consulting in Riyadh, Saudi Arabia.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do Solvexa solutions align with Saudi Vision 2030?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solvexa builds cutting-edge, secure, and scalable digital platforms empowering local enterprises and startups across Saudi Arabia to accelerate their digital transformation goals under Vision 2030.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I start a project with Solvexa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Solvexa directly via phone (+966-57-366-0378), email (info.solvexadigital@gmail.com), WhatsApp, or through the contact form on our website for a free consultation and project quote.',
      },
    },
  ],
}
