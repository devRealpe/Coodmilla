import { Reveal } from "@/components/shared/reveal"
import { Compass, Factory, Atom, Sprout, Network, HeartHandshake } from "lucide-react"

const services = [
  {
    icon: Compass,
    title: "Producción y Explotación",
    desc: "Exploración y explotación eficiente bajo normatividad y las mejores prácticas mineras.",
    color: "from-blue-500/20 to-blue-900/20",
    iconColor: "text-blue-400"
  },
  {
    icon: Factory,
    title: "Apoyo a la Explotación",
    desc: "Procesamiento de minerales, beneficio de concentrados y servicios operativos.",
    color: "from-gold/20 to-amber-900/20",
    iconColor: "text-gold"
  },
  {
    icon: Sprout,
    title: "Actividades Complementarias",
    desc: "Proyectos ambientales, seguridad, salud ocupacional y desarrollo comunitario.",
    color: "from-green-500/20 to-emerald-900/20",
    iconColor: "text-green-400"
  },
  {
    icon: Network,
    title: "Sección de Ferretería",
    desc: "Comercialización de insumos, materiales de construcción y equipos de protección (EPP).",
    color: "from-gray-500/20 to-slate-800/20",
    iconColor: "text-gray-300"
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-transparent py-16 md:py-24">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-[90rem]">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-gold w-max shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
              </span>
              Nuestros Servicios
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl font-extrabold leading-[1.1] text-foreground md:text-5xl mt-4 tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Soluciones en <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-yellow-600 dark:to-yellow-200 drop-shadow-sm">minería integral</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-12">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white dark:hover:bg-white/[0.05] hover:shadow-[0_20px_40px_-15px_rgba(232,151,33,0.15)] hover:border-gold/40 dark:hover:border-gold/30 overflow-hidden flex flex-col items-center text-center">

                {/* Glowing Corner */}
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${s.color} blur-[40px] transition-opacity duration-700 group-hover:opacity-100 opacity-20 pointer-events-none`} />

                {/* Animated Top Border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-yellow-600 scale-x-0 origin-center transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative z-10 flex flex-col items-center h-full">
                  <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-white/5 dark:to-white/10 border border-black/5 dark:border-white/5 shadow-md dark:shadow-inner dark:shadow-black/50 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                    <s.icon className={`h-8 w-8 ${s.iconColor} drop-shadow-sm`} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-extrabold text-foreground mb-3 tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {s.title}
                  </h3>

                  <div className="w-8 h-1 bg-gold/50 rounded-full mb-4 transition-all duration-500 group-hover:w-16 group-hover:bg-gold"></div>

                  <p className="text-sm leading-relaxed text-muted-foreground font-medium dark:font-light group-hover:text-foreground/80 dark:group-hover:text-white/80 transition-colors">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
