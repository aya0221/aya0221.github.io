import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import React from 'react'

export default function Home() {
  return (
    <div className="pt-32 pb-16">
      <div className="container space-y-24">
        {/* Hero Section */}
        <section className="max-w-4xl space-y-4">
          <h1 className="text-5xl font-bold leading-tight">
            AI Engineer turning <span className="gradient-text">cutting-edge research</span> into real-world products
          </h1>
          <p className="text-muted-foreground text-lg">
            I design end-to-end ML systems that deliver real-world impact—leveraging <strong>NLP</strong>, <strong>vision</strong>, and <strong>model optimization</strong> to solve complex problems with clarity and scale.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="bg-muted px-4 py-2 rounded-lg text-sm">
              <strong>Industry Experience</strong><br />
              <span className="text-muted-foreground">Embedded AI for Robotics — speech recognition, NLP, motion execution</span>
            </div>
            <div className="bg-muted px-4 py-2 rounded-lg text-sm">
              <strong>Academic Research</strong><br />
              <span className="text-muted-foreground">Neural decoding with TCA, high-dimensional signal analysis</span>
            </div>
            <div className="bg-muted px-4 py-2 rounded-lg text-sm">
              <strong>Full-Stack ML Projects</strong><br />
              <span className="text-muted-foreground">ASR, fine-tuned NLU, OpenSearch ranking, built from scratch</span>
            </div>
          </div>
        </section>

        {/* Highlighted Work */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold">Highlighted Work</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Voice AI Project */}
            <div className="p-6 rounded-lg border bg-card hover-lift colorful-border flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Voice AI Workout Assistant</h3>
                  <p className="text-sm text-muted-foreground">Real-time NLP system with ASR, hybrid NLU, and personalized search</p>
                </div>
                <Link href="https://github.com/aya0221/voice-nlp-workout-assistant" target="_blank">
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </Link>
              </div>
              <ul className="list-disc pl-5 text-muted-foreground text-sm">
                <li>Built a real-time voice AI system that transcribes, parses, and recommends workouts using ASR + NLU.</li>
                <li>Fine-tuned DistilBERT for intent classification and designed hybrid spaCy + rule-based NER.</li>
                <li>Integrated OpenSearch with boosting, delivered with FastAPI + React.</li>
              </ul>
              <div className="flex flex-wrap gap-2 text-xs">
                {["Whisper", "ASR", "DistilBERT", "NER", "spaCy", "OpenSearch", "FastAPI", "React", "Python"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
                ))}
              </div>
              <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/GDH2nT_EzUI"
                  title="Voice AI Workout Assistant Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
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
                <li>Developed Tensor Component Analysis to uncover neural dynamics in the maternal PVN circuit.</li>
                <li>Published thesis based on behavioral neuroscience research at NYU Langone.</li>
              </ul>
              <div className="flex flex-wrap gap-2 text-xs">
                {["TCA", "PCA", "Statistical Modeling", "Neuroscience", "MATLAB", "Python"].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-muted text-muted-foreground">{tag}</span>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <img src="/images/thesis_demo.jpg" alt="Thesis Image 1" className="w-full h-auto rounded-lg shadow-md" />
                <img src="/images/thesis_demo_paper1.jpg" alt="Thesis Image 2" className="w-full h-auto rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
