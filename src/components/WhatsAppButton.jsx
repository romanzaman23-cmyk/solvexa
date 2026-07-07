import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import { contactLinks, CONTACT_PHONE_DISPLAY } from '../config/contact'
import { useLanguage } from '../i18n/LanguageContext'

const WHATSAPP_URL = contactLinks.whatsapp

export default function WhatsAppButton() {
  const { t, isRTL } = useLanguage()

  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${t('whatsapp.chat')} — ${CONTACT_PHONE_DISPLAY}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-5 end-5 sm:bottom-6 sm:end-6 z-[90] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 group-hover:opacity-30" />
      <span className="relative flex items-center justify-center w-14 h-14 sm:w-[3.75rem] sm:h-[3.75rem] rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 border-2 border-white/20 hover:bg-[#20BD5A] transition-colors">
        <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8" />
      </span>
      <span
        className={`pointer-events-none absolute bottom-full mb-2 px-3 py-1.5 rounded-lg glass text-xs font-medium text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block ${isRTL ? 'start-0' : 'end-0'}`}
      >
        {t('whatsapp.chat')}
      </span>
    </motion.a>
  )
}
