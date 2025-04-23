"use client"

import TrainingCard from './core-training-card'

export default function CoreTrainingAreas() {
  const trainingAreas = [
    {
      title: "Management and Leadership Development",
      description: "Equip your team with skills in effective leadership, decision-making, and strategic planning.",
      imageSrc: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/image1.png"
    },
    {
      title: "Finance and Auditing",
      description: "Build proficiency in areas like internal and external auditing, fraud detection, compliance, and IFRS for financial and accounting professionals.",
      imageSrc: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/image2.png"
    },
    {
      title: "IT and Cybersecurity",
      description: "Stay ahead in the digital era with programs on cybersecurity awareness, risk management, and IT governance.",
      imageSrc: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/image3.png"
    },
    {
      title: "Environmental, Social, and Governance (ESG)",
      description: "Integrate sustainable practices with courses on Climate Economy, Sustainability and ESG Principles.",
      imageSrc: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/image4.png"
    },
    {
      title: "Soft Skills and Essential Training",
      description: "Strengthen your team's negotiation, communication, time management, and presentation and many other skills.",
      imageSrc: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/image5.png"
    },
    {
      title: "Industry-Specific Solutions",
      description: "Whether it's supply chain optimization, customer relationship management, or change management, we've got you covered.",
      imageSrc: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/image6.png"
    },
    {
      title: "GRI Certified Sustainability Training",
      description: "Gain proficiency in GRI standards for sustainability reporting and ESG disclosures and earn a GRI certified credential.",
      imageSrc: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/image7.png"
    },
    {
      title: "Custom Training Courses for Organizations",
      description: "Get tailored programs to meet your team's unique needs, from leadership to industry-specific skills.",
      imageSrc: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/image8.png"
    },
    {
      title: "Explore Our Programs",
      description: "Connect with us to explore the right training solutions for your team.",
      isExploreCard: true
    }
  ]

  return (
    <section className="pt-16 pb-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Core Training Areas for Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {trainingAreas.map((area, index) => (
            <div key={index} className={index === 8 ? "lg:self-center" : ""}>
              <TrainingCard
                title={area.title}
                description={area.description}
                imageSrc={area.imageSrc}
                isExploreCard={area.isExploreCard}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 