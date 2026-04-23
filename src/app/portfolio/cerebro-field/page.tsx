import Link from 'next/link'
import CTASection from '@/components/CTASection'
import { Check, ArrowLeft } from 'lucide-react'

export const metadata = {
  title: 'Cerebro Field — Portfolio | BizGen Technologies LLC',
  description:
    'Field service dispatcher and technician management system with route optimization, job scheduling, and live status tracking.',
}

const tech = ['React', 'NestJS', 'PostgreSQL', 'Google Maps API', 'TypeScript', 'Redis']

const features = [
  'Drag-and-drop job scheduling board',
  'Real-time technician location tracking',
  'Automated route optimization for daily workloads',
  'Mobile app for field technicians (job acceptance, status updates)',
  'Customer notification system (SMS/email on arrival)',
  'Digital job completion and customer signature capture',
  'Parts and inventory tracking per job',
  'Time tracking and labor cost reporting',
  'Customer history and asset tracking',
  'Recurring service scheduling',
  'Invoice generation from completed jobs',
  'KPI dashboards for dispatch managers',
]

export default function CerebroFieldPage() {
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
              Field Service Management
            </span>
          </div>
          <h1 className="heading-xl text-white mb-4">Cerebro Field</h1>
          <p className="text-white/80 text-xl max-w-3xl leading-relaxed">
            Field service dispatcher and technician management system — real-time scheduling, route optimization, and live job tracking for service companies with mobile workforces.
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
                Managing a mobile workforce — HVAC techs, electricians, plumbers, IT field engineers — involves a constant juggling act: who&apos;s available, where are they, which jobs are highest priority, and how do you get everyone to the right place at the right time?
              </p>
              <p className="text-text-gray text-base leading-relaxed mb-4">
                Cerebro Field is a dispatcher-first FSM (Field Service Management) platform. The dispatch board gives coordinators a real-time map view of every technician, with drag-and-drop job assignment and automated route optimization to maximize daily job throughput.
              </p>
              <p className="text-text-gray text-base leading-relaxed">
                Technicians get a simple mobile app that shows them their schedule, navigates them to each job, and lets them capture signatures, photos, and parts used on-site. Currently in beta with service companies in South Florida.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Status', value: 'Beta' },
                { label: 'Industry', value: 'Field Service Management' },
                { label: 'Users', value: 'Dispatchers + Field Technicians' },
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

      <section className="section-padding gradient-light">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '30%', label: 'More jobs completed per day' },
              { value: '50%', label: 'Less dispatcher overhead' },
              { value: 'Real-time', label: 'Technician location tracking' },
              { value: '100%', label: 'Paperless job completion' },
            ].map(({ value, label }) => (
              <div key={label} className="clean-card p-6">
                <p className="text-2xl font-extrabold text-primary-blue mb-1 leading-tight">{value}</p>
                <p className="text-text-gray text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Managing a Field Service Team?"
        description="We can build or customize FSM tools for your specific workflows. Let's map out the solution."
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View All Projects"
        secondaryButtonHref="/#portfolio"
      />
    </>
  )
}
