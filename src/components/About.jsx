import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Conference } from "@/constants/conference"

const pillars = [
  {
    title: 'Research excellence',
    text: 'Promote high-quality inquiry across disciplines and create room for bold, evidence-led thinking.',
  },
  {
    title: 'Interdisciplinary connection',
    text: 'Bridge disciplines with conversation, collaboration, and a shared sense of purpose.',
  },
  {
    title: 'Global perspective',
    text: 'Bring together researchers and practitioners from around the world to shape future-ready solutions.',
  },
]

function About() {
  return (
    <section className="px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="section-shell reveal-on-scroll overflow-hidden">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div className="relative overflow-hidden bg-[#efedf4]/70 p-4 sm:p-6">
              <div className="absolute left-4 top-4 h-28 w-28 rounded-full bg-[#ffb7b2]/55 blur-3xl" />
              <Image
                src="/assets/about.png"
                alt="Conference atmosphere"
                width={700}
                height={500}
                className="h-full min-h-[320px] w-full rounded-[2rem] object-cover"
              />
            </div>

            <div className="flex items-center p-6 sm:p-8 lg:p-10">
              <div className="space-y-6">
                <span className="eyebrow">About the experience</span>
                <h2 className="text-3xl font-semibold leading-tight text-[#292524] sm:text-4xl lg:text-5xl">
                  A thoughtful gathering for <span className="font-[family:var(--font-reenie)] text-[2.2rem] text-[#ff7a6a] sm:text-[2.7rem]">curious minds</span>.
                </h2>

                <div className="space-y-4 text-lg leading-8 text-[#4c463f]">
                  <p>
                    At {Conference.name}, we bring together leading experts, researchers, and innovators across fields to explore how multidisciplinary work can respond to global challenges with clarity and care.
                  </p>
                  <p>
                    The conference blends keynote talks, thoughtful panels, collaborative workshops, and relaxed networking into a two-day experience designed to feel both inspiring and grounded.
                  </p>
                </div>

                <Link href="/about-conference" className="inline-flex">
                  <Button size="lg" className="rounded-full bg-[#292524] px-6 text-white hover:bg-[#1f1c1a]">
                    Learn more
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="soft-card p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8efe8] text-lg font-semibold text-[#292524]">
                0{index + 1}
              </div>
              <h3 className="text-xl font-semibold text-[#292524]">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#78716c]">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
