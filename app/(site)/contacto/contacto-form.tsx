"use client"

import { useState, useRef } from "react"

const contactInfo = [
  { icon: "📍", text: "Calle 9 No 2-41 B/Corazón de Jesús | La Llanada, Nariño - Colombia" },
  { icon: "📞", text: "+57 316-832-7056" },
  { icon: "✉", text: "codmilla.redes@gmail.com" },
  { icon: "🕐", text: "Lun–Vie 8:00–18:00  |  Sáb 9:00–14:00" },
]

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    color: "#E4405F",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    color: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

type Status = "idle" | "loading" | "success" | "error"

interface FormData {
  nombre: string
  email: string
  empresa: string
  mensaje: string
}

interface FieldErrors {
  nombre?: string
  email?: string
  mensaje?: string
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ContactoForm() {
  const [status, setStatus] = useState<Status>("idle")
  const [serverError, setServerError] = useState<string>("")
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    empresa: "",
    mensaje: "",
  })
  const formRef = useRef<HTMLFormElement>(null)

  function validate(): FieldErrors {
    const errors: FieldErrors = {}
    if (!form.nombre.trim() || form.nombre.trim().length < 2) {
      errors.nombre = "Ingresa tu nombre completo (mínimo 2 caracteres)."
    }
    if (!form.email || !isValidEmail(form.email)) {
      errors.email = "Ingresa un correo electrónico válido."
    }
    if (!form.mensaje.trim() || form.mensaje.trim().length < 10) {
      errors.mensaje = "El mensaje debe tener al menos 10 caracteres."
    }
    return errors
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    // Limpiar error del campo al escribir
    if (fieldErrors[name as keyof FieldErrors]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Validar campos
    const errors = validate()
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setStatus("loading")
    setServerError("")
    setFieldErrors({})

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setServerError(data.error ?? "Error inesperado. Intenta de nuevo.")
        setStatus("error")
        return
      }

      setStatus("success")
      setForm({ nombre: "", email: "", empresa: "", mensaje: "" })
    } catch {
      setServerError("Error de conexión. Verifica tu internet e intenta de nuevo.")
      setStatus("error")
    }
  }

  function handleReset() {
    setStatus("idle")
    setServerError("")
    setFieldErrors({})
  }

  return (
    <section className="bg-transparent py-16 md:py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          {/* Columna izquierda — info */}
          <div>
            <h2 className="text-2xl font-extrabold text-dark md:text-3xl">
              Información de <span className="text-gold">contacto</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Escríbenos o visítanos. Estaremos encantados de atenderte.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {contactInfo.map((info) => (
                <div key={info.text} className="flex items-center gap-3 text-sm text-text-muted">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-green/8 text-sm text-green">
                    {info.icon}
                  </div>
                  {info.text}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h3 className="mb-3 text-sm font-bold text-dark">Síguenos en redes sociales</h3>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex size-11 items-center justify-center rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-105"
                    style={{
                      color: link.color,
                      backgroundColor: `${link.color}15`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#fff"
                      e.currentTarget.style.backgroundColor = link.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = link.color
                      e.currentTarget.style.backgroundColor = `${link.color}15`
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Columna derecha — formulario */}
          <div className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md hover:shadow-green/4 md:p-7">

            {/* Estado: Éxito */}
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-green/10 text-green">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="size-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-extrabold text-dark">¡Mensaje enviado!</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-text-muted">
                  Hemos recibido tu consulta y te hemos enviado una confirmación a tu correo.
                  Te contactaremos a la brevedad.
                </p>
                <button
                  onClick={handleReset}
                  className="mt-6 cursor-pointer rounded-lg border border-green/30 px-5 py-2.5 text-sm font-semibold text-green transition-all hover:bg-green hover:text-white"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} noValidate>

                {/* Error del servidor */}
                {status === "error" && serverError && (
                  <div className="mb-4 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 size-4 shrink-0 text-red-500">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    <p className="text-sm text-red-700">{serverError}</p>
                  </div>
                )}

                {/* Nombre */}
                <div className="mb-3">
                  <input
                    id="contacto-nombre"
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Nombre completo *"
                    required
                    disabled={status === "loading"}
                    aria-invalid={!!fieldErrors.nombre}
                    aria-describedby={fieldErrors.nombre ? "error-nombre" : undefined}
                    className={`w-full rounded-lg border bg-cream px-4 py-3 text-sm text-dark outline-none transition-all placeholder:text-text-muted/50 focus:ring-2 disabled:opacity-60 ${
                      fieldErrors.nombre
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-border focus:border-green focus:ring-green/10"
                    }`}
                  />
                  {fieldErrors.nombre && (
                    <p id="error-nombre" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 shrink-0">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4V7h2v6h-2z" clipRule="evenodd" />
                      </svg>
                      {fieldErrors.nombre}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-3">
                  <input
                    id="contacto-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico *"
                    required
                    disabled={status === "loading"}
                    aria-invalid={!!fieldErrors.email}
                    aria-describedby={fieldErrors.email ? "error-email" : undefined}
                    className={`w-full rounded-lg border bg-cream px-4 py-3 text-sm text-dark outline-none transition-all placeholder:text-text-muted/50 focus:ring-2 disabled:opacity-60 ${
                      fieldErrors.email
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-border focus:border-green focus:ring-green/10"
                    }`}
                  />
                  {fieldErrors.email && (
                    <p id="error-email" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 shrink-0">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4V7h2v6h-2z" clipRule="evenodd" />
                      </svg>
                      {fieldErrors.email}
                    </p>
                  )}
                </div>

                {/* Empresa */}
                <div className="mb-3">
                  <input
                    id="contacto-empresa"
                    type="text"
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Empresa (opcional)"
                    disabled={status === "loading"}
                    className="w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm text-dark outline-none transition-all placeholder:text-text-muted/50 focus:border-green focus:ring-2 focus:ring-green/10 disabled:opacity-60"
                  />
                </div>

                {/* Mensaje */}
                <div className="mb-4">
                  <textarea
                    id="contacto-mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="Cuéntanos sobre tu proyecto... *"
                    rows={4}
                    required
                    disabled={status === "loading"}
                    aria-invalid={!!fieldErrors.mensaje}
                    aria-describedby={fieldErrors.mensaje ? "error-mensaje" : undefined}
                    className={`w-full resize-y rounded-lg border bg-cream px-4 py-3 text-sm text-dark outline-none transition-all placeholder:text-text-muted/50 focus:ring-2 disabled:opacity-60 ${
                      fieldErrors.mensaje
                        ? "border-red-400 focus:border-red-400 focus:ring-red-100"
                        : "border-border focus:border-green focus:ring-green/10"
                    }`}
                  />
                  {fieldErrors.mensaje && (
                    <p id="error-mensaje" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="size-3 shrink-0">
                        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-2h2v2h-2zm0-4V7h2v6h-2z" clipRule="evenodd" />
                      </svg>
                      {fieldErrors.mensaje}
                    </p>
                  )}
                </div>

                {/* Botón enviar */}
                <button
                  id="contacto-submit"
                  type="submit"
                  disabled={status === "loading"}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-green px-4 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-gold hover:shadow-lg hover:shadow-gold/20 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-green disabled:hover:shadow-none"
                >
                  {status === "loading" ? (
                    <>
                      <svg
                        className="size-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                        <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
                      </svg>
                      Enviando…
                    </>
                  ) : (
                    <>
                      Enviar mensaje &rarr;
                    </>
                  )}
                </button>

                <p className="mt-3 text-center text-xs text-text-muted/60">
                  * Campos requeridos. Tu información es confidencial.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
