import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, FileText, ArrowRight } from "lucide-react"

export default function RegistrationSuccessPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Elements */}

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden p-8 md:p-12 shadow-sm relative">
              <div className="absolute top-0 left-0 right-0 h-2 bg-green-400"></div>

              <div className="flex flex-col items-center text-center mb-10">
                <div className="h-20 w-20 rounded-full bg-gray-50 flex items-center justify-center mb-6">
                  <CheckCircle className="h-10 w-10 text-gradient-to-bl from-pink-500 via-red-500 to-yellow-500" />
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-[#1a2e1a] mb-4">Payment Successful!</h1>
                <p className="text-gray-800 text-lg max-w-2xl">
                  Thank you for your payment for the International Conference on Emerging Trends in Multidisciplinary Research. We look forward to your participation.
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                  <h2 className="text-xl font-bold text-[#1a2e1a] mb-4">What's Next?</h2>

                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="text-[#1a2e1a] font-medium">Check Your Email</h3>
                        <p className="text-gray-800">
                          We've sent a confirmation email to your registered email address with all the details of your
                          registration.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="text-[#1a2e1a] font-medium">Mark Your Calendar</h3>
                        <p className="text-gray-800">
                          The conference will take place on October | 10th - 11th 2025 Bali, Indonesia. Exact details will be shared with you via mail.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="text-[#1a2e1a] font-medium">Prepare Your Materials</h3>
                        <p className="text-gray-800">
                          If you've registered for a paper presentation, please prepare your materials according to the
                          guidelines provided on our website.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/schedule">
                  <Button className="bg-neutral-950 hover:opacity-90 text-white rounded-full w-full sm:w-auto">
                    <Calendar className="mr-2 h-4 w-4" /> View Schedule
                  </Button>
                </Link>
                <Link href="/papers-format">
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-800 hover:bg-gray-100 rounded-full w-full sm:w-auto"
                  >
                    <FileText className="mr-2 h-4 w-4" /> Paper Guidelines
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="ghost"
                    className="text-gray-800 hover:bg-gray-100 rounded-full w-full sm:w-auto"
                  >
                    Return to Home <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
