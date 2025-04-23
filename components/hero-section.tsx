"use client"

import Image from "next/image"
import CertificationsSection from './certifications-section'

export default function HeroSection() {
  return (
    <>
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Left side - Text content (60%) */}
            <div className="w-full md:w-3/5 pl-8 md:pl-12 lg:pl-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                <span className="text-[#3F9C35] text-4xl md:text-5xl lg:text-6xl">Elevate Organizational</span> <br />
                <span className="text-[#3F9C35] text-4xl md:text-5xl lg:text-6xl">Excellence</span> with Bespoke <br />
                Corporate Training
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Unlock a Complimentary Training Needs Assessment (Valued at SAR <br></br>7,500) to Diagnose Critical Skill Gaps and Align with Saudi Arabia's <br></br>Economic Ambitions
              </p>
              <button 
                className="bg-[#009BDE] hover:bg-[#0088C4] text-white font-semibold py-3 px-8 rounded-lg transition-colors"
                onClick={() => window.open('https://v0-rsm-five.vercel.app/', '_blank')}
              >
                Request Your Free Assessment
              </button>
            </div>

            {/* Right side - Video (40%) */}
            <div className="w-full md:w-2/5">
              <video
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/academy-header-aniamtion%20(1).webm"
                autoPlay
                loop
                muted
                playsInline
                disablePictureInPicture
                controlsList="nodownload nofullscreen noremoteplayback"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <CertificationsSection />
    </>
  )
} 