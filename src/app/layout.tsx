import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BizGen Technologies LLC - Custom Software Development & IT Services',
  description: 'Fort Lauderdale-based software development and IT services company specializing in custom software, QA testing, self-service kiosks, and IT management.',
  keywords: 'software development, IT services, QA testing, self-service kiosks, MSP, managed IT, Fort Lauderdale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
