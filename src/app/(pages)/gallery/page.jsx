"use client"
import ImageCarousel from "./components/image-carousel"
import YouTubePlayer from "./components/youtube-player"

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-gradient-to-tl from-pink-500/90 via-red-500/90 to-yellow-500/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold text-gray-50 text-balance">Gallery</h1>
          <p className="text-gray-100 mt-2">Explore our collection of images and videos</p>
        </div>
      </div>

      {/* Carousel Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Images</h2>
          <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-lg p-1">
            <div className="bg-white rounded-lg overflow-hidden">
              <ImageCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-gray-200">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Featured Video</h2>
          <div className="bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 rounded-lg p-1">
            <div className="bg-white rounded-lg overflow-hidden">
              <YouTubePlayer videoId="nIlKJZVwBf0" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer Spacing */}
      <div className="h-16" />
    </main>
  )
}
