import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

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
          <h2 className="text-2xl font-semibold">Highlight Work:</h2>

          {/* Thesis Section */}
        <div className="p-6 rounded-lg border bg-card hover-lift colorful-border flex flex-col md:flex-row gap-4">
          {/* Left Half: Thesis Text */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">
                Thesis: Dimensional Reduction Techniques for Neural Data
              </h3>
              <Link
                  href="https://aya0221.github.io/thesis-pdf/thesis_ayaoshima.pdf"
                  target="_blank"
                  className="group-hover:text-primary transition-colors"
                >
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground" />
                </Link>
            </div>

            <p className="text-muted-foreground mb-4">
              <ul className="list-disc pl-5">
                <li>Developed and implemented statistical modeling method TCA to decompose high-dimensional neuron-firing data from the paraventricular nucleus (PVN) of mice, identifying structured neural patterns underlying maternal behavior learning</li>
                <li>Discovered that active maternal learning strengthens neural synchrony and precise temporal firing, demonstrating that oxytocin-related PVN circuits drive adaptive plasticity in social learning</li>
              </ul>
            </p>
            <div className="flex flex-wrap gap-2">
              {["Statistical Modeling", "PCA", "TCA", "Computational Neuroscience", "Data Analysis", "Dimension Reduction", "Matlab", "Python"].map((tag, tagIndex) => (
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
                title: "Neural-Symbolic VQA: Multi-Modal AI with CNN, NLP, and Symbolic Reasoning",
                description: (
                  <ul className="list-disc pl-5">
                    <li>Developed a Neural-Symbolic VQA system, integrating computer vision (CNN), NLP, and Symbolic Reasoning, trained and evaluated on the Sort-of-CLEVR dataset, which includes 10k images and 200k questions.</li>
                    <li>Achieved accuracy of 88% in relational and 99% in non-relational questions.</li>
                  </ul>
                ),
                tags: ["Multi-Modal", "Computer Vision", "CNN", "NLP", "PyTorch", "Symbolic Reasoning", "Python"],
                link: "https://github.com/aya0221/Neural-Symbolic-VQA-Sort-of-CLEVR",
              },
              {
                title: "Object Tracking Under Occlusions: CNN Detection with Kalman Prediction",
                description:
                  "Leveraged a pre-trained CNN (ResNet), combined with the MS COCO dataset resulting in accurate tracking of obscured ball trajectories, integrating object detection, classification, and motion prediction using Kalman filter",
                  tags: ["Mathematical Modeling", "Kalman Filter", "Object Tracking", "CNN", "ResNet", "Python"],
                link: "https://github.com/aya0221/Object-Tracking-Under-Occlusions",
              },
            ].map((project, index) => (
              <Link
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
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
        company: "Python Typed APIs",
        period: "2024 - Present",
        description: [
          "Contributing to codes related to Slack API using OpenAPI Generator, supervised by Prof. Kamen Yotov",
        ],
      },
      {
        role: "Research Assistant",
        company: "Neuroscience Kiani Lab, NYU Center for Neural Science",
        period: "2023",
        description: [
          "Developed DeepDream-based image generation algorithms using CNNs (ResNet/VGG-16) to create structured visual stimuli for primate decision-making experiments, where monkeys learn decision-making through reinforcement learning and reward-driven adaptation",
          "Contributed 5K+ eye-tracking data points as a subject for human decision-making research",
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

