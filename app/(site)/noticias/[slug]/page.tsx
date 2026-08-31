import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { getNoticia, getNoticias, resolveAssetUrl } from "@/lib/api"
import { PageHeader } from "@/components/shared/page-header"
import { Reveal } from "@/components/shared/reveal"
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react"
import { EditorJsRenderer, extractPlainText } from "@/components/shared/editorjs-renderer"

// ─── Metadata dinámica para SEO ───────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const noticia = await getNoticia(slug)

  if (!noticia) {
    return { title: "Noticia no encontrada — Coodmilla" }
  }

  // extractPlainText maneja tanto Editor.js JSON como HTML y texto plano
  const descripcion = extractPlainText(noticia.contenido, 160)

  return {
    title: noticia.titulo,
    description: descripcion,
    alternates: { canonical: `/noticias/${slug}` },
    openGraph: {
      title: `${noticia.titulo} — Coodmilla`,
      description: descripcion,
      images: noticia.imagenPortada ? [resolveAssetUrl(noticia.imagenPortada)] : [],
      type: "article",
    },
  }
}

// ─── Generación estática de rutas (ISR / build-time) ────────────────────────
export async function generateStaticParams() {
  const noticias = await getNoticias()
  return noticias.map((n) => ({ slug: n.slug }))
}

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatFecha(fecha?: string | null): string {
  if (!fecha) return ""
  return new Date(fecha).toLocaleDateString("es-CO", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}


export default async function NoticiaDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const noticia = await getNoticia(slug)

  if (!noticia || !noticia.activo) notFound()

  const imagenUrl = resolveAssetUrl(noticia.imagenPortada)

  return (
    <>
      <PageHeader
        label="Noticias"
        title={<>{noticia.titulo}</>}
        description={
          noticia.fechaPublicacion
            ? formatFecha(noticia.fechaPublicacion)
            : undefined
        }
      />

      <article className="bg-transparent py-12 md:py-20">
        <div className="container">
          {/* Breadcrumb */}
          <Reveal>
            <nav className="mb-8 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-green transition-colors">Inicio</Link>
              <span className="text-foreground/30">/</span>
              <Link href="/noticias" className="hover:text-green transition-colors">Noticias</Link>
              <span className="text-foreground/30">/</span>
              <span className="text-foreground font-medium line-clamp-1">{noticia.titulo}</span>
            </nav>
          </Reveal>

          <div className="max-w-3xl mx-auto">
            {/* Imagen de portada */}
            {imagenUrl && (
              <Reveal>
                <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden mb-10 shadow-lg">
                  <Image
                    src={imagenUrl}
                    alt={noticia.titulo}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 800px"
                    priority
                  />
                </div>
              </Reveal>
            )}

            {/* Meta info */}
            <Reveal>
              <div className="flex flex-wrap items-center gap-4 mb-8 pb-6 border-b border-border">
                {noticia.fechaPublicacion && (
                  <div className="inline-flex items-center gap-2 text-sm text-text-muted">
                    <Calendar className="size-4 text-gold" />
                    {formatFecha(noticia.fechaPublicacion)}
                  </div>
                )}
                {noticia.destacado && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-bold text-gold uppercase tracking-wider">
                    ★ Destacada
                  </span>
                )}
              </div>
            </Reveal>

            {/* Contenido */}
            <Reveal delay={0.1}>
              <EditorJsRenderer content={noticia.contenido} />
            </Reveal>

            {/* Volver */}
            <Reveal delay={0.2}>
              <div className="mt-14 pt-8 border-t border-border flex items-center justify-between gap-4 flex-wrap">
                <Link
                  href="/noticias"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-green hover:text-gold transition-colors group"
                >
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                  Volver a Noticias
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-yellow-500 px-6 py-3 text-sm font-bold text-dark hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(232,151,33,0.3)]"
                >
                  Contactar <ArrowRight className="size-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </>
  )
}
