import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroBackground from '@/components/HeroBackground'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[520px] sm:min-h-[580px] lg:min-h-[660px] flex items-center bg-primary-navy">
      <HeroBackground
        src="/images/hero/it-management.jpg"
        alt="Technology and digital solutions for growing businesses"
        position="50% 30%"
      />

      {/* Content */}
      <div className="container-custom relative z-10 py-16 sm:py-24 lg:py-32">
        <div className="max-w-[640px]">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white border border-white/15">
            IT Consulting &amp; Web Development
          </span>
          <h1 className="text-[2.1rem] md:text-[2.8rem] lg:text-[3.3rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6">
            Technology and Digital Solutions for Growing Businesses
          </h1>
          <p className="text-base lg:text-xl text-white/85 leading-relaxed mb-9 max-w-[560px]">
            Bizgen Technologies helps small businesses improve their IT operations,
            strengthen their digital presence, and implement practical technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-blue text-white font-bold px-8 py-4 rounded-xl text-sm shadow-lg hover:bg-blue-600 hover:-translate-y-0.5 transition-all duration-200"
            >
              Schedule a Consultation <ArrowRight size={16} />
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center justify-center border-2 border-white/70 text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-white hover:text-primary-navy transition-all duration-200"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
