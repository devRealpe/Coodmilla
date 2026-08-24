"use client"

import { useEffect, useRef, useState } from "react"
import { Reveal } from "@/components/shared/reveal"
import { Pickaxe, Settings, Globe, Microscope, ArrowRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { type CarruselItem, resolveAssetUrl } from "@/lib/api"

// ─── Bloque decorativo estático (fallback si el carrusel está vacío) ──────────
const STATIC_BLOCKS = [
  { icon: Pickaxe, title: "Extracción", desc: "Minería Responsable", bg: "from-green-100 to-green-200 dark:from-green-900 dark:to-green-950", border: "border-green-300 dark:border-green-500/30" },
  { icon: Settings, title: "Ingeniería", desc: "Procesos Optimizados", bg: "from-amber-100 to-amber-200 dark:from-amber-600/20 dark:to-amber-900/20", border: "border-amber-300 dark:border-gold/30", style: { marginTop: "2rem" } },
  { icon: Globe, title: "Impacto", desc: "Desarrollo Local", bg: "from-green-100/50 to-green-200/50 dark:from-green-600/20 dark:to-green-900/20", border: "border-green-300 dark:border-green-400/30", style: { marginTop: "-2rem" } },
  { icon: Microscope, title: "Innovación", desc: "Tecnología Punta", bg: "from-foreground/5 to-foreground/10 dark:from-neutral-800 dark:to-neutral-900", border: "border-foreground/10 dark:border-white/10" },
]

// Particles and background have been moved to PageBackground component.

// ─── Carrusel dinámico ────────────────────────────────────────────────────────
function CarruselDinamico({ items }: { items: CarruselItem[] }) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length)
    }, 4000)
  }

  useEffect(() => {
    resetTimer()
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length])

  const prev = () => { setCurrent((c) => (c - 1 + items.length) % items.length); resetTimer() }
  const next = () => { setCurrent((c) => (c + 1) % items.length); resetTimer() }

  const item = items[current]

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(232,151,33,0.15)] group">
      {/* Imagen */}
      <div className="relative w-full h-full">
        {items.map((it, i) => {
          const imagenAbsoluta = resolveAssetUrl(it.imagenUrl)
          return (
            <div
              key={it.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
            >
              <Image
                src={imagenAbsoluta}
                alt={it.titulo}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          )
        })}
        {/* Overlay gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
      </div>

      {/* Info del slide */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
        <div className="bg-black/40 backdrop-blur-md rounded-2xl p-5 border border-white/10 inline-block max-w-[90%] shadow-xl">
          <p className="text-sm md:text-lg font-bold uppercase tracking-widest text-gold mb-1">{item.titulo}</p>
          {item.linkUrl && (
            <Link
              href={item.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white/80 hover:text-gold transition-colors mt-1"
            >
              Conoce más <ExternalLink className="size-4" />
            </Link>
          )}
        </div>
      </div>

      {/* Controles de navegación */}
      {items.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-gold hover:border-gold hover:scale-110"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all hover:bg-gold hover:border-gold hover:scale-110"
          >
            <ChevronRight className="size-4" />
          </button>

          {/* Indicadores */}
          <div className="absolute top-4 right-4 z-20 flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); resetTimer() }}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "w-6 bg-gold" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ─── Bloque decorativo estático (fallback) ────────────────────────────────────
function StaticBlocks() {
  return (
    <div className="grid grid-cols-2 gap-4 relative h-full">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold/20 blur-[100px] rounded-full pointer-events-none" />
      {STATIC_BLOCKS.map((block, i) => (
        <Reveal key={i} delay={0.3 + i * 0.1}>
          <div
            className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br ${block.bg} border ${block.border} backdrop-blur-xl transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:border-gold/50 cursor-pointer group h-48`}
            style={block.style}
          >
            <div className="p-4 rounded-full bg-foreground/5 dark:bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-gold/20">
              <block.icon className="h-8 w-8 text-foreground dark:text-white group-hover:text-gold transition-colors" />
            </div>
            <h3 className="font-bold text-foreground tracking-wide" style={{ fontFamily: "var(--font-montserrat)" }}>{block.title}</h3>
            <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider font-medium">{block.desc}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface HeroProps {
  /** Items del carrusel, pre-fetched en el Server Component padre */
  carruselItems?: CarruselItem[]
}

export function Hero({ carruselItems = [] }: HeroProps) {

  const tieneCarrusel = carruselItems.length > 0

  return (
    <section id="hero" className="relative overflow-hidden bg-transparent px-6 pt-32 pb-16 md:px-10 md:pb-24 md:pt-40 min-h-[95vh] flex items-center">
      <div className="container relative z-20 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-2 lg:gap-16">
          {/* ── Columna izquierda: texto ── */}
          <div className="max-w-3xl">
            <Reveal>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold shadow-[0_0_15px_rgba(232,151,33,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                Operaciones en Colombia
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl font-extrabold leading-[1.1] text-foreground md:text-6xl lg:text-[4.5rem]" style={{ fontFamily: "var(--font-montserrat)" }}>
                Minería con <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                  propósito
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl font-light">
                En Coodmilla integramos tecnología avanzada, máxima seguridad industrial y sostenibilidad ambiental para desarrollar operaciones mineras que generan valor real.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-yellow-500 px-8 py-4 text-sm font-bold text-dark transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(232,151,33,0.4)]"
                >
                  Solicitar información
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          {/* ── Columna derecha: carrusel dinámico o bloques estáticos ── */}
          <Reveal delay={0.3} className="w-full mt-10 lg:mt-0">
            <div className="relative h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] w-full">
              {/* Glowing effect behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/15 blur-[100px] rounded-full pointer-events-none" />
              <div className="relative h-full w-full">
                {tieneCarrusel ? (
                  <CarruselDinamico items={carruselItems} />
                ) : (
                  <StaticBlocks />
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
