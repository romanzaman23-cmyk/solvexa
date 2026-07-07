export const SITE_URL = 'https://solvexa.com'

export const seo = {
  en: {
    title: 'Solvexa | Web Development & Mobile Apps — Riyadh, Saudi Arabia',
    description:
      'Solvexa builds custom websites and mobile apps in Saudi Arabia. Web development, iOS & Android apps, UI/UX design — aligned with Vision 2030. Based in Riyadh.',
    keywords:
      'web development Saudi Arabia, mobile app development Riyadh, website design KSA, app development company Saudi, Vision 2030 digital solutions, Solvexa',
    locale: 'en_SA',
  },
  ar: {
    title: 'سولڤكسا | تطوير مواقع وتطبيقات جوال — الرياض، السعودية',
    description:
      'سولڤكسا تبني مواقع وتطبيقات جوال مخصصة في المملكة العربية السعودية. تطوير ويب، تطبيقات iOS و Android، تصميم UI/UX — متوافقة مع رؤية 2030. مقرنا الرياض.',
    keywords:
      'تطوير مواقع السعودية, تطبيقات جوال الرياض, تصميم مواقع, شركة برمجة السعودية, رؤية 2030, سولڤكسا',
    locale: 'ar_SA',
  },
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Solvexa',
  url: SITE_URL,
  logo: `${SITE_URL}/solvexa-logo.png`,
  description: seo.en.description,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Riyadh',
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
  name: 'Solvexa',
  image: `${SITE_URL}/solvexa-logo.png`,
  url: SITE_URL,
  telephone: '+966-57-366-0378',
  email: 'info.solvexadigital@gmail.com',
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
  areaServed: {
    '@type': 'Country',
    name: 'Saudi Arabia',
  },
  priceRange: '$$',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
    opens: '09:00',
    closes: '18:00',
  },
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Solvexa',
  url: SITE_URL,
  inLanguage: ['en', 'ar'],
  potentialAction: {
    '@type': 'SearchAction',
    target: `${SITE_URL}/?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}
