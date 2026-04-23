import type { Metadata } from 'next'
import { Lexend, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
})

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'BizGen Technologies LLC — IT, Cybersecurity & Software Development',
    template: '%s | BizGen Technologies LLC',
  },
  description:
    'Dania Beach, FL-based technology company specializing in IT & Cybersecurity Consulting, Custom Software Development, IT Equipment Disposal, and Kiosk Solutions. Solving problems since 2020.',
  keywords: [
    'IT consulting',
    'cybersecurity',
    'managed IT services',
    'software development',
    'web development',
    'IT equipment disposal',
    'data destruction',
    'kiosk solutions',
    'self-service kiosks',
    'Fort Lauderdale',
    'Dania Beach',
    'Florida',
    'BizGen Technologies',
    'BG Tech',
  ],
  authors: [{ name: 'BizGen Technologies LLC', url: 'https://www.bgtecnologies.com' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bgtecnologies.com',
    siteName: 'BizGen Technologies LLC',
    title: 'BizGen Technologies LLC — IT, Cybersecurity & Software Development',
    description:
      'Enterprise-grade IT support, cybersecurity, and custom software for growing businesses. Solving problems since 2020.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lexend.variable} ${sourceSans.variable}`}>
      <body className={`${sourceSans.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
