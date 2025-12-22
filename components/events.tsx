import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

const events = [
  {
    name: "DEF CON 33",
    location: "Las Vegas Convention Center",
    date: "August 7-10, 2025",
    description:
      "Join us at DEF CON for hands-on workshops, CTF challenges, and networking with the global hacking community.",
    image: "/cybersecurity-conference-las-vegas-def-con-atmosph.jpg",
  },
  {
    name: "Black Hat USA 2025",
    location: "Mandalay Bay, Las Vegas",
    date: "August 2-7, 2025",
    description:
      "Advanced training sessions and briefings on the latest offensive security techniques and vulnerabilities.",
    image: "/black-hat-cybersecurity-conference-professional-se.jpg",
  },
  {
    name: "BSides Conference",
    location: "Various Locations",
    date: "Multiple dates in 2025",
    description:
      "Community-driven security conferences around the world featuring talks, workshops, and local networking.",
    image: "/cybersecurity-bsides-conference-community-event.jpg",
  },
]

export function Events() {
  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">Events in 2025</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            {"We are excited for 2025! Join us at the following conferences and look forward to seeing you there!"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden border-primary/20 hover:border-primary/40 transition-colors">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <img src={event.image || "/placeholder.svg"} alt={event.name} className="object-cover w-full h-full" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{event.name}</CardTitle>
                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{event.date}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">{event.description}</CardDescription>
                <Button variant="outline" className="w-full bg-transparent">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-primary/20 max-w-4xl mx-auto" id="contact">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Join SUPAY RED SPACE</CardTitle>
            <CardDescription className="text-base pt-2">
              {"Be part of our community and stay updated on upcoming events, workshops, and CTF competitions."}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base">
              Join Our Discord
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent">
              Subscribe to Newsletter
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
