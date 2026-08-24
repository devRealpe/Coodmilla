import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Validación básica de email
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, email, empresa, mensaje } = body

    // Validaciones del servidor
    if (!nombre || typeof nombre !== "string" || nombre.trim().length < 2) {
      return NextResponse.json(
        { error: "El nombre es requerido (mínimo 2 caracteres)." },
        { status: 400 }
      )
    }
    if (!email || !isValidEmail(email)) {
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

    // Verificar variables de entorno
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Faltan variables de entorno SMTP")
      return NextResponse.json(
        { error: "Error de configuración del servidor. Contacta al administrador." },
        { status: 500 }
      )
    }

    // Crear transporter de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Brevo redirige a servidores sendinblue.com internamente;
      // desactivamos la verificación estricta del cert para evitar ESOCKET
      tls: {
        rejectUnauthorized: false,
      },
    })

    const destinatario = process.env.CONTACT_EMAIL ?? process.env.SMTP_USER

    // Email para el equipo Coodmilla
    const mailToTeam = {
      from: `"Formulario Coodmilla" <${process.env.SMTP_USER}>`,
      to: destinatario,
      replyTo: email,
      subject: `Nuevo contacto: ${nombre.trim()}${empresa ? ` — ${empresa.trim()}` : ""}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#1a472a 0%,#2d6a4f 100%);padding:32px 40px;text-align:center;">
                      <h1 style="margin:0;color:#d4af37;font-size:24px;font-weight:800;letter-spacing:1px;">COODMILLA</h1>
                      <p style="margin:8px 0 0;color:#ffffff99;font-size:13px;letter-spacing:2px;text-transform:uppercase;">Nuevo Mensaje de Contacto</p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:40px;">
                      <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.6;">
                        Se ha recibido un nuevo mensaje a través del formulario de contacto del sitio web.
                      </p>

                      <!-- Datos -->
                      <table width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding:12px 16px;background:#f9fafb;border-radius:10px;margin-bottom:8px;">
                            <p style="margin:0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Nombre</p>
                            <p style="margin:4px 0 0;font-size:16px;color:#111827;font-weight:600;">${nombre.trim()}</p>
                          </td>
                        </tr>
                        <tr><td style="height:8px;"></td></tr>
                        <tr>
                          <td style="padding:12px 16px;background:#f9fafb;border-radius:10px;">
                            <p style="margin:0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Correo Electrónico</p>
                            <p style="margin:4px 0 0;font-size:16px;color:#1a472a;font-weight:600;">
                              <a href="mailto:${email}" style="color:#1a472a;text-decoration:none;">${email}</a>
                            </p>
                          </td>
                        </tr>
                        ${empresa ? `
                        <tr><td style="height:8px;"></td></tr>
                        <tr>
                          <td style="padding:12px 16px;background:#f9fafb;border-radius:10px;">
                            <p style="margin:0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Empresa</p>
                            <p style="margin:4px 0 0;font-size:16px;color:#111827;font-weight:600;">${empresa.trim()}</p>
                          </td>
                        </tr>` : ""}
                        <tr><td style="height:8px;"></td></tr>
                        <tr>
                          <td style="padding:12px 16px;background:#fffbeb;border-left:4px solid #d4af37;border-radius:0 10px 10px 0;">
                            <p style="margin:0;font-size:11px;color:#9ca3af;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Mensaje</p>
                            <p style="margin:8px 0 0;font-size:15px;color:#374151;line-height:1.7;white-space:pre-wrap;">${mensaje.trim()}</p>
                          </td>
                        </tr>
                      </table>

                      <!-- CTA -->
                      <div style="margin-top:32px;text-align:center;">
                        <a href="mailto:${email}?subject=Re: Tu consulta en Coodmilla" 
                           style="display:inline-block;background:linear-gradient(135deg,#1a472a,#2d6a4f);color:#ffffff;padding:14px 32px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600;letter-spacing:0.5px;">
                          Responder a ${nombre.trim()} →
                        </a>
                      </div>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#f9fafb;padding:20px 40px;text-align:center;border-top:1px solid #e5e7eb;">
                      <p style="margin:0;font-size:12px;color:#9ca3af;">
                        Mensaje recibido el ${new Date().toLocaleString("es-CO", { 
                          timeZone: "America/Bogota",
                          dateStyle: "full",
                          timeStyle: "short"
                        })} (hora Colombia)
                      </p>
                      <p style="margin:8px 0 0;font-size:12px;color:#d4af37;font-weight:600;">Coodmilla — Minería e Ingeniería</p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    }

    // Email de confirmación para el usuario
    const mailToUser = {
      from: `"Coodmilla" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Recibimos tu mensaje — Coodmilla",
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin:0;padding:0;background:#f4f4f5;font-family:'Segoe UI',Arial,sans-serif;">
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:32px 0;">
            <tr>
              <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#1a472a 0%,#2d6a4f 100%);padding:40px;text-align:center;">
                      <h1 style="margin:0;color:#d4af37;font-size:28px;font-weight:800;letter-spacing:1px;">COODMILLA</h1>
                      <p style="margin:10px 0 0;color:#ffffff;font-size:15px;">¡Gracias por contactarnos, ${nombre.trim()}!</p>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:40px;">
                      <p style="margin:0 0 16px;color:#374151;font-size:15px;line-height:1.7;">
                        Hemos recibido tu mensaje y nos pondremos en contacto contigo a la brevedad posible.
                        Nuestro equipo revisará tu consulta durante nuestro horario de atención:
                      </p>
                      <p style="margin:0 0 24px;color:#374151;font-size:15px;line-height:1.7;">
                        📅 <strong>Lun–Vie 8:00–18:00  |  Sáb 9:00–14:00</strong>
                      </p>

                      <!-- Resumen del mensaje -->
                      <div style="background:#f9fafb;border-radius:12px;padding:24px;margin-bottom:24px;">
                        <p style="margin:0 0 12px;font-size:13px;color:#6b7280;text-transform:uppercase;letter-spacing:1px;font-weight:600;">Tu mensaje:</p>
                        <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;font-style:italic;white-space:pre-wrap;">"${mensaje.trim()}"</p>
                      </div>

                      <p style="margin:0;color:#374151;font-size:14px;line-height:1.7;">
                        Si tienes alguna urgencia, puedes contactarnos directamente a 
                        <a href="mailto:codmilla.redes@gmail.com" style="color:#1a472a;font-weight:600;">codmilla.redes@gmail.com</a>
                        o llamarnos al <strong>+57 316-832-7056</strong>.
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#1a472a;padding:24px 40px;text-align:center;">
                      <p style="margin:0;font-size:13px;color:#ffffff80;">
                        © ${new Date().getFullYear()} Coodmilla — Minería e Ingeniería · La Llanada, Nariño - Colombia
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    }

    // Enviar ambos emails en paralelo
    await Promise.all([
      transporter.sendMail(mailToTeam),
      transporter.sendMail(mailToUser),
    ])

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente." },
      { status: 200 }
    )
  } catch (error) {
    const err = error as NodeJS.ErrnoException & { code?: string; response?: string }
    console.error("Error enviando email:", err)

    // En desarrollo mostramos el error real para facilitar el diagnóstico
    const isDev = process.env.NODE_ENV === "development"
    const detalle = isDev
      ? `[${err.code ?? "ERROR"}] ${err.message ?? String(err)}`
      : null

    return NextResponse.json(
      {
        error: "Hubo un problema al enviar el mensaje. Por favor intenta de nuevo.",
        ...(detalle && { detalle }),
      },
      { status: 500 }
    )
  }
}
