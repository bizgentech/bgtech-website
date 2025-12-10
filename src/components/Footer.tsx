import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-navy text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/Logo Bizgen.png"
                alt="BizGen Technologies Logo"
                width={150}
                height={50}
                className="h-12 w-auto mb-2"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">BizGen Technologies</span>
                <span className="text-gray-400 text-xs">BG Tech</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Building technology that works. Custom software development and IT services for growing businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="text-gray-400 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/custom-software" className="text-gray-400 hover:text-white transition-colors">
                  Custom Software
                </Link>
              </li>
              <li>
                <Link href="/services/qa-testing" className="text-gray-400 hover:text-white transition-colors">
                  QA & Testing
                </Link>
              </li>
              <li>
                <Link href="/services/kiosks" className="text-gray-400 hover:text-white transition-colors">
                  Self-Service Kiosks
                </Link>
              </li>
              <li>
                <Link href="/services/it-management" className="text-gray-400 hover:text-white transition-colors">
                  IT Management (MSP)
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <HiMail className="text-primary-blue flex-shrink-0" />
                <a href="mailto:info@bgtecnologies.com" className="hover:text-white transition-colors">
                  info@bgtecnologies.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <HiPhone className="text-primary-blue flex-shrink-0" />
                <a href="tel:+17869783032" className="hover:text-white transition-colors">
                  +1 (786) 978-3032
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <HiPhone className="text-success flex-shrink-0" />
                <a href="https://wa.me/17548021063" className="hover:text-white transition-colors">
                  WhatsApp: +1 (754) 802-1063
                </a>
              </li>
              <li className="flex items-start space-x-2 text-gray-400">
                <HiLocationMarker className="text-primary-blue flex-shrink-0 mt-1" />
                <span>150 S Bryan Rd, Dania Beach, 33004, Florida USA</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-400 hover:text-primary-blue transition-colors text-xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-blue transition-colors text-xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-blue transition-colors text-xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary-blue transition-colors text-xl"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} BizGen Technologies LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
