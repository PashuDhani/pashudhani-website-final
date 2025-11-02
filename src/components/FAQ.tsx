import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const FAQ: React.FC = () => {
  const { t } = useTranslation()
  const [openIdx, setOpenIdx] = useState(0)

  const items = [
    { q: t('faq.q1.q'), a: t('faq.q1.a') },
    { q: t('faq.q2.q'), a: t('faq.q2.a') },
    { q: t('faq.q3.q'), a: t('faq.q3.a') },
  ]

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-white">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="mx-auto max-w-4xl px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('faq.title')}</h2>
          <p className="text-lg text-gray-600">Get answers to common questions about PashuDhani</p>
        </div>

        <div className="space-y-4">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
              className="w-full text-left"
            >
              <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-white to-primary/5 transition-all hover:border-primary/30 hover:shadow-lg overflow-hidden">
                <div className="p-6 flex items-center justify-between cursor-pointer">
                  <h3 className="text-lg font-bold text-gray-900 flex-1">{item.q}</h3>
                  <span
                    className={`text-2xl text-primary font-light transition-transform duration-300 ${
                      openIdx === idx ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </div>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIdx === idx ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-primary/10 pt-4">
                    {item.a}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 text-center">
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-6 py-3 font-semibold hover:shadow-lg hover:scale-105 transition-all"
          >
            📧 Get in touch with us
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ


