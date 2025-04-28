"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, Mail, Github, Linkedin } from "lucide-react"
import { SiHuggingface } from "react-icons/si" // Import HuggingFace icon separately

export function Navigation() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-20 px-4">
        <Link href="/" className="logo-container text-4xl sm:text-5xl md:text-6xl font-bold">
          <span className="logo-static">AYAOSHIMA.</span>
          <span className="logo-extension logo-extension-m text-primary">M</span>
          <span className="logo-extension logo-extension-py text-primary">PY</span>
          <span className="logo-extension logo-extension-cpp text-primary">CPP</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {[
            ["home", "/"],
            ["work", "/work"],
          ].map(([label, path]) => (
            <Link
              key={path}
              href={path}
              className={cn(
                "nav-link text-xl lg:text-2xl font-bold",
                pathname === path ? "text-primary" : "text-muted-foreground hover:text-primary",
              )}
            >
              {label}
            </Link>
          ))}

          {/* Social icons */}
          <div className="flex items-center gap-3 pl-6">
            {/* Mail */}
            <Link
              href="mailto:ayaoshima.us@gmail.com"
              className="bg-green-600 text-white rounded-full p-2 hover:bg-green-700 transition-transform transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </Link>

            {/* GitHub */}
            <Link
              href="https://github.com/aya0221"
              target="_blank"
              className="bg-gray-800 text-white rounded-full p-2 hover:bg-gray-900 transition-transform transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/ayaoshima"
              target="_blank"
              className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-transform transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </Link>

            {/* HuggingFace */}
            <Link
              href="https://huggingface.co/Aya-In-Brooklyn"
              target="_blank"
              className="bg-yellow-400 text-black rounded-full p-2 hover:bg-yellow-500 transition-transform transform hover:scale-110"
              aria-label="Hugging Face"
            >
              <SiHuggingface className="w-5 h-5" />
            </Link>
          </div>

          <ModeToggle className="text-lg" />
        </nav>

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background md:hidden">
            <div className="container py-4 space-y-4">
              {[
                ["home", "/"],
                ["work", "/work"],
              ].map(([label, path]) => (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    "block nav-link text-xl font-bold py-2 px-4",
                    pathname === path ? "text-primary" : "text-muted-foreground hover:text-primary",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <div className="pt-2 px-4">
                <ModeToggle className="text-lg" />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
