"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { SITE } from "@/lib/constants"

interface CTASectionProps {
  heading?: React.ReactNode
  subtext?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CTASection({
  heading = (
    <>
      Ready to secure what <em className="text-gold italic">matters</em>?
    </>
  ),
  subtext = "Schedule a complimentary security assessment to uncover vulnerabilities, map compliance gaps, and build a roadmap to protection.",
  primaryLabel = "Schedule Free Assessment",
  primaryHref = "/contact",
  secondaryLabel = `Call ${SITE.phone}`,
  secondaryHref = `tel:${SITE.phone.replace(/[^+\d]/g, "")}`,
}: CTASectionProps) {
  return (
    <section className="py-28" id="contact-cta">
      <div className="mx-auto max-w-[1220px] px-6 md:px-8">
        <Reveal>
          <div className="relative bg-forest rounded-[28px] p-12 md:p-[4.5rem] text-center overflow-hidden">
            <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.1)_0%,transparent_60%)]" />
            <div className="absolute -bottom-[200px] -right-[100px] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(26,95,76,0.4)_0%,transparent_60%)]" />

            <div className="relative z-10">
              <h2 className="font-display heading-section text-cream mb-4">
                {heading}
              </h2>
              <p className="text-[1.05rem] text-cream/60 max-w-[520px] mx-auto mb-9 leading-[1.7]">
                {subtext}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button variant="gold" size="lg" href={primaryHref}>
                  {primaryLabel}
                  <ArrowRight size={16} />
                </Button>
                <Button variant="ghost" size="lg" href={secondaryHref}>
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
