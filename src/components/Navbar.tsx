import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en')

  return (
    <header className="sticky top-0 z-20 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-primary/10 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
            🌾
          </span>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{t('brand')}</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/#features" className="text-gray-700 hover:text-primary font-medium transition-colors">{t('navbar.features')}</Link>
          <Link to="/#how" className="text-gray-700 hover:text-primary font-medium transition-colors">{t('navbar.how')}</Link>
          <Link to="/#faq" className="text-gray-700 hover:text-primary font-medium transition-colors">{t('navbar.faq')}</Link>
          <Link to="/#contact" className="text-gray-700 hover:text-primary font-medium transition-colors">{t('navbar.contact')}</Link>
          <Link to="/privacy" className="text-gray-700 hover:text-primary font-medium transition-colors">Privacy</Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="hidden sm:inline-flex rounded-lg border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            {i18n.language === 'en' ? 'हिंदी' : 'EN'}
          </button>
          <Link
            to="/#cta"
            className="hidden sm:inline-flex rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5 transition-colors"
          >
            {t('navbar.partner')}
          </Link>
          <Link
            to="/#cta"
            className="inline-flex rounded-lg bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-semibold text-white shadow-md hover:shadow-lg hover:scale-105 transition-all"
          >
            {t('navbar.getApp')}
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar


