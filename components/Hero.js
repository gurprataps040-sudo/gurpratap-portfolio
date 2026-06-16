// components/Hero.js
import profile from '@/data/profile.json'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center
      px-8 md:px-16 py-24">

      {/* Giant name — the hero IS the name */}
      <div className="mb-6">
        <h1 className="text-[15vw] md:text-[12vw] font-bold
          leading-none tracking-tight uppercase"
          style={{fontFamily:'var(--font-display)'}}>
          {profile.name.first}
        </h1>
        <h1 className="text-[15vw] md:text-[12vw] font-light
          leading-none tracking-tight uppercase text-[var(--muted)]"
          style={{fontFamily:'var(--font-display)'}}>
          {profile.name.last}
        </h1>
      </div>

      {/* Tagline */}
      <p className="text-xs tracking-[0.2em] uppercase
        text-[var(--muted)] mb-8">
        {profile.tagline}
      </p>

      <p className="text-[var(--muted)] max-w-xs text-sm
        leading-relaxed">
        {profile.location}
      </p>
    </section>
  )
}
