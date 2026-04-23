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
    <section className="gradient-blue-cyan section-padding">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-white/90 text-lg md:text-xl mb-10 leading-relaxed">
              {description}
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={primaryButtonHref}
              className="inline-flex items-center justify-center bg-white text-primary-navy font-bold px-8 py-4 rounded-xl text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              {primaryButtonText}
            </Link>
            {secondaryButtonText && secondaryButtonHref && (
              <Link
                href={secondaryButtonHref}
                className="inline-flex items-center justify-center border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-white hover:text-primary-navy transition-all duration-200"
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
