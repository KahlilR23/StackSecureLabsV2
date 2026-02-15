import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { CTASection } from "@/components/sections/cta-section"
import { TestimonialSection } from "@/components/sections/testimonial"

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "See how StackSecureLabs has helped government agencies, healthcare organizations, and enterprises secure their infrastructure.",
}

const caseStudies = [
  {
    client: "Federal Healthcare Contractor",
    industry: "Government / Healthcare",
    challenge: "A federal healthcare contractor faced an upcoming FISMA audit with significant compliance gaps. Their legacy infrastructure had accumulated years of security debt.",
    solution: "We conducted a comprehensive security assessment, identified 47 critical vulnerabilities, and built a prioritized remediation roadmap. Our team implemented network segmentation, deployed endpoint protection, and established continuous monitoring.",
    results: ["Passed FISMA audit with zero critical findings", "47 vulnerabilities remediated in 8 weeks", "Continuous monitoring framework established", "Ongoing retainer for quarterly security reviews"],
    tags: ["FISMA Compliance", "Security Assessment", "Remediation"],
    metric: "100%",
    metricLabel: "Compliance achieved",
  },
  {
    client: "Regional Health System",
    industry: "Healthcare",
    challenge: "A multi-facility health system needed to migrate their patient data infrastructure to the cloud while maintaining HIPAA compliance, plus a custom patient portal with strict access controls.",
    solution: "We architected a HIPAA-compliant cloud infrastructure on AWS, migrated 3 legacy databases with zero downtime, and developed a secure patient portal with role-based access controls and comprehensive audit trails.",
    results: ["Zero-downtime migration of 3 databases", "HIPAA-compliant cloud architecture deployed", "Custom patient portal with full audit logging", "40% reduction in infrastructure costs"],
    tags: ["HIPAA", "Cloud Migration", "Custom Software", "Database"],
    metric: "40%",
    metricLabel: "Cost reduction",
  },
  {
    client: "FinTech Startup",
    industry: "Financial Services",
    challenge: "A rapidly growing fintech startup needed SOC 2 Type II certification to close enterprise deals, but their development velocity had outpaced their security practices.",
    solution: "We embedded security into their existing CI/CD pipeline, conducted a full codebase security review, implemented automated vulnerability scanning, and guided them through the SOC 2 audit process.",
    results: ["SOC 2 Type II certified in 4 months", "Automated security scanning in CI/CD pipeline", "Zero-day remediation SLA established", "Delivered on time and under budget"],
    tags: ["SOC 2", "DevSecOps", "Financial Compliance"],
    metric: "4mo",
    metricLabel: "Time to certification",
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-forest-deep relative overflow-hidden">
        <div className="absolute -top-[150px] -right-[150px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.06)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-[1220px] px-6 md:px-8 relative z-10">
          <Badge dot dotColor="bg-gold" className="bg-white/[0.06] border-white/10 text-cream mb-6">
            Proven Results
          </Badge>
          <h1 className="font-display heading-hero text-cream mb-5 max-w-[700px]">
            Real outcomes for <em className="text-gold italic">regulated</em> organizations
          </h1>
          <p className="text-[1.1rem] text-cream/55 leading-[1.7] max-w-[560px]">
            From federal audits to cloud migrations, here&apos;s how we&apos;ve helped
            organizations strengthen their security posture.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-[1220px] px-6 md:px-8">
          <div className="space-y-8">
            {caseStudies.map((cs) => (
              <div
                key={cs.client}
                className="bg-white dark:bg-surface-raised border border-cream-mid dark:border-white/[0.06] rounded-[12px] overflow-hidden hover:shadow-card-hover dark:hover:shadow-card-dark transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px]">
                  <div className="p-10">
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <Badge variant="tag">{cs.industry}</Badge>
                      {cs.tags.map((tag) => (
                        <Badge key={tag} variant="tag">{tag}</Badge>
                      ))}
                    </div>
                    <h2 className="font-display text-2xl text-forest-dark dark:text-cream mb-2">
                      {cs.client}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                      <div>
                        <h3 className="font-body text-[0.75rem] font-bold uppercase tracking-[0.1em] text-muted-light dark:text-gray-500 mb-3">
                          The Challenge
                        </h3>
                        <p className="text-[0.88rem] text-muted dark:text-gray-400 leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-body text-[0.75rem] font-bold uppercase tracking-[0.1em] text-muted-light dark:text-gray-500 mb-3">
                          Our Solution
                        </h3>
                        <p className="text-[0.88rem] text-muted dark:text-gray-400 leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="font-body text-[0.75rem] font-bold uppercase tracking-[0.1em] text-muted-light dark:text-gray-500 mb-3">
                        Results
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2 text-[0.88rem] text-charcoal dark:text-gray-300">
                            <span className="text-forest dark:text-gold mt-0.5">✓</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-forest-deep flex flex-col items-center justify-center p-10 text-center">
                    <div className="font-display text-[3.5rem] text-gold leading-none mb-2">
                      {cs.metric}
                    </div>
                    <div className="text-[0.8rem] font-medium text-cream/50 uppercase tracking-[0.08em]">
                      {cs.metricLabel}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialSection index={1} />

      <CTASection
        heading={<>Your success story starts <em className="text-gold italic">here</em></>}
        subtext="Every case study started with a single conversation. Let's talk about your security challenges."
      />
    </>
  )
}
