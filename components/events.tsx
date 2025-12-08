import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

const events = [
  {
    title: "Advanced Exploitation Workshop",
    date: "March 15, 2025",
    time: "14:00 - 18:00",
    location: "Main Hall",
    type: "Workshop",
  },
  {
    title: "Red Team Operations Talk",
    date: "March 16, 2025",
    time: "10:00 - 11:30",
    location: "Conference Room A",
    type: "Talk",
  },
  {
    title: "SUPAY CTF Championship",
    date: "March 17, 2025",
    time: "09:00 - 21:00",
    location: "Competition Arena",
    type: "CTF",
  },
]

export function Events() {
  return (
    <section id="events" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Upcoming <span className="text-secondary">Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Join us for exciting offensive security events designed to challenge and inspire
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {events.map((event, index) => (
            <Card
              key={index}
              className="p-6 border-2 border-border hover:border-secondary transition-all duration-300 bg-card"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold bg-secondary/20 text-secondary">
                  {event.type}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground text-pretty">{event.title}</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={18} className="text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-primary" />
                  <span>{event.location}</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-primary-foreground">
                Register Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  )
}
