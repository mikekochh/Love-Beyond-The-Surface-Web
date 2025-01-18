import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import VisualTeaser from './components/VisualTeaser'
import WhyAttend from './components/WhyAttend'
import FinalCTA from './components/FinalCTA'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <VisualTeaser />
        <WhyAttend />
        <FinalCTA />
      </main>
    </div>
  )
}

