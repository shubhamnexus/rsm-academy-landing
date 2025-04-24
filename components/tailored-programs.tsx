"use client"

import FeatureCards from "./feature-cards"
import { motion } from "framer-motion"

export default function TailoredPrograms() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-b from-[#F3F3F3] to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-12 text-center leading-[1.6] py-1 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600"
          >
            Bridging Skill Gaps with Globally Accredited, <br />Saudi-Tailored Programs
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 space-y-4 text-center"
          >
            <p className="text-center leading-relaxed max-w-6xl mx-auto hover:text-gray-800 transition-colors duration-300">
              At RSM Saudi Arabia Professional Academy, we are committed to empowering organizations and individuals to excel in today's competitive business landscape.
            </p>
            <p className="text-center leading-relaxed max-w-6xl mx-auto hover:text-gray-800 transition-colors duration-300">
              Our comprehensive training programs encompass a diverse range of technical and non-technical training, vocational training, and interactive learning experiences designed to develop leadership capabilities, enhance workforce skills, and drive measurable growth. Through innovative, industry-relevant content, we equip professionals with the knowledge and practical tools needed to achieve sustainable success.
            </p>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <FeatureCards />
        </motion.div>
      </div>
    </section>
  )
} 