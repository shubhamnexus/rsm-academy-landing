"use client"

interface ApproachStepProps {
  icon: React.ReactNode
  title: string
  description: string
  isLast?: boolean
  index: number
}

function ApproachStep({ icon, title, description, isLast = false, index }: ApproachStepProps) {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="w-16 h-16 mb-3 rounded-full overflow-hidden">
        {icon}
      </div>
      <h3 className="font-semibold mb-1.5">{title}</h3>
      <p className="text-gray-600 text-sm max-w-[200px]">{description}</p>
      
      {/* Connecting curved dotted line with arrow - alternating up and down */}
      {!isLast && (
        <>
          {index === 1 ? (
            <div className="hidden md:block absolute -top-4 -right-16 w-32 h-16">
              <img 
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003221%20(4).png"
                alt="Connecting arrow"
                className="w-full h-full object-contain"
              />
            </div>
          ) : (
            <div className="hidden md:block absolute top-6 -right-16 w-32 h-16">
              {index === 0 || index === 2 ? (
                <img 
                  src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003221%20(2).png"
                  alt="Connecting arrow"
                  className="w-full h-full object-contain"
                />
              ) : (
                <svg width="100%" height="100%" viewBox="0 0 128 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {index % 2 === 0 ? (
                    // Upward curve (crest)
                    <>
                      <path 
                        d="M0 32C20 32 30 60 64 60C98 60 108 4 128 4" 
                        stroke="#D1D5DB" 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                      />
                      {/* Arrow head pointing up */}
                      <path 
                        d="M121 8L128 4L121 0" 
                        stroke="#D1D5DB" 
                        strokeWidth="2"
                        fill="none"
                      />
                    </>
                  ) : (
                    // Downward curve (trough)
                    <>
                      <path 
                        d="M0 32C20 32 30 4 64 4C98 4 108 60 128 60" 
                        stroke="#D1D5DB" 
                        strokeWidth="2" 
                        strokeDasharray="4 4"
                      />
                      {/* Arrow head pointing down */}
                      <path 
                        d="M121 64L128 60L121 56" 
                        stroke="#D1D5DB" 
                        strokeWidth="2"
                        fill="none"
                      />
                    </>
                  )}
                </svg>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default function ProvenApproach() {
  const steps = [
    {
      title: "Assessment & Planning",
      description: "We assess your team's needs, identify skill gaps, and set clear objectives.",
      icon: (
        <div className="w-full h-full bg-[#F0F5F4] flex items-center justify-center">
          <img 
            src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/icon1.png"
            alt="Assessment & Planning Icon"
            className="w-full h-full"
          />
        </div>
      )
    },
    {
      title: "Customized Curriculum",
      description: "Courses designed specifically for your industry, challenges, and goals.",
      icon: (
        <div className="w-full h-full bg-[#F0F5F4] flex items-center justify-center">
          <img 
            src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/icon2.png"
            alt="Customized Curriculum Icon"
            className="w-full h-full"
          />
        </div>
      )
    },
    {
      title: "Interactive Learning",
      description: "Engaging training sessions led by industry experts.",
      icon: (
        <div className="w-full h-full bg-[#F0F5F4] flex items-center justify-center">
          <img 
            src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/icon3.png"
            alt="Interactive Learning Icon"
            className="w-full h-full"
          />
        </div>
      )
    },
    {
      title: "Impact Evaluation",
      description: "Measurable results using KPIs, feedback surveys, and performance reports.",
      icon: (
        <div className="w-full h-full bg-[#F0F5F4] flex items-center justify-center">
          <img 
            src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/icon14.png"
            alt="Impact Evaluation Icon"
            className="w-full h-full"
          />
        </div>
      )
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Our Proven Approach to Business Training
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At RSM Saudi Arabia Professional Academy, our training methodology ensures lasting organizational results:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {steps.map((step, index) => (
            <ApproachStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
} 