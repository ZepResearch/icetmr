"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const scheduleData = [
  {
    date: "Day 1",
    items: [
      { time: "8:30AM - 9:00AM", title: "Registration" },
      { time: "9:00AM - 9:20AM", title: "Introduction by Moderator" },
      { time: "9:20AM - 9:25AM", title: "Book Release" },
      { time: "9:25AM - 9:35AM", title: "Welcome Speech by Organizing Secretary" },
      { time: "9:35AM - 9:45AM", title: "Speech by Conference Co-Chair" },
      { time: "9:45AM - 9:55AM", title: "Speech by Conference Chair" },
      { time: "9:55AM - 10:10AM", title: "Keynote Speech by Dr. Sohiful Anuar Zainol Murad" },
      { time: "10:10AM - 10:25AM", title: "Keynote Speech by Dr. Mosharrof Hosen" },
      { time: "10:25AM - 10:35AM", title: "Tea Break" },
      { time: "10:35AM - 12:00PM", title: "Technical Session 1 (Technology, Data & Digital Future)" },
      { time: "12:00PM - 1:00PM", title: "Lunch Break" },
      { time: "1:00PM - 2:30PM", title: "Technical Session 2 (Leadership & Organizational Transformation)" },
      { time: "2:30PM - 3:30PM", title: "Technical Session 3 (Sustainability, Social Innovation & Global Impact)" },
      { time: "3:30PM - 3:40PM", title: "Tea Break" },
      { time: "3:40PM - 4:30PM", title: "Panel Discussion" },
      { time: "", title: "Valedictory Function" },
    ],
  },
  {
    date: "Day 2",
    items: [
      { time: "8:30AM - 9:00AM", title: "Registration" },
      { time: "9:00AM - 9:20AM", title: "Introduction by Moderator" },
      { time: "9:20AM - 9:30AM", title: "Welcome Speech by Organizing Secretary" },
      { time: "9:30AM - 9:40AM", title: "Speech by Conference Co-Chair" },
      { time: "9:40AM - 9:50AM", title: "Speech by Conference Chair" },
      { time: "9:50AM - 10:40AM", title: "Keynote Speaker" },
      { time: "10:40AM - 10:50AM", title: "Tea Break" },
      { time: "10:50AM - 12:00PM", title: "Technical Session 1 (Technology, Data & Digital Future)" },
      { time: "12:00PM - 1:00PM", title: "Lunch Break" },
      { time: "1:00PM - 2:30PM", title: "Technical Session 2 (Leadership & Organizational Transformation)" },
      { time: "2:30PM - 3:30PM", title: "Technical Session 3 (Sustainability, Social Innovation & Global Impact)" },
      { time: "3:30PM - 3:40PM", title: "Tea Break" },
      { time: "3:40PM - 4:30PM", title: "Panel Discussion" },
      { time: "", title: "Valedictory Function" },
    ],
  },
]
export default function ConferenceSchedule() {
  const startDate = new Date(2026, 9, 7) // October 7, 2026 (month is 0-indexed)
  const [selectedDates, setSelectedDates] = useState([
    new Date(2026, 9, 7),
    new Date(2026, 9, 8),
  ])

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
             2<sup>nd </sup> International Conference on
              <span className="relative inline-block mx-5">
                <span className="relative z-10 text-white px-1 py-2 rounded-lg">Emerging Trends</span>
                <span className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-lg transform -rotate-1 scale-110 z-0"></span>
              </span>
              in Multidisciplinary Research
            </h1>
            <div className="space-y-2">
              <p className="text-gray-600 text-xl font-semibold">
             October 7th - 8th 2026
              </p>
              <p className="text-gray-600 text-lg">
                Kuala Lumpur, Malaysia
              </p>
            </div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Join us for a day of cutting-edge insights, interdisciplinary collaboration, and networking opportunities 
              in the beautiful setting of Kuala Lumpur. Explore emerging trends that are shaping the future of research.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            <Card className="border-gray-200 rounded-3xl shadow-lg overflow-hidden bg-white h-fit">
              <CardHeader className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white py-3">
                <CardTitle>October 2026</CardTitle>
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

            <ScrollArea className="h-[700px]">
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
                            <div className="text-sm font-medium text-gray-600 whitespace-nowrap">{item.time}</div>
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
                <p className="text-gray-600 mb-2">Kuala Lumpur, Malaysia</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Registration</h3>
                <p className="text-gray-600 mb-2">Registration opens at 9:00 AM on Day 1.</p>
                <p className="text-gray-600">
                  Please bring your confirmation email and ID for a smooth check-in process.
                </p>
              </div>
            </div>
          </div>

          {/* Register Button */}
          <div className="flex justify-center mt-8">
            <button className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-opacity duration-300 flex items-center shadow-lg">
             Register now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}