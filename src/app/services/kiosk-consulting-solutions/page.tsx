import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { Monitor, Check, Cpu, Code2, Wrench, Users, BarChart3, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Kiosk Consulting & Solutions | BizGen Technologies LLC',
  description:
    'End-to-end self-service kiosk consulting, hardware selection, software development, and deployment for retail, banking, and hospitality.',
}

const offerings = [
  { icon: Cpu, title: 'Hardware Consulting', desc: 'Vendor-neutral hardware selection — we find the right kiosk form factor, display, printer, and peripherals for your use case.' },
  { icon: Code2, title: 'Custom Software Development', desc: 'Bespoke kiosk applications built for reliability — check-in flows, ordering systems, wayfinding, bill payment, and more.' },
  { icon: Wrench, title: 'Integration Services', desc: 'Connect your kiosk to POS systems, booking platforms, payment processors, queuing software, and back-office systems.' },
  { icon: Users, title: 'UX & Interface Design', desc: 'Touch-first UI design that guides users through complex flows with zero confusion. Tested for accessibility compliance.' },
  { icon: Monitor, title: 'Deployment & Installation', desc: 'On-site installation, network configuration, and go-live support — we\'re there when the kiosks turn on for the first time.' },
  { icon: BarChart3, title: 'Ongoing Support & Analytics', desc: 'Remote monitoring, software updates, usage analytics, and 24/7 alerting to keep your fleet running.' },
]

const useCases = [
  { industry: 'Retail', examples: ['Self-checkout', 'Product lookup', 'Loyalty check-in', 'Gift card activation'] },
  { industry: 'Banking & Financial', examples: ['Account services', 'Bill payment', 'Document collection', 'Queue management'] },
  { industry: 'Hospitality', examples: ['Hotel check-in/out', 'Room service ordering', 'Concierge services', 'Event registration'] },
  { industry: 'Healthcare', examples: ['Patient check-in', 'Insurance verification', 'Appointment scheduling', 'Wayfinding'] },
]

export default function KioskConsultingPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[520px] flex items-center bg-primary-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/services/kiosks-hero.png"
            alt="Self-service kiosk solutions"
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
              Service #4
            </span>
            <h1 className="heading-xl text-white mb-5">
              Kiosk Consulting<br />& Solutions
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              End-to-end self-service kiosk design, development, and deployment. Reduce wait times, lower labor costs, and serve customers 24/7.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-blue text-white font-bold px-7 py-3.5 rounded-xl shadow hover:bg-blue-600 transition-colors">
                Request a Demo <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Impact Numbers ── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '40%', label: 'Avg. reduction in wait times' },
              { value: '24/7', label: 'Customer service availability' },
              { value: '30%', label: 'Lower transaction costs vs. staff' },
              { value: '95%', label: 'Customer satisfaction rate' },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-1">{value}</p>
                <p className="text-text-gray text-sm max-w-[180px] mx-auto">{label}</p>
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
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">End-to-End Kiosk Services</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              From initial strategy through post-launch support — we handle every layer of your kiosk deployment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="clean-card p-8">
                <div className="bg-amber-50 p-3 rounded-xl inline-flex mb-4">
                  <Icon size={22} className="text-warning" />
                </div>
                <h3 className="text-lg font-bold text-primary-navy mb-2">{title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Industries</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Kiosk Solutions by Industry</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map(({ industry, examples }) => (
              <div key={industry} className="clean-card p-8">
                <h3 className="text-lg font-bold text-primary-navy mb-4">{industry}</h3>
                <ul className="space-y-2.5">
                  {examples.map((ex) => (
                    <li key={ex} className="flex items-start gap-2.5 text-sm text-text-gray">
                      <Check size={13} className="text-success mt-0.5 flex-shrink-0" />
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="section-label mb-4">Our Approach</span>
              <h2 className="heading-md text-primary-navy mt-4 mb-6">
                Vendor-Neutral.<br />Solution-First.
              </h2>
              <p className="text-text-gray text-base leading-relaxed mb-4">
                We don&apos;t sell hardware. That means we recommend the right equipment for your needs — not the most expensive, and not whichever brand gives us the best margin.
              </p>
              <p className="text-text-gray text-base leading-relaxed">
                Our software is custom-built, not a white-labeled template. That means your kiosk works exactly the way your business works — not the other way around.
              </p>
            </div>
            <div className="space-y-3">
              {[
                'Vendor-neutral hardware selection',
                'Custom software, no templates',
                'Accessibility (ADA) compliant by default',
                'Offline-capable for network outages',
                'Remote monitoring & management',
                'Multi-location fleet management',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 clean-card p-4">
                  <Check size={15} className="text-success flex-shrink-0" />
                  <span className="text-primary-navy font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Transform Your Customer Experience?"
        description="Get a free kiosk consultation — we&apos;ll assess your location, workflow, and ROI potential."
        primaryButtonText="Request Free Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="View All Services"
        secondaryButtonHref="/#services"
      />
    </>
  )
}
