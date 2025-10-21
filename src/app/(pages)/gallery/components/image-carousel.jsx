"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load images from public/gallery folder
    const galleryImages = [
      "/gallery/1.jpg",
      "/gallery/2.jpg",
      "/gallery/3.jpg",
      "/gallery/4.jpg",
        "/gallery/5.jpg",
        "/gallery/6.jpg",
        "/gallery/7.jpg",
        "/gallery/8.jpg",
        "/gallery/9.jpg",
        "/gallery/10.jpg",
        "/gallery/11.jpg",
        "/gallery/12.jpg",
        "/gallery/13.jpg",
        "/gallery/14.jpg",
        "/gallery/15.jpg",
    ]
    setImages(galleryImages)
    setIsLoading(false)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (isLoading || images.length === 0) {
    return (
      <div className="w-full aspect-video bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Loading gallery...</p>
      </div>
    )
  }

  return (
    <div className="relative w-full aspect-video bg-gray-100 group">
      {/* Main Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Gallery image ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-8" : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}
