import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-4xl space-y-16">
        <section className="grid gap-12 md:grid-cols-[2fr,1fr] items-start">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm an AI engineer passionate about machine learning and computational neuroscience. 
                I hold an MS in Computer Science from NYU's Tandon School of Engineering, where I focused on natural language processing, computer vision, and understanding neural systems.
              </p>
              <p>
                I specialize in building data-driven solutions that bridge research and real-world impact. 
                My work combines technical expertise with a deep curiosity for solving challenging problems at the intersection of AI and human cognition.
              </p>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/images/ayalogo.jpg"
              alt="Aya Oshima"
              width={400}
              height={400}
              className="rounded-lg object-cover colorful-border"
            />
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                category: "Programming Languages",
                skills: ["Python", "C++", "MATLAB", "SQL", "R"],
              },
              {
                category: "Machine Learning",
                skills: [
                  "TensorFlow",
                  "PyTorch",
                  "Keras",
                  "Scikit-learn",
                  "Reinforcement Learning",
                  "GANs",
                ],
              },
              {
                category: "Data Science & Analytics",
                skills: [
                  "Pandas",
                  "NumPy",
                  "SciPy",
                  "Statistical Modeling (PCA, TCA)",
                  "Time-Series Analysis",
                ],
              },
              {
                category: "Computer Vision",
                skills: [
                  "OpenCV",
                  "CNN",
                  "Object Detection",
                  "Image Processing",
                  "Kalman Filters",
                ],
              },
              {
                category: "NLP & AI",
                skills: [
                  "NLP",
                  "Symbolic Reasoning",
                  "LSTM",
                  "BERT",
                  "GPT-2",
                  "MeCab",
                ],
              },
              {
                category: "Tools & Platforms",
                skills: [
                  "Git",
                  "Docker",
                  "AWS",
                  "Hadoop",
                  "Apache Spark",
                  "Linux",
                  "CI/CD (Travis CI)",
                ],
              },
            ].map((category, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted hover-lift">
                <h3 className="font-medium mb-2">{category.category}</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">Master's in Computer Science</h3>
            <p className="text-primary">New York University, Tandon School of Engineering</p>
            <p className="text-muted-foreground">2022 - 2024</p>
            <ul className="pl-6 text-muted-foreground space-y-2">
              <li>
                <strong>Thesis:</strong> Supervised by Prof. Robert C. Froemke, focusing on computational neuroscience neural data modeling at <span style={{ color: '#8A2BE2' }}>NYU Grossman School of Medicine's Neuroscience Institute</span>
              </li>
              <li>
                <strong>Coursework:</strong> Machine Learning, Artificial Intelligence, Discrete Mathematics, Operating System, Big Data, Software Engineering, Information Security and Privacy, Data structure and Algorithm, NeuroInformatics (auditing)
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">Activities & Leadership</h2>
          <ul className="pl-6 text-muted-foreground space-y-2">
            <li>
              <strong>NYU Cheerleading Club:</strong> Member of the Spirit Squad, representing NYU at various events
            </li>
            <li>
              <strong>NYU Women in Mindfulness Fellowship:</strong> Engaged in mindfulness practices to promote well-being and focus
            </li>
            <li>
              <strong>NYU ML Club:</strong> Participated in workshops and discussions on Machine Learning
            </li>
          </ul>
        </section>

        {/* <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Interests</h2>
          <div className="prose prose-neutral dark:prose-invert">
            <p>
            I’m deeply passionate about machine learning, computational neuroscience, and data-driven decision-making. I enjoy exploring innovative ways to harness AI for solving complex challenges and uncovering impactful insights.
            With a strong foundation in interdisciplinary collaboration, I thrive on projects that connect cutting-edge technology with actionable solutions, driving meaningful progress and pushing the boundaries of what’s possible.
            </p>
          </div>
        </section> */}
      </div>
    </div>
  )
}

