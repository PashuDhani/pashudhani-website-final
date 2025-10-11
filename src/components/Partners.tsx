import React from 'react'
import { useTranslation } from 'react-i18next'

const Partners: React.FC = () => {
  const { t } = useTranslation()
  return (
  <section id="partners" className="py-16">
    <div className="mx-auto max-w-7xl px-4">
      <h2 className="text-2xl font-bold">{t('partners.title')}</h2>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="flex h-16 items-center justify-center rounded-md border bg-white text-gray-500">Logo</div>
        ))}
      </div>
    </div>
  </section>
)
}

export default Partners


