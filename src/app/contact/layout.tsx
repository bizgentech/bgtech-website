import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us - BizGen Technologies LLC',
  description: 'Get in touch with BizGen Technologies for custom software development, QA testing, self-service kiosks, or IT management services.',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
