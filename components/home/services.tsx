import { Reveal } from "@/components/shared/reveal"

const services = [
  { emoji: "⛏", title: "Exploración geológica", desc: "Estudios geofísicos y perforación diamantina para identificar depósitos minerales con precisión.", color: "text-green", bg: "bg-green/8" },
  { emoji: "⚙", title: "Extracción y producción", desc: "Operaciones eficientes con maquinaria de última generación y procesos optimizados.", color: "text-gold", bg: "bg-gold/8" },
  { emoji: "🔬", title: "Metalurgia", desc: "Procesamiento de minerales con tecnologías limpias que maximizan la recuperación.", color: "text-green", bg: "bg-green/8" },
  { emoji: "🌎", title: "Sustentabilidad", desc: "Programas de remediación, restauración ecológica y gestión de residuos.", color: "text-gold", bg: "bg-gold/8" },
  { emoji: "📊", title: "Consultoría técnica", desc: "Asesoría en viabilidad, ingeniería de minas y cumplimiento normativo.", color: "text-green", bg: "bg-green/8" },
  { emoji: "🤝", title: "Relaciones comunitarias", desc: "Diálogo social, desarrollo local y comunicación transparente con comunidades.", color: "text-gold", bg: "bg-gold/8" },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16 md:py-20">
      <div className="container">
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-green">
          Servicios
        </span>
        <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl">
          Soluciones en <span className="text-gold">minería</span>
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
          Desde la exploración hasta el cierre de minas, ofrecemos un portafolio integral con los más altos estándares.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <Reveal key={s.title}>
              <div className="group relative cursor-default overflow-hidden rounded-xl border border-border bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-green hover:shadow-lg hover:shadow-green/8 before:absolute before:top-0 before:left-0 before:right-0 before:h-0.5 before:bg-gold before:scale-x-0 before:origin-left before:transition-transform before:duration-400 hover:before:scale-x-100">
                <div
                  className={`mb-4 flex size-11 items-center justify-center rounded-lg text-lg transition-transform duration-300 group-hover:scale-110 ${s.bg} ${s.color}`}
                >
                  {s.emoji}
                </div>
                <h3 className="text-sm font-bold text-dark">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
