import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { Check, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Matter IQ — Portfolio | BizGen Technologies LLC',
  description:
    'Legal billing platform in beta for law firms — time tracking, invoicing, and planned integrations with major practice management systems.',
}

const tech = ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript']

const features = [
  'Matter-based time tracking with automatic billing rates',
  'LEDES billing format export',
  'Online payment integration for retainer collection',
  'Automated invoice generation and delivery',
  'Trust accounting & IOLTA compliance tools',
  'Client portal for invoice review and payment',
  'Integration with Clio, MyCase, and PracticePanther',
  'Customizable billing rules per matter type',
  'Expense tracking and disbursement management',
  'Conflict of interest check module',
]

export default function MatterIQPage() {
  return (
    <>
      <section className="gradient-navy-blue section-padding">
        <div className="container-custom">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge-cyan">Beta</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white/70 border border-white/15">
              Legal Tech
            </span>
          </div>
          <h1 className="heading-xl text-white mb-4">Matter IQ</h1>
          <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
            Legal billing automation platform that eliminates the administrative burden of time tracking, invoice generation, and payment collection for law firms.
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
                Law firms can lose a significant share of billable time to inconsistent time-tracking habits, billing delays, and the friction of invoicing. Matter IQ is being built to close that gap.
              </p>
              <p className="text-text-gray text-base leading-relaxed mb-4">
                The platform is designed to give attorneys frictionless time capture from any device, and to structure that time into LEDES-compliant invoices ready to send. A branded client portal for online payment is part of the design.
              </p>
              <p className="text-text-gray text-base leading-relaxed">
                Matter IQ is currently in beta. Integrations with major practice management platforms are on the development roadmap.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Status', value: 'Beta' },
                { label: 'Industry', value: 'Legal Services' },
                { label: 'Target Users', value: 'Small & Mid-Size Law Firms' },
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
            <h2 className="heading-lg text-primary-navy mt-4 mb-3">Capabilities</h2>
            <p className="text-text-gray text-sm max-w-2xl mx-auto">
              Matter IQ is in beta. The list below spans capabilities that are built, in testing, or planned — including third-party integrations still on the roadmap.
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

      <CTASection
        title="Need Custom Legal Software?"
        description="We build bespoke platforms for professional services firms. Let's discuss your requirements."
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View All Projects"
        secondaryButtonHref="/#portfolio"
      />
    </>
  )
}
