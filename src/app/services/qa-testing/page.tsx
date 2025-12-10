import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'

export const metadata = {
  title: 'QA Services & Testing - BizGen Technologies LLC',
  description: 'Comprehensive quality assurance and testing services that catch issues before your customers do.',
}

export default function QATestingPage() {
  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy to-primary-blue">
          <Image
            src="/images/services/qa-testing/hero.jpg"
            alt="QA Services & Testing - Quality assurance team testing software"
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
              Quality Assurance That Protects Your Reputation
            </h1>
            <p className="text-xl text-white/95 leading-relaxed">
              Comprehensive testing services that catch issues before your customers do.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What We Offer */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="heading-sm text-primary-navy mb-6">What We Offer</h3>
              <ul className="space-y-3">
                {[
                  'Functional Testing',
                  'Regression Testing',
                  'Performance & Load Testing',
                  'Security Testing',
                  'Mobile App Testing (iOS & Android)',
                  'Cross-Browser Compatibility Testing',
                  'API Testing',
                  'User Acceptance Testing (UAT) Support',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-success text-xl mt-1 mr-3 flex-shrink-0" />
                    <span className="text-neutral-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Approach */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="heading-sm text-primary-navy mb-6">Our Approach</h3>
              <div className="space-y-4">
                <p className="text-text-gray">
                  We don't just click through your app - we think like your users and try to break things. Our testers document every bug with detailed reproduction steps, screenshots, and severity ratings.
                </p>
                <p className="text-text-gray">
                  You'll receive organized reports that prioritize issues and provide clear guidance for developers.
                </p>
              </div>

              <div className="mt-6 border-t border-gray-200 pt-6">
                <h4 className="font-bold text-primary-navy mb-3">Deliverables</h4>
                <ul className="space-y-2">
                  {[
                    'Detailed bug reports with reproduction steps',
                    'Test case documentation',
                    'Priority and severity classifications',
                    'Screen recordings & screenshots',
                    'Final QA sign-off report',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <FiCheck className="text-primary-blue text-lg mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-text-gray text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Perfect For */}
          <div className="mt-12 text-center bg-white p-8 rounded-lg shadow-md">
            <h3 className="heading-sm text-primary-navy mb-4">Perfect For</h3>
            <p className="text-text-gray text-lg max-w-3xl mx-auto">
              Development teams launching new features, agencies delivering client projects, or businesses that need an independent QA perspective before release.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ensure Quality Before Launch"
        description="Let's protect your reputation with thorough testing"
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
      />
    </>
  )
}
