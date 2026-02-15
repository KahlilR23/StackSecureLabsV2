import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-[12px] transition-all duration-400 ease-out-expo",
  {
    variants: {
      variant: {
        elevated:
          "bg-white border border-cream-mid shadow-card hover:shadow-card-hover hover:border-forest/15 hover:-translate-y-1 dark:bg-surface-raised dark:border-white/[0.06] dark:shadow-card-dark dark:hover:border-gold/15",
        flat: "bg-white border border-cream-mid dark:bg-surface-raised dark:border-white/[0.06]",
        outlined:
          "bg-transparent border border-cream-mid hover:border-forest/15 hover:shadow-card-hover hover:-translate-y-1 dark:border-white/[0.06] dark:hover:border-gold/15",
        dark: "bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] hover:border-gold/15",
        highlight:
          "bg-white border-2 border-forest shadow-card hover:shadow-card-hover hover:-translate-y-1 dark:bg-surface-raised dark:border-gold dark:shadow-card-dark",
      },
    },
    defaultVariants: {
      variant: "elevated",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  accentBar?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, accentBar, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative overflow-hidden", cardVariants({ variant, className }))}
      {...props}
    >
      {accentBar && (
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-forest dark:bg-gold scale-x-0 origin-left transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />
      )}
      {children}
    </div>
  )
)

Card.displayName = "Card"

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-8", className)} {...props} />
))

CardContent.displayName = "CardContent"

export { Card, CardContent, cardVariants }
