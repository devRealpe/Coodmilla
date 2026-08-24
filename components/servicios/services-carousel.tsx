"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Reveal } from "@/components/shared/reveal"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { type CarruselItem, resolveAssetUrl } from "@/lib/api"

interface ServicesCarouselProps {
  items: CarruselItem[]
}

export function ServicesCarousel({ items }: ServicesCarouselProps) {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length)
    }, 5000)
  }

  useEffect(() => {
    resetTimer()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length])

  const prev = () => {
    setCurrent((c) => (c - 1 + items.length) % items.length)
    resetTimer()
  }
  const next = () => {
    setCurrent((c) => (c + 1) % items.length)
    resetTimer()
  }

  if (!items || items.length === 0) return null

  return (
    <div className="relative w-full h-[450px] lg:h-[600px] rounded-[2.5rem] overflow-hidden group shadow-[0_0_40px_rgba(232,151,33,0.15)] border border-white/20 dark:border-white/10 mt-10 lg:mt-0">
      {/* Ambient Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/10 blur-[80px] pointer-events-none" />

      <div className="relative w-full h-full">
        {items.map((it, i) => {
          const isActive = i === current
          const imagenAbsoluta = resolveAssetUrl(it.imagenUrl)
          return (
            <div
              key={it.id}
              className={`absolute inset-0 transition-all duration-1000 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
                isActive ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
              }`}
            >
              <Image
                src={imagenAbsoluta}
                alt={it.titulo}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
              />
              {/* Unique gradient overlay for a sleek, card-like look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full transform transition-all duration-700 delay-200">
                <div className={`transition-all duration-700 ${isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3 drop-shadow-lg" style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {it.titulo}
                  </h3>
                  {it.linkUrl && (
                    <Link
                      href={it.linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors text-sm font-semibold tracking-wide uppercase"
                    >
                      Descubrir más
                      <ExternalLink className="size-4" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation Controls */}
      {items.length > 1 && (
        <>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 flex justify-between z-20 pointer-events-none">
            <button
              onClick={prev}
              className="pointer-events-auto flex items-center justify-center size-10 md:size-12 rounded-full bg-black/40 hover:bg-gold backdrop-blur-md border border-white/20 text-white hover:text-dark transition-all duration-300 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
            >
              <ChevronLeft className="size-5 md:size-6" />
            </button>
            <button
              onClick={next}
              className="pointer-events-auto flex items-center justify-center size-10 md:size-12 rounded-full bg-black/40 hover:bg-gold backdrop-blur-md border border-white/20 text-white hover:text-dark transition-all duration-300 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0"
            >
              <ChevronRight className="size-5 md:size-6" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="absolute top-6 right-6 z-20 flex gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i)
                  resetTimer()
                }}
                className={`h-1.5 transition-all duration-500 rounded-full ${i === current ? "w-8 bg-gold" : "w-2 bg-white/40 hover:bg-white/80"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
