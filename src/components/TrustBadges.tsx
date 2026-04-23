import { ShieldCheck, Clock, Wrench, TrendingUp } from 'lucide-react'

const badges = [
  {
    icon: ShieldCheck,
    title: 'Microsoft Certified',
    subtitle: 'Expert Partners',
    color: 'text-primary-blue',
    bg: 'bg-blue-50',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    subtitle: 'Always Available',
    color: 'text-secondary-cyan',
    bg: 'bg-cyan-50',
  },
  {
    icon: Wrench,
    title: 'Solving Problems',
    subtitle: 'Since 2020',
    color: 'text-primary-blue',
    bg: 'bg-blue-50',
  },
  {
    icon: TrendingUp,
    title: '99.9% Uptime',
    subtitle: 'Guaranteed',
    color: 'text-success',
    bg: 'bg-emerald-50',
  },
]

export default function TrustBadges() {
  return (
    <section className="py-10 bg-white border-b border-slate-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {badges.map(({ icon: Icon, title, subtitle, color, bg }) => (
            <div
              key={title}
              className="clean-card flex flex-col items-center text-center p-6 gap-3"
            >
              <div className={`${bg} p-3 rounded-xl`}>
                <Icon className={`w-7 h-7 ${color}`} aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-primary-navy text-sm leading-tight">{title}</p>
                <p className="text-text-gray text-xs mt-0.5">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
