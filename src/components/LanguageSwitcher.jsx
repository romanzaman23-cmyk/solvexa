import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center rounded-full glass p-0.5 flex-shrink-0">
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
          lang === 'en' ? 'bg-brand-600 text-white shadow-sm' : 'text-secondary hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang('ar')}
        className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all cursor-pointer ${
          lang === 'ar' ? 'bg-brand-600 text-white shadow-sm' : 'text-secondary hover:text-white'
        }`}
      >
        عربي
      </button>
    </div>
  )
}
