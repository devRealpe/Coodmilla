import { Reveal } from "@/components/shared/reveal"
import { ArrowRight } from "lucide-react"

const projects = [
  { tag: "Oro", title: "Sierra Verde", desc: "Antioquia — 45,000 oz/año", color: "from-yellow-400/20 to-gold/20", borderColor: "border-gold/30", textGlow: "text-gold" },
  { tag: "Cobre", title: "Complejo Altamira", desc: "Boyacá — 120,000 t/año", color: "from-orange-500/20 to-red-600/20", borderColor: "border-orange-500/30", textGlow: "text-orange-400" },
  { tag: "Carbón", title: "Unidad Cesar", desc: "Cesar — Explotación a cielo abierto", color: "from-green-500/20 to-emerald-700/20", borderColor: "border-green/30", textGlow: "text-green-light" },
]

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-dark py-24 md:py-32">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[#081f11] to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold w-max">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Proyectos Destacados
            </span>
            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl mt-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Casos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">éxito</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 font-light">
              Explora nuestra cartera de proyectos emblemáticos que demuestran nuestra capacidad de ejecución y compromiso con la excelencia operativa.
            </p>
          </div>
          <button className="group hidden md:inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-white transition-colors">
            Ver todos los proyectos
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(232,151,33,0.15)]">
                
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
                
                {/* Central animated symbol */}
                <div className={`absolute inset-0 flex items-center justify-center text-7xl font-black opacity-5 transition-all duration-700 group-hover:scale-125 group-hover:opacity-20 group-hover:rotate-12 ${p.textGlow}`}>
                  ◆
                </div>
                
                {/* Glowing border frame on hover */}
                <div className={`absolute inset-4 rounded-2xl border ${p.borderColor} opacity-0 scale-95 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100 pointer-events-none`} />

                <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <span className={`inline-block rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider ${p.textGlow} border border-white/10 mb-3`}>
                    {p.tag}
                  </span>
                  <h4 className="text-xl font-extrabold text-white tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm text-white/60 font-medium">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        
        <button className="group mt-8 inline-flex items-center justify-center gap-2 text-sm font-bold text-gold hover:text-white transition-colors w-full md:hidden">
          Ver todos los proyectos
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  )
}
