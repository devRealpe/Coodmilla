import Link from "next/link"
import { MapPin, Mail } from "lucide-react"

const Facebook = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-background pt-16 pb-8 border-t border-foreground/10 dark:border-white/10 transition-colors duration-300">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 shadow-sm transition-transform group-hover:scale-105">
                <img src="/logo.jpeg" alt="Coodmilla Logo" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tighter leading-none text-foreground" style={{ fontFamily: "var(--font-montserrat)" }}>
                  COODMILLA
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold mt-1 text-gold">Minería Responsable</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Minería responsable con operaciones sostenibles e impacto local positivo, garantizando los más altos estándares a nivel global.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground tracking-wide mb-6 uppercase text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
              Explorar
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Inicio", href: "/" },
                { label: "Nosotros", href: "/nosotros" },
                { label: "Servicios", href: "/servicios" },
                { label: "Certificaciones", href: "/certificaciones" },
                { label: "Noticias", href: "/noticias" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/20 dark:bg-white/20 group-hover:bg-gold transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground tracking-wide mb-6 uppercase text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground text-sm font-medium">
                <MapPin className="size-5 shrink-0 text-gold" />
                <span>
                  La Llanada, Nariño
                  <br />
                  Colombia
                </span>
              </li>
              <li>
                <a
                  href="mailto:contactenoscoodmila@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground text-sm font-medium hover:text-foreground transition-colors break-all"
                >
                  <Mail className="size-5 shrink-0 text-gold" />
                  <span>contactenoscoodmila@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground tracking-wide mb-6 uppercase text-sm" style={{ fontFamily: "var(--font-montserrat)" }}>
              Conecta
            </h3>
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook", href: "https://www.facebook.com/share/1CBpJ4NuyW/" },
                {
                  icon: Instagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/coodmillaoficial?igsi=MXd2eTNoNmczazg4Zw==",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center size-10 rounded-full bg-foreground/5 dark:bg-white/5 border border-foreground/10 dark:border-white/10 text-foreground hover:bg-gold hover:text-dark hover:border-gold transition-all hover:-translate-y-1"
                >
                  <social.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-foreground/10 dark:via-white/10 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <p className="text-xs text-muted-foreground font-medium">
            &copy; {new Date().getFullYear()} Coodmilla. Todos los derechos reservados.
          </p>
          <p className="text-xs text-muted-foreground font-medium flex items-center gap-1 justify-center md:justify-start">
            Desarrollado por <strong className="font-bold text-gold">Expelion ({new Date().getFullYear()})</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}
