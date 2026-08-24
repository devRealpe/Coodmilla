"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

class Particle {
  x = 0; y = 0; s = 1; sx = 0; sy = 0; o = 0.2; p = 0; w = 0; h = 0

  constructor(w: number, h: number) {
    this.w = w; this.h = h; this.reset()
  }

  reset() {
    this.x = Math.random() * this.w
    this.y = Math.random() * this.h
    // Hacemos las partículas más grandes para que sean más visibles
    this.s = Math.random() * 2.5 + 0.8
    this.sx = (Math.random() - 0.5) * 0.25
    this.sy = (Math.random() - 0.5) * 0.25
    // Aumentamos la opacidad base
    this.o = Math.random() * 0.6 + 0.2
    this.p = Math.random() * Math.PI * 2
  }

  update() {
    this.x += this.sx; this.y += this.sy; this.p += 0.015
    if (this.x < 0 || this.x > this.w || this.y < 0 || this.y > this.h) this.reset()
  }

  draw(ctx: CanvasRenderingContext2D, isDark: boolean) {
    const a = this.o * (0.6 + 0.4 * Math.sin(this.p))
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2)
    // El usuario solicitó dorado en ambos modos
    ctx.fillStyle = `rgba(232, 151, 33, ${a})`
    ctx.fill()
  }
}

function useParticles(canvasRef: React.RefObject<HTMLCanvasElement | null>, isDark: boolean) {
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const container = canvas.parentElement
    if (!container) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    let animId = 0

    function resize() {
      if (!canvas || !container) return
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
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
            // Aumentamos la opacidad y el grosor de las líneas
            const a = (1 - d / 120) * 0.15
            ctx!.beginPath()
            ctx!.moveTo(particles[i].x, particles[i].y)
            ctx!.lineTo(particles[j].x, particles[j].y)
            ctx!.strokeStyle = `rgba(232, 151, 33, ${a})`
            ctx!.lineWidth = 1
            ctx!.stroke()
          }
        }
      }
    }

    function loop() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)
      for (const p of particles) { p.update(); p.draw(ctx!, isDark) }
      drawLines()
      animId = requestAnimationFrame(loop)
    }

    animId = requestAnimationFrame(loop)
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize) }
  }, [canvasRef, isDark])
}

export function PageBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Default to dark if not mounted to avoid hydration flash when possible, 
  // or rely on CSS classes for the background color transition.
  const isDark = mounted ? resolvedTheme === "dark" : true

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden bg-background transition-colors duration-500">
      {/* Light mode gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-green-500/10 transition-opacity duration-500 dark:opacity-0" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent transition-opacity duration-500 dark:opacity-0" />
      
      {/* Dark mode gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark via-[#081f11] to-green-500/40 opacity-0 transition-opacity duration-500 dark:opacity-100" />
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 dark:opacity-100" />

      {/* Particles (only render on client to avoid hydration mismatch with canvas width/height calculation) */}
      {mounted && <ParticlesCanvas isDark={isDark} />}
    </div>
  )
}

function ParticlesCanvas({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  useParticles(canvasRef, isDark)
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
}
