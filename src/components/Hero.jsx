import { motion } from 'framer-motion'
import { HiArrowRight, HiSparkles } from 'react-icons/hi'
import { FaGlobe, FaMobileAlt, FaRocket } from 'react-icons/fa'
import { handleNavClick } from '../constants/navLinks'
import { useLanguage } from '../i18n/LanguageContext'

const floatingIcons = [
  { Icon: FaGlobe, x: '10%', y: '20%', delay: 0 },
  { Icon: FaMobileAlt, x: '85%', y: '15%', delay: 0.5 },
  { Icon: FaRocket, x: '75%', y: '70%', delay: 1 },
]

export default function Hero() {
  const { t, isRTL } = useLanguage()

  const stats = [
    { value: '50+', label: t('hero.stat1') },
    { value: '98%', label: t('hero.stat2') },
    { value: '24/7', label: t('hero.stat3') },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <motion.div key={i} className="absolute hidden md:flex w-14 h-14 glass rounded-2xl items-center justify-center text-brand-400" style={{ left: x, top: y }} animate={{ y: [0, -15, 0] }} transition={{ duration: 4 + i, repeat: Infinity, delay, ease: 'easeInOut' }}>
          <Icon size={22} />
        </motion.div>
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-brand-300 mb-6">
              <HiSparkles className="text-accent-400" />
              {t('hero.badge')}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              {t('hero.title1')}{' '}
              <span className="text-gradient">{t('hero.titleWeb')}</span>{' '}
              {t('hero.titleAnd')}{' '}
              <span className="text-gradient">{t('hero.titleMobile')}</span>{' '}
              {t('hero.title2')}
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 text-lg sm:text-xl text-secondary max-w-xl leading-relaxed">
              {t('hero.subtitle')}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 font-semibold text-white hover:shadow-xl hover:shadow-brand-500/30 hover:scale-105 transition-all cursor-pointer">
                {t('hero.cta1')}
                <HiArrowRight className={`transition-transform ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
              <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass glass-hover font-semibold cursor-pointer">
                {t('hero.cta2')}
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-12 flex flex-wrap gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-brand-400">{stat.value}</div>
                  <div className="text-sm text-secondary mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/30 to-accent-500/30 rounded-3xl blur-2xl animate-pulse-glow" />
              <div className="relative glass rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="space-y-3">
                  {[100, 75, 90].map((w, i) => (
                    <motion.div key={i} initial={{ width: 0 }} animate={{ width: `${w}%` }} transition={{ delay: 0.8 + i * 0.2 }} className="h-3 bg-brand-500/40 rounded" />
                  ))}
                  <div className="pt-4 grid grid-cols-2 gap-3">
                    {[1, 2, 3, 4].map((n) => (
                      <motion.div key={n} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4 + n * 0.1 }} className="h-16 glass rounded-xl" />
                    ))}
                  </div>
                </div>
              </div>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute -bottom-4 start-0 glass rounded-2xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-400 text-lg">✓</div>
                  <div>
                    <div className="text-sm font-semibold">{t('hero.projectLive')}</div>
                    <div className="text-xs text-secondary">{t('hero.deployed')}</div>
                  </div>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }} className="absolute -top-4 end-0 glass rounded-2xl p-4 shadow-xl">
                <div className="text-2xl font-display font-bold text-gradient">+127%</div>
                <div className="text-xs text-secondary">{t('hero.engagement')}</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
