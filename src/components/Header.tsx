'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

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
      className="sticky top-0 z-50 bg-white transition-shadow duration-300"
      style={{ boxShadow: isScrolled ? '0 2px 16px rgba(15,23,42,0.10)' : '0 1px 0 #E2E8F0' }}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/Logo Bizgen.png"
              alt="BizGen Technologies"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div className="flex flex-col leading-none">
              <span className="text-primary-navy font-bold text-base">BizGen Technologies</span>
              <span className="text-text-gray text-xs">BG Tech</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.scrollId)}
                className="text-neutral-dark hover:text-primary-blue font-medium transition-colors duration-150 text-sm"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-primary text-sm px-5 py-2.5 rounded-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-neutral-dark rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation overlay */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { handleSmoothScroll(e, link.scrollId); setIsMenuOpen(false) }}
                  className="text-neutral-dark hover:text-primary-blue font-medium py-2.5 px-2 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
