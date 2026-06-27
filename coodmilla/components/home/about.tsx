import { Reveal } from "@/components/shared/reveal"

const pillars = [
  { label: "ISO 14001", color: "bg-gold" },
  { label: "OHSAS 18001", color: "bg-green-light" },
  { label: "Minería sustentable", color: "bg-gold" },
  { label: "Energía limpia", color: "bg-green-light" },
]

const blocks = [
  { emoji: "⛏", bg: "bg-green" },
  { emoji: "⚙", bg: "bg-gold", style: { marginTop: "1.5rem" } },
  { emoji: "🌎", bg: "bg-green-light", style: { marginTop: "-1.5rem" } },
  { emoji: "🔬", bg: "bg-dark" },
]

export function About() {
  return (
    <section id="about" className="bg-cream py-16 md:py-20">
      <div className="container">
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-green">
          Nosotros
        </span>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <Reveal>
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl">
                Liderando la minería <span className="text-gold">responsable</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-muted md:text-base">
                Coodmilla nace de la convicción de que la minería puede ser un motor de desarrollo sostenible. Con más de una década de experiencia, hemos construido un modelo que integra innovación tecnológica, responsabilidad ambiental y relación comunitaria.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
                Operamos bajo los más altos estándares internacionales de seguridad y sostenibilidad.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {pillars.map((p) => (
                  <div key={p.label} className="flex items-center gap-2 text-sm font-medium">
                    <span className={`size-1.5 shrink-0 rounded-full ${p.color}`} />
                    {p.label}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="hidden grid-cols-2 gap-3 md:grid">
              {blocks.map((block, i) => (
                <div
                  key={i}
                  className={`flex aspect-square items-center justify-center rounded-xl text-3xl text-white/20 transition-all duration-400 hover:scale-105 ${block.bg}`}
                  style={block.style}
                >
                  {block.emoji}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
