// /components/footer.tsx

'use client';

import Link from 'next/link';
import { Mail, Github, Linkedin, MessageSquare, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isChatOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isChatOpen]);

  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container flex flex-col items-center space-y-8">
        {/* Icon Links with Optimized Colors */}
        <div className="flex items-center space-x-10">
          <Link
            href="mailto:ayaoshima.us@gmail.com"
            className="bg-green-500 text-white rounded-full p-6 hover:bg-green-600 transition-transform transform hover:scale-125 shadow-lg"
            aria-label="Email"
          >
            <Mail className="h-10 w-10" />
          </Link>
          <Link
            href="https://github.com/aya0221"
            className="bg-blue-500 text-white rounded-full p-6 hover:bg-blue-600 transition-transform transform hover:scale-125 shadow-lg"
            aria-label="GitHub"
          >
            <Github className="h-10 w-10" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ayaoshima"
            className="bg-green-500 text-white rounded-full p-6 hover:bg-green-600 transition-transform transform hover:scale-125 shadow-lg"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-10 w-10" />
          </Link>
          {/* Chat Icon */}
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-purple-500 text-white rounded-full p-6 hover:bg-purple-600 transition-transform transform hover:scale-125 shadow-lg"
            aria-label="Open Chat"
          >
            <MessageSquare className="h-10 w-10" />
          </button>
        </div>

        {/* Footer Text */}
        <p className="text-green-500 font-bold text-sm">COPYRIGHT AYAOSHIMA 2024</p>
      </div>

      {/* Chatbox Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-11/12 md:w-1/2 lg:w-1/3 relative transition-colors duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white transition-colors"
              aria-label="Close Chat"
            >
              <X className="h-6 w-6" />
            </button>
            {/* Chatbox Iframe */}
            <iframe
              title="Chatbot"
              width="100%"
              height="500"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/17080eb2-7af3-4502-b067-16164bb23133"
              className="rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}
    </footer>
  );
}
