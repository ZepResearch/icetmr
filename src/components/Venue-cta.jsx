"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Navigation, Building, Wifi, Coffee, Users, ArrowRight } from "lucide-react"

export default function ConferenceVenue() {
  const venueFeatures = [
    {
      title: "Main Conference Hall",
      description: "State-of-the-art auditorium with seating for 800+ attendees and advanced presentation technology.",
      image:
        "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: "Workshop Spaces",
      description:
        "Multiple configurable rooms for interactive workshops and breakout sessions on multidisciplinary research topics.",
      image:
        "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      title: "Networking Terrace",
      description: "Beautiful outdoor space with tropical garden views designed for networking between sessions.",
      image:
        "https://images.unsplash.com/photo-1740478296042-392fa8498069?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ]

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-4">
            Conference
            <span className="relative inline-block mx-2">
              <span className="relative z-10 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">Venue</span>
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at our premier venue in beautiful Bali, Indonesia, designed to inspire innovation and foster 
            multidisciplinary collaboration in a tropical paradise setting.
          </p>
        </div>

        {/* Main Venue Card */}
        <div className="bg-gray-50/50 rounded-3xl overflow-hidden mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left side - Venue image */}
            <div className="relative h-[300px] lg:h-full">
              <Image
                src="https://images.unsplash.com/photo-1734765481725-7f9fbfbaa697?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="ICETMR Conference Venue - Bali International Convention Centre"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

              {/* Venue name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                {/* <div className="bg-white/95 backdrop-blur-sm rounded-full py-3 px-6 inline-block shadow-lg">
                  <span className="text-gray-800 font-medium">Bali International Convention Centre</span>
                </div> */}
              </div>
            </div>

            {/* Right side - Venue details */}
            <div className="p-8 lg:p-10 bg-white">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-white shadow-lg">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Date</p>
                      <p className="text-gray-800 font-medium">October 10<sup>th</sup> - 11<sup>th</sup>, 2025</p>
                      <p className="text-sm text-gray-500">2 Days of Research Innovation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-white shadow-lg">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Time</p>
                      <p className="text-gray-800 font-medium">8:30 AM - 6:00 PM </p>
                      <p className="text-sm text-gray-500">Registration opens at 7:30 AM</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-neutral-900 text-white shadow-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Address</p>
                      <p className="text-gray-800">Bali, Indonesia [Detail address will declare soon]</p>
                    </div>
                  </div>
                </div>

                <div className="h-px w-full bg-gray-200"></div>

                <div>
                  <h4 className="text-lg font-medium text-gray-800 mb-4">Venue Amenities</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Wifi size={16} className="text-gray-500" />
                      <span>High-speed WiFi</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Building size={16} className="text-gray-500" />
                      <span>Modern Facilities</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Coffee size={16} className="text-gray-500" />
                      <span>Balinese Cuisine</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users size={16} className="text-gray-500" />
                      <span>Luxury Lounges</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                    <Navigation className="mr-2 h-5 w-5" />
                    Get Directions
                  </Button>
                  <Link href="/venue">
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full"
                    >
                      Venue Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

   

        {/* Research Focus Areas */}
        <div className="bg-gray-50/50 rounded-3xl p-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Research Focus Areas</h3>
            <p className="text-gray-600">
              Explore cutting-edge research across multiple disciplines and discover innovative solutions 
              to global challenges through interdisciplinary collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Technology & AI</h4>
                <p className="text-gray-600 mb-4">
                  Discover the latest breakthroughs in artificial intelligence, machine learning, and emerging 
                  technologies that are shaping our future.
                </p>
              
              </div>
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Technology & AI Research"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Health & Life Sciences</h4>
                <p className="text-gray-600 mb-4">
                  Explore innovative research in biotechnology, medical sciences, and healthcare solutions 
                  that improve quality of life globally.
                </p>
                
              </div>
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                  alt="Health & Life Sciences Research"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">Social Innovation</h4>
                <p className="text-gray-600 mb-4">
                  Examine groundbreaking research in social sciences, education, and community development 
                  that addresses societal challenges.
                </p>
                
              </div>
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Social Innovation Research"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}