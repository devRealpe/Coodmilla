/**
 * Página de consulta pública de trabajadores — acceso via código QR.
 *
 * URL compatible con los QR existentes: /trabajadores.html#ns79
 * El fragmento #ns79 es ignorado por el router (no llega al servidor).
 *
 * Esta página está OCULTA del menú de navegación principal —
 * no hay ningún enlace que lleve aquí desde el sitio público.
 */

import { getTrabajadoresPublicos } from "@/lib/api"
import { TrabajadoresQR } from "@/components/trabajadores/trabajadores-qr"

export const dynamic = "force-dynamic" // Siempre datos frescos — sin caché

export default async function TrabajadoresPage() {
  const trabajadores = await getTrabajadoresPublicos()

  return <TrabajadoresQR trabajadores={trabajadores} />
}
