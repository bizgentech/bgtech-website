import type { Metadata } from 'next'
import FeaturedProjectCard from '@/components/FeaturedProjectCard'
import ProjectCard from '@/components/ProjectCard'
import CTASection from '@/components/CTASection'
import { featuredProjects, inHouseProjects } from '@/lib/projects'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Client websites BizGen Technologies has built for South Florida businesses, plus the in-house platforms our team is developing.',
}

export default function PortfolioPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="gradient-navy-blue section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white border border-white/15">
              Our Work
            </span>
            <h1 className="heading-xl text-white mb-4">Our Work</h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Real client websites we&apos;ve built for South Florida businesses — plus a look at the
              in-house platforms our team is developing.
            </p>
          </div>
        </div>
      </section>

      {/* ── Featured Client Work ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="section-label mb-4">Featured Client Work</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Client Websites</h2>
          </div>
          <div className="space-y-16 lg:space-y-24 max-w-6xl mx-auto">
            {featuredProjects.map((p, i) => (
              <FeaturedProjectCard key={p.title} {...p} reverse={i % 2 === 1} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ── In-House Platforms ── */}
      <section className="section-padding gradient-navy-blue">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-white/10 text-white border border-white/15">
              In-House Platforms
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-4">Products We&apos;re Building</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Internal platforms at various stages of development. Each one shows its current stage.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inHouseProjects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's Discuss What Your Business Needs"
        description="Whether it's your technology or your website, let's start with a conversation."
        primaryButtonText="Schedule a Consultation"
        primaryButtonHref="/contact"
        secondaryButtonText="Explore Our Services"
        secondaryButtonHref="/#services"
      />
    </>
  )
}
