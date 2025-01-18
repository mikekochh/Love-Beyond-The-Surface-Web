import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white bg-opacity-90 shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-2xl text-pink-600">Love Beyond The Surface</Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/about" className="text-gray-700 hover:text-pink-600 transition duration-300">About</Link>
          <Link href="/sponsorships" className="text-gray-700 hover:text-pink-600 transition duration-300">Sponsorships</Link>
          <Link href="/event-details" className="text-gray-700 hover:text-pink-600 transition duration-300">Event Details</Link>
          <Link href="/contact" className="text-gray-700 hover:text-pink-600 transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  )
}

