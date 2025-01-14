'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/mode-toggle'

export function Navigation() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-16 max-w-7xl mx-auto px-4">
        {/* Updated Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-lg font-bold gradient-text"
        >
          <img
            src="/path-to-your-logo.jpg" // Replace with your logo path
            alt="AO Logo"
            className="w-10 h-10 rounded-full border-2 border-primary hover:scale-105 transition-transform"
          />
          <span className="text-primary hover:text-secondary">AO</span>
        </Link>

        <nav className="flex items-center space-x-8">
          <Link
            href="/about"
            className={cn(
              "link-underline",
              pathname === '/about' ? "text-primary" : "text-muted-foreground"
            )}
          >
            about
          </Link>
          <Link
            href="/work"
            className={cn(
              "link-underline",
              pathname === '/work' ? "text-primary" : "text-muted-foreground"
            )}
          >
            work
          </Link>
          <Link
            href="/blog"
            className={cn(
              "link-underline",
              pathname === '/blog' ? "text-primary" : "text-muted-foreground"
            )}
          >
            blog
          </Link>
          <Link
            href="/video"
            className={cn(
              "link-underline",
              pathname === '/video' ? "text-primary" : "text-muted-foreground"
            )}
          >
            video
          </Link>
        </nav>

        <ModeToggle />
      </div>
    </header>
  )
}
