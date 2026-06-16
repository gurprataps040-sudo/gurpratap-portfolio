// components/Projects.js
import projects from '@/data/projects.json'

export default function Projects() {
  return (
    <section className="px-8 md:px-16 py-20">
      <p className="text-xs tracking-[0.15em] uppercase
        text-[var(--muted)] mb-12">Work & Projects</p>

      {projects.map((p, i) => (
        <div key={p.id} className="border-t border-[var(--rule)]
          py-8 grid grid-cols-[auto_1fr] md:grid-cols-[160px_1fr]
          gap-6 md:gap-12 group">

          {/* Date + org meta */}
          <div>
            <p className="text-xs font-mono text-[var(--muted)]">
              {p.date}
            </p>
            <p className="text-xs text-[var(--muted)] mt-1
              leading-relaxed">{p.org}</p>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-lg font-medium mb-2">{p.title}</h3>
            <p className="text-sm text-[var(--muted)] leading-relaxed
              mb-3">{p.description}</p>
            <div className="flex gap-2 flex-wrap">
              {p.tech.map(t => (
                <span key={t} className="text-xs font-mono
                  text-[var(--muted)] border border-[var(--rule)]
                  px-2 py-0.5 rounded-full">{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
      <div className="border-t border-[var(--rule)]"/>
    </section>
  )
}
