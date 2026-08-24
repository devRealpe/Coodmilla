"use client"

import { useState } from "react"
import { Reveal } from "@/components/shared/reveal"
import { ChevronRight } from "lucide-react"

export interface ServiceSub {
  emoji: string
  name: string
  detail: string
}

export interface ServiceCategory {
  title: string
  desc: string
  services: ServiceSub[]
}

interface ServicesTabsProps {
  categories: ServiceCategory[]
}

export function ServicesTabs({ categories }: ServicesTabsProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  
  if (!categories || categories.length === 0) return null

  const activeCategory = categories[activeIdx]

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-transparent border-t border-foreground/5 dark:border-white/5">
      <div className="container relative z-10 mx-auto px-6 max-w-[90rem]">
        <Reveal>
          <div className="text-center md:text-left mb-12">
             <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold shadow-[0_0_15px_rgba(232,151,33,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Portafolio Completo
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground md:text-4xl tracking-tight mt-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Nuestras <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-yellow-600 dark:to-yellow-200 drop-shadow-sm">Categorías</span>
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Sidebar / Tabs list */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3 h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {categories.map((cat, idx) => {
              const isActive = activeIdx === idx
              return (
                <button
                  key={cat.title}
                  onClick={() => setActiveIdx(idx)}
                  className={`group flex items-center justify-between w-full text-left p-5 rounded-2xl transition-all duration-500 border ${
                    isActive 
                      ? "bg-gold/10 dark:bg-gold/20 border-gold/50 shadow-[0_0_30px_rgba(232,151,33,0.15)] scale-[1.02]" 
                      : "bg-white/50 dark:bg-white/5 border-foreground/5 dark:border-white/5 hover:bg-white/80 dark:hover:bg-white/10 hover:border-foreground/10 dark:hover:border-white/10"
                  } backdrop-blur-md`}
                >
                  <span className={`font-bold transition-colors duration-300 pr-4 ${isActive ? "text-gold" : "text-foreground/70 dark:text-white/70 group-hover:text-foreground dark:group-hover:text-white"}`} style={{ fontFamily: 'var(--font-montserrat)' }}>
                    {cat.title}
                  </span>
                  <div className={`flex shrink-0 size-8 items-center justify-center rounded-full transition-all duration-300 ${isActive ? "bg-gold text-dark" : "bg-foreground/5 dark:bg-white/5 text-foreground/40 dark:text-white/40 group-hover:bg-foreground/10 dark:group-hover:bg-white/10"}`}>
                    <ChevronRight className="size-4" strokeWidth={isActive ? 3 : 2} />
                  </div>
                </button>
              )
            })}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden h-full min-h-[600px]">
              {/* Background ambient light inside card */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-96 h-96 bg-gold/10 blur-[80px] rounded-full pointer-events-none transition-all duration-700" />
              
              <div key={activeIdx} className="relative z-10 animate-in fade-in slide-in-from-right-8 duration-700 ease-out fill-mode-forwards">
                <h3 className="text-3xl font-extrabold text-foreground mb-4" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  {activeCategory.title}
                </h3>
                <p className="text-lg text-muted-foreground font-light mb-10 max-w-2xl">
                  {activeCategory.desc}
                </p>

                <div className="grid gap-6 sm:grid-cols-2">
                  {activeCategory.services.map((s, i) => (
                    <div 
                      key={s.name} 
                      className="group relative rounded-3xl bg-foreground/5 dark:bg-white/5 border border-foreground/5 dark:border-white/5 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-gold/30 dark:hover:border-gold/30 overflow-hidden"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {/* Subtle hover gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gold/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                      
                      <div className="relative z-10">
                        <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-white/50 dark:bg-black/30 backdrop-blur-sm border border-black/5 dark:border-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <span className="text-2xl drop-shadow-sm">{s.emoji}</span>
                        </div>
                        
                        <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-gold transition-colors" style={{ fontFamily: 'var(--font-montserrat)' }}>
                          {s.name}
                        </h4>
                        
                        <p className="text-sm leading-relaxed text-muted-foreground font-light group-hover:text-foreground/80 dark:group-hover:text-white/80 transition-colors">
                          {s.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(232, 151, 33, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(232, 151, 33, 0.5);
        }
      `}} />
    </section>
  )
}
