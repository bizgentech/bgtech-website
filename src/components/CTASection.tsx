import Link from 'next/link'

interface CTASectionProps {
  title: string
  description?: string
  primaryButtonText?: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

export default function CTASection({
  title,
  description,
  primaryButtonText = 'Get Started',
  primaryButtonHref = '/contact',
  secondaryButtonText,
  secondaryButtonHref,
}: CTASectionProps) {
  return (
    <section className="gradient-blue-cyan section-padding relative overflow-hidden">
      <div className="container-custom">
        {/* Glass container for content */}
        <div className="glass-card max-w-[800px] mx-auto p-8 md:p-12 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{title}</h2>
          {description && <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">{description}</p>}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonHref}
              className="bg-white text-primary-navy px-8 py-4 rounded-lg font-bold hover:scale-105 shadow-[0_4px_14px_rgba(255,255,255,0.3)] hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)] transition-all duration-300 text-lg"
            >
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className="bg-white/10 backdrop-blur-[8px] border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-navy hover:scale-105 transition-all duration-300 text-lg"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
