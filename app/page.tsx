import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="pt-32 pb-16">
      <div className="container space-y-32">
        {/* Hero Section */}
        <section className="max-w-4xl">
          <h1 className="text-6xl font-bold mb-8">
            Hi! I'm <span className="gradient-text">Aya Oshima</span>, 
            an AI engineer based in New York.
          </h1>
          {/* <p className="text-xl text-muted-foreground">
            I specialize in Machine Learning, Data Science, and Robotics. Currently pursuing my MS in Computer Science at NYU.
            Focused on creating innovative AI solutions and pushing the boundaries of technology.
          </p> */}
        </section>
        {/* Featured Work */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Selected Work</h2>

          {/* Thesis Section */}
        <div className="p-6 rounded-lg border bg-card hover-lift colorful-border flex flex-col md:flex-row gap-4">
          {/* Left Half: Thesis Text */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">
                Thesis: Dimensional Reduction Techniques for Neural Data
              </h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <p className="text-muted-foreground mb-4">
              Explored dimensional reduction techniques (PCA, TCA) applied to large-scale neural datasets. 
              Conducted analysis on complex neural patterns, providing insights into brain activity and 
              computational neuroscience, under the guidance of Prof. Robert C. Froemke.
            </p>
            <div className="flex flex-wrap gap-2">
              {["PCA", "TCA", "Computational Neuroscience", "Data Analysis"].map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Half: Thesis Images */}
          <div className="flex flex-col flex-1 gap-4">
            <img
              src="/images/thesis_demo.jpg" // Replace with the actual path to your image
              alt="Thesis Image 1"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <img
              src="/images/thesis_demo_paper1.jpg" // Replace with the actual path to your image
              alt="Thesis Image 2"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>


          {/* Projects Section */}
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Neural-Symbolic VQA",
                description:
                  "Designed a multi-modal AI system integrating computer vision, NLP, and symbolic reasoning to enhance visual question answering on the Sort-of-CLEVR dataset. Leveraged PyTorch to implement CNNs for image processing and integrated symbolic reasoning to provide interpretable results, improving accuracy and logical consistency.",
                tags: ["CNN", "NLP", "PyTorch", "Symbolic Reasoning", "Computer Vision"],
                link: "https://github.com/aya0221/Neural-Symbolic-VQA-Sort-of-CLEVR",
              },
              {
                title: "Object Tracking Under Occlusions",
                description:
                  "Built a robust object tracking system combining CNN-based detection and Kalman filters to predict and track occluded objects effectively. Developed using ResNet for feature extraction and applied in scenarios requiring real-time, accurate tracking under challenging visual conditions.",
                tags: ["CNN", "Kalman Filter (Mathematical Modeling)", "Object Tracking", "ResNet"],
                link: "https://github.com/aya0221/Object-Tracking-Under-Occlusions",
              },
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
        role: "Open Source Contributor",
        company: "Python Typed APIs Project - Supervised by Prof. Kamen Yotov",
        period: "2024 - Present",
        description: [
          "Developing type-safe Python clients for widely-used services in an open-source project, automating API generation to address gaps in the software development industry.",
        ],
      },
      {
        role: "Research Assistant",
        company: "Neuroscience Kiani Lab, NYU Center for Neural Science",
        period: "2023",
        description: [
          "Contributed 5k+ eye-tracking data as a subject for the lab's decision-making experiments.",
          "Developed a DeepDream algorithm using pre-trained CNNs (ResNet/VGG-16) to generate dream-like images, aiming for future use in neural decision-making experiments on primates.",
          "Gained insights into research methodologies and expanded knowledge of neuroscience.",
        ],
      },
      {
        role: "AI Robotics Engineer",
        company: "Nihon Business Data Processing Center",
        period: "2021 - 2022",
        description: [
          "Developed and deployed a voice-to-motion robotics system showcased to 10k+ exhibition visitors, leading the AI development as the sole AI engineer on a team of 5.",
          "Integrated voice recognition (Julius/SRILM) and speech synthesis (JACK/OpenJTalk) into the robot, enabling seamless interaction between humans and robots.",
          "Researched NLP for the future voice chatbot product, adjusting pre-trained models (BERT/GPT2/Blender), developing original small models (LSTM), and preprocessing messy 400kb data (MeCab/NLTK).",
          "Played a project management role, leading cross-functional collaboration, timelines, and deployment strategies.",
        ],
      },
    ].map((job, index) => (
      <div key={index} className="group">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-semibold text-primary">{job.role}</h3>
            <p className="text-muted-foreground">{job.company}</p>
          </div>
          <span className="text-muted-foreground">{job.period}</span>
        </div>
        <ul className="pl-6 text-muted-foreground space-y-2">
          {job.description.map((item, i) => (
            <li key={i} className="relative pl-6">
              <span className="absolute left-0 text-primary">-</span>
              {item}
            </li>
          ))}
        </ul>
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

