import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Twitter, Github, Facebook, Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'IT Consulting & Managed Support', href: '/services/it-consulting-managed-support' },
  { label: 'Web Design & Development', href: '/services/web-design-development' },
]

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-slate-deep text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-5 flex items-center gap-3">
              <Image
                src="/images/Logo Bizgen.png"
                alt="BizGen Technologies"
                width={120}
                height={40}
                className="h-9 w-auto"
              />
              <div className="flex flex-col leading-none">
                <span className="font-heading text-[15px] font-semibold">BizGen Technologies</span>
                <span className="label-mono text-[10px] text-white/40">BG Tech</span>
              </div>
            </Link>
            <p className="mb-1 text-sm leading-relaxed text-white/60">
              Practical technology for small and growing businesses in South Florida.
            </p>
            <p className="text-xs text-white/35">Founded 2020 · Dania Beach, Florida</p>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition-all duration-200 hover:border-vibrant-cyan/40 hover:bg-white/10 hover:text-vibrant-cyan"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="label-mono mb-5 text-[11px] text-vibrant-cyan">Navigate</h3>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 transition-colors duration-150 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="label-mono mb-5 text-[11px] text-vibrant-cyan">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 transition-colors duration-150 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="label-mono mb-5 text-[11px] text-vibrant-cyan">Contact</h3>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="mailto:info@bgtecnologies.com"
                  className="flex items-start gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Mail size={15} className="mt-0.5 flex-shrink-0 text-vibrant-cyan" />
                  info@bgtecnologies.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+17869783032"
                  className="flex items-start gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <Phone size={15} className="mt-0.5 flex-shrink-0 text-vibrant-cyan" />
                  +1 (786) 978-3032
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/17548021063"
                  className="flex items-start gap-2.5 text-sm text-white/60 transition-colors hover:text-white"
                >
                  <MessageCircle size={15} className="mt-0.5 flex-shrink-0 text-success" />
                  WhatsApp: +1 (754) 802-1063
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-sm text-white/60">
                  <MapPin size={15} className="mt-0.5 flex-shrink-0 text-vibrant-cyan" />
                  <span>
                    150 S Bryan Rd, Dania Beach,
                    <br />
                    FL 33004, Florida USA
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 text-sm text-white/40 sm:flex-row">
          <p>&copy; {year} BizGen Technologies LLC. All rights reserved.</p>
          <a
            href="https://www.bgtecnologies.com"
            className="label-mono text-[11px] transition-colors hover:text-white/70"
          >
            www.bgtecnologies.com
          </a>
        </div>
      </div>
    </footer>
  )
}
