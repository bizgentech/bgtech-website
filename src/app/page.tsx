import Link from 'next/link'
import Image from 'next/image'
import HeroVideo from '@/components/HeroVideo'
import FeaturedProjectCard from '@/components/FeaturedProjectCard'
import ProjectCard from '@/components/ProjectCard'
import { featuredProjects, inHouseProjects } from '@/lib/projects'
import {
  ArrowRight,
  Check,
  Target,
  HeartHandshake,
  Layers,
  Boxes,
  Activity,
  MapPin,
  Users,
} from 'lucide-react'

const itChecklist = [
  'Microsoft 365 Admin',
  'Endpoint Management',
  'Network & Firewalls',
  'Backup Monitoring',
]

const webChecklist = [
  'Business Websites',
  'Landing Pages',
  'Ecommerce',
  'Hosting & Maintenance',
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We look at your current systems, workflows, and goals.' },
  { step: '02', title: 'Proposal', desc: 'Clear scope, transparent pricing, and a practical roadmap.' },
  { step: '03', title: 'Execution', desc: 'Structured implementation and development cycles.' },
  { step: '04', title: 'Launch', desc: 'Careful delivery, followed by ongoing support.' },
]

export default function Home() {
  return (
    <>
      {/* ── 1. Hero (video) ── */}
      <HeroVideo />

      {/* ── 2. Statement band ── */}
      <section className="border-y border-slate-200 bg-surface py-20">
        <div className="container-custom text-center">
          <span className="mx-auto mb-6 block h-0.5 w-10 bg-vibrant-cyan" aria-hidden="true" />
          <span className="label-mono text-vibrant-cyan">A Unified Growth Engine</span>
          <h2 className="mx-auto mt-6 max-w-3xl font-heading text-2xl font-semibold leading-snug text-slate-deep md:text-[2rem]">
            Stable operations through robust IT support.
            <br className="hidden sm:block" /> Premium presentation through expert Web Design.
          </h2>
        </div>
      </section>

      {/* ── 3. IT Consulting & Managed Support (dark) ── */}
      <section id="services" className="relative overflow-hidden bg-slate-deep py-24 lg:py-32">
        <div
          className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-vibrant-cyan/10 blur-[120px]"
          aria-hidden="true"
        />
        <div className="container-custom relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Visual */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src="/images/services/it-consulting-hero.jpeg"
                alt="IT consulting and managed support"
                width={900}
                height={620}
                className="h-[340px] w-full object-cover lg:h-[420px]"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.85), rgba(15,23,42,0.15))' }}
                aria-hidden="true"
              />
              {/* Decorative overlay panel — no metrics, no claims */}
              <div className="glass-panel absolute inset-x-5 bottom-5 p-4">
                <p className="label-mono mb-3 flex items-center gap-2 text-[10px] text-vibrant-cyan">
                  <Activity size={12} /> Endpoint Monitoring
                </p>
                <div className="space-y-2">
                  {['w-[76%]', 'w-[58%]', 'w-[67%]'].map((w, i) => (
                    <div key={i} className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full ${w} rounded-full bg-gradient-to-r from-vibrant-cyan to-electric-blue`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <span className="label-mono border border-vibrant-cyan/30 bg-vibrant-cyan/10 px-3.5 py-1.5 text-vibrant-cyan">
              Infrastructure
            </span>
            <h2 className="mt-6 font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
              IT Consulting &amp; Managed Support
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/70">
              Reliable IT support and technology guidance for small businesses — from Microsoft 365
              and endpoint monitoring to vendor coordination and managed support plans.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {itChecklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-vibrant-cyan/15">
                    <Check size={13} className="text-vibrant-cyan" />
                  </span>
                  <span className="text-sm text-white/85">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/services/it-consulting-managed-support"
              className="mt-10 inline-flex items-center gap-2 font-heading text-sm font-semibold text-vibrant-cyan transition-all hover:gap-3"
            >
              Schedule an IT Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. Web Design & Development (light) ── */}
      <section className="relative overflow-hidden bg-surface py-24 lg:py-32">
        <div className="container-custom grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="lg:order-1">
            <span className="label-mono border border-electric-blue/25 bg-electric-blue/10 px-3.5 py-1.5 text-electric-blue">
              Digital Presence
            </span>
            <h2 className="mt-6 font-heading text-3xl font-bold leading-tight text-slate-deep md:text-4xl">
              Web Design &amp; Development
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-text-gray">
              Professional websites designed to help local businesses build credibility, showcase
              their services, and generate more inquiries.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {webChecklist.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-electric-blue/10">
                    <Check size={13} className="text-electric-blue" />
                  </span>
                  <span className="text-sm text-text-main">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/services/web-design-development"
              className="mt-10 inline-flex items-center gap-2 font-heading text-sm font-semibold text-electric-blue transition-all hover:gap-3"
            >
              Request a Website Consultation <ArrowRight size={16} />
            </Link>
          </div>

          {/* Visual */}
          <div className="relative lg:order-2">
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-[0_24px_60px_rgba(15,23,42,0.16)]">
              <Image
                src="/images/services/software-dev-hero.jpeg"
                alt="Web design and development"
                width={900}
                height={620}
                className="h-[340px] w-full object-cover lg:h-[420px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Featured Client Work ── */}
      <section id="portfolio" className="bg-surface-light py-24 lg:py-32">
        <div className="container-custom">
          <div className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="label-mono text-vibrant-cyan">Featured Client Work</span>
              <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-slate-deep md:text-5xl">
                Websites We&apos;ve Built
              </h2>
              <p className="mt-3 text-text-gray">Real websites for real South Florida businesses.</p>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border-b-2 border-electric-blue pb-1 font-heading text-sm font-semibold text-electric-blue transition-all hover:gap-3"
            >
              View All Projects <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mx-auto max-w-6xl space-y-20 lg:space-y-28">
            {featuredProjects.map((p, i) => (
              <FeaturedProjectCard key={p.title} {...p} reverse={i % 2 === 1} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. In-House Platforms (real, honest statuses) ── */}
      <section className="bg-slate-deep py-24">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <span className="label-mono border border-white/15 bg-white/5 px-3.5 py-1.5 text-white/60">
              In-House Platforms
            </span>
            <h2 className="mt-6 font-heading text-3xl font-bold text-white md:text-4xl">
              Products We&apos;re Building
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-white/60">
              Internal platforms in active development — each one shows its current stage.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {inHouseProjects.slice(0, 3).map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/portfolio" className="btn-pill-ghost-dark">
              View All Projects <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 7. The BizGen Advantage (bento) ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="container-custom">
          <div className="mb-14 text-center">
            <span className="label-mono text-electric-blue">Why Bizgen</span>
            <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight text-slate-deep md:text-5xl">
              The BizGen Advantage
            </h2>
          </div>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {/* Wide light card */}
            <div className="relative overflow-hidden rounded-2xl bg-blue-50/70 p-9 md:col-span-2">
              <Target size={26} className="mb-5 text-electric-blue" />
              <h3 className="font-heading text-xl font-bold text-slate-deep">
                Business-Focused Solutions
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-text-gray">
                Technology decisions guided by your business goals — not by buzzwords or
                unnecessary complexity. We right-size what we recommend.
              </p>
              <Users
                size={140}
                className="pointer-events-none absolute -bottom-6 -right-4 text-electric-blue/[0.07]"
                aria-hidden="true"
              />
            </div>

            {/* Dark card */}
            <div className="rounded-2xl bg-slate-deep p-9">
              <HeartHandshake size={26} className="mb-5 text-vibrant-cyan" />
              <h3 className="font-heading text-xl font-bold text-white">Personalized Support</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                A direct, responsive partner who understands your setup and how you actually work.
              </p>
            </div>

            {/* Small card */}
            <div className="rounded-2xl bg-cyan-50/70 p-9">
              <Layers size={26} className="mb-5 text-vibrant-cyan" />
              <h3 className="font-heading text-xl font-bold text-slate-deep">Practical &amp; Scalable</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-gray">
                Right-sized services that fit today and grow as your business grows.
              </p>
            </div>

            {/* Wide light card */}
            <div className="relative overflow-hidden rounded-2xl bg-blue-50/70 p-9 md:col-span-2">
              <Boxes size={26} className="mb-5 text-electric-blue" />
              <h3 className="font-heading text-xl font-bold text-slate-deep">
                One Technology Partner
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-text-gray">
                IT support and web development under one roof — fewer vendors to manage, and one
                team that understands the whole picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. Our Process ── */}
      <section className="border-t border-slate-200 bg-surface py-24 lg:py-32">
        <div className="container-custom">
          <div className="mb-16 text-center">
            <h2 className="font-heading text-3xl font-bold text-slate-deep md:text-4xl">
              Our Process
            </h2>
            <p className="mt-3 text-text-gray">A structured path from problem to solution.</p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {process.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                  <span className="label-mono text-sm text-vibrant-cyan">{step}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-slate-deep">{title}</h3>
                <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-text-gray">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. Consultation CTA ── */}
      <section id="consultation" className="relative overflow-hidden bg-slate-deep py-24 lg:py-32">
        <div
          className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-blue/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-custom relative">
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-white/[0.04] px-8 py-16 text-center backdrop-blur-sm md:px-16">
            <h2 className="font-heading text-3xl font-bold leading-tight text-white md:text-5xl">
              Ready to stabilize and{' '}
              <span className="bg-gradient-to-r from-vibrant-cyan to-electric-blue bg-clip-text text-transparent">
                scale your tech?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base text-white/65 md:text-lg">
              Tell us about your technology and your goals — we&apos;ll help you plan the practical
              next step.
            </p>

            <div className="mt-10">
              <Link href="/contact" className="btn-pill px-9 py-4 text-base">
                Schedule a Consultation <ArrowRight size={17} />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-white/10 pt-8">
              {[
                { icon: MapPin, text: 'Based in Dania Beach, FL' },
                { icon: Boxes, text: 'IT + Web from one partner' },
                { icon: Target, text: 'Small-business focused' },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="label-mono flex items-center gap-2 text-[10px] text-white/45">
                  <Icon size={13} className="text-white/35" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
