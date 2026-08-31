import type { MetadataRoute } from "next"

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.coodmilla.com").replace(/\/+$/, "")

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/trabajadores.html"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
