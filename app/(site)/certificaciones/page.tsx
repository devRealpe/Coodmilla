import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { Reveal } from "@/components/shared/reveal"

export const metadata: Metadata = {
  title: "Certificaciones — Coodmilla",
}

const certs = [
  { icon: "🌿", title: "ISO 14001", desc: "Gestión ambiental", color: "from-emerald-500 to-green-700" },
  { icon: "🛡", title: "ISO 45001", desc: "Seguridad y salud laboral", color: "from-blue-500 to-indigo-700" },
  { icon: "✓", title: "ISO 9001", desc: "Gestión de calidad", color: "from-gold to-yellow-600" },
  { icon: "♻", title: "ISO 50001", desc: "Eficiencia energética", color: "from-orange-400 to-red-600" },
  { icon: "🔬", title: "OHSAS 18001", desc: "Seguridad ocupacional", color: "from-purple-500 to-purple-800" },
  { icon: "📋", title: "SA 8000", desc: "Responsabilidad social", color: "from-rose-500 to-rose-800" },
]

export default function CertificacionesPage() {
  return (
    <>
      <PageHeader
        label="Certificaciones"
        title={<>Estándares que nos <span className="text-gold">respaldan</span></>}
        description="Contamos con certificaciones internacionales que avalan la calidad, seguridad y sostenibilidad de nuestras operaciones mineras."
      />

      <section className="relative overflow-hidden bg-dark py-16 md:py-24">
        {/* Dark premium background effects */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-[#081f11] to-dark pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {certs.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="group relative h-full rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(232,151,33,0.2)] hover:border-gold/30 overflow-hidden flex flex-col items-center">
                  
                  {/* Decorative top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${c.color} transition-all duration-500 group-hover:h-2 opacity-80 group-hover:opacity-100`} />
                  
                  {/* Hover subtle background shift */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-gold/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

                  <div className="relative z-10 mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-20 blur-xl rounded-full transition-opacity duration-500 group-hover:opacity-40`} />
                    <div className="relative flex size-20 items-center justify-center rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <span className="text-4xl drop-shadow-[0_0_10px_currentColor]">{c.icon}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-white mb-2 tracking-wide relative z-10" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/60 font-light relative z-10 flex-1 group-hover:text-white/80 transition-colors">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
