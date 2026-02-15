import type { Metadata } from "next"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { PRICING_TIERS } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for security assessments, managed services, and development retainers.",
}

export default function PricingPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-36 pb-20 bg-forest-deep relative overflow-hidden">
        <div className="absolute -top-[150px] -right-[150px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.06)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-[1220px] px-6 md:px-8 relative z-10">
          <Badge dot dotColor="bg-gold" className="bg-white/[0.06] border-white/10 text-cream mb-6">
            Transparent Pricing
          </Badge>
          <h1 className="font-display heading-hero text-cream mb-5 max-w-[700px]">
            Invest in security, <em className="text-gold italic">not</em> surprises
          </h1>
          <p className="text-[1.1rem] text-cream/55 leading-[1.7] max-w-[560px]">
            Clear, predictable pricing for every engagement. Choose a one-time
            assessment or ongoing protection — we scale with your needs.
          </p>
        </div>
      </section>

      {/* Assessment Packages */}
      <section className="py-24">
        <div className="mx-auto max-w-[1220px] px-6 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-gold-dark dark:text-gold mb-4">
              <span className="h-[1.5px] w-6 bg-gold" />
              Security Assessments
            </div>
            <h2 className="font-display heading-section text-forest-dark dark:text-cream mb-3">
              Start with a clear picture
            </h2>
            <p className="text-[1.05rem] text-muted dark:text-gray-400 max-w-[520px] mx-auto">
              Every engagement begins with understanding your current posture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRICING_TIERS.assessments.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-[12px] overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  tier.highlighted
                    ? "bg-white dark:bg-surface-raised border-2 border-forest dark:border-gold shadow-card dark:shadow-card-dark"
                    : "bg-white dark:bg-surface-raised border border-cream-mid dark:border-white/[0.06]"
                }`}
              >
                {tier.highlighted && (
                  <div className="bg-forest dark:bg-gold text-cream dark:text-forest-deep text-center text-[0.7rem] font-bold uppercase tracking-[0.12em] py-2">
                    Most Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="font-body text-lg font-bold text-forest-dark dark:text-cream mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-[0.85rem] text-muted dark:text-gray-400 mb-5">
                    {tier.description}
                  </p>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="font-display text-[2.5rem] text-forest dark:text-gold">
                      {tier.price}
                    </span>
                  </div>
                  <p className="text-[0.75rem] text-muted-light dark:text-gray-500 mb-6">
                    Timeline: {tier.timeline}
                  </p>
                  <Button
                    href="/contact"
                    variant={tier.highlighted ? "primary" : "secondary"}
                    className="w-full justify-center mb-6"
                  >
                    Get Started <ArrowRight size={14} />
                  </Button>
                  <ul className="space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2.5">
                        <CheckCircle2 size={16} className="text-forest dark:text-gold flex-shrink-0 mt-0.5" />
                        <span className="text-[0.85rem] text-charcoal dark:text-gray-300">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Retainers */}
      <section className="py-24 bg-cream-dark dark:bg-surface-raised">
        <div className="mx-auto max-w-[1220px] px-6 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-gold-dark dark:text-gold mb-4">
              <span className="h-[1.5px] w-6 bg-gold" />
              Monthly Retainers
            </div>
            <h2 className="font-display heading-section text-forest-dark dark:text-cream mb-3">
              Ongoing protection, predictable cost
            </h2>
            <p className="text-[1.05rem] text-muted dark:text-gray-400 max-w-[520px] mx-auto">
              Continuous security doesn&apos;t have to mean unpredictable invoices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRICING_TIERS.retainers.map((tier) => (
              <div
                key={tier.name}
                className="bg-white dark:bg-surface-overlay border border-cream-mid dark:border-white/[0.06] rounded-[12px] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover dark:hover:shadow-card-dark"
              >
                <h3 className="font-body text-lg font-bold text-forest-dark dark:text-cream mb-4">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-display text-[2rem] text-forest dark:text-gold">
                    {tier.price}
                  </span>
                  <span className="text-[0.85rem] text-muted-light dark:text-gray-500">
                    {tier.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <CheckCircle2 size={16} className="text-forest dark:text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-[0.85rem] text-charcoal dark:text-gray-300">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button href="/contact" variant="secondary" className="w-full justify-center">
                  Request This Retainer
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={<>Need something <em className="text-gold italic">custom</em>?</>}
        subtext="Every organization is different. Let's build a scope that fits your exact requirements, timeline, and budget."
        primaryLabel="Request Custom Quote"
      />
    </>
  )
}
