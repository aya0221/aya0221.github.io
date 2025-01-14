import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-4xl space-y-16">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            I'm always interested in hearing about new opportunities, collaborations,
            or just having a chat about technology and innovation.
          </p>
        </section>

        <section className="grid gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>your.email@example.com</span>
              </a>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/yourusername</span>
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/yourprofile</span>
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">Send a Message</h2>
            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  rows={4}
                />
              </div>
              <Button className="w-full">
                Send Message
                <ArrowUpRight className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

