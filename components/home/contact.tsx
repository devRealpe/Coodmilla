"use client"

import { Reveal } from "@/components/shared/reveal"
import { MapPin, Mail, Clock, ArrowRight, Lightbulb } from "lucide-react"

const EMAIL = "contactenoscoodmila@gmail.com"
const FACEBOOK_URL = "https://www.facebook.com/share/1CBpJ4NuyW/"
const INSTAGRAM_URL = "https://www.instagram.com/coodmillaoficial?igsi=MXd2eTNoNmczazg4Zw=="

const hours = [
  { days: "Lunes, miércoles y viernes", time: "8:00–12:00 · 14:00–18:00" },
  { days: "Martes y jueves", time: "8:00–12:00 · 14:00–19:00" },
  { days: "Sábado", time: "Sin atención" },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-transparent pt-24 pb-20 md:pt-32 md:pb-24">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
          <Reveal>
            <div>
              <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-gold w-max shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
                </span>
                Contacto Directo
              </span>
              <h2
                className="text-4xl font-extrabold leading-[1.1] text-foreground md:text-5xl lg:text-6xl mt-4 tracking-tight"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Hablemos de tu <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-yellow-600 dark:to-yellow-200 drop-shadow-sm">
                  operación
                </span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground font-medium dark:font-light">
                Nuestro equipo está listo para acompañarte. Escríbenos por correo o síguenos en nuestras redes oficiales.
              </p>

              <div className="mt-12 flex flex-col gap-6">
                <div className="group flex items-start gap-5 text-base text-foreground/80 dark:text-white/80 transition-colors hover:text-foreground dark:hover:text-white">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-white/5 dark:to-white/10 border border-black/5 dark:border-white/10 text-gold shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <MapPin className="size-6 drop-shadow-sm" strokeWidth={1.5} />
                  </div>
                  <span className="font-medium tracking-wide leading-snug pt-3">
                    Calle 9 No 2-41 B/Corazón de Jesús | La Llanada, Nariño - Colombia
                  </span>
                </div>

                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-5 text-base text-foreground/80 dark:text-white/80 transition-colors hover:text-foreground dark:hover:text-white"
                >
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-white/5 dark:to-white/10 border border-black/5 dark:border-white/10 text-gold shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <Mail className="size-6 drop-shadow-sm" strokeWidth={1.5} />
                  </div>
                  <span className="font-medium tracking-wide leading-snug break-all">{EMAIL}</span>
                </a>

                <div className="group flex items-start gap-5 text-base text-foreground/80 dark:text-white/80">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-white/5 dark:to-white/10 border border-black/5 dark:border-white/10 text-gold shadow-md">
                    <Clock className="size-6 drop-shadow-sm" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 pt-1 space-y-3">
                    <p className="font-semibold text-foreground tracking-wide">Horarios de atención</p>
                    <ul className="space-y-2.5">
                      {hours.map((h) => (
                        <li
                          key={h.days}
                          className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 sm:gap-4 text-sm leading-snug"
                        >
                          <span className="font-medium text-foreground/80 dark:text-white/80">{h.days}</span>
                          <span className="text-muted-foreground sm:text-right tabular-nums">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Asesorías */}
              <div className="mt-10 relative overflow-hidden rounded-[2rem] border border-green-500/25 bg-gradient-to-br from-green-500/10 to-transparent p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-green-500/15 text-green-700 dark:text-green-400">
                    <Lightbulb className="size-6" strokeWidth={1.5} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-xl font-extrabold text-foreground tracking-wide mb-2"
                      style={{ fontFamily: "var(--font-montserrat)" }}
                    >
                      Asesorías
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground font-medium dark:font-light mb-5">
                      Ofrecemos asesoría técnica, ambiental y de gestión a asociados y operadores mineros para un
                      aprovechamiento responsable de los recursos y una operación alineada con la normativa vigente.
                    </p>
                    <a
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent("Solicitud de asesoría — COODMILLA")}`}
                      className="inline-flex items-center gap-2 rounded-full bg-green-700 dark:bg-green-600 px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02] hover:bg-green-800 dark:hover:bg-green-500"
                    >
                      Solicitar asesoría
                      <ArrowRight className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-6">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[2.5rem] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 p-6 sm:p-8 flex items-center gap-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(24,119,242,0.25)] hover:border-[#1877F2]/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1877F2]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <div className="relative flex size-20 shrink-0 items-center justify-center rounded-3xl bg-[#1877F2]/10 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors duration-500 shadow-inner">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-10 drop-shadow-md">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3
                    className="text-2xl font-extrabold text-foreground mb-1 tracking-wide"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Facebook
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium dark:font-light">
                    Síguenos y entérate de las últimas noticias.
                  </p>
                </div>
                <div className="relative z-10 size-12 shrink-0 flex items-center justify-center rounded-full bg-foreground/5 dark:bg-white/5 text-foreground/50 dark:text-white/50 group-hover:bg-[#1877F2] group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
                  <ArrowRight className="size-6" />
                </div>
              </a>

              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-[2.5rem] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 p-6 sm:p-8 flex items-center gap-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(228,64,95,0.25)] hover:border-[#E4405F]/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E4405F]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <div className="relative flex size-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] opacity-90 text-white transition-all duration-500 shadow-inner group-hover:scale-105 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-10 drop-shadow-md">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3
                    className="text-2xl font-extrabold text-foreground mb-1 tracking-wide"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Instagram
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium dark:font-light">
                    Descubre nuestra cultura en imágenes.
                  </p>
                </div>
                <div className="relative z-10 size-12 shrink-0 flex items-center justify-center rounded-full bg-foreground/5 dark:bg-white/5 text-foreground/50 dark:text-white/50 group-hover:bg-[#E4405F] group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
                  <ArrowRight className="size-6" />
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 p-6 sm:p-8 flex items-center gap-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(232,151,33,0.25)] hover:border-gold/50"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <div className="relative flex size-20 shrink-0 items-center justify-center rounded-3xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-500 shadow-inner">
                  <Mail className="size-10 drop-shadow-md" strokeWidth={1.5} />
                </div>
                <div className="relative z-10 flex-1 min-w-0">
                  <h3
                    className="text-2xl font-extrabold text-foreground mb-1 tracking-wide"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    Correo
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium dark:font-light break-all">{EMAIL}</p>
                </div>
                <div className="relative z-10 size-12 shrink-0 flex items-center justify-center rounded-full bg-foreground/5 dark:bg-white/5 text-foreground/50 dark:text-white/50 group-hover:bg-gold group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
                  <ArrowRight className="size-6" />
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
