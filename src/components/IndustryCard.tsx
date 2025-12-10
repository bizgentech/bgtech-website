import { ReactNode } from 'react'

interface IndustryCardProps {
  icon: ReactNode
  title: string
}

export default function IndustryCard({ icon, title }: IndustryCardProps) {
  return (
    <div className="glass-card-light p-6 md:p-8 flex flex-col items-center text-center">
      <div className="text-primary-blue text-6xl mb-4">{icon}</div>
      <h4 className="text-primary-navy font-semibold text-base">{title}</h4>
    </div>
  )
}
