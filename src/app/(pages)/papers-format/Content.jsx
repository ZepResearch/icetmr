"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, FileText, Check, ArrowRight } from "lucide-react"

export default function PapersFormatPage() {
  const generalRequirements = [
    "Use the provided templates without modifying margins, font sizes, or styles",
    "Abstract submissions should not exceed 300 words",
    "Full papers should be between 8-12 pages, including figures, tables, and references",
    "Poster presentations should follow the A0 format (841 × 1189 mm) in portrait orientation",
    "All submissions must be in Word file type format",
  ]

  const templates = [
    {
      title: "Abstract Format",
      description: "Template for 300-word abstract submissions",
      file: "/templates/Abstract_Template.docx",
      icon: <FileText className="h-6 w-6 text-gray-700" />,
    },
    {
      title: "Full Paper Format",
      description: "Template for 8-12 page full paper submissions",
      file: "/templates/Fullpaper_Template.doc",
      icon: <FileText className="h-6 w-6 text-gray-700" />,
    },
    {
      title: "Poster Format",
      description: "Template for A0 poster presentations",
      file: "/templates/poster.jpg",
      icon: <FileText className="h-6 w-6 text-gray-700" />,
    },
  ]

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gray-50">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Geometric shapes */}
          <div
            className="absolute right-[10%] top-[20%] w-32 h-32 bg-gray-200/40"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
              transform: "rotate(15deg)",
            }}
          ></div>
          <div
            className="absolute left-[15%] bottom-[30%] w-24 h-24 bg-gray-200/30"
            style={{
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              transform: "rotate(-10deg)",
            }}
          ></div>

          {/* Small floating circles */}
          <div
            className="absolute left-[20%] top-[15%] w-16 h-16 rounded-full bg-gray-200/30 animate-pulse"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="absolute right-[25%] bottom-[20%] w-12 h-12 rounded-full bg-gray-200/20 animate-pulse"
            style={{ animationDelay: "-2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                Paper Format
                <span className="relative inline-block mx-2 ml-4">
                  <span className="relative z-10 text-white px-4 py-2 rounded-lg bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500">Guidelines</span>
                </span>
              </h1>
              <div className="mt-8 space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">International Conference on Emerging Trends in Multidisciplinary Research</h2>
                <p className="text-xl font-semibold text-gray-700">October 10th - 11th, 2025</p>
                <p className="text-lg text-gray-600">Bali, Indonesia</p>
              </div>
            </div>
            <p className="text-xl text-gray-600 mb-8">Download templates and learn how to format your submission</p>
          </div>
        </div>
      </section>

      {/* Paper Format Guidelines Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"
                alt="Paper Format Guidelines"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center">
                  <span className="text-gray-900 font-medium">Ensure your research stands out</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Paper Format Guidelines</h2>
              <p className="text-gray-600 mb-4">
                All submissions to the International Conference on Emerging Trends in Multidisciplinary Research 2025 must follow our formatting guidelines to ensure consistency and
                readability. We provide templates for different types of submissions to make this process easier.
              </p>
              <p className="text-gray-600 mb-6">
                Please carefully review the guidelines below and use the appropriate template for your submission type.
                Papers that do not follow these guidelines may be returned for revision before being considered for
                review.
              </p>

              <div className="bg-gray-50 rounded-3xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">General Requirements</h3>
                <ul className="space-y-3">
                  {generalRequirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center mr-2 mt-0.5 flex-shrink-0">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Citation Style Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Citation Style</h2>
              <p className="text-gray-600 mb-4">
                The International Conference on Emerging Trends in Multidisciplinary Research 2025 uses the IEEE citation style for all submissions. Please ensure that your references are
                formatted according to this style. The templates provided include examples of how to format different
                types of references.
              </p>
              <p className="text-gray-600">
                For detailed information on IEEE citation style, please refer to the IEEE Reference Guide available on
                our website or consult the IEEE Editorial Style Manual.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Language</h2>
              <p className="text-gray-600 mb-4">
                All submissions must be in English. We recommend having your paper proofread by a native English speaker
                or professional editing service before submission.
              </p>
              <p className="text-gray-600">
                Clear and concise language is essential for effectively communicating your research. Pay particular
                attention to the clarity of your abstract, introduction, and conclusion, as these sections are critical
                for readers to understand the significance of your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Templates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Download Templates</h2>
            <p className="text-gray-600">Use our official templates for your submissions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl p-8 shadow-sm text-center hover:shadow-lg transition-shadow">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {template.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{template.title}</h3>
                <p className="text-gray-600 mb-6">{template.description}</p>
                <Link href={template.file}>
                 <Button
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-full"
                  >
                  <Download className="mr-2 h-4 w-4" /> Download file
                </Button>
               </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Submission Tips Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Submission Tips</h2>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Start Early</h3>
                    <p className="text-gray-600">
                      Begin preparing your submission well before the deadline to allow time for revisions and
                      formatting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Follow Guidelines Strictly</h3>
                    <p className="text-gray-600">
                      Adhere to all formatting requirements, including page limits, citation style, and template usage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Clear Abstract</h3>
                    <p className="text-gray-600">
                      Write a concise, informative abstract that clearly states your research question, methodology, and
                      key findings.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Proofread Thoroughly</h3>
                    <p className="text-gray-600">
                      Check for grammatical errors, typos, and formatting issues before submission. Consider having a
                      colleague review your paper.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gray-50 rounded-3xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to submit your paper?</h3>
                <p className="text-gray-600 max-w-xl">
                  Download the appropriate template and prepare your submission for the International Conference on Emerging Trends in Multidisciplinary Research 2025.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/submission">
                  <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white rounded-full whitespace-nowrap">
                    Submit Paper
                  </Button>
                </Link>
                <Link
                  href="/theme-and-topics"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  View Research Topics <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}