import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-4xl space-y-20">
        {/* Intro Section */}
        <section className="grid gap-12 md:grid-cols-[2fr,1fr] items-start">
          <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight">
            Applied ML Engineer<br />
            & Neuro-Tech Researcher
          </h1>
            <div className="space-y-4 text-lg text-muted-foreground">
            <p>
  I’m a <strong>Machine Learning Engineer</strong> with hands-on industry experience in <strong>applied AI</strong> and a research background in <strong>computational neuroscience</strong>. My work connects scientific insight with real-world deployment—specializing in <u>natural language processing (NLP)</u>, <u>speech-driven interfaces</u>, and <u>end-to-end ML systems</u>.
</p>

<p>
In industry, as an <strong>AI Robotics Engineer</strong>, I developed and deployed an embedded <strong>voice-to-motion robotics system</strong> showcased to 10K+ exhibition visitors. I implemented the <strong>full AI pipeline</strong>: <u>speech recognition</u>, <u>real-time command mapping using a fine-tuned NLP model</u>, and <u>robotic motion execution</u>—all running on <strong>embedded hardware</strong>, with integrated <u>speech synthesis</u>.
</p>

<p>
  In academia, at <strong>NYU Grossman School of Medicine</strong>, I contributed to neuroscience research under Prof. Robert C. Froemke, analyzing hypothalamic neural activity using <strong>Tensor Component Analysis (TCA)</strong>. My work focused on <u>dimensionality reduction</u>, <u>temporal precision</u>, and <u>oxytocin-linked plasticity</u>—revealing population-level neural dynamics underlying maternal learning.
</p>

<p>
As a technical initiative, I built a <strong>Voice AI Workout Assistant</strong>: a production-grade voice interface that transcribes, interprets, and recommends workouts in real time—featuring <u>real-time speech recognition</u> (Whisper ASR), <u>intent and entity extraction</u> (fine-tuned transformer classifier + hybrid NER with spaCy), and <u>query-time boosted search</u> (OpenSearch)—deployed end-to-end with <u>FastAPI</u> and <u>React</u>.
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
          <h2 className="text-2xl font-semibold">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Core Languages */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Programming Languages</h3>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {["Python", "MATLAB", "C++", "SQL", "Shell"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted rounded-full">{skill}</span>
                ))}
              </div>
            </div>

            {/* Machine Learning & Data Science */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">ML / Data Science</h3>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {["NLP", "Computer Vision", "Multi-Modal Learning", 
                  "Speech Recognition (Whisper)", "Intent & Entity Recognition", 
                  "Dimensionality Reduction (PCA, TCA)", "Reinforcement Learning", 
                  "CNNs", "RNNs", "Transformers", 
                  "Search Relevance (OpenSearch Boosting)"]
                .map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted rounded-full">{skill}</span>
                ))}
              </div>
            </div>

            {/* ML Algorithms */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">ML Algorithms</h3>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {["SVM", "Random Forests", "Decision Trees", 
                  "Logistic Regression", "HMM", "K-means", "Kalman Filters"]
                .map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted rounded-full">{skill}</span>
                ))}
              </div>
            </div>

            {/* Libraries & Frameworks */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Libraries & Frameworks</h3>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {["PyTorch", "TensorFlow", "HuggingFace", "Keras", 
                  "spaCy", "Scikit-learn", "NumPy", "Pandas", 
                  "Matplotlib", "Seaborn", "Jupyter", "OpenAPI", "Django", "FastAPI", "React"]
                .map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted rounded-full">{skill}</span>
                ))}
              </div>
            </div>

            {/* MLOps / Infrastructure */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">MLOps / Infrastructure</h3>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {["Docker", "AWS", "CI/CD", "Git", "Linux", "Apache Spark", "Hadoop"]
                .map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted rounded-full">{skill}</span>
                ))}
              </div>
            </div>

            {/* Neuroscience Expertise */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Neuroscience & Research</h3>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {["Computational Neuroscience", 
                  "Neural Decoding", 
                  "Neural Data Analysis", 
                  "EEG Signal Analysis", 
                  "Behavioral Modeling"]
                .map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-muted rounded-full">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold border-b pb-2 mb-6">Education</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">M.S. in Computer Science</h3>
              <p className="text-primary">New York University, Tandon School of Engineering (2022 – 2024)</p>
            </div>
            <div className="pl-1">
              <p>
                <strong>Thesis:</strong>{' '}
                <span className="italic">
                  Tensor Component Analysis (TCA) for Neural Plasticity in Maternal Learning
                </span>
              </p>
              <p className="pl-6">
                Conducted at <strong>NYU Grossman School of Medicine</strong> under{' '}
                <strong>Prof. Robert C. Froemke</strong>, applying{' '}
                <strong>statistical modeling</strong> to behavior-linked brain dynamics.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
