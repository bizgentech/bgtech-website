import Image from 'next/image'

/**
 * Shared hero background: full-bleed image with a layered gradient that keeps
 * overlaid text legible on every screen size.
 *  - Left-heavy gradient → readable headline on desktop (text sits on the left).
 *  - Bottom gradient → readable text on mobile (content stacks and sits lower).
 * `position` controls the image focal point (CSS object-position).
 */
export default function HeroBackground({
  src,
  alt,
  position = 'center',
  priority = true,
}: {
  src: string
  alt: string
  position?: string
  priority?: boolean
}) {
  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: position }}
      />
      {/* Left-heavy gradient: keeps the headline legible on the left at every size while
          the image stays visible on the right. A soft bottom fade helps CTAs on mobile. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(15,23,42,0.90) 0%, rgba(15,23,42,0.68) 42%, rgba(15,23,42,0.40) 66%, rgba(15,23,42,0.14) 86%, transparent 100%)',
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 sm:h-0"
        style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.55), transparent)' }}
      />
    </div>
  )
}
