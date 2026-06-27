"use client"

import { useRef, useEffect, useState } from "react"

const stats = [
  { value: 12, suffix: "", label: "Años de experiencia" },
  { value: 45, suffix: "", label: "Proyectos exitosos" },
  { value: 800, suffix: "", label: "Empleos directos" },
  { value: 15, suffix: "", label: "Certificaciones" },
]

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          let current = 0
          const step = Math.max(1, Math.floor(target / 40))
          const interval = setInterval(() => {
            current += step
            if (current >= target) {
              current = target
              clearInterval(interval)
            }
            setCount(current)
          }, 30)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref} className="tabular-nums">
      {count}
    </span>
  )
}

export function Stats() {
  return (
    <section id="stats" className="bg-gradient-to-br from-green to-[#034a27] py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="transform rounded-xl border border-white/4 bg-white/6 p-5 text-center transition-all duration-400 hover:-translate-y-1 hover:bg-white/10 md:p-6"
            >
              <div className="text-3xl font-extrabold leading-none text-white md:text-4xl">
                <span className="text-gold">+</span>
                <Counter target={s.value} />
              </div>
              <div className="mt-1.5 text-xs uppercase tracking-wider text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
