import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
  <footer className="border-t bg-white">
    <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} PashuDhani. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="/privacy" className="hover:text-gray-900">{t('footer.privacy')}</a>
          <a href="#" className="hover:text-gray-900">{t('footer.terms')}</a>
          <a href="#" className="hover:text-gray-900">{t('footer.contact')}</a>
        </div>
      </div>
    </div>
  </footer>
)
}

export default Footer


