import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
              <span className="bg-gradient-to-r from-primary via-destructive to-secondary bg-clip-text text-transparent">
                SUPAY RED SPACE
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance">
              An offensive security village bringing together the hacking community through talks, workshops, CTF
              competitions, and conferences
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 group">
              Get Started
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              View Schedule
            </Button>
          </div>

          <div className="pt-12">
            <img
              src="/images/images.jpeg"
              alt="Supay Diablada Mask - Traditional Andean Devil Mask"
              className="w-full max-w-2xl mx-auto rounded-lg border-4 border-primary/30 shadow-2xl shadow-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
