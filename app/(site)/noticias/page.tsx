import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { Reveal } from "@/components/shared/reveal"

export const metadata: Metadata = {
  title: "Noticias — Coodmilla",
}

const featured = {
  emoji: "🏆",
  gradient: "from-green to-[#034a27]",
  date: "15 junio 2026",
  title: "Coodmilla recertifica ISO 14001 con calificación sobresaliente",
  desc: "La auditoría externa destacó nuestro compromiso con la gestión ambiental en todas las operaciones. Obtuvimos una calificación del 94 %, la más alta en la historia de la compañía, reflejando nuestro liderazgo en minería sostenible en Colombia.",
}

const allNews = [
  {
    emoji: "⚡",
    gradient: "from-gold to-[#c47d1a]",
    date: "28 mayo 2026",
    title: "Nuevo récord de producción en el Complejo Altamira",
    desc: "Alcanzamos 120,000 toneladas anuales de cobre con una eficiencia energética sin precedentes en el sector.",
  },
  {
    emoji: "🤝",
    gradient: "from-green-light to-[#4d7a28]",
    date: "10 mayo 2026",
    title: "Programa de desarrollo comunitario en Antioquia",
    desc: "La iniciativa beneficiará a más de 2,000 familias con proyectos de infraestructura, educación y salud.",
  },
  {
    emoji: "🔬",
    gradient: "from-dark to-green",
    date: "22 abril 2026",
    title: "Investigación en nuevas tecnologías de procesamiento",
    desc: "Nos aliamos con la Universidad Nacional para desarrollar métodos de extracción más limpios y eficientes.",
  },
  {
    emoji: "🌿",
    gradient: "from-green to-green-light",
    date: "8 marzo 2026",
    title: "Coodmilla siembra 50,000 árboles en Boyacá",
    desc: "Como parte de nuestro plan de compensación ambiental, superamos la meta de reforestación del año.",
  },
  {
    emoji: "📊",
    gradient: "from-gold to-green",
    date: "15 febrero 2026",
    title: "Reconocimiento a la seguridad laboral",
    desc: "Recibimos el premio nacional a la excelencia en seguridad minera, con más de 2 millones de horas sin accidentes.",
  },
  {
    emoji: "🏅",
    gradient: "from-dark to-gold",
    date: "20 enero 2026",
    title: "Nueva certificación ISO 50001 en eficiencia energética",
    desc: "Reforzamos nuestro compromiso con la optimización del consumo energético en todas nuestras operaciones.",
  },
]

export default function NoticiasPage() {
  return (
    <>
      <PageHeader
        label="Noticias"
        title={<>Últimas <span className="text-gold">novedades</span></>}
        description="Entérate de las noticias más recientes sobre nuestra operación y el sector minero en Colombia."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl">
              <span className="text-gold">Destacada</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="mt-6 overflow-hidden rounded-xl border border-border bg-white transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-green/6">
              <div className={`flex h-48 items-center justify-center bg-gradient-to-br text-5xl md:h-56 ${featured.gradient}`}>
                {featured.emoji}
              </div>
              <div className="p-6 md:p-8">
                <div className="text-xs font-medium text-text-muted">{featured.date}</div>
                <h3 className="mt-2 text-xl font-bold text-dark md:text-2xl">{featured.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{featured.desc}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green transition-all hover:gap-2.5 hover:text-gold"
                >
                  Leer noticia completa &rarr;
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container">
          <Reveal>
            <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl">
              Todas las <span className="text-gold">noticias</span>
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {allNews.map((item) => (
              <Reveal key={item.title}>
                <div className="overflow-hidden rounded-xl border border-border bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:shadow-lg hover:shadow-green/6">
                  <div className={`flex h-40 items-center justify-center bg-gradient-to-br text-3xl transition-transform duration-400 ${item.gradient}`}>
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
    </>
  )
}
