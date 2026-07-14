import Image from 'next/image'
import {
  Laptop,
  Monitor,
  Server,
  Wifi,
  Package,
  HardDrive,
  AlertTriangle,
  ShieldAlert,
  Clock,
  Check,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
} from 'lucide-react'

export const metadata = {
  title: 'IT Equipment Disposal — BizGen Technologies LLC',
  description:
    'Secure IT equipment pickup, certified data destruction, and responsible disposal for South Florida businesses. Get a free quote today.',
  robots: { index: false, follow: true },
}

/* ── Font helpers (CSS vars already on <html> via root layout) ── */
const LX = { fontFamily: "var(--font-lexend,'Lexend'),ui-sans-serif,system-ui,sans-serif" } as const
const SS = { fontFamily: "var(--font-source-sans,'Source Sans 3'),ui-sans-serif,system-ui,sans-serif" } as const

/* ── Reusable style atoms ─────────────────────────────────────── */
const TEAL = '#028090'
const NAVY = '#0F172A'
const LIGHT = '#F8FAFC'

const card = {
  background: '#fff',
  borderRadius: 16,
  border: '1px solid #E2E8F0',
  boxShadow: '0 4px 16px rgba(15,23,42,0.07)',
  padding: '2rem',
} as const

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-white/30 bg-white/15 text-white ' +
  'placeholder-white/55 focus:outline-none focus:ring-2 focus:ring-white/50 ' +
  'focus:border-transparent transition-all duration-150 text-sm'

const labelCls = 'block text-white/90 font-semibold text-sm mb-1.5'

/* ── Data ─────────────────────────────────────────────────────── */
const problems = [
  {
    Icon: Laptop,
    title: 'Old laptops and desktops taking up space',
    desc: 'Stacks of retired hardware collecting dust in storage rooms, closets, or spare offices — when they could simply be gone.',
  },
  {
    Icon: ShieldAlert,
    title: 'Sensitive data on retired devices',
    desc: "Company records, client files, credentials. If that drive ends up in the wrong hands, it's a real liability risk.",
  },
  {
    Icon: Clock,
    title: 'No time to deal with it properly',
    desc: "Disposal regulations, certified wiping, recycling requirements — it's a project that keeps getting pushed to next quarter.",
  },
]

const steps = [
  {
    n: '1',
    title: 'Send Us Your List',
    desc: 'Tell us what equipment you have and whether certified data destruction is needed. No commitment yet.',
  },
  {
    n: '2',
    title: 'We Schedule Pickup',
    desc: 'Our team comes to your location at a time that works for you. We handle all the logistics.',
  },
  {
    n: '3',
    title: 'Documented & Done',
    desc: 'Receive your service confirmation or Certificate of Data Destruction. Audit-ready records included.',
  },
]

const tiers = [
  {
    name: 'Basic Disposal',
    popular: false,
    pickup: 'Starting at $95 / pickup',
    perItem: 'Equipment: $12–$45 / item',
    lines: [
      'Scheduled pickup at your location',
      'Responsible, EPA-compliant disposal',
      'Basic service confirmation',
    ],
    bestFor: 'Office cleanups, equipment WITHOUT sensitive data',
  },
  {
    name: 'Secure Disposal',
    popular: true,
    pickup: 'Starting at $149 / pickup',
    perItem: 'Equipment: $12–$45 / item',
    lines: [
      'Everything in Basic',
      'Data Wipe (NIST 800-88) from $20 / drive',
      'Physical Destruction from $35 / drive',
      'Certificate of Service or Destruction',
    ],
    bestFor: 'Legal, accounting, and medical offices',
  },
  {
    name: 'Office Refresh / Project',
    popular: false,
    pickup: 'Starting at $249 / pickup',
    perItem: 'Equipment: $12–$45 / item',
    lines: [
      '21–50+ items in one project',
      'Dedicated project coordination',
      'Optional data wipe or destruction',
      'Final disposition report included',
      'Serialized reporting: $79 / project',
    ],
    bestFor: 'Hardware refreshes, relocations, bulk removal',
  },
]

const equipment = [
  { Icon: Laptop, label: 'Laptops' },
  { Icon: Monitor, label: 'Desktops & Monitors' },
  { Icon: Server, label: 'Servers' },
  { Icon: Wifi, label: 'Network Equipment' },
  { Icon: HardDrive, label: 'Drives & Storage' },
  { Icon: Package, label: 'Accessories & Docks' },
]

/* ════════════════════════════════════════════════════════════════ */

export default function DisposalLandingPage() {
  return (
    /*
     * Fixed full-viewport shell — covers the global Header/Footer so this
     * page behaves as a true standalone, with its own scrollable area.
     * scroll-behavior:smooth makes in-page anchor (#quote) work natively.
     */
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        overflowY: 'auto',
        scrollBehavior: 'smooth',
        background: LIGHT,
        ...SS,
      }}
    >

      {/* ══════════════════════════ 1. HERO ══════════════════════════ */}
      <section
        className="relative flex items-center"
        style={{ minHeight: '100svh', background: NAVY }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/services/equipment-disposal-hero.png"
            alt="IT equipment being prepared for secure disposal"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Left-heavy gradient so text is always readable */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right,rgba(15,23,42,0.97) 0%,rgba(15,23,42,0.88) 38%,rgba(15,23,42,0.60) 62%,rgba(15,23,42,0.22) 82%,transparent 100%)',
            }}
          />
          {/* Soft fade to the next section colour */}
          <div
            className="absolute inset-x-0 bottom-0 h-28"
            style={{ background: `linear-gradient(to top,${LIGHT},transparent)` }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
          <div className="max-w-[580px]">
            {/* Label pill */}
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 text-white"
              style={{
                background: 'rgba(2,128,144,0.22)',
                border: '1px solid rgba(2,128,144,0.48)',
                ...LX,
              }}
            >
              IT Equipment Disposal · South Florida
            </span>

            <h1
              className="text-[2.4rem] md:text-[3.2rem] lg:text-[3.9rem] font-extrabold text-white leading-[1.07] tracking-tight mb-5"
              style={LX}
            >
              Retired IT Equipment<br />Piling Up?
            </h1>

            <p
              className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-[480px]"
            >
              We handle secure pickup, data destruction, and responsible disposal — so you
              don&apos;t have to.
            </p>

            <a
              href="#quote"
              className="inline-flex items-center gap-2.5 font-bold px-9 py-4 rounded-xl text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: '#fff', color: NAVY, ...LX }}
            >
              Get a Free Quote
              <ChevronDown size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════ 2. THE PROBLEM ════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4"
              style={{ color: NAVY, ...LX }}
            >
              Sound familiar?
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              These are the most common situations businesses reach out to us about.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {problems.map(({ Icon, title, desc }) => (
              <div key={title} style={card}>
                <div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4"
                  style={{ background: 'rgba(2,128,144,0.09)' }}
                >
                  <Icon size={22} style={{ color: TEAL }} />
                </div>
                <h3
                  className="text-lg font-bold mb-2 leading-snug"
                  style={{ color: NAVY, ...LX }}
                >
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ 3. HOW IT WORKS ════════════════════ */}
      <section className="py-20 md:py-28" style={{ background: NAVY }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 text-white"
              style={{
                background: 'rgba(2,128,144,0.22)',
                border: '1px solid rgba(2,128,144,0.40)',
                ...LX,
              }}
            >
              The Process
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white"
              style={LX}
            >
              Simple, Secure, Done
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
            {steps.map(({ n, title, desc }) => (
              <div key={n} className="text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl font-extrabold mx-auto mb-5"
                  style={{ background: TEAL, ...LX }}
                >
                  {n}
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={LX}
                >
                  {title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed max-w-[260px] mx-auto">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ 4. SERVICE TIERS ════════════════════ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold"
              style={{ color: NAVY, ...LX }}
            >
              Choose Your Service Level
            </h2>
            <p className="text-slate-500 text-lg mt-4 max-w-xl mx-auto">
              All tiers include scheduled pickup and responsible disposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
            {tiers.map(({ name, popular, pickup, perItem, lines, bestFor }) => (
              <div
                key={name}
                style={{
                  background: '#fff',
                  borderRadius: 18,
                  border: popular ? `2px solid ${TEAL}` : '1px solid #E2E8F0',
                  boxShadow: popular
                    ? `0 8px 32px rgba(2,128,144,0.16)`
                    : '0 4px 16px rgba(15,23,42,0.07)',
                  padding: '2rem',
                  position: 'relative',
                  transform: popular ? 'translateY(-6px)' : 'none',
                }}
              >
                {/* Most Popular badge */}
                {popular && (
                  <span
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap"
                    style={{ background: TEAL, ...LX }}
                  >
                    Most Popular
                  </span>
                )}

                <h3
                  className="text-xl font-extrabold mb-1"
                  style={{ color: NAVY, ...LX }}
                >
                  {name}
                </h3>

                <p className="text-sm font-semibold mb-0.5" style={{ color: TEAL }}>
                  {pickup}
                </p>
                <p className="text-xs text-slate-400 mb-5">{perItem}</p>

                <ul className="space-y-2.5 mb-5">
                  {lines.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <Check
                        size={14}
                        style={{ color: TEAL, marginTop: 2, flexShrink: 0 }}
                      />
                      {line}
                    </li>
                  ))}
                </ul>

                <div
                  className="text-xs text-slate-400 mb-5 pb-5"
                  style={{ borderBottom: '1px solid #F1F5F9' }}
                >
                  <span className="font-semibold text-slate-500">Best for: </span>
                  {bestFor}
                </div>

                <a
                  href="#quote"
                  className="block text-center font-bold py-3 rounded-xl text-sm transition-all duration-200 hover:opacity-90"
                  style={
                    popular
                      ? { background: TEAL, color: '#fff', ...LX }
                      : { background: '#F1F5F9', color: NAVY, ...LX }
                  }
                >
                  Get a Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ 5. EQUIPMENT WE HANDLE ═════════════════ */}
      <section className="py-20 md:py-28" style={{ background: LIGHT }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-extrabold mb-4"
              style={{ color: NAVY, ...LX }}
            >
              We Handle All Standard IT Equipment
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mb-8">
            {equipment.map(({ Icon, label }) => (
              <div
                key={label}
                style={{
                  background: '#fff',
                  borderRadius: 16,
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 8px rgba(15,23,42,0.06)',
                  padding: '1.5rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 10,
                  textAlign: 'center',
                }}
              >
                <div
                  className="p-3 rounded-xl"
                  style={{ background: 'rgba(2,128,144,0.09)' }}
                >
                  <Icon size={22} style={{ color: TEAL }} />
                </div>
                <p
                  className="text-sm font-semibold leading-snug"
                  style={{ color: NAVY, ...LX }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-400 max-w-lg mx-auto">
            Printers, UPS units, and oversized equipment are accepted but quoted separately
            — just mention them in your request.
          </p>
        </div>
      </section>

      {/* ════════════════════ 6. QUOTE / CONTACT FORM ═══════════════ */}
      <section
        id="quote"
        className="py-20 md:py-28"
        style={{ background: TEAL, scrollMarginTop: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3"
              style={LX}
            >
              Get Your Free Quote
            </h2>
            <p className="text-white/80 text-lg">
              Send us an approximate list and we&apos;ll respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">

            {/* ── Form ── */}
            <div className="lg:col-span-2">
              <form
                action="mailto:disposeit@bgtecnologies.com"
                method="POST"
                encType="text/plain"
                className="space-y-4"
              >
                {/* Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls} style={LX}>
                      Name <span className="text-white/50" aria-hidden>*</span>
                    </label>
                    <input
                      type="text"
                      name="Name"
                      required
                      autoComplete="name"
                      placeholder="Jane Smith"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls} style={LX}>Company</label>
                    <input
                      type="text"
                      name="Company"
                      autoComplete="organization"
                      placeholder="Acme Corp"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelCls} style={LX}>
                      Email <span className="text-white/50" aria-hidden>*</span>
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls} style={LX}>Phone</label>
                    <input
                      type="tel"
                      name="Phone"
                      autoComplete="tel"
                      placeholder="(555) 123-4567"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Device count */}
                <div>
                  <label className={labelCls} style={LX}>
                    Approximate Number of Devices
                  </label>
                  <input
                    type="text"
                    name="Devices"
                    placeholder="e.g. 15 laptops, 8 desktops, 3 servers"
                    className={inputCls}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={labelCls} style={LX}>Message / Device List</label>
                  <textarea
                    name="Message"
                    rows={5}
                    placeholder="Example: 15 laptops, 8 desktops, 3 monitors — data destruction required"
                    className={inputCls + ' resize-vertical'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full font-bold py-4 rounded-xl text-base shadow-lg hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
                  style={{ background: '#fff', color: TEAL, ...LX }}
                >
                  Send Request
                </button>
              </form>
            </div>

            {/* ── Contact info card ── */}
            <div className="lg:col-span-1">
              <div
                style={{
                  background: '#fff',
                  borderRadius: 18,
                  padding: '2rem',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
                  position: 'sticky',
                  top: '2rem',
                }}
              >
                <h3
                  className="text-xl font-bold mb-6"
                  style={{ color: NAVY, ...LX }}
                >
                  Contact Us Directly
                </h3>

                <div className="space-y-5">
                  {/* Phone */}
                  <a href="tel:+17542101875" className="flex items-start gap-3 group">
                    <div
                      className="p-2 rounded-lg flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(2,128,144,0.10)' }}
                    >
                      <Phone size={15} style={{ color: TEAL }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-0.5">
                        Phone
                      </p>
                      <p
                        className="text-sm font-semibold transition-colors group-hover:opacity-70"
                        style={{ color: NAVY }}
                      >
                        +1 (754) 210-1875
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:disposeit@bgtecnologies.com"
                    className="flex items-start gap-3 group"
                  >
                    <div
                      className="p-2 rounded-lg flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(2,128,144,0.10)' }}
                    >
                      <Mail size={15} style={{ color: TEAL }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-0.5">
                        Email
                      </p>
                      <p
                        className="text-sm font-semibold break-all transition-colors group-hover:opacity-70"
                        style={{ color: NAVY }}
                      >
                        disposeit@bgtecnologies.com
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div
                      className="p-2 rounded-lg flex-shrink-0 mt-0.5"
                      style={{ background: 'rgba(2,128,144,0.10)' }}
                    >
                      <MapPin size={15} style={{ color: TEAL }} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-slate-400 mb-0.5">
                        Service Area
                      </p>
                      <p className="text-sm text-slate-600 leading-snug">
                        Dania Beach, FL<br />Serving South Florida
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="mt-6 pt-5 text-xs text-slate-400 leading-relaxed"
                  style={{ borderTop: '1px solid #F1F5F9' }}
                >
                  We typically respond within a few hours during business hours.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════ 7. MINIMAL FOOTER ══════════════════ */}
      <footer
        className="py-6 text-center text-sm"
        style={{ background: NAVY, color: 'rgba(255,255,255,0.38)' }}
      >
        © 2025 BizGen Technologies LLC — IT Equipment Disposal Services
      </footer>

      {/* ══════════════════════ FLOATING CALL BUTTON ═════════════════
          position:fixed still anchors to the viewport even though this
          element is inside a position:fixed container (no transform/filter
          on any ancestor creates a new containing block).
      ══════════════════════════════════════════════════════════════════ */}
      <a
        href="tel:+17542101875"
        aria-label="Call us now"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
        style={{
          background: TEAL,
          borderRadius: 9999,
          padding: '0.75rem 1.25rem',
          ...LX,
        }}
      >
        <Phone size={18} />
        <span className="hidden sm:inline text-sm font-bold">Call Us</span>
      </a>

    </div>
  )
}
