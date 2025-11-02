import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const testimonials = [
  {
    text: "PashuDhani made it incredibly easy to find buyers at nearby melas and complete the sale digitally. Highly recommended!",
    name: "Rajesh Kumar",
    location: "Uttar Pradesh",
    avatar: "👨‍🌾"
  },
  {
    text: "The cattle validation feature saved me from a bad investment. I trust the platform completely now.",
    name: "Harpreet Singh",
    location: "Punjab",
    avatar: "👨‍🌾"
  },
  {
    text: "Getting insurance through PashuDhani was so simple. No more paperwork, just peace of mind.",
    name: "Meera Devi",
    location: "Madhya Pradesh",
    avatar: "👩‍🌾"
  },
  {
    text: "The vet consultation service is a game-changer for rural farmers like us. Excellent support!",
    name: "Farmer Patel",
    location: "Gujarat",
    avatar: "👨‍🌾"
  }
]

const Testimonials: React.FC = () => {
  const { t } = useTranslation()
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="relative py-20 lg:py-28 bg-white">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('love')}</h2>
          <p className="text-lg text-gray-600">Trusted by thousands of farmers and traders</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 ${
                idx === current ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
              } ${idx !== current ? 'hidden lg:block' : ''}`}
            >
              <div className="rounded-2xl border border-primary/10 bg-gradient-to-br from-white to-primary/5 p-8 shadow-sm hover:shadow-lg transition-all h-full">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-lg">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="inline-flex items-center justify-center h-12 w-12 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all"
          >
            ←
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`h-2 rounded-full transition-all ${
                  idx === current
                    ? 'w-8 bg-primary'
                    : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="inline-flex items-center justify-center h-12 w-12 rounded-full border-2 border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/50 transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials


