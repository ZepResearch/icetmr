"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Users, Globe, Award } from "lucide-react"

export default function AboutOrganizersPage() {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Conference Chair",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "Program Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop",
    },
    {
      name: "Dr. Emma Watkins",
      role: "Research Coordinator",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
    {
      name: "Dr. Thomas Mann",
      role: "Multidisciplinary Lead",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1770&auto=format&fit=crop",
    },
  ]

  const achievements = [
    {
      icon: <Globe className="h-8 w-8 text-gray-700" />,
      title: "Global Reach",
      description: "Conferences and research initiatives spanning 25+ countries across 5 continents",
    },
    {
      icon: <Users className="h-8 w-8 text-gray-700" />,
      title: "Academic Network",
      description: "Connected network of 10,000+ researchers, academics, and industry professionals",
    },
    {
      icon: <Award className="h-8 w-8 text-gray-700" />,
      title: "Research Excellence",
      description: "Facilitated publication of 5,000+ peer-reviewed research papers in prestigious journals",
    },
    {
      icon: <Target className="h-8 w-8 text-gray-700" />,
      title: "Multidisciplinary Impact",
      description: "Partnerships with 200+ organizations driving cross-disciplinary research collaboration",
    },
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Geometric shapes */}
          <div
            className="absolute right-[10%] top-[20%] w-32 h-32 bg-gray-100/50"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              transform: "rotate(15deg)",
            }}
          ></div>
          <div
            className="absolute left-[15%] bottom-[30%] w-24 h-24 bg-gray-100/30"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              transform: "rotate(-10deg)",
            }}
          ></div>

          {/* Small floating circles */}
          <div
            className="absolute left-[20%] top-[15%] w-16 h-16 rounded-full bg-gray-100/40 animate-float-slow"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute right-[25%] bottom-[20%] w-12 h-12 rounded-full bg-gray-100/30 animate-float"
            style={{ animationDelay: "-2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="relative inline-block mx-6 ">
                <span className="relative z-10 text-white px-3 py-1 rounded-lg">Organizers</span>
                <span className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-lg transform -rotate-1 scale-110 z-0"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Meet the team behind the International Conference on Emerging Trends in Multidisciplinary Research
            </p>
            <div className="text-lg text-gray-500">
              <p className="font-semibold">October 10th - 11th, 2025</p>
              <p>Bali, Indonesia</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Zep Research Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src="/gallery/organizer.jpg"
                alt="Zep Research Team"
                fill
                className="object-cover"
              />
             
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Zep Research</h2>
              <p className="text-gray-600 mb-4">
                Zep Research is a global leader in advancing academic excellence and fostering multidisciplinary innovation. 
                Specializing in organizing impactful conferences, research initiatives, and collaboration opportunities, 
                Zep Research creates dynamic environments where researchers, academics, and industry professionals come 
                together to share knowledge, exchange ideas, and collaborate on groundbreaking work across various disciplines.
              </p>
              <p className="text-gray-600">
                With a commitment to providing a platform for high-quality research dissemination, Zep Research enables
                individuals and institutions to engage in meaningful discussions about emerging trends, challenges, and
                solutions. The focus spans diverse fields bridging science, technology, social sciences, humanities, and 
                interdisciplinary studies. By connecting experts, thought leaders, and innovators, Zep Research drives 
                progress and fosters advancements that leave a lasting impact on both academia and industry.
              </p>
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
              At ZEP Research, our mission for the ICETMR Conference is to break down disciplinary silos, foster 
              cross-pollination of ideas, and accelerate breakthroughs that emerge from the intersection of diverse 
              fields. We believe that the most transformative innovations happen when researchers from different 
              disciplines collaborate — bridging science and humanities, technology and social sciences, theory and practice.
            </p>
            <p className="text-xl text-gray-600">
              ICETMR is more than a conference; it's a convergence point for multidisciplinary excellence. Our goal is 
              to create a vibrant intellectual ecosystem in the beautiful setting of Bali, where ideas transcend 
              traditional boundaries, collaborative networks are forged, and emerging researchers are empowered to 
              pioneer the next generation of interdisciplinary solutions. Together, we're shaping a future driven by 
              holistic thinking, innovative collaboration, and bold multidisciplinary research.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Our Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100">
                <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Zep Research Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl overflow-hidden shadow-sm group border border-gray-100">
                <div className="relative h-64">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Partner with Zep Research</h3>
                <p className="text-gray-600 max-w-xl">
                  Interested in collaborating with us for future conferences or multidisciplinary research initiatives? 
                  Get in touch to explore partnership opportunities in Bali and beyond.
                </p>
              </div>
              <Link
                href="/contact"
                className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-opacity duration-300 flex items-center whitespace-nowrap"
              >
                Contact Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}