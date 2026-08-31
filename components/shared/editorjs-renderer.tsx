import React from "react"
import Image from "next/image"
import { resolveAssetUrl } from "@/lib/api"
import { sanitizeHtml } from "@/lib/sanitize"

// ─── Tipos de Editor.js ────────────────────────────────────────────────────────

interface EditorBlock {
  id?: string
  type: string
  data: Record<string, unknown>
}

interface EditorDocument {
  time?: number
  blocks: EditorBlock[]
  version?: string
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Detecta si el string es un JSON de Editor.js válido.
 * Devuelve el objeto parseado, o null si no lo es.
 */
export function parseEditorJs(content: string): EditorDocument | null {
  const trimmed = content.trim()
  if (!trimmed.startsWith("{")) return null
  try {
    const parsed = JSON.parse(trimmed)
    if (parsed && Array.isArray(parsed.blocks)) {
      return parsed as EditorDocument
    }
    return null
  } catch {
    return null
  }
}

/**
 * Extrae texto plano de un contenido Editor.js para meta descriptions, previews, etc.
 */
export function extractPlainText(content: string, maxLength = 200): string {
  const doc = parseEditorJs(content)
  if (!doc) {
    return content.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim().slice(0, maxLength)
  }
  const text = doc.blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph":
        case "header":
          return String(block.data.text ?? "").replace(/<[^>]*>/g, "")
        case "list": {
          const items = (block.data.items as Array<{ content?: string } | string>) ?? []
          return items.map((i) => (typeof i === "string" ? i : (i.content ?? ""))).join(" ")
        }
        case "quote":
          return String(block.data.text ?? "")
        default:
          return ""
      }
    })
    .filter(Boolean)
    .join(" ")
  return text.slice(0, maxLength)
}

// ─── Renderizadores por tipo de bloque ────────────────────────────────────────

function BlockParagraph({ data }: { data: Record<string, unknown> }) {
  const text = String(data.text ?? "")
  if (!text) return null
  return (
    <p
      className="text-base md:text-lg leading-relaxed text-foreground/85"
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(text) }}
    />
  )
}

function BlockHeader({ data }: { data: Record<string, unknown> }) {
  const text = String(data.text ?? "")
  const level = Number(data.level ?? 2)
  if (!text) return null

  const sizes: Record<number, string> = {
    1: "text-3xl md:text-4xl mt-12 mb-4",
    2: "text-2xl md:text-3xl mt-10 mb-4",
    3: "text-xl md:text-2xl mt-8 mb-3",
    4: "text-lg md:text-xl mt-6 mb-2",
    5: "text-base md:text-lg mt-4 mb-2",
    6: "text-base mt-4 mb-2",
  }
  const sizeClass = sizes[level] ?? sizes[2]
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements

  return (
    <Tag
      className={`font-extrabold tracking-tight text-foreground ${sizeClass}`}
      style={{ fontFamily: "var(--font-montserrat)" }}
      dangerouslySetInnerHTML={{ __html: sanitizeHtml(text) }}
    />
  )
}

type RawListItem = { content?: string; items?: RawListItem[] } | string

function renderListItem(item: RawListItem, key: number): React.ReactElement {
  const content = typeof item === "string" ? item : (item.content ?? "")
  const nestedItems = typeof item !== "string" && Array.isArray(item.items) ? item.items : []

  return (
    <li key={key} className="leading-relaxed text-foreground/85">
      <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />
      {nestedItems.length > 0 && (
        <ul className="mt-1 ml-5 space-y-1 list-disc">
          {nestedItems.map((child, i) => renderListItem(child, i))}
        </ul>
      )}
    </li>
  )
}

function BlockList({ data }: { data: Record<string, unknown> }) {
  const style = String(data.style ?? "unordered")
  const items = (data.items ?? []) as RawListItem[]

  if (style === "ordered") {
    return (
      <ol className="list-decimal ml-6 space-y-2 text-base md:text-lg">
        {items.map((item, i) => renderListItem(item, i))}
      </ol>
    )
  }
  return (
    <ul className="list-disc ml-6 space-y-2 text-base md:text-lg">
      {items.map((item, i) => renderListItem(item, i))}
    </ul>
  )
}

function BlockQuote({ data }: { data: Record<string, unknown> }) {
  const text = String(data.text ?? "")
  const caption = data.caption ? String(data.caption) : null
  const alignment = String(data.alignment ?? "left")

  return (
    <blockquote
      className={`relative border-l-4 border-gold/60 pl-6 py-2 italic text-foreground/70 text-lg leading-relaxed ${alignment === "center" ? "text-center border-l-0 border-t-2 pt-4 pl-0" : ""}`}
    >
      {alignment !== "center" && (
        <div className="absolute -left-[2px] top-0 bottom-0 w-1 bg-gradient-to-b from-gold to-yellow-600 rounded-full" />
      )}
      <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(text) }} />
      {caption && (
        <cite className="block mt-2 text-sm not-italic font-semibold text-gold">
          — <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(caption) }} />
        </cite>
      )}
    </blockquote>
  )
}

function BlockCode({ data }: { data: Record<string, unknown> }) {
  const code = String(data.code ?? "")
  return (
    <pre className="rounded-xl border border-foreground/10 dark:border-white/10 bg-foreground/5 dark:bg-white/5 p-4 overflow-x-auto">
      <code className="text-sm font-mono text-foreground/80">{code}</code>
    </pre>
  )
}

function BlockDelimiter() {
  return (
    <div className="flex items-center justify-center gap-3 py-2">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-1.5 h-1.5 rounded-full bg-gold/50" />
      ))}
    </div>
  )
}

function BlockTable({ data }: { data: Record<string, unknown> }) {
  const content = (data.content ?? []) as string[][]
  const withHeadings = Boolean(data.withHeadings)
  if (!content.length) return null

  const headers = withHeadings ? content[0] : null
  const rows = withHeadings ? content.slice(1) : content

  return (
    <div className="overflow-x-auto rounded-xl border border-foreground/10 dark:border-white/10">
      <table className="w-full text-sm text-left">
        {headers && (
          <thead className="bg-foreground/5 dark:bg-white/5 border-b border-foreground/10 dark:border-white/10">
            <tr>
              {headers.map((cell, i) => (
                <th key={i} className="px-4 py-3 font-bold text-foreground tracking-wide">
                  <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(cell) }} />
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className="border-b border-foreground/5 dark:border-white/5 last:border-0">
              {row.map((cell, ci) => (
                <td key={ci} className="px-4 py-3 text-foreground/80">
                  <span dangerouslySetInnerHTML={{ __html: sanitizeHtml(cell) }} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function BlockImage({ data }: { data: Record<string, unknown> }) {
  const file = data.file as { url?: string } | undefined
  const rawUrl = file?.url ?? String(data.url ?? "")
  const url = resolveAssetUrl(rawUrl)
  const caption = data.caption ? String(data.caption) : null
  const withBorder = Boolean(data.withBorder)
  const stretched = Boolean(data.stretched)
  const withBackground = Boolean(data.withBackground)

  if (!url) return null

  return (
    <figure className={stretched ? "w-full" : "max-w-2xl mx-auto"}>
      <div
        className={`relative overflow-hidden rounded-xl ${withBorder ? "border border-foreground/10" : ""} ${withBackground ? "bg-foreground/5 p-4" : ""}`}
        style={{ aspectRatio: "16/9" }}
      >
        <Image
          src={url}
          alt={caption ?? "Imagen de la noticia"}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-muted-foreground italic">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

function BlockWarning({ data }: { data: Record<string, unknown> }) {
  const title = data.title ? String(data.title) : null
  const message = String(data.message ?? "")

  return (
    <div className="flex gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
      <span className="text-xl shrink-0">⚠️</span>
      <div>
        {title && <p className="font-bold text-amber-700 dark:text-amber-400 mb-1">{title}</p>}
        <p className="text-sm text-foreground/80" dangerouslySetInnerHTML={{ __html: sanitizeHtml(message) }} />
      </div>
    </div>
  )
}

function BlockChecklist({ data }: { data: Record<string, unknown> }) {
  const items = (data.items ?? []) as Array<{ text: string; checked: boolean }>
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-base text-foreground/85">
          <span
            className={`mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center rounded border-2 text-xs font-bold transition-colors ${
              item.checked
                ? "border-green-600 bg-green-600/20 text-green-600 dark:border-green-400 dark:bg-green-400/20 dark:text-green-400"
                : "border-foreground/30"
            }`}
          >
            {item.checked && "✓"}
          </span>
          <span
            className={item.checked ? "line-through text-foreground/50" : ""}
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(item.text) }}
          />
        </li>
      ))}
    </ul>
  )
}

// ─── Dispatcher de bloques ────────────────────────────────────────────────────

function RenderBlock({ block }: { block: EditorBlock }) {
  try {
    switch (block.type) {
      case "paragraph":
        return <BlockParagraph data={block.data} />
      case "header":
        return <BlockHeader data={block.data} />
      case "list":
      case "nestedList":
        return <BlockList data={block.data} />
      case "quote":
        return <BlockQuote data={block.data} />
      case "code":
        return <BlockCode data={block.data} />
      case "delimiter":
        return <BlockDelimiter />
      case "table":
        return <BlockTable data={block.data} />
      case "image":
        return <BlockImage data={block.data} />
      case "warning":
        return <BlockWarning data={block.data} />
      case "checklist":
        return <BlockChecklist data={block.data} />
      default:
        console.warn(`[EditorJsRenderer] Bloque no soportado: "${block.type}"`, block.data)
        return null
    }
  } catch (err) {
    console.error(`[EditorJsRenderer] Error al renderizar bloque "${block.type}":`, err)
    return null
  }
}

// ─── Componente principal ─────────────────────────────────────────────────────

interface EditorJsRendererProps {
  content: string
  className?: string
}

/**
 * Renderiza contenido que puede ser:
 * 1. JSON de Editor.js  → renderiza cada bloque con diseño premium
 * 2. HTML rico          → inyecta con dangerouslySetInnerHTML + clases prose
 * 3. Texto plano        → divide por saltos de línea y muestra párrafos
 */
export function EditorJsRenderer({ content, className = "" }: EditorJsRendererProps) {
  // Caso 1: Editor.js JSON
  const doc = parseEditorJs(content)
  if (doc) {
    return (
      <div className={`space-y-6 ${className}`}>
        {doc.blocks.map((block, index) => (
          <RenderBlock key={block.id ?? index} block={block} />
        ))}
      </div>
    )
  }

  // Caso 2: HTML
  const hasHTML = /<[a-z][\s\S]*>/i.test(content)
  if (hasHTML) {
    return (
      <div
        className={`prose prose-lg max-w-none
          text-foreground/85 leading-relaxed
          prose-headings:text-foreground prose-headings:font-extrabold
          prose-a:text-green prose-a:no-underline hover:prose-a:text-gold
          prose-strong:text-foreground
          prose-blockquote:border-gold/60 prose-blockquote:text-foreground/70
          prose-code:text-foreground/80 prose-code:bg-foreground/5
          prose-img:rounded-xl
          dark:prose-invert
          ${className}`}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }}
      />
    )
  }

  // Caso 3: Texto plano
  return (
    <div className={`space-y-5 ${className}`}>
      {content
        .split(/\n+/)
        .filter(Boolean)
        .map((paragraph, i) => (
          <p key={i} className="text-base md:text-lg leading-relaxed text-foreground/85">
            {paragraph}
          </p>
        ))}
    </div>
  )
}
