"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SERVICES } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import { ServiceIcon } from "@/components/ui/icon"
import { Reveal } from "@/components/ui/reveal"
import { SectionLabel, SectionHeading, SectionSubtext } from "@/components/ui/layout"

export function ServicesGrid() {
  return (
    <section className="py-28" id="services">
      <div className="mx-auto max-w-[1220px] px-6 md:px-8">
        <Reveal>
          <SectionLabel>What We Do</SectionLabel>
        </Reveal>
        <Reveal delay={1}>
          <SectionHeading className="mb-4 max-w-[600px]">
            Three disciplines, one mission — secure your organization
          </SectionHeading>
        </Reveal>
        <Reveal delay={2}>
          <SectionSubtext className="mb-14">
            We combine specialized expertise across cybersecurity, software
            engineering, and data management to deliver comprehensive protection
            for regulated industries.
          </SectionSubtext>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.slug} delay={(i + 1) as 1 | 2 | 3}>
              <Link href={`/services#${service.slug}`} className="group block h-full">
                <div className="relative h-full bg-white dark:bg-surface-raised border border-cream-mid dark:border-white/[0.06] rounded-[20px] p-9 overflow-hidden transition-all duration-400 ease-out-expo hover:border-forest/15 dark:hover:border-gold/15 hover:shadow-card-hover dark:hover:shadow-card-dark hover:-translate-y-1">
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-forest dark:bg-gold scale-x-0 origin-left transition-transform duration-500 ease-out-expo group-hover:scale-x-100" />

                  <ServiceIcon
                    iconName={service.icon}
                    variant={service.iconBg}
                    className="mb-6"
                  />
                  <div className="font-mono text-[0.65rem] font-medium text-muted-light dark:text-gray-500 tracking-[0.1em] mb-3">
                    {service.number}
                  </div>
                  <h3 className="font-display text-[1.35rem] text-forest-dark dark:text-cream mb-3 tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[0.9rem] text-muted dark:text-gray-400 leading-relaxed mb-5">
                    {service.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {service.tags.map((tag) => (
                      <Badge key={tag} variant="tag">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-forest dark:text-gold group-hover:gap-2.5 transition-[gap] duration-300 ease-out-expo">
                    Learn more
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
