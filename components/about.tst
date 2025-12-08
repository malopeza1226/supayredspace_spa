import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              About <span className="text-primary">SUPAY</span> <span className="text-secondary">RED SPACE</span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                SUPAY RED SPACE is an offensive security village inspired by the traditional Diablada dance and the
                mythological creature Supay from Andean culture.
              </p>
              <p>
                Just as the Diablada represents the eternal struggle between good and evil through vibrant performance,
                our village embodies the dual nature of security—understanding offensive techniques to build better
                defenses.
              </p>
              <p>
                We bring together security researchers, ethical hackers, and cybersecurity enthusiasts to share
                knowledge, compete in challenges, and advance the field of offensive security.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="p-6 border-2 border-primary/20 bg-background">
              <div className="text-6xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg text-foreground font-semibold">Community Members</div>
              <div className="text-muted-foreground">Active security professionals</div>
            </Card>
            <Card className="p-6 border-2 border-secondary/20 bg-background">
              <div className="text-6xl font-bold text-secondary mb-2">50+</div>
              <div className="text-lg text-foreground font-semibold">Events Hosted</div>
              <div className="text-muted-foreground">Talks, workshops, and competitions</div>
            </Card>
            <Card className="p-6 border-2 border-primary/20 bg-background">
              <div className="text-6xl font-bold text-primary mb-2">20+</div>
              <div className="text-lg text-foreground font-semibold">Industry Experts</div>
              <div className="text-muted-foreground">Leading security researchers</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
