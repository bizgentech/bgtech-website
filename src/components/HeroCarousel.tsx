'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Slide {
  id: number
  title: string
  subtitle: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
  }
  image: string
  imageAlt: string
  gradient: string
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Enterprise IT Support Without the Enterprise Price Tag',
    subtitle: 'IT Management Services',
    description: 'Get an entire team of Microsoft experts, hardware specialists, and problem solvers for less than hiring one IT engineer.',
    primaryButton: {
      text: 'Our IT Services',
      href: '/services/it-management',
    },
    secondaryButton: {
      text: 'Calculate Savings',
      href: '/contact',
    },
    image: '/images/hero/it-management.jpg',
    imageAlt: 'IT support team monitoring multiple servers and workstations in modern network operations center',
    gradient: 'from-primary-navy to-primary-blue',
  },
  {
    id: 2,
    title: 'Custom Solutions That Scale Your Business',
    subtitle: 'Custom Software Development',
    description: 'From enterprise software to mobile apps - we build modern, scalable applications tailored to your needs.',
    primaryButton: {
      text: 'View Our Work',
      href: '/#portfolio',
    },
    secondaryButton: {
      text: 'Start a Project',
      href: '/contact',
    },
    image: '/images/hero/software-development.jpg',
    imageAlt: 'Software developers collaborating on modern web application using React and Next.js',
    gradient: 'from-primary-blue to-secondary-cyan',
  },
  {
    id: 3,
    title: 'Quality Assurance That Protects Your Reputation',
    subtitle: 'QA Services & Testing',
    description: 'Comprehensive testing services that ensure your software works flawlessly from day one.',
    primaryButton: {
      text: 'QA Services',
      href: '/services/qa-testing',
    },
    secondaryButton: {
      text: 'Talk to Our Team',
      href: '/contact',
    },
    image: '/images/hero/qa-testing.jpg',
    imageAlt: 'QA engineer performing comprehensive software testing with automated test suites',
    gradient: 'from-secondary-cyan to-primary-blue',
  },
  {
    id: 4,
    title: 'Digital Transformation for Customer Self-Service',
    subtitle: 'Self-Service Kiosk Solutions',
    description: 'Modern kiosk solutions for retail, banking, and financial services that enhance customer experience.',
    primaryButton: {
      text: 'Kiosk Solutions',
      href: '/services/kiosks',
    },
    secondaryButton: {
      text: 'Request Demo',
      href: '/contact',
    },
    image: '/images/hero/kiosks.jpg',
    imageAlt: 'Modern self-service kiosk terminal in retail environment with touchscreen interface',
    gradient: 'from-primary-blue to-primary-navy',
  },
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance slides
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10s
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background */}
      <div className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.gradient} transition-all duration-1000`}>
        <Image
          src={currentSlideData.image}
          alt={currentSlideData.imageAlt}
          fill
          className="object-cover"
          priority={currentSlide === 0}
          sizes="100vw"
        />
        {/* Horizontal gradient overlay - dark left (for text), transparent right (for image) */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.6) 30%, rgba(15, 23, 42, 0.4) 50%, transparent 80%)',
          }}
        ></div>
        {/* Mobile: stronger gradient */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background: 'linear-gradient(to right, rgba(15, 23, 42, 0.8) 0%, rgba(15, 23, 42, 0.5) 60%, rgba(15, 23, 42, 0.3) 100%)',
          }}
        ></div>
      </div>

      {/* Content - Left aligned */}
      <div className="container-custom relative z-10 py-20 md:py-24 lg:py-32">
        {/* Glassmorphism content box - LEFT SIDE */}
        <div
          key={currentSlide}
          className="w-[90%] mx-auto md:mx-0 md:ml-[4%] lg:ml-[5%] max-w-[500px] lg:max-w-[600px] bg-white/8 backdrop-blur-[12px] border border-white/15 rounded-[20px] p-6 md:p-9 lg:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.2)] animate-slideFromLeft"
        >
          {/* Service label badge */}
          <span className="inline-block bg-primary-blue/25 border border-primary-blue/40 text-white px-4 py-1.5 rounded-full text-[0.875rem] font-semibold tracking-wider uppercase mb-6 animate-slideUp animation-delay-100">
            {currentSlideData.subtitle}
          </span>

          {/* Main headline */}
          <h1
            className="text-[2rem] md:text-[2.5rem] lg:text-[3.25rem] font-extrabold text-white leading-[1.1] tracking-tight mb-5 text-left animate-slideUp animation-delay-200"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
          >
            {currentSlideData.title}
          </h1>

          {/* Subheadline */}
          <p className="text-[1rem] lg:text-[1.125rem] font-normal text-white/95 leading-[1.6] mb-8 text-left animate-slideUp animation-delay-300">
            {currentSlideData.description}
          </p>

          {/* CTA Buttons - Left aligned */}
          <div className="flex flex-col md:flex-row justify-start items-start gap-4 flex-wrap animate-slideUp animation-delay-400">
            <Link
              href={currentSlideData.primaryButton.href}
              className="w-full md:w-auto bg-white text-primary-navy px-8 py-4 rounded-[10px] font-semibold text-base shadow-[0_4px_14px_rgba(255,255,255,0.25)] hover:scale-105 hover:shadow-[0_6px_20px_rgba(255,255,255,0.35)] transition-all duration-300 text-center"
            >
              {currentSlideData.primaryButton.text}
            </Link>
            <Link
              href={currentSlideData.secondaryButton.href}
              className="w-full md:w-auto bg-white/5 backdrop-blur-[8px] border-2 border-white/80 text-white px-[30px] py-[14px] rounded-[10px] font-semibold text-base hover:bg-white hover:text-primary-navy hover:scale-105 transition-all duration-300 text-center"
            >
              {currentSlideData.secondaryButton.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-[52px] md:h-[52px] bg-white/12 hover:bg-white/22 backdrop-blur-[10px] border border-white/18 text-white rounded-full transition-all duration-300 hover:scale-110 z-20 flex items-center justify-center"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 md:w-[52px] md:h-[52px] bg-white/12 hover:bg-white/22 backdrop-blur-[10px] border border-white/18 text-white rounded-full transition-all duration-300 hover:scale-110 z-20 flex items-center justify-center"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-400 ${
              index === currentSlide
                ? 'w-9 h-2.5 rounded-[5px] bg-white'
                : 'w-2.5 h-2.5 rounded-full bg-white/35 border border-white/50 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
