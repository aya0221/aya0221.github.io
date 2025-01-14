import Link from 'next/link'
import { formatDate } from '@/lib/utils'
import { Calendar, ArrowUpRight } from 'lucide-react'

const posts = [
  {
    title: "Exploring the Frontiers of AI: My Journey in Neural-Symbolic VQA",
    date: "2024-01-15",
    excerpt: "Reflecting on the challenges and breakthroughs in developing a multi-modal AI system that combines computer vision, NLP, and symbolic reasoning.",
    slug: "neural-symbolic-vqa-journey",
  },
  {
    title: "The Art of Object Tracking: Overcoming Occlusions with Deep Learning",
    date: "2023-12-10",
    excerpt: "Diving into the technical details of using CNNs and Kalman filters to track objects even when they're partially hidden from view.",
    slug: "object-tracking-deep-learning",
  },
  {
    title: "Dimensional Reduction in Neuroscience: Applying TCA to Brain Data",
    date: "2023-11-20",
    excerpt: "Exploring how advanced statistical models like TCA can help us uncover patterns in complex neuronal firing data.",
    slug: "dimensional-reduction-neuroscience",
  },
]

export default function BlogPage() {
  return (
    <div className="pt-32 pb-16">
      <div className="container max-w-4xl space-y-16">
        <section className="space-y-8">
          <h1 className="text-4xl font-bold gradient-text">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Thoughts, insights, and explorations in the world of AI, machine learning, and robotics.
          </p>
        </section>

        <section className="space-y-12">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="group block space-y-4 hover-lift"
            >
              <article className="p-6 rounded-xl border-2 border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground">{post.excerpt}</p>
                  </div>
                  <div className="flex items-center text-primary">
                    <span>Read more</span>
                    <ArrowUpRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </div>
    </div>
  )
}

