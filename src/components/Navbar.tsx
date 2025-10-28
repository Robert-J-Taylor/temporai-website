"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "./shared/Logo";
import { smoothScrollToWithEasing } from "@/lib/smoothScroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (targetId: string) => {
    // Close mobile menu if open
    setIsOpen(false);
    // Smooth scroll with 80px offset for navbar height and some padding
    smoothScrollToWithEasing(targetId, 100, 1200);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="page-container">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center w-40 h-full">
              {/* Option 1: Image Logo (from original CDN) */}
              <Image
                src="https://cdn.prod.website-files.com/66d5ca37524e765da1668cc0/66df69a5568a759c8bdfeff6_newlogo%201-p-500.png"
                alt="DR HIRO Logo"
                className="h-8 sm:h-10 transition-transform duration-300 hover:scale-105"
                width={100}
                height={100}
              />
              
              {/* Option 2: Text Logo (uncomment to use instead of image) */}
              {/* <Logo size="sm" variant="gradient" className="text-gray-900" /> */}
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <button
              onClick={() => handleSmoothScroll('#how-it-works')}
              className="relative px-4 py-2 text-gray-700 hover:text-[#6cb3e3] transition-all duration-200 font-medium text-sm tracking-wide group"
            >
              How It Works
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6cb3e3] to-[#b9aad2] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => handleSmoothScroll('#roadmap')}
              className="relative px-4 py-2 text-gray-700 hover:text-[#6cb3e3] transition-all duration-200 font-medium text-sm tracking-wide group"
            >
              Roadmap
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6cb3e3] to-[#b9aad2] transition-all duration-300 group-hover:w-full"></span>
            </button>
            <a
              href="/about"
              className="relative px-4 py-2 text-gray-700 hover:text-[#6cb3e3] transition-all duration-200 font-medium text-sm tracking-wide group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6cb3e3] to-[#b9aad2] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/blog"
              className="relative px-4 py-2 text-gray-700 hover:text-[#6cb3e3] transition-all duration-200 font-medium text-sm tracking-wide group"
            >
              Blog
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6cb3e3] to-[#b9aad2] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="/getstarted"
              className="relative inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#6cb3e3] to-[#b9aad2] rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#6cb3e3]/30 hover:scale-105 group"
            >
              <span className="relative z-10">Get Started</span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#b9aad2] to-[#6cb3e3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <button 
                onClick={() => handleSmoothScroll('#how-it-works')}
                className="text-gray-600 hover:text-primary-500 block px-3 py-2 text-base font-medium w-full text-left"
              >
                How It Works
              </button>
              <button 
                onClick={() => handleSmoothScroll('#roadmap')}
                className="text-gray-600 hover:text-primary-500 block px-3 py-2 text-base font-medium w-full text-left"
              >
                Roadmap
              </button>
              <a href="/about" className="text-gray-600 hover:text-primary-500 block px-3 py-2 text-base font-medium">
                About Us
              </a>
              <a href="/blog" className="text-gray-600 hover:text-primary-500 block px-3 py-2 text-base font-medium">
                Blog
              </a>
              <a
                href="/getstarted"
                className="relative inline-flex items-center px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#6cb3e3] to-[#b9aad2] rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#6cb3e3]/30 hover:scale-105 group mt-4"
              >
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#b9aad2] to-[#6cb3e3] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
