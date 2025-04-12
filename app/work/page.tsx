import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, FileText } from 'lucide-react'

const projects = [
  {
    title: "Tensor Component Analysis (TCA) for Neural Plasticity in Maternal Learning",
    description: (
      <ul className="list-disc pl-5">
        <li>Developed and implemented <strong>statistical modeling</strong> method <strong>TCA</strong> to decompose high-dimensional neuron-firing data from the paraventricular nucleus (PVN) of mice, identifying structured neural patterns underlying maternal behavior learning</li>
        <li>Discovered that active maternal learning strengthens <strong>neural synchrony</strong> and <strong>precise temporal firing</strong>, demonstrating that <strong>oxytocin-related PVN circuits</strong> drive adaptive plasticity in social learning</li>
      </ul>
    ),
    images: ["/images/thesis_demo_paper1.jpg", "/images/thesis_demo.jpg"],
    tags: ["Statistical Modeling", "PCA", "TCA", "Computational Neuroscience", "Data Analysis", "Dimension Reduction", "Matlab", "Python"],
    link: "https://aya0221.github.io/thesis-pdf/thesis_ayaoshima.pdf",
    isPdf: true,
  },
  {
    title: "Voice AI Workout Assistant: Real-Time NLP System with ASR, NLU, and Search",
    description: (
      <ul className="list-disc pl-5">
        <li>Built a <strong>production-grade voice AI assistant</strong> that transcribes, parses, and recommends personalized workouts from natural voice queries.</li>
        <li>Fine-tuned a <strong>DistilBERT</strong>-based intent classifier and developed <strong>hybrid NER</strong> using <strong>spaCy rules</strong> and <strong>fallback logic</strong>.</li>
        <li>Designed <strong>OpenSearch</strong> query boosting and built a <strong>React + FastAPI</strong> full-stack interface for real-time UX.</li>
      </ul>
    ),
    video: "https://youtu.be/GDH2nT_EzUI",
    tags: [
      "Whisper", "ASR", "DistilBERT", "Intent Classification",
      "NER", "spaCy", "OpenSearch", "FastAPI", "React", "Python"
    ],
    link: "https://github.com/aya0221/Voice-AI-Workout-Assistant",
  },
  {
    title: "Neural-Symbolic VQA: Multi-Modal AI with CNN, NLP, and Symbolic Reasoning",
    description: (
      <ul className="list-disc pl-5">
        <li>Developed a <strong>Neural-Symbolic VQA system</strong>, integrating <strong>computer vision (CNN)</strong>, <strong>NLP</strong>, and <strong>Symbolic Reasoning</strong>, trained and evaluated on the <strong>Sort-of-CLEVR dataset</strong>, which includes 10k images and 200k questions.</li>
        <li>Achieved accuracy of <strong>88%</strong> in relational and <strong>99%</strong> in non-relational questions.</li>
      </ul>
    ),
    images: ["/images/vqa_demophoto.jpg"],
    tags: ["Multi-Modal", "NLP", "Computer Vision", "CNN", "PyTorch", "Symbolic Reasoning", "Python"],
    link: "https://github.com/aya0221/Neural-Symbolic-VQA-Sort-of-CLEVR",
  },
  {
    title: "Object Tracking Under Occlusions: CNN Detection with Kalman Prediction",
    description: (
      <p>
        Leveraged a <strong>pre-trained CNN (ResNet)</strong>, combined with the <strong>MS COCO dataset</strong>, resulting in accurate tracking of <strong>obscured ball trajectories</strong>, integrating <strong>object detection</strong>, <strong>classification</strong>, and <strong>motion prediction using Kalman filter</strong>.
      </p>
    ),
    video: "https://youtu.be/JBDR8HqBnNg",
    tags: ["Mathematical Modeling", "Kalman Filter", "Object Tracking", "CNN", "ResNet", "Python"],
    link: "https://github.com/aya0221/Object-Tracking-Under-Occlusions",
  },
]


export default function WorkPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-4xl space-y-16">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold gradient-text">Machine Learning / Computational Neuroscience</h1>
          {/* <p className="text-lg text-muted-foreground">
            AI / Machine Mearning / Computational Neuroscience
          </p> */}
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

              {/* Right Half: Images or Video */}
              <div className="flex flex-col flex-1 gap-4">
                {((project.images) ? project.images : (project.video ? [project.video] : []))
                  .map((media, imgIndex) => {
                    if (
                      media.includes("youtube.com") ||
                      media.includes("youtu.be")
                    ) {
                      // Extract YouTube video ID from URL
                      const videoId =
                        media.split("v=")[1]?.split("&")[0] ||
                        media.split("/").pop();
                      const embedUrl = `https://www.youtube.com/embed/${videoId}`;
                      return (
                        <iframe
                          key={imgIndex}
                          src={embedUrl}
                          title={`${project.title} YouTube video`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full flex-1 rounded-lg shadow-md object-cover"
                        />
                      );
                    } else if (media.endsWith('.mp4')) {
                      return (
                        <video
                          key={imgIndex}
                          controls
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-auto rounded-lg shadow-md object-cover"
                          style={{ maxHeight: '400px' }}
                        >
                          <source src={media} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      );
                    } else {
                      return (
                        <Image
                          key={imgIndex}
                          src={media}
                          alt={`${project.title} Image ${imgIndex + 1}`}
                          width={800}
                          height={600}
                          className="w-full h-auto rounded-lg shadow-md"
                        />
                      );
                    }
                  })}
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}
