import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'

export const metadata = {
  title: 'IT Management Services (MSP) - BizGen Technologies LLC',
  description: 'Enterprise-level IT support at a fraction of the cost. Get an entire IT team for the price of one engineer.',
}

export default function ITManagementPage() {
  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy to-primary-blue">
          <Image
            src="/images/services/it-management/hero-it-team.jpg"
            alt="IT Management Services - Professional IT support team"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.7) 40%, rgba(15, 23, 42, 0.5) 70%, transparent 100%)',
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="container-custom relative z-10 py-20 md:py-24">
          <div className="w-[90%] mx-auto md:mx-0 md:ml-[4%] lg:ml-[5%] max-w-[650px] bg-white/8 backdrop-blur-[12px] border border-white/15 rounded-[20px] p-6 md:p-8 lg:p-10">
            <Link href="/#services" className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors">
              <FiArrowLeft className="mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              Enterprise-Level IT Support at a Fraction of the Cost
            </h1>
            <p className="text-xl text-white/95 leading-relaxed">
              Get an entire IT company for the price of one engineer
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-warning/20 to-success/20 border-2 border-warning rounded-lg p-8 mb-12 max-w-5xl mx-auto">
            <p className="text-neutral-dark text-lg mb-6 leading-relaxed">
              Hiring a full-time IT engineer costs <span className="font-bold text-warning">$70K-100K+ per year</span>. With BG Tech's managed services, you get an <span className="font-bold text-success">entire team of specialists for less than one employee's salary</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Team of Microsoft experts',
                'Hardware specialists on demand',
                '24/7 coverage (no vacation gaps)',
                'No benefits, training, or HR overhead',
                'Predictable monthly costs',
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <FiCheck className="text-success text-2xl mr-3 flex-shrink-0" />
                  <span className="text-neutral-dark font-semibold">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* What We Manage */}
            <div>
              <h3 className="heading-sm text-primary-navy mb-6">What We Manage</h3>
              <ul className="space-y-3">
                {[
                  'Microsoft 365 administration',
                  'Network infrastructure',
                  'Cybersecurity & compliance',
                  'Workstation & server management',
                  'Backup & disaster recovery',
                  'Help desk support',
                  'Software licensing & procurement',
                  'Print management',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-success text-xl mt-1 mr-3 flex-shrink-0" />
                    <span className="text-neutral-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Specialties - Part 1 */}
            <div>
              <h3 className="heading-sm text-primary-navy mb-6">Our Specialties</h3>

              {/* Microsoft Experts */}
              <div className="mb-6">
                <h4 className="font-bold text-lg text-primary-blue mb-2">Microsoft Administration Experts</h4>
                <ul className="space-y-2 ml-4">
                  {[
                    'Microsoft 365 / Azure AD management',
                    'Exchange Online & Teams administration',
                    'SharePoint & OneDrive configuration',
                    'Licensing optimization',
                    'Security & compliance setup',
                  ].map((item, index) => (
                    <li key={index} className="text-text-gray text-sm">• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Hardware Expertise */}
              <div>
                <h4 className="font-bold text-lg text-primary-blue mb-2">Hardware Expertise</h4>
                <ul className="space-y-2 ml-4">
                  {[
                    'Workstation & server deployment',
                    'Hardware troubleshooting & repair',
                    'Vendor management & procurement',
                    'Asset lifecycle management',
                  ].map((item, index) => (
                    <li key={index} className="text-text-gray text-sm">• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Our Specialties - Part 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Problem Solvers */}
            <div>
              <h4 className="font-bold text-lg text-primary-blue mb-2">Outstanding Problem Solvers</h4>
              <ul className="space-y-2 ml-4">
                {[
                  'Complex technical issue resolution',
                  'Root cause analysis',
                  'System optimization',
                  'Custom scripting & automation',
                  'Multi-vendor environment support',
                ].map((item, index) => (
                  <li key={index} className="text-text-gray text-sm">• {item}</li>
                ))}
              </ul>
            </div>

            {/* Print Management */}
            <div>
              <h4 className="font-bold text-lg text-primary-blue mb-2">Print Management Consulting</h4>
              <ul className="space-y-2 ml-4">
                {[
                  'Fleet optimization & cost reduction',
                  'Printer selection & deployment',
                  'Managed print services',
                ].map((item, index) => (
                  <li key={index} className="text-text-gray text-sm">• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Cost Comparison */}
          <div className="bg-neutral-light rounded-lg p-8 mb-12 max-w-4xl mx-auto">
            <h3 className="heading-sm text-primary-navy mb-6 text-center">Why Choose Managed IT?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="text-center bg-white p-6 rounded-lg">
                <div className="text-4xl mb-2">❌</div>
                <h4 className="font-bold text-lg mb-2 text-neutral-dark">In-House IT Engineer</h4>
                <p className="text-text-gray">$80K/year + benefits = <span className="text-warning font-bold">$100K+</span></p>
              </div>
              <div className="text-center bg-white p-6 rounded-lg border-2 border-success">
                <div className="text-4xl mb-2">✅</div>
                <h4 className="font-bold text-lg mb-2 text-neutral-dark">BG Tech MSP</h4>
                <p className="text-text-gray">Full team for <span className="text-success font-bold">less</span></p>
              </div>
            </div>
          </div>

          {/* Service Levels */}
          <div className="mb-12">
            <h3 className="heading-sm text-primary-navy mb-6 text-center">Service Levels</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: 'Essential',
                  users: '10-20 users',
                  features: ['Email & Teams support', 'Basic security', 'Help desk (business hours)', 'Monthly reporting'],
                },
                {
                  name: 'Professional',
                  users: '20-35 users',
                  features: ['Everything in Essential', 'Advanced security', 'Priority support', 'Proactive monitoring'],
                  highlight: true,
                },
                {
                  name: 'Enterprise',
                  users: '35-50+ users',
                  features: ['Everything in Professional', '24/7 support', 'Dedicated account manager', 'Custom SLAs'],
                },
              ].map((tier) => (
                <div
                  key={tier.name}
                  className={`${
                    tier.highlight
                      ? 'bg-gradient-to-br from-primary-blue to-secondary-cyan text-white'
                      : 'bg-neutral-light text-neutral-dark'
                  } rounded-lg p-6 ${tier.highlight ? 'scale-105 shadow-2xl' : 'shadow-md'}`}
                >
                  <h4 className="font-bold text-xl mb-2">{tier.name}</h4>
                  <p className={`${tier.highlight ? 'text-gray-100' : 'text-text-gray'} mb-4`}>{tier.users}</p>
                  <ul className="space-y-2">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <FiCheck className={`${tier.highlight ? 'text-white' : 'text-success'} mt-0.5 mr-2 flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Perfect For */}
          <div className="text-center">
            <h3 className="heading-sm text-primary-navy mb-4">Perfect For</h3>
            <p className="text-text-gray text-lg max-w-3xl mx-auto">
              Growing businesses (10-50 employees) that need reliable IT support without the overhead of hiring full-time staff. Ideal for companies using Microsoft 365, cloud services, or hybrid environments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Get Enterprise IT at a Fraction of the Cost"
        description="Let's discuss your IT needs and how we can help"
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
      />
    </>
  )
}
