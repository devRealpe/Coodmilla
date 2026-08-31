"use client"

import { useState, useCallback, useEffect, useSyncExternalStore } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/certificaciones", label: "Certificaciones" },
  { href: "/noticias", label: "Noticias" },
]

function useScrollY() {
  return useSyncExternalStore(
    (cb) => {
      if (typeof window === "undefined") return () => {}
      window.addEventListener("scroll", cb, { passive: true })
      return () => window.removeEventListener("scroll", cb)
    },
    () => (typeof window !== "undefined" ? window.scrollY : 0),
    () => 0
  )
}

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const scrollY = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const toggleMenu = useCallback(() => setMenuOpen((open) => !open), [])
  const isScrolled = scrollY > 40 || !isHome

  // Cerrar al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Bloquear scroll del body y cerrar con Escape
  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu()
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [menuOpen, closeMenu])

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 md:px-6 pointer-events-none",
          isScrolled ? "top-4" : "top-6"
        )}
      >
        <div
          className={cn(
            "w-full max-w-7xl rounded-full transition-all duration-700 p-[1px] pointer-events-auto group/nav",
            isScrolled
              ? "bg-gradient-to-r from-gold/50 via-amber-200/30 to-gold/50 shadow-[0_10px_40px_rgba(232,151,33,0.18)]"
              : "bg-gradient-to-r from-gold/30 via-amber-200/10 to-gold/30 shadow-[0_8px_32px_rgba(232,151,33,0.08)] hover:from-gold/40 hover:to-gold/40"
          )}
        >
          <div
            className={cn(
              "w-full h-full rounded-full transition-all duration-500 flex items-center justify-between px-5 sm:px-6 md:px-8",
              isScrolled
                ? "bg-background/95 backdrop-blur-xl py-3"
                : "bg-background/80 backdrop-blur-lg py-3.5 sm:py-4"
            )}
          >
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0" onClick={closeMenu}>
              <div
                className={cn(
                  "relative flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 overflow-hidden",
                  "bg-foreground/10 dark:bg-white/10"
                )}
              >
                <img src="/logo.jpeg" alt="Coodmilla Logo" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-col min-w-0">
                <span
                  className="font-extrabold text-xl sm:text-2xl tracking-tighter leading-none text-foreground truncate"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  COODMILLA
                </span>
                <span
                  className={cn(
                    "text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-semibold mt-0.5 sm:mt-1 transition-colors",
                    isScrolled ? "text-primary" : "text-foreground/80"
                  )}
                >
                  Minería Responsable
                </span>
              </div>
            </Link>

            <ul className="hidden xl:flex items-center gap-10 lg:gap-12">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "relative text-base tracking-wide transition-all duration-300 hover:-translate-y-0.5",
                        "after:absolute after:left-1/2 after:-bottom-2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:rounded-full after:transition-all after:duration-300 hover:after:w-full",
                        isActive ? "font-semibold after:w-full" : "font-medium",
                        isActive
                          ? "text-gold after:bg-gold"
                          : "text-foreground/90 hover:text-gold after:bg-gold"
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            <div className="hidden xl:flex items-center gap-4">
              <ThemeToggle isScrolled={isScrolled} />
              <Link
                href="/contacto"
                className={cn(
                  "inline-flex items-center rounded-full px-6 py-2.5 text-sm font-bold shadow-md transition-all hover:-translate-y-0.5",
                  isScrolled
                    ? "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground shadow-accent/20 hover:shadow-accent/40"
                    : "bg-foreground text-background hover:bg-gold hover:text-white border border-transparent dark:bg-white dark:text-dark"
                )}
              >
                Contactanos
              </Link>
            </div>

            <div className="flex xl:hidden items-center gap-2 sm:gap-3">
              <ThemeToggle isScrolled={isScrolled} />
              <button
                type="button"
                className={cn(
                  "relative z-[60] flex items-center justify-center size-10 rounded-full transition-colors",
                  isScrolled
                    ? "text-foreground hover:bg-foreground/5"
                    : "text-foreground hover:bg-foreground/10"
                )}
                onClick={toggleMenu}
                aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-menu"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu — fuera del nav con pointer-events-none */}
      <div
        className={cn(
          "fixed inset-0 z-40 xl:hidden transition-opacity duration-300",
          menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        aria-hidden={!menuOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-dark/50 backdrop-blur-sm"
          onClick={closeMenu}
          aria-label="Cerrar menú"
          tabIndex={menuOpen ? 0 : -1}
        />

        <div
          id="mobile-nav-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
          className={cn(
            "absolute left-4 right-4 top-[5.5rem] sm:top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto rounded-3xl border border-border/60 bg-background/95 shadow-2xl shadow-black/20 backdrop-blur-xl transition-all duration-300 ease-out",
            menuOpen
              ? "translate-y-0 opacity-100 scale-100"
              : "-translate-y-3 opacity-0 scale-[0.98]"
          )}
        >
          <div className="flex flex-col p-3 sm:p-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  tabIndex={menuOpen ? 0 : -1}
                  className={cn(
                    "rounded-2xl px-4 py-3.5 text-base font-semibold tracking-wide transition-colors",
                    isActive
                      ? "bg-gold/15 text-gold"
                      : "text-foreground/85 hover:bg-foreground/5 hover:text-gold active:bg-foreground/8"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}

            <div className="mt-2 border-t border-border/60 pt-3 px-1 pb-1">
              <Link
                href="/contacto"
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent/85 px-5 py-3.5 text-sm font-bold text-accent-foreground shadow-lg shadow-accent/25 transition-transform active:scale-[0.98]"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
