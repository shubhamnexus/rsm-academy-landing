"use client"

import { motion } from "framer-motion"

interface TrainingCardProps {
  title: string
  description: string
  imageSrc?: string
  isExploreCard?: boolean
  index?: number
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.15,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }),
  hover: {
    y: -8,
    scale: 1.02,
    boxShadow: "0 20px 25px -5px rgba(0, 155, 222, 0.1), 0 10px 10px -5px rgba(0, 155, 222, 0.04)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: delay,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

export default function TrainingCard({ title, description, imageSrc, isExploreCard = false, index = 0 }: TrainingCardProps) {
  if (isExploreCard) {
    return (
      <motion.div 
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover="hover"
        custom={index}
        className="bg-gradient-to-br from-white to-[#009BDE]/5 p-8 rounded-xl shadow-sm flex flex-col items-center text-center h-[240px] justify-center border border-[#009BDE]/10 hover:border-[#009BDE]/30 transition-all duration-300"
      >
        <motion.h3 
          variants={contentVariants}
          custom={index * 0.15 + 0.2}
          className="text-xl font-semibold mb-4 text-[#009BDE]"
        >
          {title}
        </motion.h3>
        <motion.p 
          variants={contentVariants}
          custom={index * 0.15 + 0.3}
          className="text-gray-600 mb-6"
        >
          {description}
        </motion.p>
        <motion.button 
          variants={contentVariants}
          custom={index * 0.15 + 0.4}
          whileHover={{ scale: 1.05, backgroundColor: "#0081b8" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://rsmacademy.vercel.app/', '_blank')}
          className="bg-[#009BDE] text-white px-6 py-2 rounded-md transition-colors"
        >
          Schedule a Consultation
        </motion.button>
      </motion.div>
    )
  }

  return (
    <motion.div 
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover="hover"
      custom={index}
      className="bg-gradient-to-br from-white to-[#009BDE]/5 rounded-xl shadow-sm overflow-hidden border border-[#009BDE]/10 hover:border-[#009BDE]/30 transition-all duration-300 h-full"
    >
      <motion.div 
        variants={contentVariants}
        custom={index * 0.15 + 0.1}
        className="aspect-w-16 aspect-h-9 overflow-hidden"
      >
        {imageSrc && (
          <motion.img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.div>
      <motion.div 
        variants={contentVariants}
        custom={index * 0.15 + 0.2}
        className="p-6 flex flex-col items-center text-center h-[180px] justify-between"
      >
        <h3 className="text-xl font-semibold mb-2 text-[#009BDE]">{title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">{description}</p>
      </motion.div>
    </motion.div>
  )
} 