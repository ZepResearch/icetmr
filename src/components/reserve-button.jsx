"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ReserveForm } from "./reserve-form"

export const ReserveButton = ({ className }) => {
const [isOpen, setIsOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  // Auto-open form after 4 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  const handleFormSubmitSuccess = () => {
    setIsOpen(false)
    setShowThankYou(true)
  }

  return (
    <>
      <Button size={'lg'} onClick={() => setIsOpen(true)} className={'bg-clip-text text-transparent bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 border hover:scale-101 hover:shadow-md border-gray-00   '}>
        Reserve a Seat
      </Button>

      <ReserveForm
  isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        onSubmitSuccess={handleFormSubmitSuccess}
      />    </>
  )
}
