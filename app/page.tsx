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
        <section className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold leading-tight">Machine Learning & Data Science/Analytics & NeuroAI</h1>
          <p className="text-muted-foreground text-lg text-left max-w-4xl">
          <div className="text-muted-foreground text-lg text-left space-y-6">
            <p>
              <strong>Welcome to my world! I’m Aya.</strong> 🌸
            </p>

            <p>
              Rooted in a deep love for <strong>BCI</strong>, I’ve been growing in the space of <strong>Multimodal AI</strong> and <strong>NeuroAI</strong> —<br />
              from building embedded AI systems in robotics,
              to exploring connections between behaviors and neural activity through computational neuroscience.
            </p>
          </div>
          </p>
        </section>


          {/* <div className="flex flex-wrap gap-3 pt-4">
  <button 
    onClick={() => setIsMailOpen(true)} 
    className="px-5 py-2 rounded-full bg-[#EF476F] text-white font-medium hover:scale-105 transition-transform duration-150 shadow-sm"
  >
    Email
  </button>

  <Link 
    href="https://github.com/aya0221" 
    target="_blank" 
    className="px-5 py-2 rounded-full bg-[#073B4C] text-white font-medium hover:scale-105 transition-transform duration-150 shadow-sm"
  >
    GitHub
  </Link>

  <Link 
    href="https://www.linkedin.com/in/ayaoshima" 
    target="_blank" 
    className="px-5 py-2 rounded-full bg-[#118AB2] text-white font-medium hover:scale-105 transition-transform duration-150 shadow-sm"
  >
    LinkedIn
  </Link>

  <Link 
    href="https://huggingface.co/Aya-In-Brooklyn" 
    target="_blank" 
    className="px-5 py-2 rounded-full bg-[#FFD166] text-black font-medium hover:scale-105 transition-transform duration-150 shadow-sm"
  >
    Hugging Face
  </Link>

  <Link 
    href="/resume/AyaOshima_Resume.pdf" 
    target="_blank" 
    className="px-5 py-2 rounded-full bg-[#06D6A0] text-white font-medium hover:scale-105 transition-transform duration-150 shadow-sm flex items-center gap-2"
  >
    <FileText className="w-4 h-4" />
    Resume
  </Link>
</div> */}

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

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-muted p-6 rounded-xl shadow-sm">
                    {/* <h2 className="font-semibold text-lg leading-tight mb-2">Low-Latency Voice-to-NLP Recommendation System<br/><span className="text-sm font-normal text-muted-foreground">Fine-Tuned for Fast, High-Accuracy Personalized Search</span></h2> */}
                    <h2 className="font-semibold text-lg leading-tight mb-2">Real-Time ML<br/><span className="text-sm font-normal text-muted-foreground">recommender system</span></h2>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>low latency, high accuracy</li>
                      <li>built end-to-end, from scratch</li>
                      <li>fine-tuned few models, incoporating recommendation for first-time-users and existing users</li>
                      {/* <li>Delivered recommendations in &lt;0.2s latency</li> */}
                    </ul>
                  </div>

                  <div className="bg-muted p-6 rounded-xl shadow-sm">
                    <h2 className="font-semibold text-lg leading-tight mb-2">NeuroAI<br/><span className="text-sm font-normal text-muted-foreground">neural spike decoding</span></h2>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>MS Thesis at med-school neuroscience lab</li>
                      <li>Engineered statistical modelings</li>
                      {/* <li>Advanced neural decoding of volitional learning</li> */}
                    </ul>
                  </div>

                  <div className="bg-muted p-6 rounded-xl shadow-sm">
                    <h2 className="font-semibold text-lg leading-tight mb-2">Embedded AI<br/><span className="text-sm font-normal text-muted-foreground">AI in Robotics</span></h2>
                    <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                      <li>Demoed live to 10K+ tech/non-tech people at exihibition</li>
                      <li>Led AI development and deployment</li>
                      {/* <li>Deployed live at 10K+ visitor public exhibition</li> */}
                    </ul>
                  </div>
        </section>

        {/* About Section */}
        <section className="max-w-5xl space-y-8">
          <h2 className="text-3xl font-bold">About</h2>
          <div className="grid gap-12 md:grid-cols-[2fr,1fr] items-start">
            <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I’m a <strong>Machine Learning Engineer</strong> with hands-on <strong>industry</strong> and <strong>research</strong> experience in applied AI (<strong>NLP, Multimodal, computer vision</strong>), <strong>real-time ML system</strong>, and <strong>statistical analysis</strong>.
            </p>
                        <p>
            {/* In industry, as an <strong>ML Robotics Engineer</strong>, I led an embedded AI development (voice-to-motion robotics system), demoed live to 10K+ tech/non-tech people at national exhibition. I implemented the <strong>full AI pipeline</strong>: <u>speech recognition</u>, <u>real-time command mapping using a fine-tuned NLP model</u>, and <u>robotic motion execution</u>—all running on <strong>embedded hardware</strong>, with integrated <u>speech synthesis</u>. */}
            </p>

            <p>
              In academia research, at <strong>NYU Grossman School of Medicine - NYU Langon Hospital, Neuroscience</strong> lab, I engineered a statistical model (TCA) to decode PVN neural spike trains. With reducting the dimensionality and extracting the latent features, we revealed condition-dependent neural plasticity.
  

            </p>

            <p>
            As a technical initiative, I recently built a <strong>recommendation system</strong> that takes and transcribes voice input, extracts intents and entities, and retrieves ranked recommendations, run on scalable FastAPI, React.js, and Docer interface. Intent classification: <strong>99.8%</strong>accuracy. Entity extraction: <strong>99.97%</strong>F1. Achieved <strong>&lt;100ms</strong> E2E latency.
            {/* <div className="pt-2">
              <Link
                href="/resume/AyaOshima_Resume.pdf"
                target="_blank"
                className="text-sm font-medium underline text-black hover:text-gray-800"
              >
                See full resume
              </Link>
            </div> */}
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
                {/* <li>Engineered a real-time AI system that listens, understands, and recommends workouts instantly with <strong>&lt;0.2s total latency</strong>.</li>
                <li>Fine-tuned transformer models to achieve <strong>99.8% intent classification accuracy</strong> and <strong>99.97% entity extraction F1</strong>.</li>
                <li>Designed an end-to-end scalable backend with OpenSearch boosting, FastAPI, and React for seamless low-latency experience.</li> */}
                <li>Built end-to-end system with ASR input, intent/entity parsing, and semantic retrieval</li>
                <li>Achieved &lt;100ms E2E latency (React.js + FastAPI + Docker) </li>
                <li>Fine-tuned DistilBERT (intent) and RoBERTa-backed spaCy NER (entity), in PyTorch; achieved 99.8% intent accuracy and 99.97% entity F1, tracked via MLflow</li>
                <li>Implemented cold-start personalization via Bayesian smoothing + MMR reranking</li>
              </ul>
              <div className="flex flex-wrap gap-2 text-xs">
                {["NLP", "NLU", "BERT", "Transformer", "MLflow", "ASR", "DistilBERT", "RoBERTa", "spaCy", "Docker","OpenSearch", "FastAPI", "React", "Python"].map(tag => (
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
                {/* <li>Modeled PVN spike-train recordings by constructing <strong>neuron-time-trial tensors</strong> aligned to <strong>behavioral events</strong>.</li>
                <li>Applied <strong>Tensor Component Analysis (TCA)</strong> to decompose <strong>high-dimensional neural activity</strong> into interpretable <strong>latent factors</strong> across <strong>neurons</strong>, <strong>time</strong>, and <strong>trials</strong>.</li>
                <li>Modeled <strong>directional connectivity dynamics</strong> with <strong>Transfer Entropy</strong>, quantifying engagement-driven shifts in <strong>neural information flow</strong>.</li>
                <li>Demonstrated that <strong>volitional engagement</strong> sharpens <strong>temporal precision</strong>, strengthens <strong>synchrony</strong>, and stabilizes <strong>across-trial representations</strong>.</li> */}
                <li>Investigated social learning with neuromodulation and plasticity</li>
                <li>Decoded neural firings from oxytocin-linked PVN circuits, supporting complex high-dimensional data analysis</li>
                <li>Engineered a statistical model, Tensor Component Analysis (TCA), and developed time-series analysis pipelines for dimensionality reduction and feature extraction, implementing data processing methods including z-score normalization and Peri-Stimulus Time Histograms (PSTHs) in Python and MATLAB</li>
                <li>Identified increased neural synchrony, more stable assemblies, and enhanced temporal coding during active engagement, contributing to insights on oxytocin's impact on PVN plasticity</li>
              </ul>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Statistical Modeling", "Time Series Modeling/Analysis", "Tensor Decomposition", "TCA", "Dimensionality Reduction", "Neural Data Analysis", "Neural Decoding", "MATLAB", "Python"].map(tag => (
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
              className="inline-flex items-center px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-purple-100 via-gray-200 to-gray-200 text-gray-800 hover:from-gray-300 hover:to-gray-300 transition-all shadow-sm"
            >
              See More Works
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-sm">
            {/* Machine Learning */}
            <div>
              <h3 className="font-semibold text-base mb-2">ML/AI/DS/Data Analytics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "NLP", "Computer Vision", "Multimodal AI",
                  "NLU", "statistical modeling", "Statistical analysis", "Dimensionality Reduction (PCA, TCA)", "Speech Recognition", "end-to-end pipeline", "Deployment"
                ].map(skill => (
                  <span key={skill} className="px-2 py-0.5 rounded bg-muted text-muted-foreground border border-muted-foreground/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div>
              <h3 className="font-semibold text-base mb-2">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Transformers", "PyTorch", "TensorFlow", "HuggingFace", "Scikit-learn", "NumPy", "Pandas",
                  "Matplotlib", "Keras", "spaCy", "Seaborn", "Jupyter", "Django", "FastAPI", "React", "Javascript"
                ].map(skill => (
                  <span key={skill} className="px-2 py-0.5 rounded bg-muted text-muted-foreground border border-muted-foreground/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Algorithms */}
            {/* <div>
              <h3 className="font-semibold text-base mb-2">Algorithms</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "SVM", "Random Forests", "Decision Trees", "Logistic Regression", "HMM",
                  "K-means", "Kalman Filters"
                ].map(skill => (
                  <span key={skill} className="px-2 py-0.5 rounded bg-muted text-muted-foreground border border-muted-foreground/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div> */}

            {/* NeuroAI */}
            <div>
              <h3 className="font-semibold text-base mb-2">NeuroAI</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Neural Decoding", "Neural Data Analysis",
                  "EEG Signal Analysis", "Behavioral Modeling", "Computational Neuroscience"
                ].map(skill => (
                  <span key={skill} className="px-2 py-0.5 rounded bg-muted text-muted-foreground border border-muted-foreground/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* MLOps */}
            <div>
              <h3 className="font-semibold text-base mb-2">MLOps</h3>
              <div className="flex flex-wrap gap-2">
                {["Docker", "AWS", "CI/CD", "Git", "Linux", "Apache Spark", "Hadoop", "NLflow"].map(skill => (
                  <span key={skill} className="px-2 py-0.5 rounded bg-muted text-muted-foreground border border-muted-foreground/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h3 className="font-semibold text-base mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "MATLAB", "C++", "SQL", "Shell"].map(skill => (
                  <span key={skill} className="px-2 py-0.5 rounded bg-muted text-muted-foreground border border-muted-foreground/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        
        {/* Education Section */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Education</h2>
          <div className="space-y-1 text-muted-foreground text-base">
            <p><strong>Master’s in Computer Science</strong>, New York University – Tandon School of Engineering</p>
            <p><em>Thesis:</em> Tensor Component Analysis (TCA) for Neural Plasticity in Maternal Learning</p>
            {/* <p><em>Advisor:</em> Prof. Robert C. Froemke, NYU Langone Health – Neuroscience Institute</p> */}
          </div>
        </section>


        <section className="space-y-4">
        <h2 className="text-3xl font-bold"></h2>
          <p className="text-muted-foreground text-lg text-left max-w-4xl">
          <div className="text-muted-foreground text-lg text-left space-y-6">
            <p>
              <strong>A littel but about me</strong> 🌸
            </p>

            <p>
              To me, machine learning feels like music — creative and precise.<br />
              Growing up playing the piano, I was drawn to the rhythm of repetition, fine-tuning, and the meticulous process of constructing each part—then weaving everything together into a finished performance.<br />
              Designing AI systems felt strangely familiar — something I naturally understood and enjoyed.<br />
              I’m most alive when I’m solving something new, hard, or unseen.
            </p>

            <p>
              Outside of work (when I find a little time), I love traveling, dancing, and playing the piano.<br />
              Travel especially shaped me — meeting people from vastly different walks of life taught me more than any textbook ever could. Those memories are my invisible treasures.
            </p>

            <p>
              Thank you for being here. I hope something in my life or work speaks to you. 🥰
            </p>
          </div>
          </p>
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
