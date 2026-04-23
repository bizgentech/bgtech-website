import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import TrustBadges from '@/components/TrustBadges'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import IndustryCard from '@/components/IndustryCard'
import CTASection from '@/components/CTASection'
import {
  Shield,
  Code2,
  Recycle,
  Monitor,
  Scale,
  Building2,
  ShieldCheck,
  Truck,
  ShoppingCart,
  Briefcase,
} from 'lucide-react'
import {
  SiReact,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiAmazon,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
} from 'react-icons/si'

const services = [
  {
    icon: <Shield size={26} />,
    title: 'IT & Cybersecurity Consulting',
    description:
      'Managed IT support, Microsoft 365 administration, endpoint protection, and 24/7 help desk. Get a full IT team for less than one engineer.',
    href: '/services/it-cybersecurity-consulting',
    iconBg: 'bg-blue-50',
    badge: '# 1 Service',
  },
  {
    icon: <Code2 size={26} />,
    title: 'Software & Web Development',
    description:
      'Custom web apps, mobile platforms, and enterprise solutions built with React, Next.js, and NestJS. From concept to production.',
    href: '/services/software-web-development',
    iconBg: 'bg-cyan-50',
  },
  {
    icon: <Recycle size={26} />,
    title: 'IT Equipment Disposal',
    description:
      'Certified data destruction, secure asset pickup, and compliant hardware recycling. Protect your data when retiring old equipment.',
    href: '/services/it-equipment-disposal',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: <Monitor size={26} />,
    title: 'Kiosk Consulting & Solutions',
    description:
      'End-to-end self-service kiosk design, hardware selection, software development, and deployment for retail, banking, and hospitality.',
    href: '/services/kiosk-consulting-solutions',
    iconBg: 'bg-amber-50',
  },
]

const projects = [
  {
    title: 'CTI Pro Labs',
    description:
      'Laboratory management system for construction testing operations with automated workflows, real-time sample tracking, and compliance reporting.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'PWA'],
    href: '/portfolio/cti-pro-labs',
    status: 'In Development' as const,
    gradient: 'from-blue-700 to-blue-500',
  },
  {
    title: 'Matter IQ',
    description:
      'Legal billing automation platform for law firms. Tracks time, automates invoicing, and integrates with major practice management systems.',
    tags: ['Next.js', 'NestJS', 'Stripe', 'PostgreSQL'],
    href: '/portfolio/matter-iq',
    status: 'Beta' as const,
    gradient: 'from-violet-700 to-violet-500',
  },
  {
    title: 'Washapp',
    description:
      'On-demand mobile car wash platform connecting customers with service providers via GPS-based matching and real-time dispatch.',
    tags: ['React Native', 'Node.js', 'Stripe Connect', 'GPS'],
    href: '/portfolio/washapp',
    status: 'In Development' as const,
    gradient: 'from-cyan-700 to-cyan-500',
  },
  {
    title: 'Sentinel MSP Platform',
    description:
      'Self-hosted MSP infrastructure platform with RMM, ticketing, asset management, and customer portal — built for managed service providers.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
    href: '/portfolio/sentinel-msp',
    status: 'Operational' as const,
    gradient: 'from-slate-700 to-slate-500',
  },
  {
    title: 'Cerebro Field',
    description:
      'Field service dispatcher and technician management system with route optimization, job scheduling, and live status tracking.',
    tags: ['React', 'NestJS', 'Maps API', 'PostgreSQL'],
    href: '/portfolio/cerebro-field',
    status: 'Beta' as const,
    gradient: 'from-orange-700 to-amber-500',
  },
]

const industries = [
  { icon: <Scale size={26} />, title: 'Legal Firms' },
  { icon: <Building2 size={26} />, title: 'Construction & Architecture' },
  { icon: <ShieldCheck size={26} />, title: 'Insurance Companies' },
  { icon: <Truck size={26} />, title: 'Car Dealerships' },
  { icon: <ShoppingCart size={26} />, title: 'Retail & Banking' },
  { icon: <Briefcase size={26} />, title: 'Small-Medium Businesses' },
]

const techStack = [
  { icon: <SiReact className="text-[#61DAFB]" />, label: 'React' },
  { icon: <SiNextdotjs className="text-black" />, label: 'Next.js' },
  { icon: <SiTypescript className="text-[#3178C6]" />, label: 'TypeScript' },
  { icon: <SiNestjs className="text-[#E0234E]" />, label: 'NestJS' },
  { icon: <SiPostgresql className="text-[#4169E1]" />, label: 'PostgreSQL' },
  { icon: <SiAmazon className="text-[#FF9900]" />, label: 'AWS' },
  { icon: <SiStripe className="text-[#635BFF]" />, label: 'Stripe' },
  { icon: <SiDocker className="text-[#2496ED]" />, label: 'Docker' },
  { icon: <SiTailwindcss className="text-[#06B6D4]" />, label: 'Tailwind' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero Carousel ── */}
      <HeroCarousel />

      {/* ── Trust Badges ── */}
      <TrustBadges />

      {/* ── Services Grid ── */}
      <section id="services" className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">What We Do</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Our Services</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section id="portfolio" className="section-padding gradient-navy-blue">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-white/10 text-white border border-white/15">
              Our Work
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mt-4 mb-4">
              Featured Projects
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Real solutions we've built for real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/50 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white hover:text-primary-navy transition-all duration-200"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Expertise</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Industries We Serve</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Specialized knowledge across multiple sectors
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <IndustryCard key={ind.title} {...ind} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Technology</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Our Tech Stack</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Modern, proven technologies that deliver results
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-5">
            {techStack.map(({ icon, label }) => (
              <div
                key={label}
                className="clean-card flex flex-col items-center justify-center p-5 min-w-[110px] gap-2.5 hover:scale-105"
              >
                <span className="text-4xl">{icon}</span>
                <span className="text-primary-navy font-semibold text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how we can help you build, protect, and scale your technology."
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonHref="/#services"
      />
    </>
  )
}
