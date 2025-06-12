"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Trophy, GraduationCap, Star, Users, FileText } from 'lucide-react'
import Link from "next/link"

export default function AwardsPage() {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large blob in top right */}
          <div
            className="absolute -right-40 -top-40 w-[30rem] h-[30rem] opacity-10"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: "linear-gradient(45deg, #ec4899, #ef4444, #eab308)",
            }}
          ></div>

          {/* Small circle in bottom left */}
          <div className="absolute left-20 bottom-20 w-16 h-16 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-20"></div>

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-15"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Conference
              <span className="relative inline-block mx-4 px-1">
                <span className="relative z-10 text-white">Awards</span>
                <span className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full transform -rotate-1 scale-110 z-0 opacity-80"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Recognizing excellence in multidisciplinary research and emerging trends innovation
            </p>
          </div>
        </div>
      </section>

      {/* Awards Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <Award className="h-8 w-8 text-gray-800" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Excellence in Research</h2>

                <div className="space-y-6 text-gray-700">
                  <p>
                    ICETMR 2025 is proud to recognize outstanding contributions to multidisciplinary research and 
                    emerging trends across various fields. Our awards celebrate innovative approaches, rigorous methodology, and
                    effective communication of complex ideas that address contemporary challenges through interdisciplinary collaboration.
                  </p>

                  <p>
                    Winners will be announced during the closing ceremony on October 11, 2025 in beautiful Bali, Indonesia. All conference
                    participants are eligible for consideration, with special categories for student researchers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                    <div className="text-3xl font-bold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-1">3</div>
                    <div className="text-gray-700">Award Categories</div>
                  </div>

                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                    <div className="text-3xl font-bold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-1">5+</div>
                    <div className="text-gray-700">Expert Judges</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Award Categories</h2>
            <div className="h-1 w-20 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Best Talk Award */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-10 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden h-full shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-10"></div>
                
                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 -mt-4 mb-6 shadow-lg">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                        <Trophy className="h-10 w-10 text-gray-800" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Best Talk Award</h3>

                  <div className="space-y-4 text-gray-700 flex-grow">
                    <p>
                      Recognizing exceptional oral presentation skills, clarity of communication, and audience
                      engagement. This award celebrates researchers who can effectively convey complex multidisciplinary ideas
                      in an accessible and compelling manner.
                    </p>

                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-pink-500" />
                        <span className="text-gray-900 font-medium">Award Criteria</span>
                      </div>

                      <ul className="space-y-2 pl-7">
                        <li className="list-disc text-gray-700">Clarity and organization of presentation</li>
                        <li className="list-disc text-gray-700">Quality of visual materials</li>
                        <li className="list-disc text-gray-700">Engagement with audience</li>
                        <li className="list-disc text-gray-700">Handling of Q&A session</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Paper Award */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-10 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden h-full shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-10"></div>
                
                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 -mt-4 mb-6 shadow-lg">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                        <FileText className="h-10 w-10 text-gray-800" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Top Paper Award</h3>

                  <div className="space-y-4 text-gray-700 flex-grow">
                    <p>
                      Honoring outstanding research papers that demonstrate methodological rigor, innovative approaches,
                      and significant contributions to multidisciplinary research. This award recognizes the
                      highest quality of written scholarship presented at the conference.
                    </p>

                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-red-500" />
                        <span className="text-gray-900 font-medium">Award Criteria</span>
                      </div>

                      <ul className="space-y-2 pl-7">
                        <li className="list-disc text-gray-700">Originality and innovation</li>
                        <li className="list-disc text-gray-700">Methodological rigor</li>
                        <li className="list-disc text-gray-700">Significance of findings</li>
                        <li className="list-disc text-gray-700">Quality of writing and organization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Student Award */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-10 rounded-3xl blur-xl"></div>
              
              <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden h-full shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-10"></div>
                
                <div className="relative p-8 flex flex-col h-full">
                  <div className="flex justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 -mt-4 mb-6 shadow-lg">
                      <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                        <GraduationCap className="h-10 w-10 text-gray-800" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 text-center mb-4">Best Student Award</h3>

                  <div className="space-y-4 text-gray-700 flex-grow">
                    <p>
                      Celebrating outstanding research contributions from student participants. This award recognizes
                      emerging scholars who demonstrate exceptional promise, innovative thinking, and high-quality
                      multidisciplinary research while still pursuing their academic degrees.
                    </p>

                    <div className="bg-gray-50 rounded-xl border border-gray-200 p-4 space-y-3">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span className="text-gray-900 font-medium">Award Criteria</span>
                      </div>

                      <ul className="space-y-2 pl-7">
                        <li className="list-disc text-gray-700">Quality of research</li>
                        <li className="list-disc text-gray-700">Independence of work</li>
                        <li className="list-disc text-gray-700">Presentation skills</li>
                        <li className="list-disc text-gray-700">Potential impact of research</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Judging Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-10 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5">
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-white">
                      <Users className="h-6 w-6 text-gray-800" />
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Judging Process</h2>
                </div>

                <div className="space-y-6 text-gray-700">
                  <p>
                    All submissions and presentations at ICETMR 2025 will be evaluated by our panel of expert judges,
                    comprising leading researchers, industry professionals, and academic leaders in multidisciplinary research,
                    emerging trends, and innovation across various fields.
                  </p>

                  <div className="space-y-6 mt-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white font-bold">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">Initial Screening</h3>
                        <p className="text-gray-700">
                          All eligible submissions are reviewed by the scientific committee to create a shortlist of
                          candidates for each award category.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white font-bold">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">Live Evaluation</h3>
                        <p className="text-gray-700">
                          Judges attend presentations and evaluate them based on the specific criteria for each award
                          category.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white font-bold">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">Final Selection</h3>
                        <p className="text-gray-700">
                          The judging panel meets to review all evaluations and select the winners for each category.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white font-bold">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-gray-900 mb-2">Award Ceremony</h3>
                        <p className="text-gray-700">
                          Winners are announced and recognized during the closing ceremony on October 11, 2025 in Bali, Indonesia.
                        </p>
                      </div>
                    </div>
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
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden p-8 shadow-lg">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 opacity-20"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ready to Showcase Your Research?</h3>
                <p className="text-gray-700 mb-6">
                  Submit your paper and register for ICETMR 2025 to be considered for our prestigious awards in beautiful Bali, Indonesia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/submission">
                    <Button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white rounded-full">
                      Submit Your Paper
                    </Button>
                  </Link>

                  <Link href="/registration">
                    <Button variant="outline" className="border-gray-300 text-gray-900 hover:bg-gray-100 rounded-full">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}