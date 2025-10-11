import React from 'react'
import { useTranslation } from 'react-i18next'

const CTA: React.FC = () => {
  const { t } = useTranslation()
  return (
  <section id="cta" className="bg-gradient-to-r from-primary to-green-500 py-16 text-white">
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-2xl font-bold">{t('cta.title')}</h3>
          <p className="text-white/90">{t('cta.subtitle')}</p>
        </div>
        <a href="#" className="inline-flex rounded-md bg-white px-4 py-2 text-primary hover:bg-gray-100">{t('cta.button')}</a>
      </div>
    </div>
  </section>
)
}

export default CTA


