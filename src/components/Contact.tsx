import React from 'react'
import { useTranslation } from 'react-i18next'

const Contact: React.FC = () => {
  const { t } = useTranslation()
  return (
  <section id="contact" className="py-16 bg-white">
    <div className="mx-auto max-w-3xl px-4">
      <h2 className="text-2xl font-bold">{t('contact.title')}</h2>
      <p className="mt-2 text-gray-700">{t('contact.subtitle')}</p>
      <div className="mt-6 rounded-md border bg-gray-50 p-4">
        <p className="text-sm text-gray-700">
          {t('contact.email')}: <a className="text-primary underline" href="mailto:hello@pashudhani.app">hello@pashudhani.app</a>
        </p>
      </div>
    </div>
  </section>
)
}

export default Contact


