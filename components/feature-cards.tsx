"use client"

import Image from "next/image"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm flex flex-col items-start text-left">
      <div className="mb-3 text-[#009BDE]">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default function FeatureCards() {
  const features = [
    {
      title: "Global Expertise with Local Insights",
      description: "We combine international standards with a deep understanding of the Saudi market to deliver impactful training.",
    },
    {
      title: "Tailored Solutions",
      description: "Each program is customized to meet your unique business needs and goals.",
    },
    {
      title: "Recognized Excellence",
      description: "Certifications accredited by RSM, signifying global credibility and professional achievement.",
    },
    {
      title: "Expert-Led, Interactive Training",
      description: "Learn from industry leaders through engaging, hands-on sessions designed for real-world impact.",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto px-4">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={
            index === 0 ? 
              <img 
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003200%20(1).png"
                alt="Global Expertise Icon"
                className="w-10 h-10 object-contain"
              /> :
            index === 1 ?
              <img 
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003201.png"
                alt="Tailored Solutions Icon"
                className="w-10 h-10 object-contain"
              /> :
            index === 2 ?
              <img 
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003185.png"
                alt="Recognized Excellence Icon"
                className="w-10 h-10 object-contain"
              /> :
              <img 
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003204%20(1).png"
                alt="Expert-Led Training Icon"
                className="w-10 h-10 object-contain"
              />
          }
        />
      ))}
    </div>
  )
} 