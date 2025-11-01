import React from 'react'
import { useTranslation } from 'react-i18next'

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation()
  const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'hi' : 'en')
  return (
  <header className="sticky top-0 z-20 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
    <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-green-600 text-white font-bold">PD</span>
        <span className="text-lg font-semibold">{t('brand')}</span>
      </div>
      <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
        <a href="#features" className="hover:text-gray-900">{t('navbar.features')}</a>
        <a href="#how" className="hover:text-gray-900">{t('navbar.how')}</a>
        <a href="#faq" className="hover:text-gray-900">{t('navbar.faq')}</a>
        <a href="#contact" className="hover:text-gray-900">{t('navbar.contact')}</a>
        <a href="/privacy" className="hover:text-gray-900">Privacy</a>
      </nav>
      <div className="flex items-center gap-2">
        <button onClick={toggleLang} className="inline-flex rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">{i18n.language === 'en' ? 'हिंदी' : 'EN'}</button>
        <a href="#cta" className="hidden sm:inline-flex rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50">{t('navbar.partner')}</a>
        <a href="#cta" className="inline-flex rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-blue-600">{t('navbar.getApp')}</a>
      </div>
    </div>
  </header>
)}

export default Navbar


