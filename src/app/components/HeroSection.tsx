import { Heart } from 'lucide-react'

export default function HeroSection() {
  return (
    <section
      className="pt-20 pb-72 px-4 bg-cover bg-center relative"
      style={{
        backgroundImage: 'url("/banner.jpeg")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r opacity-40"></div>
      <div className="relative container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-pink-600">
          Immersive Art, Infinite Love
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-pink-600">
          Step into a transformative art experience that helps you rediscover self-love and inner harmony
        </p>
        <button className="bg-white text-pink-600 font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-pink-100 transition duration-300">
          Register Now <Heart className="inline-block ml-2" size={24} />
        </button>
      </div>
    </section>
  )
}
