import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import {
  Check,
  Server,
  Code2,
  MapPin,
  Calendar,
  Globe,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'BizGen Technologies combines IT experience, business understanding, and web capabilities to deliver practical technology solutions for small and growing businesses in South Florida.',
}

const whatWeDo = [
  {
    icon: Server,
    title: 'IT Consulting & Managed Support',
    bullets: [
      'IT consulting & technology planning',
      'Remote technical support',
      'Microsoft 365 administration',
      'Endpoint monitoring & maintenance',
      'Cybersecurity essentials',
    ],
  },
  {
    icon: Code2,
    title: 'Web Design & Development',
    bullets: [
      'Business websites',
      'Landing pages',
      'Ecommerce',
      'Quote request forms',
      'Hosting & maintenance',
    ],
  },
]

const approach = [
  { step: '1', title: 'Listen First', desc: 'We start by understanding your business, your systems, and your goals.' },
  { step: '2', title: 'Plan Practically', desc: 'Clear scope and a realistic plan, so you know what we’re doing and why.' },
  { step: '3', title: 'Build & Support', desc: 'We implement carefully and stay available as your technology evolves.' },
  { step: '4', title: 'Grow Together', desc: 'Right-sized solutions today, with room to scale as your business grows.' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="gradient-navy-blue section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white border border-white/15">
              About BizGen
            </span>
            <h1 className="heading-xl text-white mb-6">
              Technology, Made<br />Practical for Business
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              BizGen Technologies combines IT experience, business understanding, and web
              capabilities to deliver practical solutions for small and growing companies.
            </p>
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: Calendar, text: 'Founded 2020' },
                { icon: Globe, text: 'USA Expansion 2024' },
                { icon: MapPin, text: 'Dania Beach, Florida' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon size={15} className="text-primary-blue" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label mb-4">Our Story</span>
              <h2 className="heading-md text-primary-navy mt-4 mb-6">Practical Technology for Growing Businesses</h2>
              <div className="space-y-4 text-text-gray text-base leading-relaxed">
                <p>
                  BizGen Technologies was founded in 2020 with a simple idea: technology should
                  solve real business problems, without unnecessary complexity.
                </p>
                <p>
                  In 2024 we established a base in Dania Beach, Florida, and today we focus on
                  helping small and growing businesses across South Florida with two things they
                  rely on every day — their technology operations and their digital presence.
                </p>
                <p>
                  We combine hands-on IT experience with web and software capabilities, so a single
                  partner can support both your internal systems and how your business shows up
                  online.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2020' },
                { label: 'Based In', value: 'Florida' },
              ].map(({ label, value }) => (
                <div key={label} className="clean-card p-6 text-center">
                  <p className="text-4xl font-extrabold text-primary-blue mb-1">{value}</p>
                  <p className="text-text-gray text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Services</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whatWeDo.map(({ icon: Icon, title, bullets }) => (
              <div key={title} className="clean-card p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-blue-50 p-2.5 rounded-xl flex-shrink-0">
                    <Icon size={22} className="text-primary-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-navy">{title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-text-gray">
                      <Check size={14} className="text-success mt-0.5 flex-shrink-0" />
                      {b}
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
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">How We Work</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map(({ step, title, desc }) => (
              <div key={step} className="clean-card p-8 text-center">
                <div className="w-12 h-12 rounded-full gradient-blue-cyan flex items-center justify-center text-white text-xl font-extrabold mx-auto mb-4">
                  {step}
                </div>
                <h3 className="text-lg font-bold text-primary-navy mb-3">{title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTASection
        title="Let's Work Together"
        description="Ready to discuss your technology or your website? We'd love to hear from you."
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonHref="/#services"
      />
    </>
  )
}
