import Link from 'next/link'
import TechStack from '@/components/TechStack'
import CTASection from '@/components/CTASection'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'

export const metadata = {
  title: 'CondoLink Platform - Condominium Management | BizGen Technologies',
  description: 'Complete condominium management solution with owner/tenant portals, automated rent collection, and maintenance tracking.',
}

export default function CondoLinkPage() {
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
              <h1 className="heading-xl text-white mb-4 md:mb-0">CondoLink Platform</h1>
              <span className="bg-success/20 text-success px-4 py-2 rounded-full font-bold inline-block w-fit">
                Active / Upgrading
              </span>
            </div>
            <p className="text-gray-200 text-xl">
              Condominium Management Platform - Complete property management solution
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
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
          <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
            <h3 className="heading-sm text-primary-navy mb-4">Results</h3>
            <p className="text-text-gray leading-relaxed">
              Property managers save 10+ hours per week on administrative tasks. Rent collection has increased to 98% on-time payments through automation. Residents report improved communication and satisfaction with the self-service portal.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Need a Property Management Solution?"
        description="Let's build a custom platform for your business"
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View More Projects"
        secondaryButtonHref="/#portfolio"
      />
    </>
  )
}
