import { Reveal } from "@/components/shared/reveal"
import { Newspaper, Zap, Handshake, ArrowRight } from "lucide-react"

const newsItems = [
  {
    icon: Newspaper,
    gradient: "from-emerald-500 to-green-700",
    iconColor: "text-emerald-100",
    date: "15 junio 2026",
    title: "Coodmilla recertifica ISO 14001 con calificación sobresaliente",
    desc: "La auditoría externa destacó nuestro compromiso irrefutable con la gestión ambiental integral.",
  },
  {
    icon: Zap,
    gradient: "from-amber-400 to-gold",
    iconColor: "text-amber-100",
    date: "28 mayo 2026",
    title: "Nuevo récord de producción en el Complejo Altamira",
    desc: "Alcanzamos 120,000 toneladas anuales con una eficiencia energética sin precedentes en el sector.",
  },
  {
    icon: Handshake,
    gradient: "from-blue-500 to-indigo-700",
    iconColor: "text-blue-100",
    date: "10 mayo 2026",
    title: "Inauguramos gran programa de desarrollo comunitario",
    desc: "La iniciativa beneficiará a más de 2,000 familias con proyectos de infraestructura y educación de calidad.",
  },
]

export function News() {
  return (
    <section id="news" className="relative overflow-hidden bg-white py-24 md:py-32">
      {/* Subtle light background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-green/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green/20 bg-green/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green"></span>
            </span>
            Noticias
          </span>
          <h2 className="text-4xl font-extrabold leading-tight text-dark md:text-5xl mt-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
            Últimas <span className="text-transparent bg-clip-text bg-gradient-to-r from-green to-gold">novedades</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-muted">
            Mantente informado con los acontecimientos más relevantes sobre nuestra operación, avances tecnológicos y contribuciones al sector minero.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {newsItems.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="group flex flex-col h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(2,106,55,0.15)] hover:border-green/20">
                <div className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${item.gradient} overflow-hidden`}>
                  {/* Decorative background pattern */}
                  <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-[length:20px_20px]" />
                  
                  <div className="relative z-10 p-5 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <item.icon className={`size-10 ${item.iconColor} drop-shadow-md`} strokeWidth={1.5} />
                  </div>
                </div>
                
                <div className="flex flex-col flex-1 p-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-gold mb-3">
                    {item.date}
                  </div>
                  <h4 className="text-lg font-extrabold leading-snug text-dark mb-4 group-hover:text-green transition-colors" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-text-muted font-medium flex-1">
                    {item.desc}
                  </p>
                  
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-green transition-all hover:gap-3 hover:text-gold"
                  >
                    Leer más <ArrowRight className="size-4" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
