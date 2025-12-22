import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">About SUPAY RED SPACE</h2>

          <Card className="bg-card border-primary/20">
            <CardContent className="p-8 sm:p-12 space-y-6 text-left">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "SUPAY RED SPACE is a community initiative that focuses on offensive security, red teaming, penetration testing, exploit development, and adversary simulation. We bring together security researchers, ethical hackers, and cybersecurity professionals to share knowledge and advance the field."
                }
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {
                  "Our name draws inspiration from the Diablada, a traditional Andean dance featuring powerful devil masks, and Supay, the mythological deity of the underworld. Like the Diablada dancers who channel ancient power through their art, we channel expertise and innovation through offensive security."
                }
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {
                      "To create a space where offensive security practitioners can learn, collaborate, and push the boundaries of cybersecurity research."
                    }
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Our Values</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {
                      "Knowledge sharing, ethical practice, innovation, and community empowerment in the field of offensive security."
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
