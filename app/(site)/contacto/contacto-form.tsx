"use client"

import type { FormEvent } from "react"

const contactInfo = [
  { icon: "📍", text: "Blvd. Minero 1423, Bogotá, Colombia" },
  { icon: "📞", text: "+57 (601) 123 4567" },
  { icon: "✉", text: "contacto@coodmilla.co" },
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

export function ContactoForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert("Gracias por contactarnos. Te responderemos a la brevedad.")
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section className="bg-cream py-16 md:py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
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

          <div className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md hover:shadow-green/4 md:p-7">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  required
                  className="w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm text-dark outline-none transition-all placeholder:text-text-muted/50 focus:border-green focus:ring-2 focus:ring-green/10"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  required
                  className="w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm text-dark outline-none transition-all placeholder:text-text-muted/50 focus:border-green focus:ring-2 focus:ring-green/10"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  placeholder="Empresa"
                  className="w-full rounded-lg border border-border bg-cream px-4 py-3 text-sm text-dark outline-none transition-all placeholder:text-text-muted/50 focus:border-green focus:ring-2 focus:ring-green/10"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                  className="w-full resize-y rounded-lg border border-border bg-cream px-4 py-3 text-sm text-dark outline-none transition-all placeholder:text-text-muted/50 focus:border-green focus:ring-2 focus:ring-green/10"
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-lg bg-green px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-gold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20"
              >
                Enviar mensaje &rarr;
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
