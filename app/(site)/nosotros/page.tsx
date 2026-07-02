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
        title={<>Liderando la minería <span className="text-gold">responsable</span></>}
        description="Coodmilla nace de la convicción de que la minería puede ser un motor de desarrollo sostenible. Con más de una década de experiencia, hemos construido un modelo que integra innovación tecnológica, responsabilidad ambiental y relación comunitaria."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <Reveal key={v.title}>
                <div className="group rounded-xl border border-border p-6 transition-all duration-400 hover:-translate-y-1 hover:border-green hover:shadow-lg hover:shadow-green/6">
                  <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-green/8 text-xl text-green transition-transform duration-400 group-hover:scale-110">
                    {v.icon}
                  </div>
                  <h3 className="text-sm font-bold text-dark">{v.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-text-muted">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div>
                <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-green">
                  Trayectoria
                </span>
                <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl">
                  Nuestra <span className="text-gold">historia</span>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-text-muted md:text-base">
                  Desde 2014 hemos recorrido un camino de crecimiento constante, impulsados por la convicción de que la minería bien hecha transforma territorios.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="space-y-4">
                {timeline.map((t) => (
                  <div key={t.year} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold text-xs font-bold text-white">
                        {t.year.slice(2)}
                      </div>
                      <div className="mt-1 h-full w-px bg-border last:hidden" />
                    </div>
                    <div className="pb-4">
                      <p className="text-sm font-bold text-dark">{t.year}</p>
                      <p className="text-xs text-text-muted">{t.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-green">
            Equipo
          </span>
          <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl">
            Quienes hacen posible <span className="text-gold">Coodmilla</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
            Contamos con un equipo de profesionales con amplia experiencia en el sector minero colombiano.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-4">
            {team.map((m) => (
              <Reveal key={m.name}>
                <div className="group rounded-xl border border-border p-6 text-center transition-all duration-400 hover:-translate-y-1 hover:border-green hover:shadow-lg hover:shadow-green/6">
                  <div className="mx-auto mb-3 flex size-16 items-center justify-center rounded-full bg-gradient-to-br from-green to-green-light text-lg font-bold text-white">
                    {m.initials}
                  </div>
                  <h4 className="text-sm font-bold text-dark">{m.name}</h4>
                  <p className="mt-0.5 text-xs text-text-muted">{m.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
