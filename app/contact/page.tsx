"use client"

import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react"
import { SITE } from "@/lib/constants"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"

const serviceOptions = [
  { value: "cybersecurity", label: "Cybersecurity Consulting" },
  { value: "software", label: "Custom Software & AI" },
  { value: "database", label: "Database Management" },
  { value: "assessment", label: "Security Assessment" },
  { value: "compliance", label: "Compliance Consulting" },
  { value: "other", label: "Other / Not Sure" },
]

const budgetOptions = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k-150k", label: "$50,000 – $150,000" },
  { value: "150k-plus", label: "$150,000+" },
  { value: "unsure", label: "Not sure yet" },
]

const faqs = [
  { q: "What happens after I submit the form?", a: "A senior consultant will review your inquiry and respond within 2 business hours with next steps." },
  { q: "Do you offer free consultations?", a: "Yes. Your first discovery call is complimentary. We'll assess your needs and provide an honest recommendation." },
  { q: "What industries do you work with?", a: "We specialize in government agencies, healthcare organizations, financial services, and any enterprise operating under regulatory compliance." },
  { q: "How quickly can you start?", a: "For security assessments, we can typically begin within 1-2 weeks. Larger engagements require a scoping phase." },
]

export default function ContactPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-forest-deep relative overflow-hidden">
        <div className="absolute -top-[150px] -right-[150px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.06)_0%,transparent_70%)]" />
        <div className="mx-auto max-w-[1220px] px-6 md:px-8 relative z-10">
          <Badge dot dotColor="bg-gold" className="bg-white/[0.06] border-white/10 text-cream mb-6">
            Get In Touch
          </Badge>
          <h1 className="font-display heading-hero text-cream mb-5 max-w-[700px]">
            Start a <em className="text-gold italic">conversation</em> about your security
          </h1>
          <p className="text-[1.1rem] text-cream/55 leading-[1.7] max-w-[560px]">
            Whether you need an assessment, a quote, or just want to talk
            through your security challenges — we respond within 2 business hours.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-[1220px] px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-16">
            <div>
              <h2 className="font-display text-2xl text-forest-dark dark:text-cream mb-2">
                Tell us about your project
              </h2>
              <p className="text-[0.9rem] text-muted dark:text-gray-400 mb-8">
                Fill out the form below and a senior consultant will get back to you.
              </p>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input label="First Name" placeholder="Jane" required />
                  <Input label="Last Name" placeholder="Mitchell" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input label="Work Email" type="email" placeholder="jane@agency.gov" required />
                  <Input label="Phone" type="tel" placeholder="(555) 123-4567" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Input label="Organization" placeholder="Federal Health Agency" />
                  <Input label="Job Title" placeholder="CTO" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Select label="Service Needed" placeholder="Select a service..." options={serviceOptions} defaultValue="" />
                  <Select label="Budget Range" placeholder="Select range..." options={budgetOptions} defaultValue="" />
                </div>
                <Textarea
                  label="Project Details"
                  placeholder="Tell us about your security challenges, compliance requirements, timeline, or anything else..."
                  rows={5}
                />
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Submit Inquiry
                  <ArrowRight size={16} />
                </Button>
                <p className="text-[0.75rem] text-muted-light dark:text-gray-500">
                  Your information is encrypted and handled in compliance with our security policy.
                </p>
              </form>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-surface-raised border border-cream-mid dark:border-white/[0.06] rounded-[12px] p-8">
                <h3 className="font-body text-base font-bold text-forest-dark dark:text-cream mb-6">
                  Direct Contact
                </h3>
                <div className="space-y-5">
                  <ContactDetail icon={<Mail size={18} />} label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
                  <ContactDetail icon={<Phone size={18} />} label="Phone" value={SITE.phone} href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`} />
                  <ContactDetail icon={<MapPin size={18} />} label="Location" value={SITE.location} />
                  <ContactDetail icon={<Clock size={18} />} label="Response Time" value="Within 2 business hours" />
                </div>
              </div>

              <div className="bg-forest-deep rounded-[12px] p-8">
                <h3 className="font-body text-base font-bold text-cream mb-3">
                  Security Emergency?
                </h3>
                <p className="text-[0.85rem] text-cream/50 mb-5 leading-relaxed">
                  If you&apos;re experiencing an active security incident, contact our emergency response team directly.
                </p>
                <Button variant="gold" size="sm" href={`mailto:${SITE.emergencyEmail}`}>
                  Emergency Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-cream-dark dark:bg-surface-raised">
        <div className="mx-auto max-w-[1220px] px-6 md:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] text-gold-dark dark:text-gold mb-4 justify-center">
              <span className="h-[1.5px] w-6 bg-gold" />
              FAQ
            </div>
            <h2 className="font-display heading-section text-forest-dark dark:text-cream">
              Common questions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[900px] mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white dark:bg-surface-overlay border border-cream-mid dark:border-white/[0.06] rounded-[12px] p-7">
                <h3 className="font-body text-[0.95rem] font-bold text-forest-dark dark:text-cream mb-2">
                  {faq.q}
                </h3>
                <p className="text-[0.85rem] text-muted dark:text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function ContactDetail({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return (
    <div className="flex gap-3">
      <div className="w-9 h-9 rounded-[10px] bg-forest/[0.06] dark:bg-gold/[0.1] flex items-center justify-center text-forest dark:text-gold flex-shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-[0.7rem] font-semibold text-muted-light dark:text-gray-500 uppercase tracking-wider">
          {label}
        </div>
        {href ? (
          <a href={href} className="text-[0.88rem] font-medium text-forest dark:text-gold hover:text-gold-dark transition-colors">
            {value}
          </a>
        ) : (
          <span className="text-[0.88rem] font-medium text-charcoal dark:text-gray-300">{value}</span>
        )}
      </div>
    </div>
  )
}
