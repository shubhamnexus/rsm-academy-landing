"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}

function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-start text-left border border-gray-100 hover:border-[#009BDE]/20 hover:bg-gradient-to-br hover:from-white hover:to-[#009BDE]/5"
    >
      <div className="mb-4 text-[#009BDE] transform hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          index={index}
          icon={
            index === 0 ? 
              <img 
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003200%20(1).png"
                alt="Global Expertise Icon"
                className="w-12 h-12 object-contain"
              /> :
            index === 1 ?
              <img 
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003201.png"
                alt="Tailored Solutions Icon"
                className="w-12 h-12 object-contain"
              /> :
            index === 2 ?
              <img 
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003185.png"
                alt="Recognized Excellence Icon"
                className="w-12 h-12 object-contain"
              /> :
              <img 
                src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003204%20(1).png"
                alt="Expert-Led Training Icon"
                className="w-12 h-12 object-contain"
              />
          }
        />
      ))}
    </div>
  )
} 