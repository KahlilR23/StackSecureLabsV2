"use client"

import { Reveal } from "@/components/ui/reveal"
import { TESTIMONIALS } from "@/lib/constants"

export function TestimonialSection({ index = 0 }: { index?: number }) {
  const t = TESTIMONIALS[index]

  return (
    <section className="py-20 pb-28">
      <div className="mx-auto max-w-[1220px] px-6 md:px-8">
        <Reveal>
          <div className="max-w-[720px] mx-auto text-center">
            <blockquote className="relative font-display heading-quote italic text-forest-dark dark:text-cream mb-8">
              <span className="absolute -top-6 -left-2 text-[4rem] text-gold-light dark:text-gold/30 leading-none font-display select-none">
                &ldquo;
              </span>
              {t.quote}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest to-forest-light flex items-center justify-center text-gold font-bold text-[0.9rem]">
                {t.initials}
              </div>
              <div className="text-left">
                <div className="font-bold text-charcoal dark:text-cream text-[0.9rem]">
                  {t.name}
                </div>
                <div className="text-[0.8rem] text-muted-light dark:text-gray-500">{t.role}</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
