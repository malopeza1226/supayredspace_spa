import { Card } from "@/components/ui/card"
import { Presentation, Wrench, Trophy, Users } from "lucide-react"

const features = [
  {
    icon: Presentation,
    title: "Expert Talks",
    description:
      "Learn from industry leaders and security researchers sharing cutting-edge offensive security techniques and methodologies.",
  },
  {
    icon: Wrench,
    title: "Hands-on Workshops",
    description:
      "Interactive sessions where you can practice real-world exploitation, pentesting, and red team operations.",
  },
  {
    icon: Trophy,
    title: "CTF Competitions",
    description: "Challenge yourself in capture-the-flag competitions designed to test your offensive security skills.",
  },
  {
    icon: Users,
    title: "Conferences",
    description: "Network with security professionals and build connections within the offensive security community.",
  },
]

export function Features() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            A comprehensive platform for offensive security enthusiasts to learn, compete, and grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="p-6 border-2 border-border hover:border-primary transition-all duration-300 bg-background hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Icon size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
