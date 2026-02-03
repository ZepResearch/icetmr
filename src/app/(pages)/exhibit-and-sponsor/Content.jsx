"use client"

import { useState } from "react"
import { ChevronRight, Award, Sparkles, Zap, Star, Check } from "lucide-react"
import { SponsorshipPackage } from "./components/sponsorship-package"
import { CCavenuePaymentForm } from "./components/payment-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ExhibitAndSponsorPage() {
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handlePackageSelect = (packageData) => {
    setSelectedPackage(packageData)
    setIsPaymentFormOpen(true)
  }

  const handlePaymentFormClose = () => {
    setIsPaymentFormOpen(false)
  }

  const handlePaymentFormSubmit = async (formData) => {
    setIsLoading(true)
    try {
      // Combine package data with form data
      const paymentData = {
        ...formData,
        order_id: `SPONSOR-${Date.now()}`,
        currency: "USD",
        amount: selectedPackage.price,
        redirect_url: `${window.location.origin}/api/ccavenue/handle`,
        cancel_url: `${window.location.origin}/api/ccavenue/handle`,
        language: "EN",
        package_name: selectedPackage.title,
        package_type: "Sponsorship",
      }

      // Send notification email
      await fetch("/api/payment-notification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      // Get encrypted order data
      const encResponse = await fetch("/api/ccavenue/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })

      const { encRequest } = await encResponse.json()

      // Create and submit form to CCAvenue
      const form = document.createElement("form")
      form.method = "post"
      // Use the exact CCAvenue URL with the command parameter
      form.action = "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction"
      form.style.display = "none"

      const encRequestInput = document.createElement("input")
      encRequestInput.name = "encRequest"
      encRequestInput.value = encRequest
      form.appendChild(encRequestInput)

      const accessCodeInput = document.createElement("input")
      accessCodeInput.name = "access_code"
      accessCodeInput.value = process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE
      form.appendChild(accessCodeInput)

      // Add merchant_id as well
      const merchantIdInput = document.createElement("input")
      merchantIdInput.name = "merchant_id"
      merchantIdInput.value = process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID
      form.appendChild(merchantIdInput)

      document.body.appendChild(form)
      form.submit()
    } catch (error) {
      console.error("Payment processing error:", error)
      setIsLoading(false)
      alert("There was an error processing your payment. Please try again.")
    }
  }

  // Sponsorship packages data
  const sponsorshipPackages = [
    {
      title: "Platinum",
      price: 15000,
      color: "from-gray-800 to-gray-900",
      icon: <Award className="h-8 w-8 text-gray-800" />,
      benefits: [
        "1 VIP participating in the conference",
        "Complementary registration for 12 Students and 5 Faculties",
        "Stage honor to the Sponsor Party",
        "Full Page add on the conference proceeding book",
        "Brand carried in all website and promotional activities",
        "Event called by title sponsor",
        "Networking opportunities with different delegates",
        "Media Coverage",
        "2 Feedback video bites featured on YouTube channel",
      ],
    },
    {
      title: "Diamond",
      price: 12000,
      color: "from-gray-700 to-gray-800",
      icon: <Sparkles className="h-8 w-8 text-gray-700" />,
      benefits: [
        "1 Session Chair participating from the sponsor side",
        "Complementary registration for 10 Students and 3 Faculties",
        "Full Page add on the conference proceeding book",
        "Brand carried in all website and promotional activities",
        "Public announcement recognizing the Sponsor",
        "Networking opportunities with different delegates",
        "Logo used on all website activities and campaigns",
        "5 minutes slot for media Coverage",
        "1 Feedback video featured on the YouTube channel",
      ],
    },
    {
      title: "Gold",
      price: 10000,
      color: "from-gray-600 to-gray-700",
      icon: <Star className="h-8 w-8 text-gray-600" />,
      benefits: [
        "Complementary registration for 8 Students and 2 Faculties",
        "Full page add on conference proceedings",
        "Announcement recognition of the sponsor during valedictory",
        "Logos used in all promotional materials",
        "One anchor can join from the sponsor side",
        "Networking opportunities with different delegates",
        "A standee of the sponsor side on the registration desk",
      ],
    },
    {
      title: "Silver",
      price: 7500,
      color: "from-gray-500 to-gray-600",
      icon: <Zap className="h-8 w-8 text-gray-500" />,
      benefits: [
        "Complementary registration for 5 Students and 1 Faculty",
        "2 volunteers at the registration desk from the sponsor side",
        "Half page add on Conference proceeding book",
        "Brand carried out in few promotional activities",
        "Networking opportunities with different delegates",
        "Print media coverage",
      ],
    },
  ]

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
              background: "linear-gradient(to bottom left, rgb(236 72 153), rgb(239 68 68), rgb(234 179 8))",
            }}
          ></div>

          {/* Small circle in bottom left */}
          <div className="absolute left-20 bottom-20 w-16 h-16 rounded-full bg-gradient-to-bl from-pink-500/20 via-red-500/20 to-yellow-500/20"></div>

          {/* Medium circle in top left */}
          <div className="absolute -left-10 top-40 w-32 h-32 rounded-full bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm font-medium text-gray-700 mb-6">
              <span>ICETMR 2026</span>
              <ChevronRight className="ml-1 h-4 w-4" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Exhibit &
              <span className="relative inline-block mx-2 ml-4">
                <span className="relative z-10">Sponsorship</span>
                <span className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-full transform -rotate-1 scale-110 z-0 opacity-20"></span>
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-4">
              Partner with the 2<sup>nd </sup> International Conference on Emerging Trends in Multidisciplinary Research
            </p>
            <p className="text-lg text-gray-500 mb-8">October 7th - 8th 2026 | Kuala Lumpur, Malaysia</p>
          </div>
        </div>
      </section>

      {/* Sponsorship Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-bl from-pink-500/5 via-red-500/5 to-yellow-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 p-0.5 mb-6">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                    <Award className="h-8 w-8 text-gray-800" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Sponsor 2<sup>nd </sup>ICETMR?</h2>

                <div className="space-y-6 text-gray-600">
                  <p>
                    The 2<sup>nd </sup>International Conference on Emerging Trends in Multidisciplinary Research 2026 offers a unique
                    opportunity to connect with leading researchers, academics, and industry professionals from diverse
                    fields. By sponsoring our conference, you'll gain visibility among a global audience of innovators
                    and decision-makers in beautiful Kuala Lumpur, Malaysia.
                  </p>

                  <p>
                    Our sponsorship packages are designed to provide maximum exposure for your brand while supporting
                    the advancement of research and collaboration across multiple disciplines. Choose the package that
                    best aligns with your goals and budget.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                    <div className="text-3xl font-bold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                      500+
                    </div>
                    <div className="text-gray-600">Expected Attendees</div>
                  </div>

                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                    <div className="text-3xl font-bold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                      Global
                    </div>
                    <div className="text-gray-600">Audience Reach</div>
                  </div>

                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-4">
                    <div className="text-3xl font-bold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent mb-1">
                      15+
                    </div>
                    <div className="text-gray-600">Research Disciplines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Sponsorship Packages</h2>
            <div className="h-1 w-20 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the sponsorship package that best suits your organization's goals and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sponsorshipPackages.map((pkg, index) => (
              <SponsorshipPackage
                key={index}
                title={pkg.title}
                price={pkg.price}
                color={pkg.color}
                icon={pkg.icon}
                benefits={pkg.benefits}
                onSelect={() => handlePackageSelect(pkg)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="relative bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100">
            {/* Decorative elements */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-bl from-pink-500/5 via-red-500/5 to-yellow-500/5 rounded-full blur-3xl"></div>

            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900 text-center">
                  Additional Sponsorship Benefits
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Brand Visibility</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Logo placement on conference website, virtual platform, and promotional materials
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">Recognition in opening and closing ceremonies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">Inclusion in conference proceedings and digital materials</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Networking Opportunities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Direct access to researchers and academics from multiple disciplines
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Opportunity to host a virtual booth in our exhibition space
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Facilitated introductions to key participants and speakers
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Content Opportunities</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">Opportunity to present a sponsored session or workshop</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">Feature your organization's research or case studies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">Participate in panel discussions and Q&A sessions</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Post-Conference Benefits</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-pink-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">Access to conference recordings and materials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">Recognition in post-conference publications and reports</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">
                          Opportunity for continued engagement with conference participants
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Sponsorship */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden p-8 shadow-lg">
              <div className="absolute -inset-px rounded-3xl bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10 opacity-50"></div>

              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Looking for a Custom Package?</h3>
                <p className="text-gray-600 mb-6">
                  We understand that every organization has unique goals and requirements. Contact us to discuss a
                  customized sponsorship package tailored to your specific needs for 2nd ICETMR 2026 in Kuala Lumpur, Malaysia.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  
                  <Link href="/contact">
                    <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 rounded-full">
                      Visit Contact Page <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Form Dialog */}
      <CCavenuePaymentForm
        isOpen={isPaymentFormOpen}
        onClose={handlePaymentFormClose}
        packageName={selectedPackage?.title}
        amount={selectedPackage?.price || 0}
        onSubmit={handlePaymentFormSubmit}
        isLoading={isLoading}
      />
    </main>
  )
}
