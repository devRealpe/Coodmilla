import { Reveal } from "@/components/shared/reveal"
import { Compass, Factory, Atom, Sprout, Network, HeartHandshake } from "lucide-react"

const services = [
  { 
    icon: Compass, 
    title: "Exploración Geológica", 
    desc: "Estudios geofísicos avanzados y modelado 3D para la identificación precisa de depósitos minerales.",
    color: "from-blue-600/20 to-green-600/20",
    iconColor: "text-blue-700"
  },
  { 
    icon: Factory, 
    title: "Extracción y Producción", 
    desc: "Operaciones altamente eficientes con maquinaria automatizada y procesos de optimización continua.",
    color: "from-gold/20 to-orange-600/20",
    iconColor: "text-gold"
  },
  { 
    icon: Atom, 
    title: "Metalurgia Avanzada", 
    desc: "Procesamiento de vanguardia con tecnologías limpias que maximizan la recuperación de minerales.",
    color: "from-purple-600/20 to-blue-600/20",
    iconColor: "text-purple-700"
  },
  { 
    icon: Sprout, 
    title: "Sustentabilidad Integral", 
    desc: "Planes de remediación, restauración ecológica profunda y economía circular en cada proyecto.",
    color: "from-green-500/20 to-emerald-700/20",
    iconColor: "text-green"
  },
  { 
    icon: Network, 
    title: "Consultoría Técnica", 
    desc: "Auditoría, asesoría en viabilidad e ingeniería de minas respaldada por expertos internacionales.",
    color: "from-gray-600/20 to-slate-800/20",
    iconColor: "text-slate-800"
  },
  { 
    icon: HeartHandshake, 
    title: "Gestión Social", 
    desc: "Desarrollo de ecosistemas locales, diálogo transparente e impacto positivo en las comunidades.",
    color: "from-rose-500/20 to-red-700/20",
    iconColor: "text-rose-700"
  },
]

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Light premium background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-cream/50 to-transparent pointer-events-none" />
      
      {/* Decorative Blur Orbs */}
      <div className="absolute -left-32 top-1/3 w-96 h-96 rounded-full bg-gold/5 blur-[100px] pointer-events-none" />
      <div className="absolute -right-32 bottom-1/4 w-96 h-96 rounded-full bg-green/5 blur-[100px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green/20 bg-green/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
            </span>
            Nuestros Servicios
          </span>
          <h2 className="text-4xl font-extrabold leading-tight text-dark md:text-5xl mt-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Soluciones en <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-gold">minería integral</span>
          </h2>
          <p className="mt-6 text-base md:text-lg leading-relaxed text-text-muted">
            Desde la exploración hasta el cierre de minas, ofrecemos un portafolio holístico diseñado para los desafíos del futuro, superando los más altos estándares globales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="group relative h-full rounded-3xl bg-white border border-border p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(2,106,55,0.15)] hover:border-green/30 overflow-hidden">
                {/* Hover gradient background shift */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-green/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-8 relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${s.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-inner`}>
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <s.icon className={`relative z-10 h-10 w-10 ${s.iconColor} drop-shadow-sm transition-all duration-500 group-hover:scale-95`} strokeWidth={1.5} />
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-dark mb-3 tracking-tight group-hover:text-green transition-colors" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {s.title}
                  </h3>
                  
                  <p className="text-sm leading-relaxed text-text-muted font-medium mb-4 flex-1">
                    {s.desc}
                  </p>
                  
                  <div className="mt-auto w-10 h-1 bg-border rounded-full transition-all duration-500 group-hover:w-20 group-hover:bg-gold" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
