import TechStack from '@/components/TechStack'
import CTASection from '@/components/CTASection'
import { FiCheck } from 'react-icons/fi'

export const metadata = {
  title: 'Portfolio - BizGen Technologies LLC',
  description: 'Explore our custom software development projects including CTI Pro Labs, CondoLink, and CarWash platforms.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-navy to-primary-blue section-padding">
        <div className="container-custom text-center">
          <h1 className="heading-xl text-white mb-6">
            Our Work
          </h1>
          <p className="text-gray-200 text-xl max-w-3xl mx-auto">
            Real solutions we've built for real businesses. Explore our case studies to see how we solve complex problems with technology.
          </p>
        </div>
      </section>

      {/* PROJECT 1: CTI Pro Labs */}
      <section id="cti-pro-labs" className="section-padding bg-white">
        <div className="container-custom">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="heading-lg text-primary-navy">CTI Pro Labs</h2>
              <span className="bg-warning/10 text-warning px-4 py-2 rounded-full font-bold">
                In Development
              </span>
            </div>
            <p className="text-text-gray text-xl">
              Laboratory Management System - Modernizing construction testing operations
            </p>
          </div>

          {/* Placeholder Image */}
          <div className="bg-gradient-to-br from-primary-blue to-secondary-cyan h-96 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-white text-8xl opacity-50">🔬</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Challenge */}
            <div>
              <h3 className="heading-sm text-primary-navy mb-4">The Challenge</h3>
              <p className="text-text-gray mb-4 leading-relaxed">
                CTI Pro Labs, a construction materials testing laboratory, was managing operations across multiple disconnected systems - spreadsheets, paper forms, and legacy software that didn't communicate.
              </p>
              <p className="text-text-gray leading-relaxed">
                Their field technicians needed offline access to work orders, the lab needed automated calculations, and clients wanted real-time visibility into testing status.
              </p>
            </div>

            {/* Our Solution */}
            <div>
              <h3 className="heading-sm text-primary-navy mb-4">Our Solution</h3>
              <p className="text-text-gray mb-4 leading-relaxed">
                We built a comprehensive Progressive Web App (PWA) that connects field operations, laboratory testing, client portals, and back-office administration into one unified system.
              </p>
              <p className="text-text-gray leading-relaxed">
                The offline-capable mobile app lets technicians work without internet, automatically syncing when connectivity returns. Automated calculations reduce errors, and real-time notifications keep everyone informed.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-12">
            <h3 className="heading-sm text-primary-navy mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Work order management with automated assignment',
                'Digital chain of custody (GPS-verified)',
                'Offline-capable mobile app for field technicians',
                'Laboratory testing module with auto-calculations',
                'PE-stamped engineering certifications',
                'Client self-service portal',
                'HR management (certifications, time tracking)',
                'QuickBooks integration for billing',
                'Real-time notifications',
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <FiCheck className="text-success text-xl mt-1 mr-3 flex-shrink-0" />
                  <span className="text-neutral-dark">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 bg-neutral-light p-8 rounded-lg">
            <h3 className="heading-sm text-primary-navy mb-6">Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TechStack
                title="Frontend"
                technologies={['React 18 + Vite', 'Tailwind CSS', 'PWA']}
              />
              <TechStack
                title="Backend"
                technologies={['NestJS', 'RESTful API']}
              />
              <TechStack
                title="Database"
                technologies={['PostgreSQL', 'Supabase']}
              />
              <TechStack
                title="Infrastructure"
                technologies={['AWS', 'Docker']}
              />
              <TechStack
                title="Integrations"
                technologies={['SendGrid', 'Google Maps API', 'QuickBooks']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT 2: CondoLink Platform */}
      <section id="condolink" className="section-padding bg-neutral-light">
        <div className="container-custom">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="heading-lg text-primary-navy">CondoLink Platform</h2>
              <span className="bg-success/10 text-success px-4 py-2 rounded-full font-bold">
                Active / Upgrading
              </span>
            </div>
            <p className="text-text-gray text-xl">
              Condominium Management Platform - Complete property management solution
            </p>
          </div>

          {/* Placeholder Image */}
          <div className="bg-gradient-to-br from-secondary-cyan to-primary-blue h-96 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-white text-8xl opacity-50">🏢</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Challenge */}
            <div>
              <h3 className="heading-sm text-primary-navy mb-4">The Challenge</h3>
              <p className="text-text-gray mb-4 leading-relaxed">
                Property managers were juggling multiple tools for rent collection, maintenance requests, owner/tenant communications, and financial reporting. Manual processes led to delays, missed payments, and frustrated residents.
              </p>
            </div>

            {/* Our Solution */}
            <div>
              <h3 className="heading-sm text-primary-navy mb-4">Our Solution</h3>
              <p className="text-text-gray mb-4 leading-relaxed">
                A comprehensive platform that centralizes all property management operations. Automated rent collection with Stripe, maintenance request tracking, document management, and self-service portals for owners and tenants.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-12">
            <h3 className="heading-sm text-primary-navy mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Owner & tenant management',
                'Automated rent collection (Stripe)',
                'Maintenance request tracking',
                'Document storage & sharing',
                'Financial reporting & analytics',
                'Community announcements',
                'Visitor management',
                'Meeting & event scheduling',
                'Board member portal',
                'Mobile-responsive design',
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <FiCheck className="text-success text-xl mt-1 mr-3 flex-shrink-0" />
                  <span className="text-neutral-dark">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="heading-sm text-primary-navy mb-6">Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TechStack
                title="Frontend"
                technologies={['Next.js', 'Tailwind CSS']}
              />
              <TechStack
                title="Backend"
                technologies={['Next.js API Routes', 'RESTful API']}
              />
              <TechStack
                title="Database"
                technologies={['PostgreSQL']}
              />
              <TechStack
                title="Payments"
                technologies={['Stripe', 'Automated ACH']}
              />
              <TechStack
                title="Infrastructure"
                technologies={['AWS', 'S3 Storage']}
              />
            </div>
          </div>

          {/* Results */}
          <div className="mt-12">
            <h3 className="heading-sm text-primary-navy mb-4">Results</h3>
            <p className="text-text-gray leading-relaxed">
              Property managers save 10+ hours per week on administrative tasks. Rent collection has increased to 98% on-time payments through automation. Residents report improved communication and satisfaction with the self-service portal.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT 3: CarWash App */}
      <section id="carwash" className="section-padding bg-white">
        <div className="container-custom">
          {/* Project Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="heading-lg text-primary-navy">CarWash Platform</h2>
              <span className="bg-warning/10 text-warning px-4 py-2 rounded-full font-bold">
                In Development
              </span>
            </div>
            <p className="text-text-gray text-xl">
              On-Demand Mobile Car Wash - Connecting customers with service providers
            </p>
          </div>

          {/* Placeholder Image */}
          <div className="bg-gradient-to-br from-primary-blue to-primary-navy h-96 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-white text-8xl opacity-50">🚗</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* The Challenge */}
            <div>
              <h3 className="heading-sm text-primary-navy mb-4">The Challenge</h3>
              <p className="text-text-gray mb-4 leading-relaxed">
                Creating a marketplace that connects customers needing car wash services with mobile detailers. The platform needed real-time GPS matching, split payment processing, and a rating system to ensure quality.
              </p>
            </div>

            {/* Our Solution */}
            <div>
              <h3 className="heading-sm text-primary-navy mb-4">Our Solution</h3>
              <p className="text-text-gray mb-4 leading-relaxed">
                A dual-sided platform (customer app + provider app) with GPS-based matching, Stripe Connect for payment splitting (80% to provider, 20% platform fee), real-time job tracking, and a comprehensive rating/review system.
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="mt-12">
            <h3 className="heading-sm text-primary-navy mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'GPS-based matching (customers & providers)',
                'Real-time job tracking',
                'Stripe Connect integration (80/20 split)',
                'Service provider profiles & portfolios',
                'Multi-tier service packages',
                'Rating & review system',
                'Push notifications',
                'Automated invoicing',
                'Provider earnings dashboard',
                'Customer booking history',
                'In-app messaging',
                'Scheduling & calendar integration',
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <FiCheck className="text-success text-xl mt-1 mr-3 flex-shrink-0" />
                  <span className="text-neutral-dark">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 bg-neutral-light p-8 rounded-lg">
            <h3 className="heading-sm text-primary-navy mb-6">Tech Stack</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TechStack
                title="Frontend"
                technologies={['Next.js', 'Tailwind CSS', 'React Native']}
              />
              <TechStack
                title="Backend"
                technologies={['Next.js API Routes', 'RESTful API']}
              />
              <TechStack
                title="Database"
                technologies={['PostgreSQL', 'PostGIS (GPS)']}
              />
              <TechStack
                title="Payments"
                technologies={['Stripe Connect', 'Split Payments']}
              />
              <TechStack
                title="Maps & Location"
                technologies={['Google Maps API', 'Geolocation']}
              />
              <TechStack
                title="Infrastructure"
                technologies={['AWS', 'Push Notifications']}
              />
            </div>
          </div>

          {/* Business Model */}
          <div className="mt-12">
            <h3 className="heading-sm text-primary-navy mb-4">Business Model</h3>
            <p className="text-text-gray leading-relaxed">
              Platform charges 20% commission on each completed service. Providers receive 80% of payment directly through Stripe Connect, with instant or scheduled payouts. No subscription fees - we only make money when providers make money.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Want to See Your Project Here?"
        description="Let's build something amazing together"
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonHref="/services"
      />
    </>
  )
}
