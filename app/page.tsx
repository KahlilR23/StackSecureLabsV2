import { Hero } from "@/components/sections/hero"
import { TrustBar } from "@/components/sections/trust-bar"
import { ServicesGrid } from "@/components/sections/services-grid"
import { WhySection } from "@/components/sections/why-section"
import { MetricsSection } from "@/components/sections/metrics"
import { ProcessSection } from "@/components/sections/process"
import { ComplianceSection } from "@/components/sections/compliance"
import { TestimonialSection } from "@/components/sections/testimonial"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <WhySection />
      <MetricsSection />
      <ProcessSection />
      <ComplianceSection />
      <TestimonialSection />
      <CTASection />
    </>
  )
}
