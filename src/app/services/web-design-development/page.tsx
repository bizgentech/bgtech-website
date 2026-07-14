import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FeaturedProjectCard from '@/components/FeaturedProjectCard'
import { featuredProjects } from '@/lib/projects'
import {
  Check,
  Globe,
  RefreshCw,
  LayoutTemplate,
  ShoppingCart,
  BookOpen,
  FileText,
  MessageCircle,
  Wrench,
  Code2,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Design & Development for Small Businesses in South Florida',
  description:
    'Professional business website design and development in Miami and Broward — websites built to build credibility, showcase services, and generate more inquiries.',
  alternates: { canonical: 'https://www.bgtecnologies.com/services/web-design-development/' },
}

const services = [
  { icon: Globe, title: 'New Business Websites', desc: 'Modern, professional websites that present your business clearly and build trust from the first visit.' },
  { icon: RefreshCw, title: 'Website Redesign', desc: 'Refresh an outdated site with a cleaner design, better structure, and stronger calls to action.' },
  { icon: LayoutTemplate, title: 'Landing Pages', desc: 'Focused, single-purpose pages built to promote an offer, service, or campaign.' },
  { icon: ShoppingCart, title: 'Ecommerce', desc: 'Online stores that let customers browse, order, and pay — set up to match how you sell.' },
  { icon: BookOpen, title: 'Product & Service Catalogs', desc: 'Organized, easy-to-browse catalogs that showcase what you offer.' },
  { icon: FileText, title: 'Quote Request Forms', desc: 'Simple, reliable forms that turn visitors into real inquiries and leads.' },
  { icon: MessageCircle, title: 'WhatsApp & Contact Integrations', desc: 'Direct WhatsApp, email, and contact options so customers can reach you instantly.' },
  { icon: Wrench, title: 'Hosting & Maintenance', desc: 'Ongoing hosting, updates, and maintenance to keep your site fast and secure.' },
  { icon: Code2, title: 'Custom Web Functionality', desc: 'Custom features built when your business needs something beyond a standard website.' },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'We learn about your business, your goals, and what your customers need from the site.' },
  { step: '02', title: 'Content & Design', desc: 'We shape the structure, content, and design into a clear, professional presentation.' },
  { step: '03', title: 'Review', desc: 'You review the site, we refine the details, and we get everything right before launch.' },
  { step: '04', title: 'Launch', desc: 'We publish the site and make sure everything works across devices.' },
]

const options = [
  { title: 'Landing Page', desc: 'A single, focused page to promote one offer, service, or campaign.' },
  { title: 'Business Website', desc: 'A multi-page website that presents your services, builds credibility, and generates inquiries.' },
  { title: 'Ecommerce or Custom Website', desc: 'An online store or a website with custom functionality tailored to how your business works.' },
]

export default function WebDesignDevelopmentPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[520px] flex items-center bg-primary-navy">
        <div className="absolute inset-0">
          <Image
            src="/images/services/software-dev-hero.jpeg"
            alt="Web design and development for small businesses"
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
              Web Design &amp; Development
            </span>
            <h1 className="heading-xl text-white mb-5">
              Websites That Help<br />Your Business Grow
            </h1>
            <p className="text-white/80 text-xl leading-relaxed mb-8">
              Professional websites designed to help local businesses build credibility, showcase
              their services, and generate more inquiries.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary-blue text-white font-bold px-7 py-3.5 rounded-xl shadow hover:bg-blue-600 transition-colors">
                Request a Website Consultation <ArrowRight size={16} />
              </Link>
              <Link href="#work" className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/10 transition-colors">
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">What We Offer</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Web Design &amp; Development Services</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Everything a growing business needs to build a professional presence online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
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

      {/* ── Featured Work ── */}
      <section id="work" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Featured Work</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Recent Client Websites</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Real websites we&apos;ve built for South Florida businesses.
            </p>
          </div>
          <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
            {featuredProjects.map((p, i) => (
              <FeaturedProjectCard key={p.title} {...p} reverse={i % 2 === 1} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">How It Works</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Our Process</h2>
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

      {/* ── Project Options ── */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Project Options</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Where You Can Start</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {options.map(({ title, desc }) => (
              <div key={title} className="clean-card p-8">
                <h3 className="text-lg font-bold text-primary-navy mb-3">{title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-text-gray text-sm mt-8 max-w-2xl mx-auto">
            Projects start from an initial consultation and a defined scope, so you know exactly
            what&apos;s included before we begin.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding gradient-blue-cyan">
        <div className="container-custom text-center max-w-3xl">
          <h2 className="heading-lg text-white mb-4">Ready to Build Your Website?</h2>
          <p className="text-white/85 text-lg mb-8">
            Let&apos;s talk about your business and what your website needs to do for you.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary-blue font-bold px-8 py-4 rounded-xl text-base shadow hover:bg-blue-50 transition-colors"
          >
            Request a Website Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
