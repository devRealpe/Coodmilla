import type { MetadataRoute } from "next"
import { getNoticias } from "@/lib/api"

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.coodmilla.com").replace(/\/+$/, "")

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/nosotros`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/servicios`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/certificaciones`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/noticias`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ]

  const noticias = await getNoticias()
  const noticiaRoutes: MetadataRoute.Sitemap = noticias.map((n) => ({
    url: `${SITE_URL}/noticias/${n.slug}`,
    lastModified: n.fechaPublicacion ? new Date(n.fechaPublicacion) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...noticiaRoutes]
}
