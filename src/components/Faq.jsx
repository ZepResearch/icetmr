"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, Mail, Phone } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { Conference } from "@/constants/conference"

export default function ConferenceFAQ() {
  const [openIndex, setOpenIndex] = useState(1)

  const faqs = [
    {
      question: "How can I register for the conference?",
      answer:
        `Registration for ${Conference.shortForm} ${Conference.year} is available through our online portal. Early bird registration is open until September 21th, ${Conference.year}. You can choose between in-person attendance in ${Conference.venue.location} or virtual participation. Group discounts are available for institutions sending 5 or more participants.`,
    },
    {
      question: "What are the submission guidelines for research papers?",
      answer:
        "Research papers should be 6-10 pages in length following IEEE format or our provided template. All submissions must be original work not previously published or currently under review elsewhere. Topics should align with multidisciplinary research themes including technology, health sciences, social innovation, engineering, and interdisciplinary studies.",
    },
    {
      question: "Is there financial support available for students and researchers?",
      answer:
        `Yes, ${Conference.shortForm} offers special student pricing and travel grants for the conference on ${Conference.date}. Student registration is available upto 40% discount compared to regular registration. We also offer limited travel grants for outstanding research submissions from developing countries. To qualify, provide valid student ID and proof of enrollment or institutional affiliation.`,
    },
    {
      question: `What accommodation options are available in ${Conference.venue.location.split(",")[0]}?`,
      answer:
        `We have partnered with several hotels near the venue offering special conference rates. Options range from budget-friendly accommodations to luxury resorts. Book early as there is peak season in ${Conference.venue.location}. We recommend staying within 15km of the venue for easy transportation. Contact us at info@emergingtrendsconference.com for hotel recommendations and booking assistance.`,
    },
    {
      question: "How can I become a sponsor or exhibitor?",
      answer:
        "We offer various sponsorship packages designed to provide visibility and engagement opportunities for organizations committed to research innovation and multidisciplinary collaboration. Benefits include exhibition space, speaking slots, logo placement, networking events, and complimentary registrations. Please contact our partnership team at info@emergingtrendsconference.com for a detailed prospectus.",
    },
    {
      question: "Is the conference venue accessible and what about visa requirements?",
      answer:
        "Yes, the conference venue is fully accessible with modern facilities, ramps, elevators, and accessible restrooms. For visa requirements, please check with your local consulate for specific requirements. We can provide invitation letters for visa applications upon request.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="section-shell reveal-on-scroll overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="mb-8 text-center">
            <span className="eyebrow">Faq</span>
            <h2 className="mt-4 text-3xl font-semibold text-[#292524] sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#78716c] sm:text-base">
              Find answers to common questions about {Conference.shortForm} {Conference.year} in {Conference.venue.location}.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="overflow-hidden rounded-[1.5rem] border border-[#e8efe8] bg-[#fcfbf7]">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-3 p-5 text-left"
                >
                  <h3 className="text-base font-semibold text-[#292524] sm:text-lg">{faq.question}</h3>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${openIndex === index ? 'bg-[#292524] text-white' : 'bg-[#e8efe8] text-[#292524]'}`}>
                    {openIndex === index ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-5 pb-5 text-sm leading-7 text-[#78716c]">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-[#e8efe8] bg-[#fdfcf8] p-6">
            <h3 className="text-2xl font-semibold text-[#292524]">Still have questions?</h3>
            <p className="mt-3 text-sm leading-7 text-[#78716c]">
              Our team is ready to help with any additional questions about the event and the experience in {Conference.venue.location}.
            </p>
            <div className="mt-5 flex flex-col gap-3 text-sm font-medium text-[#292524] sm:flex-row sm:items-center sm:gap-6">
              <a className="inline-flex items-center gap-2" href="mailto:info@emergingtrendsconference.com">
                <Mail className="h-4 w-4 text-[#ff7a6a]" /> info@emergingtrendsconference.com
              </a>
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#ff7a6a]" /> +91 82600 80050
              </span>
            </div>
            <Link href="/contact">
              <Button className="mt-5 rounded-full bg-[#292524] px-5 text-white hover:bg-[#1f1c1a]">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
