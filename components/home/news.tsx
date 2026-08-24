import { Reveal } from "@/components/shared/reveal"
import { getNoticiasRecientes, resolveAssetUrl, type Noticia } from "@/lib/api"
import { extractPlainText } from "@/components/shared/editorjs-renderer"
import { ArrowRight, Newspaper } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// ─── Gradientes de fallback cuando la noticia no tiene imagen ────────────────
const FALLBACK_GRADIENTS = [
  "from-emerald-500 to-green-700",
  "from-amber-400 to-yellow-600",
  "from-blue-500 to-indigo-700",
]

function formatFecha(fecha?: string | null): string {
  if (!fecha) return ""
  return new Date(fecha).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
}

function NoticiaCard({ item, index }: { item: Noticia; index: number }) {
  const gradient = FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length]
  const imagenUrl = resolveAssetUrl(item.imagenPortada)

  return (
    <div className="group flex flex-col h-full overflow-hidden rounded-[2.5rem] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_80px_-20px_rgba(2,106,55,0.15)] hover:border-green-500/30 dark:hover:border-green-500/20">

      {/* Contenedor de Imagen o Gradiente */}
      <div className={`relative flex h-56 sm:h-64 w-full items-center justify-center overflow-hidden rounded-t-[2.5rem] ${!imagenUrl ? `bg-gradient-to-br ${gradient}` : ""}`}>

        {/* Fecha como Badge flotante */}
        {item.fechaPublicacion && (
          <div className="absolute top-6 left-6 z-20 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 shadow-lg transition-transform duration-500 group-hover:scale-105 group-hover:bg-green-600/80">
            <span className="text-[10px] font-black uppercase tracking-widest text-white drop-shadow-sm">
              {formatFecha(item.fechaPublicacion)}
            </span>
          </div>
        )}

        {imagenUrl ? (
          <>
            <Image
              src={imagenUrl}
              alt={item.titulo}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {/* Overlay sutil para mejorar legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80" />
          </>
        ) : (
          <>
            {/* Patron decorativo si no hay imagen */}
            <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiLz48L3N2Zz4=')] bg-[length:20px_20px]" />
            <div className="relative z-10 p-6 bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-[2rem] border border-white/30 shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6">
              <Newspaper className="size-12 text-white drop-shadow-lg" strokeWidth={1.5} />
            </div>
          </>
        )}
      </div>

      {/* Contenido del texto */}
      <div className="flex flex-col flex-1 p-8 sm:p-10 relative">
        <h4 className="text-xl sm:text-2xl font-extrabold leading-tight text-foreground mb-4 group-hover:text-green-700 dark:group-hover:text-green-light transition-colors" style={{ fontFamily: "var(--font-montserrat)" }}>
          {item.titulo}
        </h4>

        <p className="text-base leading-relaxed text-muted-foreground font-medium dark:font-light flex-1 line-clamp-3 mb-6">
          {extractPlainText(item.contenido, 200)}
        </p>

        {/* Botón Leer Más interactivo */}
        <div className="mt-auto pt-6 border-t border-black/5 dark:border-white/10 flex items-center justify-between">
          <Link
            href={`/noticias/${item.slug}`}
            className="group/link inline-flex items-center gap-3 text-sm font-black uppercase tracking-widest text-green-700 dark:text-green-light transition-all hover:text-gold"
          >
            <span>Leer más</span>
            <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-green-50 dark:bg-green-500/10 transition-all duration-300 group-hover/link:bg-gold/10 group-hover/link:translate-x-1">
              <ArrowRight className="size-4 transition-transform duration-300" />
            </span>
          </Link>

          <div className="w-0 h-1 bg-gold rounded-full transition-all duration-700 group-hover:w-12 opacity-0 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  )
}

export async function News() {
  const noticias = await getNoticiasRecientes(3)

  // Si no hay noticias del API, no renderizar la sección (o mostrar mensaje)
  if (noticias.length === 0) return null

  return (
    <section id="noticias" className="relative overflow-hidden bg-transparent py-24 md:py-40">
      {/* Luz ambiental de fondo */}
      <div className="absolute top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-32">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-green-500/30 bg-green-500/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-green-700 dark:text-green-light w-max shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600 dark:bg-green-light"></span>
              </span>
              Actualidad
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl font-extrabold leading-[1.1] text-foreground md:text-5xl lg:text-6xl mt-4 tracking-tight" style={{ fontFamily: "var(--font-montserrat)" }}>
              Últimas <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-green-700 to-green-900 dark:from-green-light dark:to-green drop-shadow-sm">novedades</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground font-medium dark:font-light">
              Mantente informado con los acontecimientos más relevantes sobre nuestra operación, avances tecnológicos y contribuciones al sector minero.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-8 md:grid-cols-3 relative z-20">
          {noticias.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.15}>
              <NoticiaCard item={item} index={i} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 text-center relative z-20">
          <Reveal delay={0.3}>
            <Link
              href="/noticias"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full p-[2px] font-bold focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-background"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-500 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm text-foreground transition-all duration-300 group-hover:bg-transparent group-hover:text-white">
                Ver todas las noticias
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
