// components/Certifications.js
import certs from '@/data/certifications.json'

export default function Certifications() {
  // Sort newest first
  const sorted = [...certs].reverse()
  return (
    <section className="px-8 md:px-16 py-20">
      <p className="text-xs tracking-[0.15em] uppercase
        text-[var(--muted)] mb-12">Certifications</p>

      {sorted.map((c, i) => (
        <div key={i} className="border-t border-[var(--rule)] py-5
          flex justify-between items-baseline gap-4">
          <div>
            <p className="text-sm font-medium">{c.name}</p>
            <p className="text-xs text-[var(--muted)] mt-0.5">
              {c.issuer}</p>
          </div>
          <p className="text-xs font-mono text-[var(--muted)]
            whitespace-nowrap">{c.date}</p>
        </div>
      ))}
      <div className="border-t border-[var(--rule)]"/>
    </section> )
}
