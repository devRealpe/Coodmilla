"use client"

import { useEffect, useRef } from "react"
import { Reveal } from "@/components/reveal"

class Particle {
  x = 0
  y = 0
  s = 1
  sx = 0
  sy = 0
  o = 0.2
  p = 0
  w = 0
  h = 0

  constructor(w: number, h: number) {
    this.w = w
    this.h = h
    this.reset()
  }

  reset() {
    this.x = Math.random() * this.w
    this.y = Math.random() * this.h
    this.s = Math.random() * 1.8 + 0.3
    this.sx = (Math.random() - 0.5) * 0.25
    this.sy = (Math.random() - 0.5) * 0.25
    this.o = Math.random() * 0.4 + 0.05
    this.p = Math.random() * Math.PI * 2
  }

  update() {
    this.x += this.sx
    this.y += this.sy
    this.p += 0.015
    if (this.x < 0 || this.x > this.w || this.y < 0 || this.y > this.h) this.reset()
  }

  draw(ctx: CanvasRenderingContext2D) {
    const a = this.o * (0.6 + 0.4 * Math.sin(this.p))
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(232, 151, 33, ${a})`
    ctx.fill()
  }
}

function useParticles(canvasRef: React.RefObject<HTMLCanvasElement | null>) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const hero = canvas.parentElement
    if (!hero) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    let animId = 0

    function resize() {
      canvas!.width = hero!.offsetWidth
      canvas!.height = hero!.offsetHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const count = Math.min(60, Math.floor(window.innerWidth * 0.035))
    particles = Array.from({ length: count }, () => new Particle(canvas!.width, canvas!.height))

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 100) {
            const a = (1 - d / 100) * 0.08
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.strokeStyle = `rgba(232, 151, 33, ${a})`
            ctx!.lineWidth = 0.5
            ctx!.stroke()
          }
        }
      }
    }

    function loop() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      for (const p of particles) {
        p.update()
        p.draw(ctx!)
      }
      drawLines()
      animId = requestAnimationFrame(loop)
    }

    animId = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
    }
  }, [canvasRef])
}

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useParticles(canvasRef)

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-dark via-[#0a2a18] to-green px-6 pt-32 pb-16 md:px-10 md:pb-20 md:pt-36">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      <div className="container relative z-20">
        <div className="grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
          <div>
            <Reveal>
              <div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-gold/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                <span className="size-1.5 rounded-full bg-gold" />
                Operaciones en Colombia
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                Minería con <span className="text-gold">propósito</span>
              </h1>
            </Reveal>

            <Reveal>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/65 md:text-lg">
                En Coodmilla integramos tecnología, seguridad y sostenibilidad para desarrollar proyectos mineros que generan valor real.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-green-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/25"
                >
                  Solicitar información &rarr;
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-gold hover:text-gold hover:-translate-y-0.5"
                >
                  Ver proyectos
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-8 flex gap-8 border-t border-white/6 pt-5 md:gap-10">
                {[
                  { value: "+12", label: "Años" },
                  { value: "+45", label: "Proyectos" },
                  { value: "+800", label: "Empleos" },
                ].map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl font-bold text-white md:text-3xl">
                      <span className="text-gold">{m.value}</span>
                    </div>
                    <p className="mt-0.5 text-xs uppercase tracking-wider text-white/40">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="hidden md:grid md:grid-cols-2 gap-3">
            {[
              { emoji: "⛏", bg: "bg-green" },
              { emoji: "⚙", bg: "bg-gold", style: { marginTop: "1.5rem" } },
              { emoji: "🌎", bg: "bg-green-light", style: { marginTop: "-1.5rem" } },
              { emoji: "🔬", bg: "bg-[#0a1a10]" },
            ].map((block, i) => (
              <div
                key={i}
                className={`flex aspect-square items-center justify-center rounded-xl text-4xl opacity-85 transition-all duration-400 hover:scale-105 hover:shadow-lg ${block.bg}`}
                style={block.style}
              >
                {block.emoji}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
