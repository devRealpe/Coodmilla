"use client"

import { useState, useCallback, useSyncExternalStore } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Pickaxe, Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/certificaciones", label: "Certificaciones" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/noticias", label: "Noticias" },
]

function useScrollY() {
  return useSyncExternalStore(
    (cb) => {
      if (typeof window === 'undefined') return () => {}
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-border/40 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 md:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className={cn(
            "flex h-11 w-11 items-center justify-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105",
            isScrolled ? "bg-gradient-to-br from-primary to-green-900 text-primary-foreground shadow-primary/30" : "bg-white/10 backdrop-blur-md text-white border border-white/20"
          )}>
            <Pickaxe className="h-6 w-6 drop-shadow-md" />
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-extrabold text-2xl tracking-tighter leading-none transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )} style={{ fontFamily: 'var(--font-montserrat)' }}>COODMILLA</span>
            <span className={cn(
              "text-[10px] uppercase tracking-[0.2em] font-semibold mt-1 transition-colors",
              isScrolled ? "text-primary" : "text-white/80"
            )}>Minería e Ingeniería</span>
          </div>
        </Link>

        <ul className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:rounded-full after:transition-all after:duration-300 hover:after:w-full",
                    isActive && "after:w-full",
                    isScrolled
                      ? "text-foreground/80 hover:text-primary after:bg-primary"
                      : "text-white/80 hover:text-white after:bg-gold"
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden xl:flex items-center gap-4">
          <Link
            href="/contacto"
            className={cn(
              "inline-flex items-center rounded-full px-6 py-2.5 text-sm font-bold shadow-md transition-all hover:-translate-y-0.5",
              isScrolled
                ? "bg-gradient-to-r from-accent to-accent/80 text-accent-foreground shadow-accent/20 hover:shadow-accent/40"
                : "bg-white text-dark hover:bg-gold hover:text-white border border-transparent"
            )}
          >
            Portal Asociados
          </Link>
        </div>

        <button
          className={cn(
            "flex xl:hidden items-center justify-center p-2 rounded-lg transition-colors",
            isScrolled ? "text-foreground hover:bg-black/5" : "text-white hover:bg-white/10"
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
