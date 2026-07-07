import { Reveal } from "@/components/shared/reveal"
import { Leaf, ShieldCheck, Award, Zap } from "lucide-react"

const certs = [
  { icon: Leaf, title: "ISO 14001", subtitle: "Gestión Ambiental", desc: "Compromiso absoluto con la protección del entorno y desarrollo sustentable.", color: "from-emerald-500 to-green-700", iconColor: "text-emerald-400" },
  { icon: ShieldCheck, title: "ISO 45001", subtitle: "Seguridad Laboral", desc: "Garantizamos un entorno de trabajo seguro, protegiendo nuestro activo más valioso.", color: "from-blue-500 to-indigo-700", iconColor: "text-blue-400" },
  { icon: Award, title: "ISO 9001", subtitle: "Gestión de Calidad", desc: "Excelencia certificada en todos nuestros procesos operativos y administrativos.", color: "from-gold to-yellow-600", iconColor: "text-gold" },
  { icon: Zap, title: "ISO 50001", subtitle: "Eficiencia Energética", desc: "Optimización rigurosa del consumo energético con tecnologías limpias.", color: "from-orange-400 to-red-600", iconColor: "text-orange-400" },
]

export function Certificates() {
  return (
    <section id="certificates" className="relative overflow-hidden bg-dark py-24 md:py-32">
      {/* Dark premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-[#081f11] to-dark pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold shadow-[0_0_15px_rgba(232,151,33,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Certificaciones
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl mt-4 tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Estándares que nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">respaldan</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70 font-light">
              Contamos con las certificaciones internacionales más exigentes que avalan la calidad, seguridad y sostenibilidad absoluta de nuestras operaciones mineras.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(232,151,33,0.2)] hover:border-gold/30 overflow-hidden flex flex-col items-center">
                
                {/* Decorative top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${c.color} transition-all duration-500 group-hover:h-2 opacity-80 group-hover:opacity-100`} />
                
                {/* Hover subtle background shift */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-gold/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                
                {/* Icon Container with glowing effect */}
                <div className="relative mb-6 z-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-20 blur-xl rounded-full transition-opacity duration-500 group-hover:opacity-40`} />
                  <div className="relative flex size-20 items-center justify-center rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <c.icon className={`size-10 ${c.iconColor} drop-shadow-[0_0_10px_currentColor]`} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-white mb-1 tracking-wide relative z-10" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {c.title}
                </h3>
                
                <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-4 relative z-10">
                  {c.subtitle}
                </h4>
                
                <p className="text-sm leading-relaxed text-white/60 font-light relative z-10 flex-1 group-hover:text-white/80 transition-colors">
                  {c.desc}
                </p>

                {/* Decorative bottom seal */}
                <div className="mt-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 relative z-10">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-gold/20 text-gold shadow-inner backdrop-blur-sm">
                    <Award className="w-4 h-4" />
                  </span>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
