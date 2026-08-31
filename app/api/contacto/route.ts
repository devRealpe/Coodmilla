import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/** Escapa HTML para evitar XSS en plantillas de correo. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function truncate(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) : value
}

/** Rate limit simple en memoria (por IP). Suficiente para un sitio informativo. */
const rateBucket = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 15 * 60 * 1000

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateBucket.get(ip)
  if (!entry || now > entry.resetAt) {
    rateBucket.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS })
    return false
  }
  if (entry.count >= RATE_LIMIT) return true
  entry.count += 1
  return false
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown"

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Demasiados mensajes. Intenta de nuevo más tarde." },
        { status: 429 }
      )
    }

    const body = await req.json()
    const { nombre, email, empresa, mensaje, website } = body

    // Honeypot: bots rellenan campos ocultos
    if (typeof website === "string" && website.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Mensaje enviado correctamente." },
        { status: 200 }
      )
    }

    if (!nombre || typeof nombre !== "string" || nombre.trim().length < 2) {
      return NextResponse.json(
        { error: "El nombre es requerido (mínimo 2 caracteres)." },
        { status: 400 }
      )
    }
    if (nombre.trim().length > 120) {
      return NextResponse.json({ error: "Nombre demasiado largo." }, { status: 400 })
    }
    if (!email || !isValidEmail(email) || email.length > 200) {
      return NextResponse.json(
        { error: "Correo electrónico inválido." },
        { status: 400 }
      )
    }
    if (!mensaje || typeof mensaje !== "string" || mensaje.trim().length < 10) {
      return NextResponse.json(
        { error: "El mensaje es requerido (mínimo 10 caracteres)." },
        { status: 400 }
      )
    }
    if (mensaje.trim().length > 5000) {
      return NextResponse.json({ error: "Mensaje demasiado largo." }, { status: 400 })
    }
    if (empresa != null && typeof empresa === "string" && empresa.length > 200) {
      return NextResponse.json({ error: "Empresa demasiado larga." }, { status: 400 })
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Faltan variables de entorno SMTP")
      return NextResponse.json(
        { error: "Error de configuración del servidor. Contacta al administrador." },
        { status: 500 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Preferir verificación de certificado; solo desactivar si SMTP_TLS_INSECURE=true
        rejectUnauthorized: process.env.SMTP_TLS_INSECURE !== "true",
      },
    })

    const destinatario = process.env.CONTACT_EMAIL ?? process.env.SMTP_USER

    const safeNombre = escapeHtml(truncate(nombre.trim(), 120))
    const safeEmail = escapeHtml(truncate(email.trim(), 200))
    const safeEmpresa =
      empresa && typeof empresa === "string" && empresa.trim()
        ? escapeHtml(truncate(empresa.trim(), 200))
        : ""
    const safeMensaje = escapeHtml(truncate(mensaje.trim(), 5000)).replace(/\n/g, "<br>")

    const mailToTeam = {
      from: `"Formulario Coodmilla" <${process.env.SMTP_USER}>`,
      to: destinatario,
      replyTo: email.trim(),
      subject: `Nuevo contacto: ${nombre.trim().slice(0, 80)}${empresa ? ` — ${String(empresa).trim().slice(0, 40)}` : ""}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head><meta charset="UTF-8"></head>
        <body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
            <tr><td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">
                <tr>
                  <td style="background:linear-gradient(135deg,#1a472a 0%,#2d6a4f 100%);padding:32px 40px;text-align:center;">
                    <h1 style="margin:0;color:#d4af37;font-size:24px;font-weight:800;">COODMILLA</h1>
                    <p style="margin:8px 0 0;color:#ffffff99;font-size:13px;text-transform:uppercase;">Nuevo Mensaje de Contacto</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:40px;">
                    <p style="margin:0 0 24px;color:#374151;font-size:15px;">Se ha recibido un nuevo mensaje a través del formulario de contacto.</p>
                    <p style="margin:0 0 8px;font-size:11px;color:#9ca3af;text-transform:uppercase;">Nombre</p>
                    <p style="margin:0 0 16px;font-size:16px;color:#111827;font-weight:600;">${safeNombre}</p>
                    <p style="margin:0 0 8px;font-size:11px;color:#9ca3af;text-transform:uppercase;">Correo</p>
                    <p style="margin:0 0 16px;font-size:16px;"><a href="mailto:${safeEmail}" style="color:#1a472a;">${safeEmail}</a></p>
                    ${safeEmpresa ? `<p style="margin:0 0 8px;font-size:11px;color:#9ca3af;text-transform:uppercase;">Empresa</p><p style="margin:0 0 16px;font-size:16px;color:#111827;font-weight:600;">${safeEmpresa}</p>` : ""}
                    <p style="margin:0 0 8px;font-size:11px;color:#9ca3af;text-transform:uppercase;">Mensaje</p>
                    <p style="margin:0;font-size:15px;color:#374151;line-height:1.7;">${safeMensaje}</p>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    }

    const mailToUser = {
      from: `"Coodmilla" <${process.env.SMTP_USER}>`,
      to: email.trim(),
      subject: "Recibimos tu mensaje — Coodmilla",
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head><meta charset="UTF-8"></head>
        <body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 0;">
            <tr><td align="center">
              <table width="600" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;">
                <tr>
                  <td style="background:linear-gradient(135deg,#1a472a 0%,#2d6a4f 100%);padding:40px;text-align:center;">
                    <h1 style="margin:0;color:#d4af37;font-size:28px;font-weight:800;">COODMILLA</h1>
                    <p style="margin:10px 0 0;color:#ffffff;font-size:15px;">¡Gracias por contactarnos, ${safeNombre}!</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:40px;">
                    <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.7;">
                      Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad posible.
                    </p>
                    <p style="margin:0 0 24px;color:#374151;font-size:15px;">
                      <strong>Lun–Vie 8:00–18:00  |  Sáb 9:00–14:00</strong>
                    </p>
                    <div style="background:#f9fafb;border-radius:12px;padding:24px;">
                      <p style="margin:0 0 12px;font-size:13px;color:#6b7280;text-transform:uppercase;">Tu mensaje:</p>
                      <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;font-style:italic;">"${safeMensaje}"</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td></tr>
          </table>
        </body>
        </html>
      `,
    }

    await Promise.all([
      transporter.sendMail(mailToTeam),
      transporter.sendMail(mailToUser),
    ])

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente." },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error enviando email:", error instanceof Error ? error.message : "unknown")
    return NextResponse.json(
      { error: "Hubo un problema al enviar el mensaje. Por favor intenta de nuevo." },
      { status: 500 }
    )
  }
}
