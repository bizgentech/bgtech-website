import IndustryCard from '@/components/IndustryCard'
import CTASection from '@/components/CTASection'
import { FiCheck } from 'react-icons/fi'
import { HiScale, HiOfficeBuilding, HiShieldCheck, HiTruck, HiShoppingCart, HiBriefcase } from 'react-icons/hi'

export const metadata = {
  title: 'About Us - BizGen Technologies LLC',
  description: 'Learn about BizGen Technologies LLC, a Fort Lauderdale-based software development and IT services company.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-blue-cyan section-padding">
        <div className="container-custom">
          <div className="glass-card max-w-4xl mx-auto p-8 md:p-12 text-center">
            <h1 className="heading-xl text-white mb-6">
              Building Technology That Works
            </h1>
            <p className="text-white/90 text-xl leading-relaxed">
              We're a Fort Lauderdale-based technology company focused on solving real business problems with custom software and managed IT services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-primary-navy mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-text-gray text-lg leading-relaxed">
              <p>
                BizGen Technologies LLC (BG Tech) was founded with a simple mission: build technology solutions that actually solve business problems. No unnecessary complexity, no over-engineered systems - just practical, scalable software that helps businesses grow.
              </p>
              <p>
                Based in Fort Lauderdale, Florida, we've worked with businesses across multiple industries - from construction testing laboratories to property management companies, from retail to financial services. Each project teaches us something new, and we bring that experience to every client.
              </p>
              <p>
                We believe good technology should fade into the background. It should make your work easier, your processes more efficient, and your business more profitable. That's what we build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-primary-navy mb-12 text-center">What We Do</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Custom Software Development */}
            <div className="glass-card-light p-8">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">Custom Software Development</h3>
              <p className="text-text-gray mb-4">
                We build web and mobile applications tailored to your exact requirements. From concept to deployment, we handle the entire development lifecycle.
              </p>
              <ul className="space-y-2">
                {[
                  'Progressive Web Apps (PWA)',
                  'Enterprise Software',
                  'API Development',
                  'Payment Integration',
                  'Legacy Modernization',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-success text-lg mt-1 mr-2 flex-shrink-0" />
                    <span className="text-neutral-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* QA & Testing */}
            <div className="glass-card-light p-8">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">QA Services & Testing</h3>
              <p className="text-text-gray mb-4">
                Comprehensive testing services that catch issues before they reach your customers. We test across devices, browsers, and scenarios.
              </p>
              <ul className="space-y-2">
                {[
                  'Functional Testing',
                  'Regression Testing',
                  'Performance Testing',
                  'Security Testing',
                  'Mobile App Testing',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-success text-lg mt-1 mr-2 flex-shrink-0" />
                    <span className="text-neutral-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Self-Service Kiosks */}
            <div className="glass-card-light p-8">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">Self-Service Kiosk Solutions</h3>
              <p className="text-text-gray mb-4">
                Interactive kiosks for retail, banking, and hospitality. Reduce wait times, cut labor costs, and improve customer experience.
              </p>
              <ul className="space-y-2">
                {[
                  'Check-in Systems',
                  'Payment Kiosks',
                  'Wayfinding Solutions',
                  'Self-Order Systems',
                  'Queue Management',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-success text-lg mt-1 mr-2 flex-shrink-0" />
                    <span className="text-neutral-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* IT Management */}
            <div className="glass-card-light p-8">
              <h3 className="text-2xl font-bold text-primary-navy mb-4">IT Management Services (MSP)</h3>
              <p className="text-text-gray mb-4">
                Managed IT support for businesses with 10-50 users. Get an entire IT team for less than the cost of one full-time employee.
              </p>
              <ul className="space-y-2">
                {[
                  'Microsoft 365 Administration',
                  'Network Management',
                  'Cybersecurity',
                  'Help Desk Support',
                  'Hardware Support',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-success text-lg mt-1 mr-2 flex-shrink-0" />
                    <span className="text-neutral-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <h2 className="heading-lg text-primary-navy mb-12 text-center">Our Approach</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '1',
                title: 'Listen First',
                description: 'We start every project by understanding your business, your challenges, and your goals. No assumptions.',
              },
              {
                number: '2',
                title: 'Plan Thoughtfully',
                description: 'We create detailed roadmaps and technical specifications so everyone knows what we\'re building and why.',
              },
              {
                number: '3',
                title: 'Build Iteratively',
                description: 'Regular updates, continuous feedback, and agile development keep projects on track and on budget.',
              },
              {
                number: '4',
                title: 'Support Completely',
                description: 'Launch is just the beginning. We provide ongoing support, maintenance, and enhancements.',
              },
            ].map((approach) => (
              <div key={approach.number} className="text-center">
                <div className="bg-gradient-to-br from-primary-blue to-secondary-cyan w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {approach.number}
                </div>
                <h3 className="text-xl font-bold text-primary-navy mb-3">{approach.title}</h3>
                <p className="text-text-gray">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-primary-navy mb-12 text-center">Industries We Serve</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8">
            <IndustryCard icon={<HiScale />} title="Legal Firms" />
            <IndustryCard icon={<HiOfficeBuilding />} title="Construction & Architecture" />
            <IndustryCard icon={<HiShieldCheck />} title="Insurance Companies" />
            <IndustryCard icon={<HiTruck />} title="Car Dealerships" />
            <IndustryCard icon={<HiShoppingCart />} title="Retail & Banking" />
            <IndustryCard icon={<HiBriefcase />} title="Small-Medium Businesses" />
          </div>

          <p className="text-text-gray text-lg text-center max-w-3xl mx-auto">
            We've worked across multiple industries and bring that cross-sector experience to every project. Your industry might be unique, but the problems - inefficient processes, data silos, scaling challenges - are often similar. We know how to solve them.
          </p>
        </div>
      </section>

      {/* Optional Team Section - Placeholder */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <h2 className="heading-lg text-primary-navy mb-6 text-center">Our Team</h2>
          <p className="text-text-gray text-lg text-center max-w-3xl mx-auto mb-12">
            We're a team of experienced developers, QA specialists, IT professionals, and problem solvers. We've built systems for Fortune 500 companies and small businesses alike. Every project gets the same attention to detail.
          </p>

          {/* Placeholder for team member cards */}
          <div className="glass-card-light p-12 text-center">
            <p className="text-gray-600 italic">Team member profiles coming soon</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Let's Work Together"
        description="Ready to discuss your project? We'd love to hear from you."
        primaryButtonText="Get In Touch"
        primaryButtonHref="/contact"
        secondaryButtonText="View Our Services"
        secondaryButtonHref="/#services"
      />
    </>
  )
}
