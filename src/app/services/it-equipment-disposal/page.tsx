import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { Recycle, Check, Truck, FileCheck, ShieldCheck, Leaf, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'IT Equipment Pickup, Data Destruction & Disposal | BizGen Technologies LLC',
  description:
    'Certified data destruction, secure hardware pickup, and responsible IT equipment recycling. Protect your data when decommissioning assets.',
}

const services = [
  { icon: Truck, title: 'Secure Asset Pickup', desc: 'Scheduled pickup from your location. We handle transport with a documented chain of custody from door to destruction.' },
  { icon: ShieldCheck, title: 'Certified Data Destruction', desc: 'NIST 800-88-compliant data wiping and physical destruction of hard drives, SSDs, and storage media. Certificates provided.' },
  { icon: Recycle, title: 'Hardware Recycling', desc: 'Responsible, EPA-compliant recycling of servers, workstations, laptops, networking gear, and peripherals.' },
  { icon: FileCheck, title: 'Chain of Custody Reports', desc: 'Full documentation of every asset from pickup through final disposition. Audit-ready records for compliance needs.' },
  { icon: Leaf, title: 'Eco-Friendly Disposal', desc: 'We partner with certified R2/e-Stewards recyclers to ensure zero landfill for hazardous components.' },
  { icon: ShieldCheck, title: 'On-Site Destruction', desc: 'Need it done at your facility? We bring our equipment to you for on-site shredding with witnessed destruction.' },
]

const accepted = [
  'Servers & Rack Equipment',
  'Desktop Computers & Workstations',
  'Laptops & Tablets',
  'Monitors & Displays',
  'Networking Equipment (Routers, Switches, Firewalls)',
  'Printers & Copiers',
  'Hard Drives & SSDs (all brands)',
  'Mobile Phones & Smartphones',
  'UPS & Power Equipment',
  'Legacy / End-of-Life Equipment',
]

const steps = [
  { step: '01', title: 'Request Pickup', desc: 'Fill out our contact form with asset details. We\'ll confirm a pickup date within 24 hours.' },
  { step: '02', title: 'We Pick Up', desc: 'Our team arrives at your location, inventories all assets, and provides a detailed collection receipt.' },
  { step: '03', title: 'Data Destruction', desc: 'All storage media is wiped to NIST 800-88 standards or physically shredded. Nothing is refurbished without full sanitation.' },
  { step: '04', title: 'Certificate & Report', desc: 'You receive a Certificate of Data Destruction and a final disposition report for each asset.' },
]

export default function ITEquipmentDisposalPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[520px] flex items-center bg-primary-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/services/equipment-disposal-hero.png"
            alt="IT equipment pickup and data destruction service"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(15,23,42,0.93) 0%, rgba(15,23,42,0.78) 38%, rgba(15,23,42,0.45) 62%, rgba(15,23,42,0.15) 85%, transparent 100%)' }}
          />
        </div>
        <div className="container-custom relative z-10 py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white border border-white/15">
              Service #3
            </span>
            <h1 className="heading-xl text-white mb-5">
              IT Equipment Pickup,<br />Data Destruction & Disposal
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Retire your IT assets safely. Certified data destruction, secure pickup, and compliant recycling — with full documentation every step of the way.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-blue text-white font-bold px-7 py-3.5 rounded-xl shadow hover:bg-blue-600 transition-colors">
                Schedule a Pickup <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why It Matters ── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { stat: '94%', label: 'of data breaches involve improperly disposed hardware' },
              { stat: '$4.9M', label: 'average cost of a data breach in 2024' },
              { stat: '100%', label: 'compliant disposal with full chain of custody documentation' },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <p className="text-4xl font-extrabold text-primary-blue mb-2">{stat}</p>
                <p className="text-text-gray text-sm max-w-[220px] mx-auto">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">What We Offer</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Comprehensive Disposal Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="clean-card p-8">
                <div className="bg-emerald-50 p-3 rounded-xl inline-flex mb-4">
                  <Icon size={22} className="text-success" />
                </div>
                <h3 className="text-lg font-bold text-primary-navy mb-2">{title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Process</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map(({ step, title, desc }) => (
              <div key={step} className="clean-card p-8 text-center">
                <p className="text-5xl font-extrabold text-slate-100 mb-3 leading-none">{step}</p>
                <h3 className="text-lg font-bold text-primary-navy mb-2">{title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Accept ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <span className="section-label mb-4">Accepted Items</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">What We Accept</h2>
          </div>
          <div className="clean-card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {accepted.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-text-gray">
                  <Check size={14} className="text-success flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <p className="mt-6 text-text-gray text-sm border-t border-slate-100 pt-4">
              Have items not listed here? Contact us — we handle most commercial IT equipment.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Retire Your Old Equipment?"
        description="Schedule a free pickup assessment. We'll inventory your assets and provide a disposal plan."
        primaryButtonText="Schedule Pickup"
        primaryButtonHref="/contact"
        secondaryButtonText="Get a Quote"
        secondaryButtonHref="/contact"
      />
    </>
  )
}
