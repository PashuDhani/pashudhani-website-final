import React from 'react'
import { useTranslation } from 'react-i18next'

const Download: React.FC = () => {
  const { t } = useTranslation()
  return (
  <section id="download" className="py-16 bg-green-50">
    <div className="mx-auto max-w-7xl px-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold">{t('download.title')}</h2>
          <p className="text-gray-700">{t('download.subtitle')}</p>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="inline-flex items-center rounded-md bg-black px-4 py-2 text-white">{t('download.play')}</a>
          <a href="#" className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2">{t('download.appstore')}</a>
        </div>
      </div>
    </div>
  </section>
)
}

export default Download


