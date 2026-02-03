"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

const scheduleData = [
  {
    date: "October 7-8 | Day 1-2",
    items: [
      { time: "9:00AM - 9:20AM", title: "Registration" },
      { time: "9:20AM - 9:30AM", title: "Introduction by Moderator" },
      { time: "9:30AM - 9:35AM", title: "Felicitate the Guests" },
      { time: "9:35AM - 9:40AM", title: "Book Release" },
      { time: "9:40AM - 9:50AM", title: "Welcome Speech by Dr. Ni Made Widani, S.E., M.M" },
      { time: "9:50AM - 10:50AM", title: "Panel Discussion: Next-Generation Leadership for Sustainability and Global Impact: Breaking Boundaries through Multidisciplinary Approaches" },
      { time: "10:50AM - 11:05AM", title: "Coffee Break" },
      { time: "11:05AM - 11:20AM", title: "Keynote Speaker: Dr. Ly Thien Trang - Vice President, Ho Chi Minh City University of Technology (HUTECH), Vietnam" },
      { time: "11:20AM - 11:35AM", title: "Keynote Speaker: Dr. I Gusti Ayu Purnamawati, SE., M.Si., Ak. - Professor, Lecturer, Faculty of Economics, Universitas Pendidikan Ganesha, Indonesia" },
      { time: "11:35AM - 11:50AM", title: "Keynote Speaker: Anik Yuesti - Associate Professor on Accounting, Universitas mahasaraswati Denpasar, Indonesia" },
      { time: "11:50AM - 12:05PM", title: "Keynote Speaker: Dr. Wayan Ardani, S.S.M.M. - Head of Quality Assurance Board, Mahendradatta University, Indonesia" },
      { time: "12:05PM - 12:20PM", title: "Keynote Speaker: Dr. Yanki Hartijasti - Associate Professor, Economics and Business, University of Indonesia" },
      { time: "12:20PM - 12:35PM", title: "Keynote Speaker: Ng Yoon Seong - Regional Manager II, Global Peace Chain, Indonesia" },
      { time: "12:35PM - 1:30PM", title: "Lunch Break" },
      { time: "1:30PM - 1:40PM", title: "Presentation: Angelie Teresa Bernardo (Physical) - A Narrative Inquiry: Nurses' Experiences working in Hyperbaric Facilities" },
      { time: "1:40PM - 1:50PM", title: "Presentation: Omer Ghazi (Physical) - AI-Augmented Education: Fostering Human-AI Symbiosis for Conceptual Mastery and Interdisciplinary Innovation in a Post-Pandemic World" },
      { time: "1:50PM - 2:00PM", title: "Presentation: ELSA Q. TERRE (Physical) - Grammar Proficiency of English Major Students Using Tic-Tac-Toe Strategy in Pangasinan State University, Asingan Campus" },
      { time: "2:00PM - 2:10PM", title: "Presentation: Mary Jane Ubaldo Quibilan (Physical) - Enhancing Literacy Skill of Out of School Youth using DRAW Approach" },
      { time: "2:10PM - 2:20PM", title: "Presentation: Jeramayne Dahl E. Castor (Virtual) - Stress and Strategy: An Investigation into Stressors and Coping Mechanisms Among Quick Service Restaurant Employees in Cavite" },
      { time: "2:20PM - 2:30PM", title: "Presentation: Jennalyn O. Banta (Virtual) - Enhancing Tourist Travel: The Role of Tour Guides in Intramuros" },
      { time: "2:30PM - 2:40PM", title: "Presentation: Yaseen Ahmad Muhammad Wafi (Virtual) - Preliminary assessment of CAA variations among Libyan subjects: Clinical insights from a pilot study" },
      { time: "2:40PM - 2:50PM", title: "Presentation: Sara Jane J. Tayao (Virtual) - Support building mathematics skills with Math Progress and MS Math Solver for 8th Grade Students" },
      { time: "2:50PM - 3:00PM", title: "Presentation: Jennifer R. Miguel (Virtual) - A Comparative Study of Mathematics E-Learning Modules In Asynchronous Learning Through Quasi-Experimental Method" },
      { time: "3:00PM - 3:10PM", title: "Presentation: Shivam Khamari (Virtual) - Building Adaptive and Resilient Teams" },
      { time: "3:10PM - 3:25PM", title: "Session Speaker: Dr. Linh Hoang Vu - Assistant Professor in Marketing, National Economics University, Vietnam" },
      { time: "3:25PM - 3:40PM", title: "Session Speaker: Dr. Louriejean Leopardas Alfar - Instructor I, University of Science and Technology of Southern Philippines – Claveria, Philippines" },
      { time: "3:40PM - 3:55PM", title: "Session Speaker: Eng. Lourdes P. Lasian - Assistant Professor, Industrial Engineering Department of Adamson University, Philippines" },
      { time: "3:55PM - 4:10PM", title: "Session Speaker: Nidhi Agarwal - Professor, Faculty of Social Science and Humanities, Lincoln University College, Malaysia" },
      { time: "4:10PM - 4:30PM", title: "Valedictory Function (Photo Session)" },
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