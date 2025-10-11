import React from 'react'
import { useTranslation } from 'react-i18next'

const HowItWorks: React.FC = () => {
  const { t } = useTranslation()
  return (
  <section id="how" className="bg-white py-16">
    <div className="mx-auto max-w-7xl px-4">
      <h2 className="text-2xl font-bold">{t('how')}</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        <div className="rounded-lg border p-6"><h3 className="font-semibold">{t('steps.s1')}</h3><p className="mt-1 text-sm text-gray-600">{t('steps.s1d')}</p></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">{t('steps.s2')}</h3><p className="mt-1 text-sm text-gray-600">{t('steps.s2d')}</p></div>
        <div className="rounded-lg border p-6"><h3 className="font-semibold">{t('steps.s3')}</h3><p className="mt-1 text-sm text-gray-600">{t('steps.s3d')}</p></div>
      </div>
    </div>
  </section>
)
}

export default HowItWorks


