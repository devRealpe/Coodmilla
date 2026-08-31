'use client'

import { useState } from 'react'
import { Target, Telescope, Sprout } from 'lucide-react'
import { Reveal } from '@/components/shared/reveal'

const fundamentals = [
  {
    id: 'mision',
    icon: Target,
    title: "Misión",
    desc: "COODMILLA es una empresa multiactiva del sector de la economía solidaria dedicada a la prestación de servicios y oferta de productos relacionados con el sector de la minería subterránea de pequeña escala y de diversas actividades conexas que están dirigidas a brindar oportunidades de desarrollo para nuestra comunidad a través de la mejor gestión técnica, ambiental, social y empresarial.",
  },
  {
    id: 'vision',
    icon: Telescope,
    title: "Visión",
    desc: 'La Cooperativa del Distrito Minero de La Llanada "COODMILLA" en el año 2030 habrá mejorado significativamente la calidad de vida de sus Asociados y Asociadas al alcanzar una sostenibilidad operativa y financiera, a través de prácticas de producción sustentable, eficiente y consolidando procesos de producción limpia y responsable, que le den a nuestros productos un valor agregado orientado hacia mercados nacionales e internacionales que promuevan el comercio justo y el consumo ético.',
  },
  {
    id: 'ambiental',
    icon: Sprout,
    title: "Compromiso Ambiental",
    desc: "COODMILLA se ha caracterizado desde sus inicios por utilizar procesos de extracción de oro libres de químicos nocivos como el mercurio y el cianuro, aspecto muy importante que le ha dado reconocimiento internacional y le ha facilitado el acceso a mercados internacionales que tienen una ética de consumo acorde con el cuidado y protección del ambiente.",
  },
]

export function FundamentalsTabs() {
  const [activeTab, setActiveTab] = useState(fundamentals[0].id)

  const activeContent = fundamentals.find(f => f.id === activeTab)

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Tabs / Botones */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-20">
        {fundamentals.map((f) => {
          const isActive = activeTab === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setActiveTab(f.id)}
              className={`relative flex items-center gap-3 px-6 py-4 rounded-full font-bold transition-all duration-300 overflow-hidden group ${
                isActive 
                  ? 'text-white shadow-[0_10px_30px_rgba(74,222,128,0.3)]' 
                  : 'bg-white/60 dark:bg-white/5 border border-black/5 dark:border-white/10 text-foreground/70 hover:bg-white dark:hover:bg-white/10'
              }`}
            >
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-700 dark:from-green-600 dark:to-green-800 animate-gradient" />
              )}
              
              <f.icon className={`relative z-10 w-5 h-5 ${isActive ? 'text-white' : 'text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform'}`} strokeWidth={2} />
              <span className="relative z-10 tracking-wide" style={{ fontFamily: 'var(--font-montserrat)' }}>{f.title}</span>
            </button>
          )
        })}
      </div>

      {/* Contenido / Tarjeta principal */}
      <Reveal key={activeTab}>
        <div className="relative overflow-hidden rounded-[3rem] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-10 md:p-16 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
          {/* Ambient Glows */}
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-green-500/10 blur-[60px] pointer-events-none" />
          <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-gold/10 blur-[60px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16">
            <div className="flex-shrink-0">
              <div className="flex size-32 items-center justify-center rounded-[2rem] bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-950/80 border border-black/5 dark:border-white/5 shadow-inner dark:shadow-black/50">
                {activeContent && <activeContent.icon className="w-16 h-16 text-green-700 dark:text-gold animate-pulse-slow" strokeWidth={1.5} />}
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl md:text-5xl font-black text-foreground mb-6 tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
                {activeContent?.title}
              </h3>
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium dark:font-light text-left md:text-justify">
                {activeContent?.desc}
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
