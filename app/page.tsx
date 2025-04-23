import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import TailoredPrograms from "@/components/tailored-programs"
import CoreTrainingAreas from "@/components/core-training-areas"
import LegacySection from "@/components/legacy-section"
import ProfessionalExcellence from "@/components/professional-excellence"
import ProvenApproach from "@/components/proven-approach"
import CompetitorsSection from "@/components/competitors-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TailoredPrograms />
      <CoreTrainingAreas />
      <LegacySection />
      <ProfessionalExcellence />
      <ProvenApproach />
      <CompetitorsSection />
      <Footer />
    </main>
  )
}
