import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Events } from "@/components/events"
import { Activities } from "@/components/activities"
import { Navigation } from "@/components/navigation"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Activities />
      <Events />
    </main>
  )
}
