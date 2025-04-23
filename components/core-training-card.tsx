"use client"

interface TrainingCardProps {
  title: string
  description: string
  imageSrc?: string
  isExploreCard?: boolean
}

export default function TrainingCard({ title, description, imageSrc, isExploreCard = false }: TrainingCardProps) {
  if (isExploreCard) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center h-[240px] justify-center">
        <h3 className="text-xl font-semibold mb-4 text-[#009BDE]">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <button 
          onClick={() => window.open('https://v0-rsm-five.vercel.app/', '_blank')}
          className="bg-[#009BDE] text-white px-6 py-2 rounded-md hover:bg-[#0081b8] transition-colors"
        >
          Schedule a Consultation
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 object-cover"
          />
        )}
      </div>
      <div className="p-6 flex flex-col items-center text-center">
        <h3 className="text-xl font-semibold mb-3 text-[#009BDE]">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
} 