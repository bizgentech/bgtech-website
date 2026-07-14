import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with BizGen Technologies for IT Consulting & Managed Support and Web Design & Development for small businesses in South Florida.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
