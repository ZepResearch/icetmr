"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Award, BookOpen, Globe, ArrowRight } from 'lucide-react'

export default function AboutConferencePage() {
  const conferenceHighlights = [
    {
      icon: <BookOpen className="h-8 w-8 text-gray-700" />,
      title: "Multidisciplinary Research",
      description: "Explore cutting-edge research across diverse fields and discover interdisciplinary connections.",
    },
    {
      icon: <Globe className="h-8 w-8 text-gray-700" />,
      title: "Global Collaboration",
      description: "Connect with researchers, scholars, and professionals from multiple disciplines worldwide.",
    },
    {
      icon: <Award className="h-8 w-8 text-gray-700" />,
      title: "Emerging Trends",
      description: "Discover the latest trends and innovations shaping the future of multidisciplinary research.",
    },
  ]

  const whyAttendReasons = [
    {
      title: "Explore Cross-Disciplinary Innovations",
      description:
        "Gain insights into groundbreaking research that bridges multiple disciplines and discover new perspectives on complex global challenges.",
    },
    {
      title: "Network with Diverse Experts",
      description:
        "Connect with 60+ certified academicians, 150+ research scholars, and 15+ industry professionals from over 15 countries across various disciplines.",
    },
    {
      title: "Foster Interdisciplinary Partnerships",
      description:
        "Build meaningful connections with researchers from different fields to spark innovative collaborations and joint research projects.",
    },
    {
      title: "Recognition and Awards",
      description:
        "Compete for 20+ prestigious awards recognizing outstanding contributions to multidisciplinary research and innovation.",
    },
    {
      title: "Practical Research Applications",
      description:
        "Participate in dynamic sessions focused on real-world applications of multidisciplinary research and its impact on society.",
    },
    {
      title: "International Exposure",
      description:
        "Present your research on a global platform and contribute to advancing knowledge across multiple disciplines.",
    },
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large gradient circle in top right */}
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-10"></div>

          {/* Small gradient circle in top left */}
          <div className="absolute left-10 top-20 w-24 h-24 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-20"></div>

          {/* Medium gradient circle in bottom left */}
          <div className="absolute -left-10 bottom-40 w-40 h-40 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-15"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="relative inline-block  mx-5 ">
                <span className="relative z-10 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent"> 2nd ICETMR</span>
                <span className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
              2026
            </h1>
            <p className="text-xl text-gray-600 mb-8">
             2<sup>nd</sup> International Conference on Emerging Trends in Multidisciplinary Research
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center bg-gray-50 rounded-full px-5 py-2 shadow-sm border border-gray-100">
                <Calendar className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-gray-700">October 7th - 8th 2026</span>
              </div>
              <div className="flex items-center bg-gray-50 rounded-full px-5 py-2 shadow-sm border border-gray-100">
                <MapPin className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-gray-700">Kuala Lumpur, Malaysia</span>
              </div>
              <div className="flex items-center bg-gray-50 rounded-full px-5 py-2 shadow-sm border border-gray-100">
                <Users className="h-5 w-5 text-gray-600 mr-2" />
                <span className="text-gray-700">600+ Global Participants</span>
              </div>
            </div>
            <Link href={"/registration"} >
            <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full px-8 py-6 text-lg shadow-lg">
              Register Now
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About the Conference Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About the Conference</h2>
              <p className="text-gray-600 mb-4">
                The  2<sup>nd</sup> International Conference on Emerging Trends in Multidisciplinary Research 2026, taking place in
                the tropical paradise of Kuala Lumpur, Malaysia, aims to foster collaboration and innovation across diverse
                research disciplines and academic fields.
              </p>
              <p className="text-gray-600 mb-4">
                From October 7th - 8th, 2026, 2nd ICETMR will bring together researchers, scholars, and professionals from
                various disciplines to share cutting-edge research, explore interdisciplinary approaches, and discuss
                emerging trends that are shaping the future of academic research.
              </p>
              <p className="text-gray-600">
                The conference features keynote presentations, panel discussions, and interactive workshops designed to
                promote knowledge exchange and establish collaborative networks. With a focus on innovative research
                methodologies and cross-disciplinary solutions, 2nd ICETMR 2026 promises to be an inspiring platform for
                advancing multidisciplinary research and its applications.
              </p>
            </div>
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src="/gallery/9.jpg"
                alt="Conference"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Join us in Kuala Lumpur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-xl text-gray-600 mb-8">
              The International Conference on Emerging Trends in Multidisciplinary Research aims to bridge the gap
              between different academic disciplines, fostering collaboration and innovation that addresses complex
              global challenges through integrated research approaches.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gray-50 rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900">600+</h3>
                <p className="text-gray-600">Global Participants</p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900">10+</h3>
                <p className="text-gray-600">Disciplines: Sciences, Engineering, Social Sciences, Humanities & More</p>
              </div>

              <div className="bg-gray-50 rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-3xl font-bold text-gray-900">1</h3>
                <p className="text-gray-600">Goal: Advancing Multidisciplinary Research Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conference Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Conference Highlights</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {conferenceHighlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100">
                <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
                    {highlight.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600">{highlight.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-gray-600 mb-6">
              Join us in Kuala Lumpur from October 7th - 8th  2026, to be part of a global community dedicated to advancing
              multidisciplinary research and fostering innovative collaborations!
            </p>
            <Link href="/schedule" >
            <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full text-lg py-6 shadow-lg">
              View Conference Schedule
            </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Attend 2nd ICETMR 2026</h2>
            <p className="text-gray-600">
              The 2<sup>nd</sup> International Conference on Emerging Trends in Multidisciplinary Research (ICETMR) is the premier
              platform for exploring innovative research approaches and fostering interdisciplinary collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyAttendReasons.map((reason, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Attend Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Who Can Attend</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Academicians & Researchers</h3>
              <p className="text-gray-600">
                Present your research, share knowledge, and collaborate with peers across different disciplines to
                advance multidisciplinary research.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Industry Professionals</h3>
              <p className="text-gray-600">
                Explore innovative research applications and discover how multidisciplinary approaches can drive
                industry advancement.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Graduate Students & Scholars</h3>
              <p className="text-gray-600">
                Learn from leading experts, present your research, and build networks to advance your academic career
                across disciplines.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research Institutes & Think Tanks</h3>
              <p className="text-gray-600">
                Discover emerging trends and methodologies that can enhance your organization's research capabilities
                and impact.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Policy Makers & Government Officials</h3>
              <p className="text-gray-600">
                Gain insights from multidisciplinary research to inform evidence-based policy development and
                implementation.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation & Technology Leaders</h3>
              <p className="text-gray-600">
                Explore cutting-edge research trends and technologies that can drive innovation across multiple
                sectors and industries.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to join 2nd ICETMR 2026?</h3>
                <p className="text-gray-600 max-w-xl">
                  Register now to secure your spot at the premier conference on emerging trends in multidisciplinary
                  research in beautiful Kuala Lumpur, Malaysia.
                </p>
              </div>
              <Link
                href="/registration"
                className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-opacity duration-300 flex items-center whitespace-nowrap shadow-lg"
              >
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}