import Link from 'next/link'
import TechStack from '@/components/TechStack'
import CTASection from '@/components/CTASection'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'

export const metadata = {
  title: 'CarWash Platform - On-Demand Mobile Car Wash | BizGen Technologies',
  description: 'On-demand mobile car wash platform connecting customers with service providers through GPS-based matching.',
}

export default function CarWashPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-navy to-primary-blue section-padding">
        <div className="container-custom">
          <Link href="/#portfolio" className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors">
            <FiArrowLeft className="mr-2" />
            Back to Portfolio
          </Link>
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h1 className="heading-xl text-white mb-4 md:mb-0">CarWash Platform</h1>
              <span className="bg-warning/20 text-warning px-4 py-2 rounded-full font-bold inline-block w-fit">
                In Development
              </span>
            </div>
            <p className="text-gray-200 text-xl">
              On-Demand Mobile Car Wash - Connecting customers with service providers
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="section-padding bg-white">
        <div className="container-custom">
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
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="heading-sm text-primary-navy mb-4">Business Model</h3>
            <p className="text-text-gray leading-relaxed">
              Platform charges 20% commission on each completed service. Providers receive 80% of payment directly through Stripe Connect, with instant or scheduled payouts. No subscription fees - we only make money when providers make money.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Building a Marketplace Platform?"
        description="Let's create a custom solution for your on-demand service business"
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View More Projects"
        secondaryButtonHref="/#portfolio"
      />
    </>
  )
}
