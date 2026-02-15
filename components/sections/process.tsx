"use client"

import { PROCESS_STEPS } from "@/lib/constants"
import { Reveal } from "@/components/ui/reveal"
import { SectionLabel, SectionHeading, SectionSubtext } from "@/components/ui/layout"

export function ProcessSection() {
  return (
    <section className="py-28" id="process">
      <div className="mx-auto max-w-[1220px] px-6 md:px-8">
        <div className="text-center mb-16">
          <Reveal>
            <SectionLabel className="justify-center">How We Work</SectionLabel>
          </Reveal>
          <Reveal delay={1}>
            <SectionHeading className="mx-auto mb-4">
              From assessment to ongoing protection
            </SectionHeading>
          </Reveal>
          <Reveal delay={2}>
            <SectionSubtext className="mx-auto text-center">
              A structured, transparent engagement model that keeps you informed
              and in control at every stage.
            </SectionSubtext>
          </Reveal>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-9 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-[1.5px] bg-gradient-to-r from-cream-mid via-gold-light to-cream-mid dark:from-white/5 dark:via-gold/30 dark:to-white/5" />

          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} delay={(i + 1) as 1 | 2 | 3 | 4}>
              <div className="text-center relative z-10 group">
                <div className="w-[72px] h-[72px] rounded-full bg-white dark:bg-surface-raised border-2 border-cream-mid dark:border-white/10 flex items-center justify-center mx-auto mb-6 font-display text-2xl text-forest dark:text-gold transition-all duration-400 ease-out-expo group-hover:border-gold group-hover:shadow-[0_4px_20px_rgba(212,165,116,0.2)] group-hover:scale-[1.08]">
                  {step.number}
                </div>
                <h3 className="font-body text-base font-bold text-forest-dark dark:text-cream mb-2">
                  {step.title}
                </h3>
                <p className="text-[0.85rem] text-muted dark:text-gray-400 leading-relaxed max-w-[220px] mx-auto">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
