"use client"

import { motion } from "framer-motion"

export default function CompetitorsSection() {
  return (
    <section className="relative min-h-[500px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <motion.img
          src="https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Group%201000003221%20(1).png"
          alt="Background"
          className="w-full h-full object-cover"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-[#1B2B65] bg-opacity-0"></div>
      </motion.div>

      {/* Content */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="mb-2">Your Competitors Are Prioritizing Workforce Readiness</div>
            <div>Lead, Don't Follow</div>
          </motion.h2>
        </div>
        <motion.div 
          className="max-w-4xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <p className="text-base md:text-lg whitespace-nowrap">
            Build a high-performing workforce with specialized training and certification programs.
          </p>
        </motion.div>
        <motion.button 
          onClick={() => window.open('https://v0-rsm-five.vercel.app/', '_blank')}
          className="bg-[#00A6E6] text-white px-12 py-4 rounded-md text-xl font-semibold hover:bg-[#0095D1] transition-colors min-w-[300px]"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Secure Your Free Assessment
        </motion.button>
      </motion.div>
    </section>
  )
} 