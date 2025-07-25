"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Presentation, ImageIcon, Monitor, Check } from 'lucide-react'

export default function ModeOfPresentationPage() {
  const presentationGuidelines = [
    "Be concise and focused. Clearly communicate your research question, methodology, findings, and implications within the allotted time.",
    "Use visuals effectively. Incorporate clear, high-quality visuals that enhance understanding of your research.",
    "Practice your presentation. Rehearse to ensure smooth delivery and timing, especially for oral presentations.",
    "Prepare for questions. Anticipate potential questions and prepare thoughtful responses.",
    "Engage with your audience. Encourage questions and discussion to maximize the impact of your presentation.",
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gray-50">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large blob in top right */}
          <div
            className="absolute -right-40 -top-40 w-[30rem] h-[30rem] opacity-20"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: "linear-gradient(45deg, #e0e0e0, #a0a0a0)",
            }}
          ></div>

          {/* Small circle in bottom left */}
          <div className="absolute left-20 bottom-20 w-16 h-16 rounded-full bg-gray-200/40"></div>

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-gray-300/30"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                Mode of
                <span className="relative inline-block mx-2 ml-6">
                  <span className="relative z-10 text-white px-4 py-2 rounded-lg bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500">Presentation</span>
                </span>
              </h1>
              <div className="mt-8 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">International Conference on Emerging Trends in Multidisciplinary Research</h2>
                <p className="text-xl font-semibold text-gray-700">October 10th - 11th, 2025</p>
                <p className="text-lg text-gray-600">Bali, Indonesia</p>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Learn about the different ways to present your research at the International Conference on Emerging Trends in Multidisciplinary Research 2025
            </p>
          </div>
        </div>
      </section>

      {/* Speak at the Event Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src="https://plus.unsplash.com/premium_photo-1705267935935-53ee91453a52?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Oral Presentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Share your research insights</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full p-3 mr-4">
                  <Presentation className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Speak at the Event</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Present your research in a 15-minute oral presentation followed by a 5-minute Q&A session. This format
                is ideal for sharing detailed findings and engaging directly with the audience.
              </p>

              <div className="bg-gray-50 rounded-3xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">PowerPoint or PDF presentation (16:9 format)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Concise overview of your research methodology</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Clear presentation of key findings and implications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Brief bio for the session chair's introduction</span>
                  </li>
                </ul>
              </div>
              <Link href={'/submission'}>
                <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white rounded-full">
                  Submit for Oral Presentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Show a Poster Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full p-3 mr-4">
                  <ImageIcon className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Show a Poster</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Present your research in a visual format during our dedicated poster sessions. This interactive format
                allows for in-depth discussions with interested attendees.
              </p>

              <div className="bg-white rounded-3xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">A0 size poster (841 × 1189 mm) in portrait orientation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Clear visual representation of your research</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">QR code linking to additional resources (optional)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Handouts or business cards for interested attendees</span>
                  </li>
                </ul>
              </div>
              <Link href={'/submission'}>
                <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white rounded-full">
                  Submit for Poster Presentation
                </Button>
              </Link>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px] order-1 lg:order-2">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661587798846-2b2bdbe5abc0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Poster Presentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Engage in meaningful discussions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Present Online Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src="https://plus.unsplash.com/premium_photo-1661483130874-527d2f9e5746?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Virtual Presentation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Present from anywhere in the world</span>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full p-3 mr-4">
                  <Monitor className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Present Online</h2>
              </div>
              <p className="text-gray-600 mb-6">
                Can't attend in person? Present your research virtually through our dedicated online platform. This
                option provides flexibility while still allowing for meaningful engagement.
              </p>

              <div className="bg-gray-50 rounded-3xl p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">What to Prepare:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">PowerPoint or PDF presentation (16:9 format)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Stable internet connection (minimum 5 Mbps upload)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Webcam and quality microphone</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-600">Pre-recorded backup of your presentation</span>
                  </li>
                </ul>
              </div>
              <Link href={'/submission'}>
                <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white rounded-full">
                  Submit for Virtual Presentation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Guidelines Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Presentation Guidelines</h2>
            <p className="text-gray-600 text-center mb-8">
              Regardless of your presentation mode, please adhere to the following guidelines to ensure a smooth and
              engaging experience for all participants:
            </p>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-1 gap-6">
                {presentationGuidelines.map((guideline, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                      <span className="text-white font-bold text-xl">{index + 1}</span>
                    </div>
                    <div className="pt-2">
                      <p className="text-gray-600">{guideline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to present your research?</h3>
                <p className="text-gray-600 max-w-xl">
                  Choose your preferred presentation mode and submit your proposal for the International Conference on Emerging Trends in Multidisciplinary Research 2025.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={'/submission'}>
                  <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white rounded-full whitespace-nowrap">
                    Submit Your Presentation
                  </Button>
                </Link>
                <Link
                  href="/papers-format"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  View Format Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}