import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { Check, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'CTI Pro Labs — Portfolio | BizGen Technologies LLC',
  description:
    'Laboratory management system for construction testing operations with automated workflows, real-time sample tracking, and compliance reporting.',
}

const tech = ['React', 'NestJS', 'PostgreSQL', 'PWA', 'TypeScript', 'Docker']

const challenges = [
  'Manual paper-based sample tracking causing lost records and compliance issues',
  'No real-time visibility into test status across multiple lab locations',
  'Manual report generation taking hours per project',
  'Disconnected systems for scheduling, inventory, and billing',
]

const solutions = [
  'Digital sample chain-of-custody with QR code scanning',
  'Real-time dashboard with live test status for all locations',
  'Automated report generation with digital signature support',
  'Unified platform covering scheduling, inventory, billing, and compliance',
]

const features = [
  'Sample intake & chain of custody tracking',
  'Test result entry with automated pass/fail logic',
  'Automated PDF report generation',
  'Multi-location support',
  'Client portal for project status',
  'Inventory management for testing supplies',
  'Billing & invoicing module',
  'ASTM/ACI compliance templates',
]

export default function CTIProLabsPage() {
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
              Construction Tech
            </span>
          </div>
          <h1 className="heading-xl text-white mb-4">CTI Pro Labs</h1>
          <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
            Laboratory management system for construction testing operations — automating sample workflows, tracking chain of custody, and generating compliance reports.
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
                Construction testing laboratories perform critical quality assurance work — soil compaction, concrete strength, asphalt density — that underpins building safety. But most labs still run on paper logs, spreadsheets, and disconnected tools.
              </p>
              <p className="text-text-gray text-base leading-relaxed mb-4">
                CTI Pro Labs replaces that chaos with a unified digital platform that tracks every sample from intake through final report, automates compliance documentation, and gives project managers real-time visibility across all active tests.
              </p>
              <p className="text-text-gray text-base leading-relaxed">
                Built as a Progressive Web App (PWA), it works on any device — including tablets in the field with offline support.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Status', value: 'In Development' },
                { label: 'Industry', value: 'Construction & Testing' },
              ].map(({ label, value }) => (
                <div key={label} className="clean-card p-6">
                  <p className="text-xs font-bold uppercase tracking-wide text-text-gray mb-1">{label}</p>
                  <p className="text-primary-navy font-semibold">{value}</p>
                </div>
              ))}
              <div className="clean-card p-6">
                <p className="text-xs font-bold uppercase tracking-wide text-text-gray mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {tech.map((t) => <span key={t} className="badge-blue">{t}</span>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="clean-card p-8">
              <h3 className="text-xl font-bold text-primary-navy mb-5">The Challenge</h3>
              <ul className="space-y-3">
                {challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-text-gray">
                    <span className="w-2 h-2 rounded-full bg-warning mt-1.5 flex-shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className="clean-card p-8">
              <h3 className="text-xl font-bold text-primary-navy mb-5">Our Solution</h3>
              <ul className="space-y-3">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-sm text-text-gray">
                    <Check size={14} className="text-success mt-0.5 flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding gradient-light">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <span className="section-label mb-4">Features</span>
            <h2 className="heading-lg text-primary-navy mt-4">Key Capabilities</h2>
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
        title="Want a Similar Solution?"
        description="We build custom software for complex operational workflows. Let's talk about your needs."
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View All Projects"
        secondaryButtonHref="/#portfolio"
      />
    </>
  )
}
