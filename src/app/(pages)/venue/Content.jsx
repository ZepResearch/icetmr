"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Navigation, Building, Utensils, Landmark, Trees, ShoppingBag, Palette } from "lucide-react"

export default function VenuePage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large gradient blob in top right */}
          <div
            className="absolute -right-40 -top-40 w-[30rem] h-[30rem] opacity-20"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: "linear-gradient(to bottom left, rgb(236 72 153), rgb(239 68 68), rgb(234 179 8))",
            }}
          ></div>

          {/* Small circle in bottom left */}
          <div className="absolute left-20 bottom-20 w-16 h-16 rounded-full bg-gradient-to-bl from-pink-200 via-red-200 to-yellow-200 opacity-40"></div>

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-gradient-to-bl from-pink-100 via-red-100 to-yellow-100 opacity-30"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Conference
              <span className="relative inline-block mx-3">
                <span className="relative z-10 text-white px-4 py-2 rounded-lg">Venue</span>
                <span className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-lg transform -rotate-1 scale-110 z-0"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">Join us at Bali, Indonesia</p>
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200 via-red-200 to-yellow-200 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-bl from-pink-300 via-red-300 to-yellow-300 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-30"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5">
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                        <Building className="h-6 w-6 text-gray-700" />
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Conference Venue</h2>
                  </div>

                  <div className="space-y-6 text-gray-600">
                    <p>
The International Conference on Emerging Trends in Multidisciplinary Research 2025 will be held at Melasti Kuta Beach Hotel & Spa, Bali. Located in the heart of Kuta, this beachfront venue offers a seamless blend of modern amenities and authentic Balinese hospitality—perfect for collaboration, innovation, and relaxation.                      </p>

                    <div className="space-y-4">
                      <h3 className="text-xl font-medium text-gray-800">Venue Features</h3>

                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Contemporary conference spaces with advanced AV technology </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>On-site dining offering Balinese and international cuisine  </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Complimentary high-speed WiFi throughout the venue  </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Spa, fitness center, and luxurious poolside lounges  </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Direct access to Kuta Beach with vibrant coastal views  </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shrink-0 mt-0.5">
                            <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Minutes from cultural landmarks, shops, and nightlife</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 mt-8">
                      <div className="flex items-center gap-3 mb-3">
                        <MapPin className="h-5 w-5 text-gray-600" />
                        <h3 className="text-lg font-medium text-gray-800">Address</h3>
                      </div>
                      <p className="text-gray-600">
                       Melasti Kuta Beach Hotel & Spa,  <br />
Jl. Kartika Plaza No.5, Kuta, Kec. Kuta, Kabupaten Badung,  <br />
Bali 80361, Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full">
                      <Navigation className="mr-2 h-5 w-5" />
                      Get Directions
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-gray-200">
                    <Image
                      src="https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Grand Hyatt Bali"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

                    {/* Floating elements */}
                    <div className="absolute top-1/4 right-1/4 h-12 w-12 rounded-full bg-gradient-to-bl from-pink-300 via-red-300 to-yellow-300 blur-xl opacity-70 animate-pulse"></div>
                    <div
                      className="absolute bottom-1/3 left-1/3 h-16 w-16 rounded-full bg-gradient-to-bl from-pink-200 via-red-200 to-yellow-200 blur-xl opacity-70 animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>

                    {/* Venue name overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-1">Bali</h3>
                      <p className="text-white/90">Melasti Kuta Beach Hotel & Spa </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Location</h2>
            <div className="h-1 w-20 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="relative bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden p-4 shadow-lg">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-bl from-pink-200 via-red-200 to-yellow-200 opacity-20"></div>

            <div className="relative rounded-2xl overflow-hidden h-[500px] w-full">
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31549.01608938447!2d115.1377004!3d-8.726922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd246a376b6c5bb%3A0xbc9328f54a331760!2sMelasti%20Kuta%20Beach%20Hotel%20%26%20Spa!5e0!3m2!1sen!2sin!4v1751621131304!5m2!1sen!2sin"      
                
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-8">
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Getting Around</h2>
              <div className="space-y-6 text-gray-600">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">From Airport:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Ngurah Rai International Airport (DPS):</strong> Approximately 15-20 minutes by taxi or private transfer to Nusa Dua area.</li>
                    <li>The hotel offers premium airport transfer services with advance booking.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Local Transportation:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Hotel shuttle service to nearby shopping centers and attractions.</li>
                    <li>Taxi and ride-hailing services readily available.</li>
                    <li>Car rental services available at the hotel concierge.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Parking:</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Complimentary self-parking available for hotel guests.</li>
                    <li>Valet parking service available upon request.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Nearby Attractions</h2>
            <div className="h-1 w-20 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore Bali's rich culture and natural beauty during your conference visit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Uluwatu Temple",
                description: "Ancient sea temple perched on dramatic clifftops with stunning sunset views",
                distance: "20 km",
                icon: <Landmark className="h-8 w-8 text-gray-600" />,
                image:
                  "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Bali Collection",
                description: "Premier shopping center with international brands, dining, and entertainment",
                distance: "1 km",
                icon: <ShoppingBag className="h-8 w-8 text-gray-600" />,
                image:
                  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Water Blow",
                description: "Natural rock formation where ocean waves create spectacular water spouts",
                distance: "2 km",
                icon: <Trees className="h-8 w-8 text-gray-600" />,
                image:
                  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Garuda Wisnu Kencana",
                description: "Cultural park featuring massive statue and traditional performances",
                distance: "10 km",
                icon: <Palette className="h-8 w-8 text-gray-600" />,
                image:
                  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Jimbaran Beach",
                description: "Famous beach destination known for seafood dining and beautiful sunsets",
                distance: "8 km",
                icon: <Trees className="h-8 w-8 text-gray-600" />,
                image:
                  "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Mengiat Beach",
                description: "Pristine white sand beach perfect for swimming and water sports",
                distance: "0.5 km",
                icon: <Trees className="h-8 w-8 text-gray-600" />,
                image:
                  "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((attraction, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-all shadow-sm"
              >
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-bl from-pink-200 via-red-200 to-yellow-200 opacity-0 transition-opacity group-hover:opacity-20"></div>

                <div className="relative">
                  <div className="h-48 w-full overflow-hidden">
                    <Image
                      src={attraction.image || "/placeholder.svg"}
                      alt={attraction.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 mb-4 -mt-12 relative z-10">
                      <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                        {attraction.icon}
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{attraction.title}</h3>
                    <p className="text-gray-600 mb-3">{attraction.description}</p>

                    <div className="flex items-center gap-2 text-gray-500">
                      <MapPin className="h-4 w-4" />
                      <span>{attraction.distance} from venue</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden shadow-lg">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-bl from-pink-200 via-red-200 to-yellow-200 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-bl from-pink-300 via-red-300 to-yellow-300 rounded-full blur-3xl opacity-30"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                      <Utensils className="h-6 w-6 text-gray-700" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Dining Options</h2>
                </div>

                <div className="space-y-6 text-gray-600">
                  <div>
                 <h3 className="text-xl font-semibold text-gray-800 mb-2">Dining at Melasti Kuta Beach Hotel & Spa:</h3>
<ul className="list-disc pl-6 space-y-1">
  <li><strong>Melasti Restaurant:</strong> Offers a mix of Balinese, Indonesian, and international cuisine in a relaxed setting.</li>
  <li><strong>Beachfront Café:</strong> Casual dining with ocean views, serving light bites, grills, and refreshing drinks.</li>
  <li><strong>Pool Bar:</strong> Tropical cocktails and snacks served by the poolside, perfect for relaxing under the sun.</li>
  <li><strong>Lobby Lounge:</strong> Comfortable lounge for coffee, tea, and pastries throughout the day.</li>
  <li><strong>24-hour room service:</strong> Savor a variety of dishes from the comfort of your room, anytime.</li>
</ul>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Nearby Restaurants:</h3>
                    <ul className="list-disc pl-6 space-y-1">
                      <li><strong>Bali Collection (1 km):</strong> Wide variety of dining options from local warungs to international chains.</li>
                      <li><strong>Jimbaran Seafood Market (8 km):</strong> Famous beachfront seafood dining experience.</li>
                      <li><strong>Nusa Dua Beach Grill (2 km):</strong> Beachfront dining with fresh seafood and Balinese specialties.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden p-8 shadow-lg">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-bl from-pink-200 via-red-200 to-yellow-200 opacity-20"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to Join Us?</h3>
                <p className="text-gray-600 mb-6">
                  Register for the International Conference on Emerging Trends in Multidisciplinary Research 2025 and experience world-class research discussions in beautiful Bali.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/register">
                    <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full">Register Now</Button>
                  </Link>
                  <Link href="/contact">
                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full"
                    >
                      Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}