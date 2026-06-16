// components/Hobbies.js
import Image from "next/image"

export default function Hobbies() {
  const items = [
    { label: "I live for cricket", sub: "& football", image: "/images/personality_cricket.png" },
    { label: "I explore AI", sub: "every single day", image: "/images/personality_ai.png" },
    { label: "I read tales", sub: "& web browse", image: "/images/personality_tales.png" },
    { label: "I watch tech", sub: "talks & docs", image: "/images/personality_tech.png" },
  ]

  return (
    <section id="personality" className="scroll-mt-24 px-8 md:px-16 py-20">
      <div className="flex justify-between items-center border-b border-rule pb-2 mb-8">
        <h2 className="font-display font-bold text-xs uppercase tracking-[0.3em] text-muted">
          Personality & Hobbies
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {items.map((item, i) => (
          <div key={i} className="group space-y-4">
            {/* Image container */}
            <div className="relative w-full aspect-[16/10] overflow-hidden border border-rule bg-accent-lt/10 hover:border-accent transition-colors duration-300">
              <Image
                src={item.image}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Text description */}
            <div className="pt-2">
              <p className="text-xl font-medium text-ink leading-tight">{item.label}</p>
              <p className="text-xs font-mono text-[var(--muted)] tracking-wider uppercase mt-1">
                {item.sub}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
