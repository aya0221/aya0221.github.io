import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-accent/10 py-8">
      <div className="container flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aya Oshima. All rights reserved.
        </p>
        <div className="flex items-center space-x-6">
          <Link
            href="mailto:ayaoshima.us@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-8 w-8" /> {/* Increased icon size */}
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://github.com/aya0221"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-8 w-8" /> {/* Increased icon size */}
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ayaoshima"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-8 w-8" /> {/* Increased icon size */}
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}