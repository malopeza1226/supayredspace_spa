import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Events } from "@/components/events"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Events />
      <About />
      <Footer />
    </main>
  )
}
