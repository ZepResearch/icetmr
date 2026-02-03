"use client"

import { motion } from "framer-motion"
import { ChevronRight, Shield, Lock, Eye, Server, Cookie, UserCheck } from "lucide-react"

export default function PrivacyPolicy() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const policies = [
    {
      title: "How We Collect Your Information",
      icon: <Eye className="h-6 w-6 text-gray-700" />,
      content: [
        "We collect information when you:",
        "• Register for the conference",
        "• Submit papers or abstracts",
        "• Contact our support team",
        "• Take part in surveys",
        "• Join our in-person or virtual events",
        "",
        "This typically includes basic details like your name, email, affiliation, and research interests. We'll always tell you when we need any information and why.",
      ].join("\n"),
    },
    {
      title: "What We Do With Your Information",
      icon: <Server className="h-6 w-6 text-gray-700" />,
      content: [
        "Your information helps us:",
        "• Process your conference registration",
        "• Review and publish submitted papers",
        "• Keep you updated about the event",
        "• Answer your questions",
        "• Make our services better",
        "• Connect you with other researchers and participants",
        "",
        "We use your data only for these specific purposes and nothing else.",
      ].join("\n"),
    },
    {
      title: "Sharing Your Information",
      icon: <UserCheck className="h-6 w-6 text-gray-700" />,
      content: [
        "We only share your information with:",
        "• Our trusted service providers who help run the conference",
        "• Academic indexing services for published papers (with your consent)",
        "• Legal authorities if required by law",
        "",
        "We never sell your personal information to third parties. Your research and academic contributions may be published in conference proceedings with your explicit consent.",
      ].join("\n"),
    },
    {
      title: "Keeping Your Information Safe",
      icon: <Lock className="h-6 w-6 text-gray-700" />,
      content: [
        "We protect your information by:",
        "• Using secure servers",
        "• Limiting access to authorized staff",
        "• Regular security updates",
        "• Encrypting sensitive data",
        "",
        "While we work hard to protect your data, no online system is 100% secure. We recommend using strong passwords and keeping your login details private.",
      ].join("\n"),
    },
    {
      title: "About Cookies",
      icon: <Cookie className="h-6 w-6 text-gray-700" />,
      content: [
        "We use cookies to:",
        "• Remember your preferences",
        "• Improve your browsing experience",
        "• Analyze how our website is used",
        "• Manage your login session",
        "",
        "You can control cookies through your browser settings. Want to know more? Visit our Cookie Policy page.",
      ].join("\n"),
    },
    {
      title: "Your Privacy Rights",
      icon: <Shield className="h-6 w-6 text-gray-700" />,
      content: [
        "You have the right to:",
        "• See what information we have about you",
        "• Update your information",
        "• Delete your information (except where we have legal obligations to retain it)",
        "• Opt out of communications",
        "• Withdraw consent for publishing your research",
        "",
        "To exercise these rights, contact our privacy team at privacy@icetmr.com",
      ].join("\n"),
    },
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
              Your Privacy Matters
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
           
              <p className="text-base text-gray-500">
                Simple, clear information about how we protect your data
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-10 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative backdrop-blur-sm bg-white rounded-3xl border border-gray-100 overflow-hidden mb-10 shadow-lg">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-200/30 via-red-200/20 to-yellow-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-200/20 via-red-200/10 to-yellow-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

              <div className="relative p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 shadow-lg">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                      <Shield className="h-6 w-6 text-gray-700" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">ICETMR Privacy Policy</h2>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed">
                  We believe in being clear and open about how we collect and use your data. This privacy policy
                  explains how the International Conference on Emerging Trends in Multidisciplinary Research
                  (ICETMR) handles your personal information.
                </p>

                <div className="space-y-4">
                  {policies.map((policy, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 rounded-xl backdrop-blur-sm bg-white overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="px-6 py-4 bg-gray-50/50 border-b border-gray-100">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                            {policy.icon}
                          </div>
                          <span className="text-lg font-semibold text-gray-900">{policy.title}</span>
                        </div>
                      </div>
                      <div className="px-6 py-4 text-gray-600 whitespace-pre-line leading-relaxed">
                        {policy.content}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative backdrop-blur-sm bg-white rounded-2xl border border-gray-100 overflow-hidden p-8 text-center shadow-lg">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-bl from-pink-500/10 via-red-500/5 to-yellow-500/10 opacity-50"></div>

              <div className="relative">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Need Help?</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  If you have any questions about your privacy, please email our privacy team at{" "}
                  <a
                    href="mailto:info@emergingtrendsconference.com"
                    className="text-gray-900 font-medium  transition-colors underline decoration-pink-500/30 hover:decoration-pink-500"
                  >
                   info@emergingtrendsconference.com
                  </a>{" "}
                  or call us at +91 78488 54815.
                </p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>Last updated: {new Date().toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}