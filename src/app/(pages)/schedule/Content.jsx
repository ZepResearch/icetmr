"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import Link from "next/link"


const scheduleData = [
  {
    date: "October 10 | Day 1",
    items: [
      { time: "8:00AM - 9:15AM", title: "Registration & Welcome Coffee" },
      { time: "9:15AM - 9:30AM", title: "Inaugural Function" },
      { time: "9:30AM - 10:00AM", title: "Keynote Speech: Future of Multidisciplinary Research" },
      { time: "10:00AM - 10:15AM", title: "Coffee Break" },
      { time: "10:15AM - 10:30AM", title: "Introduction to the Session Chairs" },
      { time: "10:30AM - 01:00PM", title: "1st Session: Technology & Innovation" },
      { time: "01:00PM - 02:00PM", title: "Lunch Break" },
      { time: "02:00PM - 02:30PM", title: "Keynote Speech: Emerging Trends in Research" },
      { time: "2:30PM - 5:00PM", title: "2nd Session: Healthcare & Life Sciences" },
      { time: "5:00PM - 6:30PM", title: "Welcome Reception & Networking" },
    ],
  },
  {
    date: "October 11 | Day 2",
    items: [
      { time: "8:30AM - 9:00AM", title: "Registration" },
      { time: "9:00AM - 9:30AM", title: "Day 2 Opening Remarks" },
      { time: "9:30AM - 10:00AM", title: "Keynote Speech: Interdisciplinary Collaboration" },
      { time: "10:00AM - 10:15AM", title: "Coffee Break" },
      { time: "10:15AM - 10:30AM", title: "Introduction to the Session Chairs" },
      { time: "10:30AM - 01:00PM", title: "3rd Session: Social Sciences & Humanities" },
      { time: "01:00PM - 02:00PM", title: "Lunch Break" },
      { time: "02:00PM - 03:30PM", title: "Panel Discussion: Future of Research Collaboration" },
      { time: "3:30PM - 4:00PM", title: "Coffee Break" },
      { time: "4:00PM - 5:00PM", title: "Awards Ceremony & Closing Remarks" },
      { time: "5:00PM - 6:30PM", title: "Farewell Reception" },
    ],
  },
]

export default function ConferenceSchedule() {
  const startDate = new Date(2025, 9, 10) // October 10, 2025
  const [selectedDates, setSelectedDates] = useState([startDate, new Date(2025, 9, 11)])

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              International Conference on
              <span className="relative inline-block mx-5">
                <span className="relative z-10 text-white px-1 py-2 rounded-lg">Emerging Trends</span>
                <span className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-lg transform -rotate-1 scale-110 z-0"></span>
              </span>
              in Multidisciplinary Research
            </h1>
            <div className="space-y-2">
              <p className="text-gray-600 text-xl font-semibold">
                October 10th - 11th, 2025
              </p>
              <p className="text-gray-600 text-lg">
                Bali, Indonesia
              </p>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join us for two days of cutting-edge insights, interdisciplinary collaboration, and networking opportunities 
              in the beautiful setting of Bali. Explore emerging trends that are shaping the future of research.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            <Card className="border-gray-200 rounded-3xl shadow-lg overflow-hidden bg-white ">
              <CardHeader className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white py-3">
                <CardTitle>October 2025</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <Calendar
                  mode="multiple"
                  selected={selectedDates}
                  onSelect={setSelectedDates}
                  month={startDate}
                  className="w-full"
                  classNames={{
                    day_selected: "bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white hover:opacity-90 focus:opacity-90",
                    day_today: "bg-gray-100 text-gray-800",
                  }}
                />
              </CardContent>
            </Card>

            <ScrollArea className="h-[600px]">
              <div className="space-y-8">
                {scheduleData.map((day, index) => (
                  <Card key={index} className="border-gray-200 rounded-3xl shadow-lg overflow-hidden bg-white">
                    <CardHeader className="bg-gray-50">
                      <CardTitle className="text-gray-800">{day.date}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        {day.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className={cn(
                              "grid grid-cols-[140px_1fr] gap-4 p-3 rounded-lg",
                              "bg-gray-50 hover:bg-gradient-to-bl hover:from-pink-50 hover:via-red-50 hover:to-yellow-50 transition-colors",
                            )}
                          >
                            <div className="text-sm font-medium text-gray-600">{item.time}</div>
                            <div className="text-sm text-gray-800">{item.title}</div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Additional Information */}
          <div className="mt-12 bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Venue</h3>
                <p className="text-gray-600 mb-2">Bali, Indonesia</p>
                {/* <p className="text-gray-600 mb-2">Jl. Pantai Mengiat, Nusa Dua</p>
                <p className="text-gray-600">Bali 80363, Indonesia</p> */}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Registration</h3>
                <p className="text-gray-600 mb-2">Registration opens at 8:00 AM on Day 1 and 8:30 AM on Day 2.</p>
                <p className="text-gray-600">
                  Please bring your confirmation email and ID for a smooth check-in process.
                </p>
              </div>
            </div>
          </div>

          {/* Download Schedule Button */}
          <div className="flex justify-center mt-8">
            <Link href={'/registration'}>
            <button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-opacity duration-300 flex items-center shadow-lg">
             Register now
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}