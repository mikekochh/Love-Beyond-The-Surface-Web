import Image from 'next/image'
import Link from 'next/link'
import { Heart, MessageCircle, Sparkles, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Heart className="h-8 w-8 text-pink-500" />
          <span className="text-2xl font-bold text-gray-800">Love Beyond the Surface</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#about" className="text-gray-600 hover:text-pink-500">About</Link></li>
            <li><Link href="#features" className="text-gray-600 hover:text-pink-500">Features</Link></li>
            <li><Link href="#testimonials" className="text-gray-600 hover:text-pink-500">Testimonials</Link></li>
            <li><Link href="#register" className="text-gray-600 hover:text-pink-500">Register</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Immersive Art, Infinite Love</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Step into a transformative art experience that helps you rediscover self-love and inner harmony.
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white p-2 rounded-lg">
          Register Now
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Love Beyond the Surface</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image 
                src="/placeholder.svg?height=300&width=400" 
                alt="AI Chatbot Illustration" 
                width={400} 
                height={300} 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-gray-600 mb-6">
                Love Beyond the Surface is a groundbreaking event that combines the power of artificial intelligence 
                with the journey of self-discovery and self-love. Our AI-powered chatbot is designed to provide 
                personalized, therapeutic conversations that help you explore your inner self, overcome self-doubt, 
                and cultivate a deeper sense of self-love.
              </p>
              <p className="text-gray-600">
                Through carefully crafted dialogues and prompts, our AI companion guides you on a transformative 
                journey, helping you uncover hidden strengths, address limiting beliefs, and embrace your true self.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose Love Beyond the Surface?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MessageCircle className="h-12 w-12 text-pink-500" />}
              title="Personalized Conversations"
              description="Engage in tailored dialogues that address your unique needs and experiences."
            />
            <FeatureCard 
              icon={<Sparkles className="h-12 w-12 text-pink-500" />}
              title="AI-Powered Insights"
              description="Benefit from advanced AI algorithms that provide deep, meaningful insights into your thoughts and emotions."
            />
            <FeatureCard 
              icon={<Users className="h-12 w-12 text-pink-500" />}
              title="Supportive Community"
              description="Connect with like-minded individuals on the journey to self-love and personal growth."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-purple-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Participants Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="This experience opened my eyes to a whole new level of self-understanding. I've never felt more connected to myself."
              author="Sarah J."
            />
            <TestimonialCard 
              quote="The AI chatbot felt like talking to a wise friend. It helped me uncover thoughts and feelings I didn't even know I had."
              author="Michael R."
            />
            <TestimonialCard 
              quote="I was skeptical at first, but the depth of insights I gained about myself was truly remarkable. Highly recommended!"
              author="Emily T."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="register" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us for Love Beyond the Surface and discover a new depth of self-love with the help of AI.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white">
            Register for the Event
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Love Beyond the Surface</h3>
              <p className="text-gray-400">Empowering self-love through AI</p>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
                <li><Link href="#" className="hover:text-pink-400">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-pink-400">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2025 Love Beyond the Surface. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <p className="text-gray-800 font-semibold">- {author}</p>
    </div>
  )
}

