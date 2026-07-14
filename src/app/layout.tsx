import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Geist → headings, UI, navigation. Inter → body. JetBrains Mono → technical labels only.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['500', '600'],
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
    <html
      lang="en"
      className={`${GeistSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
