// components/Hobbies.js
export default function Hobbies() {
  const items = [
    { label: "I live for cricket", sub: "& football", emoji_alt:"Sports" },
    { label: "I explore AI", sub: "every single day", emoji_alt:"Tech" },
    { label: "I read tales", sub: "& web browse", emoji_alt:"Reading" },
    { label: "I watch tech", sub: "talks & docs", emoji_alt:"Watch" },
  ]
  return (
    <section id="personality" className="scroll-mt-24 px-8 md:px-16 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
        {items.map((item, i) => (
          <div key={i} className="border-t border-[var(--rule)] py-10
            pr-8">
            <p className="text-2xl font-medium mb-1">{item.label}</p>
            <p className="text-sm text-[var(--muted)] tracking-wider
              uppercase">{item.sub}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
