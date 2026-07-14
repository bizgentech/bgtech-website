// Central project data — shared by the home page and /portfolio.
// Featured = real, verifiable client websites (strongest proof of execution).
// In-house = internal platforms we are building. Status is shown honestly and
// no language should imply active clients, users, or results unless true.

export interface FeaturedProject {
  title: string
  category: string
  description: string
  image: string
  domain: string
  url: string
  status: 'Live' | 'In Development'
  tags: string[]
}

export interface InHouseProject {
  title: string
  description: string
  tags: string[]
  href: string
  status: 'In Development' | 'Beta' | 'Concept'
  gradient: string
}

export const featuredProjects: FeaturedProject[] = [
  {
    title: 'Maverick Home Inspections',
    category: 'Business Website',
    description:
      'A professional website for a licensed Miami home-inspection company — built to establish credibility, present their services clearly, and make it easy for visitors to request a quote.',
    image: '/images/projects/maverick-inspections/preview.webp',
    domain: 'maverick-inspections.com',
    url: 'https://maverick-inspections.com/',
    status: 'Live',
    tags: ['Business Website', 'Home Inspections', 'Lead Generation', 'Mobile Responsive'],
  },
  {
    title: 'Sweets by Isis',
    category: 'Business Website',
    description:
      'A business website in development for a Miami artisanal bakery — presenting a product catalog, baking courses, and quote requests. It is not yet a finished online store.',
    image: '/images/projects/sweets-by-isis/preview.webp',
    domain: 'sweets-by-isis.vercel.app',
    url: 'https://sweets-by-isis.vercel.app/',
    status: 'In Development',
    tags: ['Business Website', 'Product Catalog', 'Quote Requests', 'Courses'],
  },
]

export const inHouseProjects: InHouseProject[] = [
  {
    title: 'CTI Pro Labs',
    description:
      'A laboratory management concept for construction-testing operations — digital sample tracking, automated workflows, and compliance reporting.',
    tags: ['React', 'NestJS', 'PostgreSQL', 'PWA'],
    href: '/portfolio/cti-pro-labs',
    status: 'In Development',
    gradient: 'from-blue-700 to-blue-500',
  },
  {
    title: 'Matter IQ',
    description:
      'A legal billing automation platform in development — time tracking, invoicing, and practice-management integrations for law firms.',
    tags: ['Next.js', 'NestJS', 'Stripe', 'PostgreSQL'],
    href: '/portfolio/matter-iq',
    status: 'Beta',
    gradient: 'from-violet-700 to-violet-500',
  },
  {
    title: 'Cerebro Field',
    description:
      'A field-service dispatch and technician-management platform in development — route planning, job scheduling, and live status tracking.',
    tags: ['React', 'NestJS', 'Maps API', 'PostgreSQL'],
    href: '/portfolio/cerebro-field',
    status: 'Beta',
    gradient: 'from-orange-700 to-amber-500',
  },
  {
    title: 'Washapp',
    description:
      'An on-demand mobile car-wash concept connecting customers with service providers via GPS-based matching and real-time dispatch.',
    tags: ['React Native', 'Node.js', 'Stripe Connect', 'GPS'],
    href: '/portfolio/washapp',
    status: 'Concept',
    gradient: 'from-cyan-700 to-cyan-500',
  },
  {
    title: 'Sentinel MSP Platform',
    description:
      'A self-hosted MSP platform concept — RMM, ticketing, asset management, and a customer portal built for managed service providers.',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Docker'],
    href: '/portfolio/sentinel-msp',
    status: 'In Development',
    gradient: 'from-slate-700 to-slate-500',
  },
]
