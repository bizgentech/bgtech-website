import Link from 'next/link'
import Image from 'next/image'
import CTASection from '@/components/CTASection'
import { FiCheck, FiArrowLeft } from 'react-icons/fi'
import { SiReact, SiNextdotjs, SiNestjs, SiPostgresql, SiAmazon, SiStripe, SiTailwindcss, SiDocker, SiNodedotjs } from 'react-icons/si'
import { DiNodejs } from 'react-icons/di'

export const metadata = {
  title: 'Custom Software Development - BizGen Technologies LLC',
  description: 'Modern, scalable custom software development services. We build web and mobile applications that streamline operations and accelerate growth.',
}

export default function CustomSoftwarePage() {
  return (
    <>
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-secondary-cyan">
          <Image
            src="/images/services/software-development/hero.jpg"
            alt="Custom Software Development - Modern development team"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.7) 40%, rgba(15, 23, 42, 0.5) 70%, transparent 100%)',
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10 py-20 md:py-24">
          <div className="w-[90%] mx-auto md:mx-0 md:ml-[4%] lg:ml-[5%] max-w-[650px] bg-white/8 backdrop-blur-[12px] border border-white/15 rounded-[20px] p-6 md:p-8 lg:p-10">
            <Link href="/#services" className="inline-flex items-center text-white hover:text-gray-200 mb-6 transition-colors">
              <FiArrowLeft className="mr-2" />
              Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight mb-6" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}>
              Custom Software That Solves Real Problems
            </h1>
            <p className="text-xl text-white/95 leading-relaxed">
              We build modern, scalable applications that streamline operations, reduce costs, and accelerate growth.
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
              <h2 className="heading-md text-primary-navy mb-6">What We Build</h2>
              <ul className="space-y-4">
                {[
                  'Cloud-Based Enterprise Solutions',
                  'Progressive Web Apps (PWA) - Offline-Capable',
                  'Mobile Applications',
                  'API Development & Integration',
                  'Legacy System Modernization',
                  'Payment Gateway Integration',
                  'Real-Time Data Systems',
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <FiCheck className="text-success text-xl mt-1 mr-3 flex-shrink-0" />
                    <span className="text-neutral-dark text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Process */}
            <div>
              <h2 className="heading-md text-primary-navy mb-6">Our Process</h2>
              <div className="space-y-6">
                {[
                  {
                    step: '1',
                    title: 'Discovery & Planning',
                    description: 'We analyze your needs, define requirements, and create a detailed roadmap.',
                  },
                  {
                    step: '2',
                    title: 'Design & Architecture',
                    description: 'UI/UX design and technical architecture planning for scalability.',
                  },
                  {
                    step: '3',
                    title: 'Development & Testing',
                    description: 'Agile development with continuous integration and thorough testing.',
                  },
                  {
                    step: '4',
                    title: 'Deployment & Support',
                    description: 'Smooth launch with ongoing maintenance and feature enhancements.',
                  },
                ].map((process) => (
                  <div key={process.step} className="flex">
                    <div className="bg-primary-blue text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-navy text-lg mb-1">{process.title}</h3>
                      <p className="text-text-gray">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mt-12 bg-neutral-light p-8 rounded-lg">
            <h3 className="heading-sm text-primary-navy mb-6 text-center">Our Tech Stack</h3>
            <p className="text-text-gray text-center mb-8 max-w-2xl mx-auto">
              Modern, proven technologies that deliver results
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="flex flex-col items-center group">
                <SiReact className="text-6xl text-[#61DAFB] group-hover:scale-110 transition-transform" />
                <span className="text-text-gray mt-2 font-semibold">React</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiNextdotjs className="text-6xl text-black group-hover:scale-110 transition-transform" />
                <span className="text-text-gray mt-2 font-semibold">Next.js</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiTailwindcss className="text-6xl text-[#06B6D4] group-hover:scale-110 transition-transform" />
                <span className="text-text-gray mt-2 font-semibold">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiNestjs className="text-6xl text-[#E0234E] group-hover:scale-110 transition-transform" />
                <span className="text-text-gray mt-2 font-semibold">NestJS</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiNodedotjs className="text-6xl text-[#339933] group-hover:scale-110 transition-transform" />
                <span className="text-text-gray mt-2 font-semibold">Node.js</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiPostgresql className="text-6xl text-[#4169E1] group-hover:scale-110 transition-transform" />
                <span className="text-text-gray mt-2 font-semibold">PostgreSQL</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiAmazon className="text-6xl text-[#FF9900] group-hover:scale-110 transition-transform" />
                <span className="text-text-gray mt-2 font-semibold">AWS</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiDocker className="text-6xl text-[#2496ED] group-hover:scale-110 transition-transform" />
                <span className="text-text-gray mt-2 font-semibold">Docker</span>
              </div>
              <div className="flex flex-col items-center group">
                <SiStripe className="text-6xl text-[#635BFF] group-hover:scale-110 transition-transform" />
                <span className="text-text-gray mt-2 font-semibold">Stripe</span>
              </div>
            </div>
          </div>

          {/* Perfect For */}
          <div className="mt-12">
            <h3 className="heading-sm text-primary-navy mb-4">Perfect For</h3>
            <p className="text-text-gray text-lg">
              Businesses that need custom solutions to automate processes, improve efficiency, or enter new markets. Whether you're replacing spreadsheets or modernizing legacy systems, we build software that works.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build Your Custom Solution?"
        description="Let's discuss your project requirements and create a roadmap"
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
      />
    </>
  )
}
