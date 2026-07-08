import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiMenu, HiX } from 'react-icons/hi'
import { mainNavLinks, serviceLinks, handleNavClick, openServiceFromNav } from '../constants/navLinks'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import Vision2030Badge from './Vision2030Badge'
import Logo from './Logo'

export default function Navbar() {
  const { t, isRTL } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [dropdownStyle, setDropdownStyle] = useState({ top: 0, left: 0 })
  const servicesBtnRef = useRef(null)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!servicesOpen) return
    const updatePosition = () => {
      if (!servicesBtnRef.current) return
      const rect = servicesBtnRef.current.getBoundingClientRect()
      const width = 224
      setDropdownStyle({
        top: rect.bottom + 8,
        left: isRTL
          ? Math.max(rect.right - width, 8)
          : Math.min(rect.left, window.innerWidth - width - 8),
      })
    }
    updatePosition()
    window.addEventListener('scroll', updatePosition, true)
    window.addEventListener('resize', updatePosition)
    return () => {
      window.removeEventListener('scroll', updatePosition, true)
      window.removeEventListener('resize', updatePosition)
    }
  }, [servicesOpen, isRTL])

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!servicesBtnRef.current?.contains(e.target) && !dropdownRef.current?.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('click', onClickOutside)
    return () => document.removeEventListener('click', onClickOutside)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const scrollY = window.scrollY
    document.body.style.overflow = 'hidden'
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      window.scrollTo(0, scrollY)
    }
  }, [mobileOpen])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const closeMobile = () => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
  }

  const navClick = (e, id) => {
    handleNavClick(e, id)
    setServicesOpen(false)
    closeMobile()
  }

  const pageLinks = mainNavLinks.filter((l) => l.id !== 'home' && l.id !== 'services')

  const servicesDropdown = (
    <AnimatePresence>
      {servicesOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          dir={isRTL ? 'rtl' : 'ltr'}
          style={{ top: dropdownStyle.top, left: dropdownStyle.left }}
          className="fixed w-56 glass rounded-2xl p-2 shadow-xl shadow-black/40 border border-white/10 z-[9999]"
        >
          <a href="#services" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setServicesOpen(false); handleNavClick(e, 'services') }} className="block px-3 py-2.5 text-sm font-semibold text-brand-400 hover:bg-white/10 rounded-lg cursor-pointer">
            {t('nav.allServices')}
          </a>
          <div className="my-1 border-t border-white/10" />
          {serviceLinks.map((link) => (
            <button key={link.slug} type="button" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setServicesOpen(false); openServiceFromNav(link.slug) }} className="block w-full text-start px-3 py-2.5 text-sm text-white/90 hover:text-white hover:bg-white/10 rounded-lg cursor-pointer">
              {t(link.labelKey)}
            </button>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg shadow-black/20' : 'bg-background/90 backdrop-blur-md'}`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 h-[4.25rem] sm:h-[4.75rem] lg:h-24">
          <Logo variant="nav" linkToHome onClick={(e) => navClick(e, 'home')} />

          <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-1 justify-center">
            <a href="#home" onClick={(e) => navClick(e, 'home')} className="px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer whitespace-nowrap">
              {t('nav.home')}
            </a>
            <button ref={servicesBtnRef} type="button" onClick={(e) => { e.stopPropagation(); setServicesOpen((p) => !p) }} className={`flex items-center gap-0.5 px-3 py-2 text-sm rounded-lg cursor-pointer whitespace-nowrap ${servicesOpen ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'}`}>
              {t('nav.services')}
              <HiChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} size={14} />
            </button>
            {pageLinks.map((link) => (
              <a key={link.id} href={link.href} onClick={(e) => navClick(e, link.id)} className="px-3 py-2 text-sm text-white/80 hover:text-white rounded-lg hover:bg-white/5 cursor-pointer whitespace-nowrap">
                {t(link.labelKey)}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <Vision2030Badge variant="compact" className="hidden xl:inline-flex" />
            <a href="#contact" onClick={(e) => navClick(e, 'contact')} className="hidden lg:inline-flex px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 text-sm font-semibold text-white cursor-pointer whitespace-nowrap">
              {t('nav.getStarted')}
            </a>
            <button
              type="button"
              onClick={() => setMobileOpen((p) => !p)}
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-xl glass text-white cursor-pointer"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <HiX size={22} /> : <HiMenu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1 max-h-[calc(100dvh-4rem)] overflow-y-auto">
              <a href="#home" onClick={(e) => navClick(e, 'home')} className="block px-4 py-3 text-base text-white/90 hover:text-white hover:bg-white/5 rounded-xl cursor-pointer">
                {t('nav.home')}
              </a>

              <button
                type="button"
                onClick={() => setMobileServicesOpen((p) => !p)}
                className="flex w-full items-center justify-between px-4 py-3 text-base text-white/90 hover:text-white hover:bg-white/5 rounded-xl cursor-pointer"
              >
                {t('nav.services')}
                <HiChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} size={18} />
              </button>

              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden ps-2"
                  >
                    <a href="#services" onClick={(e) => navClick(e, 'services')} className="block px-4 py-2.5 text-sm font-semibold text-brand-400 hover:bg-white/5 rounded-lg cursor-pointer">
                      {t('nav.allServices')}
                    </a>
                    {serviceLinks.map((link) => (
                      <button
                        key={link.slug}
                        type="button"
                        onClick={() => { closeMobile(); openServiceFromNav(link.slug) }}
                        className="block w-full text-start px-4 py-2.5 text-sm text-white/80 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer"
                      >
                        {t(link.labelKey)}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              {pageLinks.map((link) => (
                <a key={link.id} href={link.href} onClick={(e) => navClick(e, link.id)} className="block px-4 py-3 text-base text-white/90 hover:text-white hover:bg-white/5 rounded-xl cursor-pointer">
                  {t(link.labelKey)}
                </a>
              ))}

              <div className="pt-3 px-2 flex flex-col gap-3">
                <Vision2030Badge variant="compact" className="self-center" />
                <a href="#contact" onClick={(e) => navClick(e, 'contact')} className="block text-center px-5 py-3.5 rounded-full bg-gradient-to-r from-brand-600 to-accent-600 text-sm font-semibold text-white cursor-pointer">
                  {t('nav.getStarted')}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {createPortal(servicesDropdown, document.body)}
    </motion.header>
  )
}
