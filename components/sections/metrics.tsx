"use client"

import { METRICS } from "@/lib/constants"
import { Reveal } from "@/components/ui/reveal"

export function MetricsSection() {
  return (
    <section className="py-20 bg-forest dark:bg-forest-deep">
      <div className="mx-auto max-w-[1220px] px-6 md:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i as 0 | 1 | 2 | 3}>
              <div className="text-center">
                <div className="font-display text-[2.75rem] text-gold mb-1">
                  {m.value}
                </div>
                <div className="text-[0.8rem] font-medium text-cream/50 uppercase tracking-[0.1em]">
                  {m.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
