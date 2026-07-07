import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { mainNavLinks, serviceLinks, handleNavClick, openServiceFromNav } from '../constants/navLinks'
import { useLanguage } from '../i18n/LanguageContext'
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, contactLinks } from '../config/contact'
import { sendNewsletterEmail } from '../utils/sendNewsletterEmail'
import Vision2030Badge from './Vision2030Badge'
import Logo from './Logo'

const socialLinks = [
  { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/solvexa-digital-solutions-provider-b092a8403/?skipRedirect=true', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Footer() {
  const { t } = useLanguage()
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState('idle')
  const [newsletterError, setNewsletterError] = useState('')

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    if (newsletterStatus === 'sending') return

    setNewsletterStatus('sending')
    setNewsletterError('')

    try {
      await sendNewsletterEmail({ email: newsletterEmail })
      setNewsletterStatus('success')
      setNewsletterEmail('')
      setTimeout(() => setNewsletterStatus('idle'), 5000)
    } catch (err) {
      setNewsletterError(err?.message === 'activation' ? 'activation' : 'error')
      setNewsletterStatus('error')
      setTimeout(() => {
        setNewsletterStatus('idle')
        setNewsletterError('')
      }, 8000)
    }
  }

  const newsletterButtonLabel =
    newsletterStatus === 'sending'
      ? t('footer.subscribing')
      : newsletterStatus === 'success'
        ? t('footer.subscribed')
        : newsletterStatus === 'error' && newsletterError === 'activation'
          ? t('footer.activationNeeded')
          : newsletterStatus === 'error'
            ? t('footer.subscribeError')
            : t('footer.join')

  const contactInfo = [
    { icon: HiMail, text: CONTACT_EMAIL, href: contactLinks.email },
    { icon: HiPhone, text: CONTACT_PHONE_DISPLAY, href: contactLinks.phone },
    { icon: HiLocationMarker, text: t('contact.locationValue'), href: '#contact' },
  ]

  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo variant="footer" linkToHome />
            <p className="mt-4 text-secondary text-sm leading-relaxed max-w-xs">{t('footer.desc')}</p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} whileHover={{ y: -3, scale: 1.1 }} className="w-10 h-10 rounded-lg glass flex items-center justify-center text-secondary hover:text-brand-400 hover:border-brand-500/30 transition-colors">
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {mainNavLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} onClick={(e) => handleNavClick(e, link.id)} className="text-sm text-secondary hover:text-brand-400 transition-colors cursor-pointer">
                    {t(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.slug}>
                  <button type="button" onClick={() => openServiceFromNav(link.slug)} className="text-sm text-secondary hover:text-brand-400 transition-colors cursor-pointer text-start">
                    {t(link.labelKey)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              {contactInfo.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a href={href} onClick={href.startsWith('#') ? (e) => handleNavClick(e, 'contact') : undefined} className="flex items-center gap-2 text-sm text-secondary hover:text-brand-400 transition-colors cursor-pointer">
                    <Icon size={16} className="text-brand-400 flex-shrink-0" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">{t('footer.newsletter')}</h4>
            <p className="text-sm text-secondary mb-4">{t('footer.newsletterDesc')}</p>
            <form className="flex flex-col gap-2" onSubmit={handleNewsletterSubmit}>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  disabled={newsletterStatus === 'sending'}
                  placeholder={t('footer.emailPlaceholder')}
                  className="flex-1 min-w-0 px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm focus:border-brand-500 focus:outline-none disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === 'sending'}
                  className={`shrink-0 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer disabled:cursor-not-allowed ${
                    newsletterStatus === 'success'
                      ? 'bg-emerald-600 text-white'
                      : newsletterStatus === 'error'
                        ? newsletterError === 'activation'
                          ? 'bg-amber-600 text-white'
                          : 'bg-red-600 text-white'
                        : 'bg-brand-600 hover:bg-brand-500 text-white'
                  }`}
                >
                  {newsletterButtonLabel}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mb-10 flex justify-center">
          <Vision2030Badge className="max-w-2xl w-full" />
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary">
            © {new Date().getFullYear()} Solvexa. {t('footer.rights')}
          </p>
          <div className="flex gap-6 text-sm text-secondary">
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white/80 transition-colors cursor-pointer">
              {t('footer.privacy')}
            </a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="hover:text-white/80 transition-colors cursor-pointer">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
