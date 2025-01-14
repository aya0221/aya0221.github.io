import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Neural-Symbolic VQA",
    description: "Multi-Modal AI system integrating computer vision, NLP, and symbolic reasoning. Achieved 88% accuracy in relational and 99% in non-relational questions.",
    skills: ["CNN", "NLP", "PyTorch", "Computer Vision"],
    links: [
      { label: "GitHub", url: "https://github.com/aya0221/neural-symbolic-vqa", icon: Github },
      { label: "Demo", url: "https://demo.neural-symbolic-vqa.com", icon: ExternalLink },
    ],
  },
  {
    title: "Object Tracking Under Occlusions",
    description: "Leveraged pre-trained CNN (ResNet) with MS COCO dataset for accurate tracking of obscured ball trajectories.",
    skills: ["CNN", "Computer Vision", "Kalman Filter", "ResNet"],
    links: [
      { label: "GitHub", url: "https://github.com/aya0221/object-tracking", icon: Github },
      { label: "Demo", url: "https://demo.object-tracking.com", icon: ExternalLink },
    ],
  },
  {
    title: "Dimensional Reduction for Neuron Data",
    description: "Developed and applied advanced statistical TCA model for reducing dimension and identifying distinct neural patterns.",
    skills: ["Statistical Modeling", "TCA", "Python", "Data Analysis"],
    links: [
      { label: "GitHub", url: "https://github.com/aya0221/neuron-data-analysis", icon: Github },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 gradient-text">Projects</h1>
      <ul className="space-y-8">
        {projects.map((project, index) => (
          <li key={index} className="cute-border">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <p className="text-muted-foreground mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="space-x-4">
              {project.links.map((link, linkIndex) => {
                const Icon = link.icon
                return (
                  <Link
                    key={linkIndex}
                    href={link.url}
                    className="inline-flex items-center text-primary hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

