'use client'
import { pb } from "@/lib/pocketbase"
import { cn } from "@/lib/utils"
import { Calendar, Clock, FileText, UserCheck } from "lucide-react"
import { useEffect, useState } from "react"

// Define the type for our timeline data


// Icon mapping based on title keywords
const getIconForTitle = (title) => {
  const lowerTitle = title.toLowerCase()
  if (lowerTitle.includes("registration")) return UserCheck
  if (lowerTitle.includes("abstract")) return FileText
  if (lowerTitle.includes("paper")) return Calendar
  return Clock
}
// const records = await pb.collection("ICETMR_dates").getFullList({
// Server Component to fetch data

export default  function ConferenceTimeline() {
  const [timelineItems, setTimeline] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchDates() {
      try {
        setLoading(true)
        // Fetch all records from ICGEWEE_dates collection and sort by created date
        const records = await pb.collection("ICETMR_dates").getFullList({
          sort: "created",
           requestKey: null
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
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-500 p-4">
        {error}
      </div>
    )
  }


  return (
    <div className="min-h-full relative bg-gray-50 py-24 px-4">
       <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
    
      <div className="max-w-7xl mx-auto relative z-20">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500  p-2 rounded-md">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-600 font-medium tracking-wide">CONFERENCE TIMELINE</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h1 className="text-3xl lg:text-5xl font-medium text-gray-900 leading-tight max-w-2xl ">
              Important Dates for <span className="bg-clip-text text-transparent bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500  ">ICETMR</span> 
            </h1>

            <div className="text-right max-w-md">
             
            </div>
          </div>
        </div>

        {/* Timeline Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineItems.map((item, index) => {
            const IconComponent = getIconForTitle(item.title)
            return (
              <div key={item.id} className="group">
                {/* Card with angled corners */}
                <div className="relative bg-white border-2 border-gray-200 hover:border-orange-300 transition-all duration-300 h-72">
                  {/* Angled top corners */}
                
                  {/* Card Content */}
                  <div className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-12 h-12 border-2 border-gray-300 rounded flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-orange-500" />
                      </div>
                    </div>

                    {/* Decorative stripes */}
                    <div className="mb-6">
                      <div className="flex gap-1">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="w-1 h-8 bg-gray-200 transform skew-x-12"></div>
                        ))}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{item.title.toUpperCase()}</h3>

                    {/* Date */}
                    <div className="mb-4">
                      <p className="bg-clip-text text-transparent bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500  font-bold text-lg">{item.date}</p>
                    </div>

                    {/* Description */}
                    {/* <div className="flex-grow">
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </div> */}
                  </div>

                  {/* Angled bottom corners */}
                       </div>
              </div>
            )
          })}
        </div>

        {/* Loading state fallback - this won't show in production but good for development */}
        {timelineItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Loading timeline data...</p>
          </div>
        )}
      </div>
    </div>
  )
}
