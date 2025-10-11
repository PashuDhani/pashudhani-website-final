import React from 'react'
import { useTranslation } from 'react-i18next'

const Testimonials: React.FC = () => {
  const { t } = useTranslation()
  return (
  <section id="testimonials" className="py-16">
    <div className="mx-auto max-w-7xl px-4">
      <h2 className="text-2xl font-bold">{t('love')}</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1,2,3].map((i) => (
          <div key={i} className="rounded-lg border bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-700">“PashuDhani made it easy to find buyers at nearby melas and complete the sale digitally.”</p>
            <div className="mt-4 flex items-center gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">{i}</span>
              <div>
                <p className="text-sm font-semibold">Farmer #{i}</p>
                <p className="text-xs text-gray-500">Uttar Pradesh</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)
}

export default Testimonials


