"use client"

import { useRef, useEffect, type ReactNode } from "react"

export function Reveal({
  children,
  className = "",
  threshold = 0.15,
  delay = 0,
}: {
  children: ReactNode
  className?: string
  threshold?: number
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1"
          el.style.transform = "translateY(0)"
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={ref}
      className={className}
      style={{ opacity: 0, transform: "translateY(30px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}
    >
      {children}
    </div>
  )
}
