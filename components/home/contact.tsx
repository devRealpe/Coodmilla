"use client"

import type { FormEvent } from "react"
import { Reveal } from "@/components/shared/reveal"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Clock, SendHorizontal } from "lucide-react"

const contactInfo = [
  { icon: MapPin, text: "Blvd. Minero 1423, Bogotá, Colombia" },
  { icon: Phone, text: "+57 (601) 123 4567" },
  { icon: Mail, text: "contacto@coodmilla.co" },
  { icon: Clock, text: "Lun–Vie 8:00–18:00  |  Sáb 9:00–14:00" },
]

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    color: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    color: "#E4405F",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
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
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "#",
    color: "#ffffff",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5">
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
    <section id="contact" className="relative overflow-hidden bg-dark py-24 md:py-32">
      {/* Dark premium background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-[#081f11] to-dark pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal>
            <div>
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold w-max">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                Contacto
              </span>
              <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl mt-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">proyecto</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 font-light">
                Nuestro equipo de expertos está listo para acompañarte y asesorarte en cada etapa de tu operación minera.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="group flex items-center gap-4 text-base text-white/80 transition-colors hover:text-white">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gold shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:bg-gold/10 group-hover:border-gold/30">
                      <info.icon className="size-5" strokeWidth={1.5} />
                    </div>
                    <span className="font-medium tracking-wide">{info.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="flex size-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/50"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = link.color
                      e.currentTarget.style.borderColor = link.color
                      if(link.label === "X") e.currentTarget.style.color = "#000"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = ""
                      e.currentTarget.style.borderColor = ""
                      e.currentTarget.style.color = ""
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-green/30 to-gold/30 blur-2xl opacity-50" />
              <form
                onSubmit={handleSubmit}
                className="relative rounded-3xl border border-white/10 bg-[#0d1b12]/80 backdrop-blur-xl p-8 shadow-2xl md:p-10"
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>Envíanos un mensaje</h3>
                  <p className="text-sm text-white/50 mt-2">Completa el formulario y nos pondremos en contacto contigo.</p>
                </div>
                
                <div className="space-y-5">
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Nombre completo" 
                      required 
                      className="h-14 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-gold/50 focus-visible:border-gold/50"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Correo electrónico" 
                      required 
                      className="h-14 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-gold/50 focus-visible:border-gold/50"
                    />
                  </div>
                  <div>
                    <Input 
                      type="text" 
                      placeholder="Empresa (Opcional)" 
                      className="h-14 rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-gold/50 focus-visible:border-gold/50"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Cuéntanos sobre tu proyecto o consulta..." 
                      className="min-h-[120px] resize-y rounded-xl border-white/10 bg-white/5 text-white placeholder:text-white/30 focus-visible:ring-gold/50 focus-visible:border-gold/50 p-4"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="group h-14 w-full rounded-xl bg-gradient-to-r from-gold to-yellow-500 text-dark font-extrabold text-base transition-all duration-500 hover:shadow-[0_0_30px_rgba(232,151,33,0.4)] hover:scale-[1.02]"
                  >
                    Enviar mensaje 
                    <SendHorizontal className="ml-2 size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
