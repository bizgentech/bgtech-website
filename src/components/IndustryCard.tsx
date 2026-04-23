import { ReactNode } from 'react'

interface IndustryCardProps {
  icon: ReactNode
  title: string
}

export default function IndustryCard({ icon, title }: IndustryCardProps) {
  return (
    <div className="clean-card p-6 flex flex-col items-center text-center gap-3">
      <div className="bg-blue-50 p-3 rounded-xl text-primary-blue text-3xl">{icon}</div>
      <p className="text-primary-navy font-semibold text-sm leading-snug">{title}</p>
    </div>
  )
}
