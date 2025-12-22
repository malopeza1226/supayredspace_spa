import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-mono text-primary tracking-wider uppercase">Offensive Security Village</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                SUPAY RED SPACE
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                {
                  "A global community of offensive security practitioners, researchers, and enthusiasts. Inspired by the power of Supay and the tradition of Diablada."
                }
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-base">
                JOIN THE VILLAGE
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                UPCOMING EVENTS
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Talks & Workshops</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>CTF Competitions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Conferences</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-primary/10 rounded-lg blur-3xl" />
              <img
                src="/diablada-devil-mask-in-red-and-black--traditional-.jpg"
                alt="SUPAY Devil Mask"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8" />
      </a>
    </section>
  )
}
