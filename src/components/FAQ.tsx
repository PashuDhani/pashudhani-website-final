import React from 'react'
import { useTranslation } from 'react-i18next'

const FAQ: React.FC = () => {
  const { t } = useTranslation()
  const items = [
    { q: t('faq.q1.q'), a: t('faq.q1.a') },
    { q: t('faq.q2.q'), a: t('faq.q2.a') },
    { q: t('faq.q3.q'), a: t('faq.q3.a') },
  ]
  return (
  <section id="faq" className="py-16">
    <div className="mx-auto max-w-3xl px-4">
      <h2 className="text-2xl font-bold">{t('faq.title')}</h2>
      <div className="mt-6 divide-y rounded-md border bg-white">
        {items.map((it, idx) => (
          <details key={idx} className="group p-4 open:bg-gray-50">
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="font-medium">{it.q}</span>
              <span className="text-xl">+</span>
            </summary>
            <p className="mt-2 text-sm text-gray-700">{it.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
)
}

export default FAQ


