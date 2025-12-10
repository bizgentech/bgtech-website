'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Only do smooth scroll if we're on the home page
    if (pathname === '/') {
      e.preventDefault()
      const element = document.getElementById(targetId)
      if (element) {
        const headerOffset = 80 // Height of fixed header
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        setIsMenuOpen(false)
      }
    }
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/30"
      style={{
        backdropFilter: 'blur(12px)',
        background: 'rgba(255, 255, 255, 0.9)',
        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)',
      }}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/Logo Bizgen.png"
              alt="BizGen Technologies Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <div className="flex flex-col">
              <span className="text-primary-navy font-bold text-lg leading-tight">BizGen Technologies</span>
              <span className="text-text-gray text-xs">BG Tech</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-neutral-dark hover:text-primary-blue transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/#services"
              onClick={(e) => handleSmoothScroll(e, 'services')}
              className="text-neutral-dark hover:text-primary-blue transition-colors duration-200 font-medium"
            >
              Services
            </Link>
            <Link
              href="/#portfolio"
              onClick={(e) => handleSmoothScroll(e, 'portfolio')}
              className="text-neutral-dark hover:text-primary-blue transition-colors duration-200 font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="text-neutral-dark hover:text-primary-blue transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-neutral-dark hover:text-primary-blue transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Link
              href="/contact"
              className="gradient-blue-cyan text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-[8px]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-neutral-dark text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-neutral-dark hover:text-primary-blue transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/#services"
                onClick={(e) => handleSmoothScroll(e, 'services')}
                className="text-neutral-dark hover:text-primary-blue transition-colors duration-200 font-medium"
              >
                Services
              </Link>
              <Link
                href="/#portfolio"
                onClick={(e) => handleSmoothScroll(e, 'portfolio')}
                className="text-neutral-dark hover:text-primary-blue transition-colors duration-200 font-medium"
              >
                Portfolio
              </Link>
              <Link
                href="/about"
                className="text-neutral-dark hover:text-primary-blue transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-neutral-dark hover:text-primary-blue transition-colors duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="btn-primary text-center"
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
