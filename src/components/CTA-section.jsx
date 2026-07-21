import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Presentation, Trophy, Users } from 'lucide-react'
import React from 'react'
import { Conference } from "@/constants/conference"

function CtaHighlight() {
  const cards = [
    {
      id: 'awards',
      title: 'Awards',
      description: 'Recognizing outstanding work in multidisciplinary research and the ideas shaping the future.',
      href: '/awards',
      icon: <Trophy />,
    },
    {
      id: 'venue',
      title: 'Venue',
      description: `Experience the conference live in ${Conference.venue.location} or join virtually through our online platform.`,
      href: '/venue',
      icon: <MapPin />,
    },
    {
      id: 'sponsorship',
      title: 'Sponsorship',
      description: `Partner with ${Conference.shortForm} and showcase your organisation’s commitment to future-facing research.`,
      href: '/exhibit-and-sponsor',
      icon: <Presentation />,
    },
    {
      id: 'committee',
      title: 'Committee',
      description: 'Meet the expert voices guiding the conference with rigour, care, and a global perspective.',
      href: '/committee',
      icon: <Users />,
    },
    {
      id: 'schedule',
      title: 'Schedule',
      description: 'Explore the curated two-day programme of thoughtful sessions, panels, and conversations.',
      href: '/schedule',
      icon: <Calendar />,
    },
    {
      id: 'organizer',
      title: 'Organizer',
      description: `Learn more about the team behind ${Conference.shortForm} and their mission to connect ideas across disciplines.`,
      href: '/about-organizers',
      icon: <Users />,
    },
  ]

  return (
    <section className="px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="section-shell reveal-on-scroll overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">Highlights</span>
              <h2 className="mt-4 text-3xl font-semibold text-[#292524] sm:text-4xl">
                More than a conference — a thoughtful experience
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <Link key={card.id} href={card.href}>
                <div className="group rounded-[1.75rem] border border-[#e8efe8] bg-[#fcfbf7] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white">
                  <div className="mb-6 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8efe8] text-[#292524]">
                      {card.icon}
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#292524] text-white transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#292524]">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#78716c]">{card.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaHighlight
