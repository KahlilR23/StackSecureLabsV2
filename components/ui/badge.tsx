import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-forest/[0.06] text-forest border border-forest/10 rounded-full px-3 py-1 text-[0.8rem] dark:bg-gold/10 dark:text-gold dark:border-gold/20",
        tag: "bg-cream text-muted rounded-full px-2.5 py-1 text-[0.7rem] tracking-wide dark:bg-white/[0.06] dark:text-gray-400",
        mono: "bg-white border border-cream-mid rounded-[6px] px-3 py-1.5 font-mono text-[0.75rem] text-forest tracking-wider dark:bg-surface-raised dark:border-white/10 dark:text-gold",
        status:
          "bg-warm-success/15 text-warm-success rounded-full px-2.5 py-0.5 text-[0.6rem] font-bold tracking-wider uppercase",
        gold: "bg-gold/15 text-gold-dark rounded-full px-3 py-1 text-[0.75rem] dark:text-gold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
  dotColor?: string
}

export function Badge({
  className,
  variant,
  dot,
  dotColor = "bg-gold",
  children,
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))} {...props}>
      {dot && (
        <span
          className={cn(
            "w-[7px] h-[7px] rounded-full mr-2 animate-pulse-dot",
            dotColor
          )}
        />
      )}
      {children}
    </span>
  )
}
