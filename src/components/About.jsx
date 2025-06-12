import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

function About() {
  return (
    <section className="py-24 bg-white">
      <div className="flex flex-col lg:flex-row">
        {/* Left Side - Image (Stick to left) */}
        <div className="lg:w-1/2 relative px-0 lg:px-0">
          <div className="relative z-10 ml-0">
            <Image
              src="/assets/about.png"
              alt="Robotic Hand Innovation"
              width={700}
              height={400}
              className="w-full max-w-4xl mx-auto lg:mx-0 drop-shadow-2xl bg-black rounded-r-full select-none pointer-events-none"
            />
          </div>

          {/* Decorative Elements */}
                 </div>

        {/* Right Side - Content (Centered) */}
        <div className="lg:w-1/2 px-6 lg:px-12 mt-12 lg:mt-0 flex items-center">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h1 className="text-4xl lg:text-5xl font-medium mb-8 text-gray-900   ">
              Let's Get   Closer<br />
              About <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500  ">Emerging Trends </span>in Research
            </h1>

            <div className="space-y-6 text-gray-950">
              <p className="text-lg leading-relaxed">
                At the International Conference on Emerging Trends in Multidisciplinary Research, we bring together the world's leading
                experts, researchers, and innovators across various fields of study.
              </p>

              <p className="text-lg leading-relaxed">
                Our mission is to showcase cutting-edge advancements that integrate the latest developments in
                multiple disciplines. The conference aims to explore how interdisciplinary research can help redefine
                the future of various sectors including healthcare, education, technology, and social sciences.
              </p>

              <p className="text-lg leading-relaxed">
                Join us in Singapore for an immersive three-day experience featuring keynote speeches, panel
                discussions, workshops, and networking opportunities with global leaders in multidisciplinary research.
              </p>

              <Button size={'lg'}>
                Learn More Here
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Features Grid */}
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 mt-20 lg:mt-24">
        <h2 className="text-4xl lg:text-5xl font-medium text-center mb-16 text-gray-900 ">
          Our Vision & <span className="bg-clip-text text-transparent bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 ">Objectives</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Feature 1 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">01</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Research Excellence</h4>
            <p className="text-gray-700 leading-relaxed">
              Promote high-quality research and scholarly contributions across multiple disciplines, fostering innovation and academic excellence.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">02</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Interdisciplinary Integration</h4>
            <p className="text-gray-700 leading-relaxed">
              Bridge the gap between different fields of study, encouraging cross-disciplinary research and innovative solutions to complex problems.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">03</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Global Networking</h4>
            <p className="text-gray-700 leading-relaxed">
              Create opportunities for researchers worldwide to connect, collaborate, and share knowledge across geographical boundaries.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">04</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Publication Opportunities</h4>
            <p className="text-gray-700 leading-relaxed">
              Provide platforms for researchers to publish their work in indexed journals and conference proceedings with global reach.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">05</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Knowledge Dissemination</h4>
            <p className="text-gray-700 leading-relaxed">
              Facilitate the sharing of research findings and best practices through presentations, workshops, and interactive sessions.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center mb-6">
              <span className="text-2xl font-bold text-white">06</span>
            </div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">Research Impact</h4>
            <p className="text-gray-700 leading-relaxed">
              Focus on research outcomes that contribute to societal development and address real-world challenges across various sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About