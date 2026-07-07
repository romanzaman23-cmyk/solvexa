import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const stepNums = ['01', '02', '03', '04']

export default function Process() {
  const { t, dict } = useLanguage()
  const steps = dict.process.steps

  return (
    <section id="process" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/20 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-wider">{t('process.label')}</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">{t('process.title')}</h2>
          <p className="mt-4 text-secondary text-lg">{t('process.subtitle')}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div key={stepNums[i]} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="relative text-center group">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 start-[60%] w-[80%] h-px bg-gradient-to-r from-brand-500/50 to-transparent" />
              )}
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-brand-600 to-accent-600 flex items-center justify-center font-display text-2xl font-bold shadow-lg shadow-brand-500/30 mb-6">
                {stepNums[i]}
              </motion.div>
              <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-brand-300 transition-colors">{step.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
