"use client"

import { useEffect, useRef } from "react"
import { Reveal } from "@/components/shared/reveal"
import { Pickaxe, Settings, Globe, Microscope, ArrowRight } from "lucide-react"
import Link from "next/link"

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
    ctx.fillStyle = `rgba(232, 151, 33, ${a})` // Gold color
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
      if (!canvas || !hero) return
      canvas.width = hero.offsetWidth
      canvas.height = hero.offsetHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const count = Math.min(80, Math.floor(window.innerWidth * 0.04))
    particles = Array.from({ length: count }, () => new Particle(canvas!.width, canvas!.height))

    function drawLines() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            const a = (1 - d / 120) * 0.08
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
    <section className="relative overflow-hidden bg-dark px-6 pt-32 pb-16 md:px-10 md:pb-24 md:pt-40 min-h-[95vh] flex items-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#081f11] to-green/40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent pointer-events-none" />
      
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 pointer-events-none"
      />

      <div className="container relative z-20 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          <div className="max-w-3xl">
            <Reveal>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold shadow-[0_0_15px_rgba(232,151,33,0.1)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
                </span>
                Operaciones en Colombia
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-5xl font-extrabold leading-[1.1] text-white md:text-6xl lg:text-[4.5rem]" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Minería con <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">
                  propósito
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl font-light">
                En Coodmilla integramos tecnología avanzada, máxima seguridad industrial y sostenibilidad ambiental para desarrollar proyectos mineros que generan valor real.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 flex flex-wrap gap-4 items-center">
                <Link
                  href="/contacto"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-yellow-500 px-8 py-4 text-sm font-bold text-dark transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(232,151,33,0.4)]"
                >
                  Solicitar información
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/proyectos"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-bold text-white transition-all hover:border-gold hover:bg-gold/10 hover:text-gold hover:scale-105"
                >
                  Ver proyectos
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-16 flex gap-10 border-t border-white/10 pt-8 md:gap-16">
                {[
                  { value: "+12", label: "Años de Exp." },
                  { value: "+45", label: "Proyectos Activos" },
                  { value: "+800", label: "Empleos Generados" },
                ].map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <div className="text-3xl font-extrabold text-white md:text-4xl tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-gold to-yellow-200">{m.value}</span>
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4 relative">
            {/* Glowing effect behind grid */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-gold/20 blur-[100px] rounded-full pointer-events-none" />
            
            {[
              { icon: Pickaxe, title: "Extracción", desc: "Minería Responsable", bg: "from-green-900 to-green-950", border: "border-green-500/30" },
              { icon: Settings, title: "Ingeniería", desc: "Procesos Optimizados", bg: "from-amber-600/20 to-amber-900/20", border: "border-gold/30", style: { marginTop: "2rem" } },
              { icon: Globe, title: "Impacto", desc: "Desarrollo Local", bg: "from-green-600/20 to-green-900/20", border: "border-green-400/30", style: { marginTop: "-2rem" } },
              { icon: Microscope, title: "Innovación", desc: "Tecnología Punta", bg: "from-neutral-800 to-neutral-900", border: "border-white/10" },
            ].map((block, i) => (
              <Reveal key={i} delay={0.3 + i * 0.1}>
                <div
                  className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br ${block.bg} border ${block.border} backdrop-blur-xl transition-all duration-500 hover:scale-[1.05] hover:shadow-2xl hover:border-gold/50 cursor-pointer group h-48`}
                  style={block.style}
                >
                  <div className="p-4 rounded-full bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-500 group-hover:bg-gold/20">
                    <block.icon className="h-8 w-8 text-white group-hover:text-gold transition-colors" />
                  </div>
                  <h3 className="font-bold text-white tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>{block.title}</h3>
                  <p className="text-xs text-white/60 mt-1 uppercase tracking-wider font-medium">{block.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
