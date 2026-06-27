import { Navbar } from "@/components/sections/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Stats } from "@/components/sections/stats"
import { Certificates } from "@/components/sections/certificates"
import { Projects } from "@/components/sections/projects"
import { News } from "@/components/sections/news"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Certificates />
      <Projects />
      <News />
      <Contact />
      <Footer />
    </>
  )
}
