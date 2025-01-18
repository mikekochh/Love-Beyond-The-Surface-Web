import Image from 'next/image';

export default function VisualTeaser() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-200 to-pink-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-purple-800">A Glimpse into the Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Love Booth Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/loveBooth.jpeg" 
              width={400} 
              height={300} 
              alt="Love Booth" 
              className="w-full h-64 object-cover" 
            />
            <div className="p-4 bg-white">
              <h3 className="font-bold text-xl mb-2 text-pink-600">Love Booth</h3>
              <p className="text-gray-700">Engage in an AI-guided conversation to unlock your inner self-love.</p>
            </div>
          </div>
          {/* Love Stuff Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/loveStuff.jpeg" 
              width={400} 
              height={300} 
              alt="Love Stuff" 
              className="w-full h-64 object-cover" 
            />
            <div className="p-4 bg-white">
              <h3 className="font-bold text-xl mb-2 text-pink-600">Expressions of Love</h3>
              <p className="text-gray-700">Discover creative expressions of love through interactive art and beautiful displays.</p>
            </div>
          </div>
          {/* Love Stuff 2 Image */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/loveStuff2.jpeg" 
              width={400} 
              height={300} 
              alt="Love Stuff 2" 
              className="w-full h-64 object-cover" 
            />
            <div className="p-4 bg-white">
              <h3 className="font-bold text-xl mb-2 text-pink-600">Heartfelt Connection</h3>
              <p className="text-gray-700">Feel the power of connection in an awe-inspiring visual experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
