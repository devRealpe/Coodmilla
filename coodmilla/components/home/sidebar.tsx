"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const sections = [
  { id: "about", label: "Nosotros" },
  { id: "services", label: "Servicios" },
  { id: "stats", label: "Estadísticas" },
  { id: "certificates", label: "Certificaciones" },
  { id: "projects", label: "Proyectos" },
  { id: "news", label: "Noticias" },
  { id: "contact", label: "Contacto" },
]

export function Sidebar() {
  const [active, setActive] = useState("hero")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    )

    const els: Element[] = []
    for (const { id } of sections) {
      const el = document.getElementById(id)
      if (el) {
        observer.observe(el)
        els.push(el)
      }
    }

    return () => {
      for (const el of els) observer.unobserve(el)
      observer.disconnect()
    }
  }, [])

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="group relative flex items-center justify-center"
          aria-label={s.label}
        >
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-dark/85 px-2.5 py-1 text-[11px] font-medium text-white opacity-0 transition-all duration-200 group-hover:opacity-100 backdrop-blur-sm">
            {s.label}
          </span>
          <span
            className={cn(
              "rounded-full transition-all duration-500",
              active === s.id
                ? "h-3 w-3 bg-gold shadow-[0_0_10px_rgba(232,151,33,0.6)]"
                : "h-2 w-2 bg-gold/35 hover:bg-gold/70"
            )}
          />
        </button>
      ))}
    </nav>
  )
}
