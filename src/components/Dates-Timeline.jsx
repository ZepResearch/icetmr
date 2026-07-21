'use client'
import { Conference } from "@/constants/conference"
import { pb } from "@/lib/pocketbase"
import { Calendar, Clock, FileText, UserCheck } from "lucide-react"
import { useEffect, useState } from "react"

const getIconForTitle = (title) => {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes("registration")) return UserCheck
  if (lowerTitle.includes("abstract")) return FileText
  if (lowerTitle.includes("paper")) return Calendar
  return Clock
}

export default function ConferenceTimeline() {
  const [timelineItems, setTimeline] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDates() {
      try {
        setLoading(true)
        const records = await pb.collection("ICETMR_dates").getFullList({
          sort: "created",
          requestKey: null,
        })
        setTimeline(records)
      } catch (err) {
        console.error("Error fetching dates:", err)
        setError("Failed to load timeline dates")
      } finally {
        setLoading(false)
      }
    }

    fetchDates()
  }, [])

  if (loading) {
    return (
      <div className="flex min-h-[260px] items-center justify-center px-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#ffb7b2] border-t-transparent" />
      </div>
    )
  }

  if (error) {
    return <div className="px-4 py-6 text-center text-[#a33a2f]">{error}</div>
  }

  return (
    <section className="px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="section-shell reveal-on-scroll overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="eyebrow">Conference timeline</span>
              <h2 className="mt-4 text-3xl font-semibold text-[#292524] sm:text-4xl">
                Important dates for {Conference.shortForm} {Conference.year}
              </h2>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {timelineItems.map((item, index) => {
              const IconComponent = getIconForTitle(item.title)
              return (
                <div key={item.id} className="soft-card p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8efe8] text-[#292524]">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-[#ffb7b2]/40 bg-[#fff5f2] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#a33a2f]">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#292524]">{item.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-[#ff7a6a]">{item.date}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}