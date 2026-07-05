import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { Reveal } from "@/components/shared/reveal"

export const metadata: Metadata = {
  title: "Nosotros — Coodmilla",
}

const values = [
  {
    icon: "🎯",
    title: "Misión",
    desc: "Desarrollar proyectos mineros con los más altos estándares de calidad, seguridad y sostenibilidad, generando valor para nuestros clientes, comunidades y accionistas.",
  },
  {
    icon: "🔭",
    title: "Visión",
    desc: "Ser referente en minería responsable en Latinoamérica para 2030, reconocidos por nuestra innovación tecnológica, gestión ambiental y relación con comunidades.",
  },
  {
    icon: "💎",
    title: "Valores",
    desc: "Seguridad ante todo, integridad, respeto por el entorno, innovación constante, trabajo en equipo y compromiso con el desarrollo de las regiones donde operamos.",
  },
]

const team = [
  { name: "Carlos Mendoza", role: "Director General", initials: "CM" },
  { name: "Ana Lucía Rivas", role: "Gerente de Operaciones", initials: "AR" },
  { name: "Pedro Castillo", role: "Director Técnico", initials: "PC" },
  { name: "María Fernanda Gil", role: "Gerente de Sostenibilidad", initials: "MG" },
]

const timeline = [
  { year: "2014", event: "Fundación de Coodmilla en Bogotá" },
  { year: "2016", event: "Primer proyecto minero en Antioquia" },
  { year: "2019", event: "Certificación ISO 14001 y OHSAS 18001" },
  { year: "2022", event: "Expansión a minería de cobre en Boyacá" },
  { year: "2026", event: "15+ certificaciones y 45 proyectos ejecutados" },
]

export default function NosotrosPage() {
  return (
    <>
      <PageHeader
        label="Nosotros"
        title={<>Liderando la minería <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">responsable</span></>}
        description="Coodmilla nace de la convicción de que la minería puede ser un motor de desarrollo sostenible. Con más de una década de experiencia, hemos construido un modelo que integra innovación tecnológica, responsabilidad ambiental y relación comunitaria."
      />

      {/* Values Section */}
      <section className="relative overflow-hidden bg-dark py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#081f11] to-dark pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-gold">Nuestros Pilares</span>
            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl" style={{ fontFamily: 'var(--font-montserrat)' }}>Valores que nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-light to-green">definen</span></h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <Reveal key={v.title}>
                <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(232,151,33,0.1)] backdrop-blur-sm">
                  <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-900 to-green-950 text-2xl text-gold transition-transform duration-500 group-hover:scale-110 shadow-lg shadow-black/30">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>{v.title}</h3>
                  <p className="text-sm leading-relaxed text-white/60">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative bg-[#05120a] py-20 md:py-32 overflow-hidden border-y border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="container relative z-10">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <Reveal>
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold w-max">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                  </span>
                  Trayectoria
                </span>
                <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl mt-2" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">historia</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-white/70 font-light">
                  Desde 2014 hemos recorrido un camino de crecimiento constante, impulsados por la convicción de que la minería bien hecha transforma territorios y mejora vidas.
                </p>
              </div>
            </Reveal>
            
            <Reveal>
              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
                {timeline.map((t, index) => (
                  <div key={t.year} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#05120a] bg-gold shadow shadow-gold/40 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform duration-500 group-hover:scale-125">
                      <span className="w-2 h-2 rounded-full bg-[#05120a]"></span>
                    </div>
                    
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-gold/30 group-hover:bg-white/10 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/20">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-gold text-xl" style={{ fontFamily: 'var(--font-montserrat)' }}>{t.year}</span>
                      </div>
                      <p className="text-sm text-white/70 font-light leading-relaxed">{t.event}</p>
                    </div>

                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative overflow-hidden bg-dark py-20 md:py-32">
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-green/10 blur-[100px] rounded-tl-full pointer-events-none" />
        <div className="container relative z-10">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-green-light">Equipo</span>
            <h2 className="text-3xl font-extrabold leading-tight text-white md:text-5xl" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Quienes hacen posible <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">Coodmilla</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/60 font-light">
              Contamos con un equipo de profesionales apasionados con amplia experiencia en el sector minero colombiano, comprometidos con la excelencia.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <Reveal key={m.name}>
                <div className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:border-green-light/40 hover:bg-white/10 hover:shadow-2xl hover:shadow-green-light/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative z-10">
                    <div className="mx-auto mb-5 flex size-20 items-center justify-center rounded-full bg-gradient-to-br from-green-900 to-green-950 text-2xl font-bold text-gold shadow-lg shadow-black/30 transition-transform duration-500 group-hover:scale-110 border border-white/5 group-hover:border-gold/30">
                      {m.initials}
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1 tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>{m.name}</h4>
                    <p className="text-xs font-medium uppercase tracking-wider text-green-light/80">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
