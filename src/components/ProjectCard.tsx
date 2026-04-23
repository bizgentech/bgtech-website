import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href?: string
  status?: 'In Development' | 'Beta' | 'Operational' | 'Active'
  gradient?: string
}

function StatusBadge({ status }: { status: string }) {
  if (status === 'Operational' || status === 'Active') {
    return <span className="badge-success">{status}</span>
  }
  if (status === 'Beta') {
    return <span className="badge-cyan">{status}</span>
  }
  return <span className="badge-warning">{status}</span>
}

export default function ProjectCard({ title, description, tags, href, status, gradient }: ProjectCardProps) {
  const bg = gradient ?? 'from-blue-600 to-cyan-500'

  const content = (
    <div className="dark-card h-full flex flex-col overflow-hidden group cursor-pointer">
      {/* Placeholder image area */}
      <div className={`relative bg-gradient-to-br ${bg} h-44 flex items-center justify-center`}>
        <span className="text-white/20 text-5xl font-black select-none">{title.slice(0, 2).toUpperCase()}</span>
        {status && (
          <div className="absolute top-3 right-3">
            <StatusBadge status={status} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2 leading-snug">{title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-4">{description}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {href && (
          <div className="flex items-center gap-1.5 text-primary-blue font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
            View Details <ArrowRight size={14} />
          </div>
        )}
      </div>
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
