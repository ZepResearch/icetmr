"use client"

import { useEffect, useState } from "react"
import { Twitter, Linkedin, Globe, Users, Award, GraduationCap, Sparkles, AlertTriangle } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { pb } from "@/lib/pocketbase"
import Link from "next/link"

export default function CommitteePage() {
  // Mock committee data since we don't have a real database connection
  const [committee, setCommittee] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCommittee = async () => {
      try {
        const records = await pb.collection("ICETMR_committee").getFullList({
          sort: "name",
          requestKey: null,
        })
        setCommittee(records)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCommittee()
  }, [])

  if (loading) {
    return (
      <div className="pt-20 min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="relative bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden shadow-sm p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/20 via-red-500/20 to-yellow-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 mb-6 animate-pulse">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <Award className="h-8 w-8 text-gray-700" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Loading Committee Data...
              </h2>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pt-20 min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <div className="relative bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden shadow-sm p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/20 via-red-500/20 to-yellow-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 mb-6">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                  <AlertTriangle className="h-8 w-8 text-gray-700" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Error Loading Data
              </h2>
              <p className="mt-4 text-gray-600">{error}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gray-50">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Large blob in top right */}
          <div
            className="absolute -right-40 -top-40 w-[30rem] h-[30rem] opacity-20"
            style={{
              borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
              background: "linear-gradient(45deg, #ec4899, #ef4444, #eab308)",
            }}
          ></div>

          {/* Small circle in bottom left */}
          <div className="absolute left-20 bottom-20 w-16 h-16 rounded-full bg-gradient-to-bl from-pink-500/30 via-red-500/30 to-yellow-500/30"></div>

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-gradient-to-bl from-pink-500/20 via-red-500/20 to-yellow-500/20"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Organizing
              <span className="relative inline-block mx-2 ml-4 text-white">
                <span className="relative z-10">Committee</span>
                <span className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full transform -rotate-1 scale-110 z-0"></span>
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Meet the experts behind ICETMR 2025: International Conference on Emerging Trends in Multidisciplinary Research
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium text-gray-700">
              <span>October 10th - 11th 2025</span>
              <span className="hidden sm:block">•</span>
              <span>Bali, Indonesia</span>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative bg-gray-50 rounded-3xl overflow-hidden shadow-sm">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/20 via-red-500/20 to-yellow-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <Users className="h-8 w-8 text-gray-700" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">
                  Advancing Knowledge Through Multidisciplinary Excellence
                </h2>

                <div className="space-y-6 text-gray-600">
                  <p>
                    Our organizing committee brings together leading researchers and academics from diverse disciplines to create a truly
                    interdisciplinary forum for emerging trends in multidisciplinary research. With expertise spanning engineering, 
                    science, technology, social sciences, and humanities, they collaborate to foster innovative approaches to 
                    contemporary global challenges and advance knowledge across traditional boundaries.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                  <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <div className="text-3xl font-bold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-1">{committee.length}</div>
                    <div className="text-gray-600">Committee Members</div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <div className="text-3xl font-bold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-1">15+</div>
                    <div className="text-gray-600">Research Disciplines</div>
                  </div>

                  <div className="bg-white rounded-xl border border-gray-200 p-4">
                    <div className="text-3xl font-bold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-1">Global</div>
                    <div className="text-gray-600">Network</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Committee</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our committee members bring diverse expertise and perspectives to ensure a successful and impactful
              conference experience in beautiful Bali, Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {committee.map((member) => (
              <div key={member.id} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/20 via-red-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity"></div>

                <div className="relative bg-white rounded-3xl border border-gray-200 overflow-hidden h-full transition-all group-hover:shadow-lg shadow-sm">
                  <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10"></div>

                  <div className="relative p-6 flex flex-col items-center">
                    <div className="relative h-56 w-56 rounded-full p-1 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 mb-6">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 blur-md opacity-50"></div>
                      <Avatar className="h-full w-full border-2 border-white">
                        <AvatarImage
                          src={`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${member.collectionId}/${member.id}/${member.img}`}
                          alt={member.name}
                          className="object-contain bg-gray-100"
                        />
                        <AvatarFallback className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white text-2xl">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{member.name}</h3>

                    <div className="px-3 py-1 rounded-full bg-gray-100 mb-4">
                      <p className="text-sm text-gray-700 font-medium">{member.designation}</p>
                    </div>

                    <p className="text-gray-600 text-center mb-3">{member.details}</p>

                    <div className="flex items-center gap-2 mt-auto">
                      <Globe className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-500">{member.country}</span>
                    </div>

                    {/* Social Media Links */}
                    {(member.twitter || member.linkedin) && (
                      <div className="flex gap-3 mt-4">
                        {member.twitter && (
                          <a
                            href={member.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gradient-to-bl hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white transition-all"
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                        {member.linkedin && (
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 text-gray-600 hover:bg-gradient-to-bl hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 hover:text-white transition-all"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Committee CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden p-8 shadow-sm">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-bl from-pink-500/20 via-red-500/20 to-yellow-500/20 opacity-50"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Interested in Contributing?</h3>
                <p className="text-gray-600 mb-6">
                  We're always looking for passionate researchers and academics to join our reviewer pool for future conferences. 
                  Share your expertise and help shape the future of multidisciplinary research excellence.
                </p>

                <div className="inline-block">
                  <Link href="/contact">
                    <button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                      Express Interest
                    </button>
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