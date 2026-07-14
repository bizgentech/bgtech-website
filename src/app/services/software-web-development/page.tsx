import type { Metadata } from 'next'
import RedirectClient from '@/components/RedirectClient'

const NEW_PATH = '/services/web-design-development/'

export const metadata: Metadata = {
  title: 'Web Design & Development for Small Businesses in South Florida',
  description: 'This page has moved to Web Design & Development.',
  alternates: { canonical: `https://www.bgtecnologies.com${NEW_PATH}` },
  robots: { index: false, follow: true },
}

export default function Page() {
  return <RedirectClient to={NEW_PATH} />
}
