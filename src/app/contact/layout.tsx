import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | BizGen Technologies LLC',
  description:
    'Get in touch with BizGen Technologies. We offer IT & Cybersecurity Consulting, Software Development, IT Equipment Disposal, and Kiosk Solutions.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
