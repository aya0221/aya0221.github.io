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
                I'm an AI engineer with a passion for pushing the boundaries of technology.
                Currently pursuing my MS in Computer Science at NYU's Tandon School of Engineering,
                where I focus on machine learning, natural language processing, and robotics.
              </p>
              <p>
                With expertise in AI/ML and a background in robotics, I enjoy tackling complex
                problems and developing innovative solutions that bridge the gap between
                theoretical concepts and practical applications.
              </p>
            </div>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=400&width=400"
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
                category: "Programming",
                skills: ["Python", "C++", "MATLAB", "R"]
              },
              {
                category: "Machine Learning",
                skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"]
              },
              {
                category: "Computer Vision",
                skills: ["OpenCV", "YOLO", "CNN", "Image Processing"]
              },
              {
                category: "Robotics",
                skills: ["ROS", "Motion Planning", "Control Systems"]
              },
              {
                category: "Data Science",
                skills: ["Pandas", "NumPy", "Data Visualization", "Statistical Analysis"]
              },
              {
                category: "Tools & Platforms",
                skills: ["Git", "Docker", "AWS", "Linux"]
              }
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

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Education</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium">Master's in Computer Science</h3>
              <p className="text-primary">New York University, Tandon School of Engineering</p>
              <p className="text-muted-foreground">2022 - Present</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Interests</h2>
          <div className="prose prose-neutral dark:prose-invert">
            <p>
              Beyond my academic and professional pursuits, I'm passionate about the intersection of AI and robotics. 
              I enjoy exploring new technologies, contributing to open-source projects, and participating in AI/ML competitions. 
              In my free time, you'll find me diving into research papers, experimenting with new algorithms, or collaborating 
              on innovative projects that push the boundaries of what's possible with AI and robotics.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

