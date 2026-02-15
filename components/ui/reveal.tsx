"use client"

import { cn } from "@/lib/utils"
import { useReveal } from "@/lib/hooks"

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: 0 | 1 | 2 | 3 | 4
  as?: "div" | "section" | "article" | "li"
}

const delayMap: Record<number, string> = {
  0: "",
  1: "delay-[100ms]",
  2: "delay-[200ms]",
  3: "delay-[300ms]",
  4: "delay-[400ms]",
}

export function Reveal({
  delay = 0,
  as: Tag = "div",
  className,
  children,
  ...props
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <Tag
      ref={ref as React.Ref<any>}
      className={cn(
        "transition-all duration-700 ease-out-expo",
        delayMap[delay],
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
