import { Sidebar } from "@/components/home/sidebar"
import { Hero } from "@/components/home/hero"
import { About } from "@/components/home/about"
import { Services } from "@/components/home/services"
import { Stats } from "@/components/home/stats"
import { Certificates } from "@/components/home/certificates"
import { Projects } from "@/components/home/projects"
import { News } from "@/components/home/news"
import { Contact } from "@/components/home/contact"

export default function HomePage() {
  return (
    <>
      <Sidebar />
      <Hero />
      <About />
      <Services />
      <Stats />
      <Certificates />
      <Projects />
      <News />
      <Contact />
    </>
  )
}
