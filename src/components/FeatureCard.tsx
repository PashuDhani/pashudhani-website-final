import React from 'react'

type Props = { title: string; desc: string; icon: string }

const FeatureCard: React.FC<Props> = ({ title, desc, icon }) => (
  <div className="rounded-lg border bg-white p-6 shadow-sm">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-green-100 text-green-700">{icon}</div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-1 text-sm text-gray-600">{desc}</p>
  </div>
)

export default FeatureCard


