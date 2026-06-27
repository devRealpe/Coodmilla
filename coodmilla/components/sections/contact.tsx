"use client"

import type { FormEvent } from "react"
import { Reveal } from "@/components/reveal"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

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
    hoverBg: "hover:bg-[#1877F2]",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    hoverBg: "hover:bg-[#E4405F]",
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
    hoverBg: "hover:bg-[#0A66C2]",
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
    hoverBg: "hover:bg-black",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export function Contact() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    alert("Gracias por contactarnos. Te responderemos a la brevedad.")
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="bg-cream py-16 md:py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:gap-10">
          <Reveal>
            <div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-green">
                Contacto
              </span>
              <h2 className="text-3xl font-extrabold leading-tight text-dark md:text-4xl">
                Hablemos de tu <span className="text-gold">proyecto</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-text-muted md:text-base">
                Estamos listos para acompañarte en cada etapa de tu operación minera.
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

              <div className="mt-6 flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className={`flex size-11 items-center justify-center rounded-lg bg-green/8 text-green transition-all duration-350 ${link.hoverBg} hover:text-white hover:-translate-y-1 hover:scale-105`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md hover:shadow-green/4 md:p-7"
            >
              <div className="mb-3">
                <Input type="text" placeholder="Nombre completo" required />
              </div>
              <div className="mb-3">
                <Input type="email" placeholder="Correo electrónico" required />
              </div>
              <div className="mb-3">
                <Input type="text" placeholder="Empresa" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Cuéntanos sobre tu proyecto..." />
              </div>
              <Button type="submit" className="w-full bg-green text-white hover:bg-gold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20 transition-all cursor-pointer">
                Enviar mensaje &rarr;
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
