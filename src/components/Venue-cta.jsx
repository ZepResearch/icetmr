"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Navigation, Building, Wifi, Coffee, Users } from "lucide-react"
import { Conference } from "@/constants/conference"

export default function ConferenceVenue() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="section-shell reveal-on-scroll overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="mb-8 text-center">
            <span className="eyebrow">Venue</span>
            <h2 className="mt-4 text-3xl font-semibold text-[#292524] sm:text-4xl">
              A setting that supports ideas and connection
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#78716c] sm:text-base">
              Join us in {Conference.venue.location} for an inspiring environment designed for thoughtful exchange and multidisciplinary collaboration.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-[#e8efe8] bg-[#fcfbf7]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative min-h-[320px]">
                <Image src="/venue.avif" alt="Conference venue" fill className="object-cover" />
              </div>
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8efe8] text-[#292524]">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#78716c]">Date</p>
                      <p className="text-base font-semibold text-[#292524]">{Conference.date}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e8efe8] text-[#292524]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#78716c]">Address</p>
                      <p className="text-base font-semibold text-[#292524]">{Conference.venue.name}</p>
                      <p className="text-sm leading-7 text-[#78716c]">{Conference.venue.address}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 h-px w-full bg-[#e8efe8]" />

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-2 rounded-[1rem] bg-[#fdfcf8] p-3 text-sm text-[#78716c]">
                    <Wifi className="h-4 w-4 text-[#ff7a6a]" /> High-speed WiFi
                  </div>
                  <div className="flex items-center gap-2 rounded-[1rem] bg-[#fdfcf8] p-3 text-sm text-[#78716c]">
                    <Building className="h-4 w-4 text-[#ff7a6a]" /> Modern facilities
                  </div>
                  <div className="flex items-center gap-2 rounded-[1rem] bg-[#fdfcf8] p-3 text-sm text-[#78716c]">
                    <Coffee className="h-4 w-4 text-[#ff7a6a]" /> Local hospitality
                  </div>
                  <div className="flex items-center gap-2 rounded-[1rem] bg-[#fdfcf8] p-3 text-sm text-[#78716c]">
                    <Users className="h-4 w-4 text-[#ff7a6a]" /> Networking spaces
                  </div>
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link href="https://maps.app.goo.gl/koqWFRepp7oiffUq6" target="_blank" rel="noopener noreferrer">
                    <Button className="rounded-full bg-[#292524] px-5 text-white hover:bg-[#1f1c1a]">
                      <Navigation className="mr-2 h-4 w-4" /> Get directions
                    </Button>
                  </Link>
                  <Link href="/venue">
                    <Button variant="outline" className="rounded-full border-[#d8d0c7] bg-white px-5 text-[#292524] hover:bg-[#efedf4]">
                      Venue details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
