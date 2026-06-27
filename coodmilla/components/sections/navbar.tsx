"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Servicios" },
  { href: "#certificates", label: "Certificaciones" },
  { href: "#projects", label: "Proyectos" },
  { href: "#news", label: "Noticias" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300 md:px-10",
        scrolled && "bg-cream/80 backdrop-blur-xl shadow-[0_1px_30px_rgba(0,0,0,0.06)] py-4"
      )}
    >
      <a href="#" className="flex items-center gap-2.5">
        <Image
          src="/logo.jpeg"
          alt="Coodmilla"
          width={44}
          height={44}
          className="size-11 rounded-xl object-cover flex-shrink-0"
        />
        <span
          className={cn(
            "text-2xl font-extrabold tracking-tight transition-colors duration-300 text-white",
            scrolled && "text-dark"
          )}
        >
          Coodmilla
        </span>
      </a>

      <ul
        className={cn(
          "hidden items-center gap-10 md:flex",
          menuOpen && "flex flex-col absolute top-full left-0 right-0 bg-cream/98 p-6 shadow-lg md:hidden"
        )}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={closeMenu}
              className={cn(
                "relative text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full",
                scrolled || menuOpen
                  ? "text-text-muted hover:text-green"
                  : "text-white/85 hover:text-white"
              )}
            >
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#contact"
            onClick={closeMenu}
            className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green hover:-translate-y-0.5"
          >
            Contacto
          </a>
        </li>
      </ul>

      <button
        className="flex flex-col gap-1 cursor-pointer p-1 md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={cn("h-0.5 w-6 rounded transition-all duration-300", scrolled ? "bg-dark" : "bg-white")} />
        <span className={cn("h-0.5 w-6 rounded transition-all duration-300", scrolled ? "bg-dark" : "bg-white")} />
        <span className={cn("h-0.5 w-6 rounded transition-all duration-300", scrolled ? "bg-dark" : "bg-white")} />
      </button>

      {menuOpen && (
        <ul className="absolute top-full left-0 right-0 flex flex-col gap-5 bg-cream/98 p-6 shadow-lg md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="text-sm font-medium text-text-muted transition-colors hover:text-green"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="inline-flex items-center rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-green hover:-translate-y-0.5"
            >
              Contacto
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}
