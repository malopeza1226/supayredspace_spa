import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="text-xl font-bold text-primary">SUPAY</div>
              <div className="text-xl font-bold text-secondary">RED SPACE</div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              An offensive security village inspired by Andean culture and mythology.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#events" className="text-muted-foreground hover:text-primary transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Join Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Subscribe to our newsletter for the latest events and updates.
            </p>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="bg-background border-border" />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 SUPAY RED SPACE. Inspired by Diablada and Supay mythology.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
