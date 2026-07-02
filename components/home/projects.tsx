import { Reveal } from "@/components/shared/reveal"

const projects = [
  { tag: "Oro", title: "Sierra Verde", desc: "Antioquia — 45,000 oz/año", color: "text-green" },
  { tag: "Cobre", title: "Complejo Altamira", desc: "Boyacá — 120,000 t/año", color: "text-gold" },
  { tag: "Carbón", title: "Unidad Cesar", desc: "Cesar — Explotación a cielo abierto", color: "text-green-light" },
]

export function Projects() {
  return (
    <section id="projects" className="bg-cream py-16 md:py-20">
      <div className="container">
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-green">
          Proyectos
        </span>
        <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl">
          Casos de <span className="text-gold">éxito</span>
        </h2>
        <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
          Conoce algunos de los proyectos que han marcado nuestra trayectoria.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <div className="group relative aspect-4/3 cursor-pointer overflow-hidden rounded-xl border border-border transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lg">
                <div className={`absolute inset-0 flex items-center justify-center text-5xl font-black opacity-10 transition-all duration-400 group-hover:scale-110 group-hover:opacity-15 ${p.color}`}>
                  ◆
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wider text-gold">
                    {p.tag}
                  </span>
                  <h4 className="mt-1.5 text-sm font-bold text-white">{p.title}</h4>
                  <p className="mt-0.5 text-xs text-white/50">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
