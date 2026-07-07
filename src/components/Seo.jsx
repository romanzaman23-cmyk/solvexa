import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { seo, organizationSchema, localBusinessSchema, websiteSchema, SITE_URL } from '../config/seo'

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
    el.setAttribute('rel', rel)
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
    setMeta('keywords', meta.keywords)
    setMeta('author', 'Solvexa')
    setMeta('robots', 'index, follow, max-image-preview:large')
    setMeta('geo.region', 'SA-01')
    setMeta('geo.placename', 'Riyadh')
    setMeta('geo.position', '24.7136;46.6753')
    setMeta('ICBM', '24.7136, 46.6753')

    setMeta('og:type', 'website', true)
    setMeta('og:url', SITE_URL, true)
    setMeta('og:title', meta.title, true)
    setMeta('og:description', meta.description, true)
    setMeta('og:locale', meta.locale, true)
    setMeta('og:locale:alternate', lang === 'ar' ? 'en_SA' : 'ar_SA', true)
    setMeta('og:site_name', 'Solvexa', true)
    setMeta('og:image', `${SITE_URL}/solvexa-logo.png`, true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', meta.title)
    setMeta('twitter:description', meta.description)
    setMeta('twitter:image', `${SITE_URL}/solvexa-logo.png`)

    setLink('canonical', SITE_URL)
    setLink('alternate', SITE_URL, { hreflang: 'en' })
    setLink('alternate', SITE_URL, { hreflang: 'ar' })
    setLink('alternate', SITE_URL, { hreflang: 'x-default' })

    setJsonLd('schema-org', [organizationSchema, localBusinessSchema, websiteSchema])
  }, [lang, meta])

  return null
}
