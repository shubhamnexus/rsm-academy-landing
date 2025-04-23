"use client"

interface BenefitPointProps {
  icon: React.ReactNode
  title: string
  description: string
}

function BenefitPoint({ icon, title, description }: BenefitPointProps) {
  return (
    <div className="flex gap-4 mb-6 group">
      <div className="flex-shrink-0 w-10 h-10 text-[#009BDE] self-center transition-all duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-6">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function ProfessionalExcellence() {
  const benefits = [
    {
      title: "Enhanced Professional Credibility",
      description: "Gain internationally recognized credentials that validate your expertise and boost your professional standing",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003219.png"
            alt="Enhanced Professional Credibility"
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "Strategic Decision-Making",
      description: "Develop advanced analytical and strategic thinking capabilities to make informed business decisions",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003207.png"
            alt="Strategic Decision-Making"
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "Networking Opportunities",
      description: "Connect with industry leaders and build valuable professional relationships across sectors",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003191.png"
            alt="Networking Opportunities"
            className="w-full h-full object-contain"
          />
        </div>
      )
    },
    {
      title: "Proactive Risk Management",
      description: "Master techniques to identify, assess, and mitigate business risks before they impact operations",
      icon: (
        <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003194.png"
            alt="Proactive Risk Management"
            className="w-full h-full object-contain"
          />
        </div>
      )
    }
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content - 5 columns (about 40%) */}
          <div className="lg:col-span-5">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Achieve Professional Excellence with Industry-Recognized Credentials
            </h2>
            <p className="text-gray-600 mb-8">
              Elevate your professional journey with RSM Saudi Arabia Professional Academy's accredited programs.
            </p>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <BenefitPoint
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              ))}
            </div>
          </div>

          {/* Image Container - 7 columns (about 60%) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Mask%20group.png"
                  alt="Professional Excellence 1"
                  className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Mask%20group%20(1).png"
                  alt="Professional Excellence 2"
                  className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="rounded-lg overflow-hidden group cursor-pointer">
                <img 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Mask%20group%20(2).png"
                  alt="Professional Excellence 3"
                  className="w-full h-auto object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}