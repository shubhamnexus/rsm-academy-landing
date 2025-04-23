"use client"

import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { ChevronDown, ShoppingBag, User } from "lucide-react"

export default function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo area */}
          <div className="flex-shrink-0 w-64">
            <Link 
              href="https://rsmacademy-sa.com/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center h-full"
            >
              <img
                src="/rsm-saudi-tech-logo.png"
                alt="RSM Saudi Tech Logo"
                className="h-16 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            {/* About Us with dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center text-gray-700 hover:text-gray-900"
                onClick={() => setIsAboutOpen(!isAboutOpen)}
              >
                About Us
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAboutOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-lg bg-white py-2 shadow-xl ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out">
                  <Link 
                    href="https://rsmacademy-sa.com/foreword" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                  >
                    Presentation
                  </Link>
                  <div className="border-t border-gray-100"></div>
                  <Link 
                    href="https://rsmacademy-sa.com/vision" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                  >
                    Vision
                  </Link>
                  <div className="border-t border-gray-100"></div>
                  <Link 
                    href="https://rsmacademy-sa.com/mission" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                  >
                    Message
                  </Link>
                  <div className="border-t border-gray-100"></div>
                  <Link 
                    href="https://rsmacademy-sa.com/objectives" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                  >
                    Objectives
                  </Link>
                  <div className="border-t border-gray-100"></div>
                  <Link 
                    href="https://rsmacademy-sa.com/core_values" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-150"
                  >
                    Our Values
                  </Link>
                </div>
              )}
            </div>

            {/* Other nav items */}
            <Link 
              href="https://rsmacademy-sa.com/courses" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900"
            >
              Courses
            </Link>
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Corporate Training
            </Link>
            <Link 
              href="https://rsmacademy-sa.com/contact_us"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-gray-700 hover:text-gray-900"
            >
              Contact Us
            </Link>
          </nav>

          {/* Right side - Sign in and Cart */}
          <div className="flex items-center space-x-4">
            <Link 
              href="https://v0-rsm-five.vercel.app/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900"
            >
              <User className="mr-1 h-5 w-5" />
              <span>Sign in</span>
            </Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          </div>

          {/* Mobile menu button - hidden on desktop */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
