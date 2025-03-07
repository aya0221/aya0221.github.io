"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Calendar, ArrowUpRight, Home, X, Filter, RefreshCw, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const categories = [
  {
    title: "Machine Learning",
    subcategories: ["NLP", "Computer Vision", "ML Algorithm"],
  },
  {
    title: "Statistics/Probability",
    subcategories: ["Statistics", "Probability", "Others"],
  },
  {
    title: "DSA",
    subcategories: ["Sorting"],
  },
  {
    title: "Computational Neuroscience",
    subcategories: ["Statistical Modeling on Neuron Data", "BCI Brain Computer Interface", "Hardware", "Computations"],
  },
  {
    title: "Operating System",
    subcategories: ["Theory", "Dualboot"],
  },
]

const posts = [
  {
    title: "Advanced Object Tracking with SSD MobileNet V3 and Kalman Filter",
    date: "2025-02-11",
    excerpt:
      "A deep dive into object tracking using SSD MobileNet V3 and Kalman Filter, covering real-time tracking, noise reduction, and multi-object handling in TensorFlow.",
    slug: "object-tracking-ssd-mobilenet-v3-kalman",
    category: "Computer Vision",
    tags: ["Object Tracking", "Computer Vision", "TensorFlow", "Kalman Filter"],
  },  
  {
    title: "Operating System Dualboot: A Comprehensive Guide",
    date: "2025-01-14",
    excerpt:
      "A detailed guide to setting up a dual-boot system with Windows and Linux, covering installation, partitioning, and troubleshooting.",
    slug: "operating-system-dualboot",
    category: "Operating System",
    tags: ["Dualboot", "Linux", "Windows", "OS", "Theory"],
  },
  {
    title: "Secure Coding Best Practices",
    date: "2025-01-15",
    excerpt: "Learn about secure coding principles to protect your software from vulnerabilities.",
    slug: "secure-coding-best-practices",
    category: "Software Development",
    tags: ["Security", "Coding", "Best Practices", "Theory"],
  },
  {
    title: "Introduction to Docker and Containerization",
    date: "2025-01-16",
    excerpt: "An overview of Docker and how containerization revolutionizes software development.",
    slug: "intro-to-docker-containerization",
    category: "DevOps",
    tags: ["Docker", "Containerization", "DevOps", "Theory"],
  },
  {
    title: "Design Patterns in Software Development",
    date: "2025-01-17",
    excerpt: "Exploring design patterns that improve the quality, scalability, and maintainability of software.",
    slug: "design-patterns-in-software-dev",
    category: "Software Design",
    tags: ["Design Patterns", "Software Development", "Theory"],
  },
  {
    title: "Getting Started with GraphQL",
    date: "2025-01-18",
    excerpt: "Understand the basics of GraphQL and how it simplifies API development.",
    slug: "getting-started-with-graphql",
    category: "API Development",
    tags: ["GraphQL", "API", "Backend", "Theory"],
  },
  {
    title: "Effective Error Handling in Software Development",
    date: "2025-01-19",
    excerpt: "Learn how to handle errors gracefully and maintain robust software systems.",
    slug: "effective-error-handling",
    category: "Software Development",
    tags: ["Error Handling", "Software Development", "Theory"],
  },
  {
    title: "(Coming Soon) Neural-Symbolic VQA: Challenges and Insights",
    date: "2024-01-15",
    excerpt:
      "Reflections on developing a multi-modal AI system integrating computer vision, NLP, and symbolic reasoning to improve question-answering accuracy.",
    slug: "neural-symbolic-vqa",
    category: "Machine Learning",
    tags: ["AI", "NLP", "Computer Vision", "ML Algorithm"],
  },
  {
    title: "(Coming Soon) Mastering Object Tracking with Kalman Filters",
    date: "2023-12-10",
    excerpt:
      "An exploration of how CNNs and Kalman Filters can address object occlusions, with applications in robotics and surveillance.",
    slug: "object-tracking-kalman",
    category: "Machine Learning",
    tags: ["AI", "Robotics", "Tracking", "Computer Vision", "ML Algorithm"],
  },
  {
    title: "(Coming Soon) Dimensional Reduction: Applying TCA to Brain Data",
    date: "2023-11-20",
    excerpt:
      "Insights from applying Tensor Component Analysis (TCA) to decode large-scale neural datasets, uncovering brain activity patterns.",
    slug: "dimensional-reduction",
    category: "Computational Neuroscience",
    tags: ["Computational Neuroscience", "Data Science", "Statistical Modeling on Neuron Data"],
  },
  {
    title: "Selection Sort",
    date: "2025-03-07",
    excerpt:
      "",
    slug: "sorting/selection-sort",
    category: "DSA",
    tags: ["Sorting", "Selection Sort"],
  },
  {
    title: "Bubble Sort",
    date: "2025-03-07",
    excerpt:
      "",
    slug: "sorting/bubble-sort",
    category: "DSA",
    tags: ["Sorting", "Bubble Sort"],
  },
  {
    title: "Insertion Sort",
    date: "2025-03-07",
    excerpt:
      "",
    slug: "sorting/insertion-sort",
    category: "DSA",
    tags: ["Sorting", "Insertion Sort"],
  }
]

export default function BlogPage() {
  const [navSearch, setNavSearch] = useState("")
  const [blogSearch, setBlogSearch] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const clearFilters = () => {
    setNavSearch("")
    setActiveFilters([])
  }

  const toggleFilter = (filter: string) => {
    setActiveFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  // Filter navigation categories
  const filteredCategories = categories.filter(
    (category) =>
      category.title.toLowerCase().includes(navSearch.toLowerCase()) ||
      category.subcategories.some((subcategory) => subcategory.toLowerCase().includes(navSearch.toLowerCase())),
  )

  // Filter blog posts
  const filteredPosts = posts.filter(
    (post) =>
      (activeFilters.length === 0 || activeFilters.some((filter) => post.tags.includes(filter))) &&
      (post.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(blogSearch.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(blogSearch.toLowerCase()))),
  )

  // Get all unique tags
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  return (
    <div className="pt-20 pb-16 flex flex-col md:flex-row">
      {/* Filter and Clear Buttons (Mobile) */}
      {isMobile && (
        <div className="flex justify-between mb-4 mx-4">
          <Button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex-1 mr-2">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
          <Button onClick={clearFilters} variant="outline" className="flex-1 ml-2">
            <RefreshCw className="mr-2 h-4 w-4" /> Clear
          </Button>
        </div>
      )}

      {/* Left Navigation */}
      <aside
        className={cn(
          "md:fixed md:top-20 md:left-0 md:h-[calc(100vh-5rem)] md:w-70 bg-card text-card-foreground shadow-md overflow-auto transition-all duration-300 ease-in-out",
          isMobile ? (isFilterOpen ? "fixed inset-0 z-50" : "hidden") : "block",
        )}
      >
        <div className="p-4">
          {isMobile && (
            <Button onClick={() => setIsFilterOpen(false)} className="mb-4" variant="outline">
              <X className="mr-2 h-4 w-4" /> Close
            </Button>
          )}
          {/* Navigation Search and Clear Button */}
          <div className="relative mb-4">
            <Input
              type="text"
              placeholder="Search Navigation..."
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
            />
            {navSearch && (
              <button
                className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                onClick={() => setNavSearch("")}
              >
                <X size={16} />
              </button>
            )}
          </div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Navigation</h2>
            {!isMobile && (
              <Button onClick={clearFilters} variant="outline" size="sm">
                <RefreshCw className="mr-2 h-4 w-4" /> Clear Filters
              </Button>
            )}
          </div>
          {filteredCategories.map((category, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-medium text-lg">{category.title}</h3>
              <ul className="ml-4 mt-2 space-y-1">
                {category.subcategories.map((subcategory, idx) => (
                  <li key={idx}>
                    <button
                      className={`text-sm text-muted-foreground hover:text-foreground ${
                        activeFilters.includes(subcategory) ? "font-bold text-foreground" : ""
                      }`}
                      onClick={() => toggleFilter(subcategory)}
                    >
                      {subcategory}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {filteredCategories.length === 0 && <p className="text-muted-foreground">No navigation items found.</p>}
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-72 p-4 md:p-8 w-full">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold gradient-text">Computer Science Blog</h1>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-primary hover:underline">
              <Home />
            </Link>
          </nav>
        </header>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="mb-4 flex flex-wrap gap-2">
            {activeFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="px-2 py-1 text-sm font-medium">
                {filter}
                <button
                  className="ml-1 text-muted-foreground hover:text-foreground"
                  onClick={() => toggleFilter(filter)}
                >
                  <X size={14} />
                </button>
              </Badge>
            ))}
          </div>
        )}

        {/* Blog Search */}
        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Search Blogs..."
            value={blogSearch}
            onChange={(e) => setBlogSearch(e.target.value)}
          />
          {blogSearch && (
            <button
              className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
              onClick={() => setBlogSearch("")}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Blog Content */}
        <section className="space-y-8">
          {filteredPosts.map((post, idx) => (
            <Link
              key={idx}
              href={`/blog/${post.slug}`}
              className="group block space-y-4 hover-lift border rounded-lg p-6 bg-card text-card-foreground shadow"
            >
              <article>
                <div className="mb-2 flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>{new Date(post.date).toDateString()}</time>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
                <div className="mt-4 flex items-center space-x-2 text-primary">
                  <span>Read more</span>
                  <ArrowUpRight />
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            </Link>
          ))}
          {filteredPosts.length === 0 && <p className="text-muted-foreground">No blogs match your search criteria.</p>}
        </section>
      </main>
    </div>
  )
}

