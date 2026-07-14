import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import type { FeaturedProject } from '@/lib/projects'

function StatusBadge({ status }: { status: FeaturedProject['status'] }) {
  const isLive = status === 'Live'
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
        isLive
          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
          : 'bg-amber-50 text-amber-700 border border-amber-200'
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      {status}
    </span>
  )
}

interface Props extends FeaturedProject {
  reverse?: boolean
  priority?: boolean
}

export default function FeaturedProjectCard({
  title,
  category,
  description,
  image,
  domain,
  url,
  status,
  tags,
  reverse = false,
  priority = false,
}: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Browser mockup */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit ${title} (opens in a new tab)`}
        className={`group block rounded-2xl overflow-hidden border border-slate-200 shadow-[0_12px_40px_rgba(15,23,42,0.14)] bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue ${
          reverse ? 'lg:order-2' : ''
        }`}
      >
        {/* Chrome bar */}
        <div className="flex items-center gap-3 bg-slate-100 border-b border-slate-200 px-4 h-10">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex-1 flex justify-center">
            <span className="max-w-full truncate bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-500">
              {domain}
            </span>
          </div>
        </div>
        {/* Screenshot */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">
          <Image
            src={image}
            alt={`${title} website screenshot`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            priority={priority}
          />
        </div>
      </a>

      {/* Info */}
      <div className={reverse ? 'lg:order-1' : ''}>
        <div className="flex items-center gap-3 mb-4">
          <span className="section-label">{category}</span>
          <StatusBadge status={status} />
        </div>
        <h3 className="heading-sm text-primary-navy mb-4">{title}</h3>
        <p className="text-text-gray text-base leading-relaxed mb-6">{description}</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 btn-primary px-6 py-3 rounded-xl text-sm"
        >
          Visit Site <ArrowUpRight size={16} />
        </a>
      </div>
    </div>
  )
}
