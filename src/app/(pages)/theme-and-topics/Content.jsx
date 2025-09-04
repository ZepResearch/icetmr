"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight,  Shield, Cpu, Crown, Leaf, Heart } from 'lucide-react'

export default function ThemeAndTopicsPage() {
  const topics = [
  {
    icon: <Cpu className="h-8 w-8 text-gray-700" />,
    title: "Future of Technology and Innovation",
    topics: [
      "Emerging Tech Trends (AI, Blockchain, Quantum Computing)",
      "The Role of 5G and Beyond in Smart Connectivity",
      "Sustainability and Green Tech Innovations",
      "The Rise of Spatial Computing and Immersive Experiences (AR/VR/XR)",
    ],
  },
  {
    icon: <Crown className="h-8 w-8 text-gray-700" />,
    title: "Next-Generation Leadership",
    topics: [
      "Leading in a Disruptive World",
      "Building Adaptive and Resilient Teams",
      "Diversity, Equity, and Inclusion for the Future",
      "Mindful Leadership: Emotional Intelligence at Scale",
    ],
  },
  {
    icon: <Shield className="h-8 w-8 text-gray-700" />,
    title: "Data, Cybersecurity and Trust",
    topics: [
      "Data-Driven Decision Making for 2030",
      "Building Cyber-Resilient Organizations",
      "Digital Identity and Trust Frameworks",
      "Navigating the Ethics of Data and AI",
    ],
  },
  {
    icon: <Leaf className="h-8 w-8 text-gray-700" />,
    title: "Sustainability and Impact",
    topics: [
      "ESG (Environmental, Social, Governance) in Action",
      "Climate Tech: Innovations Saving the Planet",
      "Corporate Responsibility and the Circular Economy",
      "Measuring Impact Beyond Profit",
            "Sustainable tourism and Hospitality Management",
            " Laguage and Linguistic in education"

    ],
  },
  {
    icon: <Heart className="h-8 w-8 text-gray-700" />,
    title: "Social Innovation & Global Impact",
    topics: [
      "Community Resilience & Policy Innovation",
      "Interdisciplinary Approaches to Inequality",
      "Youth Empowerment & Civic Tech",
      "Migration, Identity & Global Mobility",
    ],
  },
]

  const submissionSteps = [
    {
      number: "1",
      title: "Prepare Your Abstract",
      description:
        "Submit a 300-word abstract outlining your research question, methodology, findings, and relevance to multidisciplinary research themes.",
    },
    {
      number: "2",
      title: "Abstract Review",
      description:
        "Abstracts will be reviewed by our multidisciplinary committee. If accepted, you'll be invited to submit a full paper.",
    },
    {
      number: "3",
      title: "Full Paper Submission",
      description:
        "Submit your full paper (8-12 pages) following our formatting guidelines. All papers will undergo a double-blind peer review by experts from relevant disciplines.",
    },
    {
      number: "4",
      title: "Presentation",
      description:
        "Accepted papers will be presented either as oral presentations, poster sessions, or virtual presentations, depending on your preference and the committee's recommendation.",
    },
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large blob in top right */}
          <div
            className="absolute -right-40 -top-40 w-[30rem] h-[30rem] opacity-10"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: "linear-gradient(45deg, #f3f4f6, #9ca3af)",
            }}
          ></div>

          {/* Small circle in bottom left */}
          <div className="absolute left-20 bottom-20 w-16 h-16 rounded-full bg-gray-100/60"></div>

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-gray-100/40"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Theme and
              <span className="relative inline-block mx-2">
                <span className="relative z-10 text-white px-3 py-1 rounded-lg">Topics</span>
                <span className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-lg transform -rotate-1 scale-110 z-0"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Explore the research areas and themes for ICETMR 2025
            </p>
            <div className="text-lg text-gray-500">
              <p className="font-semibold">October 10th - 11th, 2025</p>
              <p>Bali, Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Theme Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block border border-gray-300 rounded-full px-4 py-1 text-sm mb-6 text-gray-600">
                Conference Theme
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                "Breaking Boundaries: Multidisciplinary Approaches to Global Challenges"
              </h2>
              <p className="text-gray-600 mb-4">
                ICETMR 2025 explores how interdisciplinary collaboration is revolutionizing our approach to complex global 
                challenges. As traditional boundaries between disciplines continue to blur, new collaborative frameworks 
                are enabling unprecedented opportunities for addressing climate change, social inequality, technological 
                ethics, and sustainable development.
              </p>
              <p className="text-gray-600">
                This conference brings together researchers, innovators, and thought leaders from diverse fields to 
                examine the current state and future possibilities of cross-disciplinary research. We invite contributions 
                that highlight innovative interdisciplinary approaches, novel methodologies for collaborative research, 
                and critical perspectives on the ethical and practical implications of multidisciplinary solutions 
                in our beautiful setting of Bali, Indonesia.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=2069&auto=format&fit=crop"
                alt="Multidisciplinary Research"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Bridging disciplines for innovative solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"> Session & Tracks</h2>
            <p className="text-gray-600">
              Research topics and areas that can be selected for paper submissions across multiple disciplines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((area, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 shadow-sm h-full border border-gray-100">
                <div className="bg-white rounded-2xl p-4 inline-block mb-4 shadow-sm">{area.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center mr-2 mt-0.5">
                        <span className="text-gray-700 text-xs">•</span>
                      </div>
                      <span className="text-gray-600">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Submit Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How to Submit Your Work</h2>
            <p className="text-gray-600">
              We welcome submissions from researchers, practitioners, and students across all disciplines. The
              submission process involves the following steps:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {submissionSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-sm relative overflow-hidden border border-gray-100">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gray-100/50 rounded-full"></div>
                <div className="relative z-10">
                  <div className="bg-gray-700 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link href={'/registration'}>
            <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full px-8">
              Register Now
            </Button>
            </Link>
            <Link href={'/submission'}>
            <Button
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full px-8"
            >
              Submit Paper <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to contribute?</h3>
                <p className="text-gray-600 max-w-xl">
                  Submit your research paper or proposal and be part of the global conversation on multidisciplinary 
                  research and emerging trends in Bali, Indonesia.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href={'/submission'}>
                 
                <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full whitespace-nowrap">
                  Submit Paper
                </Button>
                </Link>
              
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}