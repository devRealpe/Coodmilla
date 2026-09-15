/**
 * Cliente de datos públicos vía Supabase (solo lecturas de registros activos).
 */

import { createPublicClient } from "@/lib/supabase";

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
  url: string;
  orden: number;
  activo: boolean;
}

export interface TrabajadorPublico {
  codigoPublico: string;
  nombreCompleto: string;
  fotoUrl: string;
  activo: boolean;
}

/** Las URLs de Storage ya son absolutas; se mantiene por compatibilidad. */
export function resolveAssetUrl(path?: string | null): string {
  if (!path) return "";
  if (/^[a-z][a-z0-9+\-.]*:/i.test(path)) return path;
  const base = (process.env.NEXT_PUBLIC_SUPABASE_URL ?? "").replace(/\/+$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type DbNoticia = {
  id: number;
  titulo: string;
  slug: string;
  contenido: string | null;
  imagen_portada: string | null;
  fecha_publicacion: string | null;
  activo: boolean;
  destacado: boolean;
};

type DbCarrusel = {
  id: number;
  titulo: string;
  imagen_url: string;
  link_url: string | null;
  orden: number;
  activo: boolean;
};

type DbPdf = {
  id: number;
  nombre: string;
  nombre_original: string | null;
  ruta_archivo: string;
  url: string;
  orden: number;
  activo: boolean;
};

type DbTrabajador = {
  codigo_publico: string;
  primer_nombre: string;
  segundo_nombre: string | null;
  primer_apellido: string;
  segundo_apellido: string | null;
  foto_url: string;
  activo: boolean;
};

function mapNoticia(row: DbNoticia): Noticia {
  return {
    id: row.id,
    titulo: row.titulo,
    slug: row.slug,
    contenido: row.contenido ?? "",
    imagenPortada: row.imagen_portada,
    fechaPublicacion: row.fecha_publicacion,
    activo: row.activo,
    destacado: row.destacado,
  };
}

export async function getNoticias(): Promise<Noticia[]> {
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("noticias")
      .select("*")
      .eq("activo", true)
      .order("fecha_publicacion", { ascending: false });
    if (error) {
      console.error("[API] noticias", error.message);
      return [];
    }
    return (data as DbNoticia[]).map(mapNoticia);
  } catch (err) {
    console.error("[API] Error noticias:", err);
    return [];
  }
}

export async function getNoticiasRecientes(limit = 3): Promise<Noticia[]> {
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("noticias")
      .select("*")
      .eq("activo", true)
      .order("fecha_publicacion", { ascending: false })
      .limit(limit);
    if (error) {
      console.error("[API] noticias recientes", error.message);
      return [];
    }
    return (data as DbNoticia[]).map(mapNoticia);
  } catch (err) {
    console.error("[API] Error noticias recientes:", err);
    return [];
  }
}

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

export async function getNoticia(slug: string): Promise<Noticia | null> {
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("noticias")
      .select("*")
      .eq("slug", slug)
      .eq("activo", true)
      .maybeSingle();
    if (error) {
      console.error("[API] noticia", error.message);
      return null;
    }
    return data ? mapNoticia(data as DbNoticia) : null;
  } catch (err) {
    console.error("[API] Error noticia:", err);
    return null;
  }
}

export async function getCarrusel(): Promise<CarruselItem[]> {
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("carrusel")
      .select("*")
      .eq("activo", true)
      .order("orden", { ascending: true });
    if (error) {
      console.error("[API] carrusel", error.message);
      return [];
    }
    return (data as DbCarrusel[]).map((row) => ({
      id: row.id,
      titulo: row.titulo,
      imagenUrl: row.imagen_url,
      linkUrl: row.link_url,
      orden: row.orden,
      activo: row.activo,
    }));
  } catch (err) {
    console.error("[API] Error carrusel:", err);
    return [];
  }
}

export async function getPDFDocumentos(): Promise<PDFDocumento[]> {
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("pdf_documentos")
      .select("*")
      .eq("activo", true)
      .order("orden", { ascending: true });
    if (error) {
      console.error("[API] pdf", error.message);
      return [];
    }
    return (data as DbPdf[]).map((row) => ({
      id: row.id,
      nombre: row.nombre,
      nombreOriginal: row.nombre_original ?? undefined,
      rutaArchivo: row.ruta_archivo,
      url: row.url,
      orden: row.orden,
      activo: row.activo,
    }));
  } catch (err) {
    console.error("[API] Error pdf:", err);
    return [];
  }
}

export async function getTrabajadoresPublicos(): Promise<TrabajadorPublico[]> {
  try {
    const supabase = createPublicClient();
    const { data, error } = await supabase
      .from("trabajadores")
      .select(
        "codigo_publico, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, foto_url, activo"
      )
      .eq("activo", true)
      .order("primer_apellido", { ascending: true });
    if (error) {
      console.error("[API] trabajadores", error.message);
      return [];
    }
    return (data as DbTrabajador[]).map((row) => ({
      codigoPublico: row.codigo_publico,
      nombreCompleto: [row.primer_apellido, row.segundo_apellido, row.primer_nombre, row.segundo_nombre]
        .filter(Boolean)
        .join(" ")
        .replace(/\s+/g, " ")
        .trim(),
      fotoUrl: row.foto_url,
      activo: row.activo,
    }));
  } catch (err) {
    console.error("[API] Error trabajadores:", err);
    return [];
  }
}
