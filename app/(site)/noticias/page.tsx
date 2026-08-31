import type { Metadata } from "next"
import { Reveal } from "@/components/shared/reveal"
import { getNoticiasParaPagina, resolveAssetUrl, type Noticia } from "@/lib/api"
import { extractPlainText } from "@/components/shared/editorjs-renderer"
import { ArrowRight, Newspaper } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Noticias",
  description: "Últimas noticias y novedades de Coodmilla sobre minería, sostenibilidad y desarrollo comunitario en Colombia.",
  alternates: { canonical: "/noticias" },
  openGraph: {
    title: "Noticias — Coodmilla",
    description: "Últimas noticias y novedades de Coodmilla.",
  },
}

// ─── Gradientes de fallback por índice ───────────────────────────────────────
const GRADIENTS = [
  "from-green to-[#034a27]",
  "from-gold to-[#c47d1a]",
  "from-green-light to-[#4d7a28]",
  "from-dark to-green",
  "from-green to-green-light",
  "from-gold to-green",
  "from-dark to-gold",
]

function formatFecha(fecha?: string | null): string {
  if (!fecha) return ""
  return new Date(fecha).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

// ─── Tarjeta noticia destacada ────────────────────────────────────────────────
function FeaturedCard({ noticia }: { noticia: Noticia }) {
  const imagenUrl = resolveAssetUrl(noticia.imagenPortada)

  return (
    <Reveal>
      <Link href={`/noticias/${noticia.slug}`} className="block group">
        <div className="overflow-hidden rounded-xl border border-border bg-white transition-all duration-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-green/6">
          {/* Imagen o gradiente */}
          <div className={`relative flex h-48 items-center justify-center overflow-hidden md:h-64 ${!imagenUrl ? `bg-gradient-to-br ${GRADIENTS[0]} text-5xl` : ""}`}>
            {imagenUrl ? (
              <>
                <Image
                  src={imagenUrl}
                  alt={noticia.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </>
            ) : (
              <Newspaper className="size-16 text-white/60" strokeWidth={1} />
            )}
          </div>

          <div className="p-6 md:p-8">
            {noticia.fechaPublicacion && (
              <div className="text-xs font-medium text-text-muted mb-2">{formatFecha(noticia.fechaPublicacion)}</div>
            )}
            <h3 className="mt-1 text-xl font-bold text-dark md:text-2xl group-hover:text-green transition-colors">
              {noticia.titulo}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
              {extractPlainText(noticia.contenido, 200)}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-green transition-all group-hover:gap-2.5 group-hover:text-gold">
              Leer noticia completa <ArrowRight className="size-4" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

// ─── Tarjeta noticia normal ───────────────────────────────────────────────────
function NoticiaCard({ noticia, gradientIdx }: { noticia: Noticia; gradientIdx: number }) {
  const imagenUrl = resolveAssetUrl(noticia.imagenPortada)
  const gradient = GRADIENTS[gradientIdx % GRADIENTS.length]

  return (
    <Reveal>
      <Link href={`/noticias/${noticia.slug}`} className="block group h-full">
        <div className="flex flex-col h-full overflow-hidden rounded-xl border border-border bg-white transition-all duration-400 hover:-translate-y-1.5 hover:border-transparent hover:shadow-lg hover:shadow-green/6">
          <div className={`relative flex h-40 items-center justify-center overflow-hidden ${!imagenUrl ? `bg-gradient-to-br ${gradient}` : ""}`}>
            {imagenUrl ? (
              <>
                <Image
                  src={imagenUrl}
                  alt={noticia.titulo}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </>
            ) : (
              <Newspaper className="size-10 text-white/60 transition-transform duration-400" strokeWidth={1} />
            )}
          </div>
          <div className="flex flex-col flex-1 p-5">
            {noticia.fechaPublicacion && (
              <div className="text-xs text-text-muted mb-1">{formatFecha(noticia.fechaPublicacion)}</div>
            )}
            <h4 className="mt-1 text-sm font-bold leading-snug text-dark group-hover:text-green transition-colors flex-1">
              {noticia.titulo}
            </h4>
            <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-green transition-all group-hover:gap-2.5 group-hover:text-gold">
              Leer más <ArrowRight className="size-3" />
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  )
}

// ─── Estado vacío ─────────────────────────────────────────────────────────────
function NoticiasVacias() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <Newspaper className="size-16 text-text-muted/40 mb-4" strokeWidth={1} />
      <h3 className="text-xl font-bold text-dark">Próximamente</h3>
      <p className="mt-2 text-sm text-text-muted max-w-sm">
        Estamos preparando las últimas noticias de Coodmilla. Vuelve pronto.
      </p>
    </div>
  )
}

// ─── Página ───────────────────────────────────────────────────────────────────
export default async function NoticiasPage() {
  const { destacada, resto } = await getNoticiasParaPagina()
  const hayNoticias = destacada !== null || resto.length > 0

  return (
    <>
      {/* Bespoke Header for Noticias */}
      <section className="relative overflow-hidden bg-background px-6 pt-24 pb-8 md:px-10 md:pb-12 md:pt-32">
        <div className="absolute inset-0 z-0 select-none overflow-hidden flex items-center justify-center pointer-events-none opacity-5 dark:opacity-10">
          <span className="text-[15rem] md:text-[25rem] font-black tracking-tighter text-foreground" style={{ fontFamily: 'var(--font-montserrat)' }}>
            NEWS
          </span>
        </div>

        <div className="container relative z-10 text-center">
          <Reveal>
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-gold border-b-2 border-gold pb-1">
              Actualidad
            </span>
            <h1 className="text-5xl font-black uppercase tracking-tight text-foreground md:text-7xl lg:text-8xl" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Últimas <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600 dark:to-yellow-200">novedades</span>
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg mx-auto max-w-2xl font-serif italic">
              "Entérate de las noticias más recientes sobre nuestra operación, la comunidad y el sector minero en Colombia."
            </p>
          </Reveal>
        </div>
      </section>

      {!hayNoticias ? (
        <section className="bg-transparent py-16 md:py-24">
          <div className="container">
            <NoticiasVacias />
          </div>
        </section>
      ) : (
        <>
          {/* ── Destacada ── */}
          {destacada && (
            <section className="bg-transparent py-16 md:py-20">
              <div className="container">
                <Reveal>
                  <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl mb-6">
                    <span className="text-gold">Destacada</span>
                  </h2>
                </Reveal>
                <FeaturedCard noticia={destacada} />
              </div>
            </section>
          )}

          {/* ── Todas las noticias ── */}
          {resto.length > 0 && (
            <section className="bg-transparent py-16 md:py-20">
              <div className="container">
                <Reveal>
                  <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl mb-8">
                    Todas las <span className="text-gold">noticias</span>
                  </h2>
                </Reveal>
                <div className="grid gap-6 md:grid-cols-3">
                  {resto.map((item, i) => (
                    <NoticiaCard key={item.id} noticia={item} gradientIdx={i + 1} />
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  )
}
