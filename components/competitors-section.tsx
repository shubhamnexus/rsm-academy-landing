"use client"

export default function CompetitorsSection() {
  return (
    <section className="relative min-h-[500px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003221%20(1).png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#1B2B65] bg-opacity-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            <div className="mb-2">Your Competitors Are Prioritizing Workforce Readiness</div>
            <div>Lead, Don't Follow</div>
          </h2>
        </div>
        <div className="max-w-4xl mx-auto mb-10">
          <p className="text-base md:text-lg whitespace-nowrap">
            Build a high-performing workforce with specialized training and certification programs.
          </p>
        </div>
        <button 
          onClick={() => window.open('https://v0-rsm-five.vercel.app/', '_blank')}
          className="bg-[#00A6E6] text-white px-12 py-4 rounded-md text-xl font-semibold hover:bg-[#0095D1] transition-colors min-w-[300px]"
        >
          Secure Your Free Assessment
        </button>
      </div>
    </section>
  )
} 