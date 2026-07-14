import Link from 'next/link'
import Hero from '@/components/Hero'
import FeaturedProjectCard from '@/components/FeaturedProjectCard'
import ProjectCard from '@/components/ProjectCard'
import CTASection from '@/components/CTASection'
import { featuredProjects, inHouseProjects } from '@/lib/projects'
import { Server, Code2, Target, HeartHandshake, Layers, Boxes, ArrowRight, Check } from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiAmazon,
  SiTailwindcss,
} from 'react-icons/si'

const services = [
  {
    icon: Server,
    title: 'IT Consulting & Managed Support',
    description:
      'Reliable IT support and technology guidance for small businesses — from Microsoft 365 and endpoint monitoring to vendor coordination and managed support plans.',
    href: '/services/it-consulting-managed-support',
    bullets: ['Managed IT support', 'Microsoft 365', 'Cybersecurity essentials', 'Vendor coordination'],
    iconBg: 'bg-blue-50',
    iconColor: 'text-primary-blue',
  },
  {
    icon: Code2,
    title: 'Web Design & Development',
    description:
      'Professional websites that build credibility, showcase your services, and generate more inquiries — from landing pages to full business sites and ecommerce.',
    href: '/services/web-design-development',
    bullets: ['Business websites', 'Landing pages', 'Ecommerce', 'Hosting & maintenance'],
    iconBg: 'bg-cyan-50',
    iconColor: 'text-secondary-cyan',
  },
]

const whyBizgen = [
  { icon: Target, title: 'Business-Focused Solutions', desc: 'Technology decisions guided by your business goals — not by buzzwords or complexity.' },
  { icon: HeartHandshake, title: 'Personalized Support', desc: 'A direct, responsive partner who understands your setup and how you work.' },
  { icon: Layers, title: 'Practical & Scalable', desc: 'Right-sized services that fit today and grow as your business grows.' },
  { icon: Boxes, title: 'One Technology Partner', desc: 'IT support and web development under one roof — fewer vendors to manage.' },
]

const techStack = [
  { icon: <SiReact className="text-[#61DAFB]" />, label: 'React' },
  { icon: <SiNextdotjs className="text-primary-navy" />, label: 'Next.js' },
  { icon: <SiTypescript className="text-[#3178C6]" />, label: 'TypeScript' },
  { icon: <SiNodedotjs className="text-[#5FA04E]" />, label: 'Node.js' },
  { icon: <SiPostgresql className="text-[#4169E1]" />, label: 'PostgreSQL' },
  { icon: <SiAmazon className="text-[#FF9900]" />, label: 'AWS' },
  { icon: <SiTailwindcss className="text-[#06B6D4]" />, label: 'Tailwind' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <Hero />

      {/* ── Services ── */}
      <section id="services" className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">What We Do</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Two Ways We Help Your Business</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Practical technology support and a stronger digital presence — from one partner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map(({ icon: Icon, title, description, href, bullets, iconBg, iconColor }) => (
              <div key={title} className="clean-card p-8 md:p-10 flex flex-col">
                <div className={`${iconBg} p-3.5 rounded-xl inline-flex mb-5 w-fit`}>
                  <Icon size={26} className={iconColor} />
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">{title}</h3>
                <p className="text-text-gray text-base leading-relaxed mb-6">{description}</p>
                <ul className="grid grid-cols-2 gap-2.5 mb-8">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-text-gray">
                      <Check size={14} className="text-success flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  href={href}
                  className="mt-auto inline-flex items-center gap-2 text-primary-blue font-semibold text-sm hover:gap-3 transition-all"
                >
                  Learn more <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Bizgen ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Why Bizgen</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">A Technology Partner That Fits Small Business</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyBizgen.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="clean-card p-7">
                <div className="bg-blue-50 p-3 rounded-xl inline-flex mb-4">
                  <Icon size={22} className="text-primary-blue" />
                </div>
                <h3 className="text-base font-bold text-primary-navy mb-2">{title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Client Work ── */}
      <section id="portfolio" className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Featured Client Work</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Websites We&apos;ve Built</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Real websites for real South Florida businesses.
            </p>
          </div>
          <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
            {featuredProjects.map((p, i) => (
              <FeaturedProjectCard key={p.title} {...p} reverse={i % 2 === 1} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── In-House Platforms ── */}
      <section className="section-padding gradient-navy-blue">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-white/10 text-white border border-white/15">
              In-House Platforms
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-4">Products We&apos;re Building</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Internal platforms in active development — a look at what our team is working on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inHouseProjects.slice(0, 3).map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white hover:text-primary-navy transition-all duration-200"
            >
              View All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tech Stack (discreet) ── */}
      <section className="py-14 bg-white border-t border-slate-100">
        <div className="container-custom">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            Technologies we work with
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
            {techStack.map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-slate-500">
                <span className="text-2xl">{icon}</span>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CTASection
        title="Let's Discuss What Your Business Needs"
        description="Tell us about your technology and goals — we'll help you plan the practical next step."
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonHref="/#services"
      />
    </>
  )
}
