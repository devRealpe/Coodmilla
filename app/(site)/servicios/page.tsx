import type { Metadata } from "next"
import { Reveal } from "@/components/shared/reveal"
import { Settings, Shield, Leaf, LayoutGrid, Gem, BarChart3, GraduationCap, ArrowLeftRight, Plane } from "lucide-react"
import { ServicesTabs } from "@/components/servicios/services-tabs"
import { ServicesCarousel } from "@/components/servicios/services-carousel"
import { getCarrusel } from "@/lib/api"

export const metadata: Metadata = {
  title: "Servicios — Coodmilla",
}

const categories = [
  {
    title: "Exploración y explotación de minas y canteras",
    desc: "Desarrollo y fortalecimiento de la producción minera bajo los más altos estándares de seguridad y respeto al medio ambiente.",
    services: [
      { emoji: "📄", name: "Permisos y autorizaciones", detail: "Realizar trámites ante el Estado para actividades de exploración y explotación." },
      { emoji: "⛏", name: "Exploración y explotación", detail: "Operar de manera eficiente y racional bajo normatividad vigente y mejores prácticas." },
      { emoji: "🌍", name: "Comercialización", detail: "Venta a nivel nacional e internacional de productos, subproductos y derivados." },
      { emoji: "🤝", name: "Contratos y alianzas", detail: "Contratos de explotación con asociados y alianzas con personas públicas o privadas." },
    ],
  },
  {
    title: "Actividades de apoyo a la explotación",
    desc: "Servicios técnicos orientados al procesamiento, beneficio y apoyo operativo de la cadena minera.",
    services: [
      { emoji: "⚙", name: "Procesamiento de minerales", detail: "Beneficio de minerales, concentrados y colas de molienda." },
      { emoji: "🏗", name: "Servicios de apoyo", detail: "Servicios técnicos y operativos para la exploración y explotación." },
      { emoji: "🤝", name: "Convenios", detail: "Suscripción de alianzas y proyectos para el desarrollo de la sección." },
    ],
  },
  {
    title: "Servicios de maquinaria y obras civiles",
    desc: "Operaciones con maquinaria pesada especializada para el sector minero y construcción de obras civiles complementarias.",
    services: [
      { emoji: "🚜", name: "Maquinaria", detail: "Prestación de servicios de maquinaria para proyectos y obras complementarias." },
    ],
  },
  {
    title: "Ambiente, viverismo y agricultura",
    desc: "Iniciativas transversales para la sostenibilidad ambiental, reforestación y soberanía alimentaria.",
    services: [
      { emoji: "🌱", name: "Conservación de biodiversidad", detail: "Protección y manejo sostenible de recursos naturales." },
      { emoji: "🎓", name: "Educación ambiental", detail: "Promoción de la protección del medio ambiente." },
      { emoji: "🌿", name: "Viverismo y especies nativas", detail: "Germinación y comercialización de especies nativas, frutales y orgánicos." },
    ],
  },
  {
    title: "Ferretería",
    desc: "Provisión de insumos esenciales, equipos de protección personal (EPP) y materiales de la más alta calidad.",
    services: [
      { emoji: "🛠", name: "Artículos y materiales", detail: "Comercialización de artículos de ferretería y materiales de construcción." },
      { emoji: "🦺", name: "Seguridad industrial", detail: "Comercialización de equipos y EPP normativos." },
      { emoji: "🎨", name: "Pinturas y vidrio", detail: "Comercialización de pinturas, vidrio y productos similares." },
    ],
  },
  {
    title: "Consumo",
    desc: "Fomento de la economía solidaria mejorando condiciones sociales y el acceso a productos básicos.",
    services: [
      { emoji: "🏪", name: "Centros de acopio", detail: "Adquisición preferente de productos del mercado local." },
      { emoji: "🛒", name: "Canasta familiar", detail: "Suministro de víveres, abarrotes y productos complementarios a precios favorables." },
      { emoji: "🚚", name: "Canales de distribución", detail: "Distribución eficiente desde lugares de producción hasta el consumidor final." },
    ],
  },
  {
    title: "Servicios de alojamiento",
    desc: "Soluciones integrales de hospedaje y alojamiento para trabajadores y comunidad.",
    services: [
      { emoji: "🏨", name: "Infraestructura", detail: "Comprar y/o construir infraestructuras destinadas a servicios de alojamiento." },
      { emoji: "🛌", name: "Servicios de hospedaje", detail: "Hostales, hoteles, ecohoteles, apartamentos, entre otros." },
      { emoji: "🤝", name: "Convenios de vivienda", detail: "Convenios con entidades cooperativas o de construcción de vivienda." },
    ],
  },
  {
    title: "Comercialización de combustibles",
    desc: "Abastecimiento energético confiable para la operación minera y la comunidad en general.",
    services: [
      { emoji: "⛽", name: "Combustibles", detail: "Comercialización de combustibles líquidos derivados del petróleo (gasolina, diésel)." },
      { emoji: "🛢", name: "Lubricantes", detail: "Comercialización de lubricantes como aceites, grasas y líquido de frenos." },
    ],
  },
  {
    title: "Orfebrería y joyería",
    desc: "Creación de valor agregado a la extracción de metales preciosos mediante diseño y manufactura experta.",
    services: [
      { emoji: "💍", name: "Diseño y fabricación", detail: "Productos de orfebrería y joyería a nivel nacional e internacional." },
      { emoji: "🎓", name: "Formación", detail: "Capacitación en joyería, diseño, uso de tecnologías y materiales." },
      { emoji: "💎", name: "Insumos y equipos", detail: "Comercialización de materiales y equipos de orfebrería." },
    ],
  },
  {
    title: "Servicios de bienestar y asistencia social",
    desc: "Servicios especiales diseñados para elevar la calidad de vida de los asociados y la comunidad.",
    services: [
      { emoji: "🕊", name: "Auxilios y seguros", detail: "Auxilios funerarios, de incapacidad y seguros colectivos o personales." },
      { emoji: "📚", name: "Educación y becas", detail: "Becas para asociados y familiares, fomento de la educación cooperativa." },
      { emoji: "⚽", name: "Recreación y cultura", detail: "Promoción de centros de recreación y capacitación para la comunidad." },
    ],
  },
]

export default async function ServiciosPage() {
  const carruselItems = await getCarrusel()

  return (
    <>
      {/* Bespoke Header for Servicios */}
      <section className="relative overflow-hidden bg-transparent px-6 pt-32 pb-16 md:px-10 md:pb-24 md:pt-40 lg:min-h-[70vh] flex items-center">
        {/* Dynamic Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} 
        />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -ml-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-green-600/10 to-transparent blur-[120px] pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-[90rem]">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <Reveal>
              <div>
                <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold shadow-sm">
                  <LayoutGrid className="size-3.5" />
                  Experiencia Operativa
                </span>
                <h1 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-7xl" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Soluciones en <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-yellow-600 dark:to-yellow-200 drop-shadow-sm">minería</span>
                </h1>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-xl font-light max-w-xl">
                  Desde la exploración responsable hasta el cierre de minas. Ofrecemos un portafolio integral respaldado por los más altos estándares de calidad, seguridad industrial y sostenibilidad ambiental.
                </p>
              </div>
            </Reveal>

            {/* Carrusel en la parte derecha del Hero */}
            <Reveal delay={0.2} className="w-full">
              <ServicesCarousel items={carruselItems} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Información Transversal (Rediseño Estético) */}
      <section className="relative overflow-hidden bg-transparent py-20 border-t border-foreground/5 dark:border-white/5">
        <div className="container relative z-10 mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Nuestra <span className="text-gold">Fundación Operativa</span>
              </h2>
              <p className="mt-4 text-muted-foreground font-light text-lg">
                Pilares transversales que guían nuestro impacto social y económico.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Sistema Productivo */}
            <Reveal delay={0.1}>
              <div className="group h-full rounded-[2.5rem] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gold/30">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-gold/10 text-gold group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <BarChart3 className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-montserrat)' }}>Sistema Productivo</h3>
                </div>
                <p className="text-muted-foreground font-medium dark:font-light leading-relaxed mb-4">
                  La entidad cuenta con los derechos de explotación y los instrumentos ambientales y legales para cobijar, apoyar, coordinar y representar a los mineros ante la sociedad civil y el gobierno nacional.
                </p>
                <p className="text-muted-foreground font-medium dark:font-light leading-relaxed">
                  Bajo Contratos de Asociación y Operación, asignamos frentes de explotación a nuestros asociados, garantizando la legalidad amparada en el Código de Minas.
                </p>
              </div>
            </Reveal>

            {/* Educación Ambiental */}
            <Reveal delay={0.2}>
              <div className="group h-full rounded-[2.5rem] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-green-500/30">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-green-500/10 text-green-600 dark:text-green-400 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                    <GraduationCap className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-montserrat)' }}>Educación Ambiental</h3>
                </div>
                <p className="text-muted-foreground font-medium dark:font-light leading-relaxed">
                  La educación ambiental es vital para comprender las relaciones entre el ser humano y los sistemas naturales. Iniciamos con capacitaciones enfocadas en tipos de contaminación, creando una conciencia real sobre la mitigación de impactos ambientales en nuestra operación diaria.
                </p>
              </div>
            </Reveal>

            {/* Comercio y Mercadeo */}
            <Reveal delay={0.3}>
              <div className="group h-full rounded-[2.5rem] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-gold/30">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    <ArrowLeftRight className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-montserrat)' }}>Comercio y Mercadeo</h3>
                </div>
                <p className="text-muted-foreground font-medium dark:font-light leading-relaxed">
                  Comercializamos los minerales con entidades legales a nivel nacional e internacional. Además, importamos insumos, tecnología y equipos avanzados, creando centros de acopio regionales que dinamizan la economía local.
                </p>
              </div>
            </Reveal>

            {/* Exportaciones */}
            <Reveal delay={0.4}>
              <div className="group h-full rounded-[2.5rem] bg-white/60 dark:bg-white/[0.03] backdrop-blur-xl border border-black/5 dark:border-white/10 p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/30">
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex size-16 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                    <Plane className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'var(--font-montserrat)' }}>Exportaciones (FAIRMINED)</h3>
                </div>
                <p className="text-muted-foreground font-medium dark:font-light leading-relaxed">
                  Desde 2014, gracias al apoyo de ARM (Alianza por la Minería Responsable), estamos certificados en Minería Justa FAIRMINED. Este sello nos permite exportar, acceder a precios mucho más justos y fortalecer nuestra estructura comunitaria.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>



      {/* Tabs Interactivos Dinámicos */}
      <ServicesTabs categories={categories} />
    </>
  )
}
