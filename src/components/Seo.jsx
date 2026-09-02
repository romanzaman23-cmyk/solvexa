import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import {
  seo,
  organizationSchema,
  localBusinessSchema,
  websiteSchema,
  breadcrumbSchema,
  faqSchema,
  SITE_URL,
} from '../config/seo'

function setMeta(name, content, property = false) {
  const attr = property ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href, attrs = {}) {
  let el = document.querySelector(`link[rel="${rel}"]${attrs.hreflang ? `[hreflang="${attrs.hreflang}"]` : ''}`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute(rel, rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v))
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function Seo() {
  const { lang } = useLanguage()
  const meta = seo[lang] || seo.en

  useEffect(() => {
    document.title = meta.title
    setMeta('description', meta.description)
    setMeta('author', 'Solvexa Digital Solutions')
    setMeta('publisher', 'Solvexa Digital Solutions')
    setMeta('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
    setMeta('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1')
    setMeta('geo.region', 'SA-01')
    setMeta('geo.placename', 'Riyadh, Saudi Arabia')
    setMeta('geo.position', '24.7136;46.6753')
    setMeta('ICBM', '24.7136, 46.6753')

    setMeta('og:type', 'website', true)
    setMeta('og:site_name', 'Solvexa Digital Solutions', true)
    setMeta('og:title', meta.title, true)
    setMeta('og:description', meta.description, true)
    setMeta('og:locale', meta.locale, true)
    setMeta('og:locale:alternate', lang === 'ar' ? 'en_SA' : 'ar_SA', true)
    setMeta('og:image', `${SITE_URL}/solvexa-logo.png`, true)
    setMeta('og:image:secure_url', `${SITE_URL}/solvexa-logo.png`, true)
    setMeta('og:image:type', 'image/png', true)
    setMeta('og:image:width', '1200', true)
    setMeta('og:image:height', '630', true)
    setMeta('og:image:alt', 'Solvexa Digital Solutions - Digital Solutions Company in Saudi Arabia', true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
    setMeta('twitter:image', `${SITE_URL}/solvexa-logo.png`)
    setMeta('twitter:image:alt', 'Solvexa Digital Solutions - IT & Digital Solutions Company')

    const currentOrigin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : SITE_URL
    const currentCanonical = `${currentOrigin}/`

    setLink('canonical', currentCanonical)
    setLink('alternate', currentCanonical, { hreflang: 'en' })
    setLink('alternate', currentCanonical, { hreflang: 'ar' })
    setLink('alternate', currentCanonical, { hreflang: 'x-default' })

    setJsonLd('schema-org', [
      organizationSchema,
      localBusinessSchema,
      websiteSchema,
      breadcrumbSchema,
      faqSchema,
    ])
  }, [lang, meta])

  return null
}
