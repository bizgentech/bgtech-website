import Link from 'next/link'
import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href?: string
  iconBg?: string
  badge?: string
}

export default function ServiceCard({ icon, title, description, href, iconBg, badge }: ServiceCardProps) {
  const content = (
    <div className="clean-card p-8 h-full flex flex-col group cursor-pointer">
      {/* Icon */}
      <div
        className={`inline-flex items-center justify-center w-14 h-14 rounded-xl mb-5 ${iconBg ?? 'bg-blue-50'}`}
      >
        <span className="text-primary-blue text-2xl">{icon}</span>
      </div>

      {badge && (
        <span className="section-label mb-3 self-start">{badge}</span>
      )}

      <h3 className="text-xl font-bold text-primary-navy mb-3 leading-snug">{title}</h3>
      <p className="text-text-gray text-sm leading-relaxed flex-1">{description}</p>

      {href && (
        <div className="mt-5 flex items-center text-primary-blue font-semibold text-sm group-hover:gap-2 gap-1 transition-all duration-200">
          Learn More <ArrowRight size={15} />
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue rounded-2xl">
        {content}
      </Link>
    )
  }

  return content
}
