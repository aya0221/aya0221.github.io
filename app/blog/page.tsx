"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, ArrowUpRight, Home, X } from "lucide-react";

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
    title: "Data Structure/Coding",
    subcategories: ["Theory", "Leetcodes", "Others"],
  },
  {
    title: "Computational Neurosciec",
    subcategories: [
      "Statistical Modeling on Neuron Data",
      "BCI Brain Computer Interface",
      "Hardware",
      "Computations",
    ],
  },
  {
    title: "Operating System",
    subcategories: [
      "Theory",
      "Dualboot",
    ],
  },
];

const posts = [
  {
    title: "Operating System Dualboot: A Comprehensive Guide",
    date: "2025-01-14", // Update to today's date or your preferred date
    excerpt:
      "A detailed guide to setting up a dual-boot system with Windows and Linux, covering installation, partitioning, and troubleshooting.",
    slug: "operating-system-dualboot",
    category: "Operating System",
    tags: ["Dualboot", "Linux", "Windows"],
  },
  {
    title: "Secure Coding Best Practices",
    date: "2025-01-15",
    excerpt: "Learn about secure coding principles to protect your software from vulnerabilities.",
    slug: "secure-coding-best-practices",
    category: "Software Development",
    tags: ["Security", "Coding", "Best Practices"],
  },
  {
    title: "Introduction to Docker and Containerization",
    date: "2025-01-16",
    excerpt: "An overview of Docker and how containerization revolutionizes software development.",
    slug: "intro-to-docker-containerization",
    category: "DevOps",
    tags: ["Docker", "Containerization", "DevOps"],
  },
  {
    title: "Design Patterns in Software Development",
    date: "2025-01-17",
    excerpt: "Exploring design patterns that improve the quality, scalability, and maintainability of software.",
    slug: "design-patterns-in-software-dev",
    category: "Software Design",
    tags: ["Design Patterns", "Software Development"],
  },
  {
    title: "Getting Started with GraphQL",
    date: "2025-01-18",
    excerpt: "Understand the basics of GraphQL and how it simplifies API development.",
    slug: "getting-started-with-graphql",
    category: "API Development",
    tags: ["GraphQL", "API", "Backend"],
  },
  {
    title: "Effective Error Handling in Software Development",
    date: "2025-01-19",
    excerpt: "Learn how to handle errors gracefully and maintain robust software systems.",
    slug: "effective-error-handling",
    category: "Software Development",
    tags: ["Error Handling", "Software Development"],
  },
  {
    title: "(Coming Soon) Neural-Symbolic VQA: Challenges and Insights",
    date: "2024-01-15",
    excerpt:
      "Reflections on developing a multi-modal AI system integrating computer vision, NLP, and symbolic reasoning to improve question-answering accuracy.",
    slug: "neural-symbolic-vqa",
    category: "Machine Learning",
    tags: ["AI", "NLP", "Computer Vision"],
  },
  {
    title: "(Coming Soon) Mastering Object Tracking with Kalman Filters",
    date: "2023-12-10",
    excerpt:
      "An exploration of how CNNs and Kalman Filters can address object occlusions, with applications in robotics and surveillance.",
    slug: "object-tracking-kalman",
    category: "Machine Learning",
    tags: ["AI", "Robotics", "Tracking"],
  },
  {
    title: "(Coming Soon) Dimensional Reduction: Applying TCA to Brain Data",
    date: "2023-11-20",
    excerpt:
      "Insights from applying Tensor Component Analysis (TCA) to decode large-scale neural datasets, uncovering brain activity patterns.",
    slug: "dimensional-reduction",
    category: "Computational Neuroscience",
    tags: ["Computational Neuroscience", "Data Science"],
  },
];

export default function BlogPage() {
  const [navSearch, setNavSearch] = useState("");
  const [blogSearch, setBlogSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Filter navigation categories
  const filteredCategories = categories.filter(
    (category) =>
      category.title.toLowerCase().includes(navSearch.toLowerCase()) ||
      category.subcategories.some((subcategory) =>
        subcategory.toLowerCase().includes(navSearch.toLowerCase())
      )
  );

  // Filter blog posts
  const filteredPosts = posts.filter(
    (post) =>
      (!activeCategory || post.category === activeCategory) &&
      (post.title.toLowerCase().includes(blogSearch.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(blogSearch.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(blogSearch.toLowerCase())))
  );

  return (
    <div className="pt-20 pb-16 flex">
      {/* Left Navigation */}
      {/* <aside className="fixed top-20 left-0 h-[calc(100vh-5rem)] w-64 bg-gray-100 text-gray-800 shadow-md overflow-auto"> */}
      <aside className="fixed top-20 left-0 h-[calc(100vh-5rem)] w-70 bg-gray-100 text-gray-800 shadow-md overflow-auto">
        <div className="p-4">
          {/* Navigation Search */}
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search Navigation..."
              className="w-full border px-3 py-2 rounded-md"
              value={navSearch}
              onChange={(e) => setNavSearch(e.target.value)}
            />
            {navSearch && (
              <button
                className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
                onClick={() => setNavSearch("")}
              >
                <X size={16} />
              </button>
            )}
          </div>
          <h2 className="text-xl font-bold mb-4">Navigation</h2>
          {filteredCategories.map((category, idx) => (
            <div key={idx} className="mb-4">
              <h3 className="font-medium text-lg">{category.title}</h3>
              <ul className="ml-4 mt-2 space-y-1">
                {category.subcategories.map((subcategory, idx) => (
                  <li key={idx}>
                    <button
                      className={`text-sm text-gray-600 hover:text-gray-800 ${
                        activeCategory === subcategory ? "font-bold" : ""
                      }`}
                      onClick={() =>
                        setActiveCategory(
                          activeCategory === subcategory ? null : subcategory
                        )
                      }
                    >
                      {subcategory}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {filteredCategories.length === 0 && (
            <p className="text-gray-500">No navigation items found.</p>
          )}
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-72 p-8">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold gradient-text">AI Research Blog</h1>
          <nav className="flex items-center space-x-4">
            <Link href="/" className="text-blue-500 hover:underline">
              <Home />
            </Link>
          </nav>
        </header>

        {/* Blog Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search Blogs..."
            className="w-full border px-3 py-2 rounded-md"
            value={blogSearch}
            onChange={(e) => setBlogSearch(e.target.value)}
          />
          {blogSearch && (
            <button
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
              onClick={() => setBlogSearch("")}
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Blog Content */}
        <section className="space-y-16">
          {filteredPosts.map((post, idx) => (
            <Link
              key={idx}
              href={`/blog/${post.slug}`}
              className="group block space-y-4 hover-lift border rounded-lg p-6 bg-white text-gray-800 shadow"
            >
              <article>
                <div className="mb-2 flex items-center space-x-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.date}>
                    {new Date(post.date).toDateString()}
                  </time>
                </div>
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-500">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="mt-4 flex items-center space-x-2 text-blue-500">
                  <span>Read more</span>
                  <ArrowUpRight />
                </div>
              </article>
            </Link>
          ))}
          {filteredPosts.length === 0 && (
            <p className="text-gray-500">No blogs match your search criteria.</p>
          )}
        </section>
      </main>
    </div>
  );
}
