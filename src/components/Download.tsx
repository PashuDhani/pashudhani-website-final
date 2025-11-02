import React from 'react'
import { useTranslation } from 'react-i18next'

const Download: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section id="download" className="relative py-20 lg:py-28 bg-gradient-to-b from-primary/10 to-secondary/10">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/20 rounded-full -mr-36 -mt-36 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-primary to-secondary p-12 lg:p-16 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-white animate-slideUp">
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">{t('download.title')}</h2>
              <p className="text-lg text-white/90 mb-8 max-w-lg">{t('download.subtitle')}</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-primary font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <span>🎮</span>
                  {t('download.play')}
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/20 border-2 border-white px-6 py-3 text-white font-semibold hover:bg-white/30 transition-all backdrop-blur-sm"
                >
                  <span>🍎</span>
                  {t('download.appstore')}
                </a>
              </div>
            </div>

            <div className="flex-1 text-center lg:text-right animate-scaleIn">
              <div className="text-9xl mb-4">📱</div>
              <p className="text-white/80 text-sm">Available on both iOS and Android</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download


