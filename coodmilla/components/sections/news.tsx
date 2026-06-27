import { Reveal } from "@/components/reveal"

const newsItems = [
  {
    emoji: "📰",
    gradient: "from-green to-[#034a27]",
    date: "15 junio 2026",
    title: "Coodmilla recertifica ISO 14001 con calificación sobresaliente",
    desc: "La auditoría externa destacó nuestro compromiso con la gestión ambiental en todas las operaciones.",
  },
  {
    emoji: "⚡",
    gradient: "from-gold to-[#c47d1a]",
    date: "28 mayo 2026",
    title: "Nuevo récord de producción en el Complejo Altamira",
    desc: "Alcanzamos 120,000 toneladas anuales de cobre con una eficiencia energética sin precedentes.",
  },
  {
    emoji: "🤝",
    gradient: "from-green-light to-[#4d7a28]",
    date: "10 mayo 2026",
    title: "Inauguramos programa de desarrollo comunitario en Antioquia",
    desc: "La iniciativa beneficiará a más de 2,000 familias con proyectos de infraestructura y educación.",
  },
]

export function News() {
  return (
    <section id="news" className="bg-white py-16 md:py-20">
      <div className="container">
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-green">
          Noticias
        </span>
        <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl">
          Últimas <span className="text-gold">novedades</span>
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
          Entérate de las noticias más recientes sobre nuestra operación y el sector minero.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {newsItems.map((item) => (
            <Reveal key={item.title}>
              <div className="overflow-hidden rounded-xl border border-border bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:shadow-lg hover:shadow-green/6">
                <div className={`flex h-40 items-center justify-center bg-gradient-to-br text-3xl transition-transform duration-400 group-hover:scale-105 ${item.gradient}`}>
                  {item.emoji}
                </div>
                <div className="p-5">
                  <div className="text-xs text-text-muted">{item.date}</div>
                  <h4 className="mt-1.5 text-sm font-bold leading-snug text-dark">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                    {item.desc}
                  </p>
                  <a
                    href="#"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-green transition-all hover:gap-2.5 hover:text-gold"
                  >
                    Leer más &rarr;
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
