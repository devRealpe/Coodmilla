import { Reveal } from "@/components/shared/reveal"
import { Leaf, ShieldCheck, Award, Zap } from "lucide-react"

const certs = [
  { icon: ShieldCheck, title: "Sello Equipares", subtitle: "Equidad de Género", desc: "Compromiso con la igualdad y la reducción de brechas de género en la organización.", color: "from-emerald-500 to-green-700", iconColor: "text-emerald-400" },
  { icon: Leaf, title: "FAIRMINED", subtitle: "Minería Justa", desc: "Certificación de minería responsable que permite acceder a mercados internacionales justos.", color: "from-blue-500 to-indigo-700", iconColor: "text-blue-400" },
  { icon: Award, title: "Reconocimiento", subtitle: "Internacional", desc: "Oro limpio usado por CHOPARD, la Palma de Oro de Cannes y el Premio Nobel de Paz.", color: "from-gold to-yellow-600", iconColor: "text-gold" },
]

export function Certificates() {
  return (
    <section id="certificates" className="relative overflow-hidden bg-transparent py-24 md:py-40">
      {/* Luz ambiental de fondo exclusiva para certificados */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[600px] bg-gradient-to-r from-emerald-500/5 via-gold/10 to-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-gold w-max shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
              </span>
              Certificaciones
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl font-extrabold leading-[1.1] text-foreground md:text-5xl lg:text-6xl mt-4 tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Estándares que nos <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-yellow-600 dark:to-yellow-200 drop-shadow-sm">respaldan</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground font-medium dark:font-light">
              Contamos con las certificaciones internacionales más exigentes que avalan la calidad, seguridad y sostenibilidad absoluta de nuestras operaciones mineras.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-20">
          {certs.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.15}>
              <div className="group relative h-full rounded-[3rem] bg-gradient-to-b from-white/80 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-2xl border border-white/40 dark:border-white/10 p-10 md:p-12 text-center transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_100px_-20px_rgba(232,151,33,0.25)] hover:border-gold/50 dark:hover:border-gold/40 overflow-hidden flex flex-col items-center">

                {/* Reflejo de luz dinámica al pasar el ratón (Glass reflection) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 dark:via-white/10 to-transparent translate-x-[-150%] skew-x-[-45deg] group-hover:animate-shine pointer-events-none" />

                {/* Glow sutil en el fondo de la tarjeta */}
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-to-t from-gold/20 to-transparent blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Contenedor del Icono tipo Galardón */}
                <div className="relative mb-8 z-10 flex justify-center w-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-20 blur-2xl rounded-full transition-all duration-700 group-hover:scale-150 group-hover:opacity-40`} />

                  {/* Borde exterior animado del icono */}
                  <div className="relative flex size-28 items-center justify-center rounded-[2rem] bg-gradient-to-b from-white to-gray-50 dark:from-white/10 dark:to-white/5 border-2 border-white/60 dark:border-white/20 shadow-xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6 z-10">
                    <div className="absolute inset-2 rounded-2xl border border-dashed border-black/10 dark:border-white/20 opacity-50" />
                    <c.icon className={`size-14 ${c.iconColor} drop-shadow-xl z-10`} strokeWidth={1.5} />
                  </div>
                </div>

                <div className="relative z-10 flex flex-col flex-1 w-full">
                  <h4 className="text-xs font-black uppercase tracking-[0.3em] text-gold mb-3">
                    {c.subtitle}
                  </h4>

                  <h3 className="text-3xl font-extrabold text-foreground mb-6 tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {c.title}
                  </h3>

                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground font-medium dark:font-light mt-auto">
                    {c.desc}
                  </p>
                </div>

                {/* Sello inferior decorativo */}
                <div className="mt-8 pt-8 border-t border-black/5 dark:border-white/10 w-full flex justify-center opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                  <Award className="w-6 h-6 text-gold/60 group-hover:text-gold animate-pulse-slow" />
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
