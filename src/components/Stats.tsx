import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const CounterStat: React.FC<{ value: string; label: string; icon: string }> = ({ value, label, icon }) => {
  const numValue = parseInt(value)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let isMounted = true
    const duration = 2000
    const steps = 60
    const stepValue = numValue / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current >= numValue) {
        if (isMounted) setCount(numValue)
      } else {
        if (isMounted) setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => {
      isMounted = false
      clearInterval(timer)
    }
  }, [numValue])

  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-0 group-hover:opacity-20 blur transition duration-300"></div>
      <div className="relative rounded-2xl border border-primary/10 bg-gradient-to-br from-white to-primary/5 p-8 text-center hover:border-primary/30 transition-all">
        <div className="text-4xl mb-3">{icon}</div>
        <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{count}+</p>
        <p className="mt-3 text-sm font-medium text-gray-600">{label}</p>
      </div>
    </div>
  )
}

const Stats: React.FC = () => {
  const { t } = useTranslation()
  return (
    <section id="stats" className="py-20 lg:py-28 bg-gradient-to-b from-white to-primary/5">
      <div className="mx-auto max-w-7xl px-4">
        <div className="max-w-2xl mx-auto text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{t('stats.title')}</h2>
          <p className="text-lg text-gray-600">Join thousands of farmers and traders transforming agriculture</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <CounterStat icon="📋" value={t('stats.metrics.listings.value').replace('k+', '')} label={t('stats.metrics.listings.label')} />
          <CounterStat icon="👥" value={t('stats.metrics.users.value').replace('k+', '')} label={t('stats.metrics.users.label')} />
          <CounterStat icon="🗺️" value={t('stats.metrics.states.value').replace('+', '')} label={t('stats.metrics.states.label')} />
          <CounterStat icon="💬" value={t('stats.metrics.messages.value').replace('M+', '').replace('k', '')} label={t('stats.metrics.messages.label')} />
        </div>
      </div>
    </section>
  )
}

export default Stats


