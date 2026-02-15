import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: "div" | "section" | "article"
}

export function Container({
  as: Tag = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto max-w-[1220px] px-6 md:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  )
}

interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean
}

export function SectionLabel({
  dark,
  className,
  children,
  ...props
}: SectionLabelProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-3",
        dark ? "text-gold" : "text-gold-dark dark:text-gold",
        className
      )}
      {...props}
    >
      <span className="h-[1.5px] w-6 bg-gold" />
      {children}
    </div>
  )
}

interface SectionHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3"
  dark?: boolean
}

export function SectionHeading({
  as: Tag = "h2",
  dark,
  className,
  children,
  ...props
}: SectionHeadingProps) {
  return (
    <Tag
      className={cn(
        "font-display heading-section",
        dark ? "text-cream" : "text-forest-dark dark:text-cream",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

interface SectionSubtextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  dark?: boolean
}

export function SectionSubtext({
  dark,
  className,
  children,
  ...props
}: SectionSubtextProps) {
  return (
    <p
      className={cn(
        "text-[1.05rem] leading-[1.7] max-w-[520px]",
        dark ? "text-cream/60" : "text-muted dark:text-gray-400",
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
