"use client"

import { motion } from "framer-motion"
import { Check, CreditCard } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SponsorshipPackage({ title, price, color, icon, benefits, onSelect }) {
  // We'll keep the color prop for flexibility but use it differently
  const getGradientClasses = () => {
    // Default to our highlight gradient if no specific color is provided
    if (!color || color.includes("gray")) {
      return "bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500"
    }
    return `bg-gradient-to-r ${color}`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-bl from-pink-500/10 via-red-500/10 to-yellow-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity"></div>

      <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden h-full transition-all group-hover:bg-gray-50">
        <div className={`absolute top-0 left-0 right-0 h-2 ${getGradientClasses()}`}></div>

        <div className="p-6 flex flex-col h-full">
          <div className="mb-4 flex justify-between items-center">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200">
              Sponsorship
            </span>
            <div className={`flex h-10 w-10 items-center justify-center rounded-full ${getGradientClasses()} p-0.5`}>
              <div className="flex h-full w-full items-center justify-center rounded-full bg-white">{icon}</div>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>

          <div className="mb-4">
            <span className="text-3xl font-bold bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              ${price.toLocaleString()}
            </span>
          </div>

          <div className="space-y-3 mb-6 flex-grow">
            {benefits.map((benefit, index) => {
              // Alternate check icon colors for visual interest
              const checkColors = ["text-pink-500", "text-red-500", "text-yellow-500"]
              const colorClass = checkColors[index % checkColors.length]

              return (
                <div key={index} className="flex items-start gap-2">
                  <Check className={`h-5 w-5 ${colorClass} shrink-0 mt-0.5`} />
                  <span className="text-gray-600 text-sm">{benefit}</span>
                </div>
              )
            })}
          </div>

          <Button
            onClick={onSelect}
            className={`w-full bg-neutral-900 hover:brightness-110 text-white border-0`}
          >
            <CreditCard className="mr-2 h-4 w-4 text-red-400" />
            Choose {title}
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
