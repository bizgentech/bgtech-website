'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, MessageCircle, CalendarClock } from 'lucide-react'
import HeroBackground from '@/components/HeroBackground'

const inputClass =
  'w-full px-4 py-3 border border-slate-200 rounded-xl bg-white text-neutral-dark placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all duration-150 text-sm'

const labelClass = 'block text-neutral-dark font-semibold text-sm mb-1.5'

const WEB3FORMS_KEY = 'e8579c38-f49c-4b06-a821-e0f09e1cdc8a'

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  employees: '',
  projectDescription: '',
}

export default function ContactPage() {
  const [formData, setFormData] = useState(initialForm)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(false)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New Contact Form Submission — BizGen Technologies',
          from_name: formData.name,
          ...formData,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSubmitted(true)
        setFormData(initialForm)
        setTimeout(() => setSubmitted(false), 6000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden min-h-[420px] sm:min-h-[460px] lg:min-h-[500px] flex items-center bg-primary-navy">
        <HeroBackground
          src="/images/hero/it-management.jpg"
          alt="Get in touch with BizGen Technologies"
          position="50% 30%"
        />
        <div className="container-custom relative z-10 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 bg-white/10 text-white border border-white/15">
              Get In Touch
            </span>
            <h1 className="heading-xl text-white mb-4">
              Let&apos;s Discuss What<br />Your Business Needs
            </h1>
            <p className="text-white/80 text-xl leading-relaxed">
              Tell us about your technology or your website and we&apos;ll get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="clean-card p-8 md:p-10">
                <h2 className="heading-sm text-primary-navy mb-6">Send Us a Message</h2>

                {submitted && (
                  <div
                    role="alert"
                    className="bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-4 rounded-xl mb-6 text-sm font-medium"
                  >
                    ✓ Thank you! We&apos;ll get back to you within one business day.
                  </div>
                )}

                {error && (
                  <div
                    role="alert"
                    className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl mb-6 text-sm font-medium"
                  >
                    Something went wrong. Please try again or email us directly at info@bgtecnologies.com.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Row: Name + Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelClass}>
                        Name <span className="text-red-500" aria-hidden>*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className={labelClass}>Company</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        autoComplete="organization"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Row: Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className={labelClass}>
                        Business Email <span className="text-red-500" aria-hidden>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelClass}>Phone</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Row: Service + Employees */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="service" className={labelClass}>Service Needed</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a service…</option>
                        <option value="IT Consulting">IT Consulting</option>
                        <option value="Managed IT Support">Managed IT Support</option>
                        <option value="Website Design">Website Design</option>
                        <option value="Ecommerce">Ecommerce</option>
                        <option value="Custom Web Development">Custom Web Development</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="employees" className={labelClass}>
                        Number of Employees <span className="text-slate-400 font-normal">(optional)</span>
                      </label>
                      <select
                        id="employees"
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a range…</option>
                        <option value="1-5">1–5</option>
                        <option value="6-10">6–10</option>
                        <option value="11-25">11–25</option>
                        <option value="26-50">26–50</option>
                        <option value="50+">50+</option>
                      </select>
                    </div>
                  </div>

                  {/* Short Description */}
                  <div>
                    <label htmlFor="projectDescription" className={labelClass}>
                      Short Description <span className="text-red-500" aria-hidden>*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      required
                      value={formData.projectDescription}
                      onChange={handleChange}
                      rows={5}
                      className={inputClass + ' resize-vertical'}
                      placeholder="Tell us briefly what you need — your systems, your website, or the problem you're trying to solve…"
                    />
                  </div>

                  {/* Honeypot — hidden from humans, blocks bots */}
                  <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 rounded-xl text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div className="gradient-navy-blue rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-5">
                  {[
                    { icon: Mail, color: 'text-primary-blue', label: 'Email', content: <a href="mailto:info@bgtecnologies.com" className="text-slate-300 hover:text-white text-sm transition-colors">info@bgtecnologies.com</a> },
                    { icon: Phone, color: 'text-primary-blue', label: 'Phone', content: <a href="tel:+17869783032" className="text-slate-300 hover:text-white text-sm transition-colors">+1 (786) 978-3032</a> },
                    { icon: MessageCircle, color: 'text-success', label: 'WhatsApp', content: <a href="https://wa.me/17548021063" className="text-slate-300 hover:text-white text-sm transition-colors">+1 (754) 802-1063</a> },
                    { icon: MapPin, color: 'text-primary-blue', label: 'Location', content: <p className="text-slate-300 text-sm">150 S Bryan Rd<br />Dania Beach, FL 33004<br />Florida, USA</p> },
                    { icon: Clock, color: 'text-primary-blue', label: 'Office Hours', content: <p className="text-slate-300 text-sm">Mon – Fri: 9 AM – 6 PM EST<br />Weekends: By appointment</p> },
                  ].map(({ icon: Icon, color, label, content }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="bg-white/10 p-2 rounded-lg flex-shrink-0 mt-0.5">
                        <Icon size={15} className={color} />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-white/50 mb-0.5">{label}</p>
                        {content}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-slate-400 text-xs leading-relaxed">
                    We respond to all inquiries within one business day.
                  </p>
                </div>
              </div>

              {/* Consultation scheduling — space prepared for a future scheduler
                  (e.g. Calendly). No third-party tool is embedded yet. */}
              <div className="clean-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-50 p-2.5 rounded-xl">
                    <CalendarClock size={18} className="text-primary-blue" />
                  </div>
                  <h3 className="text-base font-bold text-primary-navy">Prefer a Scheduled Call?</h3>
                </div>
                <p className="text-text-gray text-sm leading-relaxed">
                  Online scheduling is coming soon. For now, send the form or call us and we&apos;ll
                  set up a consultation at a time that works for you.
                </p>
                {/* TODO: embed scheduling widget here when available */}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
