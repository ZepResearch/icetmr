"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

export function ReserveForm({ isOpen, onClose, onSubmitSuccess }) {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    organization: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/reserveseat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          organization: "",
        })
        onSubmitSuccess() // Call this instead of onClose directly
      } else {
        throw new Error(result.error || "Something went wrong")
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md border-gray-200/50 shadow-xl bg-white">
        <DialogHeader className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 -mx-6 -mt-6 px-6 py-4 rounded-t-lg">
          <DialogTitle className="text-xl font-semibold text-white">Pre-book your slot !</DialogTitle>
          <DialogDescription className="text-white/90">
           2<sup>nd</sup> International Conference on Emerging Trends in Multidisciplinary Research
            <span className="text-white/80 text-sm mt-1">February 27th - 28th  2026 • Bali, Indonesia</span>
          </DialogDescription>
        </DialogHeader>
        <div className="relative">
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-pink-100 via-red-100 to-yellow-100 rounded-full opacity-30"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-pink-100 via-red-100 to-yellow-100 rounded-full opacity-20"></div>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4 relative z-10">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                required
                value={formData.name}
                onChange={handleChange}
                className="border-gray-200 focus-visible:ring-red-500 focus-visible:border-red-500 bg-gray-50/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
                value={formData.email}
                onChange={handleChange}
                className="border-gray-200 focus-visible:ring-red-500 focus-visible:border-red-500 bg-gray-50/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-gray-700 font-medium">
                Phone Number
              </Label>
              <div className="phone-input-container">
                <PhoneInput
                  international
                  countryCallingCodeEditable={false}
                  defaultCountry="US"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-gray-50/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="country" className="text-gray-700 font-medium">
                Country
              </Label>
              <Input
                id="country"
                name="country"
                placeholder="United States"
                required
                value={formData.country}
                onChange={handleChange}
                className="border-gray-200 focus-visible:ring-red-500 focus-visible:border-red-500 bg-gray-50/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization" className="text-gray-700 font-medium">
                Organization/University
              </Label>
              <Input
                id="organization"
                name="organization"
                placeholder="Company or University name"
                required
                value={formData.organization}
                onChange={handleChange}
                className="border-gray-200 focus-visible:ring-red-500 focus-visible:border-red-500 bg-gray-50/50"
              />
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="border-gray-200 hover:bg-gray-50 text-gray-700 hover:text-gray-800"
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                disabled={isSubmitting} 
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  "Reserve My Seat"
                )}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  )
}