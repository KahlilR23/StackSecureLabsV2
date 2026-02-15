"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { useScrolled, useMobileNav } from "@/lib/hooks"
import { NAV_LINKS, SITE } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { X, Menu, FolderLock } from "lucide-react"

export function Header() {
  const scrolled = useScrolled()
  const { isOpen, toggle, close } = useMobileNav()

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-out-expo",
          scrolled
            ? "bg-cream/92 backdrop-blur-xl saturate-[180%] py-3 shadow-[0_1px_0_rgba(15,76,58,0.06)] dark:bg-surface/92 dark:shadow-[0_1px_0_rgba(255,255,255,0.04)]"
            : "bg-transparent py-5"
        )}
      >
        <div className="mx-auto max-w-[1220px] px-6 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-forest rounded-[10px] flex items-center justify-center dark:bg-gold/90">
              <FolderLock size={20} className="text-gold dark:text-forest-deep" strokeWidth={2} />
            </div>
            <span className="font-body text-[1.15rem] font-bold text-forest tracking-tight dark:text-cream">
              StackSecure<span className="text-gold-dark dark:text-gold">Labs</span>
            </span>
          </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-9">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="relative text-[0.9rem] font-medium text-muted hover:text-forest transition-colors dark:text-gray-400 dark:hover:text-cream after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1.5px] after:bg-forest dark:after:bg-gold after:transition-[width] after:duration-300 after:ease-out-expo hover:after:w-full"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <ThemeToggle />
              </li>
              <li>
                <Button href="/contact" size="sm">
                  Get Assessment
                </Button>
              </li>
            </ul>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <ThemeToggle />
              <button
                onClick={toggle}
                className="w-10 h-10 flex items-center justify-center text-forest dark:text-cream"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-cream dark:bg-surface transition-all duration-400 ease-out-expo lg:hidden",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="text-2xl font-display text-forest-dark hover:text-gold-dark transition-colors dark:text-cream dark:hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" size="lg" onClick={close}>
            Get Assessment
          </Button>
        </div>
      </div>
    </>
  )
}
