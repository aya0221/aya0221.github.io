import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-4xl space-y-16">
        {/* About Me Section */}
        <section className="grid gap-12 md:grid-cols-[2fr,1fr] items-start">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold">About Me</h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                I'm an AI engineer passionate about machine learning and computational neuroscience. 
                I hold an MS in Computer Science from NYU's Tandon School of Engineering, where I focused on <u>Natural Language Processing (NLP)</u>, <u>Computer Vision</u>, and <u>Computational Neuroscience</u>.
              </p>
              <p>
                I specialize in building data-driven solutions that bridge research and real-world impact. 
                My work combines technical expertise with a deep curiosity for solving challenging problems at the intersection of AI and human cognition/ability.
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

        {/* Skills & Technologies Section */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                category: "Programming Languages",
                skills: ["Python", "MATLAB", "SQL", "C++"],
              },
              {
                category: "Artificial Intelligence",
                skills: [
                  "Multi-Modal",
                  "NLP",
                  "CNNs",
                  "Computer Vision",
                  "Computational Neuroscience",
                  "RNNs",
                  "Reinforcement Learning",
                  "GANs",
                  "Time-Series Analysis",
                ],
              },
              {
                category: "ML/DS Tools & Frameworks",
                skills: [
                  "TensorFlow",
                  "PyTorch",
                  "Keras",
                  "Scikit-learn",
                  "Pandas",
                  "NumPy",
                  "SciPy",
                  "Matplotlib",
                  "MeCab",
                ],
              },
              {
                category: "ML Algorithms",
                skills: [
                  "Statistical Modeling (PCA, TCA)",
                  "SVM",
                  "Random Forests",
                  "Decision Trees",
                  "Linear/Logistic Regression",
                  "Hidden Markov Models",
                  "K-means",
                  "Kalman Filters"
                ],
              },
              {
                category: "Neuroscience & Brain-Computer Interfaces",
                skills: [
                  "EEG Signal Analysis",
                  "Neural Decoding",
                  "Brain Signal Processing",
                ],
              },
              {
                category: "Development Tools & Methodologies",
                skills: [
                  "Git",
                  "Docker",
                  "AWS",
                  "Hadoop",
                  "Apache Spark",
                  "Linux",
                  "CI/CD (Travis CI)",
                  "Scrum",
                  "Agile"
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

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="space-y-6">
            {/* Education Item */}
            <div>
              {/* Flex container for degree and dates */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">Master's in Computer Science</h3>
                  <p className="text-primary">New York University, Tandon School of Engineering</p>
                </div>
                <p className="text-muted-foreground mt-2 md:mt-0">2022 - 2024</p>
              </div>
              <ul className="pl-6 text-muted-foreground space-y-2 mt-4">
                <li>
                  <strong>Thesis:</strong> <span className="font-semibold italic">Dimensional Reduction Techniques for Neural Data</span>
                </li>
                <li>
                  Supervised by Prof. Robert C. Froemke, focusing on statistical modelings on behavior learning at <span className="text-purple-700">NYU Grossman School of Medicine's Neuroscience Institute</span>
                </li>
                <li>
                  <strong>Coursework:</strong> Machine Learning, Artificial Intelligence, Discrete Mathematics, Operating Systems, Big Data, Software Engineering, Information Security and Privacy, Data Structures and Algorithms, NeuroInformatics
                </li>
              </ul>
            </div>
            {/* Add more education items here if needed */}
          </div>
        </section>

        {/* Activities & Leadership Section */}
        <section>
          <h2 className="text-2xl font-semibold">Activities & Leadership</h2>
          <ul className="pl-6 text-muted-foreground space-y-4">
            <li className="flex flex-col md:flex-row md:justify-between">
              <div>
                <strong>NYU Cheerleading Club:</strong> Member of the Spirit Squad, representing NYU at various events
              </div>
              {/* Placeholder for dates or additional info */}
            </li>
            <li className="flex flex-col md:flex-row md:justify-between">
              <div>
                <strong>NYU Women in Mindfulness Fellowship:</strong> Engaged in mindfulness practices to promote well-being and focus
              </div>
            </li>
            <li className="flex flex-col md:flex-row md:justify-between">
              <div>
                <strong>NYU ML Club:</strong> Participated in workshops and discussions on Machine Learning
              </div>
            </li>
          </ul>
        </section>

        {/* Uncomment and modify the Interests section if needed */}
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
