import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { Reveal } from "@/components/shared/reveal"

export const metadata: Metadata = {
  title: "Servicios — Coodmilla",
}

const categories = [
  {
    title: "Exploración geológica",
    desc: "Identificamos y evaluamos depósitos minerales con precisión mediante tecnologías de punta y equipos especializados.",
    services: [
      { emoji: "🗺", name: "Estudios geofísicos", detail: "Magnetometría, gravimetría y sísmica de reflexión para mapear el subsuelo." },
      { emoji: "🔩", name: "Perforación diamantina", detail: "Extracción de testigos de roca con equipos de última generación." },
      { emoji: "📋", name: "Modelamiento geológico", detail: "Modelos 3D de yacimientos para estimar recursos y reservas." },
    ],
  },
  {
    title: "Extracción y producción",
    desc: "Operaciones mineras eficientes, seguras y sostenibles, desde la planificación minera hasta el procesamiento de minerales.",
    services: [
      { emoji: "⛏", name: "Minería subterránea", detail: "Explotación selectiva con métodos de alto rendimiento y seguridad." },
      { emoji: "🏗", name: "Minería a cielo abierto", detail: "Operaciones a gran escala con equipos de alto tonelaje." },
      { emoji: "⚙", name: "Procesamiento de minerales", detail: "Plantas de beneficio, molienda, flotación y lixiviación." },
    ],
  },
  {
    title: "Servicios complementarios",
    desc: "Soluciones integrales que agregan valor a cada etapa del ciclo minero, desde la consultoría hasta el cierre de minas.",
    services: [
      { emoji: "📊", name: "Consultoría técnica", detail: "Estudios de viabilidad, ingeniería de detalle y due diligence." },
      { emoji: "🌎", name: "Gestión ambiental", detail: "Remediación, restauración ecológica y planes de cierre de minas." },
      { emoji: "🤝", name: "Relaciones comunitarias", detail: "Diálogo social, programas de desarrollo local y comunicación." },
    ],
  },
]

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        label="Servicios"
        title={<>Soluciones en <span className="text-gold">minería</span></>}
        description="Desde la exploración hasta el cierre de minas, ofrecemos un portafolio integral con los más altos estándares de calidad, seguridad y sostenibilidad."
      />

      {categories.map((cat) => (
        <section key={cat.title} className="bg-white py-16 md:py-20 even:bg-cream">
          <div className="container">
            <Reveal>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-green">
                {cat.title}
              </span>
              <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl">
                {cat.title}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-text-muted md:text-base">
                {cat.desc}
              </p>
            </Reveal>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {cat.services.map((s) => (
                <Reveal key={s.name}>
                  <div className="group rounded-xl border border-border bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-green hover:shadow-lg hover:shadow-green/8 before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gold before:scale-x-0 before:origin-left before:transition-transform before:duration-400 hover:before:scale-x-100 relative overflow-hidden">
                    <div className="mb-4 flex size-11 items-center justify-center rounded-lg bg-green/8 text-lg text-green transition-transform duration-300 group-hover:scale-110">
                      {s.emoji}
                    </div>
                    <h3 className="text-sm font-bold text-dark">{s.name}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{s.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
