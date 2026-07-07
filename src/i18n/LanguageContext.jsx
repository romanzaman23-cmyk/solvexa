import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

function getNested(obj, path) {
  return path.split('.').reduce((acc, key) => acc?.[key], obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('solvexa-lang') || 'en'
    }
    return 'en'
  })

  const isRTL = lang === 'ar'
  const dict = translations[lang] || translations.en

  const t = useCallback(
    (key, fallback = '') => getNested(dict, key) ?? getNested(translations.en, key) ?? fallback,
    [dict],
  )

  const setLang = (newLang) => {
    setLangState(newLang)
    localStorage.setItem('solvexa-lang', newLang)
  }

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
  }, [lang, isRTL])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL, dict }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
