import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGlobe, FaMobileAlt, FaPalette, FaCloud, FaCogs, FaChartLine } from 'react-icons/fa'
import { HiX, HiExternalLink, HiCheckCircle } from 'react-icons/hi'
import { handleNavClick } from '../constants/navLinks'
import { useLanguage } from '../i18n/LanguageContext'
import ServiceVisual from './ServiceVisual'

const servicesMeta = [
  { slug: 'web-development', icon: FaGlobe, color: 'from-brand-500 to-brand-600' },
  { slug: 'mobile-applications', icon: FaMobileAlt, color: 'from-accent-500 to-accent-600' },
  { slug: 'ui-ux-design', icon: FaPalette, color: 'from-brand-400 to-accent-500' },
  { slug: 'cloud-solutions', icon: FaCloud, color: 'from-accent-400 to-brand-500' },
  { slug: 'custom-software', icon: FaCogs, color: 'from-brand-600 to-brand-700' },
  { slug: 'digital-strategy', icon: FaChartLine, color: 'from-accent-500 to-brand-500' },
]

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

function buildServices(dict) {
  return servicesMeta.map((meta) => {
    const data = dict.servicesSection.items[meta.slug] || {}
    return {
      ...meta,
      ...data,
      stats: { timeline: data.timeline, projects: data.projects },
    }
  })
}

export default function Services() {
  const { t, dict, isRTL } = useLanguage()
  const servicesData = useMemo(() => buildServices(dict), [dict])
  const [selected, setSelected] = useState(null)
  const [activeScreen, setActiveScreen] = useState(0)

  useEffect(() => {
    const openService = (e) => {
      const service = servicesData.find((s) => s.slug === e.detail?.slug)
      if (service) {
        setActiveScreen(0)
        setSelected(service)
      }
    }
    window.addEventListener('open-service', openService)
    return () => window.removeEventListener('open-service', openService)
  }, [servicesData])

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    if (selected) {
      setActiveScreen(0)
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selected])

  const openService = (service) => {
    setActiveScreen(0)
    setSelected(service)
  }

  const screenLabels = selected?.screens || []

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-wider">{t('servicesSection.label')}</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">{t('servicesSection.title')}</h2>
          <p className="mt-4 text-secondary text-lg">{t('servicesSection.subtitle')}</p>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-50px' }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <motion.div key={service.slug} id={`service-${service.slug}`} role="button" tabIndex={0} variants={item} whileHover={{ y: -8, transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }} onClick={() => openService(service)} onKeyDown={(e) => e.key === 'Enter' && openService(service)} className="group glass rounded-2xl overflow-hidden glass-hover cursor-pointer">
              <div className="h-36 relative overflow-hidden">
                <ServiceVisual slug={service.slug} screen={0} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className={`absolute top-3 start-3 w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                  <service.icon className="text-white text-sm" />
                </div>
              </div>
              <div className="p-6 pt-4">
                <h3 className="font-display text-xl font-semibold group-hover:text-brand-300 transition-colors">{service.title}</h3>
                <p className="mt-2 text-secondary text-sm leading-relaxed line-clamp-2">{service.description}</p>
                <span className="inline-block mt-3 text-sm text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">{t('servicesSection.viewDetails')}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelected(null)}>
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} transition={{ type: 'spring', damping: 25, stiffness: 300 }} onClick={(e) => e.stopPropagation()} dir={isRTL ? 'rtl' : 'ltr'} className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-3xl shadow-2xl shadow-brand-500/10">
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <ServiceVisual slug={selected.slug} screen={activeScreen} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                <button type="button" onClick={() => setSelected(null)} className="absolute top-4 end-4 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors z-10" aria-label="Close">
                  <HiX size={20} />
                </button>
                <div className="absolute bottom-4 start-6 flex items-center gap-3 z-10">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${selected.color} flex items-center justify-center`}>
                    <selected.icon className="text-white" />
                  </div>
                  <span className="px-3 py-1 rounded-full glass text-xs font-medium">{selected.title}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm text-secondary mb-3">{t('servicesSection.previewScreens')}</p>
                <div className="grid grid-cols-4 gap-2 sm:gap-3 mb-6">
                  {screenLabels.map((label, idx) => (
                    <button key={label} type="button" onClick={() => setActiveScreen(idx)} className={`text-start transition-all rounded-xl overflow-hidden border-2 ${activeScreen === idx ? 'border-brand-500 ring-2 ring-brand-500/30' : 'border-white/10 hover:border-brand-500/40'}`}>
                      <div className="aspect-[4/3]">
                        <ServiceVisual slug={selected.slug} screen={idx} thumb />
                      </div>
                      <span className={`block text-[9px] sm:text-[10px] text-center py-1 truncate px-1 ${activeScreen === idx ? 'text-brand-400 font-medium' : 'text-secondary'}`}>{label}</span>
                    </button>
                  ))}
                </div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold">{selected.title}</h3>
                <p className="mt-3 text-secondary leading-relaxed">{selected.details}</p>
                <p className="mt-3 text-secondary/80 text-sm leading-relaxed">{selected.longDetails}</p>

                <div className="mt-6 flex flex-wrap gap-4">
                  <div className="glass rounded-xl px-4 py-3">
                    <div className="text-xs text-secondary">{t('servicesSection.timeline')}</div>
                    <div className="font-semibold text-brand-400">{selected.stats.timeline}</div>
                  </div>
                  <div className="glass rounded-xl px-4 py-3">
                    <div className="text-xs text-secondary">{t('servicesSection.experience')}</div>
                    <div className="font-semibold text-accent-400">{selected.stats.projects}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-white mb-3">{t('servicesSection.whatsIncluded')}</p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {selected.features?.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-white/90">
                        <HiCheckCircle className="text-accent-400 flex-shrink-0" size={16} />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-white mb-3">{t('servicesSection.deliverables')}</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.deliverables?.map((d) => (
                      <span key={d} className="px-3 py-1.5 rounded-lg bg-brand-500/10 text-sm text-brand-300 border border-brand-500/20">{d}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-white mb-3">{t('servicesSection.technologies')}</p>
                  <div className="flex flex-wrap gap-2">
                    {selected.technologies?.map((tech) => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-secondary border border-white/10">{tech}</span>
                    ))}
                  </div>
                </div>

                <a href="#contact" onClick={(e) => { setSelected(null); handleNavClick(e, 'contact') }} className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 font-semibold text-white hover:shadow-lg hover:shadow-brand-500/30 transition-all cursor-pointer">
                  {t('servicesSection.getService')}
                  <HiExternalLink size={16} className={isRTL ? 'scale-x-[-1]' : ''} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export function openServicePopup(slug) {
  window.dispatchEvent(new CustomEvent('open-service', { detail: { slug } }))
}
