import { Reveal } from "@/components/shared/reveal"
import { Leaf, ShieldCheck, Award, Zap } from "lucide-react"

const certs = [
  { icon: Leaf, title: "ISO 14001", subtitle: "Gestión Ambiental", desc: "Compromiso absoluto con la protección del entorno y desarrollo sustentable.", color: "from-emerald-500 to-green-700", iconColor: "text-emerald-600" },
  { icon: ShieldCheck, title: "ISO 45001", subtitle: "Seguridad Laboral", desc: "Garantizamos un entorno de trabajo seguro, protegiendo nuestro activo más valioso.", color: "from-blue-500 to-indigo-700", iconColor: "text-blue-600" },
  { icon: Award, title: "ISO 9001", subtitle: "Gestión de Calidad", desc: "Excelencia certificada en todos nuestros procesos operativos y administrativos.", color: "from-gold to-yellow-600", iconColor: "text-gold" },
  { icon: Zap, title: "ISO 50001", subtitle: "Eficiencia Energética", desc: "Optimización rigurosa del consumo energético con tecnologías limpias.", color: "from-orange-400 to-red-600", iconColor: "text-orange-500" },
]

export function Certificates() {
  return (
    <section id="certificates" className="relative overflow-hidden bg-cream py-24 md:py-32">
      {/* Background elegant accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-light">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
            </span>
            Certificaciones
          </span>
          <h2 className="text-4xl font-extrabold leading-tight text-dark md:text-5xl mt-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Estándares que nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-500">respaldan</span>
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-text-muted">
            Contamos con las certificaciones internacionales más exigentes que avalan la calidad, seguridad y sostenibilidad absoluta de nuestras operaciones mineras.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl bg-white border border-border p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(232,151,33,0.2)] hover:border-gold/30 overflow-hidden flex flex-col items-center">
                
                {/* Decorative top gradient line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${c.color} transition-all duration-500 group-hover:h-2 opacity-80 group-hover:opacity-100`} />
                
                {/* Icon Container with glowing effect */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-10 blur-xl rounded-full transition-opacity duration-500 group-hover:opacity-30`} />
                  <div className="relative flex size-20 items-center justify-center rounded-2xl bg-white border border-gray-100 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-xl">
                    <c.icon className={`size-10 ${c.iconColor} drop-shadow-sm`} strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-dark mb-1 tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {c.title}
                </h3>
                
                <h4 className="text-xs font-bold uppercase tracking-widest text-gold mb-4">
                  {c.subtitle}
                </h4>
                
                <p className="text-sm leading-relaxed text-text-muted font-medium">
                  {c.desc}
                </p>

                {/* Decorative bottom seal */}
                <div className="mt-6 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-cream border border-gold/20 text-gold shadow-inner">
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
