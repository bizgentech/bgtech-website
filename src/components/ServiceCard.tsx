import Link from 'next/link'
import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  href?: string
}

export default function ServiceCard({ icon, title, description, href }: ServiceCardProps) {
  const content = (
    <div className="glass-card-light p-6 md:p-8 h-full group">
      {/* Icon container with gradient */}
      <div className="bg-gradient-to-br from-primary-blue to-secondary-cyan p-5 rounded-xl mb-5 inline-flex items-center justify-center shadow-[0_4px_16px_rgba(59,130,246,0.2)] group-hover:shadow-[0_6px_20px_rgba(59,130,246,0.3)] transition-all duration-300">
        <div className="text-white text-4xl">{icon}</div>
      </div>

      <h3 className="text-2xl font-bold text-primary-navy mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

      {href && (
        <div className="mt-4 text-primary-blue font-semibold flex items-center group-hover:translate-x-1 transition-transform duration-300">
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      )}
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    )
  }

  return content
}
