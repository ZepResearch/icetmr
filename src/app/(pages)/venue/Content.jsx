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
            <p className="text-xl text-gray-600 mb-8">Join us at Kuala Lumpur, Malaysia
</p>
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
            The International Conference on Emerging Trends in Multidisciplinary Research 2025 will be held in Kuala Lumpur, Malaysia. This vibrant venue offers a seamless blend of modern amenities and authentic hospitality—perfect for collaboration, innovation, and relaxation.                      </p>

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
                          <span>On-site dining offering Malaysian and international cuisine  </span>
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
                          <span>Spa, fitness center, and luxurious lounges  </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Central location with stunning city views  </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-bold text-white">✓</span>
                          </div>
                          <span>Minutes from cultural landmarks, shops, and entertainment</span>
                        </li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 mt-8">
                        <div className="flex items-center gap-3 mb-3">
                        <MapPin className="h-5 w-5 text-gray-600" />
                        <h3 className="text-lg font-medium text-gray-800">Location</h3>
                        </div>
                        <p className="text-gray-900 font-semibold">
                         Kuala Lumpur,  <br />
            Malaysia
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
                        src="https://images.unsplash.com/photo-1602427384420-71c70e2b2a2f?q=80&w=1406&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Kuala Lumpur"
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
                      <h3 className="text-2xl font-bold text-white mb-1">Kuala Lumpur, Malaysia
</h3>
                      {/* <p className="text-white/90">Melasti Kuta Beach Hotel & Spa </p> */}
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63741.33874887687!2d101.64579017066157!3d3.1385907934178556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362abd08e7d3%3A0x232e1ff540d86c99!2sKuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sin!4v1770110369087!5m2!1sen!2sin"                        alt="Kuala Lumpur"
                
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
          <li>
            <strong>Kuala Lumpur International Airport (KLIA / KLIA2):</strong> 
            Approximately 45–60 minutes by taxi, airport transfer, or KLIA Ekspres train to Kuala Lumpur city center.
          </li>
          <li>Airport transfer services can be arranged with advance booking.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Local Transportation:</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>Extensive public transport network including LRT, MRT, Monorail, and KTM trains.</li>
          <li>Taxi and ride-hailing services such as Grab are widely available.</li>
          <li>Car rental services available at the airport and throughout the city.</li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Parking:</h3>
        <ul className="list-disc pl-6 space-y-1">
          <li>On-site and nearby paid parking facilities available.</li>
          <li>Valet parking services may be available at selected hotels and venues.</li>
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
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
        Nearby Attractions
      </h2>
      <div className="h-1 w-20 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Discover Kuala Lumpur’s vibrant culture, iconic landmarks, and modern attractions during your visit
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Petronas Twin Towers",
          description: "Iconic twin skyscrapers featuring a skybridge and panoramic city views",
          distance: "2 km",
          icon: <Landmark className="h-8 w-8 text-gray-600" />,
          image:
            "https://images.unsplash.com/photo-1597148543182-830ef7bbb904?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Suria KLCC",
          description: "Luxury shopping mall with international brands, dining, and entertainment",
          distance: "2 km",
          icon: <ShoppingBag className="h-8 w-8 text-gray-600" />,
          image:
            "https://images.unsplash.com/photo-1706730354479-d51d9284f5ca?q=80&w=776&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "KLCC Park",
          description: "Urban green park with walking paths, fountains, and skyline views",
          distance: "2.2 km",
          icon: <Trees className="h-8 w-8 text-gray-600" />,
          image:
            "https://images.unsplash.com/photo-1700742409115-652b09b2dae9?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Batu Caves",
          description: "Famous limestone caves featuring colorful steps and a Hindu temple",
          distance: "13 km",
          icon: <Palette className="h-8 w-8 text-gray-600" />,
          image:
            "https://images.unsplash.com/photo-1589304122321-2344bad22557?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Bukit Bintang",
          description: "Lively shopping and entertainment district known for nightlife and dining",
          distance: "3 km",
          icon: <ShoppingBag className="h-8 w-8 text-gray-600" />,
          image:
            "https://images.unsplash.com/photo-1712604981638-e05d0ec317c2?q=80&w=1489&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          title: "Merdeka Square",
          description: "Historic square surrounded by colonial-era buildings and cultural landmarks",
          distance: "4 km",
          icon: <Landmark className="h-8 w-8 text-gray-600" />,
          image:
            "https://images.unsplash.com/photo-1663237155810-a292cca8fe47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ].map((attraction, index) => (
        <div
          key={index}
          className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-lg transition-all shadow-sm"
        >
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-bl from-pink-200 via-red-200 to-yellow-200 opacity-0 transition-opacity group-hover:opacity-20"></div>

          <div className="relative">
            <div className="h-90 w-full overflow-hidden">
              <Image
                src={attraction.image || "/placeholder.svg"}
                alt={attraction.title}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 mb-4 -mt-12 relative z-10">
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                  {attraction.icon}
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {attraction.title}
              </h3>
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
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Dining Options
            </h2>
          </div>

          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Dining at and Around the Venue:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>On-site Restaurant:</strong> Serves a selection of Malaysian, Asian, and international cuisine in a comfortable setting.
                </li>
                <li>
                  <strong>Café & Lounge:</strong> Ideal for coffee breaks, light snacks, and informal meetings throughout the day.
                </li>
                <li>
                  <strong>Nearby Food Courts:</strong> Experience authentic local flavors including nasi lemak, satay, and char kway teow.
                </li>
                <li>
                  <strong>Room Service (where available):</strong> Convenient in-room dining options for guests.
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Nearby Restaurants:
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Suria KLCC (approx. 2 km):</strong> Upscale dining with a wide range of international and local restaurants.
                </li>
                <li>
                  <strong>Bukit Bintang (approx. 3 km):</strong> Popular area for cafés, street food, and fine dining options.
                </li>
                <li>
                  <strong>Jalan Alor Food Street (approx. 3.5 km):</strong> Famous night street food destination offering authentic Malaysian cuisine.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden p-8 shadow-lg">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-bl from-pink-200 via-red-200 to-yellow-200 opacity-20"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Ready to Join Us?</h3>
                <p className="text-gray-600 mb-6">
                  Register for the International Conference on Emerging Trends in Multidisciplinary Research  and experience world-class research discussions in beautiful Bali.
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