import React from 'react'
import { useTranslation } from 'react-i18next'
import FeatureCard from './FeatureCard'

const Features: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section id="features" className="relative py-20 lg:py-28 bg-white">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -ml-32 -mt-32 blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('featuresTitle')}</h2>
          <p className="text-lg text-gray-600">Complete agricultural solutions in a single platform</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard title={t('features.melas')} desc={t('features.melasDesc')} icon="🐄" />
          <FeatureCard title={t('features.list')} desc={t('features.listDesc')} icon="📋" />
          <FeatureCard title={t('features.chat')} desc={t('features.chatDesc')} icon="💬" />
          <FeatureCard title={t('features.validate')} desc={t('features.validateDesc')} icon="✅" />
          <FeatureCard title={t('features.insure')} desc={t('features.insureDesc')} icon="🛡️" />
          <FeatureCard title={t('features.vet')} desc={t('features.vetDesc')} icon="👨‍⚕️" />
        </div>
      </div>
    </section>
  )
}

export default Features


