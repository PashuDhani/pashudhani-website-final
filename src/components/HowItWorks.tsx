import React from 'react'
import { useTranslation } from 'react-i18next'

const HowItWorks: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section id="how" className="relative py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-white">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full -mr-36 -mt-36 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('how')}</h2>
          <p className="text-lg text-gray-600">Simple steps to get started with PashuDhani</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 relative">
          <div className="hidden sm:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-primary/30 via-secondary/30 to-primary/30 -translate-y-1/2 -z-1"></div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-white to-primary/10 p-8 hover:border-primary/40 transition-all">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xl font-bold mb-6 mx-auto shadow-lg">
                1️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">{t('steps.s1')}</h3>
              <p className="mt-4 text-gray-600 text-center leading-relaxed">{t('steps.s1d')}</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-white to-primary/10 p-8 hover:border-primary/40 transition-all">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xl font-bold mb-6 mx-auto shadow-lg">
                2️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">{t('steps.s2')}</h3>
              <p className="mt-4 text-gray-600 text-center leading-relaxed">{t('steps.s2d')}</p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-white to-primary/10 p-8 hover:border-primary/40 transition-all">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white text-xl font-bold mb-6 mx-auto shadow-lg">
                3️⃣
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">{t('steps.s3')}</h3>
              <p className="mt-4 text-gray-600 text-center leading-relaxed">{t('steps.s3d')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks


