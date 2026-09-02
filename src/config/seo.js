export const SITE_URL = 'https://solvexa.com'

export const seo = {
  en: {
    title: 'Solvexa Digital Solutions | Digital Solutions Company in Saudi Arabia',
    description:
      'Solvexa Digital Solutions is a Saudi Arabia-based digital solutions company providing website development, web applications, mobile apps, UI/UX design, software solutions, and IT services for businesses across Saudi Arabia.',
    locale: 'en_SA',
  },
  ar: {
    title: 'سولڤكسا للحلول الرقمية | شركة حلول رقمية في المملكة العربية السعودية',
    description:
      'سولڤكسا للحلول الرقمية هي شركة حلول رقمية رائدة في السعودية تقدم تطوير المواقع، تطبيقات الويب والجوال، تصميم UI/UX، وحلول البرمجيات وتقنية المعلومات للشركات في الرياض وجميع أنحاء المملكة.',
    locale: 'ar_SA',
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Solvexa Digital Solutions',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/solvexa-logo.png`,
    caption: 'Solvexa Digital Solutions - IT & Digital Solutions Company in Saudi Arabia',
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
  name: 'Solvexa Digital Solutions',
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
    name: 'Digital & IT Solutions Saudi Arabia',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Web Development Saudi Arabia',
          description: 'Custom, responsive websites and web applications built with React, Next.js, and modern tech stacks.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Mobile App Development Saudi Arabia',
          description: 'Native and cross-platform mobile apps for iOS and Android using Flutter & React Native.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'UI/UX Design Saudi Arabia',
          description: 'Modern user-centered design, Figma wireframes, and interactive prototypes.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Software Development Saudi Arabia',
          description: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud with high availability.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'IT Solutions Saudi Arabia',
          description: 'Tailored enterprise software, ERP platforms, and internal business automation solutions.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Digital Solutions Riyadh',
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
  name: 'Solvexa Digital Solutions',
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
      name: 'What services does Solvexa Digital Solutions provide in Saudi Arabia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Solvexa Digital Solutions is a premier digital solutions company in Saudi Arabia offering custom web development, mobile app development (iOS & Android), UI/UX design, software development, cloud infrastructure, and IT solutions in Riyadh and across Saudi Arabia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why choose Solvexa as your IT and software company in Riyadh, Saudi Arabia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As a leading IT company in Riyadh, Solvexa delivers high-quality software engineering, modern UI/UX design, fast execution, 24/7 support, and tailored digital solutions aligned with Saudi Vision 2030.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I start a project with Solvexa Digital Solutions in Saudi Arabia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can contact Solvexa Digital Solutions directly via phone (+966-57-366-0378), email (info.solvexadigital@gmail.com), WhatsApp, or through the contact form on our website for a free consultation and project quote.',
      },
    },
  ],
}
