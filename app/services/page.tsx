import type { Metadata } from "next"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { SERVICES } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ServiceIcon } from "@/components/ui/icon"
import { CTASection } from "@/components/sections/cta-section"
import { TrustBar } from "@/components/sections/trust-bar"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Cybersecurity consulting, custom software development, and database management for regulated industries.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-20 bg-forest-deep relative overflow-hidden">
        <div className="absolute -top-[150px] -right-[150px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.06)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-[1220px] px-6 md:px-8 relative z-10">
          <Badge dot dotColor="bg-gold" className="bg-white/[0.06] border-white/10 text-cream mb-6">
            Full-Spectrum Security Services
          </Badge>
          <h1 className="font-display heading-hero text-cream mb-5 max-w-[700px]">
            Three disciplines, <em className="text-gold italic">one</em> secure
            foundation
          </h1>
          <p className="text-[1.1rem] text-cream/55 leading-[1.7] max-w-[560px]">
            Every engagement starts with security. Whether we&apos;re building your
            application, managing your databases, or auditing your
            infrastructure — compliance and protection are non-negotiable.
          </p>
        </div>
      </section>

      {/* Service Details */}
      {SERVICES.map((service, idx) => (
        <section
          key={service.slug}
          id={service.slug}
          className={idx % 2 === 0 ? "py-24" : "py-24 bg-cream-dark dark:bg-surface-raised"}
        >
          <div className="mx-auto max-w-[1220px] px-6 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className={idx % 2 !== 0 ? "lg:order-2" : ""}>
                <ServiceIcon iconName={service.icon} variant={service.iconBg} className="mb-6" />
                <div className="font-mono text-[0.65rem] font-medium text-muted-light dark:text-gray-500 tracking-[0.1em] mb-3">
                  SERVICE {service.number}
                </div>
                <h2 className="font-display heading-section text-forest-dark dark:text-cream mb-4">
                  {service.title}
                </h2>
                <p className="text-[1rem] text-muted dark:text-gray-400 leading-[1.75] mb-8">
                  {service.longDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {service.tags.map((tag) => (
                    <Badge key={tag} variant="tag">{tag}</Badge>
                  ))}
                </div>
                <Button href="/contact">
                  Discuss {service.title}
                  <ArrowRight size={16} />
                </Button>
              </div>

              <div className={`bg-white dark:bg-surface-overlay border border-cream-mid dark:border-white/[0.06] rounded-[12px] p-8 ${idx % 2 !== 0 ? "lg:order-1" : ""}`}>
                <h3 className="font-body text-sm font-bold uppercase tracking-[0.1em] text-muted-light dark:text-gray-500 mb-6">
                  What&apos;s Included
                </h3>
                <ul className="space-y-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <CheckCircle2 size={18} className="text-forest dark:text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-[0.9rem] text-charcoal dark:text-gray-300 leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      <TrustBar />
      <CTASection
        heading={<>Not sure which service fits? Let&apos;s <em className="text-gold italic">talk</em>.</>}
        subtext="Schedule a free discovery call and we'll map your needs to the right engagement model."
      />
    </>
  )
}
