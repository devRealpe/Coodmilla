import { Reveal } from "@/components/shared/reveal"

const certs = [
  { icon: "🌿", title: "ISO 14001", desc: "Gestión ambiental — Compromiso con la protección del entorno." },
  { icon: "🛡", title: "ISO 45001", desc: "Seguridad y salud en el trabajo — Entorno laboral seguro." },
  { icon: "✓", title: "ISO 9001", desc: "Gestión de calidad — Excelencia en todos nuestros procesos." },
  { icon: "♻", title: "ISO 50001", desc: "Eficiencia energética — Optimización del consumo energético." },
]

export function Certificates() {
  return (
    <section id="certificates" className="bg-white py-16 md:py-20">
      <div className="container">
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-green">
          Certificaciones
        </span>
        <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl">
          Estándares que nos <span className="text-gold">respaldan</span>
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
          Contamos con certificaciones internacionales que avalan la calidad, seguridad y sostenibilidad de nuestras operaciones.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {certs.map((c) => (
            <Reveal key={c.title}>
              <div className="group relative cursor-default overflow-hidden rounded-xl border border-border bg-white p-6 text-center transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:shadow-lg hover:shadow-green/6 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-green after:scale-x-0 after:transition-transform after:duration-400 hover:after:scale-x-100">
                <div className="mb-3 text-4xl transition-transform duration-400 group-hover:scale-110">
                  {c.icon}
                </div>
                <h4 className="text-sm font-bold text-dark">{c.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-text-muted">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
