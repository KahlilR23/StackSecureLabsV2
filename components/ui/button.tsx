import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-out-expo rounded-[6px] text-[0.95rem] leading-none disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest/30 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-forest text-cream border-2 border-forest hover:bg-forest-light hover:border-forest-light hover:-translate-y-0.5 hover:shadow-btn dark:bg-gold dark:text-forest-deep dark:border-gold dark:hover:bg-gold-dark dark:hover:border-gold-dark dark:hover:shadow-btn-gold",
        secondary:
          "bg-transparent text-forest border-2 border-forest/20 hover:border-forest hover:bg-forest/[0.04] dark:text-cream dark:border-cream/20 dark:hover:border-cream/40 dark:hover:bg-cream/[0.04]",
        gold: "bg-gold text-forest-dark font-bold hover:bg-gold-dark hover:-translate-y-0.5 hover:shadow-btn-gold",
        ghost:
          "bg-transparent text-cream border-2 border-cream/20 hover:border-cream/40 hover:bg-cream/[0.05]",
        outline:
          "bg-white text-forest border border-cream-mid hover:border-forest/20 hover:shadow-card-hover hover:-translate-y-0.5 dark:bg-surface-raised dark:text-cream dark:border-white/10 dark:hover:border-gold/20",
        link: "bg-transparent text-forest dark:text-gold p-0 hover:gap-3 font-semibold text-[0.85rem]",
      },
      size: {
        sm: "px-4 py-2 text-[0.85rem]",
        md: "px-7 py-[0.9rem]",
        lg: "px-8 py-4 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, children, ...props }, ref) => {
    if (href) {
      return (
        <a
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </a>
      )
    }
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
