"use client"

import { WHY_POINTS } from "@/lib/constants"
import { Reveal } from "@/components/ui/reveal"
import { SectionLabel, SectionHeading, SectionSubtext } from "@/components/ui/layout"

export function WhySection() {
  return (
    <section className="relative py-28 bg-forest-deep overflow-hidden" id="why">
      <div className="absolute -top-[200px] -right-[100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.06)_0%,transparent_70%)]" />

      <div className="mx-auto max-w-[1220px] px-6 md:px-8 relative z-10">
        <Reveal>
          <SectionLabel dark>Why StackSecureLabs</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <SectionHeading dark className="mb-4 max-w-[600px]">
            Not another generic IT shop
          </SectionHeading>
        </Reveal>
        <Reveal delay={2}>
          <SectionSubtext dark className="mb-14">
            We built our firm on a simple premise — security expertise is the
            differentiator that matters most when organizations handle sensitive
            data.
          </SectionSubtext>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {WHY_POINTS.map((point, i) => (
            <Reveal key={point.number} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
              <div className="bg-white/[0.04] border border-white/[0.06] rounded-[20px] p-8 transition-all duration-400 ease-out-expo hover:bg-white/[0.07] hover:border-gold/15 h-full">
                <div className="font-mono text-[0.65rem] font-medium text-gold tracking-[0.1em] mb-4">
                  {point.number}
                </div>
                <h3 className="font-display text-[1.25rem] text-cream mb-2.5 tracking-tight">
                  {point.title}
                </h3>
                <p className="text-[0.88rem] text-cream/55 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
