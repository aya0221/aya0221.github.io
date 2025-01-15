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
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="logo-container text-6xl font-bold">
          <span className="logo-static">AYAOSHIMA.</span>
          <span className="logo-extension logo-extension-m text-primary">M</span>
          <span className="logo-extension logo-extension-py text-primary">PY</span>
          <span className="logo-extension logo-extension-cpp text-primary">CPP</span>
        </Link>
        <nav className="flex items-center gap-8">
          {[
            ['about', '/about'],
            ['work', '/work'],
            ['blog', '/blog'],
            ['video', '/video']
          ].map(([label, path]) => (
            <Link
              key={path}
              href={path}
              className={cn(
                "nav-link text-2xl font-bold text-primary", // Increased text size, bold, and color
                pathname === path 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {label}
            </Link>
          ))}
          <ModeToggle className="text-lg" />
        </nav>
      </div>
    </header>
  )
}