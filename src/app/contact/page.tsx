'use client'

import { useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker, HiClock } from 'react-icons/hi'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    projectDescription: '',
    budget: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 24 hours.')
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        projectDescription: '',
        budget: '',
      })

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }, 1000)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="gradient-blue-cyan section-padding">
        <div className="container-custom">
          <div className="glass-card max-w-3xl mx-auto p-8 md:p-12 text-center">
            <h1 className="heading-xl text-white mb-6">
              Let's Build Something Great Together
            </h1>
            <p className="text-white/90 text-xl leading-relaxed">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding gradient-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card-light p-8 md:p-10">
                <h2 className="heading-md text-primary-navy mb-6">Send Us a Message</h2>

                {submitMessage && (
                  <div className="bg-success/10 border border-success text-success px-6 py-4 rounded-lg mb-6">
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-neutral-dark font-semibold mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent backdrop-blur-[8px] bg-white/50 transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-neutral-dark font-semibold mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent backdrop-blur-[8px] bg-white/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  {/* Company & Phone (2 columns) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-neutral-dark font-semibold mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent backdrop-blur-[8px] bg-white/50 transition-all"
                        placeholder="Your Company"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-neutral-dark font-semibold mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent backdrop-blur-[8px] bg-white/50 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div>
                    <label htmlFor="service" className="block text-neutral-dark font-semibold mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent backdrop-blur-[8px] bg-white/50 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="custom-software">Custom Software Development</option>
                      <option value="qa-testing">QA Services & Testing</option>
                      <option value="kiosks">Self-Service Kiosk Solutions</option>
                      <option value="it-management">IT Management Services (MSP)</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label htmlFor="projectDescription" className="block text-neutral-dark font-semibold mb-2">
                      Project Description <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      required
                      value={formData.projectDescription}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-vertical"
                      placeholder="Tell us about your project, challenges, or what you're looking to build..."
                    />
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label htmlFor="budget" className="block text-neutral-dark font-semibold mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent backdrop-blur-[8px] bg-white/50 transition-all"
                    >
                      <option value="">Select a budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-plus">$100,000+</option>
                      <option value="not-sure">Not Sure Yet</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-blue-cyan text-white px-8 py-4 rounded-lg font-bold hover:scale-[1.02] transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="gradient-navy-blue glass-card text-white p-8 sticky top-24">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <HiMail className="text-primary-blue text-2xl mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <a href="mailto:info@bgtecnologies.com" className="text-gray-300 hover:text-white transition-colors">
                        info@bgtecnologies.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <HiPhone className="text-primary-blue text-2xl mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <a href="tel:+17869783032" className="text-gray-300 hover:text-white transition-colors">
                        +1 (786) 978-3032
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start">
                    <HiPhone className="text-success text-2xl mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">WhatsApp</h4>
                      <a href="https://wa.me/17548021063" className="text-gray-300 hover:text-white transition-colors">
                        +1 (754) 802-1063
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start">
                    <HiLocationMarker className="text-primary-blue text-2xl mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Location</h4>
                      <p className="text-gray-300">
                        150 S Bryan Rd<br />
                        Dania Beach, 33004<br />
                        Florida USA
                      </p>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="flex items-start">
                    <HiClock className="text-primary-blue text-2xl mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-1">Office Hours</h4>
                      <p className="text-gray-300">
                        Monday - Friday<br />
                        9:00 AM - 6:00 PM EST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="mt-8 pt-8 border-t border-gray-700">
                  <p className="text-sm text-gray-400">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
