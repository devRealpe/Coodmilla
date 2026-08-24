import { Reveal } from "@/components/shared/reveal"
import { ShieldCheck, Scale, Leaf, Globe2, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  { icon: ShieldCheck, title: "Seguridad", desc: "La vida y la integridad ante todo." },
  { icon: Scale, title: "Integridad", desc: "Transparencia y rectitud en cada paso." },
  { icon: Leaf, title: "Respeto", desc: "Cuidado absoluto por nuestro entorno." },
  { icon: Globe2, title: "Compromiso", desc: "Desarrollo de las regiones donde operamos." },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-transparent py-24 md:py-32">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-[20%] w-[40%] h-[60%] rounded-full bg-gold/10 dark:bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 translate-y-1/3 translate-x-1/3 w-[50%] h-[50%] rounded-full bg-green-light/10 dark:bg-green-light/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          <Reveal>
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-[3px] border-l-[3px] border-gold/40 rounded-tl-[40px] opacity-70 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-[3px] border-r-[3px] border-green-500/40 rounded-br-[40px] opacity-70 group-hover:scale-105 transition-transform duration-700" />

              {/* Main Container */}
              <div className="relative rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.4)]">

                {/* Inner Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent dark:from-white/5 dark:to-transparent pointer-events-none" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  {features.map((feature, i) => (
                    <div
                      key={i}
                      className="group/feature flex flex-col p-6 rounded-3xl bg-white/80 dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-gold/40 dark:hover:border-gold/30 hover:bg-white dark:hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-sm hover:shadow-[0_10px_30px_rgba(232,151,33,0.1)]"
                    >
                      <div className="mb-5 inline-flex p-3.5 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/60 dark:to-green-950/80 text-green-700 dark:text-gold group-hover/feature:scale-110 group-hover/feature:rotate-3 transition-transform duration-500 shadow-inner dark:shadow-black/30 w-max border border-green-200/50 dark:border-white/5">
                        <feature.icon className="h-7 w-7" />
                      </div>
                      <h4 className="font-bold text-foreground mb-2 tracking-wide text-base">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed break-words font-medium dark:font-light">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col">
              <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-green-600/30 bg-green-50 dark:bg-green-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-green-700 dark:text-green-light w-max shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 dark:bg-green-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600 dark:bg-green-light"></span>
                </span>
                Sobre Nosotros
              </div>

              <h2 className="text-4xl font-extrabold leading-[1.1] text-foreground md:text-5xl lg:text-6xl tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Minería del futuro, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-yellow-600 dark:from-gold dark:to-yellow-200 drop-shadow-sm">
                  hoy.
                </span>
              </h2>

              <div className="mt-8 space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground font-medium dark:font-light">
                  El objeto del acuerdo cooperativo de COODMILLA LTDA es el de producir, ofertar, distribuir, comercializar, exportar e importar bienes y servicios para la satisfacción de las necesidades de los asociados y de la comunidad en general, propendiendo por el mejoramiento de sus condiciones de vida.
                </p>

                <div className="relative pl-6 py-2 border-l-4 border-gold/50 bg-gradient-to-r from-gold/5 to-transparent rounded-r-xl">
                  <p className="text-base leading-relaxed text-muted-foreground">
                    <strong className="text-foreground font-bold">Reconocimiento Internacional:</strong> El oro de Coodmilla Ltda ha sido usado por prestigiosas marcas de joyería europeas como la casa suiza CHOPARD, al igual que ha sido usado en la Palma de Oro del Festival de Cannes y el Premio Nobel de Paz.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <Link
                  href="/nosotros"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full p-[2px] font-bold focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-background"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-gold via-yellow-500 to-gold opacity-70 group-hover:opacity-100 transition-opacity duration-300 animate-gradient" />
                  <span className="relative flex items-center gap-2 rounded-full bg-white dark:bg-background px-8 py-4 text-sm text-foreground transition-all duration-300 group-hover:bg-opacity-0 group-hover:text-white dark:group-hover:text-background">
                    Conoce nuestra historia
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
