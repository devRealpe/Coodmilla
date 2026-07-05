import { Reveal } from "@/components/shared/reveal"
import { Pickaxe, Globe, ShieldCheck, Zap, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  { icon: ShieldCheck, title: "Seguridad Total", desc: "Estándares internacionales OHSAS 18001" },
  { icon: Globe, title: "Sostenibilidad", desc: "Certificación ISO 14001" },
  { icon: Zap, title: "Innovación", desc: "Procesos optimizados y energía limpia" },
  { icon: Pickaxe, title: "Experiencia", desc: "Más de 12 años liderando el sector" },
]

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-dark py-24 md:py-32">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081f11] to-dark pointer-events-none" />
      <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-green/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -right-1/4 bottom-1/4 w-1/2 h-1/2 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          
          <Reveal>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl" />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-green/30 rounded-br-3xl" />
              
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-2xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, i) => (
                    <div 
                      key={i}
                      className="group flex flex-col p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-gold/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
                    >
                      <div className="mb-4 inline-flex p-3 rounded-xl bg-gradient-to-br from-green-900 to-green-950 text-gold group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/20 w-max">
                        <feature.icon className="h-6 w-6" />
                      </div>
                      <h4 className="font-bold text-white mb-1 tracking-wide text-sm">{feature.title}</h4>
                      <p className="text-xs text-white/50 leading-relaxed break-words">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-light w-max">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-light opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-light"></span>
                </span>
                Sobre Nosotros
              </div>

              <h2 className="text-4xl font-extrabold leading-[1.1] text-white md:text-5xl lg:text-5xl" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Minería del futuro, <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                  hoy.
                </span>
              </h2>

              <div className="mt-8 space-y-6">
                <p className="text-base leading-relaxed text-white/70 font-light">
                  Coodmilla nace de la profunda convicción de que la minería no solo puede, sino que debe ser un motor de desarrollo verdaderamente sostenible. 
                </p>
                <p className="text-base leading-relaxed text-white/70 font-light">
                  Con más de una década de experiencia comprobada, hemos perfeccionado un modelo operativo que fusiona innovación tecnológica de punta, responsabilidad ambiental estricta y una relación comunitaria transparente.
                </p>
              </div>

              <div className="mt-10 flex items-center gap-6">
                <Link
                  href="/nosotros"
                  className="group inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-6 py-3 text-sm font-bold text-gold transition-all hover:bg-gold hover:text-dark hover:scale-105"
                >
                  Conoce nuestra historia
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
