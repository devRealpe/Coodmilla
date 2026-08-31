import type { Metadata } from "next"
import { Contact } from "@/components/home/contact"

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctanos en La Llanada, Nariño. contactenoscoodmila@gmail.com",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto — Coodmilla",
    description: "Escríbenos o visítanos. Estaremos encantados de atenderte.",
  },
}

export default function ContactoPage() {
  return (
    <>
      <Contact />
      <section className="relative overflow-hidden bg-transparent py-20 border-t border-foreground/5 dark:border-white/5">
        <div className="container relative z-10 mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
            
            {/* Vacantes */}
            <div className="rounded-3xl border border-foreground/10 dark:border-white/10 bg-foreground/5 dark:bg-white/5 p-8 md:p-10 backdrop-blur-md flex flex-col justify-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold w-max">
                Únete al equipo
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>Convocatoria de Vacantes</h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                El Consejo de Administración de la Cooperativa del Distrito Minero de La Llanada COODMILLA informa a todos sus asociados sobre la ampliación del plazo para aplicar a las vacantes vigentes.
              </p>
              <div className="inline-flex items-center gap-3 text-sm font-semibold text-foreground/80 dark:text-white/80 bg-foreground/10 dark:bg-white/10 px-4 py-3 rounded-xl w-max">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gold" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                Plazo extendido hasta el 30 de diciembre de 2025
              </div>
            </div>

            {/* Equidad de género */}
            <div className="rounded-3xl border border-green-500/20 dark:border-green-500/20 bg-green-500/5 dark:bg-green-500/10 p-8 md:p-10 backdrop-blur-md flex flex-col justify-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-600/30 bg-green-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-400 w-max">
                Sello Equipares PYMES
              </span>
              <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>Equidad de Género</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                En COODMILLA declaramos nuestro compromiso con la igualdad y la reducción de brechas de género, promoviendo la equidad en la cultura organizacional y un entorno laboral competitivo donde se visibiliza el empoderamiento de la mujer en toda su diversidad.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
