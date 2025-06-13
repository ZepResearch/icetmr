"use client"

import { motion } from "framer-motion"
import { ChevronRight, FileText, Info, ArrowLeft, StopCircle, X, DollarSign } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import Link from "next/link"

export default function CancellationPolicy() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const cancellationFees = [
    { period: "60+ days before the conference", refund: "100% refund (minus processing fee)" },
    { period: "30-59 days before the conference", refund: "50% refund" },
    { period: "Less than 30 days before the conference", refund: "No refund" },
  ]

  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-40 h-40 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-yellow-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-red-200/20 rounded-full blur-2xl animate-pulse"></div>
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ef4444 1px, transparent 1px), linear-gradient(to bottom, #ef4444 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-md px-6 py-2 text-sm font-medium text-gray-800 shadow-sm mb-6">
              <span className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-semibold">
                ICETMR 2025
              </span>
              <ChevronRight className="ml-2 h-4 w-4 text-gray-600" />
            </div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              Cancellation Policy
            </motion.h1>

            <div className="h-1.5 w-24 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 mx-auto mb-8 rounded-full shadow-lg"></div>

            <motion.div
              className="space-y-3"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-xl font-semibold text-gray-800">
                International Conference on Emerging Trends in Multidisciplinary Research
              </p>
              <p className="text-lg text-gray-600">
                October 10th - 11th, 2025 • Bali, Indonesia
              </p>
              <p className="text-base text-gray-500">
                Our refund and cancellation guidelines for ICETMR 2025
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cancellation Policy Content */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative backdrop-blur-sm bg-white rounded-3xl border border-gray-100 overflow-hidden mb-8 shadow-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200/30 via-red-200/20 to-yellow-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200/20 via-red-200/10 to-yellow-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 shadow-lg">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                      <FileText className="h-6 w-6 text-gray-700" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Overview</h2>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  We understand that plans can change. Our cancellation policy is designed to be fair to all parties
                  involved. Please read this policy carefully before registering for the International Conference on
                  Emerging Trends in Multidisciplinary Research (ICETMR) taking place in Bali, Indonesia.
                </p>
              </div>
            </div>

            <div className="relative backdrop-blur-sm bg-white rounded-3xl border border-gray-100 overflow-hidden mb-8 shadow-lg">
              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 shadow-lg">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                      <DollarSign className="h-6 w-6 text-gray-700" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Cancellation Fees</h2>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-gray-200 backdrop-blur-sm shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50/80">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b border-gray-200">
                            Cancellation Period
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-bold text-gray-900 border-b border-gray-200">
                            Refund Amount
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        {cancellationFees.map((fee, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200"
                          >
                            <td className="px-6 py-4 font-medium text-gray-900">{fee.period}</td>
                            <td className="px-6 py-4 text-gray-600">{fee.refund}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <Alert className="mb-8 relative backdrop-blur-sm bg-blue-50/80 border border-blue-200 shadow-sm">
              <Info className="h-5 w-5 text-blue-600" />
              <AlertTitle className="font-bold text-blue-900 mb-2">Important Note</AlertTitle>
              <AlertDescription className="text-blue-800">
                All cancellation requests must be submitted through your  email to
                info@emergingtrendsconference.com. Our team will contact you to process your refund request. Refunds will be processed to the original form of payment within 10 business days of approval.
              </AlertDescription>
            </Alert>

            <div className="relative backdrop-blur-sm bg-white rounded-2xl border border-gray-100 overflow-hidden p-8 shadow-lg">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-bl from-pink-500/10 via-red-500/5 to-yellow-500/10 opacity-50"></div>

              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  If you have any questions about our cancellation policy or need assistance, please don't hesitate to
                  contact our support team:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <strong className="text-gray-900">Email:</strong> info@emergingtrendsconference.com   
                  </p>
                  <p>
                    <strong className="text-gray-900">Phone:</strong> +91 78488 54815
                  </p>
                  <p>
                    <strong className="text-gray-900">Venue:</strong> Bali, Indonesia
                  </p>
                </div>

                <div className="mt-8 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="px-8 py-3 rounded-full bg-white backdrop-blur-sm text-gray-900 font-medium hover:bg-gray-50 transition-colors">
                      Contact Support
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}