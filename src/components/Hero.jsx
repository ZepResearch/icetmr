"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Calendar1, Lectern, MapPin } from "lucide-react"
import { Conference } from "@/constants/conference"

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-[-10%] top-10 h-48 w-48 rounded-full bg-[#ffb7b2]/40 blur-3xl ambient-blob" />
      <div className="absolute bottom-10 right-[-5%] h-56 w-56 rounded-full bg-[#e8efe8]/70 blur-3xl ambient-blob" />

      <main className="mx-auto flex max-w-7xl flex-col px-4 py-8 md:px-6 md:py-12 lg:px-8 lg:py-16">
        <section className="section-shell reveal-on-scroll overflow-hidden px-5 py-8 md:px-8 lg:px-10 lg:py-10">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-6">
              <span className="eyebrow">{Conference.shortForm}</span>

              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold leading-[0.95] text-[#292524] sm:text-5xl lg:text-6xl">
                  A calmer way to meet <span className="font-[family:var(--font-reenie)] text-[2.8rem] text-[#ff7a6a] sm:text-[3.4rem]">ideas</span> that matter.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-[#78716c]">
                  {Conference.name} invites researchers, educators, and changemakers into a thoughtful hybrid experience shaped around digital wellness, meaningful exchange, and future-facing collaboration.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 rounded-[1.5rem] border border-black/5 bg-[#fdfcf8]/80 p-4">
                <img src="/assets/scopus.png" alt="Scopus partner" className="h-10 opacity-90" />
                <img src="/assets/clarivate.png" alt="Clarivate partner" className="h-10 opacity-90" />
                <img src="assets/zepresearch.png" alt="Zep Research partner" className="h-10 opacity-90" />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/registration">
                  <Button size="lg" className="rounded-full bg-[#292524] px-6 text-white shadow-[0_8px_24px_-8px_rgba(41,37,36,0.45)] hover:bg-[#1f1c1a]">
                    Register now
                  </Button>
                </Link>
                <Link href="/about-conference">
                  <Button size="lg" variant="outline" className="rounded-full border-[#d8d0c7] bg-white/80 px-6 text-[#292524] hover:bg-[#efedf4]">
                    Explore the conference
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top_left,_rgba(255,183,178,0.35),_transparent_60%)]" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-[#efedf4]/70 p-3 shadow-[0_12px_40px_-12px_rgba(41,37,36,0.2)]">
                <Image
                  src="/assets/white-guy.png"
                  alt="Conference guest"
                  width={700}
                  height={700}
                  className="h-auto w-full rounded-[2rem] object-cover"
                />
              </div>

              <div className="absolute bottom-4 right-4 rounded-[1.5rem] border border-black/5 bg-white/85 p-4 shadow-[0_8px_24px_-10px_rgba(41,37,36,0.28)] backdrop-blur">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ffb7b2] text-[#292524]">
                    <Lectern className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#292524]">Hybrid format</p>
                    <p className="text-sm text-[#78716c]">Virtual + physical experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div className="soft-card p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#78716c]">When</p>
            <h3 className="mt-2 text-xl font-semibold text-[#292524]">{Conference.date.replace(",", "")}</h3>
            <p className="mt-2 text-sm leading-7 text-[#78716c]">A thoughtfully paced two-day programme with keynotes, conversation, and reflection.</p>
          </div>
          <div className="soft-card p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#78716c]">Where</p>
            <h3 className="mt-2 text-xl font-semibold text-[#292524]">{Conference.venue.location}</h3>
            <p className="mt-2 text-sm leading-7 text-[#78716c]">A welcoming venue designed for collaboration in a beautiful tropical setting.</p>
          </div>
          <div className="soft-card p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#78716c]">Why</p>
            <h3 className="mt-2 text-xl font-semibold text-[#292524]">Meaningful networking</h3>
            <p className="mt-2 text-sm leading-7 text-[#78716c]">Connect with peers, mentors, and changemakers across disciplines.</p>
          </div>
        </div>
      
      </main>
    </div>
  )
}
