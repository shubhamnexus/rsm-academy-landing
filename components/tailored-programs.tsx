"use client"

import FeatureCards from "./feature-cards"

export default function TailoredPrograms() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#F3F3F3]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center leading-relaxed">
            Bridging Skill Gaps with Globally Accredited, <br />Saudi-Tailored Programs
          </h2>
          <div className="text-lg text-gray-600 space-y-8 text-center">
            <p className="text-center leading-relaxed max-w-3xl mx-auto">
              At RSM Saudi Arabia Professional Academy, we are committed to empowering organizations and individuals to excel in today's competitive business landscape.
            </p>
            <p className="text-center leading-relaxed max-w-3xl mx-auto">
              Our comprehensive training programs encompass a diverse range of technical and non-technical training, vocational training, and interactive learning experiences designed to develop leadership capabilities, enhance workforce skills, and drive measurable growth. Through innovative, industry-relevant content, we equip professionals with the knowledge and practical tools needed to achieve sustainable success.
            </p>
          </div>
        </div>
        
        <FeatureCards />
      </div>
    </section>
  )
} 