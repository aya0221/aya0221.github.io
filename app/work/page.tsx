import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, FileText } from 'lucide-react'

const projects = [
  {
    title: "Tensor Decomposition and Information-Theoretic Modeling of High-Dimensional Neural Time Series",
    description: (
      <ul className="list-disc pl-5">
        <li>Processed PVN neural recordings by <strong>spike sorting</strong>, <strong>event-based binning</strong>, <strong>z-scoring</strong>, and construction of <strong>neuron-time-trial tensors</strong> capturing trial-aligned spike dynamics.</li>
        <li>Applied <strong>Tensor Component Analysis (TCA)</strong> with <strong>CP-ALS</strong> and <strong>Non-Negative CP</strong> decompositions to extract low-dimensional <strong>neuron</strong>, <strong>time</strong>, and <strong>trial factors</strong>, revealing engagement-modulated latent structures.</li>
        <li>Estimated effective connectivity using <strong>Transfer Entropy</strong> to model engagement-dependent changes in directional information flow between neurons.</li>
        <li>Found that <strong>active engagement</strong> significantly enhanced <strong>temporal coordination</strong>, <strong>neural synchrony</strong>, and <strong>trial-to-trial representational stability</strong> in PVN circuits.</li>
        <li>Built the full modeling pipeline in <strong>MATLAB</strong> and <strong>Python</strong>, integrating <strong>tensor optimization</strong>, <strong>statistical validation</strong>, <strong>smoothing</strong>, and <strong>high-dimensional time series processing</strong>.</li>
      </ul>
    ),
    images: ["/images/thesis_demo_paper1.jpg", "/images/thesis_demo.jpg"],
    tags: ["Tensor Decomposition", "TCA", "Time Series Modeling", "Dimensionality Reduction", "Transfer Entropy", "Spike Sorting", "Neural Data Analysis", "MATLAB", "Python", "Computational Modeling", "Statistical Modeling"],
    link: "https://aya0221.github.io/thesis-pdf/thesis_ayaoshima.pdf",
    isPdf: true,
  },
  {
    title: "Low-Latency Voice-to-NLP Recommender: Real-Time ASR, NLP/NLU, and Neural Search",
    description: (
      <ul className="list-disc pl-5">
        <li>Built a <strong>production-grade voice AI system</strong> that transcribes natural speech and delivers real-time personalized workout recommendations with <strong>&lt;950ms end-to-end latency</strong>.</li>
        <li>Fine-tuned <strong>DistilBERT</strong> achieving <strong>97.8% intent classification accuracy</strong> (top-1) and fine-tuned a <strong>RoBERTa-based spaCy Transformer NER model</strong> reaching <strong>98.5% macro-averaged F1-score</strong> on noisy ASR-transcribed input.</li>
        <li>Optimized <strong>OpenSearch retrieval</strong> with custom boosting strategies to maximize relevance and responsiveness for natural voice queries.</li>
        <li>Built a scalable, asynchronous <strong>FastAPI</strong> backend and a lightweight <strong>React</strong> frontend optimized for instant voice query interaction.</li>
        <li>Systematically tracked model training, evaluation metrics, and deployment iterations with <strong>MLflow</strong>, ensuring reproducibility and experiment management.</li>
      </ul>
    ),
    video: "https://www.youtube.com/embed/GDH2nT_EzUI",
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
          <h1 className="text-4xl font-bold gradient-text">	Works: Machine Learning and Neural Modeling</h1>
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
