import React from 'react'
import { useTranslation } from 'react-i18next'
import FeatureCard from './FeatureCard'

const Features: React.FC = () => {
  const { t } = useTranslation()
  return (
  <section id="features" className="py-16">
    <div className="mx-auto max-w-7xl px-4">
      <h2 className="text-2xl font-bold">{t('featuresTitle')}</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard title={t('features.melas')} desc={t('features.melasDesc')} icon="🐄" />
        <FeatureCard title={t('features.list')} desc={t('features.listDesc')} icon="🛒" />
        <FeatureCard title={t('features.chat')} desc={t('features.chatDesc')} icon="💬" />
        <FeatureCard title={t('features.validate')} desc={t('features.validateDesc')} icon="✅" />
        <FeatureCard title={t('features.insure')} desc={t('features.insureDesc')} icon="🛡️" />
        <FeatureCard title={t('features.vet')} desc={t('features.vetDesc')} icon="👩‍⚕️" />
      </div>
    </div>
  </section>
)
}

export default Features


