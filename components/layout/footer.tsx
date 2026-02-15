import Link from "next/link"
import { SITE } from "@/lib/constants"

const footerSections = [
  {
    title: "Services",
    links: [
      { label: "Cybersecurity", href: "/services#cybersecurity" },
      { label: "Software Development", href: "/services#software-ai" },
      { label: "Database Management", href: "/services#database" },
      { label: "Compliance Consulting", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Pricing", href: "/pricing" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Security Blog", href: "#" },
      { label: "Compliance Guides", href: "#" },
      { label: "Assessment Request", href: "/contact" },
      { label: "Emergency Response", href: "/contact" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-charcoal dark:bg-surface pt-16 pb-10">
      <div className="mx-auto max-w-[1220px] px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-8 h-8 bg-forest rounded-lg dark:bg-gold/90">
                <span className="absolute inset-0 m-auto w-[14px] h-[14px] border-2 border-gold rounded-full dark:border-forest-deep" />
              </div>
              <span className="font-body text-base font-bold text-cream">
                StackSecure<span className="text-gold">Labs</span>
              </span>
            </Link>
            <p className="mt-4 text-[0.85rem] text-cream/40 leading-[1.7] max-w-[300px]">
              Specialized cybersecurity consulting for government agencies,
              healthcare organizations, and regulated enterprises. Based in{" "}
              {SITE.location}.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[0.75rem] font-bold uppercase tracking-[0.12em] text-cream/35 mb-5">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.88rem] text-cream/60 hover:text-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[0.78rem] text-cream/30">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Security Policy"].map((t) => (
              <Link
                key={t}
                href="#"
                className="text-[0.78rem] text-cream/30 hover:text-gold transition-colors"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
