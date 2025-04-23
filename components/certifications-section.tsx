import { motion } from 'framer-motion'
import Image from 'next/image'

export default function CertificationsSection() {
  return (
    <section className="w-full bg-[#00153D] py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Text Content */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Certifications & Accreditations
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            RSM Saudi Arabia Professional Academy holds industry-leading certifications, ensuring top-quality professional training.
          </motion.p>
        </motion.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center">
          {[
            {
              src: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Clip%20path%20group.png",
              alt: "Certification Logo 1",
              isSpecial: false
            },
            {
              src: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/Clip%20path%20group%20(1).png",
              alt: "Certification Logo 2",
              isSpecial: false
            },
            {
              src: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/IMG-20250423-WA0004.jpg",
              alt: "Certification Logo 3",
              isSpecial: true
            },
            {
              src: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/IMG-20250423-WA0006.jpg",
              alt: "Certification Logo 4",
              isSpecial: true
            }
          ].map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  duration: 0.3,
                  ease: "easeOut"
                }
              }}
              className={`w-full max-w-[${logo.isSpecial ? '240px' : '200px'}] h-[120px] relative flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg p-2 ${
                logo.isSpecial ? 'bg-white/10' : ''
              } group hover:bg-white/20 transition-all duration-300`}
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
                className="relative w-full h-full"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.isSpecial ? 220 : 180}
                  height={logo.isSpecial ? 110 : 110}
                  className={`object-contain w-full h-full ${
                    logo.isSpecial ? 'brightness-110 contrast-110 scale-110' : ''
                  } transition-all duration-300 group-hover:brightness-125 group-hover:contrast-125`}
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    padding: logo.isSpecial ? '0.5rem' : '0',
                    transform: logo.isSpecial ? 'scale(1.1)' : 'none'
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent to-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background decorative elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-blue-400 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </motion.div>
    </section>
  )
} 