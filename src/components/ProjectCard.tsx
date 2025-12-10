import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href?: string
  status?: string
}

export default function ProjectCard({ title, description, tags, href, status }: ProjectCardProps) {
  const getStatusBadgeClass = (status: string) => {
    if (status === 'Active') {
      return 'glass-badge-success text-white'
    }
    return 'glass-badge-warning text-white'
  }

  const content = (
    <div className="glass-card h-full flex flex-col overflow-hidden group">
      {/* Placeholder Image with status badge */}
      <div className="relative bg-gradient-to-br from-primary-blue/20 to-secondary-cyan/20 h-48 flex items-center justify-center rounded-xl overflow-hidden mb-5">
        <span className="text-white text-6xl opacity-30">📱</span>
        {status && (
          <span className={`absolute top-3 right-3 ${getStatusBadgeClass(status)}`}>
            {status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="px-6 pb-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

        <p className="text-white/80 leading-relaxed mb-4 flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="glass-badge text-white text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {href && (
          <div className="mt-2 px-6 py-3 border-2 border-white/30 bg-white/5 backdrop-blur-[8px] text-white font-semibold flex items-center justify-center rounded-lg hover:bg-white hover:text-primary-navy transition-all duration-300 group-hover:scale-[1.02]">
            View Details
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
