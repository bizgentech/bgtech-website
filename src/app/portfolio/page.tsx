import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Portfolio | BizGen Technologies LLC',
  description:
    'Real solutions we\'ve built for real businesses — from legal billing automation to field service management platforms.',
}

const projects = [
  {
    title: 'CTI Pro Labs',
    subtitle: 'Laboratory Management System',
    description: 'Construction testing operations platform with automated workflows, QR-based chain of custody, and compliance reporting.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'PWA'],
    status: 'In Development',
    statusClass: 'badge-warning',
    href: '/portfolio/cti-pro-labs',
    gradient: 'from-blue-700 to-blue-500',
  },
  {
    title: 'Matter IQ',
    subtitle: 'Legal Billing Automation',
    description: 'Time tracking and billing platform for law firms. Automated LEDES invoicing, Stripe payment collection, and practice management integrations.',
    tags: ['Next.js', 'NestJS', 'Stripe', 'PostgreSQL'],
    status: 'Beta',
    statusClass: 'badge-cyan',
    href: '/portfolio/matter-iq',
    gradient: 'from-violet-700 to-violet-500',
  },
  {
    title: 'Washapp',
    subtitle: 'On-Demand Mobile Car Wash',
    description: 'Two-sided marketplace connecting customers with mobile car wash providers via GPS matching, real-time tracking, and Stripe Connect.',
    tags: ['React Native', 'Node.js', 'Stripe Connect', 'GPS'],
    status: 'In Development',
    statusClass: 'badge-warning',
    href: '/portfolio/washapp',
    gradient: 'from-cyan-700 to-cyan-500',
  },
  {
    title: 'Sentinel MSP Platform',
    subtitle: 'Self-Hosted MSP Infrastructure',
    description: 'Internal MSP platform with RMM, ticketing, asset management, and client portals. Multi-tenant, Dockerized, full data sovereignty.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
    status: 'Operational',
    statusClass: 'badge-success',
    href: '/portfolio/sentinel-msp',
    gradient: 'from-slate-700 to-slate-500',
  },
  {
    title: 'Cerebro Field',
    subtitle: 'Field Service Dispatcher',
    description: 'Dispatcher and technician management system with drag-and-drop scheduling, route optimization, and live GPS tracking.',
    tags: ['React', 'NestJS', 'Maps API', 'PostgreSQL'],
    status: 'Beta',
    statusClass: 'badge-cyan',
    href: '/portfolio/cerebro-field',
    gradient: 'from-orange-700 to-amber-500',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <section className="gradient-navy-blue section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white border border-white/15">
              Our Work
            </span>
            <h1 className="heading-xl text-white mb-4">Featured Projects</h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Real solutions we&apos;ve built for real businesses — across construction, legal, on-demand services, IT infrastructure, and field operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Link key={p.title} href={p.href} className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue rounded-2xl">
                <div className="dark-card h-full flex flex-col overflow-hidden cursor-pointer">
                  <div className={`bg-gradient-to-br ${p.gradient} h-40 flex items-center justify-center relative`}>
                    <span className="text-white/20 text-5xl font-black select-none">{p.title.slice(0, 2).toUpperCase()}</span>
                    <div className="absolute top-3 right-3">
                      <span className={p.statusClass}>{p.status}</span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-white/50 text-xs font-semibold uppercase tracking-wide mb-1">{p.subtitle}</p>
                    <h2 className="text-lg font-bold text-white mb-2">{p.title}</h2>
                    <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-4">{p.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-primary-blue font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                      View Case Study <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to See Your Project Here?"
        description="We'd love to build your next solution. Let's start with a conversation."
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonHref="/#services"
      />
    </>
  )
}
