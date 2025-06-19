import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Calendar1, ChevronDown, Lectern, MapPin } from "lucide-react"
import { ReserveButton } from "./reserve-button"

export default function Hero() {
  return (
    <div className="flex flex-col min-h-full bg-gradient-to-b from-gray-50 to-white ">
  
      <main className="flex-1">
        <section className="w-full pt-8 md:pt-12  max-w-screen-2xl mx-auto" >
          <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-1 items-center mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold text-pretty tracking-tight sm:text-5xl md:text-6xl  leading-tight">
                International Conference on <span className="bg-clip-text text-transparent bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500  ">Emerging Trends</span> in Multidisciplinary Research
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join us to explore the cutting-edge advancements and interdisciplinary connections shaping the future of
                research across diverse fields.
              </p>
          
            <div className="flex sm:flex-row flex-col-reverse items-start sm:items-center justify-start gap-3 px-4 max-w-4xl backdrop-blur-sm bg-gray-50/30 py-4 rounded-3xl ">
              <img
                src="/assets/scopus.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />
              <img
                src="/assets/clarivate.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />
              <img
                src="assets/zepresearch.png"
                alt=""
                className="h-12 drop-shadow-lg"
              />
            </div>
              <div className="gap-3 flex  sm:flex-row flex-col ">
            <Link href={'/registration'}>
              <Button size={'lg'}>
                Register Now
              </Button>
            </Link>
            <Link href={'/about-conference'}>
              <Button size={'lg'}>
                Learn more
              </Button>
            </Link>
          
             <ReserveButton/>
            </div>
           
            </div>
            <div className="relative flex justify-center items-center lg:justify-end">
              <Image
                src="/assets/brain-network.png"
                width={500}
                height={500}
                alt="Brain network representing multidisciplinary research"
                className="mx-auto  overflow-hidden rounded-xl object-cover object-bottom  lg:order-last select-none pointer-events-none "
              />
            
              <div className="absolute bottom-4 right-4  rounded-full shadow-lg backdrop-blur-sm hover:shadow-amber-400/50 hover:shadow-md">
                <div className="flex items-center gap-4 bg-white/80 border border-gray-200 rounded-xl shadow-sm px-5 py-4 max-w-xs">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-slate-100 via-gray-100 to-neutral-50/60">
                <Lectern/>
              </div>
              <div>
                <div className="font-semibold text-gray-800 text-base">Conference Mode</div>
                <div className="text-sm text-gray-600 text-center">Virtual <span className="mx-1">+</span> Physical <br />(Hybrid)</div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt- max-w-screen-2xl mx-auto">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">October | 10<sup>th</sup> - 11<sup>th</sup> 2025</h3>
                  <p className="text-sm text-gray-500">
                    Explore cutting-edge topics across various disciplines, fostering interdisciplinary collaboration.
                  </p>
                  <Link
                    href="/schedule"
                    className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
                    prefetch={false}
                  >
                    <Calendar1 className="w-4 h-4 mr-1" />
                    view full schedule
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Bali, Indonesia </h3>
                  <p className="text-sm text-gray-500">
                    Gain insights from leading researchers and innovators in their respective fields.
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
                    prefetch={false}
                  >
                    <MapPin className="w-4 h-4 mr-1" />
                    Detail Venue
                  </Link>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-lg font-semibold mb-2">Networking Opportunities</h3>
                  <p className="text-sm text-gray-500">
                    Connect with peers, mentors, and potential collaborators from around the globe.
                  </p>
                  <Link
                    href="/registration"
                    className="mt-4 inline-flex items-center text-sm font-medium text-gray-900 hover:underline"
                    prefetch={false}
                  >
                    Register now
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
      </main>
    </div>
  )
}
