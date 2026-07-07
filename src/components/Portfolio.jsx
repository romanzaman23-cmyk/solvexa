import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { HiX, HiExternalLink } from 'react-icons/hi'
import ProjectMockup, { MockupThumbnail } from './ProjectMockup'
import DetailModal from './DetailModal'
import { handleNavClick } from '../constants/navLinks'
import { useLanguage } from '../i18n/LanguageContext'

const projectsMeta = [
  { key: 'E-Commerce Platform', mockupId: 'ecommerce', type: 'web', categoryKey: 'webDev', tags: ['React', 'Node.js', 'MongoDB'], screens: ['home', 'product', 'cart', 'checkout'] },
  { key: 'Food Delivery App', mockupId: 'food', type: 'mobile', categoryKey: 'mobileApp', tags: ['Flutter', 'Firebase', 'Maps API'], screens: ['home', 'menu', 'tracking', 'payment'] },
  { key: 'Corporate Website', mockupId: 'corporate', type: 'web', categoryKey: 'webDev', tags: ['Next.js', 'Tailwind', 'Strapi'], screens: ['home', 'about', 'services', 'contact'] },
  { key: 'Fitness Tracker App', mockupId: 'fitness', type: 'mobile', categoryKey: 'mobileApp', tags: ['React Native', 'GraphQL', 'AWS'], screens: ['home', 'workout', 'stats', 'profile'] },
  { key: 'SaaS Dashboard', mockupId: 'saas', type: 'web', categoryKey: 'webDev', tags: ['Vue.js', 'D3.js', 'PostgreSQL'], screens: ['home', 'analytics', 'team', 'reports'] },
  { key: 'Healthcare Portal', mockupId: 'healthcare', type: 'mobile', categoryKey: 'mobileApp', tags: ['Kotlin', 'Swift', 'HIPAA'], screens: ['home', 'appointment', 'consult', 'records'] },
]

function buildProjects(dict) {
  return projectsMeta.map((meta) => {
    const data = dict.portfolio.items[meta.key] || {}
    return {
      ...meta,
      title: data.title || meta.key,
      description: data.description || '',
      details: data.details || '',
      category: dict.portfolio[meta.categoryKey] || meta.categoryKey,
      stats: { duration: data.duration || '', result: data.result || '' },
    }
  })
}

export default function Portfolio() {
  const { t, dict, isRTL } = useLanguage()
  const projects = useMemo(() => buildProjects(dict), [dict])
  const screenLabels = dict.portfolio.screenLabels || {}
  const [selected, setSelected] = useState(null)
  const [activeScreen, setActiveScreen] = useState('home')

  const openProject = (project, screen = 'home') => {
    setActiveScreen(screen)
    setSelected(project)
  }

  return (
    <section id="portfolio" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-wider">{t('portfolio.label')}</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">{t('portfolio.title')}</h2>
          <p className="mt-4 text-secondary text-lg">{t('portfolio.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article key={project.key} role="button" tabIndex={0} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay: i * 0.08 }} whileHover={{ y: -8 }} whileTap={{ scale: 0.98 }} onClick={() => openProject(project)} onKeyDown={(e) => e.key === 'Enter' && openProject(project)} className="group glass rounded-2xl overflow-hidden glass-hover cursor-pointer">
              <div className="h-44 relative overflow-hidden">
                <ProjectMockup id={project.mockupId} screen="home" compact />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 start-3 px-2.5 py-1 rounded-full glass text-[10px] font-medium">{project.category}</div>
              </div>

              <div className="px-3 pb-3 pt-2 border-t border-white/5">
                <p className="text-[10px] text-secondary mb-2">{t('portfolio.appScreens')}</p>
                <div className="flex gap-1.5">
                  {project.screens.map((screen) => (
                    <button key={screen} type="button" onClick={(e) => { e.stopPropagation(); openProject(project, screen) }} className="flex-1 min-w-0" aria-label={`View ${screenLabels[screen] || screen} screen`}>
                      <div className="aspect-[4/3] rounded-md overflow-hidden border border-white/10 hover:border-brand-500/50 transition-colors">
                        <ProjectMockup id={project.mockupId} screen={screen} thumb />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 pt-3">
                <h3 className="font-display text-xl font-semibold group-hover:text-brand-300 transition-colors">{project.title}</h3>
                <p className="mt-2 text-secondary text-sm leading-relaxed line-clamp-2">{project.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 text-xs text-secondary">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <DetailModal open={!!selected} onClose={() => setSelected(null)} isRTL={isRTL} ariaLabel={selected?.title}>
        {selected && (
          <>
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden shrink-0">
              <ProjectMockup id={selected.mockupId} screen={activeScreen} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20 pointer-events-none" />
              <button type="button" onClick={() => setSelected(null)} className="absolute top-3 end-3 sm:top-4 sm:end-4 w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors z-10" aria-label="Close">
                <HiX size={20} />
              </button>
              <div className="absolute bottom-3 start-4 sm:bottom-4 sm:start-6 z-10">
                <span className="px-3 py-1 rounded-full glass text-xs font-medium">{selected.category}</span>
              </div>
            </div>

            <div className="p-4 sm:p-6 md:p-8">
              <p className="text-sm text-secondary mb-3">{t('portfolio.clickPreview')}</p>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 mb-5 sm:mb-6">
                {selected.screens.map((screen) => (
                  <MockupThumbnail key={screen} id={selected.mockupId} screen={screen} label={screenLabels[screen] || screen} active={activeScreen === screen} onClick={() => setActiveScreen(screen)} />
                ))}
              </div>

              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold">{selected.title}</h3>
              <p className="mt-3 sm:mt-4 text-secondary text-sm sm:text-base leading-relaxed">{selected.details}</p>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-3 sm:gap-4">
                <div className="glass rounded-xl px-4 py-3 min-w-[120px]">
                  <div className="text-xs text-secondary">{t('portfolio.timeline')}</div>
                  <div className="font-semibold text-brand-400">{selected.stats.duration}</div>
                </div>
                <div className="glass rounded-xl px-4 py-3 min-w-[120px]">
                  <div className="text-xs text-secondary">{t('portfolio.result')}</div>
                  <div className="font-semibold text-accent-400">{selected.stats.result}</div>
                </div>
              </div>

              <div className="mt-5 sm:mt-6 flex flex-wrap gap-2">
                {selected.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-lg bg-brand-500/10 text-xs sm:text-sm text-brand-300 border border-brand-500/20">{tag}</span>
                ))}
              </div>

              <a href="#contact" onClick={(e) => { setSelected(null); handleNavClick(e, 'contact') }} className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 text-sm sm:text-base font-semibold text-white hover:shadow-lg hover:shadow-brand-500/30 transition-all cursor-pointer">
                {t('portfolio.startProject')}
                <HiExternalLink size={16} className={isRTL ? 'scale-x-[-1]' : ''} />
              </a>
            </div>
          </>
        )}
      </DetailModal>
    </section>
  )
}
