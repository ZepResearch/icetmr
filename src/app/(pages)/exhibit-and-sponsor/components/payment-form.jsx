"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, CreditCard } from "lucide-react"

export function CCavenuePaymentForm({
  isOpen,
  onClose,
  ticketName,
  amount,
  taxRate = 0.05,
  currency = "USD",
  onSubmit,
  isLoading,
}) {
  const [formData, setFormData] = useState({
    billing_email: "",
    billing_name: "",
    billing_address: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
    billing_country: "",
    billing_tel: "",
    billing_organization: "",
    billing_designation: "",
  })

  // Ensure amount is a number and has a default value
  const numericAmount = typeof amount === "number" ? amount : 0

  // Calculate tax amount and total - ensure proper calculation and decimal precision
  const taxAmount = Number((numericAmount * (taxRate || 0)).toFixed(2))
  const totalAmount = Number((numericAmount + taxAmount).toFixed(2))

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const currencySymbol = currency === "USD" ? "$" : "€"

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-white border border-gray-100 text-gray-900 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2 text-gray-900">Conference Registration Payment</DialogTitle>
          <div className="text-sm text-gray-600 mb-4">
            <div className="font-semibold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent text-center">
              International Conference on Emerging Trends in Multidisciplinary Research
            </div>
            <div className="mt-1">October 10th - 11th, 2025 • Bali, Indonesia</div>
          </div>
        </DialogHeader>

        {/* Decorative elements with gradient */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-pink-200 via-red-200 to-yellow-200 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-200 via-red-200 to-pink-200 rounded-full blur-3xl opacity-30 translate-y-1/2 -translate-x-1/2"></div>

        <form onSubmit={handleSubmit} className="space-y-4 relative">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_name" className="text-gray-700 font-medium">
                Full Name
              </Label>
              <Input
                id="billing_name"
                name="billing_name"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-pink-300 focus:ring-pink-200"
              />
            </div>
            <div>
              <Label htmlFor="billing_email" className="text-gray-700 font-medium">
                Email
              </Label>
              <Input
                id="billing_email"
                name="billing_email"
                type="email"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-pink-300 focus:ring-pink-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_organization" className="text-gray-700 font-medium">
                Organization
              </Label>
              <Input
                id="billing_organization"
                name="billing_organization"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-pink-300 focus:ring-pink-200"
              />
            </div>
            <div>
              <Label htmlFor="billing_designation" className="text-gray-700 font-medium">
                Designation
              </Label>
              <Input
                id="billing_designation"
                name="billing_designation"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-pink-300 focus:ring-pink-200"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billing_address" className="text-gray-700 font-medium">
              Address
            </Label>
            <Input
              id="billing_address"
              name="billing_address"
              required
              onChange={handleChange}
              className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-pink-300 focus:ring-pink-200"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_city" className="text-gray-700 font-medium">
                City
              </Label>
              <Input
                id="billing_city"
                name="billing_city"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-pink-300 focus:ring-pink-200"
              />
            </div>
            <div>
              <Label htmlFor="billing_state" className="text-gray-700 font-medium">
                State
              </Label>
              <Input
                id="billing_state"
                name="billing_state"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-pink-300 focus:ring-pink-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="billing_zip" className="text-gray-700 font-medium">
                ZIP Code
              </Label>
              <Input
                id="billing_zip"
                name="billing_zip"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-pink-300 focus:ring-pink-200"
              />
            </div>
            <div>
              <Label htmlFor="billing_country" className="text-gray-700 font-medium">
                Country
              </Label>
              <Input
                id="billing_country"
                name="billing_country"
                required
                onChange={handleChange}
                className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-pink-300 focus:ring-pink-200"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="billing_tel" className="text-gray-700 font-medium">
              Phone Number
            </Label>
            <Input
              id="billing_tel"
              name="billing_tel"
              type="tel"
              required
              onChange={handleChange}
              className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-pink-300 focus:ring-pink-200"
            />
          </div>

          <div className="mt-6 space-y-2 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm">
            <div className="flex justify-between">
              <Label className="text-gray-600">Conference Registration:</Label>
              <div className="font-medium text-gray-900">{ticketName || "Standard Registration"}</div>
            </div>
            <div className="flex justify-between">
              <Label className="text-gray-600">Subtotal:</Label>
              <div className="font-medium text-gray-900">
                {currencySymbol}
                {numericAmount.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between">
              <Label className="text-gray-600">Tax ({((taxRate || 0) * 100).toFixed(0)}%):</Label>
              <div className="font-medium text-gray-900">
                {currencySymbol}
                {taxAmount.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200">
              <Label className="text-gray-700 font-semibold">Total Amount:</Label>
              <div className="text-xl font-bold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                {currencySymbol}
                {totalAmount.toFixed(2)}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full mt-6 bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white rounded-full h-12 font-semibold shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing Payment...
              </>
            ) : (
              <>
                <CreditCard className="mr-2 h-4 w-4" /> Complete Registration Payment
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
