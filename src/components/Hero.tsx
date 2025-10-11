import React from 'react'
import { useTranslation } from 'react-i18next'

const Hero: React.FC = () => {
  const { t } = useTranslation()
  return (
  <section className="relative overflow-hidden bg-gradient-to-b from-white to-green-50">
    <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t('hero.title')}</h1>
          <p className="mt-4 text-lg text-gray-600">{t('hero.subtitle')}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#cta" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-white hover:bg-blue-600">
              <span>{t('hero.download')}</span>
            </a>
            <a href="#features" className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 hover:bg-gray-50">{t('hero.explore')}</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-2 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm border">Cattle Fairs</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm border">Listings</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm border">Validation</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm border">Insurance</span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm border">Vet Services</span>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[3/2] w-full rounded-xl bg-white p-2 shadow-xl ring-1 ring-gray-200">
            <img src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1600&auto=format&fit=crop" alt="Cattle" className="h-full w-full rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
)
}

export default Hero


