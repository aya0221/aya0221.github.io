import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="pt-32 pb-16">
      <div className="container space-y-32">
        {/* Hero Section */}
        <section className="max-w-4xl">
          <h1 className="text-6xl font-bold mb-8">
            Hi! I'm <span className="gradient-text">Aya Oshima</span>, an AI engineer based in New York.
          </h1>
          <p className="text-xl text-muted-foreground">
            I specialize in Machine Learning, Data Science, and Robotics. Currently pursuing my MS in Computer Science at NYU.
            Focused on creating innovative AI solutions and pushing the boundaries of technology.
          </p>
        </section>

        {/* Featured Work */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Selected Work</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Neural-Symbolic VQA",
                description: "Multi-Modal AI system integrating computer vision, NLP, and symbolic reasoning.",
                tags: ["CNN", "NLP", "PyTorch", "Computer Vision"],
                link: "/work/neural-symbolic-vqa"
              },
              {
                title: "Object Tracking Under Occlusions",
                description: "CNN-based object detection with Kalman filter prediction for tracking obscured objects.",
                tags: ["CNN", "Computer Vision", "Kalman Filter", "ResNet"],
                link: "/work/object-tracking"
              }
            ].map((project, index) => (
              <Link 
                key={index}
                href={project.link}
                className="group p-6 rounded-lg border bg-card hover-lift colorful-border"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <div className="space-y-12">
            {[
              {
                role: "AI Robotics Engineer",
                company: "Rhizomatiks Co., Ltd.",
                period: "2021 - 2022",
                description: "Implemented an end-to-end robot motion system for a large-scale exhibition, integrating voice recognition, speech synthesis, and motion control."
              },
              {
                role: "Research Assistant",
                company: "NYU Tandon School of Engineering",
                period: "2022 - Present",
                description: "Conducting research on dimensional reduction techniques applied to neuron data using TCA models."
              }
            ].map((job, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="text-primary">{job.company}</p>
                  </div>
                  <span className="text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        {/* <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Get in Touch</h2>
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Email", href: "mailto:ayaoshima.us@gmail.com" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/ayaoshima" },
              { label: "GitHub", href: "https://github.com/aya0221" }
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </section> */}
      </div>
    </div>
  )
}

