"use client"

import { motion } from "framer-motion"
import { ChevronRight, ScrollText, AlertCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function TermsAndConditions() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By registering for the International Conference on Emerging Trends in Multidisciplinary Research (ICETMR), you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please do not register for or attend the conference.",
    },
    {
      title: "2. Registration and Payment",
      content:
        "Registration is only confirmed upon receipt of full payment. All fees must be paid in the currency specified on the registration form. The organizers reserve the right to refuse admission if payment is not received prior to the conference. Registration fees may vary based on participant category and registration date.",
    },
    {
      title: "3. Cancellation and Refund Policy",
      content:
        "Cancellations must be received in writing via email to info@icetmr.com. Refunds will be issued as follows: 100% refund for cancellations more than 60 days before the conference, 50% refund for cancellations 30-60 days before the conference, and no refund for cancellations less than 30 days before the conference. All refunds are subject to a processing fee.",
    },
    {
      title: "4. Conference Program",
      content:
        "The organizers reserve the right to modify the program, speakers, venue, and schedule without prior notice. In the event of a speaker cancellation, the organizers will make every effort to find a suitable replacement. The conference program is subject to change based on unforeseen circumstances.",
    },
    {
      title: "5. Intellectual Property",
      content:
        "All materials presented at the conference are protected by copyright. Attendees may not record, photograph, or reproduce any sessions without the express written consent of the organizers and the respective speakers. Papers submitted for the conference proceedings may be published in indexed journals with proper attribution to the authors.",
    },
    {
      title: "6. Liability",
      content:
        "The organizers are not responsible for any loss, injury, or damage to any person or property, whatever the cause may be. Attendees are advised to make their own arrangements with respect to personal insurance, travel, and accommodation. The organizers will not be liable for any theft or damage to personal belongings during the conference.",
    },
    {
      title: "7. Code of Conduct",
      content:
        "All attendees are expected to behave in a professional and respectful manner throughout the conference. The organizers reserve the right to remove any attendee from the conference without refund if their behavior is deemed inappropriate or disruptive. Harassment of any kind will not be tolerated and may result in immediate expulsion from the conference.",
    },
    {
      title: "8. Data Protection",
      content:
        "By registering for the conference, you agree that your personal information may be used for conference administration purposes. We will not share your information with third parties without your consent, except as required by law. Your contact information may be used to send you important updates about the conference and future ICETMR events.",
    },
    {
      title: "9. Force Majeure",
      content:
        "In the event that the conference is postponed or cancelled due to circumstances beyond the organizers' control, including but not limited to acts of God, war, disaster, pandemic, or government regulations, the organizers will not be held liable for any damages or losses incurred by attendees. In such cases, the organizers will make reasonable efforts to reschedule the conference or provide alternative arrangements.",
    },
    {
      title: "10. Amendments",
      content:
        "The organizers reserve the right to amend these Terms and Conditions at any time without prior notice. The most current version will always be available on the conference website. It is the responsibility of attendees to review these terms periodically for changes.",
    },
  ]

  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-bl from-pink-500/20 via-red-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ec4899 1px, transparent 1px), linear-gradient(to bottom, #ec4899 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-gradient-to-bl from-pink-50 via-red-50 to-yellow-50 px-4 py-1.5 text-sm font-medium text-gray-900 backdrop-blur-md mb-6">
              <span>ICETMR 2025</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              Terms and Conditions
            </motion.h1>

            <div className="h-1 w-20 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>

            <motion.p
              className="text-lg text-gray-600"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Please read these terms carefully before registering for the conference
            </motion.p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Content */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative backdrop-blur-sm bg-white rounded-3xl border border-gray-200 overflow-hidden mb-10 shadow-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-bl from-pink-500/5 via-red-500/5 to-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                      <ScrollText className="h-6 w-6 text-gray-900" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">ICETMR Terms and Conditions</h2>
                </div>

                <p className="text-gray-600 mb-6">
                  Welcome to the Terms and Conditions for the International Conference on Emerging Trends in
                  Multidisciplinary Research (ICETMR). These terms govern your participation in our conference 
                </p>

                <div className="relative backdrop-blur-sm bg-gray-50 rounded-xl border border-gray-200 overflow-hidden mb-6">
                  <ScrollArea className="h-[60vh] p-6">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                      {sections.map((section, index) => (
                        <AccordionItem
                          key={index}
                          value={`item-${index}`}
                          className="border border-gray-200 rounded-xl backdrop-blur-sm bg-white overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 transition-colors">
                            <span className="text-lg font-medium text-gray-900">{section.title}</span>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 pb-4 pt-2 text-gray-600">
                            {section.content}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </ScrollArea>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 backdrop-blur-sm rounded-xl border border-gray-200">
                  <AlertCircle className="h-6 w-6 text-pink-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-gray-600">
                      By registering for ICETMR, you acknowledge that you have read, understood, and agree to be bound
                      by these Terms and Conditions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative backdrop-blur-sm bg-white rounded-2xl border border-gray-200 overflow-hidden p-8 text-center shadow-lg">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-bl from-pink-500/10 via-red-500/5 to-yellow-500/10 opacity-50"></div>

              <div className="relative">
                <p className="text-gray-600 mb-4">
                  Last updated: <span className="text-gray-900 font-medium">{new Date().toLocaleDateString()}</span>
                </p>
                <p className="text-gray-600">
                  For any questions regarding these Terms and Conditions, please contact us at{" "}
                  <a
                    href="mailto:info@emergingtrendsconference.com"
                    className="text-gray-900 font-medium hover:underline transition-colors"
                  >
                    info@emergingtrendsconference.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}