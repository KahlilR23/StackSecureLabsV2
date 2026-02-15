"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <button
        className={cn(
          "relative w-10 h-10 rounded-full flex items-center justify-center",
          "border border-cream-mid dark:border-white/10",
          "bg-white/60 dark:bg-white/5",
          className
        )}
        aria-label="Toggle theme"
      >
        <div className="w-[18px] h-[18px]" />
      </button>
    )
  }

  const isDark = theme === "dark"

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "relative w-10 h-10 rounded-full flex items-center justify-center",
        "border transition-all duration-300 ease-out-expo",
        "border-cream-mid hover:border-forest/30 bg-white/60 hover:bg-white",
        "dark:border-white/10 dark:hover:border-gold/30 dark:bg-white/5 dark:hover:bg-white/10",
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        size={18}
        className={cn(
          "absolute transition-all duration-300",
          isDark
            ? "opacity-0 rotate-90 scale-0"
            : "opacity-100 rotate-0 scale-100 text-gold-dark"
        )}
      />
      <Moon
        size={18}
        className={cn(
          "absolute transition-all duration-300",
          isDark
            ? "opacity-100 rotate-0 scale-100 text-gold"
            : "opacity-0 -rotate-90 scale-0"
        )}
      />
    </button>
  )
}
