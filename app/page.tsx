import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { Valores } from "@/components/sections/valores"
import { Catalogo } from "@/components/sections/catalogo"
import { Testimonios } from "@/components/sections/testimonios"
import { Cta } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Valores />
        <Catalogo />
        <Testimonios />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
