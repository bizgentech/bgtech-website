import { ShieldCheck, Clock, Wrench, TrendingUp } from 'lucide-react'

interface Badge {
  icon: React.ReactNode
  title: string
  subtitle: string
}

const badges: Badge[] = [
  {
    icon: <ShieldCheck className="w-10 h-10" />,
    title: 'Microsoft Certified',
    subtitle: 'Expert Partners',
  },
  {
    icon: <Clock className="w-10 h-10" />,
    title: '24/7 Support',
    subtitle: 'Always Available',
  },
  {
    icon: <Wrench className="w-10 h-10" />,
    title: 'Solving Problems',
    subtitle: 'Since 2020',
  },
  {
    icon: <TrendingUp className="w-10 h-10" />,
    title: '99.9% Uptime',
    subtitle: 'Guaranteed',
  },
]

export default function TrustBadges() {
  return (
    <section
      className="py-8 md:py-12 border-y border-white/30"
      style={{
        background: 'rgba(255, 255, 255, 0.5)',
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="glass-card-light flex flex-col items-center text-center p-6"
            >
              <div className="text-primary-blue mb-3 text-5xl">
                {badge.icon}
              </div>
              <h3 className="font-bold text-primary-navy text-lg mb-1">
                {badge.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {badge.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
