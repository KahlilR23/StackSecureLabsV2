import { cn } from "@/lib/utils"
import {
  Shield,
  Zap,
  Database,
  ArrowRight,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Lock,
  FileCheck,
  BarChart3,
  Globe,
  Building2,
  Heart,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  zap: Zap,
  database: Database,
  "arrow-right": ArrowRight,
  "chevron-right": ChevronRight,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  clock: Clock,
  check: CheckCircle2,
  lock: Lock,
  "file-check": FileCheck,
  "bar-chart": BarChart3,
  globe: Globe,
  building: Building2,
  heart: Heart,
}

interface IconProps {
  name: string
  size?: number
  className?: string
}

export function Icon({ name, size = 20, className }: IconProps) {
  const LucideIcon = iconMap[name]
  if (!LucideIcon) return null
  return <LucideIcon size={size} className={className} />
}

/* Colorful service icon backgrounds matching the HTML design */
const iconStyles = {
  cyber: {
    bg: "bg-[#0F4C3A]/[0.08] dark:bg-gold/[0.12]",
    color: "text-forest dark:text-gold",
  },
  software: {
    bg: "bg-gold/[0.12] dark:bg-gold/[0.15]",
    color: "text-gold-dark dark:text-gold",
  },
  database: {
    bg: "bg-forest-deep/[0.08] dark:bg-forest-light/[0.15]",
    color: "text-forest-deep dark:text-forest-light",
  },
} as const

interface ServiceIconProps {
  iconName: string
  variant: keyof typeof iconStyles
  className?: string
}

export function ServiceIcon({ iconName, variant, className }: ServiceIconProps) {
  return (
    <div
      className={cn(
        "w-[52px] h-[52px] rounded-[10px] flex items-center justify-center",
        iconStyles[variant].bg,
        className
      )}
    >
      <Icon name={iconName} size={24} className={iconStyles[variant].color} />
    </div>
  )
}
