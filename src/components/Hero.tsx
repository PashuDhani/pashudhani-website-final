import React from 'react'
import { useTranslation } from 'react-i18next'

const Hero: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-secondary/5 pt-20 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full -ml-36 -mb-36 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-slideUp">
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg">{t('hero.subtitle')}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#cta" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                <span>📱</span>
                <span>{t('hero.download')}</span>
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 text-primary font-semibold hover:bg-primary/5 transition-all">
                {t('hero.explore')}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-primary/20 text-sm font-medium text-gray-700">🐄 Cattle Fairs</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-primary/20 text-sm font-medium text-gray-700">📋 Listings</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-primary/20 text-sm font-medium text-gray-700">✅ Validation</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-primary/20 text-sm font-medium text-gray-700">🛡️ Insurance</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm border border-primary/20 text-sm font-medium text-gray-700">👨‍⚕️ Vet Services</span>
            </div>
          </div>

          <div className="relative animate-scaleIn">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
            <div className="relative aspect-[3/2] w-full rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-primary/10 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farmers with cattle"
                className="h-full w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


