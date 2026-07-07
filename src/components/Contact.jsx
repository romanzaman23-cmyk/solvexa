import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { useLanguage } from '../i18n/LanguageContext'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, contactLinks } from '../config/contact'
import { sendContactEmail } from '../utils/sendContactEmail'

export default function Contact() {
  const { t, isRTL } = useLanguage()
  const [form, setForm] = useState({ name: '', email: '', service: '', message: '', honey: '' })
  const [status, setStatus] = useState('idle')
  const [errorType, setErrorType] = useState('')

  const contactInfo = [
    { icon: HiMail, label: t('contact.email'), value: CONTACT_EMAIL, href: contactLinks.email },
    { icon: HiPhone, label: t('contact.phone'), value: CONTACT_PHONE_DISPLAY, href: contactLinks.phone },
    { icon: FaWhatsapp, label: t('contact.whatsapp'), value: CONTACT_PHONE_DISPLAY, href: contactLinks.whatsapp },
    { icon: HiLocationMarker, label: t('contact.location'), value: t('contact.locationValue'), href: '#' },
  ]

  const serviceOptions = [
    { value: 'web', label: t('services.webDevelopment') },
    { value: 'mobile', label: t('services.mobileApplications') },
    { value: 'design', label: t('services.uiUxDesign') },
    { value: 'other', label: t('contact.other') },
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (status === 'sending') return

    setStatus('sending')
    const serviceLabel = serviceOptions.find((o) => o.value === form.service)?.label || form.service

    try {
      await sendContactEmail({
        name: form.name,
        email: form.email,
        service: serviceLabel,
        message: form.message,
        honey: form.honey,
      })
      setStatus('success')
      setErrorType('')
      setForm({ name: '', email: '', service: '', message: '', honey: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setErrorType(err?.message === 'activation' ? 'activation' : 'error')
      setStatus('error')
      setTimeout(() => { setStatus('idle'); setErrorType('') }, 8000)
    }
  }

  const buttonLabel =
    status === 'sending'
      ? t('contact.sending')
      : status === 'success'
        ? t('contact.messageSent')
        : status === 'error' && errorType === 'activation'
          ? t('contact.activationNeeded')
          : status === 'error'
            ? t('contact.error')
            : t('contact.sendMessage')

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-400 font-semibold text-sm uppercase tracking-wider">{t('contact.label')}</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">{t('contact.title')}</h2>
          <p className="mt-4 text-secondary text-lg">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: isRTL ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-4">
            {contactInfo.map((info, i) => (
              <motion.a key={info.label} href={info.href} initial={{ opacity: 0, x: isRTL ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ x: isRTL ? -8 : 8 }} className="flex items-center gap-4 glass rounded-2xl p-5 glass-hover">
                <div className="w-12 h-12 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400">
                  <info.icon size={20} />
                </div>
                <div>
                  <div className="text-sm text-secondary">{info.label}</div>
                  <div className="font-medium break-all">{info.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.form initial={{ opacity: 0, x: isRTL ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} onSubmit={handleSubmit} className="lg:col-span-3 glass rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 relative">
            <input
              type="text"
              name="_honey"
              value={form.honey}
              onChange={(e) => setForm({ ...form, honey: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="absolute opacity-0 pointer-events-none h-0 w-0 overflow-hidden"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-sm text-secondary mb-2">{t('contact.fullName')}</label>
                <input id="name" type="text" required disabled={status === 'sending'} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors disabled:opacity-60" placeholder={t('contact.namePlaceholder')} />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-secondary mb-2">{t('contact.emailAddress')}</label>
                <input id="email" type="email" required disabled={status === 'sending'} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors disabled:opacity-60" placeholder={t('contact.emailPlaceholder')} />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="service" className="block text-sm text-secondary mb-2">{t('contact.serviceNeeded')}</label>
              <select id="service" required disabled={status === 'sending'} value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors text-white/80 disabled:opacity-60">
                <option value="" className="bg-background">{t('contact.selectService')}</option>
                {serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value} className="bg-background">{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block text-sm text-secondary mb-2">{t('contact.projectDetails')}</label>
              <textarea id="message" required rows={5} disabled={status === 'sending'} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-brand-500 focus:outline-none focus:ring-1 focus:ring-brand-500 transition-colors resize-none disabled:opacity-60" placeholder={t('contact.messagePlaceholder')} />
            </div>

            <motion.button type="submit" disabled={status === 'sending'} whileHover={status === 'sending' ? {} : { scale: 1.02 }} whileTap={status === 'sending' ? {} : { scale: 0.98 }} className={`mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-shadow disabled:cursor-not-allowed text-sm sm:text-base ${status === 'error' && errorType === 'activation' ? 'bg-amber-600 hover:shadow-amber-500/30 text-left sm:text-center' : status === 'error' ? 'bg-red-600 hover:shadow-red-500/30' : status === 'success' ? 'bg-emerald-600 hover:shadow-emerald-500/30' : 'bg-gradient-to-r from-brand-600 to-accent-600 hover:shadow-xl hover:shadow-brand-500/30'}`}>
              {buttonLabel}
              {status === 'idle' && <HiPaperAirplane className={isRTL ? 'scale-x-[-1]' : ''} />}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
