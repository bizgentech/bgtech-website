import IndustryCard from '@/components/IndustryCard'
import CTASection from '@/components/CTASection'
import {
  Check,
  Shield,
  Code2,
  Recycle,
  Monitor,
  Scale,
  Building2,
  ShieldCheck,
  Truck,
  ShoppingCart,
  Briefcase,
  MapPin,
  Calendar,
  Globe,
} from 'lucide-react'

export const metadata = {
  title: 'About Us | BizGen Technologies LLC',
  description:
    'Learn about BizGen Technologies LLC — founded in 2020, now serving businesses across the USA from Dania Beach, Florida.',
}

const whatWeDo = [
  {
    icon: Shield,
    title: 'IT & Cybersecurity Consulting',
    bullets: [
      'Microsoft 365 Administration',
      'Endpoint Protection & Antivirus',
      'Network Security & Firewall',
      '24/7 Help Desk Support',
      'Cybersecurity Assessments',
    ],
  },
  {
    icon: Code2,
    title: 'Software & Web Development',
    bullets: [
      'Progressive Web Apps (PWA)',
      'Enterprise Platforms',
      'REST & GraphQL APIs',
      'Payment Integration',
      'Legacy System Modernization',
    ],
  },
  {
    icon: Recycle,
    title: 'IT Equipment Disposal',
    bullets: [
      'Certified Data Destruction',
      'Secure Asset Pickup',
      'NIST-Compliant Wiping',
      'Hardware Recycling',
      'Chain of Custody Reports',
    ],
  },
  {
    icon: Monitor,
    title: 'Kiosk Consulting & Solutions',
    bullets: [
      'Self-Service Check-in Systems',
      'Payment Kiosks',
      'Wayfinding Displays',
      'Self-Order Systems',
      'Queue Management',
    ],
  },
]

const approach = [
  { step: '1', title: 'Listen First', desc: 'We start every engagement by deeply understanding your business, your challenges, and your goals.' },
  { step: '2', title: 'Plan Thoughtfully', desc: "Detailed roadmaps and technical specs so everyone knows exactly what we're building and why." },
  { step: '3', title: 'Build Iteratively', desc: 'Regular updates, continuous feedback, and agile sprints keep projects on track and on budget.' },
  { step: '4', title: 'Support Completely', desc: 'Launch is just the beginning. We provide ongoing support, maintenance, and enhancements.' },
]

const industries = [
  { icon: <Scale size={26} />, title: 'Legal Firms' },
  { icon: <Building2 size={26} />, title: 'Construction & Architecture' },
  { icon: <ShieldCheck size={26} />, title: 'Insurance Companies' },
  { icon: <Truck size={26} />, title: 'Car Dealerships' },
  { icon: <ShoppingCart size={26} />, title: 'Retail & Banking' },
  { icon: <Briefcase size={26} />, title: 'Small-Medium Businesses' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="gradient-navy-blue section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white border border-white/15">
              About BG Tech
            </span>
            <h1 className="heading-xl text-white mb-6">
              Solving Problems<br />Since 2020
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              We&apos;re a technology company built on one core belief: technology should solve real problems, not create new ones.
            </p>
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { icon: Calendar, text: 'Founded 2020, Dominican Republic' },
                { icon: Globe, text: 'USA Expansion 2024' },
                { icon: MapPin, text: 'Dania Beach, Florida' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon size={15} className="text-primary-blue" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="section-label mb-4">Our Story</span>
              <h2 className="heading-md text-primary-navy mt-4 mb-6">Building Technology That Actually Works</h2>
              <div className="space-y-4 text-text-gray text-base leading-relaxed">
                <p>
                  BizGen Technologies LLC (BG Tech) was founded in 2020 in the Dominican Republic with a simple mission: build technology solutions that actually solve business problems — no unnecessary complexity, no over-engineered systems.
                </p>
                <p>
                  In 2024 we expanded into the United States, establishing our headquarters in Dania Beach, Florida. Today we serve businesses across South Florida and beyond, bringing the same pragmatic approach to every engagement.
                </p>
                <p>
                  We&apos;ve worked across construction testing labs, property management, legal services, retail, and financial services. Each project teaches us something new, and we bring that cross-sector experience to every client.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Years in Business', value: '5+' },
                { label: 'Projects Delivered', value: '20+' },
                { label: 'Industries Served', value: '6+' },
                { label: 'Countries', value: '2' },
              ].map(({ label, value }) => (
                <div key={label} className="clean-card p-6 text-center">
                  <p className="text-4xl font-extrabold text-primary-blue mb-1">{value}</p>
                  <p className="text-text-gray text-sm">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Services</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">What We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatWeDo.map(({ icon: Icon, title, bullets }) => (
              <div key={title} className="clean-card p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="bg-blue-50 p-2.5 rounded-xl flex-shrink-0">
                    <Icon size={22} className="text-primary-blue" />
                  </div>
                  <h3 className="text-lg font-bold text-primary-navy">{title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-text-gray">
                      <Check size={14} className="text-success mt-0.5 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">How We Work</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Our Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approach.map(({ step, title, desc }) => (
              <div key={step} className="clean-card p-8 text-center">
                <div className="w-12 h-12 rounded-full gradient-blue-cyan flex items-center justify-center text-white text-xl font-extrabold mx-auto mb-4">
                  {step}
                </div>
                <h3 className="text-lg font-bold text-primary-navy mb-3">{title}</h3>
                <p className="text-text-gray text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label mb-4">Expertise</span>
            <h2 className="heading-lg text-primary-navy mt-4 mb-4">Industries We Serve</h2>
            <p className="text-text-gray text-lg max-w-2xl mx-auto">
              Cross-sector experience means we understand your business context, not just your code.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((ind) => (
              <IndustryCard key={ind.title} {...ind} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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
