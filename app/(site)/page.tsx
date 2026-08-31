import { Sidebar } from "@/components/home/sidebar"
import { Hero } from "@/components/home/hero"
import { About } from "@/components/home/about"
import { Services } from "@/components/home/services"
import { Certificates } from "@/components/home/certificates"

import { News } from "@/components/home/news"
import { getCarrusel, resolveAssetUrl } from "@/lib/api"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    absolute: "Coodmilla — Minería Responsable",
  },
  alternates: { canonical: "/" },
}

// Server Component: pre-fetcha el carrusel para pasarlo al Hero (Client Component).
// Las URLs de imagen se resuelven a absolutas aquí (server-side) para que el
// Client Component las reciba listas para usar con <Image />.
export default async function HomePage() {
  const carruselRaw = await getCarrusel()

  // Resolver URLs absolutas server-side
  const carruselItems = carruselRaw.map((item) => ({
    ...item,
    imagenUrl: resolveAssetUrl(item.imagenUrl),
  }))

  return (
    <>
      <Sidebar />
      <Hero carruselItems={carruselItems} />
      <About />
      <Services />
      <Certificates />

      <News />
    </>
  )
}

