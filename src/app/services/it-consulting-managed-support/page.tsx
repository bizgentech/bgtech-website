import type { Metadata } from 'next'
import Link from 'next/link'
import HeroBackground from '@/components/HeroBackground'
import {
  Check,
  Server,
  Monitor,
  Wifi,
  Lock,
  Users,
  HardDriveDownload,
  Handshake,
  ClipboardList,
  Headphones,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'IT Consulting & Managed IT Support for Small Businesses',
  description:
    'Practical IT consulting and managed support for small businesses in Miami and Broward that need reliable technology without hiring a full internal IT department.',
  alternates: { canonical: 'https://www.bgtecnologies.com/services/it-consulting-managed-support/' },
}

const services = [
  { icon: ClipboardList, title: 'IT Consulting & Technology Planning', desc: 'Practical guidance on the technology your business actually needs — and a clear plan to get there.' },
  { icon: Headphones, title: 'Remote Technical Support', desc: 'Responsive remote support during business hours to keep your team working.' },
  { icon: Monitor, title: 'Microsoft 365 Administration', desc: 'User management, licenses, MFA, Outlook, Teams, OneDrive, and access control.' },
  { icon: Users, title: 'User Onboarding & Offboarding', desc: 'Structured setup and secure removal of accounts, devices, and access as your team changes.' },
  { icon: Server, title: 'Endpoint Monitoring & Maintenance', desc: 'Ongoing monitoring, updates, and scheduled maintenance for workstations and critical systems.' },
  { icon: Lock, title: 'Cybersecurity & Endpoint Protection', desc: 'Endpoint protection, MFA guidance, and basic security practices to reduce everyday risk.' },
  { icon: HardDriveDownload, title: 'Backup Monitoring & Coordination', desc: 'Monitoring and coordination of your backups so your critical data is protected.' },
  { icon: Wifi, title: 'Network & Firewall Support', desc: 'Support for firewalls, VPN, and network configuration to keep your office connected and secure.' },
  { icon: Handshake, title: 'Vendor & Technology Coordination', desc: 'We coordinate with your internet, software, and hardware vendors so you don’t have to.' },
  { icon: Server, title: 'Project-Based IT Services', desc: 'Migrations, setups, and technology projects scoped and delivered as defined engagements.' },
]

const scopeIncluded = [
  'Designed primarily for small businesses',
  'Remote support during business hours',
  'Clearly defined scope and limits',
  'Microsoft 365 and user administration',
  'Endpoint monitoring and maintenance',
  'Vendor and technology coordination',
]

const scopeSeparate = [
  'Projects and system migrations',
  'Complex infrastructure and servers',
  'Network cabling and physical installations',
  'After-hours and emergency support',
  'Software licenses and hardware',
  'On-site visits (by arrangement)',
]

export default function ITConsultingManagedSupportPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[560px] flex items-center bg-primary-navy">
        <HeroBackground
          src="/images/services/it-consulting-hero.jpeg"
          alt="IT consulting and managed support for small businesses"
          position="center"
        />
        <div className="container-custom relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white border border-white/15">
              IT Consulting &amp; Managed Support
            </span>
            <h1 className="heading-xl text-white mb-5">
              Reliable IT Support<br />for Small Businesses
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Practical IT consulting and managed support for small businesses that need reliable
              technology without hiring a full internal IT department.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-blue text-white font-bold px-7 py-3.5 rounded-xl shadow hover:bg-blue-600 transition-colors">
                Schedule an IT Consultation <ArrowRight size={16} />
              </Link>
              <Link href="#services" className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">What We Do</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">IT Services for Small Businesses</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              A practical set of services to keep your technology organized, supported, and secure —
              without the overhead of an internal IT department.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
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

      {/* ── Managed IT Support Plans ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Managed Support</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">
              Managed IT Support Plans for Small Businesses
            </h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Ongoing support with a clearly defined scope, so you always know what’s included.
              Plans tailored to your business size, users, devices, and support requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Included */}
            <div className="clean-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-50 p-2.5 rounded-xl">
                  <Check size={20} className="text-success" />
                </div>
                <h3 className="text-xl font-bold text-primary-navy">What a Plan Covers</h3>
              </div>
              <ul className="space-y-3">
                {scopeIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-gray">
                    <Check size={14} className="text-success mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quoted separately */}
            <div className="clean-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-blue-50 p-2.5 rounded-xl">
                  <ClipboardList size={20} className="text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-primary-navy">Quoted Separately</h3>
              </div>
              <ul className="space-y-3">
                {scopeSeparate.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-gray">
                    <ArrowRight size={14} className="text-primary-blue mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-text-gray text-sm mt-8 max-w-2xl mx-auto">
            Every engagement starts with a conversation about your business, your systems, and your
            goals — so the plan fits how you actually work.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding gradient-blue-cyan">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="heading-lg text-white mb-4">Let&apos;s Talk About Your IT</h2>
          <p className="text-white/85 text-lg mb-8">
            Tell us how your business runs today and we&apos;ll help you plan practical, reliable
            technology support.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-blue font-bold px-8 py-4 rounded-xl text-base shadow hover:bg-blue-50 transition-colors"
          >
            Schedule an IT Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
