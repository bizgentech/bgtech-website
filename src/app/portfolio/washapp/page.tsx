import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { Check, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Washapp — Portfolio | BizGen Technologies LLC',
  description:
    'On-demand mobile car wash — a product concept exploring GPS-based matching and real-time dispatch for a two-sided marketplace.',
}

const tech = ['React Native', 'Node.js', 'PostgreSQL', 'TypeScript']

const features = [
  'Customer app: book on-demand or scheduled washes',
  'Provider app: accept jobs, navigate, and track earnings',
  'GPS-based provider matching (nearest available)',
  'Real-time job status and ETA tracking',
  'Split payments and provider payouts',
  'Photo proof of completion',
  'Customer rating & review system',
  'Dynamic pricing based on vehicle size and service type',
  'Admin dashboard for fleet and provider management',
  'Push notifications for booking updates',
]

export default function WashappPage() {
  return (
    <>
      <section className="gradient-navy-blue section-padding">
        <div className="container-custom">
          <Link href="/#portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={15} /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="badge-warning">Concept</span>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white/70 border border-white/15">
              On-Demand Services
            </span>
          </div>
          <h1 className="heading-xl text-white mb-4">Washapp</h1>
          <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
            On-demand mobile car wash marketplace — connecting customers who need their vehicle cleaned with independent providers who show up at their location.
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
                Washapp is a product concept for a two-sided marketplace for mobile car washing — think Uber, but for vehicle detailing. The concept explores how a customer could choose a service tier and have a vetted washer come to them — at home, at work, wherever the car is parked.
              </p>
              <p className="text-text-gray text-base leading-relaxed mb-4">
                It explores the full transaction lifecycle: GPS-based matching, job acceptance, real-time tracking, payment splitting, and post-service reviews — with a separate provider-facing app for managing availability and earnings.
              </p>
              <p className="text-text-gray text-base leading-relaxed">
                The concept is designed around React Native for cross-platform iOS and Android from a single codebase, with a Node.js backend and PostgreSQL.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Status', value: 'Concept' },
                { label: 'Platform', value: 'iOS & Android (React Native)' },
                { label: 'Model', value: 'Two-sided Marketplace' },
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
            <span className="section-label mb-4">Concept</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-3">Concept Scope</h2>
            <p className="text-text-gray text-sm max-w-2xl mx-auto">
              Capabilities explored in this product concept. Washapp is a UX and business-workflow exploration, not an available app.
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
        title="Building a Marketplace App?"
        description="We design and prototype two-sided marketplace apps — from GPS matching to payment flows. Let's talk."
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View All Projects"
        secondaryButtonHref="/#portfolio"
      />
    </>
  )
}
