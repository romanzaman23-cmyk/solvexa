import { motion } from 'framer-motion'
import { HiCheckCircle } from 'react-icons/hi'
import { useLanguage } from '../i18n/LanguageContext'
import Vision2030Badge from './Vision2030Badge'

export default function About() {
  const { t, dict } = useLanguage()
  const highlights = dict.about.highlights
  const statNums = ['5+', '50+', '100+', '15+']

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-500/20 to-accent-500/20 rounded-3xl blur-xl" />
              <div className="relative glass rounded-3xl p-8 lg:p-10">
                <div className="grid grid-cols-2 gap-4">
                  {dict.about.stats.map((label, i) => (
                    <motion.div key={label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-4 rounded-2xl bg-white/5">
                      <div className="font-display text-3xl font-bold text-gradient">{statNums[i]}</div>
                      <div className="text-sm text-secondary mt-1">{label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <span className="text-brand-400 font-semibold text-sm uppercase tracking-wider">{t('about.label')}</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 leading-tight">
              {t('about.title')}{' '}
              <span className="text-gradient">{t('about.titleHighlight')}</span>
            </h2>
            <p className="mt-6 text-secondary text-lg leading-relaxed">{t('about.p1')}</p>
            <p className="mt-4 text-secondary leading-relaxed">{t('about.p2')}</p>
            <ul className="mt-8 space-y-3">
              {highlights.map((point, i) => (
                <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="flex items-start gap-3">
                  <HiCheckCircle className="text-brand-400 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-white/80">{point}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10">
              <Vision2030Badge />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
