"use client"

import { useState, useCallback } from "react"
import {
  FileText,
  FileCheck2,
  FileBadge,
  FileBarChart2,
  FileKey2,
  FileSearch,
  Download,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react"

// ─── Types ───────────────────────────────────────────────────────────────────

interface DocumentCardProps {
  nombre: string
  nombreOriginal?: string
  url: string
  index?: number
}

type DownloadState = "idle" | "loading" | "success" | "error"

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Assign a rotating icon based on doc index for visual variety */
const DOC_ICONS = [FileText, FileCheck2, FileBadge, FileBarChart2, FileKey2, FileSearch]

function getDocIcon(index: number) {
  return DOC_ICONS[index % DOC_ICONS.length]
}

/** Determine accent color based on index for subtle variety */
const ACCENT_PALETTES = [
  {
    bg: "bg-emerald-500/10 dark:bg-emerald-400/10",
    border: "border-emerald-500/20 dark:border-emerald-400/20",
    icon: "text-emerald-600 dark:text-emerald-400",
    glow: "shadow-emerald-500/20",
    gradient: "from-emerald-500/5 to-transparent",
  },
  {
    bg: "bg-amber-500/10 dark:bg-amber-400/10",
    border: "border-amber-500/20 dark:border-amber-400/20",
    icon: "text-amber-600 dark:text-amber-400",
    glow: "shadow-amber-500/20",
    gradient: "from-amber-500/5 to-transparent",
  },
  {
    bg: "bg-blue-500/10 dark:bg-blue-400/10",
    border: "border-blue-500/20 dark:border-blue-400/20",
    icon: "text-blue-600 dark:text-blue-400",
    glow: "shadow-blue-500/20",
    gradient: "from-blue-500/5 to-transparent",
  },
  {
    bg: "bg-purple-500/10 dark:bg-purple-400/10",
    border: "border-purple-500/20 dark:border-purple-400/20",
    icon: "text-purple-600 dark:text-purple-400",
    glow: "shadow-purple-500/20",
    gradient: "from-purple-500/5 to-transparent",
  },
  {
    bg: "bg-rose-500/10 dark:bg-rose-400/10",
    border: "border-rose-500/20 dark:border-rose-400/20",
    icon: "text-rose-600 dark:text-rose-400",
    glow: "shadow-rose-500/20",
    gradient: "from-rose-500/5 to-transparent",
  },
  {
    bg: "bg-teal-500/10 dark:bg-teal-400/10",
    border: "border-teal-500/20 dark:border-teal-400/20",
    icon: "text-teal-600 dark:text-teal-400",
    glow: "shadow-teal-500/20",
    gradient: "from-teal-500/5 to-transparent",
  },
]

function getPalette(index: number) {
  return ACCENT_PALETTES[index % ACCENT_PALETTES.length]
}

// ─── Component ───────────────────────────────────────────────────────────────

export function DocumentCard({ nombre, nombreOriginal, url, index = 0 }: DocumentCardProps) {
  const [state, setState] = useState<DownloadState>("idle")
  const [rippleKey, setRippleKey] = useState(0)

  const Icon = getDocIcon(index)
  const palette = getPalette(index)

  const handleDownload = useCallback(async () => {
    if (state === "loading" || state === "success") return

    // Trigger ripple
    setRippleKey((k) => k + 1)
    setState("loading")

    try {
      // Simulate a brief preparation delay for smooth UX
      await new Promise((resolve) => setTimeout(resolve, 900))

      // Open / download the file
      const link = document.createElement("a")
      link.href = url
      link.target = "_blank"
      link.rel = "noopener noreferrer"
      link.download = nombre
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      setState("success")

      // Reset after 2.8 s
      setTimeout(() => setState("idle"), 2800)
    } catch {
      setState("error")
      setTimeout(() => setState("idle"), 2500)
    }
  }, [state, url, nombre])

  const isLoading = state === "loading"
  const isSuccess = state === "success"
  const isError = state === "error"

  return (
    <div
      className={`
        group relative flex flex-col rounded-2xl overflow-hidden
        border transition-all duration-500
        ${isSuccess
          ? "border-emerald-400/50 dark:border-emerald-500/50 shadow-lg shadow-emerald-500/10"
          : isError
          ? "border-red-400/40 dark:border-red-500/40"
          : "border-border dark:border-white/10 hover:border-[#026a37]/40 dark:hover:border-[#e89721]/30"
        }
        bg-white/70 dark:bg-white/[0.04]
        backdrop-blur-md
        hover:-translate-y-1.5
        hover:shadow-xl
        ${isSuccess ? "" : "hover:shadow-[#026a37]/10 dark:hover:shadow-[#e89721]/10"}
      `}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Subtle gradient shine on hover */}
      <div
        className={`
          absolute inset-0 bg-gradient-to-br ${palette.gradient}
          opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
        `}
      />

      {/* Success overlay */}
      {isSuccess && (
        <div className="absolute inset-0 bg-emerald-500/5 dark:bg-emerald-400/5 pointer-events-none z-10 animate-[fadeIn_0.3s_ease]" />
      )}

      {/* Top accent bar */}
      <div
        className={`
          absolute top-0 left-0 right-0 h-[2px]
          bg-gradient-to-r
          ${isSuccess
            ? "from-emerald-400 to-green-500 opacity-100"
            : isLoading
            ? "from-amber-400 to-yellow-500 opacity-100 animate-pulse"
            : isError
            ? "from-red-400 to-rose-500 opacity-100"
            : "from-[#026a37] to-[#e89721] opacity-0 group-hover:opacity-70"
          }
          transition-all duration-500
        `}
      />

      <div className="relative z-10 flex flex-col h-full p-5 gap-4">
        {/* ── Header: icon + title ── */}
        <div className="flex items-start gap-4">
          {/* Icon container */}
          <div
            className={`
              shrink-0 flex size-12 items-center justify-center rounded-xl
              border transition-all duration-300
              ${isSuccess
                ? "bg-emerald-500/15 border-emerald-400/30"
                : isLoading
                ? "bg-amber-500/15 border-amber-400/30"
                : isError
                ? "bg-red-500/15 border-red-400/30"
                : `${palette.bg} ${palette.border} group-hover:scale-105 group-hover:shadow-md group-hover:${palette.glow}`
              }
            `}
          >
            {isSuccess ? (
              <CheckCircle2 className="size-6 text-emerald-500 dark:text-emerald-400" strokeWidth={2} />
            ) : isLoading ? (
              <Loader2 className="size-6 text-amber-500 dark:text-amber-400 animate-spin" strokeWidth={2} />
            ) : isError ? (
              <AlertCircle className="size-6 text-red-500 dark:text-red-400" strokeWidth={2} />
            ) : (
              <Icon className={`size-6 ${palette.icon} transition-transform duration-300 group-hover:scale-110`} strokeWidth={1.5} />
            )}
          </div>

          {/* Text */}
          <div className="flex-1 min-w-0">
            <p
              className={`
                text-sm font-semibold leading-snug transition-colors duration-300 truncate
                ${isSuccess
                  ? "text-emerald-600 dark:text-emerald-400"
                  : isError
                  ? "text-red-600 dark:text-red-400"
                  : "text-[#0d1b12] dark:text-white/95 group-hover:text-[#026a37] dark:group-hover:text-[#e89721]"
                }
              `}
            >
              {nombre}
            </p>
            {nombreOriginal && nombreOriginal !== nombre && (
              <p className="mt-0.5 text-xs text-[#5a7a62] dark:text-white/45 truncate leading-snug">
                {nombreOriginal}
              </p>
            )}

            {/* Status label */}
            <div className="mt-1.5 flex items-center gap-1.5">
              {isLoading && (
                <span className="text-[10px] font-semibold uppercase tracking-wide text-amber-500 dark:text-amber-400 flex items-center gap-1">
                  <Loader2 className="size-2.5 animate-spin" />
                  Preparando…
                </span>
              )}
              {isSuccess && (
                <span className="text-[10px] font-semibold uppercase tracking-wide text-emerald-600 dark:text-emerald-400 flex items-center gap-1 animate-[fadeIn_0.4s_ease]">
                  <CheckCircle2 className="size-2.5" />
                  ¡Descarga iniciada!
                </span>
              )}
              {isError && (
                <span className="text-[10px] font-semibold uppercase tracking-wide text-red-500 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="size-2.5" />
                  Error al descargar
                </span>
              )}
              {state === "idle" && (
                <span className="text-[10px] font-medium text-[#5a7a62] dark:text-white/40 uppercase tracking-wide">
                  Documento PDF
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ── Download button ── */}
        <button
          onClick={handleDownload}
          disabled={isLoading || isSuccess}
          aria-label={`Descargar ${nombre}`}
          className={`
            relative mt-auto w-full overflow-hidden
            flex items-center justify-center gap-2
            rounded-xl px-4 py-2.5
            text-xs font-bold uppercase tracking-widest
            transition-all duration-300
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
            disabled:cursor-not-allowed
            ${isSuccess
              ? "bg-emerald-500/20 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-400 border border-emerald-400/30 focus-visible:ring-emerald-400"
              : isLoading
              ? "bg-amber-500/15 text-amber-600 dark:bg-amber-400/10 dark:text-amber-400 border border-amber-400/25"
              : isError
              ? "bg-red-500/15 text-red-600 dark:bg-red-400/10 dark:text-red-400 border border-red-400/25"
              : `
                  bg-[#026a37] dark:bg-[#e89721]/90 text-white dark:text-[#0d1b12]
                  border border-[#026a37]/80 dark:border-[#e89721]/60
                  hover:bg-[#024f28] dark:hover:bg-[#e89721]
                  hover:shadow-lg hover:shadow-[#026a37]/30 dark:hover:shadow-[#e89721]/30
                  hover:scale-[1.02] active:scale-[0.98]
                  focus-visible:ring-[#026a37] dark:focus-visible:ring-[#e89721]
                `
            }
          `}
        >
          {/* Ripple effect */}
          {rippleKey > 0 && state !== "idle" && (
            <span
              key={rippleKey}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              aria-hidden
            >
              <span className="w-3 h-3 rounded-full bg-white/40 animate-[ripple-effect_0.6s_ease_forwards]" />
            </span>
          )}

          {/* Shimmer on hover */}
          <span
            className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
            aria-hidden
          />

          {/* Button content */}
          {isLoading ? (
            <>
              <Loader2 className="size-3.5 animate-spin" />
              <span>Preparando…</span>
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="size-3.5" />
              <span>¡Listo!</span>
            </>
          ) : isError ? (
            <>
              <AlertCircle className="size-3.5" />
              <span>Reintentar</span>
            </>
          ) : (
            <>
              <Download className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              <span>Descargar</span>
              <Sparkles className="size-2.5 opacity-60" />
            </>
          )}
        </button>
      </div>
    </div>
  )
}
