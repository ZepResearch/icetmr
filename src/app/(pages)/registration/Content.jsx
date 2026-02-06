"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  ChevronRight,
  Users,
  FileText,
  Sparkles,
  CreditCard,
  Presentation,
  Headphones,
  DollarSign,
  Ticket,
  Mail,
  Calendar,
  Info,
  ArrowRight,
  Globe,
  MapPin,
  Home,
} from "lucide-react"
import { PaymentForm } from "./components/payment-form"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExtraContentBelowTabs from "./components/ExtraContentBelowTabs"

export default function RegistrationPage() {
  const router = useRouter()
  const [selectedTicket, setSelectedTicket] = useState(null)
  const [isPaymentFormOpen, setIsPaymentFormOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [customAmount, setCustomAmount] = useState("")
  const [activeTab, setActiveTab] = useState("physical-no-accommodation")

  // Updated pricing structure
  const pricingData = {
    physicalNoAccommodation: {
      local: [
        {
          category: "Academician",
          physical: { price: 249, currency: "USD" },
          virtual: { price: 169, currency: "USD" },
          features: [
            "Full conference access",
            "Networking opportunities",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation",
            "Access to presentation materials"
          ]
        },
        {
          category: "Student",
          physical: { price: 199, currency: "USD" },
          virtual: { price: 129, currency: "USD" },
          features: [
            "Conference access",
            "Networking opportunities",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation",
            "Student discount applied"
          ]
        },
        {
          category: "Delegate",
          physical: { price: 169, currency: "USD" },
          virtual: { price: 79, currency: "USD" },
          features: [
            "Conference access",
            "Networking opportunities",
            "Lunch and refreshments",
            "Certificate of attendance",
            "Access to presentation materials"
          ]
        },
        {
          category: "With Scopus Q3 & Q4",
          physical: { price: 1049, currency: "USD" },
          virtual: { price: 949, currency: "USD" },
          features: [
            "Full conference access",
            "Scopus Q3 & Q4 publication",
            "Premium networking opportunities",
            "Workshop materials",
            "Certificate of participation",
            "Priority presentation slot"
          ]
        },
        {
          category: "With Scopus Q1 & Q2",
          physical: { price: 1749, currency: "USD" },
          virtual: { price: 1649, currency: "USD" },
          features: [
            "Full conference access",
            "Scopus Q1 & Q2 publication",
            "Premium networking opportunities",
            "Workshop materials",
            "Certificate of participation",
            "Priority presentation slot"
          ]
        }
      ],
      international: [
        {
          category: "Academician",
          physical: { price: 299, currency: "USD" },
          virtual: { price: 229, currency: "USD" },
          features: [
            "Full conference access",
            "International networking",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation",
            "Access to presentation materials"
          ]
        },
        {
          category: "Student",
          physical: { price: 249, currency: "USD" },
          virtual: { price: 169, currency: "USD" },
          features: [
            "Conference access",
            "International networking",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation",
            "Student discount applied"
          ]
        },
        {
          category: "Delegate",
          physical: { price: 199, currency: "USD" },
          virtual: { price: 129, currency: "USD" },
          features: [
            "Conference access",
            "International networking",
            "Lunch and refreshments",
            "Certificate of attendance",
            "Access to presentation materials"
          ]
        },
        {
          category: "With Scopus Q3 & Q4",
          physical: { price: 1099, currency: "USD" },
          virtual: { price: 999, currency: "USD" },
          features: [
            "Full conference access",
            "Scopus Q3 & Q4 publication",
            "Premium international networking",
            "Workshop materials",
            "Certificate of participation",
            "Priority presentation slot"
          ]
        },
        {
          category: "With Scopus Q1 & Q2",
          physical: { price: 1799, currency: "USD" },
          virtual: { price: 1699, currency: "USD" },
          features: [
            "Full conference access",
            "Scopus Q1 & Q2 publication",
            "Premium international networking",
            "Workshop materials",
            "Certificate of participation",
            "Priority presentation slot"
          ]
        }
      ]
    },
    physicalWithAccommodation: {
      local: [
        {
          category: "Academician",
          physical: { price: 399, currency: "USD" },
          features: [
            "Full conference access",
            "Accommodation included",
            "Networking opportunities",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation"
          ]
        },
        {
          category: "Student",
          physical: { price: 349, currency: "USD" },
          features: [
            "Conference access",
            "Accommodation included",
            "Networking opportunities",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation"
          ]
        },
        {
          category: "Delegate",
          physical: { price: 319, currency: "USD" },
          features: [
            "Conference access",
            "Accommodation included",
            "Networking opportunities",
            "Lunch and refreshments",
            "Certificate of attendance"
          ]
        },
        {
          category: "With Scopus Q3 & Q4",
          physical: { price: 1199, currency: "USD" },
          features: [
            "Full conference access",
            "Accommodation included",
            "Scopus Q3 & Q4 publication",
            "Premium networking opportunities",
            "Workshop materials",
            "Priority presentation slot"
          ]
        },
        {
          category: "With Scopus Q1 & Q2",
          physical: { price: 1899, currency: "USD" },
          features: [
            "Full conference access",
            "Accommodation included",
            "Scopus Q1 & Q2 publication",
            "Premium networking opportunities",
            "Workshop materials",
            "Priority presentation slot"
          ]
        }
      ],
      international: [
        {
          category: "Academician",
          physical: { price: 449, currency: "USD" },
          features: [
            "Full conference access",
            "Accommodation included",
            "International networking",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation"
          ]
        },
        {
          category: "Student",
          physical: { price: 399, currency: "USD" },
          features: [
            "Conference access",
            "Accommodation included",
            "International networking",
            "Workshop materials",
            "Lunch and refreshments",
            "Certificate of participation"
          ]
        },
        {
          category: "Delegate",
          physical: { price: 349, currency: "USD" },
          features: [
            "Conference access",
            "Accommodation included",
            "International networking",
            "Lunch and refreshments",
            "Certificate of attendance"
          ]
        },
        {
          category: "With Scopus Q3 & Q4",
          physical: { price: 1299, currency: "USD" },
          features: [
            "Full conference access",
            "Accommodation included",
            "Scopus Q3 & Q4 publication",
            "Premium international networking",
            "Workshop materials",
            "Priority presentation slot"
          ]
        },
        {
          category: "With Scopus Q1 & Q2",
          physical: { price: 1949, currency: "USD" },
          features: [
            "Full conference access",
            "Accommodation included",
            "Scopus Q1 & Q2 publication",
            "Premium international networking",
            "Workshop materials",
            "Priority presentation slot"
          ]
        }
      ]
    }
  }

  const handleTicketSelect = (ticket) => {
    // Recalculate tax and total to ensure consistency
    const taxAmount = Number((ticket.price * 0.06).toFixed(2))
    const totalAmount = Number((ticket.price + taxAmount).toFixed(2))

    // Set selectedTicket with properly calculated values
    setSelectedTicket({
      ...ticket,
      taxRate: 0.06,
      taxAmount: taxAmount,
      totalAmount: totalAmount,
    })
    setIsPaymentFormOpen(true)
  }

  const handleCustomPayment = () => {
    if (!customAmount || isNaN(customAmount) || Number.parseFloat(customAmount) <= 0) {
      alert("Please enter a valid amount")
      return
    }

    const price = Number.parseFloat(customAmount)
    const taxAmount = Number((price * 0.06).toFixed(2))
    const totalAmount = Number((price + taxAmount).toFixed(2))

    const ticket = {
      name: "Custom Payment",
      price: price,
      type: "Custom",
      category: "Custom",
      taxRate: 0.06,
      taxAmount: taxAmount,
      totalAmount: totalAmount,
      currency: "USD",
      features: ["Custom amount payment", "6% tax included"],
    }

    setSelectedTicket(ticket)
    setIsPaymentFormOpen(true)
  }

  const handlePaymentFormClose = () => {
    setIsPaymentFormOpen(false)
  }

  const handlePaymentFormSubmit = async (formData) => {
    setIsLoading(true)
    try {
      // Combine ticket data with form data
      const paymentData = {
        ...formData,
        order_id: `ORDER-${Date.now()}`,
        currency: selectedTicket.currency,
        amount: selectedTicket.totalAmount,
        redirect_url: `${window.location.origin}/api/ccavenue/handle`,
        cancel_url: `${window.location.origin}/api/ccavenue/handle`,
        language: "EN",
        ticket_type: selectedTicket.type,
        ticket_category: selectedTicket.category,
        ticket_name: selectedTicket.name,
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

  const createTicketFromPricing = (categoryData, priceType, participantType, accommodationType) => {
    const priceInfo = categoryData[priceType]
    if (!priceInfo) return null

    return {
      name: `${categoryData.category} - ${participantType.charAt(0).toUpperCase() + participantType.slice(1)} (${priceType === 'physical' ? 'Physical' : 'Virtual'})`,
      price: priceInfo.price,
      currency: priceInfo.currency,
      type: categoryData.category,
      category: categoryData.category,
      participantType: participantType,
      accommodationType: accommodationType,
      priceType: priceType,
      features: categoryData.features
    }
  }

  const renderPricingCard = (categoryData, participantType, accommodationType) => {
    const getCurrencySymbol = (currency) => currency === "USD" ? "$" : "₹"
    const hasVirtual = categoryData.virtual !== undefined
    
    return (
      <div key={`${categoryData.category}-${participantType}`} className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col min-h-[600px]">
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2 flex-wrap gap-2">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-white/80 text-gray-900">
                {categoryData.category}
              </span>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-rose-400 to-orange-300 text-white">
                {participantType === "local" ? "Local" : "International"}
              </span>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 p-0.5">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                <Presentation className="h-5 w-5 text-gray-900" />
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-800">Physical:</span>
              <span className="text-2xl font-bold text-black">
                {getCurrencySymbol(categoryData.physical.currency)}{categoryData.physical.price}
              </span>
            </div>
            {hasVirtual && (
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-800">Virtual:</span>
                <span className="text-xl font-semibold text-black">
                  {getCurrencySymbol(categoryData.virtual.currency)}{categoryData.virtual.price}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-black mb-4">deliverables</h3>
            <ul className="space-y-3 mb-6">
              {categoryData.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <div className="h-5 w-5 rounded-full bg-gray-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg
                      className="h-3 w-3 text-gray-900"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-2 mt-auto">
            <Button
              onClick={() => handleTicketSelect(createTicketFromPricing(categoryData, "physical", participantType, accommodationType))}
              className="w-full bg-gradient-to-r from-rose-400 to-orange-300 text-white rounded-full"
            >
              <MapPin className="mr-2 h-4 w-4 text-white" />
              Physical - {getCurrencySymbol(categoryData.physical.currency)}{categoryData.physical.price}
            </Button>
            {hasVirtual && (
              <Button
                onClick={() => handleTicketSelect(createTicketFromPricing(categoryData, "virtual", participantType, accommodationType))}
                className="w-full bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-900 rounded-full"
              >
                <Globe className="mr-2 h-4 w-4 text-gray-900" />
                Virtual - {getCurrencySymbol(categoryData.virtual.currency)}{categoryData.virtual.price}
              </Button>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <main className="">
      {/* <ExtraContentAboveCard/> */}
      
      {/* Registration Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 font-serif">Registration Options</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto mb-8 rounded-full"></div>
          </div>

          <Tabs defaultValue="physical-no-accommodation" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-10">
              <TabsList className="bg-gray-100 p-1 rounded-full flex flex-col md:flex-row gap-4">
                <TabsTrigger
                  value="physical-no-accommodation"
                  className="rounded-full data-[state=active]:bg-gradient-to-r from-rose-400 to-orange-300 data-[state=active]:text-white px-6 py-2"
                >
                  <Presentation className="mr-2 h-4 w-4" />
                  Without Accommodation
                </TabsTrigger>
                <TabsTrigger
                  value="physical-with-accommodation"
                  className="rounded-full data-[state=active]:bg-gradient-to-r from-rose-400 to-orange-300 data-[state=active]:text-white px-6 py-2"
                >
                  <Home className="mr-2 h-4 w-4" />
                  With Accommodation
                </TabsTrigger>
                <TabsTrigger
                  value="custom"
                  className="rounded-full data-[state=active]:bg-gradient-to-r from-rose-400 to-orange-300 data-[state=active]:text-white px-6 py-2"
                >
                  <DollarSign className="mr-2 h-4 w-4" />
                  Custom Payment
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="physical-no-accommodation" className="mt-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-3">Conference Fees (Without Accommodation)</h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Choose between physical or virtual participation options
                </p>
              </div>

              {/* Local Participants */}
              <div className="mb-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  <MapPin className="inline mr-2 h-5 w-5" />
                  Local Participants
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pricingData.physicalNoAccommodation.local.map((categoryData) => 
                    renderPricingCard(categoryData, "local", "no-accommodation")
                  )}
                </div>
              </div>

              {/* International Participants */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  <Globe className="inline mr-2 h-5 w-5" />
                  International Participants
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pricingData.physicalNoAccommodation.international.map((categoryData) => 
                    renderPricingCard(categoryData, "international", "no-accommodation")
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="physical-with-accommodation" className="mt-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-3">Conference Fees (With Accommodation)</h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Physical participation with accommodation included
                </p>
              </div>

              {/* Local Participants */}
              <div className="mb-12">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  <MapPin className="inline mr-2 h-5 w-5" />
                  Local Participants
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pricingData.physicalWithAccommodation.local.map((categoryData) => 
                    renderPricingCard(categoryData, "local", "with-accommodation")
                  )}
                </div>
              </div>

              {/* International Participants */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  <Globe className="inline mr-2 h-5 w-5" />
                  International Participants
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {pricingData.physicalWithAccommodation.international.map((categoryData) => 
                    renderPricingCard(categoryData, "international", "with-accommodation")
                  )}
                </div>
              </div>

              {/* Important Note */}
              <div className="mt-12 max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-sm">
                  <div className="flex items-start space-x-3">
                    <Info className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-black mb-2">Important Note</h4>
                      <p className="text-gray-700 mb-2">
                        <strong>N.B.:</strong> For group discounts, kindly connect with the coordinator.
                      </p>
                      <p className="text-gray-700">
                        (Exciting offers are also available for outstanding contributors.)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="custom" className="mt-0">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-3">Custom Payment</h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  Enter a custom amount for your registration or additional services
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <div className="bg-white rounded-3xl border overflow-hidden shadow-sm">
                  <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6">
                    <div className="flex justify-between items-center">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-rose-400 to-orange-300 text-white">
                        Custom Payment
                      </span>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900/90 p-0.5">
                        <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
                          <DollarSign className="h-5 w-5 text-gray-900" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-6">
                      <label htmlFor="customAmount" className="block text-black font-medium mb-2">
                        Enter Amount (USD)
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black">$</span>
                        <input
                          id="customAmount"
                          type="number"
                          min="1"
                          step="0.01"
                          value={customAmount}
                          onChange={(e) => setCustomAmount(e.target.value)}
                          className="w-full pl-8 pr-4 py-3 rounded-xl border focus:ring focus:border-transparent outline-none"
                          placeholder="Enter amount"
                        />
                      </div>
                      <p className="text-sm text-black mt-2">A 6% tax will be added to this amount</p>
                    </div>

                    {customAmount && !isNaN(Number.parseFloat(customAmount)) && Number.parseFloat(customAmount) > 0 && (
                      <div className="space-y-2 mb-6 p-4 rounded-xl border">
                        <div className="flex justify-between text-sm">
                          <span className="text-black">Base Amount:</span>
                          <span className="text-black font-medium">
                            ${Number.parseFloat(customAmount).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-800">Tax (6%):</span>
                          <span className="text-gray-800 font-medium">
                            ${(Number.parseFloat(customAmount) * 0.06).toFixed(2)}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm font-medium pt-2 border-t border-gray-300">
                          <span className="text-black">Total:</span>
                          <span className="text-black font-bold">
                            ${(Number.parseFloat(customAmount) * 1.06).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    )}

                    <Button
                      onClick={handleCustomPayment}
                      className="w-full bg-gradient-to-r from-rose-400 to-orange-300 text-white rounded-full"
                    >
                      <CreditCard className="mr-2 h-4 w-4 text-white" />
                      Proceed to Payment
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <ExtraContentBelowTabs/>

      {/* Payment Form Dialog */}
      <PaymentForm
        isOpen={isPaymentFormOpen}
        onClose={handlePaymentFormClose}
        ticketName={selectedTicket?.name}
        amount={selectedTicket?.price || 0}
        taxRate={selectedTicket?.taxRate || 0}
        currency={selectedTicket?.currency || "USD"}
        onSubmit={handlePaymentFormSubmit}
        isLoading={isLoading}
      />
    </main>
  )
}