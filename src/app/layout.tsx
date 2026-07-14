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
  metadataBase: new URL('https://www.bgtecnologies.com'),
  title: {
    default: 'BizGen Technologies — IT Consulting & Web Design for Small Businesses',
    template: '%s | BizGen Technologies LLC',
  },
  description:
    'IT consulting, managed IT support, and business website design for small businesses in Miami, Broward, and South Florida. Practical technology solutions from one partner.',
  keywords: [
    'IT consulting for small businesses',
    'managed IT support',
    'small business IT support',
    'business website design',
    'web design South Florida',
    'web design Miami',
    'Microsoft 365 support',
    'Broward IT services',
    'Dania Beach',
    'BizGen Technologies',
    'BG Tech',
  ],
  authors: [{ name: 'BizGen Technologies LLC', url: 'https://www.bgtecnologies.com' }],
  alternates: { canonical: 'https://www.bgtecnologies.com' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.bgtecnologies.com',
    siteName: 'BizGen Technologies LLC',
    title: 'BizGen Technologies — IT Consulting & Web Design for Small Businesses',
    description:
      'IT consulting, managed IT support, and business website design for small businesses in Miami and Broward. Practical technology from one partner.',
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
