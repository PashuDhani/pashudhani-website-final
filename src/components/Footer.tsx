import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <footer className="relative border-t border-primary/10 bg-gradient-to-b from-white to-primary/5">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary text-white text-lg">
                🌾
              </span>
              <span className="font-bold text-lg text-gray-900">{t('brand')}</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Transforming agriculture with modern technology and empowering farmers across India.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/#features" className="text-gray-600 hover:text-primary transition-colors">{t('navbar.features')}</Link></li>
              <li><Link to="/#how" className="text-gray-600 hover:text-primary transition-colors">{t('navbar.how')}</Link></li>
              <li><Link to="/#download" className="text-gray-600 hover:text-primary transition-colors">Download</Link></li>
              <li><Link to="/#faq" className="text-gray-600 hover:text-primary transition-colors">{t('navbar.faq')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">About Us</a></li>
              <li><Link to="/#contact" className="text-gray-600 hover:text-primary transition-colors">{t('footer.contact')}</Link></li>
              <li><Link to="/privacy" className="text-gray-600 hover:text-primary transition-colors">{t('footer.privacy')}</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-primary transition-colors">{t('footer.terms')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                f
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                𝕏
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                📷
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all">
                in
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} PashuDhani. All rights reserved.</p>
            <p>Made with 💚 for Indian farmers</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


