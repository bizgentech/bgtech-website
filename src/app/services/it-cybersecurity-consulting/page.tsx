import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import {
  Shield,
  Check,
  Server,
  Lock,
  Wifi,
  Headphones,
  Monitor,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react'

export const metadata = {
  title: 'IT & Cybersecurity Consulting | BizGen Technologies LLC',
  description:
    'Managed IT support, Microsoft 365, endpoint security, and 24/7 help desk for businesses of 10–50 users. Less than the cost of one IT engineer.',
}

const features = [
  {
    icon: Server,
    title: 'Managed IT Support',
    desc: 'Proactive monitoring, patch management, and issue resolution — before small problems become big outages.',
  },
  {
    icon: Lock,
    title: 'Cybersecurity Protection',
    desc: 'Endpoint protection, threat detection, email security, and security awareness training for your team.',
  },
  {
    icon: Monitor,
    title: 'Microsoft 365 Administration',
    desc: 'Full M365 management: Teams, SharePoint, Exchange, Intune, Azure AD, and licensing optimization.',
  },
  {
    icon: Wifi,
    title: 'Network Management',
    desc: 'Firewall configuration, VPN, Wi-Fi management, and bandwidth monitoring to keep your network secure and fast.',
  },
  {
    icon: Headphones,
    title: '24/7 Help Desk',
    desc: 'Real humans answering the phone. We resolve tickets fast so your team stays productive.',
  },
  {
    icon: ShieldAlert,
    title: 'Compliance & Risk',
    desc: 'Cybersecurity assessments, vulnerability scanning, and guidance on HIPAA, PCI-DSS, and SOC2 requirements.',
  },
]

const included = [
  'Unlimited help desk tickets',
  'Remote & on-site support',
  'Microsoft 365 administration',
  'Antivirus & endpoint protection',
  'Network monitoring 24/7',
  'Monthly security reports',
  'Backup & disaster recovery planning',
  'Hardware procurement assistance',
  'New user onboarding / offboarding',
  'Security awareness training',
]

const idealFor = [
  'Small businesses (10–50 users)',
  'Companies without a dedicated IT team',
  'Organizations upgrading to Microsoft 365',
  'Businesses concerned about ransomware',
  'Remote or hybrid workforces',
  'Companies needing compliance support',
]

export default function ITCybersecurityPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[520px] flex items-center bg-primary-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/services/it-consulting-hero.jpeg"
            alt="IT and cybersecurity consulting professionals"
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
              IT & Cybersecurity<br />Consulting
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Get an entire team of Microsoft-certified IT professionals and cybersecurity specialists for less than hiring one full-time engineer.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-blue text-white font-bold px-7 py-3.5 rounded-xl shadow hover:bg-blue-600 transition-colors">
                Get a Free Assessment <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Value Prop ── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '<$1K/mo', label: 'Starting Price' },
              { value: '24/7', label: 'Monitoring & Support' },
              { value: '<2hr', label: 'Avg. Response Time' },
              { value: '99.9%', label: 'Uptime Guarantee' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl md:text-4xl font-extrabold text-primary-blue mb-1">{value}</p>
                <p className="text-text-gray text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">What&apos;s Included</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Everything Your Business Needs</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              One monthly fee covers your entire IT infrastructure — hardware, software, security, and support.
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

      {/* ── What&apos;s Included + Ideal For ── */}
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

      {/* ── Pricing ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Pricing</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-text-gray text-lg max-w-xl mx-auto">
              No hidden fees. No surprise invoices. Just one predictable monthly cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { tier: 'Essentials', users: '10–20 users', price: 'From $799/mo', features: ['Help Desk (business hours)', 'Antivirus & Patching', 'M365 Administration', 'Monthly Reports'] },
              { tier: 'Business', users: '20–35 users', price: 'From $1,499/mo', features: ['24/7 Help Desk', 'Advanced Endpoint Security', 'Network Monitoring', 'Backup & DR Planning', 'Quarterly Assessments'], highlight: true },
              { tier: 'Enterprise', users: '35–50+ users', price: 'Custom Quote', features: ['Everything in Business', 'On-Site Support', 'Compliance Guidance', 'Dedicated Account Manager', 'Custom SLA'] },
            ].map(({ tier, users, price, features: f, highlight }) => (
              <div
                key={tier}
                className={`rounded-2xl p-8 ${highlight ? 'gradient-blue-cyan text-white shadow-xl scale-[1.02]' : 'clean-card'}`}
              >
                <p className={`text-xs font-bold uppercase tracking-widest mb-1 ${highlight ? 'text-white/70' : 'text-text-gray'}`}>{users}</p>
                <h3 className={`text-xl font-extrabold mb-1 ${highlight ? 'text-white' : 'text-primary-navy'}`}>{tier}</h3>
                <p className={`text-2xl font-extrabold mb-5 ${highlight ? 'text-white' : 'text-primary-blue'}`}>{price}</p>
                <ul className="space-y-2.5 mb-8">
                  {f.map((item) => (
                    <li key={item} className={`flex items-start gap-2.5 text-sm ${highlight ? 'text-white/90' : 'text-text-gray'}`}>
                      <Check size={13} className={`mt-0.5 flex-shrink-0 ${highlight ? 'text-white' : 'text-success'}`} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center font-bold py-3 rounded-xl text-sm transition-all ${highlight ? 'bg-white text-primary-blue hover:bg-blue-50' : 'btn-primary'}`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Secure Your Business?"
        description="Get a free IT assessment — no commitment, no pressure."
        primaryButtonText="Free Assessment"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn About Us"
        secondaryButtonHref="/about"
      />
    </>
  )
}
