import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { Code2, Check, Globe, Smartphone, Database, Layers, Zap, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Software & Web Development | BizGen Technologies LLC',
  description:
    'Custom web apps, mobile platforms, and enterprise software built with React, Next.js, and NestJS. From MVP to full-scale production systems.',
}

const offerings = [
  { icon: Globe, title: 'Web Applications', desc: 'Scalable, performant web apps built with React and Next.js — from marketing sites to complex SaaS platforms.' },
  { icon: Smartphone, title: 'Mobile Apps', desc: 'Cross-platform mobile apps using React Native that work flawlessly on iOS and Android from a single codebase.' },
  { icon: Database, title: 'Backend & APIs', desc: 'Robust REST and GraphQL APIs built with NestJS and PostgreSQL. Secure, scalable, and well-documented.' },
  { icon: Layers, title: 'Enterprise Platforms', desc: 'Complex business systems — field management, billing, ERP, CRM — designed to handle real operational scale.' },
  { icon: Zap, title: 'Payment Integration', desc: 'Stripe, PayPal, and custom payment gateway integration including Connect for marketplace-style platforms.' },
  { icon: Code2, title: 'Legacy Modernization', desc: 'Migrate aging desktop or web apps to modern, maintainable stacks without disrupting your operations.' },
]

const stack = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', items: ['NestJS', 'Node.js', 'PostgreSQL', 'Redis'] },
  { category: 'Mobile', items: ['React Native', 'Expo', 'iOS', 'Android'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'Docker', 'CI/CD Pipelines'] },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive into your requirements, workflows, and technical constraints to define scope.' },
  { step: '02', title: 'Architecture', desc: 'System design, database modeling, and tech stack selection with a clear delivery roadmap.' },
  { step: '03', title: 'Development', desc: 'Agile sprints with regular demos. You see real progress every two weeks.' },
  { step: '04', title: 'Launch & Support', desc: 'Production deployment, load testing, and ongoing support & maintenance.' },
]

export default function SoftwareDevelopmentPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[520px] flex items-center bg-primary-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/services/software-dev-hero.jpeg"
            alt="Software and web development team"
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
              Service #2
            </span>
            <h1 className="heading-xl text-white mb-5">
              Software & Web<br />Development
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              We design and build modern, scalable software — from MVPs to enterprise platforms — using battle-tested technologies and agile delivery.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-blue text-white font-bold px-7 py-3.5 rounded-xl shadow hover:bg-blue-600 transition-colors">
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link href="/#portfolio" className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Build ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Capabilities</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">What We Build</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              From a polished landing page to a fully custom enterprise system, we handle the entire development lifecycle.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="clean-card p-8">
                <div className="bg-cyan-50 p-3 rounded-xl inline-flex mb-4">
                  <Icon size={22} className="text-secondary-cyan" />
                </div>
                <h3 className="text-lg font-bold text-primary-navy mb-2">{title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Technology</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Our Tech Stack</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {stack.map(({ category, items }) => (
              <div key={category} className="clean-card p-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary-blue mb-3">{category}</h4>
                <ul className="space-y-2">
                  {items.map((i) => (
                    <li key={i} className="text-sm text-primary-navy font-medium">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">How It Works</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Our Development Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="clean-card p-8 text-center">
                <p className="text-5xl font-extrabold text-slate-100 mb-3 leading-none">{step}</p>
                <h3 className="text-lg font-bold text-primary-navy mb-2">{title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-label mb-4">Why Choose Us</span>
              <h2 className="heading-md text-primary-navy mt-4 mb-6">
                We Build to Last,<br />Not Just to Launch
              </h2>
              <p className="text-text-gray text-base leading-relaxed mb-4">
                We&apos;ve seen what happens when projects are rushed to market — buggy code, scaling nightmares, and costly rewrites. That&apos;s why we invest upfront in architecture and code quality.
              </p>
              <p className="text-text-gray text-base leading-relaxed">
                Every system we build is designed for maintainability, testability, and growth. You own the code. No vendor lock-in, no black boxes.
              </p>
            </div>
            <div className="space-y-3">
              {[
                'Full source code ownership',
                'Comprehensive documentation',
                'Automated test coverage',
                'CI/CD pipelines from day one',
                'Performance-first architecture',
                'Secure by design, not bolted on',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 clean-card p-4">
                  <Check size={16} className="text-success flex-shrink-0" />
                  <span className="text-primary-navy font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Build Something?"
        description="Let&apos;s talk about your project. We&apos;ll give you an honest assessment and timeline."
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View Portfolio"
        secondaryButtonHref="/#portfolio"
      />
    </>
  )
}
