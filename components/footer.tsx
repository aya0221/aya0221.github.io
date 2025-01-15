import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8">
      <div className="container flex flex-col items-center space-y-8">
        {/* Icon Links with Optimized Colors */}
        <div className="flex items-center space-x-10">
          <Link
            href="mailto:ayaoshima.us@gmail.com"
            className="bg-green-500 text-white rounded-full p-6 hover:bg-green-600 transition-transform transform hover:scale-125 shadow-lg"
          >
            <Mail className="h-10 w-10" />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://github.com/aya0221"
            className="bg-blue-500 text-white rounded-full p-6 hover:bg-blue-600 transition-transform transform hover:scale-125 shadow-lg"
          >
            <Github className="h-10 w-10" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/ayaoshima"
            className="bg-green-500 text-white rounded-full p-6 hover:bg-green-600 transition-transform transform hover:scale-125 shadow-lg"
          >
            <Linkedin className="h-10 w-10" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
        {/* Footer Text */}
        <p className="text-green-500 font-bold text-sm">COPYRIGHT AYAOSHIMA 2024</p>
      </div>
    </footer>
  );
}
