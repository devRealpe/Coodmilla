import type { Metadata } from "next"
import { PageHeader } from "@/components/shared/page-header"
import { Reveal } from "@/components/shared/reveal"

export const metadata: Metadata = {
  title: "Certificaciones — Coodmilla",
}

const certs = [
  { icon: "🌿", title: "ISO 14001", desc: "Gestión ambiental" },
  { icon: "🛡", title: "ISO 45001", desc: "Seguridad y salud laboral" },
  { icon: "✓", title: "ISO 9001", desc: "Gestión de calidad" },
  { icon: "♻", title: "ISO 50001", desc: "Eficiencia energética" },
  { icon: "🔬", title: "OHSAS 18001", desc: "Seguridad ocupacional" },
  { icon: "📋", title: "SA 8000", desc: "Responsabilidad social" },
]

export default function CertificacionesPage() {
  return (
    <>
      <PageHeader
        label="Certificaciones"
        title={<>Estándares que nos <span className="text-gold">respaldan</span></>}
        description="Contamos con certificaciones internacionales que avalan la calidad, seguridad y sostenibilidad de nuestras operaciones mineras."
      />

      <section className="bg-white py-16 md:py-20">
        <div className="container">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {certs.map((c) => (
              <Reveal key={c.title}>
                <div className="rounded-xl border border-border bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-3 text-4xl">{c.icon}</div>
                  <h3 className="text-sm font-bold text-dark">{c.title}</h3>
                  <p className="mt-1 text-xs text-text-muted">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
