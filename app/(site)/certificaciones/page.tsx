import type { Metadata } from "next"
import { Reveal } from "@/components/shared/reveal"
import { DocumentCard } from "@/components/shared/document-card"
import { getPDFDocumentos, resolveAssetUrl } from "@/lib/api"
import { Leaf, ShieldCheck, Award, Zap, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Certificaciones",
  description:
    "Certificaciones internacionales y documentos oficiales de Coodmilla. ISO 14001, ISO 45001, ISO 9001 y más.",
  alternates: { canonical: "/certificaciones" },
  openGraph: {
    title: "Certificaciones — Coodmilla",
    description:
      "Certificaciones ISO y documentos oficiales de la cooperativa Coodmilla.",
  },
}

// ─── Certificaciones estáticas (siempre se muestran) ─────────────────────────
const CERTS_ESTATICOS = [
  {
    icon: ShieldCheck,
    title: "Sello Equipares",
    desc: "Sello Equipares PYMES que avala nuestro compromiso con la igualdad y la reducción de brechas de género en la cultura organizacional.",
    color: "from-emerald-500 to-green-700",
    glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.25)]",
    badge: "Equidad",
  },
  {
    icon: Leaf,
    title: "FAIRMINED",
    desc: "Certificación de Minería Justa que fortalece nuestra estructura organizativa y promueve exportaciones responsables.",
    color: "from-blue-500 to-indigo-700",
    glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.25)]",
    badge: "Sostenibilidad",
  },
  {
    icon: Award,
    title: "Reconocimiento",
    desc: "Oro limpio y libre de químicos usado por la casa suiza CHOPARD, en la Palma de Oro de Cannes y el Premio Nobel de Paz.",
    color: "from-amber-400 to-yellow-600",
    glow: "group-hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.25)]",
    badge: "Internacional",
  },
]

export default async function CertificacionesPage() {
  // Obtener documentos PDF del panel de control
  const documentos = await getPDFDocumentos()

  return (
    <>
      {/* Bespoke Header for Certificaciones */}
      <section className="relative overflow-hidden bg-transparent px-6 pt-32 pb-16 md:px-10 md:pb-24 md:pt-40">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-foreground/10 dark:via-white/10 to-transparent" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-green-500/10 blur-[100px] rounded-full pointer-events-none" />
        
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center justify-center gap-2 mb-6 rounded-full border border-green-600/30 bg-green-500/10 px-4 py-1.5 backdrop-blur-md">
                <CheckCircle2 className="size-4 text-green-600 dark:text-green-500" />
                <span className="text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-400">Certificaciones Oficiales</span>
              </div>
              <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-7xl mb-6" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Estándares que nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 dark:from-green-light dark:to-green">respaldan</span>
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg font-light max-w-2xl mx-auto">
                Contamos con certificaciones internacionales que avalan la calidad, seguridad y sostenibilidad de nuestras operaciones mineras, garantizando procesos responsables de principio a fin.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Sección de tarjetas de certificaciones ── */}
      <section className="relative overflow-hidden bg-transparent py-16 md:py-24">
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {CERTS_ESTATICOS.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div
                  className={`
                    group relative h-full rounded-3xl overflow-hidden
                    bg-white/60 dark:bg-white/[0.04]
                    backdrop-blur-md
                    border border-black/[0.07] dark:border-white/10
                    p-8 text-center
                    transition-all duration-500
                    hover:-translate-y-2
                    ${c.glow}
                    hover:border-white/30 dark:hover:border-white/20
                    flex flex-col items-center
                  `}
                >
                  {/* Decorative top gradient bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${c.color} opacity-80 group-hover:opacity-100 group-hover:h-[3px] transition-all duration-500`}
                  />

                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/0 to-[#e89721]/[0.04] dark:to-[#e89721]/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Badge */}
                  <span className="relative z-10 mb-4 inline-block rounded-full px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[#0d1b12]/60 dark:text-white/50">
                    {c.badge}
                  </span>

                  {/* Icon */}
                  <div className="relative z-10 mb-5">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${c.color} opacity-15 dark:opacity-20 blur-2xl rounded-full transition-opacity duration-500 group-hover:opacity-30 dark:group-hover:opacity-40`}
                    />
                    <div className="relative flex size-20 items-center justify-center rounded-2xl bg-black/10 dark:bg-black/25 backdrop-blur-sm border border-black/[0.06] dark:border-white/[0.06] shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <c.icon
                        className={`size-10 text-[#0d1b12]/80 dark:text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]`}
                        strokeWidth={1.5}
                      />
                    </div>
                  </div>

                  <h3
                    className="text-xl font-extrabold text-[#0d1b12] dark:text-white mb-2 tracking-wide relative z-10"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#3a5a44] dark:text-white/60 font-light relative z-10 flex-1 group-hover:text-[#0d1b12] dark:group-hover:text-white/80 transition-colors">
                    {c.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Registro Web ESAL (DIAN) y Documentos descargables (dinámicos del panel) ── */}
      {documentos.length > 0 && (
        <section className="relative overflow-hidden bg-transparent py-16 md:py-24 border-t border-foreground/5 dark:border-white/5">
          <div className="container relative z-10 mx-auto px-6">
            {/* Section header */}
            <Reveal>
              <div className="mb-10 md:mb-14 text-center max-w-3xl mx-auto">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold shadow-[0_0_15px_rgba(232,151,33,0.1)]">
                  Transparencia
                </span>
                <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Registro Web <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600 dark:to-yellow-200">ESAL (DIAN)</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground font-light">
                  En cumplimiento con la normativa para Entidades Sin Ánimo de Lucro, ponemos a disposición de la comunidad y autoridades la siguiente documentación institucional. Haz clic en cualquier documento para descargarlo directamente.
                </p>
              </div>
            </Reveal>

            {/* Document grid */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {documentos.map((doc, i) => (
                <Reveal key={doc.id} delay={i * 0.06}>
                  <DocumentCard
                    nombre={doc.nombre}
                    nombreOriginal={doc.nombreOriginal}
                    url={resolveAssetUrl(doc.url)}
                    index={i}
                  />
                </Reveal>
              ))}
            </div>

            {/* Bottom decorative note */}
            <Reveal>
              <p className="mt-10 text-center text-xs text-[#5a7a62]/70 dark:text-white/30 flex items-center justify-center gap-2">
                <span className="inline-block h-px w-12 bg-current opacity-40" />
                Los documentos se abren en una nueva pestaña o se descargan automáticamente según tu navegador.
                <span className="inline-block h-px w-12 bg-current opacity-40" />
              </p>
            </Reveal>
          </div>
        </section>
      )}
    </>
  )
}
