/**
 * Cliente API para consumir el backend de ControlCodmilla.
 *
 * La URL base se configura via la variable de entorno NEXT_PUBLIC_API_URL.
 * - Desarrollo: http://localhost:8080 (valor por defecto)
 * - Producción: cambiar en .env.local o en la plataforma de despliegue.
 *
 * SEGURIDAD: solo se expone NEXT_PUBLIC_ (cliente) para la URL base.
 * Cualquier secreto adicional (ej. SMTP) debe ir en variables
 * sin el prefijo NEXT_PUBLIC_ y usarse únicamente en Server Components/Route Handlers.
 */

const API_BASE = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080").replace(/\/+$/, "");

// ─── Tipos ─────────────────────────────────────────────────────────────────

export interface Noticia {
  id: number;
  titulo: string;
  slug: string;
  contenido: string;
  imagenPortada?: string | null;
  fechaPublicacion?: string | null;
  activo: boolean;
  destacado: boolean;
}

export interface CarruselItem {
  id: number;
  titulo: string;
  /** Ruta relativa, ej: "/archivos/carrusel/imagen.jpg" — ya incluye el prefijo /archivos/ */
  imagenUrl: string;
  linkUrl?: string | null;
  orden: number;
  activo: boolean;
}

export interface PDFDocumento {
  id: number;
  nombre: string;
  nombreOriginal?: string;
  rutaArchivo?: string;
  /** URL relativa lista para usar, ej: "/archivos/pdfs/documento.pdf" */
  url: string;
  orden: number;
  activo: boolean;
}

// ─── Helper: URL de assets ──────────────────────────────────────────────────

/**
 * Convierte una ruta relativa del backend en una URL absoluta.
 * Ej: "/archivos/carrusel/imagen.jpg" → "http://localhost:8080/archivos/carrusel/imagen.jpg"
 *
 * Si ya es una URL absoluta la devuelve tal cual.
 */
export function resolveAssetUrl(path?: string | null): string {
  if (!path) return "";
  // Ya es URL absoluta (http/https)
  if (/^[a-z][a-z0-9+\-.]*:/i.test(path)) return path;
  // Ruta relativa → concatenar con el host del backend
  return `${API_BASE}${path.startsWith("/") ? path : `/${path}`}`;
}

// ─── Fetcher genérico ────────────────────────────────────────────────────────

/**
 * Wrapper sobre fetch con manejo de errores uniforme.
 * Solo se usa en Server Components (no expone secretos al cliente).
 *
 * @param revalidate - segundos de caché ISR. 0 = sin caché (SSR), 60 = revalidar cada minuto.
 */
async function apiFetch<T>(
  endpoint: string,
  revalidate: number = 60
): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}/api${endpoint}`, {
      next: { revalidate },
      headers: { Accept: "application/json" },
    });

    if (!res.ok) {
      console.error(`[API] ${endpoint} → ${res.status} ${res.statusText}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (err) {
    console.error(`[API] Error al conectar con el backend (${endpoint}):`, err);
    return null;
  }
}

// ─── Noticias (endpoints públicos — solo activas) ─────────────────────────────

/** Obtiene noticias activas. */
export async function getNoticias(): Promise<Noticia[]> {
  return (await apiFetch<Noticia[]>("/publico/noticias")) ?? [];
}

/** Obtiene las N noticias activas más recientes para mostrar en el home. */
export async function getNoticiasRecientes(limit = 3): Promise<Noticia[]> {
  return (await apiFetch<Noticia[]>(`/publico/noticias/recientes?limit=${limit}`)) ?? [];
}

/** Obtiene las noticias activas: { destacada, resto } */
export async function getNoticiasParaPagina(): Promise<{
  destacada: Noticia | null;
  resto: Noticia[];
}> {
  const noticias = await getNoticias();
  const activas = [...noticias].sort((a, b) => {
    const da = a.fechaPublicacion ? new Date(a.fechaPublicacion).getTime() : 0;
    const db = b.fechaPublicacion ? new Date(b.fechaPublicacion).getTime() : 0;
    return db - da;
  });

  const destacada = activas.find((n) => n.destacado) ?? activas[0] ?? null;
  const resto = activas.filter((n) => n.id !== destacada?.id);
  return { destacada, resto };
}

/** Obtiene una noticia activa por slug. */
export async function getNoticia(slug: string): Promise<Noticia | null> {
  return apiFetch<Noticia>(`/publico/noticias/${encodeURIComponent(slug)}`, 0);
}

// ─── Carrusel ─────────────────────────────────────────────────────────────────

/** Obtiene los items del carrusel activos, ordenados por `orden`. */
export async function getCarrusel(): Promise<CarruselItem[]> {
  return (await apiFetch<CarruselItem[]>("/publico/carrusel")) ?? [];
}

// ─── PDF Documentos ───────────────────────────────────────────────────────────

/** Obtiene los documentos PDF activos, ordenados por `orden`. */
export async function getPDFDocumentos(): Promise<PDFDocumento[]> {
  return (await apiFetch<PDFDocumento[]>("/publico/pdf-documentos")) ?? [];
}

// ─── Trabajadores (consulta pública via QR) ───────────────────────────────────

/**
 * Trabajador en vista pública — solo campos seguros, sin IDs internos ni timestamps.
 * Consume el endpoint /api/publico/trabajadores del backend.
 */
export interface TrabajadorPublico {
  /** Código público del trabajador (no es el ID de BD). */
  codigoPublico: string;
  /** Nombre completo en formato "APELLIDO1 APELLIDO2 NOMBRE1 NOMBRE2". */
  nombreCompleto: string;
  /** URL relativa de la foto, ej: "/archivos/imagenesTrabajadores/foto.jpg" */
  fotoUrl: string;
  /** Indica si el trabajador está activo en la cooperativa. */
  activo: boolean;
}

/**
 * Obtiene la lista de trabajadores activos de Coodmilla para el módulo QR.
 * Consume el endpoint público restringido — sin datos sensibles.
 */
export async function getTrabajadoresPublicos(): Promise<TrabajadorPublico[]> {
  return (await apiFetch<TrabajadorPublico[]>("/publico/trabajadores", 60)) ?? [];
}
