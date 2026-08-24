/**
 * Página de consulta pública de trabajadores — acceso via código QR.
 *
 * URL compatible con los QR existentes: /trabajadores.html#ns79
 * El fragmento #ns79 es ignorado por el router (no llega al servidor).
 *
 * Esta página está OCULTA del menú de navegación principal —
 * no hay ningún enlace que lleve aquí desde el sitio público.
 */

import { getTrabajadoresPublicos, resolveAssetUrl } from "@/lib/api"
import { TrabajadoresQR } from "@/components/trabajadores/trabajadores-qr"

export const dynamic = "force-dynamic" // Siempre datos frescos — sin caché

export default async function TrabajadoresPage() {
  // Fetch en servidor — los trabajadores llegan al cliente ya resueltos
  const trabajadores = await getTrabajadoresPublicos()

  // La URL base del backend se pasa al cliente para resolver las fotos
  const baseUrl = (process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080").replace(/\/+$/, "")

  return (
    <TrabajadoresQR
      trabajadores={trabajadores}
      baseUrl={baseUrl}
    />
  )
}
