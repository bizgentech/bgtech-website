import Link from 'next/link'
import Image from 'next/image'
import {
  Shield,
  Check,
  Server,
  Lock,
  Wifi,
  FileText,
  Monitor,
  Headphones,
  ArrowRight,
  Plus,
} from 'lucide-react'

export const metadata = {
  title: 'Concierge Managed IT & Cybersecurity | BizGen Technologies LLC',
  description:
    'Practical IT management for small businesses: workstations, servers, firewalls, Microsoft 365, documentation, monitoring, cybersecurity basics, and scheduled visits.',
}

const features = [
  {
    icon: Server,
    title: 'Managed IT Support',
    desc: 'Remote support, workstation care, issue resolution, scheduled maintenance, and practical technology guidance.',
  },
  {
    icon: Monitor,
    title: 'Microsoft 365 Administration',
    desc: 'User management, licenses, MFA, Outlook, Teams, OneDrive, shared mailboxes, and access control.',
  },
  {
    icon: Wifi,
    title: 'Network & Firewall Management',
    desc: 'Firewall rules, VPN, network checks, configuration backup, and basic uptime monitoring.',
  },
  {
    icon: FileText,
    title: 'IT Documentation & Inventory',
    desc: 'Device inventory, user records, vendor information, network details, and password/vault process.',
  },
  {
    icon: Lock,
    title: 'Cybersecurity Essentials',
    desc: 'Endpoint protection, MFA guidance, email security options, awareness training, and basic risk review.',
  },
  {
    icon: Headphones,
    title: 'Concierge IT Guidance',
    desc: 'Vendor coordination, equipment purchasing advice, technology roadmap, and scheduled business reviews.',
  },
]

const included = [
  'Remote support',
  'Workstation management',
  'Microsoft 365 basic administration',
  'Inventory tracking',
  'Password/vault process',
  'Uptime monitoring for critical systems',
  'Vendor coordination',
  'Basic printer troubleshooting',
  'Scheduled maintenance by plan',
  'Technology recommendations',
]

const idealFor = [
  'Small businesses without internal IT',
  'Offices with 5–25 workstations',
  'Businesses using Microsoft 365',
  'Companies with servers, firewalls, or shared network resources',
  'Owners who need technology guidance, not just ticket support',
  'Businesses that want documentation, monitoring, and planned improvements',
]

const addOns = [
  'Cybersecurity Essentials',
  'User & Device Setup',
  'Staff Training',
  'Backup & Recovery Review',
  'Extra Onsite Visit Pack',
  'Website & Digital Presence',
  'Third-Party App Coordination',
]

export default function ITCybersecurityPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[520px] flex items-center bg-primary-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/services/it-consulting-hero.jpeg"
            alt="Concierge managed IT and cybersecurity for small businesses"
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
              Service #1
            </span>
            <h1 className="heading-xl text-white mb-5">
              Concierge Managed IT<br />&amp; Cybersecurity
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Practical IT management for small businesses: workstations, servers, firewalls, Microsoft 365, documentation, monitoring, cybersecurity basics, scheduled visits, and technology guidance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-blue text-white font-bold px-7 py-3.5 rounded-xl shadow hover:bg-blue-600 transition-colors">
                Request IT Assessment <ArrowRight size={16} />
              </Link>
              <Link href="#services" className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Metrics Row ── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 'From $599', label: 'IT Assessment' },
              { value: 'Monthly Plans', label: 'Based on Business Size' },
              { value: 'Onsite Visits', label: 'Included by Plan' },
              { value: 'Assessment Credit', label: 'Applied If You Sign' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-2xl md:text-3xl font-extrabold text-primary-blue mb-1">{value}</p>
                <p className="text-text-gray text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">What We Offer</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">
              Everything Your Business Needs to Stay Organized, Secure, and Supported
            </h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              BizGen helps small businesses manage daily technology, reduce risks, document key systems, and plan practical improvements without hiring an internal IT department.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="clean-card p-8">
                <div className="bg-blue-50 p-3 rounded-xl inline-flex mb-4">
                  <Icon size={22} className="text-primary-blue" />
                </div>
                <h3 className="text-lg font-bold text-primary-navy mb-2">{title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Included + Ideal For ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <div className="clean-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 p-2.5 rounded-xl">
                  <Shield size={20} className="text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-primary-navy">Included in Every Plan</h3>
              </div>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-gray">
                    <Check size={14} className="text-success mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="clean-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-50 p-2.5 rounded-xl">
                  <Check size={20} className="text-success" />
                </div>
                <h3 className="text-xl font-bold text-primary-navy">This Service Is Ideal For</h3>
              </div>
              <ul className="space-y-3">
                {idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-gray">
                    <ArrowRight size={14} className="text-primary-blue mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing: Assessment ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Pricing</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">IT Assessment &amp; Improvement Roadmap</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                tier: 'Essential Assessment',
                price: '$599',
                desc: 'Best for small offices with basic IT needs.',
              },
              {
                tier: 'Business Assessment',
                price: '$999',
                desc: 'Best for growing businesses with Microsoft 365, network, and multiple users.',
                highlight: true,
                badge: 'Most Common',
              },
              {
                tier: 'Advanced Assessment',
                price: '$1,399',
                desc: 'Best for businesses with servers, firewalls, or more complex environments.',
              },
            ].map(({ tier, price, desc, highlight, badge }) => (
              <div
                key={tier}
                className={`rounded-2xl p-8 ${highlight ? 'gradient-blue-cyan text-white shadow-xl scale-[1.02]' : 'clean-card'}`}
              >
                {badge && (
                  <span className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 ${highlight ? 'bg-white/20 text-white' : 'bg-blue-50 text-primary-blue'}`}>
                    {badge}
                  </span>
                )}
                <h3 className={`text-lg font-extrabold mb-1 ${highlight ? 'text-white' : 'text-primary-navy'}`}>{tier}</h3>
                <p className={`text-3xl font-extrabold mb-4 ${highlight ? 'text-white' : 'text-primary-blue'}`}>{price}</p>
                <p className={`text-sm leading-relaxed mb-8 ${highlight ? 'text-white/85' : 'text-text-gray'}`}>{desc}</p>
                <Link
                  href="/contact"
                  className={`block text-center font-bold py-3 rounded-xl text-sm transition-all ${highlight ? 'bg-white text-primary-blue hover:bg-blue-50' : 'btn-primary'}`}
                >
                  Request Assessment
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-text-gray text-sm mt-8 max-w-2xl mx-auto">
            If you become a managed IT client, your assessment fee is credited back through monthly invoice credits.
          </p>
        </div>
      </section>

      {/* ── Pricing: Managed IT Plans ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-4">
            <span className="section-label mb-4">Monthly Plans</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Concierge Managed IT Plans</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Monthly service is customized based on the number of workstations, servers, firewalls, Microsoft 365 users, onsite needs, and support requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-10">
            {[
              {
                tier: 'Concierge Small',
                price: 'Starting at $599/mo',
                desc: 'For small offices with basic IT needs.',
              },
              {
                tier: 'Concierge Business',
                price: 'Starting at $999/mo',
                desc: 'For growing businesses with multiple users, Microsoft 365, firewall, and scheduled support.',
                highlight: true,
              },
              {
                tier: 'Concierge Plus',
                price: 'Custom Quote',
                desc: 'For businesses with servers, multiple locations, advanced security needs, or frequent onsite requirements.',
              },
            ].map(({ tier, price, desc, highlight }) => (
              <div
                key={tier}
                className={`rounded-2xl p-8 ${highlight ? 'gradient-blue-cyan text-white shadow-xl scale-[1.02]' : 'clean-card'}`}
              >
                <h3 className={`text-lg font-extrabold mb-1 ${highlight ? 'text-white' : 'text-primary-navy'}`}>{tier}</h3>
                <p className={`text-2xl font-extrabold mb-4 ${highlight ? 'text-white' : 'text-primary-blue'}`}>{price}</p>
                <p className={`text-sm leading-relaxed mb-8 ${highlight ? 'text-white/85' : 'text-text-gray'}`}>{desc}</p>
                <Link
                  href="/contact"
                  className={`block text-center font-bold py-3 rounded-xl text-sm transition-all ${highlight ? 'bg-white text-primary-blue hover:bg-blue-50' : 'btn-primary'}`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Add-Ons ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <span className="section-label mb-4">Optional</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Optional Add-Ons</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {addOns.map((item) => (
              <div key={item} className="flex items-center gap-2 clean-card px-5 py-3 text-sm font-medium text-primary-navy">
                <Plus size={14} className="text-primary-blue flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding gradient-blue-cyan">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="heading-lg text-white mb-4">
            Ready to Organize and Improve Your Business IT?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Start with an IT Assessment and receive a practical short- and mid-term improvement roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary-blue font-bold px-7 py-3.5 rounded-xl shadow hover:bg-blue-50 transition-colors"
            >
              Request IT Assessment <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Contact BizGen
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-2 text-white/70 text-sm">
            <span>jvega@bgtecnologies.com</span>
            <span>+1 (786) 978-3032</span>
            <a href="https://www.bgtecnologies.com" className="hover:text-white transition-colors">www.bgtecnologies.com</a>
          </div>
        </div>
      </section>
    </>
  )
}
