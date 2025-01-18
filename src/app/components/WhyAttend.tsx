import { Heart, Lightbulb, Users, Sparkles } from 'lucide-react'

export default function WhyAttend() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-pink-600">Why Attend?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Heart className="mx-auto mb-4 text-pink-500" size={48} />
            <h3 className="font-bold text-xl mb-2 text-gray-800">Deepen Self-Love</h3>
            <p className="text-gray-600">Cultivate a profound sense of self-acceptance and love.</p>
          </div>
          <div className="text-center">
            <Lightbulb className="mx-auto mb-4 text-yellow-500" size={48} />
            <h3 className="font-bold text-xl mb-2 text-gray-800">Gain Insights</h3>
            <p className="text-gray-600">Discover new perspectives on your life and relationships.</p>
          </div>
          <div className="text-center">
            <Users className="mx-auto mb-4 text-blue-500" size={48} />
            <h3 className="font-bold text-xl mb-2 text-gray-800">Connect with Others</h3>
            <p className="text-gray-600">Form meaningful connections in a supportive environment.</p>
          </div>
          <div className="text-center">
            <Sparkles className="mx-auto mb-4 text-purple-500" size={48} />
            <h3 className="font-bold text-xl mb-2 text-gray-800">Transform Your Life</h3>
            <p className="text-gray-600">Leave with tools to continue your self-love journey.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

