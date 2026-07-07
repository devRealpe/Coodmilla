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

      <div className="bg-dark">
        {categories.map((cat, i) => (
          <section key={cat.title} className="relative overflow-hidden py-16 md:py-24 border-b border-white/5 last:border-b-0">
            {/* Background Effects */}
            <div className={`absolute inset-0 ${i % 2 === 0 ? 'bg-[#06140a]' : 'bg-dark'} pointer-events-none`} />
            <div className={`absolute ${i % 2 === 0 ? '-right-40' : '-left-40'} top-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none`} />
            
            <div className="container relative z-10 mx-auto px-6">
              <Reveal>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold shadow-[0_0_15px_rgba(232,151,33,0.1)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                  </span>
                  {cat.title}
                </span>
                <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl tracking-tight mt-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {cat.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/70 font-light">
                  {cat.desc}
                </p>
              </Reveal>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {cat.services.map((s, idx) => (
                  <Reveal key={s.name} delay={idx * 0.1}>
                    <div className="group relative h-full rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(232,151,33,0.15)] hover:border-gold/30 overflow-hidden">
                      {/* Hover subtle background shift */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-gold/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                      
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="mb-6 relative flex h-16 w-16 items-center justify-center rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <span className="text-3xl drop-shadow-[0_0_10px_currentColor]">{s.emoji}</span>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2 tracking-wide group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-montserrat)' }}>
                          {s.name}
                        </h3>
                        
                        <p className="mt-1.5 text-sm leading-relaxed text-white/60 font-light flex-1 group-hover:text-white/80 transition-colors">
                          {s.detail}
                        </p>

                        <div className="mt-6 w-8 h-1 bg-white/10 rounded-full transition-all duration-500 group-hover:w-16 group-hover:bg-gold" />
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
