import type { Metadata } from "next"
import { TEAM_MEMBERS, SITE } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/sections/cta-section"
import { MetricsSection } from "@/components/sections/metrics"

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.name} is a specialized technology consulting firm founded by experienced cybersecurity, database, and software professionals.`,
}

const values = [
  { title: "Security Without Compromise", description: "We never cut corners on security to meet a deadline. If it's not secure, it doesn't ship." },
  { title: "Transparency First", description: "You'll always know what we're doing, why we're doing it, and how much it costs. No black boxes." },
  { title: "Regulated Industry Fluency", description: "We understand that compliance isn't a checkbox — it's the operating environment your organization lives in." },
  { title: "Senior Talent, Every Engagement", description: "No bait-and-switch. The people you meet in the proposal are the people doing the work." },
]

export default function AboutPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-forest-deep relative overflow-hidden">
        <div className="absolute -top-[150px] -right-[150px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.06)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-[1220px] px-6 md:px-8 relative z-10">
          <Badge dot dotColor="bg-gold" className="bg-white/[0.06] border-white/10 text-cream mb-6">
            About StackSecureLabs
          </Badge>
          <h1 className="font-display heading-hero text-cream mb-5 max-w-[700px]">
            Built by <em className="text-gold italic">practitioners</em>, not just consultants
          </h1>
          <p className="text-[1.1rem] text-cream/55 leading-[1.7] max-w-[560px]">
            We founded StackSecureLabs because regulated industries deserve a
            technology partner that understands their constraints — not one
            that learns on the job.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="mx-auto max-w-[1220px] px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-gold-dark dark:text-gold mb-4">
                <span className="h-[1.5px] w-6 bg-gold" />
                Our Mission
              </div>
              <h2 className="font-display heading-section text-forest-dark dark:text-cream mb-5">
                Deliver secure, scalable solutions that protect and empower
              </h2>
              <p className="text-[1rem] text-muted dark:text-gray-400 leading-[1.75] mb-6">
                {SITE.name} is a technology consulting firm specializing in
                cybersecurity, database management, and custom software
                development. We serve government agencies and private sector
                organizations seeking to enhance their security posture.
              </p>
              <p className="text-[1rem] text-muted dark:text-gray-400 leading-[1.75]">
                Our vision is simple: to become the trusted technology partner
                for organizations requiring the highest standards of security
                and reliability.
              </p>
            </div>
            <div className="bg-forest-deep rounded-[12px] p-10">
              <h3 className="font-display text-xl text-cream mb-6">
                Why We&apos;re Different
              </h3>
              <div className="space-y-5">
                {values.map((v, i) => (
                  <div key={v.title} className="flex gap-4">
                    <span className="font-mono text-[0.65rem] text-gold tracking-wider mt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="font-body text-[0.95rem] font-bold text-cream mb-1">
                        {v.title}
                      </h4>
                      <p className="text-[0.85rem] text-cream/50 leading-relaxed">
                        {v.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <MetricsSection />

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-[1220px] px-6 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-gold-dark dark:text-gold mb-4 justify-center">
              <span className="h-[1.5px] w-6 bg-gold" />
              The Team
            </div>
            <h2 className="font-display heading-section text-forest-dark dark:text-cream mb-3">
              Senior expertise on every engagement
            </h2>
            <p className="text-[1.05rem] text-muted dark:text-gray-400 max-w-[520px] mx-auto">
              Three core specialists covering the full surface area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TEAM_MEMBERS.map((m) => (
              <div
                key={m.initials}
                className="bg-white dark:bg-surface-raised border border-cream-mid dark:border-white/[0.06] rounded-[12px] p-8 text-center hover:-translate-y-1 transition-all duration-300 hover:shadow-card-hover dark:hover:shadow-card-dark"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-forest to-forest-light flex items-center justify-center text-gold font-bold text-xl mx-auto mb-5">
                  {m.initials}
                </div>
                <h3 className="font-body text-lg font-bold text-forest-dark dark:text-cream mb-1">
                  {m.name}
                </h3>
                <p className="text-[0.8rem] text-gold-dark dark:text-gold font-semibold mb-4">
                  {m.role}
                </p>
                <p className="text-[0.85rem] text-muted dark:text-gray-400 leading-relaxed">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-cream-dark dark:bg-surface-raised">
        <div className="mx-auto max-w-[1220px] px-6 md:px-8 text-center">
          <h3 className="font-body text-sm font-bold uppercase tracking-[0.1em] text-muted-light dark:text-gray-500 mb-8">
            Certifications &amp; Clearances We&apos;re Pursuing
          </h3>
          <div className="flex justify-center flex-wrap gap-3">
            {["SOC 2 Type II", "ISO 27001", "SAM Registration", "CAGE Code", "Professional Liability Insurance", "Cyber Liability Insurance"].map((cert) => (
              <Badge key={cert} variant="mono">{cert}</Badge>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={<>Let&apos;s build something <em className="text-gold italic">secure</em> together</>}
        subtext="Whether you need a security assessment, a compliant application, or a managed database — we're ready to talk."
      />
    </>
  )
}
