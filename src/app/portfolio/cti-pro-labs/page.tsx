import Link from 'next/link'
import TechStack from '@/components/TechStack'
import CTASection from '@/components/CTASection'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'

export const metadata = {
  title: 'CTI Pro Labs - Laboratory Management System | BizGen Technologies',
  description: 'Laboratory management system for construction testing operations with automated workflows and real-time tracking.',
}

export default function CTIProLabsPage() {
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
              <h1 className="heading-xl text-white mb-4 md:mb-0">CTI Pro Labs</h1>
              <span className="bg-warning/20 text-warning px-4 py-2 rounded-full font-bold inline-block w-fit">
                In Development
              </span>
            </div>
            <p className="text-gray-200 text-xl">
              Laboratory Management System - Modernizing construction testing operations
            </p>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="section-padding bg-white">
        <div className="container-custom">
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

      {/* CTA */}
      <CTASection
        title="Need a Custom Solution Like This?"
        description="Let's discuss how we can build software tailored to your industry"
        primaryButtonText="Start Your Project"
        primaryButtonHref="/contact"
        secondaryButtonText="View More Projects"
        secondaryButtonHref="/#portfolio"
      />
    </>
  )
}
