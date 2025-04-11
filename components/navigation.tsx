"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu } from "lucide-react"

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

        {/* Mobile menu button */}
        <button onClick={toggleMenu} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8">
          {[
            ["home", "/"],
            ["about", "/about"],
            ["work", "/work"],
            // ["blog", "/blog"],
            // ["video", "/video"],
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
          <ModeToggle className="text-lg" />
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="absolute top-full left-0 right-0 bg-background md:hidden">
            <div className="container py-4 space-y-4">
              {[
                ["home", "/"],
                ["about", "/about"],
                ["work", "/work"],
                // ["blog", "/blog"],
                // ["video", "/video"],
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

