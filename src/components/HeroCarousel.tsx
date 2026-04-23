'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  id: number
  subtitle: string
  title: string
  description: string
  primaryBtn: { text: string; href: string }
  secondaryBtn: { text: string; href: string }
  image: string
  imageAlt: string
  accentColor: string
}

const slides: Slide[] = [
  {
    id: 1,
    subtitle: 'IT & Cybersecurity Consulting',
    title: 'Enterprise IT Support Without the Enterprise Price Tag',
    description:
      'Get an entire team of Microsoft experts, hardware specialists, and cybersecurity professionals for less than hiring one IT engineer.',
    primaryBtn: { text: 'Our IT Services', href: '/services/it-cybersecurity-consulting' },
    secondaryBtn: { text: 'Calculate Savings', href: '/contact' },
    image: '/images/hero/it-management.jpg',
    imageAlt: 'IT support professionals monitoring secure network infrastructure',
    accentColor: '#3B82F6',
  },
  {
    id: 2,
    subtitle: 'Software & Web Development',
    title: 'Custom Solutions That Scale With Your Business',
    description:
      'From enterprise platforms to mobile apps — we architect and build modern, scalable software tailored to your exact requirements.',
    primaryBtn: { text: 'View Our Work', href: '/#portfolio' },
    secondaryBtn: { text: 'Start a Project', href: '/contact' },
    image: '/images/hero/software-development.jpg',
    imageAlt: 'Software development team building modern web applications',
    accentColor: '#06B6D4',
  },
  {
    id: 3,
    subtitle: 'IT Equipment Pickup, Data Destruction & Disposal',
    title: 'Retire Your IT Equipment Safely and Compliantly',
    description:
      'Certified data destruction, secure hardware pickup, and responsible recycling. Protect your data — and the environment — when decommissioning assets.',
    primaryBtn: { text: 'Disposal Services', href: '/services/it-equipment-disposal' },
    secondaryBtn: { text: 'Schedule Pickup', href: '/contact' },
    image: '/images/hero/equipment-disposal.png',
    imageAlt: 'Certified IT equipment disposal and data destruction service',
    accentColor: '#10B981',
  },
  {
    id: 4,
    subtitle: 'Kiosk Consulting & Solutions',
    title: 'Digital Self-Service That Transforms Customer Experience',
    description:
      'End-to-end kiosk solutions for retail, banking, and hospitality. Reduce wait times, lower operating costs, and delight customers 24/7.',
    primaryBtn: { text: 'Kiosk Solutions', href: '/services/kiosk-consulting-solutions' },
    secondaryBtn: { text: 'Request Demo', href: '/contact' },
    image: '/images/hero/kiosks.jpg',
    imageAlt: 'Modern self-service kiosk terminal with touchscreen interface',
    accentColor: '#F59E0B',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }, [isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 10000)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
    setAutoPlay(false)
    setTimeout(() => setAutoPlay(true), 10000)
  }, [current, goTo])

  useEffect(() => {
    if (!autoPlay) return
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(id)
  }, [autoPlay])

  const slide = slides[current]

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-primary-navy">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          key={slide.id}
          src={slide.image}
          alt={slide.imageAlt}
          fill
          className="object-cover"
          priority={current === 0}
          sizes="100vw"
        />
        {/* Dark gradient overlay — left heavy for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(15,23,42,0.93) 0%, rgba(15,23,42,0.78) 38%, rgba(15,23,42,0.45) 62%, rgba(15,23,42,0.15) 85%, transparent 100%)',
          }}
        />
        {/* Bottom fade for dots */}
        <div
          className="absolute inset-x-0 bottom-0 h-28"
          style={{ background: 'linear-gradient(to top, rgba(15,23,42,0.6) 0%, transparent 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-24 lg:py-32">
        <div
          key={current}
          className="w-full md:max-w-[560px] lg:max-w-[620px] animate-slideFromLeft"
        >
          {/* Service label */}
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-slideUp animation-delay-100"
            style={{
              background: `rgba(${hexToRgb(slide.accentColor)}, 0.18)`,
              border: `1px solid rgba(${hexToRgb(slide.accentColor)}, 0.45)`,
              color: '#fff',
            }}
          >
            {slide.subtitle}
          </span>

          {/* Headline */}
          <h1
            className="text-[2rem] md:text-[2.6rem] lg:text-[3.2rem] font-extrabold text-white leading-[1.08] tracking-tight mb-5 animate-slideUp animation-delay-200"
          >
            {slide.title}
          </h1>

          {/* Description */}
          <p className="text-base lg:text-lg text-white/90 leading-relaxed mb-8 max-w-[500px] animate-slideUp animation-delay-300">
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slideUp animation-delay-400">
            <Link
              href={slide.primaryBtn.href}
              className="inline-flex items-center justify-center bg-white text-primary-navy font-bold px-8 py-4 rounded-xl text-sm shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              {slide.primaryBtn.text}
            </Link>
            <Link
              href={slide.secondaryBtn.href}
              className="inline-flex items-center justify-center border-2 border-white/80 text-white font-bold px-8 py-4 rounded-xl text-sm hover:bg-white hover:text-primary-navy transition-all duration-200"
            >
              {slide.secondaryBtn.text}
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-200 cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-all duration-200 cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dot navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => { goTo(i); setAutoPlay(false); setTimeout(() => setAutoPlay(true), 10000) }}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/35 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}
