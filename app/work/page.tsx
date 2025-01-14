import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, FileText } from 'lucide-react'

const projects = [
  {
    title: "Neural-Symbolic VQA",
    description: "Multi-Modal AI system integrating computer vision, NLP, and symbolic reasoning. Achieved 88% accuracy in relational and 99% in non-relational questions.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["CNN", "NLP", "PyTorch", "Computer Vision"],
    link: "/work/neural-symbolic-vqa"
  },
  {
    title: "Object Tracking Under Occlusions",
    description: "Leveraged pre-trained CNN (ResNet) with MS COCO dataset for accurate tracking of obscured ball trajectories.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["CNN", "Computer Vision", "Kalman Filter", "ResNet"],
    link: "/work/object-tracking"
  },
  {
    title: "Dimensional Reduction for Neuron Data",
    description: "Developed and applied advanced statistical TCA model for reducing dimension and identifying distinct neural patterns.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Statistical Modeling", "TCA", "Python", "Data Analysis"],
    link: "https://aya0221.github.io/thesis-pdf/thesis_ayaoshima.pdf",
    isPdf: true
  }
]

export default function WorkPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-4xl space-y-16">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold gradient-text">Selected Work</h1>
          <p className="text-lg text-muted-foreground">
            A collection of projects that showcase my expertise in AI, machine learning, and robotics,
            from computer vision applications to dimensional reduction techniques.
          </p>
        </section>

        <section className="space-y-16">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target={project.isPdf ? "_blank" : undefined}
              rel={project.isPdf ? "noopener noreferrer" : undefined}
              className="group block space-y-8 hover-lift"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg colorful-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-2xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  {project.isPdf ? (
                    <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
                <p className="text-muted-foreground">{project.description}</p>
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
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

