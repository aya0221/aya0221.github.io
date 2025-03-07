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
              Industry-experienced Machine Learning engineer with an MS in Computer Science, specializing in <u>NLP</u>, <u>Computer Vision</u>, and data-driven decision-making. Worked as an AI Robotics Engineer, implemented an end-to-end robot motion system showcased to 10k+ visitors at the exhibition, which was the integration from voice-to-text, through text-to-command mapping, to motion execution, and also conducted extensive NLP research.
              </p>
              <p>
              In academics, applied advanced <u>Statistical Modeling</u> to neural data, achieving <u>dimensionality reduction and feature extraction</u>, contributing to neuroscience research.
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
          <h2 className="text-2xl font-semibold">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                category: "Programming Languages",
                skills: ["Python", "MATLAB",  "C++", "SQL"],
              },
              {
                category: "ML / DS",
                skills: [
                  "Multi-Modal",
                  "NLP",
                  "Statistical Modeling (PCA, TCA)",
                  "Computer Vision",
                  "CNNs",
                  "Computational Neuroscience",
                  "RNNs",
                  "Reinforcement Learning",
                ],
              },
              {
                category: "ML Algorithms",
                skills: [
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
                category: "Software Skills",
                skills: [
                  "TensorFlow",
                  "PyTorch",
                  "Keras",
                  "Scikit-learn",
                  "NumPy",
                  "SciPy",
                  "Pandas",
                  "Matplotlib",
                  "Jupyter Notebook",
                  "Apache Spark",
                  "Hadoop",
                  "AWS",
                  "Docker",
                  "Git",
                  "Linux",
                  "CI/CD (Travis CI)",
                  "Scrum",
                  "Agile"
                ]
              },
              {
                category: "Neuroscience / BCI / HCI",
                skills: [
                  "Computational Neuroscience",
                  "Neural Decoding",
                  "Neural Data Analysis",
                  "EEG Signal Analysis"
                ],
              },
              // {
              //   category: "ML/DS Tools & Frameworks",
              //   skills: [
              //     "TensorFlow",
              //     "PyTorch",
              //     "Keras",
              //     "Scikit-learn",
              //     "Pandas",
              //     "NumPy",
              //     "SciPy",
              //     "Matplotlib",
              //     "MeCab",
              //   ],
              // },              
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
          <h2 className="text-2xl font-bold border-b pb-2 mb-6">Education</h2>
          <div className="space-y-6">
            {/* Master's Degree */}
            <div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-xl font-bold">Master of Science in Computer Science</h3>
                  <p className="text-primary">New York University, Tandon School of Engineering</p>
                </div>
                <p className="text-muted-foreground mt-2 md:mt-0">2022 – 2024</p>
              </div>
              <div className="mt-4 space-y-2 text-muted-foreground pl-6"> {/* Added left padding */}
                <p>
                  <strong>Thesis:</strong> <span className="italic font-medium">Tensor Component Analysis (TCA) for Neural Plasticity in Maternal Learning</span>
                </p>
                <p className="text-purple-700 font-medium">
                  Research at NYU Grossman School of Medicine's Neuroscience Institute
                </p>
                <p>Supervised by Prof. Robert C. Froemke, focusing on Neural Decoding and Statistical Modeling in behavioral learning.</p>
              </div>
            </div>
          </div>
        </section>


        {/* Activities & Leadership Section */}
        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-6">Activities & Leadership</h2>
          <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li><strong>NYU Cheerleading Club</strong></li>
            <li><strong>NYU Women in Mindfulness Fellowship</strong></li>
            <li><strong>NYU ML Club</strong></li>
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
