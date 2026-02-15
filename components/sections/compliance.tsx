"use client"

import { ArrowRight } from "lucide-react"
import { COMPLIANCE_FRAMEWORKS } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { SectionLabel, SectionHeading, SectionSubtext } from "@/components/ui/layout"

export function ComplianceSection() {
  return (
    <section className="py-28 bg-cream-dark dark:bg-surface-raised" id="compliance">
      <div className="mx-auto max-w-[1220px] px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <SectionLabel>Compliance Expertise</SectionLabel>
            </Reveal>
            <Reveal delay={1}>
              <SectionHeading className="mb-4 max-w-[600px]">
                We navigate the frameworks so you can focus on your mission
              </SectionHeading>
            </Reveal>
            <Reveal delay={2}>
              <SectionSubtext className="mb-8">
                Regulatory compliance is complex and ever-evolving. Our team
                maintains active certifications and deep expertise across major
                federal and industry frameworks, turning compliance from a burden
                into a competitive advantage.
              </SectionSubtext>
            </Reveal>
            <Reveal delay={3}>
              <Button href="/contact">
                Discuss Your Requirements
                <ArrowRight size={16} />
              </Button>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {COMPLIANCE_FRAMEWORKS.map((fw, i) => (
              <Reveal key={fw.name} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="bg-white dark:bg-surface-overlay border border-cream-mid dark:border-white/[0.06] rounded-[20px] p-7 text-center transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-card-hover dark:hover:shadow-card-dark">
                  <div className="w-12 h-12 rounded-[12px] bg-forest/[0.06] dark:bg-gold/[0.1] mx-auto mb-4 flex items-center justify-center text-xl">
                    {fw.icon}
                  </div>
                  <div className="font-mono text-[0.85rem] font-semibold text-forest dark:text-gold mb-1">
                    {fw.name}
                  </div>
                  <div className="text-[0.72rem] text-muted-light dark:text-gray-500">
                    {fw.description}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
