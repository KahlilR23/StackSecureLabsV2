import { forwardRef } from "react"
import { cn } from "@/lib/utils"

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, options, placeholder, id, ...props }, ref) => {
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
        <select
          id={inputId}
          ref={ref}
          className={cn(
            "flex w-full rounded-[6px] border bg-white px-4 py-3 text-[0.9rem] text-charcoal font-body appearance-none",
            "border-cream-mid",
            "focus:outline-none focus:ring-2 focus:ring-forest/20 focus:border-forest/30",
            "transition-all duration-200",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%234A5568%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_1rem_center] bg-no-repeat",
            "dark:bg-surface-raised dark:border-white/10 dark:text-gray-200 dark:focus:ring-gold/20 dark:focus:border-gold/30",
            error && "border-warm-error focus:ring-warm-error/20",
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {error && (
          <p className="text-[0.75rem] text-warm-error font-medium">{error}</p>
        )}
      </div>
    )
  }
)

Select.displayName = "Select"
export { Select }
