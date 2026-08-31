import type { Metadata } from "next"
import { Reveal } from "@/components/shared/reveal"
import { ShieldCheck, Scale, Leaf, Lightbulb, Users, Globe2 } from "lucide-react"
import { FundamentalsTabs } from "@/components/nosotros/fundamentals-tabs"

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la historia, misión, visión y valores de Coodmilla, cooperativa de minería responsable en La Llanada, Nariño.",
  alternates: { canonical: "/nosotros" },
  openGraph: {
    title: "Nosotros — Coodmilla",
    description: "Historia, misión, visión y valores de Coodmilla.",
  },
}

const valores = [
  { icon: ShieldCheck, title: "Seguridad", desc: "La vida y la integridad ante todo." },
  { icon: Scale, title: "Integridad", desc: "Transparencia y rectitud en cada paso." },
  { icon: Leaf, title: "Respeto", desc: "Cuidado absoluto por nuestro entorno." },
  { icon: Lightbulb, title: "Innovación", desc: "Búsqueda constante de nuevas tecnologías." },
  { icon: Users, title: "Equipo", desc: "Colaboración para alcanzar grandes metas." },
  { icon: Globe2, title: "Compromiso", desc: "Desarrollo de las regiones donde operamos." },
]

const structure = [
  { name: "Roberto Carlos Otero R.", role: "Presidente - Consejo de Administración", initials: "RO" },
  { name: "José Bernardo Yela F.", role: "Vicepresidente - Consejo de Administración", initials: "JY" },
  { name: "Narcisa De Jesús Yela Y.", role: "Miembro Principal - Consejo de Adm.", initials: "NY" },
  { name: "Milton Santander Morillo", role: "Miembro Principal - Consejo de Adm.", initials: "MS" },
  { name: "Óscar Diego Arciniegas Y.", role: "Miembro Principal - Consejo de Adm.", initials: "OA" },

  { name: "Sary Toro", role: "Presidenta - Junta de Vigilancia", initials: "ST" },
  { name: "Maryuri Edith Riascos", role: "Secretaria - Junta de Vigilancia", initials: "MR" },
  { name: "Jesid Romel Rosero", role: "Miembro - Junta de Vigilancia", initials: "JR" },
  { name: "Ferney Portillo", role: "Miembro - Junta de Vigilancia", initials: "FP" },
  { name: "Fredy Alvarez", role: "Miembro - Junta de Vigilancia", initials: "FA" },
  { name: "Alejandro Montenegro", role: "Miembro - Junta de Vigilancia", initials: "AM" },

  { name: "Edy Yoli Morales M.", role: "Revisor Fiscal", initials: "EM" },
  { name: "Guillermo Andrés Riascos M.", role: "Gerente", initials: "GR" },
]

const timeline = [
  { year: "Orígenes", event: "Hablar de historia en el municipio de La Llanada, Nariño, nos conduce inevitablemente a hablar de minería, y hablar de minería en la tierra de los Abades, nos lleva por esa misma vía de lo inexorable, a hablar de la Cooperativa del Distrito Minero de La Llanada. A lo largo de su historia cuenta con cuatro títulos de concesión minera otorgados por la Agencia Nacional de Minería; con ellos ha impulsado la economía local y, mediante regalías, ha aportado al desarrollo del departamento." },
  { year: "Años 60", event: "Tras años de extracción foránea y el retiro de compañías extranjeras, movidos por el interés de desarrollar la minería bajo su lengua vernácula, serían los propios hijos de esta región quienes comenzarían a extraer de las venas de este terruño el oro, dispuestos a forjar un mejor porvenir." },
  { year: "Febrero 1977", event: "Luego de persistir en la convocatoria mediante el bando tradicional, el 28 de febrero de 1977, la asamblea de 59 mineros suscribió el acta de constitución de la organización que hoy es su prolongación en el tiempo: la Cooperativa del Distrito Minero de La Llanada. La constitución formal de la organización se concretó el 30 de mayo del mismo año." },
  { year: "Actualidad", event: "Conmemorando más de 40 años de gesta fundadora, Coodmilla ha contribuido al desarrollo de un pueblo que ha hecho del oro no solo un medio para procurarse existencia, sino un elemento moldeador de su identidad cultural y de una minería responsable sin sustancias contaminantes." },
]

const fundadores = [
  "Alberto Benavides", "Alberto Montenegro", "Alfredo López", "Andrés Montenegro", "Ángel Yela", "Antonio Matabajoy", "Antonio Misael Matabajoy", "Augusto Román López B.", "Carlos Guerrón", "Carmelo Morales", "Cornelio Erazo", "Daniel Fidencio Matabajoy", "Diógenes Germán Yela", "Diógenes Jesús Otero", "Domingo Álvarez", "Edgar Emilio Rosero", "Édgar Rojas", "Emilio Otero", "Emilio Yela Riascos", "Floriberto Morales", "Francisco Morales", "Gerardo Cadena", "Guillermo Riascos", "Hernando Rojas", "Hilario Rosero", "Hugo Hernando Guerrero López", "Jesús Belio Yela", "Jose Arquimedes Toro Rosero", "José Camilo Yela G.", "José Elías Rosero", "José Francisco Otero", "José Heriberto Yela Toro", "José Leovigildo Castellano", "José Nazario Franco Guerrero", "José Ramón Castellano", "José Reinaldo Guerrón", "José Teo Riascos", "José Vicente Morales", "José Zenón Otero Castellano", "Juan Yela", "Libardo Arciniegas", "Libardo Rosero", "Lisandro Figueroa", "Luis Efraín Castellano", "Marco Tulio Montenegro", "Marcos Guillermo Cuatín A.", "Milquías Horacio Rosero", "Narciso Rosero", "Nemesio Yela", "Nestor Rosendo Yela", "Néstor Yela Guerrero", "Parmenio Yela", "Pedro Rosero Mora", "Ramiro Campiño", "Riges Robustiano Rosero", "Rodrigo Hernando Guerrón", "Santiago Humberto Campiño", "Serbio Guerrón", "Tomás Alfonso Morales Apráez", "Udilberto Montenegro"
]

const asociados = [
  "ACOSTA RODRIGUEZ MARIA ISABETH", "ALMEIDA BENAVIDES YOHON DEIRO", "ALVAREZ ALVAREZ ALVARO", "ALVAREZ ALVAREZ ANDERSON JORGE", "ALVAREZ ALVAREZ JESUS SILVIO", "ALVAREZ AYALA DANNER ROBIN", "ALVAREZ GUERRERO HERMINSUL JAVIER", "ALVAREZ GUERRERO JAIME ROBERTO", "ALVAREZ GUERRERO MARTIN BERNARDO", "ALVAREZ GUERRERO ROSALBA", "ALVAREZ GUEVARA FREDY HERMINSUL", "ALVAREZ LEITON NELSON JAIRO", "ALVAREZ LEYTON LUCY MAGALY", "ALVAREZ LEYTON RIKI ESTIVEN", "ALVAREZ MORA DIANA ELIZABETH", "ALVAREZ MORALES MOISES", "ALVAREZ NOGUERA JORGE TOMAS", "ALVAREZ RODRIGUEZ SEGUNDO ALFONSO", "ALVAREZ SOLARTE JOSE ROBERTO", "ALVAREZ SPIN JHON EVER", "ALVAREZ YELA YONY JUVENAL", "ARCINIEGAS YELA OSCAR DIEGO", "BACA ERAZO JAIRO ALBERTO", "BRAVO CEBALLOS OSCAR BAYARDO", "BRAVO LOPEZ SEGUNDO FLORIBERTO", "BRAVO RUBIAN ALFREDO", "CADENA AVAREZ KELVIN HERALDO", "CADENA CANAMEJOY HECTOR GERARDO", "CADENA CANAMEJOY JOSE JUSTO ZACARIAS", "CADENA DELGADO PEDRO ERALDO", "CADENA MORA PABLO LIBARDO", "CADENA MORALES PABLO EDISON", "CADENA YELA JARO HUMBERTO", "CAICEDO ROBER NORBEY", "CALPA LARA ERMES IGNACIO", "CAMPIÑO GUERRERO JESUS ALFREDO", "CAMPIÑO GUERRERO LUIS HUMBERTO", "CASTELLANO CADENA JOSE JONY", "CASTELLANO CADENA LEANDRO ALDEMAR", "CASTELLANO PANTOJA LEONARDO FABRICIO", "CHAMORRO QUENORAN SEBASTIAN ALFREDO", "CHAMORRO ROSERO EVER ELIEL", "CHAPARPUED BERNAL JOSE SANTIAGO", "CUAICHAR EMILIANO", "CUATIN ALVAREZ WEIMAR LEONARDO", "CUATIN ZAMBRANO DORIS AMPARO", "ERAZO JOSE LUIS", "ERAZO LOPEZ EDWIN JAIR", "ERAZO LOPEZ OVEIMAR HERNAN", "ESCOBAR SALAZAR JOSE RAMIRO", "GETIAL ACOSTA MARCO HARLEY", "GETIAL GETIAL MARCO TULIO", "GOMEZ JOSE MAXIMINO", "GOMEZ PORTILLO JACKSON STEVEN", "GOYES RIVERA MANUEL JESUS", "GUERRERO MATAVAJOY HUGO ALFONSO", "GUERRERO MONTENEGRO DIOGENES MARIO", "GUERRERO MORILLO HARBI DENNIS", "GUERRERO MORILLO PAULO VLADIMIR", "GUERRERO SOLARTE OTONIEL FABIO", "GUERRON CAMPIÑO CARLOS ARTURO", "GUERRON VALLEJO JAIME", "LEITON BENAVIDES JESUS ERNESTO", "LOPEZ NITO ARTURO", "MAYA GUARNICA JOSE ROMAN", "MELO ALVAREZ ROBERTO", "MELO MORALES JONAS HILARIO", "MELO RODRIGUEZ EDWIN EMIRO", "MENESSES RODRIGUEZ JOHANA PATRICIA", "MENESSES ZAMBRANO AURA MERY", "MENESSES ZAMBRANO ERNESTO WILSON", "MERA CADENA LAUREANO BENITO", "MERA CADENA LUIS ANTONIO", "MERA FUERTES EDISON LEANDRO", "MONTENEGRO CADENA MARCO TULIO", "MONTENEGRO CADENA MARIELA ALICIA", "MONTENEGRO CADENA UDILBERTO", "MONTENEGRO ROJAS WISTON ALEJANDRO", "MORA ANA MILENA", "MORA JESUS ALEJANDRO", "MORA TAPIA JOSE HERNANDO", "MORA TES ANDREA LUCIA", "MORA YELA JESUS LIBARDO", "MORALES ALBA GREIS", "MORALES MORALES DARIO ALEJANDRO", "MORALES RODRIGUEZ OSCAR EDUARDO", "MORAN FIGUEROA DIEGO JESUS", "NARVAEZ CUATIN CARLOS ALBERTO", "OJEDA HERMAN PORFIRIO", "OLIVA ALVAREZ CARLOS ARNULFO", "ORDOÑEZ CORAL DAIRA YAMILE", "OTERO BENAVIDES OLMES YONE", "OTERO MELO NELSON RUBIAN", "OTERO RODRIGUEZ ROBERTO CARLOS", "OTERO ROSERO YERAL CAMILO", "PANTOJA BASTIDAS MIGUEL ANGEL", "PANTOJA PORTILLA ALFONSO MARIA", "PATIÑO TORO SIGIFREDO FERNANDO", "PAZOS VILLAREAL NAZLY SULY", "PAZOS YELA FLAVIO ORLANDO", "PEÑA ALVAREZ GREGORIO", "PEREZ MORALES DIEGO LUIS", "PEREZ MORALES JESUS ENRIQUES", "PORTILLO DIAZ ROBER ERNELIS", "PORTILLO TORO PEDRO ALIRIO", "PORTILLO TORO VILA KATHERINE", "RIASCOS CRIOLLO MARYURI EDITH", "RIASCOS MORALES JESÚS RICHAR", "RIASCOS PORTILLO EDIE ALEXANDER", "RIASCOS PORTILLO ZOILA MIREYA", "RIASCOS ROSERO EMANUEL STIVEN", "RIASCOS ROSERO JAIME FRANCISCO", "RIASCOS SANTANDER ALBERTO ELISERIO", "RODRIGUEZ BENAVIDES ABSALON RIGOBERTO", "RODRIGUEZ BENAVIDES SIXTO EFREN", "RODRIGUEZ LUCY ARGENY", "RODRIGUEZ REVELO MARCO POLO", "RODRIGUEZ ROSALES HONORIO SERAFIN", "RODRIGUEZ YELA LUIS ERNESTO", "RODRIGUEZ YELA MAURICIO", "RODRIGUEZ ZAMBRANO JHON CARLOS", "ROSALES NELSON EDUARDO", "ROSERO ALFREDO GUILMER", "RODRIGUEZ BENAVIDES JAMES RUBIAN", "ROSERO CAICEDO ANCELMO EVELIO", "ROSERO CAMPIÑO FABIAN MAURICIO", "ROSERO CAMPIÑO LEONARDO FAVIO", "ROSERO CUATIN JOHAN SEBASTIAN", "ROSERO CUATIN MARCOS JAVIER", "ROSERO CUATUSMAL OLVER HAMILTON", "ROSERO DE RIASCOS ARAMIS", "ROSERO MORA CELIMO GONZALO", "ROSERO MORA GLADIS ROCIO", "ROSERO MORA GLORIA RUBIELA", "ROSERO MORALES JAVIER IVAN", "ROSERO YELA BRANDON ALEXIS", "ROSERO YELA JESID ROMEL", "ROSERO YELA MANUEL HERNAN", "ROSERO ZAMBRANO HERMES ADRIANO", "ROSERO ZAMBRANO MIYER FERNANDO", "RUIZ GETIAL JOSE ALBERTO", "SALAS GUERRON CARLOS EVER", "SANTANDER MORILLO MILTON", "SOLARTE JESUS ALFREDO", "SOLARTE MELO FERNANDO SEBASTIAN", "SOLARTE SOLARTE JOSE AQUILEO", "TAPIA ALDERETE MARIA CENELIA", "TORO CAICEDO MARIA DEL SOCORRO", "TORO GUERRON MARCIAL GUSTAVO", "TORO GUERRON SARY JAMILE", "VALLEJOS MORA EUDORO BENITO", "VALLEJOS YELA ALFREDO IVAN", "VILLOTA YELA PARMENIO ERMELIS", "YELA BELALCAZAR EMILCEN ADRIANA", "YELA DIAZ DIOGENES GERMAN", "YELA DIAZ RICHAR MAURICIO", "YELA FONTECHA JAIME HIGINIO", "YELA FONTECHA JOSE BERNARDO", "YELA OTERO CRISTIAN DAVID", "YELA PANTOJA CARLOS ARTURO", "YELA PANTOJA LUCY DEL CARMEN", "YELA ROJAS AGUSTIN LIBARDO", "YELA ROJAS ERIBERTO", "YELA ROMO LIBARDO ENRIQUE", "YELA ROSERO JHONNATHAN JAIR", "YELA VALLEJOS GILBERTO", "YELA YELA JOSE DIOGENES", "YELA YELA NARCISA DE JESUS", "ZAMBRANO PORTILLO ANTIDIO", "ZAMBRANO YELA YEFERSON"
]

export default function NosotrosPage() {
  return (
    <>
      {/* Bespoke Header for Nosotros */}
      <section className="relative overflow-hidden bg-transparent px-6 pt-32 pb-20 md:px-10 md:pb-32 md:pt-48">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-green-500/10 to-gold/20 blur-[120px] pointer-events-none dark:from-green-500/20 dark:to-gold/20" />
        <div className="absolute top-40 left-0 -ml-40 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[100px] pointer-events-none" />

        <div className="container relative z-10">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
              <div className="max-w-4xl relative">
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-[2px] w-12 bg-gradient-to-r from-gold to-transparent" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-gold">Nosotros</span>
                </div>
                <h1 className="text-5xl font-extrabold leading-[1.1] text-foreground md:text-6xl lg:text-7xl xl:text-8xl tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
                  Liderando la minería <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-400 to-yellow-600 dark:to-yellow-200 drop-shadow-sm">responsable</span>
                </h1>
              </div>

              <div className="md:w-1/3 md:pb-6 relative before:absolute before:inset-y-0 before:left-0 before:w-1 before:bg-gradient-to-b before:from-gold before:to-transparent pl-8">
                <p className="text-lg leading-relaxed text-muted-foreground md:text-xl font-medium dark:font-light text-justify">
                  Coodmilla nace de la convicción de que la minería puede ser un motor de desarrollo sostenible. Con más de cuatro décadas de experiencia, hemos construido un modelo que integra innovación tecnológica, responsabilidad ambiental y relación comunitaria.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative overflow-hidden bg-transparent py-24 md:py-40">
        <div className="container relative z-10 space-y-32">

          {/* Misión y Visión (Fundamentos) */}
          <div>
            <div className="text-center mb-16">
              <span className="mb-4 inline-block text-xs font-black uppercase tracking-[0.2em] text-gold">Nuestros Pilares</span>
              <h2 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Fundamentos <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 dark:from-green-light dark:to-green drop-shadow-sm">Corporativos</span>
              </h2>
            </div>
            
            <FundamentalsTabs />
          </div>

          {/* Valores (Divididos en tarjetas más pequeñas) */}
          <div>
            <div className="text-center mb-20">
              <span className="mb-4 inline-block text-xs font-black uppercase tracking-[0.2em] text-green-700 dark:text-green-light">Lo que nos guía</span>
              <h2 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 dark:from-green-light dark:to-green drop-shadow-sm">Valores</span>
              </h2>
            </div>
            
            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative">
              {/* Background ambient light for the grid */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-r from-green-500/10 via-gold/10 to-green-500/10 blur-[100px] pointer-events-none rounded-full" />

              {valores.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.05}>
                  <div className="group relative h-full overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/[0.03] p-8 transition-all duration-700 hover:-translate-y-2 hover:bg-white dark:hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(74,222,128,0.12)] backdrop-blur-xl z-10">
                    
                    {/* Glowing Accent Line on Hover */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-600 dark:from-green-light dark:to-green scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

                    <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-green-500/10 dark:bg-green-light/10 blur-[50px] transition-opacity duration-700 group-hover:opacity-100 opacity-0 pointer-events-none" />

                    <div className="flex flex-col items-start gap-6 relative z-10">
                      <div className="flex size-16 shrink-0 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-950/80 border border-green-200/50 dark:border-white/5 transition-transform duration-700 group-hover:-translate-y-2 group-hover:scale-110 shadow-sm shadow-green-500/10 dark:shadow-inner dark:shadow-black/50">
                        <v.icon className="w-8 h-8 text-green-700 dark:text-green-light drop-shadow-md" strokeWidth={1.5} />
                      </div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-foreground tracking-wide mb-3 flex items-center gap-3" style={{ fontFamily: 'var(--font-montserrat)' }}>
                          {v.title}
                          <span className="opacity-0 -translate-x-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 w-8 h-[2px] bg-green-600 dark:bg-green-light inline-block rounded-full"></span>
                        </h3>
                        <p className="text-base leading-relaxed text-muted-foreground font-medium dark:font-light">{v.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative bg-transparent py-24 md:py-40 overflow-hidden border-y border-black/5 dark:border-white/5">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-4xl h-full rounded-full bg-gold/5 blur-[150px] pointer-events-none" />
        
        <div className="container relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <Reveal>
              <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-xs font-black uppercase tracking-[0.2em] text-gold w-max shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold"></span>
                </span>
                Trayectoria
              </span>
              <h2 className="text-4xl font-extrabold leading-[1.1] text-foreground md:text-5xl lg:text-6xl mt-4 tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
                Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-yellow-600 dark:to-yellow-200 drop-shadow-sm">Historia</span>
              </h2>
              <p className="mt-8 text-lg md:text-xl leading-relaxed text-muted-foreground font-medium dark:font-light">
                La actividad minera en la región data de épocas ancestrales, organizándose para defender su territorio, formalizar su labor y acceder a mejores oportunidades.
              </p>
            </Reveal>
          </div>

          <div className="relative">
            {/* Glowing Center Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[4px] md:-translate-x-1/2 bg-gradient-to-b from-transparent via-gold/50 to-transparent rounded-full opacity-60">
              <div className="absolute top-0 bottom-0 left-0 w-full bg-gold blur-[8px] opacity-40"></div>
            </div>

            <div className="space-y-16 md:space-y-24">
              {timeline.map((t, index) => (
                <Reveal key={t.year} delay={index * 0.1}>
                  <div className={`relative flex items-center justify-between md:justify-normal group ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>

                    {/* Timeline Node (Dot) */}
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border-4 border-background bg-gradient-to-br from-gold to-yellow-600 shadow-[0_0_30px_rgba(232,151,33,0.6)] z-20 transition-transform duration-700 group-hover:scale-125 group-hover:shadow-[0_0_40px_rgba(232,151,33,0.8)]">
                      <span className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white shadow-inner animate-pulse"></span>
                    </div>

                    {/* Connector Line (visible on desktop) */}
                    <div className={`hidden md:block absolute top-1/2 w-[calc(50%-2rem)] h-[2px] bg-gradient-to-r ${index % 2 === 0 ? 'left-1/2 from-gold/40 to-transparent' : 'right-1/2 from-transparent to-gold/40'} opacity-50 z-0`}></div>

                    {/* Content Card */}
                    <div className={`w-[calc(100%-3rem)] ml-12 md:ml-0 md:w-[calc(50%-4rem)] relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <div className="relative overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/10 bg-white/60 dark:bg-white/[0.02] p-8 md:p-10 backdrop-blur-xl transition-all duration-500 group-hover:border-gold/50 group-hover:bg-white dark:group-hover:bg-white/[0.05] group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(232,151,33,0.15)]">
                        <div className={`absolute ${index % 2 === 0 ? '-right-10' : '-left-10'} -top-10 h-32 w-32 rounded-full bg-gold/10 blur-[40px] transition-opacity duration-500 group-hover:opacity-100 opacity-0 pointer-events-none`} />
                        
                        <div className="flex flex-col mb-4">
                          <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-600 text-4xl mb-2 relative z-10 drop-shadow-sm" style={{ fontFamily: 'var(--font-montserrat)' }}>{t.year}</span>
                          <div className="w-12 h-1 bg-gold/50 rounded-full" />
                        </div>
                        
                        <p className="text-base md:text-lg text-muted-foreground font-medium dark:font-light leading-relaxed relative z-10 text-justify">{t.event}</p>
                      </div>
                    </div>

                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative overflow-hidden bg-transparent py-24 md:py-40">
        <div className="container relative z-10">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <span className="mb-4 inline-block text-xs font-black uppercase tracking-[0.2em] text-green-700 dark:text-green-light">Organización</span>
            <h2 className="text-4xl font-extrabold leading-[1.1] text-foreground md:text-5xl lg:text-6xl tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Estructura <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-yellow-600 dark:to-yellow-200 drop-shadow-sm">Organizacional</span><br className="hidden md:block"/> y Gobierno Corporativo
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground font-medium dark:font-light">
              Al ser una organización de Economía Solidaria, su estructura organizativa está fundamentada en los Principios del Cooperativismo y en la normativa colombiana (Ley 79 de 1988 y Ley 454 de 1998). COODMILLA nació del liderazgo de hombres y mujeres visionarios de La Llanada que entendieron que la unión y el trabajo cooperativo eran el único camino.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {structure.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-[2rem] border border-black/5 dark:border-white/10 bg-white/40 dark:bg-white/[0.03] p-8 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-green-500/30 hover:bg-white dark:hover:bg-white/[0.06] hover:shadow-[0_20px_40px_rgba(74,222,128,0.1)]">
                  <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-green-500/10 blur-[40px] transition-opacity duration-500 group-hover:opacity-100 opacity-0 pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-6 flex size-24 items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/60 dark:to-green-950/80 border border-green-200/50 dark:border-white/5 text-3xl font-black text-green-800 dark:text-gold shadow-sm dark:shadow-inner dark:shadow-black/50 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                      {m.initials}
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-3 tracking-wide leading-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>{m.name}</h4>
                    <div className="w-8 h-[2px] bg-gold/50 mb-3 rounded-full" />
                    <p className="text-xs font-bold uppercase tracking-widest text-green-700 dark:text-green-light/80">{m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Retos y Contexto Section */}
      <section className="relative overflow-hidden bg-transparent py-24 md:py-32 border-t border-black/5 dark:border-white/5">
        <div className="container relative z-10">
          <div className="relative rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/10 bg-gradient-to-br from-white/80 to-white/40 dark:from-white/5 dark:to-transparent backdrop-blur-xl p-10 md:p-16 text-center max-w-5xl mx-auto shadow-[0_20px_60px_rgba(0,0,0,0.05)] dark:shadow-none">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
            <span className="mb-6 inline-block text-xs font-black uppercase tracking-[0.2em] text-gold">El Desafío</span>
            <h2 className="text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl tracking-tight mb-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Contexto <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-yellow-600 dark:to-yellow-200 drop-shadow-sm">Regulatorio</span>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-medium dark:font-light max-w-3xl mx-auto text-justify">
              Debido a la crisis de la minería ilegal y el riesgo del lavado de activos, las normas colombianas son cada vez más exigentes. En este asunto COODMILLA responde a innumerables requerimientos de los entes de control; cada requisito representa un reto que nos motiva a fortalecer nuestros procesos. Los mineros artesanales y de pequeña escala avanzan día a día en el camino de la Minería Bien Hecha, y cada exigencia nos impulsa a cumplir con mayor rigor y compromiso.
            </p>
          </div>
        </div>
      </section>

      {/* Fundadores Section */}
      <section className="relative overflow-hidden bg-transparent py-24 md:py-32 border-t border-black/5 dark:border-white/5">
        <div className="container relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <span className="mb-4 inline-block text-xs font-black uppercase tracking-[0.2em] text-green-700 dark:text-green-light">Nuestro Origen</span>
            <h2 className="text-4xl font-extrabold leading-[1.1] text-foreground md:text-5xl lg:text-6xl tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Fundadores de <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800 dark:from-green-light dark:to-green drop-shadow-sm">1977</span>
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground font-medium dark:font-light">
              Agradecimientos por sus servicios y compromisos con la comunidad minera. La cooperativa se fundó bajo la premisa de organizar a los mineros artesanales.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto">
            {fundadores.map((nombre, idx) => (
              <span key={idx} className="px-4 py-2 text-sm font-medium bg-white/60 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-foreground/80 dark:text-white/80 hover:bg-gold hover:text-white hover:border-gold hover:scale-105 transition-all duration-300 cursor-default shadow-sm">
                {nombre}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Asociados Activos Section */}
      <section className="relative overflow-hidden bg-transparent py-24 md:py-32 border-t border-black/5 dark:border-white/5">
        <div className="container relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold leading-[1.1] text-foreground md:text-5xl lg:text-6xl tracking-tight" style={{ fontFamily: 'var(--font-montserrat)' }}>
              Nuestra <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-yellow-600 dark:to-yellow-200 drop-shadow-sm">Gente</span>
            </h2>
          </div>
          <details className="group rounded-[2rem] border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] dark:shadow-none [&_summary::-webkit-details-marker]:hidden overflow-hidden transition-all duration-500">
            <summary className="flex cursor-pointer items-center justify-between p-8 md:p-10 font-bold text-foreground bg-gradient-to-r hover:from-white hover:to-gray-50 dark:hover:from-white/[0.08] dark:hover:to-transparent transition-colors">
              <span className="text-xl md:text-2xl" style={{ fontFamily: 'var(--font-montserrat)' }}>Asociados Activos ({asociados.length})</span>
              <span className="shrink-0 transition-transform duration-500 group-open:-rotate-180 bg-gold/10 text-gold p-3 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="p-8 md:p-10 pt-0 border-t border-black/5 dark:border-white/10 mt-2 bg-white/40 dark:bg-transparent">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 mt-6">
                {asociados.map((nombre, idx) => (
                  <div key={idx} className="text-sm font-medium text-muted-foreground flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                    {nombre}
                  </div>
                ))}
              </div>
            </div>
          </details>
        </div>
      </section>
    </>
  )
}
