import { motion } from 'framer-motion'
import { useLanguage } from '../i18n/LanguageContext'

const LOGO_SRC = '/vision2030-logo.png'

export default function Vision2030Badge({ variant = 'default', className = '' }) {
  const { t, isRTL } = useLanguage()

  if (variant === 'compact') {
    return (
      <a
        href="https://www.vision2030.gov.sa/en"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center rounded-lg px-2 py-1 hover:opacity-90 transition-opacity ${className}`}
        aria-label={t('vision2030.ariaLabel')}
      >
        <img
          src={LOGO_SRC}
          alt={t('vision2030.title')}
          className="h-9 sm:h-10 w-auto object-contain"
        />
      </a>
    )
  }

  return (
    <motion.a
      href="https://www.vision2030.gov.sa/en"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`flex flex-col sm:flex-row items-center gap-5 sm:gap-8 glass rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all ${className}`}
      aria-label={t('vision2030.ariaLabel')}
    >
      <img
        src={LOGO_SRC}
        alt={t('vision2030.title')}
        className="h-24 sm:h-28 w-auto max-w-full object-contain flex-shrink-0"
      />
      <div className="text-center sm:text-start">
        <p className="text-brand-400 text-xs font-semibold uppercase tracking-wider">{t('vision2030.label')}</p>
        <p className="text-white font-display font-semibold text-base sm:text-lg mt-1">{t('vision2030.desc')}</p>
      </div>
    </motion.a>
  )
}
