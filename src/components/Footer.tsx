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
  { label: 'IT & Cybersecurity Consulting', href: '/services/it-cybersecurity-consulting' },
  { label: 'Software & Web Development', href: '/services/software-web-development' },
  { label: 'IT Equipment Disposal', href: '/services/it-equipment-disposal' },
  { label: 'Kiosk Consulting & Solutions', href: '/services/kiosk-consulting-solutions' },
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
    <footer className="bg-primary-navy text-white">
      <div className="container-custom py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/Logo Bizgen.png"
                alt="BizGen Technologies"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
              <div className="flex flex-col leading-none">
                <span className="font-bold text-base">BizGen Technologies</span>
                <span className="text-slate-400 text-xs">BG Tech</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-1">
              Solving business problems with technology since 2020.
            </p>
            <p className="text-slate-500 text-xs">Founded in Dominican Republic · Expanded to USA 2024</p>

            <div className="flex gap-4 mt-5">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-slate-400 hover:text-primary-blue transition-colors duration-150"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-white text-sm transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base mb-4">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-slate-400 hover:text-white text-sm transition-colors duration-150">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@bgtecnologies.com" className="flex items-start gap-2.5 text-slate-400 hover:text-white text-sm transition-colors">
                  <Mail size={15} className="mt-0.5 text-primary-blue flex-shrink-0" />
                  info@bgtecnologies.com
                </a>
              </li>
              <li>
                <a href="tel:+17869783032" className="flex items-start gap-2.5 text-slate-400 hover:text-white text-sm transition-colors">
                  <Phone size={15} className="mt-0.5 text-primary-blue flex-shrink-0" />
                  +1 (786) 978-3032
                </a>
              </li>
              <li>
                <a href="https://wa.me/17548021063" className="flex items-start gap-2.5 text-slate-400 hover:text-white text-sm transition-colors">
                  <MessageCircle size={15} className="mt-0.5 text-success flex-shrink-0" />
                  WhatsApp: +1 (754) 802-1063
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2.5 text-slate-400 text-sm">
                  <MapPin size={15} className="mt-0.5 text-primary-blue flex-shrink-0" />
                  <span>150 S Bryan Rd, Dania Beach,<br />FL 33004, Florida USA</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-sm">
          <p>&copy; {year} BizGen Technologies LLC. All rights reserved.</p>
          <p>
            <a href="https://www.bgtecnologies.com" className="hover:text-slate-300 transition-colors">
              www.bgtecnologies.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
