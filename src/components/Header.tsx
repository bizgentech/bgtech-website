'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowRight } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/#services', scrollId: 'services' },
  { label: 'Portfolio', href: '/#portfolio', scrollId: 'portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, scrollId?: string) => {
    if (scrollId && pathname === '/') {
      e.preventDefault()
      const el = document.getElementById(scrollId)
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({ top, behavior: 'smooth' })
        setIsMenuOpen(false)
      }
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200 bg-white/85 shadow-[0_2px_20px_rgba(15,23,42,0.08)] backdrop-blur-xl'
          : 'border-transparent bg-white/70 backdrop-blur-xl'
      }`}
    >
      <nav className="container-custom py-3.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-shrink-0 items-center gap-3">
            <Image
              src="/images/Logo Bizgen.png"
              alt="BizGen Technologies"
              width={120}
              height={40}
              className="h-9 w-auto"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="font-heading text-[15px] font-semibold text-slate-deep">
                BizGen Technologies
              </span>
              <span className="label-mono text-[10px] text-text-gray">BG Tech</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.scrollId)}
                className="font-heading text-sm font-medium text-text-main transition-colors duration-150 hover:text-electric-blue"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-pill px-6 py-2.5 text-[13px]">
              Schedule a Consultation <ArrowRight size={14} />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="cursor-pointer rounded-lg p-2 text-slate-deep transition-colors hover:bg-slate-100 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 border-t border-slate-100 pb-3 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    handleSmoothScroll(e, link.scrollId)
                    setIsMenuOpen(false)
                  }}
                  className="rounded-lg px-2 py-2.5 font-heading font-medium text-text-main transition-colors hover:bg-blue-50 hover:text-electric-blue"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-pill mt-3 w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Schedule a Consultation <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
