import Link from 'next/link'
import Image from 'next/image'
import IndustryCard from '@/components/IndustryCard'
import CTASection from '@/components/CTASection'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import { HiShoppingCart, HiOfficeBuilding, HiScale, HiBriefcase, HiTruck, HiShieldCheck } from 'react-icons/hi'

export const metadata = {
  title: 'Self-Service Kiosk Solutions - BizGen Technologies LLC',
  description: 'Interactive kiosks that reduce wait times, cut labor costs, and improve customer experience for retail, banking, and hospitality.',
}

export default function KiosksPage() {
  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-navy to-primary-blue">
          <Image
            src="/images/services/kiosks/hero.jpg"
            alt="Self-Service Kiosk Solutions - Modern interactive kiosks"
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
              Digital Solutions for Customer Self-Service
            </h1>
            <p className="text-xl text-white/95 leading-relaxed">
              Interactive kiosks that reduce wait times, cut labor costs, and improve customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* What We Build */}
            <div>
              <h3 className="heading-sm text-primary-navy mb-6">What We Build</h3>
              <ul className="space-y-4">
                {[
                  'Check-in & Registration Kiosks',
                  'Payment & Ticketing Systems',
                  'Wayfinding & Directory Kiosks',
                  'Self-Order Food & Retail Kiosks',
                  'Queue Management Systems',
                  'Information & Survey Kiosks',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-success text-xl mt-1 mr-3 flex-shrink-0" />
                    <span className="text-neutral-dark text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="heading-sm text-primary-navy mb-6">Features</h3>
              <ul className="space-y-4">
                {[
                  'Touch-screen interfaces optimized for accessibility',
                  'Payment processing (credit/debit, NFC, cash)',
                  'Receipt & ticket printing',
                  'Barcode & QR code scanning',
                  'Real-time data sync with your backend',
                  'Multi-language support',
                  'Remote monitoring & management',
                  'ADA-compliant designs',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-primary-blue text-lg mt-1 mr-2 flex-shrink-0" />
                    <span className="text-text-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Industries */}
          <div className="mt-12">
            <h3 className="heading-sm text-primary-navy mb-6 text-center">Industries We Serve</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              <IndustryCard icon={<HiShoppingCart />} title="Retail" />
              <IndustryCard icon={<HiOfficeBuilding />} title="Banking" />
              <IndustryCard icon={<HiScale />} title="Government" />
              <IndustryCard icon={<HiBriefcase />} title="Healthcare" />
              <IndustryCard icon={<HiTruck />} title="Hospitality" />
              <IndustryCard icon={<HiShieldCheck />} title="Transportation" />
            </div>
          </div>

          {/* Perfect For */}
          <div className="mt-12 text-center">
            <h3 className="heading-sm text-primary-navy mb-4">Perfect For</h3>
            <p className="text-text-gray text-lg max-w-3xl mx-auto">
              Businesses with high foot traffic that want to reduce staffing costs, minimize wait times, and provide 24/7 service options.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Transform Your Customer Experience"
        description="Let's discuss your self-service kiosk needs"
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
      />
    </>
  )
}
