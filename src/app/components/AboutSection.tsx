export default function AboutSection() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                {/* Left Image */}
                <div className="flex-shrink-0 mb-8 md:mb-0 md:mr-8 w-full md:w-1/4">
                    <img
                        src="/heart1.jpeg"
                        alt="Heart Image 1"
                        className="rounded-lg shadow-lg"
                    />
                </div>
                
                {/* Text Content */}
                <div className="flex-1 text-center">
                    <h2 className="text-4xl font-bold mb-8 text-center text-pink-600">What&apos;s it About?</h2>
                    <p className="text-lg mb-6 text-gray-700">
                        <strong>Love Beyond The Surface</strong> is a self-love art exhibit designed to immerse you in an unforgettable journey of self-discovery and appreciation. As you walk through the exhibit, you&apos;ll be surrounded by thought-provoking art installations that invoke deep feelings of self-love and acceptance.
                    </p>
                    <p className="text-lg text-gray-700">
                        At the heart of the experience is the <strong>Love Booth</strong>, where an AI bot engages you in a heartfelt conversation to help you uncover and embrace the self-love within. This unique blend of art and technology creates a transformative space that celebrates the beauty and depth of loving yourself beyond the surface.
                    </p>
                </div>
                
                {/* Right Image */}
                <div className="flex-shrink-0 mt-8 md:mt-0 md:ml-8 w-full md:w-1/4">
                    <img
                        src="/heart2.jpeg"
                        alt="Heart Image 2"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}
