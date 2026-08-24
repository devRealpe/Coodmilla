"use client"

import { useState, useCallback, useSyncExternalStore } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Pickaxe, Menu, X } from "lucide-react"
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
      if (typeof window === 'undefined') return () => { }
      window.addEventListener("scroll", cb, { passive: true })
      return () => window.removeEventListener("scroll", cb)
    },
    () => typeof window !== 'undefined' ? window.scrollY : 0,
    () => 0
  )
}

export function Navbar() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const scrollY = useScrollY()
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])
  const isScrolled = scrollY > 40 || !isHome

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-500 flex justify-center px-4 md:px-6 pointer-events-none",
        isScrolled ? "top-4" : "top-6"
      )}
    >
      <div className={cn(
        "w-full max-w-7xl rounded-full transition-all duration-700 p-[1px] pointer-events-auto group/nav",
        isScrolled 
          ? "bg-gradient-to-r from-gold/50 via-amber-200/30 to-gold/50 shadow-[0_10px_40px_rgba(232,151,33,0.18)]"
          : "bg-gradient-to-r from-gold/30 via-amber-200/10 to-gold/30 shadow-[0_8px_32px_rgba(232,151,33,0.08)] hover:from-gold/40 hover:to-gold/40"
      )}>
        <div className={cn(
          "w-full h-full rounded-full transition-all duration-500 flex items-center justify-between px-6 md:px-8",
          isScrolled
            ? "bg-background/95 backdrop-blur-xl py-3"
            : "bg-background/80 backdrop-blur-lg py-4"
        )}>
        <Link href="/" className="flex items-center gap-3 group">
          <div className={cn(
            "relative flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105 overflow-hidden",
            isScrolled ? "bg-foreground/10 dark:bg-white/10" : "bg-foreground/10 dark:bg-white/10"
          )}>
            <img src="/logo.jpeg" alt="Coodmilla Logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-extrabold text-2xl tracking-tighter leading-none transition-colors",
              isScrolled ? "text-foreground" : "text-foreground"
            )} style={{ fontFamily: 'var(--font-montserrat)' }}>COODMILLA</span>
            <span className={cn(
              "text-[10px] uppercase tracking-[0.2em] font-semibold mt-1 transition-colors",
              isScrolled ? "text-primary" : "text-foreground/80"
            )}>Minería e Ingeniería</span>
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
                    isScrolled
                      ? (isActive ? "text-gold after:bg-gold" : "text-foreground/90 hover:text-gold after:bg-gold")
                      : (isActive ? "text-gold after:bg-gold" : "text-foreground/90 hover:text-gold after:bg-gold")
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

        <div className="flex xl:hidden items-center gap-3">
          <ThemeToggle isScrolled={isScrolled} />
          <button
            className={cn(
              "flex items-center justify-center p-2 rounded-lg transition-colors",
              isScrolled ? "text-foreground hover:bg-foreground/5" : "text-foreground hover:bg-foreground/10"
            )}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border shadow-xl xl:hidden flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-base font-semibold text-foreground/80 transition-colors hover:text-primary py-2 border-b border-border/50"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={closeMenu}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
          >
            Portal Asociados
          </Link>
        </div>
      )}
    </nav>
  )
}
