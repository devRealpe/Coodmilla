import { Reveal } from "@/components/shared/reveal"
import { Compass, Factory, Atom, Sprout, Network, HeartHandshake } from "lucide-react"

const services = [
  { 
    icon: Compass, 
    title: "Exploración Geológica", 
    desc: "Estudios geofísicos avanzados y modelado 3D para la identificación precisa de depósitos minerales.",
    color: "from-blue-500/20 to-blue-900/20",
    iconColor: "text-blue-400"
  },
  { 
    icon: Factory, 
    title: "Extracción y Producción", 
    desc: "Operaciones altamente eficientes con maquinaria automatizada y procesos de optimización continua.",
    color: "from-gold/20 to-amber-900/20",
    iconColor: "text-gold"
  },
  { 
    icon: Atom, 
    title: "Metalurgia Avanzada", 
    desc: "Procesamiento de vanguardia con tecnologías limpias que maximizan la recuperación de minerales.",
    color: "from-purple-500/20 to-purple-900/20",
    iconColor: "text-purple-400"
  },
  { 
    icon: Sprout, 
    title: "Sustentabilidad Integral", 
    desc: "Planes de remediación, restauración ecológica profunda y economía circular en cada proyecto.",
    color: "from-green-500/20 to-emerald-900/20",
    iconColor: "text-green-400"
  },
  { 
    icon: Network, 
    title: "Consultoría Técnica", 
    desc: "Auditoría, asesoría en viabilidad e ingeniería de minas respaldada por expertos internacionales.",
    color: "from-gray-500/20 to-slate-800/20",
    iconColor: "text-gray-300"
  },
  { 
    icon: HeartHandshake, 
    title: "Gestión Social", 
    desc: "Desarrollo de ecosistemas locales, diálogo transparente e impacto positivo en las comunidades.",
    color: "from-rose-500/20 to-red-900/20",
    iconColor: "text-rose-400"
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-dark py-24 md:py-32">
      {/* Dark premium background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-[#081f11] to-dark pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent pointer-events-none" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute -left-32 top-1/3 w-96 h-96 rounded-full bg-gold/10 blur-[120px] pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 w-96 h-96 rounded-full bg-green-500/10 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold shadow-[0_0_15px_rgba(232,151,33,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Nuestros Servicios
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl mt-4 tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Soluciones en <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">minería integral</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/70 font-light">
              Desde la exploración hasta el cierre de minas, ofrecemos un portafolio holístico diseñado para los desafíos del futuro, superando los más altos estándares globales.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(232,151,33,0.15)] hover:border-gold/30 overflow-hidden">
                {/* Hover gradient background shift */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-gold/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-8 relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} border border-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner`}>
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <s.icon className={`relative z-10 h-10 w-10 ${s.iconColor} drop-shadow-[0_0_10px_currentColor] transition-all duration-500 group-hover:scale-95`} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-white mb-3 tracking-wide group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {s.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-white/60 font-light mb-4 flex-1 group-hover:text-white/80 transition-colors">
                    {s.desc}
                  </p>
                  
                  <div className="mt-auto w-10 h-1 bg-white/10 rounded-full transition-all duration-500 group-hover:w-20 group-hover:bg-gold" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
