import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { Check, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Sentinel MSP Platform — Portfolio | BizGen Technologies LLC',
  description:
    'Self-hosted MSP platform in development — a planned single place to unify RMM, ticketing, asset management, and a customer portal for managed service providers.',
}

const tech = ['Next.js', 'NestJS', 'PostgreSQL', 'Docker', 'TypeScript']

const features = [
  'Remote Monitoring & Management (RMM) dashboard',
  'Integrated ticketing system with SLA tracking',
  'Asset inventory and lifecycle management',
  'Customer-facing self-service portal',
  'Automated alert routing and escalation',
  'Patch management tracking',
  'Monthly reporting and executive summaries',
  'Multi-tenant architecture for managing multiple clients',
  'Role-based access control (RBAC)',
  'API-first design for third-party integrations',
  'Self-hosted — full data sovereignty',
  'Dockerized deployment for easy scaling',
]

export default function SentinelMSPPage() {
  return (
    <>
      <section className="gradient-navy-blue section-padding">
        <div className="container-custom">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge-warning">In Development</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white/70 border border-white/15">
              MSP / IT Infrastructure
            </span>
          </div>
          <h1 className="heading-xl text-white mb-4">Sentinel MSP Platform</h1>
          <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
            A self-hosted managed service provider platform in development — designed to unify MSP operations across RMM, ticketing, asset management, and client portals.
          </p>
        </div>
      </section>

      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <span className="section-label mb-4">The Project</span>
              <h2 className="heading-md text-primary-navy mt-4 mb-5">Overview</h2>
              <p className="text-text-gray text-base leading-relaxed mb-4">
                As BizGen Technologies began building out its managed IT services, we looked at the established MSP platforms available. After evaluating them, we identified operational gaps that — together with the licensing costs for a growing provider — led us to begin designing Sentinel.
              </p>
              <p className="text-text-gray text-base leading-relaxed mb-4">
                So we started building Sentinel: a self-hosted, API-first MSP platform designed specifically for smaller providers who need capable tooling without enterprise-grade pricing or vendor lock-in.
              </p>
              <p className="text-text-gray text-base leading-relaxed">
                Sentinel is in development. The architecture is designed to be multi-tenant and Dockerized, deployable on any cloud or on-premises server. It is not currently deployed in client environments.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Status', value: 'In Development' },
                { label: 'Type', value: 'Self-Hosted MSP Platform' },
                { label: 'Deployment', value: 'Self-Hosted (Docker)' },
              ].map(({ label, value }) => (
                <div key={label} className="clean-card p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-text-gray mb-1">{label}</p>
                  <p className="text-primary-navy font-semibold">{value}</p>
                </div>
              ))}
              <div className="clean-card p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-text-gray mb-3">Core Stack</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => <span key={t} className="badge-blue">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <span className="section-label mb-4">Roadmap</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-3">Planned Modules</h2>
            <p className="text-text-gray text-sm max-w-2xl mx-auto">
              The platform&apos;s vision spans these modules. Some exist as prototypes; others are planned on the development roadmap.
            </p>
          </div>
          <div className="clean-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3 text-sm text-text-gray">
                  <Check size={14} className="text-success flex-shrink-0" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-light">
        <div className="container-custom max-w-4xl">
          <div className="clean-card p-8 md:p-10">
            <h3 className="text-xl font-bold text-primary-navy mb-4">Why Self-Hosted?</h3>
            <p className="text-text-gray text-base leading-relaxed mb-3">
              Data sovereignty matters in IT management. By design, a self-hosted platform keeps client data on your own infrastructure — no third-party SaaS storing sensitive network topology, credentials, or endpoint data.
            </p>
            <p className="text-text-gray text-base leading-relaxed">
              Sentinel is designed to be deployed on-premises, on a private cloud (AWS, Azure, GCP), or as a hybrid setup, with a Docker Compose configuration planned for straightforward deployment.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Custom MSP Tooling?"
        description="We can build or customize MSP platforms, ticketing systems, and IT operations tools. Let's talk."
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        secondaryButtonText="IT Services"
        secondaryButtonHref="/services/it-consulting-managed-support"
      />
    </>
  )
}
