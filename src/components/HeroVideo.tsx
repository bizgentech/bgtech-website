import Link from 'next/link'
import { ArrowRight, ShieldCheck, MonitorSmartphone, Server } from 'lucide-react'

/**
 * Home hero — cinematic looping video background with the layered, floating UI
 * composition from the Stitch "Refined Homepage".
 *
 * Motion:
 *  - <video> autoplay/muted/loop/playsInline with a poster.
 *  - The poster is ALSO painted as a CSS background behind the video, so when
 *    `prefers-reduced-motion: reduce` hides `.hero-video` (see globals.css) the
 *    hero degrades to a clean still frame with zero motion.
 *  - Floating glass panels / glow blobs animate with lightweight CSS keyframes.
 */
export default function HeroVideo() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-slate-deep pt-20">
      {/* Still frame (also the reduced-motion fallback) */}
      <div
        className="absolute inset-0 bg-slate-deep bg-cover bg-center"
        style={{ backgroundImage: "url('/video/hero-poster.jpg')" }}
        aria-hidden="true"
      />

      {/* Cinematic video background */}
      <video
        className="hero-video absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/video/hero-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Legibility overlay.
          Mobile: strong full-width scrim — the video has bright frames and text spans
          the full width, so the copy must stay legible on every frame.
          Desktop: left-heavy gradient so the footage stays visible on the right. */}
      <div
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            'linear-gradient(to bottom, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.74) 45%, rgba(15,23,42,0.90) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 hidden sm:block"
        style={{
          background:
            'linear-gradient(to right, rgba(15,23,42,0.94) 0%, rgba(15,23,42,0.82) 40%, rgba(15,23,42,0.58) 65%, rgba(15,23,42,0.38) 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 hidden h-40 sm:block"
        style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.85), transparent)' }}
        aria-hidden="true"
      />

      {/* Grid pattern + ambient glow (depth / light) */}
      <div className="grid-pattern absolute inset-0 opacity-40" aria-hidden="true" />
      <div
        className="animate-float-slow absolute -right-20 top-24 h-80 w-80 rounded-full bg-vibrant-cyan/20 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="animate-float-delayed absolute bottom-10 left-1/3 h-72 w-72 rounded-full bg-electric-blue/20 blur-[120px]"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-custom relative z-10 grid grid-cols-1 items-center gap-14 py-20 lg:grid-cols-2 lg:gap-10 lg:py-28">
        {/* Left — copy (current approved production content) */}
        <div className="max-w-xl">
          <span className="label-mono mb-6 border border-vibrant-cyan/30 bg-vibrant-cyan/10 px-4 py-1.5 text-vibrant-cyan">
            IT Consulting &amp; Web Development
          </span>

          <h1 className="mt-6 font-heading text-[2.4rem] font-bold leading-[1.06] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
            Technology and Digital Solutions{' '}
            <span className="bg-gradient-to-r from-vibrant-cyan to-electric-blue bg-clip-text text-transparent">
              for Growing Businesses
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 lg:text-lg">
            Bizgen Technologies helps small businesses improve their IT operations,
            strengthen their digital presence, and implement practical technology solutions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="btn-pill">
              Schedule a Consultation <ArrowRight size={16} />
            </Link>
            <Link href="/#services" className="btn-pill-ghost-dark">
              Explore Our Services
            </Link>
          </div>
        </div>

        {/* Right — floating layered UI (decorative; no metrics or claims) */}
        <div className="relative hidden h-[420px] lg:block" aria-hidden="true">
          {/* Back panel */}
          <div className="glass-panel animate-float-delayed absolute right-6 top-2 h-56 w-72 opacity-60" />

          {/* Main panel */}
          <div className="glass-panel animate-float-slow absolute right-16 top-14 w-[22rem] p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              </div>
              <span className="label-mono border border-vibrant-cyan/30 bg-vibrant-cyan/10 px-2.5 py-1 text-[10px] text-vibrant-cyan">
                Managed IT
              </span>
            </div>

            <div className="space-y-3.5">
              {[
                { icon: MonitorSmartphone, label: 'Microsoft 365', w: 'w-[78%]' },
                { icon: ShieldCheck, label: 'Endpoint Protection', w: 'w-[62%]' },
                { icon: Server, label: 'Backup Monitoring', w: 'w-[70%]' },
              ].map(({ icon: Icon, label, w }) => (
                <div key={label}>
                  <div className="mb-1.5 flex items-center gap-2 text-xs font-medium text-white/70">
                    <Icon size={13} className="text-vibrant-cyan" />
                    {label}
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full ${w} rounded-full bg-gradient-to-r from-vibrant-cyan to-electric-blue`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Small floating chip */}
          <div className="glass-panel animate-float-sm absolute bottom-6 left-2 flex items-center gap-3 px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-electric-blue/20">
              <ShieldCheck size={16} className="text-vibrant-cyan" />
            </span>
            <div className="leading-tight">
              <p className="font-heading text-sm font-semibold text-white">Cybersecurity</p>
              <p className="label-mono text-[10px] text-white/50">Essentials</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
