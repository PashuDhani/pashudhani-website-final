import React from 'react'
import { useTranslation } from 'react-i18next'

const Stats: React.FC = () => {
  const { t } = useTranslation()
  return (
  <section id="stats" className="py-16 bg-white">
    <div className="mx-auto max-w-7xl px-4">
      <h2 className="text-2xl font-bold">{t('stats.title')}</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border bg-white p-6 shadow-sm text-center">
          <p className="text-3xl font-bold text-gray-900">{t('stats.metrics.listings.value')}</p>
          <p className="mt-1 text-sm text-gray-600">{t('stats.metrics.listings.label')}</p>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm text-center">
          <p className="text-3xl font-bold text-gray-900">{t('stats.metrics.users.value')}</p>
          <p className="mt-1 text-sm text-gray-600">{t('stats.metrics.users.label')}</p>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm text-center">
          <p className="text-3xl font-bold text-gray-900">{t('stats.metrics.states.value')}</p>
          <p className="mt-1 text-sm text-gray-600">{t('stats.metrics.states.label')}</p>
        </div>
        <div className="rounded-lg border bg-white p-6 shadow-sm text-center">
          <p className="text-3xl font-bold text-gray-900">{t('stats.metrics.messages.value')}</p>
          <p className="mt-1 text-sm text-gray-600">{t('stats.metrics.messages.label')}</p>
        </div>
      </div>
    </div>
  </section>
)
}

export default Stats


