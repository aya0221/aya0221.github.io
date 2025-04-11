// /components/footer.tsx

'use client';

import Link from 'next/link';
import { Mail, Github, Linkedin, MessageSquare, X, Copy } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  // State variables for managing popups
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

  // Prevent background scrolling when any modal is open
  useEffect(() => {
    if (isChatOpen || isMailOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isChatOpen, isMailOpen]);

  // Function to copy email to clipboard
  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('ayaoshima.us@gmail.com').then(
      () => {
        setCopySuccess('Copied!');
        setTimeout(() => setCopySuccess(''), 2000); // Clear message after 2 seconds
      },
      () => {
        setCopySuccess('Failed to copy!');
        setTimeout(() => setCopySuccess(''), 2000);
      }
    );
  };

  return (
    <footer className="py-8 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-8">
        {/* Icon Links with Optimized Colors */}
        <div className="flex flex-wrap justify-center items-center space-x-6 space-y-4 md:space-x-10 md:space-y-0">
          {/* Mail Icon as a Button */}
          <button
            onClick={() => setIsMailOpen(true)}
            className="bg-green-600 text-white rounded-full p-4 sm:p-6 hover:bg-green-700 transition-transform transform hover:scale-110 sm:hover:scale-125 shadow-lg flex items-center justify-center"
            aria-label="Contact via Email"
            title="Contact via Email"
          >
            <Mail className="h-6 sm:h-10 w-6 sm:w-10" /> 
          </button>

          {/* GitHub Link */}
          <Link
            href="https://github.com/aya0221"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-800 text-white rounded-full p-4 sm:p-6 hover:bg-purple-900 transition-transform transform hover:scale-110 sm:hover:scale-125 shadow-lg flex items-center justify-center"
            aria-label="GitHub"
            title="GitHub"
          >
            <Github className="h-6 sm:h-10 w-6 sm:w-10" />
          </Link>

          {/* LinkedIn Link */}
          <Link
            href="https://www.linkedin.com/in/ayaoshima"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-700 text-white rounded-full p-4 sm:p-6 hover:bg-blue-800 transition-transform transform hover:scale-110 sm:hover:scale-125 shadow-lg flex items-center justify-center"
            aria-label="LinkedIn"
            title="LinkedIn"
          >
            <Linkedin className="h-6 sm:h-10 w-6 sm:w-10" />
          </Link>

          {/* AyaChatBot Link */}
          {/* <Link
            href="https://aya-i2ad0xrl3-ao2368-nyuedus-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-700 text-white rounded-full p-4 sm:p-6 hover:bg-pink-800 transition-transform transform hover:scale-110 sm:hover:scale-125 shadow-lg flex items-center justify-center"
            aria-label="ChatBot"
            title="ChatBot"
          >
            <MessageSquare className="h-6 sm:h-10 w-6 sm:w-10" />
          </Link> */}
          
          


          {/* DialogFlow Chat Icon */}
          {/* <button
            onClick={() => setIsChatOpen(true)}
            className="bg-pink-500 text-white rounded-full p-4 sm:p-6 hover:bg-pink-600 transition-transform transform hover:scale-110 sm:hover:scale-125 shadow-lg flex items-center justify-center"
            aria-label="Open Chat"
            title="Open Chat"
          >
            <MessageSquare className="h-6 sm:h-10 w-6 sm:w-10" />
          </button> */}
        </div>

        {/* Footer Text */}
        <p className="text-green-500 font-bold text-xs sm:text-sm">© AYAOSHIMA 2025</p>
      </div>

      {/* Chatbox Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-md md:max-w-lg lg:max-w-2xl relative transition-colors duration-300">
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
              height="400"
              allow="microphone;"
              src="https://console.dialogflow.com/api-client/demo/embedded/17080eb2-7af3-4502-b067-16164bb23133"
              className="rounded-lg"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      )}

      {/* Mail Popup Modal */}
      {isMailOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-sm md:max-w-md p-6 relative transition-colors duration-300">
            {/* Close Button */}
            <button
              onClick={() => setIsMailOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white transition-colors"
              aria-label="Close Mail"
            >
              <X className="h-6 w-6" />
            </button>
            {/* Email Address Display */}
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Contact Me</h2>
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-3 sm:p-4 rounded mb-4">
              <span className="text-base sm:text-lg text-gray-700 dark:text-gray-300 select-all">ayaoshima.us@gmail.com</span>
              <button
                onClick={copyEmailToClipboard}
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100 transition-colors"
                aria-label="Copy Email"
                title="Copy Email"
              >
                <Copy className="h-4 sm:h-5 w-4 sm:w-5" />
              </button>
            </div>
            {/* Feedback Message */}
            {copySuccess && (
              <p className="text-green-500 text-sm mb-4">{copySuccess}</p>
            )}
            {/* Button to Open Mail Client */}
            <a
              href="mailto:ayaoshima.us@gmail.com"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors flex items-center justify-center w-full"
            >
              Send Email
            </a>
          </div>
        </div>
      )}
    </footer>
  );
}
