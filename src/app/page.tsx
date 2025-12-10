import Link from 'next/link'
import HeroCarousel from '@/components/HeroCarousel'
import TrustBadges from '@/components/TrustBadges'
import ServiceCard from '@/components/ServiceCard'
import ProjectCard from '@/components/ProjectCard'
import IndustryCard from '@/components/IndustryCard'
import CTASection from '@/components/CTASection'
import { FiCode, FiCheckSquare, FiMonitor, FiServer } from 'react-icons/fi'
import { HiScale, HiOfficeBuilding, HiShieldCheck, HiTruck, HiShoppingCart, HiBriefcase } from 'react-icons/hi'
import { SiReact, SiNextdotjs, SiNestjs, SiPostgresql, SiAmazon, SiStripe, SiTailwindcss } from 'react-icons/si'

export default function Home() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Services Grid */}
      <section id="services" className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-primary-navy mb-4">Our Services</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              icon={<FiServer />}
              title="IT Management Services"
              description="Managed IT support for growing businesses (10-50 users)"
              href="/services/it-management"
            />
            <ServiceCard
              icon={<FiCode />}
              title="Custom Software Development"
              description="Modern web & mobile applications built for scale"
              href="/services/custom-software"
            />
            <ServiceCard
              icon={<FiCheckSquare />}
              title="QA Services & Testing"
              description="Comprehensive testing that ensures quality delivery"
              href="/services/qa-testing"
            />
            <ServiceCard
              icon={<FiMonitor />}
              title="Self-Service Kiosk Solutions"
              description="Digital transformation for retail & financial services"
              href="/services/kiosks"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="portfolio" className="section-padding gradient-navy-blue">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-extrabold text-white mb-4">Featured Projects</h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Real solutions we've built for real businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="CTI Pro Labs"
              description="Laboratory management system for construction testing operations with automated workflows and real-time tracking."
              tags={['React', 'NestJS', 'PostgreSQL', 'PWA']}
              href="/portfolio/cti-pro-labs"
              status="In Development"
            />
            <ProjectCard
              title="CondoLink Platform"
              description="Complete condominium management solution with owner/tenant portals, automated rent collection, and maintenance tracking."
              tags={['Next.js', 'PostgreSQL', 'Stripe']}
              href="/portfolio/condolink"
              status="Active"
            />
            <ProjectCard
              title="CarWash App"
              description="On-demand mobile car wash platform connecting customers with service providers through GPS-based matching."
              tags={['Next.js', 'Stripe Connect', 'GPS']}
              href="/portfolio/carwash"
              status="In Development"
            />
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-primary-navy mb-4">Industries We Serve</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Specialized expertise across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <IndustryCard icon={<HiScale />} title="Legal Firms" />
            <IndustryCard icon={<HiOfficeBuilding />} title="Construction & Architecture" />
            <IndustryCard icon={<HiShieldCheck />} title="Insurance Companies" />
            <IndustryCard icon={<HiTruck />} title="Car Dealerships" />
            <IndustryCard icon={<HiShoppingCart />} title="Retail & Banking" />
            <IndustryCard icon={<HiBriefcase />} title="Small-Medium Businesses" />
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-primary-navy mb-4">Our Tech Stack</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Modern, proven technologies that deliver results
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <div className="glass-card-light p-6 flex flex-col items-center min-h-[120px] min-w-[140px] justify-center group hover:scale-105">
              <SiReact className="text-6xl text-[#61DAFB] mb-2" />
              <span className="text-primary-navy font-semibold">React</span>
            </div>
            <div className="glass-card-light p-6 flex flex-col items-center min-h-[120px] min-w-[140px] justify-center group hover:scale-105">
              <SiNextdotjs className="text-6xl text-black mb-2" />
              <span className="text-primary-navy font-semibold">Next.js</span>
            </div>
            <div className="glass-card-light p-6 flex flex-col items-center min-h-[120px] min-w-[140px] justify-center group hover:scale-105">
              <SiNestjs className="text-6xl text-[#E0234E] mb-2" />
              <span className="text-primary-navy font-semibold">NestJS</span>
            </div>
            <div className="glass-card-light p-6 flex flex-col items-center min-h-[120px] min-w-[140px] justify-center group hover:scale-105">
              <SiPostgresql className="text-6xl text-[#4169E1] mb-2" />
              <span className="text-primary-navy font-semibold">PostgreSQL</span>
            </div>
            <div className="glass-card-light p-6 flex flex-col items-center min-h-[120px] min-w-[140px] justify-center group hover:scale-105">
              <SiAmazon className="text-6xl text-[#FF9900] mb-2" />
              <span className="text-primary-navy font-semibold">AWS</span>
            </div>
            <div className="glass-card-light p-6 flex flex-col items-center min-h-[120px] min-w-[140px] justify-center group hover:scale-105">
              <SiStripe className="text-6xl text-[#635BFF] mb-2" />
              <span className="text-primary-navy font-semibold">Stripe</span>
            </div>
            <div className="glass-card-light p-6 flex flex-col items-center min-h-[120px] min-w-[140px] justify-center group hover:scale-105">
              <SiTailwindcss className="text-6xl text-[#06B6D4] mb-2" />
              <span className="text-primary-navy font-semibold">Tailwind CSS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Ready to Transform Your Business?"
        description="Let's discuss how we can help you build, test, and scale your technology"
        primaryButtonText="Start a Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonHref="/#services"
      />
    </>
  )
}
