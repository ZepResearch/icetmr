"use client"

import { useState } from "react"
import { ArrowDown, ArrowUp, ChevronDown, ChevronUp, Mail, Phone } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export default function ConferenceFAQ() {
  const [openIndex, setOpenIndex] = useState(1)

  const faqs = [
    {
      question: "How can I register for the conference?",
      answer:
        "Registration for 2nd ICETMR 2026 is available through our online portal. Early bird registration is open until September 21th, 2026. You can choose between in-person attendance in Bali or virtual participation. Group discounts are available for institutions sending 5 or more participants.",
    },
    {
      question: "What are the submission guidelines for research papers?",
      answer:
        "Research papers should be 6-10 pages in length following IEEE format or our provided template. All submissions must be original work not previously published or currently under review elsewhere. Topics should align with multidisciplinary research themes including technology, health sciences, social innovation, engineering, and interdisciplinary studies.",
    },
    {
      question: "Is there financial support available for students and researchers?",
      answer:
        "Yes, 2nd ICETMR offers special student pricing and travel grants for the conference on October 7th-8th, 2026. Student registration is available at 60% discount compared to regular registration. We also offer limited travel grants for outstanding research submissions from developing countries. To qualify, provide valid student ID and proof of enrollment or institutional affiliation.",
    },
    {
      question: "What accommodation options are available in Kuala Lumpur?",
      answer:
        "We have partnered with several hotels near the venue offering special conference rates. Options range from budget-friendly accommodations to luxury resorts. Book early as October is peak season in Kuala Lumpur. We recommend staying within 15km of the venue for easy transportation. Contact us at info@icetmr.org for hotel recommendations and booking assistance.",
    },
    {
      question: "How can I become a sponsor or exhibitor?",
      answer:
        "We offer various sponsorship packages designed to provide visibility and engagement opportunities for organizations committed to research innovation and multidisciplinary collaboration. Benefits include exhibition space, speaking slots, logo placement, networking events, and complimentary registrations. Please contact our partnership team at partnerships@icetmr.org for a detailed prospectus.",
    },
    {
      question: "Is the conference venue accessible and what about visa requirements?",
      answer:
        "Yes, the Bali International Convention Centre is fully accessible with modern facilities, ramps, elevators, and accessible restrooms. For visa requirements, most nationalities can obtain a visa on arrival or e-visa for Indonesia. Please check with your local Indonesian consulate for specific requirements. We can provide invitation letters for visa applications upon request.",
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-pretty text-gray-800 mb-4">
            Frequently Asked Questions
           
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about 2nd ICETMR 2026 in Kuala Lumpur, Malaysia. If you don't see your question here, please contact us.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all duration-300 shadow-sm border ${
                openIndex === index 
                  ? "bg-gray-50/50 border-gray-200" 
                  : "bg-white border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none group"
              >
                <h3 className="text-xl font-medium text-gray-800 group-hover:text-gray-900 transition-colors">{faq.question}</h3>
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? "bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 shadow-lg" 
                      : "bg-gray-100 group-hover:bg-gray-200"
                  }`}
                >
                  {openIndex === index ? (
                    <ArrowUp className="h-5 w-5 text-white" />
                  ) : (
                    <ArrowDown className="h-5 w-5 text-gray-600" />
                  )}
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Our team is ready to assist you with any additional questions or concerns you may have about 2nd ICETMR 2026 in Kuala Lumpur.
          </p>
         <div className="flex flex-col  text-lg font-bold " >
          <a className="inline-flex gap-2 items-center " >
           <Mail/> info@emergingtrendsconference.com
          </a>
          <span  className="inline-flex gap-2 items-center mt-4 ">
            <Phone/>
            +91 82600 80050
          </span>
          <Link href={'/contact'}>
          <Button className={'mt-4 ml-8 '} >
            Contact us 
          </Button>
          </Link>
         </div>
        </div>

        {/* Ways to Participate */}
  
      </div>
    </div>
  )
}