import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, FileText } from 'lucide-react'

const projects = [
  {
    title: "Dimensional Reduction for Neuron Data",
    description: "Explored dimensional reduction techniques (PCA, TCA) applied to large-scale neural datasets. Conducted analysis on complex neural patterns, providing insights into brain activity and computational neuroscience.",
    images: ["/images/thesis_demo.jpg", "/images/thesis_demo_paper1.jpg"],
    tags: ["Statistical Modeling", "PCA", "TCA", "Computational Neuroscience", "Data Analysis", "Dimension Reduction", "Matlab", "Python"],
    link: "https://aya0221.github.io/thesis-pdf/thesis_ayaoshima.pdf",
    isPdf: true,
  },
  {
    title: "Neural-Symbolic VQA",
    description: "Designed a multi-modal AI system integrating computer vision, NLP, and symbolic reasoning to enhance visual question answering on the Sort-of-CLEVR dataset. Achieved high accuracy in both relational and non-relational questions.",
    images: ["/images/vqa_demophoto.jpg", "/images/vqa_techphoto.jpg"],
    tags: ["Multi-Modal", "Computer Vision", "CNN", "NLP", "PyTorch", "Symbolic Reasoning", "Python"],
    link: "https://github.com/aya0221/Neural-Symbolic-VQA-Sort-of-CLEVR",
  },
  {
    title: "Object Tracking Under Occlusions",
    description: "Built a robust object tracking system combining CNN-based detection and Kalman filters to predict and track occluded objects effectively. Developed using ResNet for feature extraction, enabling accurate tracking under challenging conditions.",
    images: ["/images/ballpic.jpg", "/images/objDetection_ballpic.jpg"],
    tags: ["Mathematical Modeling", "Kalman Filter", "Object Tracking", "CNN", "ResNet", "Python"],
    link: "https://github.com/aya0221/Object-Tracking-Under-Occlusions",
  },
]

export default function WorkPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-4xl space-y-16">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold gradient-text">Aya's Projects</h1>
          <p className="text-lg text-muted-foreground">
            AI / Machine Mearning / Computational Neuroscience
          </p>
        </section>

        <section className="space-y-16">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-lg border bg-card hover-lift colorful-border flex flex-col md:flex-row gap-4"
            >
              {/* Left Half: Text */}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  {project.isPdf ? (
                    <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  )}
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
              </div>

              {/* Right Half: Images */}
              <div className="flex flex-col flex-1 gap-4">
                {project.images.map((image, imgIndex) => (
                  <Image
                    key={imgIndex}
                    src={image}
                    alt={`${project.title} Image ${imgIndex + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                ))}
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}
