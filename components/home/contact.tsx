"use client"

import { Reveal } from "@/components/shared/reveal"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"

const contactInfo = [
  { icon: MapPin, text: "Calle 9 No 2-41 B/Corazón de Jesús | La Llanada, Nariño - Colombia" },
  { icon: Phone, text: "+57 316-832-7056" },
  { icon: Mail, text: "codmilla.redes@gmail.com" },
  { icon: Clock, text: "Lun–Vie 8:00–18:00  |  Sáb 9:00–14:00" },
]

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-transparent pt-24 pb-20 md:pt-32 md:pb-24">
      {/* Luz de fondo suave */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal>
            <div>
              <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-gold w-max shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
                </span>
                Contacto Directo
              </span>
              <h2 className="text-4xl font-extrabold leading-[1.1] text-foreground md:text-5xl lg:text-6xl mt-4 tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Hablemos de tu <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-yellow-600 dark:to-yellow-200 drop-shadow-sm">operación</span>
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-muted-foreground font-medium dark:font-light">
                Nuestro equipo de expertos está listo para acompañarte. Escríbenos directamente a través de nuestros canales oficiales y te asesoraremos de inmediato.
              </p>

              <div className="mt-12 flex flex-col gap-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="group flex items-center gap-5 text-base text-foreground/80 dark:text-white/80 transition-colors hover:text-foreground dark:hover:text-white">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-white to-gray-50 dark:from-white/5 dark:to-white/10 border border-black/5 dark:border-white/10 text-gold shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-gold/20">
                      <info.icon className="size-6 drop-shadow-sm" strokeWidth={1.5} />
                    </div>
                    <span className="font-medium tracking-wide leading-snug">{info.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-6">
              
              {/* WhatsApp Card */}
              <a href="https://wa.me/573168327056" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-[2.5rem] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 p-6 sm:p-8 flex items-center gap-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(37,211,102,0.25)] hover:border-[#25D366]/50">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#25D366]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <div className="relative flex size-20 shrink-0 items-center justify-center rounded-3xl bg-[#25D366]/10 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-500 shadow-inner">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-10 drop-shadow-md">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-extrabold text-foreground mb-1 tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>WhatsApp</h3>
                  <p className="text-sm text-muted-foreground font-medium dark:font-light">Chatea al instante con un asesor.</p>
                </div>
                <div className="relative z-10 size-12 shrink-0 flex items-center justify-center rounded-full bg-foreground/5 dark:bg-white/5 text-foreground/50 dark:text-white/50 group-hover:bg-[#25D366] group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
                  <ArrowRight className="size-6" />
                </div>
              </a>

              {/* Facebook Card */}
              <a href="https://www.facebook.com/profile.php?id=61570051919985" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-[2.5rem] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 p-6 sm:p-8 flex items-center gap-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(24,119,242,0.25)] hover:border-[#1877F2]/50">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1877F2]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <div className="relative flex size-20 shrink-0 items-center justify-center rounded-3xl bg-[#1877F2]/10 text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-colors duration-500 shadow-inner">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-10 drop-shadow-md">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-extrabold text-foreground mb-1 tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>Facebook</h3>
                  <p className="text-sm text-muted-foreground font-medium dark:font-light">Síguenos y entérate de las últimas noticias.</p>
                </div>
                <div className="relative z-10 size-12 shrink-0 flex items-center justify-center rounded-full bg-foreground/5 dark:bg-white/5 text-foreground/50 dark:text-white/50 group-hover:bg-[#1877F2] group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
                  <ArrowRight className="size-6" />
                </div>
              </a>

              {/* Instagram Card */}
              <a href="https://www.instagram.com/codmillaltda/" target="_blank" rel="noopener noreferrer" className="group relative overflow-hidden rounded-[2.5rem] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 p-6 sm:p-8 flex items-center gap-6 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(228,64,95,0.25)] hover:border-[#E4405F]/50">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E4405F]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                <div className="relative flex size-20 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] opacity-90 text-white transition-all duration-500 shadow-inner group-hover:scale-105 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-10 drop-shadow-md">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div className="relative z-10 flex-1">
                  <h3 className="text-2xl font-extrabold text-foreground mb-1 tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>Instagram</h3>
                  <p className="text-sm text-muted-foreground font-medium dark:font-light">Descubre nuestra cultura en imágenes.</p>
                </div>
                <div className="relative z-10 size-12 shrink-0 flex items-center justify-center rounded-full bg-foreground/5 dark:bg-white/5 text-foreground/50 dark:text-white/50 group-hover:bg-[#E4405F] group-hover:text-white group-hover:translate-x-2 transition-all duration-500">
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
