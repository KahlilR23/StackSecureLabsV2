import { COMPLIANCE_FRAMEWORKS } from "@/lib/constants"

export function TrustBar() {
  return (
    <section className="py-14 border-t border-b border-cream-mid dark:border-white/[0.06]">
      <div className="mx-auto max-w-[1220px] px-6 md:px-8">
        <p className="text-center text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-muted-light dark:text-gray-500 mb-7">
          Compliance Frameworks &amp; Partnerships
        </p>
        <div className="flex justify-center items-center gap-10 flex-wrap">
          {COMPLIANCE_FRAMEWORKS.map((fw) => (
            <div
              key={fw.name}
              className="flex items-center gap-2 font-mono text-[0.8rem] font-medium text-muted-light dark:text-gray-500 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-8 h-8 rounded-lg bg-cream-dark dark:bg-white/[0.06] flex items-center justify-center text-[0.75rem]">
                {fw.icon}
              </div>
              {fw.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
