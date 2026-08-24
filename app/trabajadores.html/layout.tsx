import type { ReactNode } from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Trabajadores — Coodmilla",
  description:
    "Consulta pública de trabajadores activos de la Cooperativa del Distrito Minero de La Llanada — Coodmilla LTDA.",
  robots: { index: false, follow: false }, // No indexar — acceso solo via QR
}

/**
 * Layout mínimo para /trabajadores.html
 *
 * No necesita <html>/<body>: el root layout (app/layout.tsx) ya los provee.
 * No incluye Navbar ni Footer — experiencia QR limpia en móvil.
 * Al estar fuera del grupo (site), hereda SOLO el root layout, no la barra de navegación.
 */
export default function TrabajadoresLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
