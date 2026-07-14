import type { Metadata } from 'next'
import RedirectClient from '@/components/RedirectClient'

const NEW_PATH = '/services/it-consulting-managed-support/'

export const metadata: Metadata = {
  title: 'IT Consulting & Managed IT Support for Small Businesses',
  description:
    'This page has moved to IT Consulting & Managed Support.',
  alternates: { canonical: `https://www.bgtecnologies.com${NEW_PATH}` },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <RedirectClient to={NEW_PATH} />
}
