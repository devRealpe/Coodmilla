"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowLeft, Users, CheckCircle2, Clock } from "lucide-react"
import type { TrabajadorPublico } from "@/lib/api"

interface TrabajadoresQRProps {
  trabajadores: TrabajadorPublico[]
  baseUrl: string
}

const REDIRECT_SECONDS = 15

export function TrabajadoresQR({ trabajadores, baseUrl }: TrabajadoresQRProps) {
  const router = useRouter()
  const [segundos, setSegundos] = useState(REDIRECT_SECONDS)
  const [saliendo, setSaliendo] = useState(false)
  const [selectedTrabajador, setSelectedTrabajador] = useState<TrabajadorPublico | null>(null)
  
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const salienteRef = useRef(false)

  // ── Función de redirección manual ─────────────────────────────────────────
  const redirigir = () => {
    if (salienteRef.current) return
    salienteRef.current = true
    setSaliendo(true)
    if (intervalRef.current) clearInterval(intervalRef.current)
    // Defer la navegación fuera del render cycle
    setTimeout(() => router.push("/nosotros"), 0)
  }

  // ── Countdown timer ───────────────────────────────────────────────────────
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSegundos((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!)
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  // ── Redirección automática cuando el contador llega a 0 ──────────────────
  // Se hace en un useEffect separado para nunca llamar router.push dentro del
  // callback de setState (causa "Cannot update while rendering").
  useEffect(() => {
    if (segundos === 0) {
      redirigir()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segundos])

  const progreso = ((REDIRECT_SECONDS - segundos) / REDIRECT_SECONDS) * 100

  return (
    <div className="min-h-screen flex flex-col" aria-live="polite">
      {/* ── Header ───────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-foreground/8 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-3">
          {/* Logo / marca */}
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
              <Users className="size-4 text-primary" />
            </div>
            <span
              className="text-sm font-bold tracking-wide text-foreground"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Coodmilla LTDA
            </span>
          </div>

          {/* Contador con barra de progreso */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex flex-col items-end gap-0.5">
              <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                <Clock className="size-3" />
                Redirigiendo en {segundos}s
              </span>
              {/* Barra de progreso */}
              <div className="h-1 w-24 rounded-full bg-muted overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-1000 ease-linear"
                  style={{ width: `${progreso}%` }}
                />
              </div>
            </div>

            <button
              id="btn-volver-ahora"
              onClick={redirigir}
              disabled={saliendo}
              className="flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground active:scale-95 disabled:opacity-50"
            >
              <ArrowLeft className="size-3.5" />
              Volver{saliendo ? "…" : ""}
            </button>
          </div>
        </div>

        {/* Barra de progreso mobile (bajo el header) */}
        <div className="h-0.5 w-full bg-muted sm:hidden">
          <div
            className="h-full bg-primary transition-all duration-1000 ease-linear"
            style={{ width: `${progreso}%` }}
          />
        </div>
      </header>

      {/* ── Main ─────────────────────────────────────────────────── */}
      <main className="flex-1 px-4 py-8 md:py-12">
        <div className="mx-auto max-w-2xl">
          {/* Título de sección */}
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 backdrop-blur-sm">
              <CheckCircle2 className="size-3.5 text-primary" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                Directorio de Asociados
              </span>
            </div>
            <h1
              className="text-2xl font-extrabold text-foreground md:text-3xl"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Trabajadores
            </h1>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Cooperativa del Distrito Minero de La Llanada
            </p>
          </div>

          {/* ── Sin trabajadores ── */}
          {trabajadores.length === 0 && (
            <div className="rounded-2xl border border-dashed border-foreground/15 bg-muted/40 p-10 text-center">
              <Users className="mx-auto mb-3 size-10 text-muted-foreground/50" />
              <p className="text-sm text-muted-foreground">
                No hay trabajadores disponibles en este momento.
              </p>
            </div>
          )}

          {/* ── Grilla de tarjetas ── */}
          {trabajadores.length > 0 && (
            <ul
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              role="list"
              aria-label="Lista de trabajadores activos"
            >
              {trabajadores.map((t, i) => (
                <li
                  key={t.codigoPublico}
                  onClick={() => setSelectedTrabajador(t)}
                  className="group relative flex cursor-pointer items-center gap-4 overflow-hidden rounded-2xl border border-foreground/8 bg-white/60 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-md dark:bg-white/[0.04] dark:hover:border-primary/30"
                  style={{ animationDelay: `${i * 40}ms` }}
                  aria-label={t.nombreCompleto}
                >
                  {/* Decoración lateral */}
                  <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-gradient-to-b from-primary/60 to-accent/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Foto */}
                  <div className="relative shrink-0">
                    <div className="relative size-16 overflow-hidden rounded-xl border-2 border-white/70 shadow-md dark:border-white/10">
                      <Image
                        src={`${baseUrl}${t.fotoUrl}`}
                        alt={`Foto de ${t.nombreCompleto}`}
                        fill
                        sizes="64px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          ;(e.currentTarget as HTMLImageElement).src =
                            `https://ui-avatars.com/api/?name=${encodeURIComponent(t.nombreCompleto)}&background=026a37&color=fff&size=128&bold=true&format=svg`
                        }}
                      />
                    </div>
                    {/* Badge activo */}
                    <span
                      className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full border-2 border-background bg-emerald-500 shadow"
                      title="Asociado activo"
                      aria-label="Activo"
                    >
                      <CheckCircle2 className="size-3 text-white" strokeWidth={3} />
                    </span>
                  </div>

                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <p
                      className="truncate text-[13px] font-bold uppercase tracking-wide text-foreground"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      {t.nombreCompleto}
                    </p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">
                      Asociado Coodmilla LTDA
                    </p>
                    <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
                      <span className="size-1.5 rounded-full bg-emerald-500" />
                      Asociado Activo
                    </span>
                  </div>
                  
                  {/* Icono de flecha para indicar interactividad */}
                  <div className="mr-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 text-primary">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </li>
              ))}
            </ul>
          )}

          {/* ── Pie de redirección ── */}
          <div className="mt-10 rounded-2xl border border-accent/20 bg-accent/5 p-5 text-center backdrop-blur-sm">
            <div className="mb-3 flex justify-center">
              {/* Anillo animado del contador */}
              <div className="relative flex size-14 items-center justify-center">
                <svg className="-rotate-90" width="56" height="56" viewBox="0 0 56 56">
                  <circle
                    cx="28" cy="28" r="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-muted/30"
                  />
                  <circle
                    cx="28" cy="28" r="22"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${2 * Math.PI * 22}`}
                    strokeDashoffset={`${2 * Math.PI * 22 * (segundos / REDIRECT_SECONDS)}`}
                    className="text-accent transition-all duration-1000 ease-linear"
                    strokeLinecap="round"
                  />
                </svg>
                <span
                  className="absolute text-lg font-extrabold text-accent"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {segundos}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              En <span className="font-semibold text-foreground">{segundos} segundo{segundos !== 1 ? "s" : ""}</span> serás redirigido a{" "}
              <span className="font-semibold text-primary">Nosotros</span>
            </p>
            <button
              id="btn-volver-principal"
              onClick={redirigir}
              disabled={saliendo}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow transition-all hover:bg-primary/90 active:scale-95 disabled:opacity-60"
            >
              <ArrowLeft className="size-4" />
              Ir a Nosotros ahora
            </button>
          </div>
        </div>
      </main>

      {/* ── Footer mínimo ────────────────────────────────────────── */}
      <footer className="border-t border-foreground/8 py-4 text-center">
        <p className="text-[11px] text-muted-foreground/60">
          © {new Date().getFullYear()} Coodmilla LTDA · Cooperativa del Distrito Minero de La Llanada
        </p>
      </footer>

      {/* ── Modal de Detalle de Trabajador ───────────────────────── */}
      {selectedTrabajador && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-foreground/10 bg-card p-6 shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Cerrar modal */}
            <button
              onClick={() => setSelectedTrabajador(null)}
              className="absolute right-4 top-4 flex size-8 items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Cerrar detalles"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            {/* Foto Ampliada */}
            <div className="mx-auto mt-4 mb-6 relative size-32">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-accent/40 blur-md" />
              <div className="relative size-full overflow-hidden rounded-full border-4 border-background shadow-lg">
                <Image
                  src={`${baseUrl}${selectedTrabajador.fotoUrl}`}
                  alt={`Foto de ${selectedTrabajador.nombreCompleto}`}
                  fill
                  sizes="128px"
                  className="object-cover"
                  onError={(e) => {
                    ;(e.currentTarget as HTMLImageElement).src =
                      `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedTrabajador.nombreCompleto)}&background=026a37&color=fff&size=256&bold=true&format=svg`
                  }}
                />
              </div>
              <span
                className="absolute bottom-1 right-2 flex size-7 items-center justify-center rounded-full border-[3px] border-background bg-emerald-500 shadow-md"
                title="Asociado activo"
              >
                <CheckCircle2 className="size-4 text-white" strokeWidth={3} />
              </span>
            </div>

            {/* Info Detallada */}
            <div className="text-center">
              <h2
                className="mb-1 text-xl font-extrabold uppercase tracking-wide text-foreground"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {selectedTrabajador.nombreCompleto}
              </h2>
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                Asociado Coodmilla LTDA
              </p>

              <div className="mb-6 flex justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  Estado: Activo
                </span>
              </div>
              
              <div className="rounded-xl bg-muted/40 p-4 text-left border border-foreground/5">
                <div className="mb-2">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Código de Asociado</span>
                  <p className="font-mono text-sm font-medium text-foreground">{selectedTrabajador.codigoPublico}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Cooperativa</span>
                  <p className="text-sm font-medium text-foreground">Distrito Minero de La Llanada</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
               <button
                onClick={() => setSelectedTrabajador(null)}
                className="w-full rounded-full bg-primary/10 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
               >
                 Cerrar información
               </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
