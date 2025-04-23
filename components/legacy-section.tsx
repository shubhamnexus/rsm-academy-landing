"use client"

import { useState, useRef, useEffect } from 'react'

export default function LegacySection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClose = () => {
    setIsVideoOpen(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    if (isVideoOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => {
        document.removeEventListener('keydown', handleEscape)
      }
    }
  }, [isVideoOpen])

  return (
    <section className="bg-[#F3F3F3] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Video Container */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] w-[95%] bg-navy-900 rounded-lg overflow-hidden">
              <img 
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/BG%20(2).png"
                alt="Video thumbnail"
                className="absolute inset-0 w-[101%] h-[101%] -left-[0.5%] -top-[0.5%] object-cover object-center"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-[#001B3D]/50">
                <button 
                  className="w-16 h-16 rounded-full bg-[#009BDE] flex items-center justify-center hover:bg-[#0081b8] transition-colors"
                  aria-label="Play video"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <svg 
                    className="w-8 h-8 text-white ml-1" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              RSM Saudi Arabia: A Legacy of Excellence Leveraging Global Expertise with Local Insights
            </h2>
            <p className="text-gray-600 leading-relaxed">
              RSM Saudi Arabia stands as a trusted partner for businesses, combining global expertise with deep local insights to deliver tailored solutions. With a legacy of excellence, we bring decades of industry knowledge and international best practices to the Saudi market. Our commitment to quality, integrity, and innovation empowers clients to navigate complex challenges with confidence. By understanding the unique dynamics of the local business environment, we provide insights that foster growth and resilience. At RSM Saudi Arabia, we don't just offer services—we build long-term partnerships that drive success.
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          onClick={handleClose}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 right-4 z-[60] p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors cursor-pointer"
              onClick={handleClose}
              aria-label="Close video"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <video
                ref={videoRef}
                className="max-h-screen max-w-full w-auto h-auto"
                controls
                autoPlay
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/RSM%20Academy%20AI%20Reel.mp4"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
} 