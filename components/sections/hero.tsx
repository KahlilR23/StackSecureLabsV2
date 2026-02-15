"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(15,76,58,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(212,165,116,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute -bottom-[150px] -left-[100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,165,116,0.06)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(15,76,58,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-[1220px] px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-[4.5rem] items-center">
          {/* Content */}
          <div>
            <Badge dot className="mb-7">
              Trusted by regulated industries since 2024
            </Badge>

            <h1 className="font-display heading-hero text-forest-dark dark:text-cream mb-6">
              Security that <em className="text-gold-dark dark:text-gold italic">earns</em> the
              trust you promise clients
            </h1>

            <p className="text-[1.125rem] text-muted dark:text-gray-400 leading-[1.7] mb-9 max-w-[480px]">
              We help government agencies, healthcare organizations, and
              enterprises protect critical infrastructure through specialized
              cybersecurity consulting, custom software, and database management.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button href="/contact" size="md">
                Request Security Assessment
                <ArrowRight size={16} />
              </Button>
              <Button href="/services" variant="secondary" size="md">
                Explore Services
              </Button>
            </div>

            {/* Proof badges */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex gap-2">
                {["FISMA", "HIPAA", "SOC 2", "NIST"].map((f) => (
                  <Badge key={f} variant="mono">
                    {f}
                  </Badge>
                ))}
              </div>
              <span className="text-[0.8rem] text-muted-light dark:text-gray-500">
                Compliance frameworks supported
              </span>
            </div>
          </div>

          {/* Dashboard Visual */}
          <div className="relative max-w-[560px] lg:max-w-none">
            {/* Floating badges */}
            <div className="absolute -top-3 -right-4 z-20 hidden md:flex items-center gap-2 bg-white dark:bg-surface-raised border border-cream-mid dark:border-white/10 rounded-[10px] px-4 py-2.5 shadow-float dark:shadow-card-dark animate-float text-[0.75rem] font-semibold text-forest dark:text-cream">
              <span className="w-7 h-7 rounded-lg bg-forest/[0.08] dark:bg-gold/[0.12] flex items-center justify-center text-[0.85rem]">
                🛡
              </span>
              ISO 27001 Ready
            </div>
            <div className="absolute bottom-[60px] -left-7 z-20 hidden md:flex items-center gap-2 bg-white dark:bg-surface-raised border border-cream-mid dark:border-white/10 rounded-[10px] px-4 py-2.5 shadow-float dark:shadow-card-dark animate-float-delayed text-[0.75rem] font-semibold text-forest dark:text-cream">
              <span className="w-7 h-7 rounded-lg bg-gold/15 flex items-center justify-center text-[0.85rem]">
                ✓
              </span>
              Zero Critical Findings
            </div>

            {/* Dashboard card */}
            <div className="bg-white dark:bg-surface-raised rounded-[12px] shadow-elevated dark:shadow-elevated-dark border border-forest/[0.06] dark:border-white/[0.06] overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-cream-dark dark:border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F5A0A0]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F5D5A0]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#A0D9A5]" />
                  </div>
                  <span className="font-mono text-[0.75rem] font-semibold text-muted-light dark:text-gray-500">
                    SECURITY POSTURE OVERVIEW
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[0.7rem] font-semibold text-forest dark:text-warm-success">
                  <span className="w-[7px] h-[7px] bg-warm-success rounded-full animate-pulse-live" />
                  Live Monitoring
                </div>
              </div>

              {/* Metrics row */}
              <div className="p-5">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <MetricCard label="Threat Score" value="98.4" change="▲ 2.1% this week" />
                  <MetricCard label="Vulnerabilities" value="0" change="All patched" valueClass="text-gold-dark dark:text-gold" />
                  <MetricCard label="Compliance" value="100%" change="Fully compliant" />
                </div>

                {/* Scan section */}
                <div className="bg-forest-deep rounded-[10px] p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-gold/[0.08] to-transparent animate-scan-sweep" />
                  <div className="flex justify-between items-center mb-4 relative z-10">
                    <span className="font-mono text-[0.7rem] font-semibold text-gold uppercase tracking-[0.1em]">
                      Network Security Scan
                    </span>
                    <Badge variant="status">PASSED</Badge>
                  </div>
                  <div className="flex flex-col gap-2 relative z-10">
                    <ScanRow label="Firewall" value={100} color="bg-warm-success" />
                    <ScanRow label="Endpoints" value={97} color="bg-warm-success" />
                    <ScanRow label="Encryption" value={100} color="bg-gold" />
                    <ScanRow label="Access Ctrl" value={98} color="bg-[#60A5FA]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MetricCard({
  label,
  value,
  change,
  valueClass = "text-forest dark:text-cream",
}: {
  label: string
  value: string
  change: string
  valueClass?: string
}) {
  return (
    <div className="bg-cream dark:bg-white/[0.04] rounded-[10px] p-3.5">
      <div className="text-[0.65rem] font-semibold text-muted-light dark:text-gray-500 uppercase tracking-[0.08em] mb-1">
        {label}
      </div>
      <div className={`text-2xl font-bold tracking-tight ${valueClass}`}>
        {value}
      </div>
      <div className="text-[0.65rem] font-semibold text-warm-success mt-0.5">
        {change}
      </div>
    </div>
  )
}

function ScanRow({
  label,
  value,
  color,
}: {
  label: string
  value: number
  color: string
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[0.65rem] text-white/50 w-20">
        {label}
      </span>
      <div className="flex-1 h-1.5 bg-white/[0.08] rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="font-mono text-[0.65rem] font-bold text-white/80 w-9 text-right">
        {value}%
      </span>
    </div>
  )
}
