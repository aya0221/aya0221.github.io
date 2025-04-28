"use client"
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Github, Linkedin, ArrowUpRight, FileText, Copy, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import { SiHuggingface } from 'react-icons/si';

export default function Home() {
  const [isMailOpen, setIsMailOpen] = useState(false)
  const [copySuccess, setCopySuccess] = useState('')

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('ayaoshima.us@gmail.com').then(
      () => {
        setCopySuccess('Copied!')
        setTimeout(() => setCopySuccess(''), 2000)
      },
      () => {
        setCopySuccess('Failed to copy!')
        setTimeout(() => setCopySuccess(''), 2000)
      }
    )
  }

  return (
    <div className="pt-32 pb-16 space-y-32">
      <div className="container space-y-24">

        {/* Hero Section */}
        <section className="max-w-4xl space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
          AI Systems for Humans
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            I work across <strong>natural language processing (NLP)</strong>, <strong>multi-modal AI</strong>, and <strong>end-to-end ML pipelines</strong>. I care about building AI systems that actually help people — solving real-world problems through reliable modeling, scalable deployment, and measurable performance.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button onClick={() => setIsMailOpen(true)} className="px-4 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600">Email</button>
            <Link href="https://github.com/aya0221" target="_blank" className="px-4 py-2 rounded-lg bg-purple-800 text-white font-semibold hover:bg-gray-900">GitHub</Link>
            <Link href="https://www.linkedin.com/in/ayaoshima" target="_blank" className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">LinkedIn</Link>
            <Link href="https://huggingface.co/Aya-In-Brooklyn" target="_blank" className="px-4 py-2 rounded-lg bg-yellow-600 text-white font-semibold hover:bg-blue-700">Hugging Face</Link>
          </div>
        </section>

        {isMailOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-sm md:max-w-md p-6 relative">
              <button onClick={() => setIsMailOpen(false)} className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white" aria-label="Close Mail">
                <X className="h-6 w-6" />
              </button>
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Me</h2>
              <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 sm:p-4 rounded mb-4">
                <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 select-all">ayaoshima.us@gmail.com</span>
                <button onClick={copyEmailToClipboard} className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100" aria-label="Copy Email" title="Copy Email">
                  <Copy className="h-4 sm:h-5 w-4 sm:w-5" />
                </button>
              </div>
              {copySuccess && (
                <p className="text-green-500 text-sm mb-4">{copySuccess}</p>
              )}
              <a href="mailto:ayaoshima.us@gmail.com" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center w-full">
                Send Email
              </a>
            </div>
          </div>
        )}


        {/* Three Tech Focus Areas */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-muted p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg leading-tight mb-2">Low-Latency Voice-to-NLP Recommendation System<br/><span className="text-sm font-normal text-muted-foreground">Fine-Tuned for Fast, High-Accuracy Personalized Search</span></h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
              <li>Built real-time pipelines integrating Whisper ASR, DistilBERT, RoBERTa spaCy NER, OpenSearch semantic ranking</li>
              <li>Achieved 100% intent accuracy, 99.97% F1 entity extraction</li>
              <li>Delivered recommendations in &lt;0.2s latency</li>
            </ul>
          </div>

          <div className="bg-muted p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg leading-tight mb-2">Tensor Decomposition on High-Dimensional Neural Firing Data<br/><span className="text-sm font-normal text-muted-foreground">Dimensionality Reduction and Feature Extraction</span></h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
              <li>Applied Tensor Component Analysis (TCA) to PVN spike-train datasets (M.S. Thesis)</li>
              <li>Extracted engagement-linked latent dynamics</li>
              <li>Advanced neural decoding of volitional learning</li>
            </ul>
          </div>

          <div className="bg-muted p-6 rounded-xl shadow-sm">
            <h2 className="font-semibold text-lg leading-tight mb-2">Embedded AI Deployment in Robotics<br/><span className="text-sm font-normal text-muted-foreground">Voice-to-Text-to-Robot Motion Command Mapping</span></h2>
            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
              <li>Built embedded AI system for real-time speech-driven robotic motion</li>
              <li>Integrated Julius/SRILM speech recognition with NLP parsing</li>
              <li>Deployed live at 10K+ visitor public exhibition</li>
            </ul>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-5xl space-y-8">
          <h2 className="text-3xl font-bold">About</h2>
          <div className="grid gap-12 md:grid-cols-[2fr,1fr] items-start">
            <div className="space-y-6 text-lg text-muted-foreground">
            <p>
  I’m a <strong>Machine Learning Engineer</strong> with hands-on industry experience in <strong>applied AI</strong> and a research background in <strong>computational neuroscience</strong>. My work connects scientific insight with real-world deployment—specializing in <u>natural language processing (NLP)</u>, <u>multi-modal AI</u>, and <u>end-to-end ML systems</u>.
</p>
            <p>
In industry, as an <strong>AI Robotics Engineer</strong>, I developed and deployed an embedded <strong>voice-to-motion robotics system</strong> showcased to 10K+ exhibition visitors. I implemented the <strong>full AI pipeline</strong>: <u>speech recognition</u>, <u>real-time command mapping using a fine-tuned NLP model</u>, and <u>robotic motion execution</u>—all running on <strong>embedded hardware</strong>, with integrated <u>speech synthesis</u>.
</p>

<p>
  In academia, at <strong>NYU Grossman School of Medicine</strong>, I contributed to neuroscience research under Prof. Robert C. Froemke, analyzing hypothalamic neural activity using <strong>Tensor Component Analysis (TCA)</strong>. My work focused on <u>dimensionality reduction</u>, <u>temporal precision</u>, and <u>oxytocin-linked plasticity</u>—revealing population-level neural dynamics underlying maternal learning.
</p>

<p>
As a technical initiative, I built a <strong>low-latency voice-to-NLP recommender system</strong> that transcribes voice input (Whisper ASR), <strong>extracts structured intents and entities</strong>, and retrieves ranked workout classes—delivering real-time personalized recommendations through a scalable FastAPI and React interface. Intent classification accuracy: <strong>100%</strong>. Entity extraction F1-score: <strong>99.97%</strong>. End-to-end latency: under 1 second.
</p>
            </div>
            <div className="relative aspect-square">
              <Image src="/images/ayalogo.jpg" alt="Aya Oshima" width={400} height={400} className="rounded-lg object-cover colorful-border" />
            </div>
          </div>
        </section>

        {/* Highlighted Work */}
        <section className="space-y-16">
          <h2 className="text-3xl font-bold">Highlighted Work</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Voice AI Project */}
            <div className="p-6 rounded-lg border bg-card hover-lift colorful-border flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Low-Latency Voice-to-NLP Recommender</h3>
                  <p className="text-sm text-muted-foreground">Fine-Tuned for Fast, High-Accuracy Personalized Search</p>
                </div>
                <Link href="https://github.com/aya0221/Voice-AI-Workout-Assistant" target="_blank">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </Link>
              </div>
              <ul className="list-disc pl-5 text-muted-foreground text-sm">
                <li>Engineered a real-time AI system that listens, understands, and recommends workouts instantly with <strong>&lt;0.2s total latency</strong>.</li>
                <li>Fine-tuned transformer models to achieve <strong>97.8% intent classification accuracy</strong> and <strong>98.5% entity extraction F1</strong> on noisy ASR-transcribed input.</li>
                <li>Designed an end-to-end scalable backend with OpenSearch boosting, FastAPI, and React for seamless low-latency experience.</li>
              </ul>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Whisper", "ASR", "DistilBERT", "RoBERTa", "NER", "spaCy", "OpenSearch", "FastAPI", "React", "Python", "MLflow"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
                ))}
              </div>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md relative group">
                <Link
                  href="https://youtu.be/EcXSCofSh-E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full"
                >
                  <Image
                    src="https://img.youtube.com/vi/EcXSCofSh-E/hqdefault.jpg"
                    alt="Voice AI Workout Assistant Demo"
                    width={800}
                    height={450}
                    className="object-cover w-full h-full"
                  />
                  {/* Play Icon Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-3 group-hover:bg-opacity-70 transition">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Thesis Project */}
            <div className="p-6 rounded-lg border bg-card hover-lift colorful-border flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Neuroscience Thesis: TCA in Maternal Learning</h3>
                  <p className="text-sm text-muted-foreground">Statistical modeling for neural decoding & dimensionality reduction</p>
                </div>
                <Link href="https://aya0221.github.io/thesis-pdf/thesis_ayaoshima.pdf" target="_blank">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </Link>
              </div>
              <ul className="list-disc pl-5 text-muted-foreground text-sm">
                <li>Modeled PVN spike-train recordings by constructing <strong>neuron-time-trial tensors</strong> aligned to <strong>behavioral events</strong>.</li>
                <li>Applied <strong>Tensor Component Analysis (TCA)</strong> to decompose <strong>high-dimensional neural activity</strong> into interpretable <strong>latent factors</strong> across <strong>neurons</strong>, <strong>time</strong>, and <strong>trials</strong>.</li>
                <li>Modeled <strong>directional connectivity dynamics</strong> with <strong>Transfer Entropy</strong>, quantifying engagement-driven shifts in <strong>neural information flow</strong>.</li>
                <li>Demonstrated that <strong>volitional engagement</strong> sharpens <strong>temporal precision</strong>, strengthens <strong>synchrony</strong>, and stabilizes <strong>across-trial representations</strong>.</li>
              </ul>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Tensor Decomposition", "TCA", "Dimensionality Reduction", "Time Series Modeling", "Statistical Modeling", "Transfer Entropy", "Neural Data Analysis", "Spike Sorting", "MATLAB", "Python"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <img src="/images/thesis_demo.jpg" alt="Thesis Image 1" className="w-full h-auto rounded-lg shadow-md" />
                <img src="/images/thesis_demo_paper1.jpg" alt="Thesis Image 2" className="w-full h-auto rounded-lg shadow-md" />
              </div>
            </div>
          </div>
          {/* Move See More Works button inside here */}
          <div className="flex justify-end pt-4">
            <Link
              href="/work"
              className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg bg-primary text-white hover:bg-primary/90 transition"
            >
              See More Works
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

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

            {/* Core Languages */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Programming Languages</h3>
              <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {["Python", "MATLAB", "C++", "SQL", "Shell"].map((skill) => (
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

        {/* Education Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Education</h2>
          <div>
            <h3 className="text-xl">Master's in Computer Science</h3>
            <p className="text">New York University, Tandon School of Engineering</p>
            <p>Thesis: <em>Tensor Component Analysis (TCA) for Neural Plasticity in Maternal Learning</em> conducted under Prof. Robert C. Froemke at NYU Langone.</p>
          </div>
        </section>

      </div>
    </div>
  )
}



// import Link from 'next/link'
// import { ArrowUpRight } from 'lucide-react'
// import React from 'react'

// export default function Home() {
//   return (
//     <div className="pt-32 pb-16">
//       <div className="container space-y-24">
//         {/* Hero Section */}
//         {/* <section className="max-w-4xl space-y-4">
//           <h1 className="text-5xl font-bold leading-tight">
//             AI Engineer turning <span className="gradient-text">cutting-edge research</span> into real-world products
//           </h1>
//           <p className="text-muted-foreground text-lg">
//             I design end-to-end ML systems that deliver real-world impact—leveraging <strong>NLP</strong>, <strong>vision</strong>, and <strong>model optimization</strong> to solve complex problems with clarity and scale.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
//     <div className="bg-muted p-4 rounded-xl shadow-sm">
//       <h2 className="font-semibold text-lg mb-2">Voice-to-NLP Pipelines</h2>
//       <p className="text-muted-foreground text-sm leading-relaxed">
//         Real-time speech-to-text (Whisper ASR), fine-tuned NLU models, semantic search with OpenSearch.
//       </p>
//     </div>

//     <div className="bg-muted p-4 rounded-xl shadow-sm">
//       <h2 className="font-semibold text-lg mb-2">Neural Time Series Modeling</h2>
//       <p className="text-muted-foreground text-sm leading-relaxed">
//         Tensor Component Analysis (TCA) and Transfer Entropy on PVN spike-train dynamics.
//       </p>
//     </div>

//     <div className="bg-muted p-4 rounded-xl shadow-sm">
//       <h2 className="font-semibold text-lg mb-2">Speech-Driven Robotics AI</h2>
//       <p className="text-muted-foreground text-sm leading-relaxed">
//         Embedded NLP modules for real-time speech understanding and autonomous motion control.
//       </p>
//     </div>
//   </div>
//         </section> */}

//         <section className="max-w-4xl space-y-6">
//           <h1 className="text-5xl font-bold leading-tight">
//             Building Machine Learning Systems that Connect Research and Real-World Impact
//           </h1>

//           <p className="text-muted-foreground text-lg max-w-3xl">
//             I work across <strong>natural language processing (NLP)</strong>, <strong>multi-modal AI</strong>, and <strong>end-to-end ML pipelines</strong>. 
//             I care about building AI systems that actually help people — solving real-world problems through reliable modeling, scalable deployment, and measurable performance.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">

//             <div className="bg-muted p-4 rounded-xl shadow-sm">
//               <h2 className="font-semibold text-lg leading-tight mb-2">
//                 Low-Latency Voice-to-NLP Recommendation System<br/>
//                 <span className="text-sm font-normal text-muted-foreground">Fine-Tuned for Fast, High-Accuracy Personalized Search</span>
//               </h2>
//               <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 leading-relaxed">
//                 <li>Built real-time pipelines integrating Whisper ASR, fine-tuned DistilBERT, RoBERTa-based spaCy Transformer NER, OpenSearch semantic ranking</li>
//                 <li>Achieved 100% intent accuracy and 99.97% F1 entity extraction</li>
//                 <li>Delivered ranked workout recommendations in &lt;1 second</li>
//               </ul>
//             </div>

//             <div className="bg-muted p-4 rounded-xl shadow-sm">
//               <h2 className="font-semibold text-lg leading-tight mb-2">
//                 Tensor Decomposition on High-Dimensional Neural Firing Data<br/>
//                 <span className="text-sm font-normal text-muted-foreground">Dimensionality Reduction and Feature Extraction</span>
//               </h2>
//               <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 leading-relaxed">
//                 <li>Applied Tensor Component Analysis (TCA) to PVN spike-train datasets (M.S. Thesis)</li>
//                 <li>Extracted engagement-linked latent dynamics and oxytocin-sensitive pathways</li>
//                 <li>Advanced neural decoding of volitional learning processes</li>
//               </ul>
//             </div>

//             <div className="bg-muted p-4 rounded-xl shadow-sm">
//               <h2 className="font-semibold text-lg leading-tight mb-2">
//                 Embedded AI Deployment in Robotics<br/>
//                 <span className="text-sm font-normal text-muted-foreground">Voice-to-Text-to-Robot Motion Command Mapping</span>
//               </h2>
//               <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 leading-relaxed">
//                 <li>Built embedded AI system for voice-controlled motion execution on robotic platforms</li>
//                 <li>Integrated real-time NLP parsing with Julius/SRILM speech recognition</li>
//                 <li>Deployed live to 10K+ visitors as sole AI engineer on public exhibition project</li>
//               </ul>
//             </div>

//           </div>
//         </section>

//         {/* Highlighted Work */}
//         <section className="space-y-8">
//           <h2 className="text-2xl font-semibold">Highlighted Work</h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Voice AI Project */}
//             <div className="p-6 rounded-lg border bg-card hover-lift colorful-border flex flex-col gap-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-semibold">Low-Latency Voice-to-NLP Recommender</h3>
//                   <p className="text-sm text-muted-foreground">Fine-Tuned for Fast, High-Accuracy Personalized Search</p>
//                 </div>
//                 <Link href="https://github.com/aya0221/Voice-AI-Workout-Assistant" target="_blank">
//                   <ArrowUpRight className="w-5 h-5 text-muted-foreground hover:text-primary" />
//                 </Link>
//               </div>
//               <ul className="list-disc pl-5 text-muted-foreground text-sm">
//                 <li>Engineered a real-time AI system that listens, understands, and recommends workouts instantly with <strong>&lt;1s total latency</strong>.</li>
//                 <li>Fine-tuned transformer models to achieve <strong>97.8% intent classification accuracy</strong> and <strong>98.5% entity extraction F1</strong> on noisy ASR-transcribed input.</li>
//                 <li>Designed an end-to-end scalable backend with OpenSearch boosting, FastAPI, and React for seamless low-latency experience.</li>
//               </ul>
//               <div className="flex flex-wrap gap-2 text-xs">
//                 {["Whisper", "ASR", "DistilBERT", "RoBERTa", "NER", "spaCy", "OpenSearch", "FastAPI", "React", "Python", "MLflow"].map(tag => (
//                   <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
//                 ))}
//               </div>
//               <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
//                 <iframe
//                   className="w-full h-full"
//                   src="https://www.youtube.com/embed/GDH2nT_EzUI"
//                   title="Voice AI Workout Assistant Demo"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 />
//               </div>
//             </div>

//             {/* Thesis Project */}
//             <div className="p-6 rounded-lg border bg-card hover-lift colorful-border flex flex-col gap-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="text-lg font-semibold">Neuroscience Thesis: TCA in Maternal Learning</h3>
//                   <p className="text-sm text-muted-foreground">Statistical modeling for neural decoding & dimensionality reduction</p>
//                 </div>
//                 <Link href="https://aya0221.github.io/thesis-pdf/thesis_ayaoshima.pdf" target="_blank">
//                   <ArrowUpRight className="w-5 h-5 text-muted-foreground hover:text-primary" />
//                 </Link>
//               </div>
//               <ul className="list-disc pl-5 text-muted-foreground text-sm">
//                 <li>Modeled PVN spike-train recordings by constructing <strong>neuron-time-trial tensors</strong> aligned to <strong>behavioral events</strong>.</li>
//                 <li>Applied <strong>Tensor Component Analysis (TCA)</strong> to decompose <strong>high-dimensional neural activity</strong> into interpretable <strong>latent factors</strong> across <strong>neurons</strong>, <strong>time</strong>, and <strong>trials</strong>.</li>
//                 <li>Modeled <strong>directional connectivity dynamics</strong> with <strong>Transfer Entropy</strong>, quantifying engagement-driven shifts in <strong>neural information flow</strong>.</li>
//                 <li>Demonstrated that <strong>volitional engagement</strong> sharpens <strong>temporal precision</strong>, strengthens <strong>synchrony</strong>, and stabilizes <strong>across-trial representations</strong>.</li>
//               </ul>
//               <div className="flex flex-wrap gap-2 text-xs">
//                 {["Tensor Decomposition", "TCA", "Dimensionality Reduction", "Time Series Modeling", "Statistical Modeling", "Transfer Entropy", "Neural Data Analysis", "Spike Sorting", "MATLAB", "Python"].map(tag => (
//                   <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
//                 ))}
//               </div>
//               <div className="flex flex-col gap-4">
//                 <img src="/images/thesis_demo.jpg" alt="Thesis Image 1" className="w-full h-auto rounded-lg shadow-md" />
//                 <img src="/images/thesis_demo_paper1.jpg" alt="Thesis Image 2" className="w-full h-auto rounded-lg shadow-md" />
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }
