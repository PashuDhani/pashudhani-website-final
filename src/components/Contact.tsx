import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const Contact: React.FC = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-20 lg:py-28 bg-gradient-to-b from-white to-primary/5">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full -mr-36 -mt-36 blur-3xl"></div>

      <div className="mx-auto max-w-4xl px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('contact.title')}</h2>
          <p className="text-lg text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-white to-primary/5 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-primary/20 px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-primary/20 px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full rounded-lg border border-primary/20 px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-primary to-secondary px-6 py-3 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-700">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📧</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">{t('contact.email')}</h4>
                  <a href="mailto:hello@pashudhani.app" className="text-primary hover:underline font-semibold">
                    hello@pashudhani.app
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📱</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Follow Us</h4>
                  <div className="flex gap-3">
                    <a href="#" className="text-primary hover:text-secondary font-semibold">Facebook</a>
                    <a href="#" className="text-primary hover:text-secondary font-semibold">Twitter</a>
                    <a href="#" className="text-primary hover:text-secondary font-semibold">Instagram</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🌍</div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Office</h4>
                  <p className="text-gray-600">India<br/>Open for partnerships</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact


