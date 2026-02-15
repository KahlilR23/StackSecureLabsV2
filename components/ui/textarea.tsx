import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-")
    return (
      <div className="space-y-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-[0.8rem] font-semibold text-charcoal dark:text-gray-300 tracking-wide"
          >
            {label}
          </label>
        )}
        <textarea
          id={inputId}
          ref={ref}
          className={cn(
            "flex w-full rounded-[6px] border bg-white px-4 py-3 text-[0.9rem] text-charcoal font-body min-h-[140px] resize-y",
            "placeholder:text-muted-light/60 border-cream-mid",
            "focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30",
            "transition-all duration-200",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "dark:bg-surface-raised dark:border-white/10 dark:text-gray-200 dark:placeholder:text-gray-500 dark:focus:ring-gold/20 dark:focus:border-gold/30",
            error && "border-warm-error focus:ring-warm-error/20",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-[0.75rem] text-warm-error font-medium">{error}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = "Textarea"
export { Textarea }
