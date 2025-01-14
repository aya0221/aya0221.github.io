'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ModeToggle } from '@/components/mode-toggle';

export function Navigation() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container flex items-center justify-between h-20 max-w-6xl mx-auto px-4">
        {/* Logo Section */}
        <Link
          href="/"
          className="flex items-center space-x-4"
        >
          <img
            src="/images/ayalogo.jpg"
            alt="Aya Oshima Logo"
            className="w-16 h-16 rounded-full border-4 border-primary hover:scale-105 transition-transform"
          />
          <span className="text-4xl font-bold gradient-text">
            AYAOSHIMA<span className="rotate-text"></span>
          </span>
        </Link>
        {/* Navigation Links */}
        <nav className="flex items-center space-x-12">
          <Link
            href="/about"
            className={cn(
              'text-xl font-semibold text-gradient hover:scale-110 transition-transform',
              pathname === '/about' && 'text-primary'
            )}
          >
            about
          </Link>
          <Link
            href="/work"
            className={cn(
              'text-xl font-semibold text-gradient hover:scale-110 transition-transform',
              pathname === '/work' && 'text-primary'
            )}
          >
            work
          </Link>
          <Link
            href="/blog"
            className={cn(
              'text-xl font-semibold text-gradient hover:scale-110 transition-transform',
              pathname === '/blog' && 'text-primary'
            )}
          >
            blog
          </Link>
          <Link
            href="/video"
            className={cn(
              'text-xl font-semibold text-gradient hover:scale-110 transition-transform',
              pathname === '/video' && 'text-primary'
            )}
          >
            video
          </Link>
        </nav>
        {/* Mode Toggle */}
        <ModeToggle />
      </div>
    </header>
  );
}
