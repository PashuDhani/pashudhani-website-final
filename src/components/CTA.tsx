import React from 'react'
import { useTranslation } from 'react-i18next'

const CTA: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section id="cta" className="relative overflow-hidden py-20 lg:py-28 bg-gradient-to-br from-primary via-secondary to-primary">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mb-48 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1 text-center sm:text-left animate-slideUp">
            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">{t('cta.title')}</h3>
            <p className="text-lg text-white/90 max-w-lg">{t('cta.subtitle')}</p>
          </div>

          <div className="flex flex-col gap-3 sm:ml-8 animate-slideDown">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-2xl hover:shadow-3xl hover:scale-105 transition-all"
            >
              📱 {t('cta.button')}
            </a>
            <p className="text-center text-sm text-white/80">Available on iOS & Android</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA


