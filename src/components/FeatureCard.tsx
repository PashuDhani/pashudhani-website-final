import React from 'react'

type Props = { title: string; desc: string; icon: string }

const FeatureCard: React.FC<Props> = ({ title, desc, icon }) => (
  <div className="group relative rounded-2xl border border-primary/10 bg-gradient-to-br from-white to-primary/5 p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-primary/30 hover:scale-105">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

    <div className="relative z-10">
      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 text-2xl group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{title}</h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{desc}</p>
    </div>
  </div>
)

export default FeatureCard


