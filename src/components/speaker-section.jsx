"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, MapPin, Briefcase, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pb } from "@/lib/pocketbase"

// Speaker categories
const speakerCategories = [
  // { id: "Guest Speaker", title: "Guest Speaker" },
  { id: "Organizing Secretary", title: "Organizing Secretary" },
  { id: "Conference Chair", title: "Conference Chair" },
  { id: "Conference Co-Chair", title: "Conference Co-Chair" },
  { id: "Keynote Speaker", title: "Keynote Speaker" },
  // { id: "Session Chair", title: "Session Chair" },
  
   { id: "Session Speaker", title: "Session Speaker" },
  
];

// Speaker card component
const SpeakerCard = ({ speaker, onMoreInfo }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
    >
      <div className="relative p-1">
        {/* Speaker image */}
        <div className="relative h-[280px] w-full rounded-lg overflow-hidden mb-4">
          <Image 
            src={`https://icetmr-icgewee.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`} 
            alt={speaker.name} 
            fill 
            className="object-contain" 
          />
        </div>

        {/* Speaker info */}
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{speaker.name}</h3>
          <p className="text-gray-700 font-medium mb-1">{speaker.role}</p>
          <div className="flex items-center gap-1.5 text-gray-600 text-sm ">
              <GraduationCap className="h-4 w-4" />
              <span>{speaker.college}</span>
            
          </div>
          <div className="flex items-center gap-1.5 text-gray-600 text-sm mb-4">
            <MapPin className="h-3.5 w-3.5" />
            <span>{speaker.country}</span>
            </div>
          <Button
            onClick={() => onMoreInfo(speaker)}
            className="w-full bg-neutral-900 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white font-medium border-0 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Profile
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

// Speaker detail drawer component
const SpeakerDrawer = ({ isOpen, onClose, speaker }) => (
  <AnimatePresence>
    {isOpen && speaker && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={onClose}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-[100] overflow-y-auto"
        >
          <div className="p-6 flex flex-col h-full relative pt-24">
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition-colors"
              aria-label="Close drawer"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Speaker image */}
            <div className="relative h-[300px] w-full rounded-3xl overflow-hidden border border-gray-200 mt-6 mb-6">
              <Image 
                src={`https://icetmr-icgewee.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`} 
                alt={speaker.name} 
                fill 
                className="object-contain" 
              />
            </div>

            {/* Speaker info */}
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{speaker.name}</h2>
            <h3 className="text-xl text-gray-700 font-medium mb-1">{speaker.role}</h3>

            <div className="flex items-center gap-2 text-gray-600 text-sm mb-1 mt-2">
              <GraduationCap className="h-4 w-4" />
              <span>{speaker.college}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
              <MapPin className="h-4 w-4" />
              <span>{speaker.country}</span>
            </div>

            <div className="h-px w-full bg-gray-200 mb-6"></div>

            <h4 className="text-lg font-medium text-gray-900 mb-3">Biography</h4>
            <p className="text-gray-600 flex-grow">{speaker.bio}</p>

            <div className="h-px w-full bg-gray-200 my-6"></div>

            <Button
              onClick={onClose}
              className="w-full bg-neutral-900 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white font-medium border-0 rounded-full py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Close
            </Button>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
)

export function SpeakerSection() {
  const [activeCategory, setActiveCategory] = useState("Organizing Secretary")
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [speakers, setSpeakers] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSpeakers = async () => {
      try {
        // Fetch speakers
        const records = await pb.collection("ICETMR_speakers").getFullList({
          sort: "name",
          requestKey: null,
        })

        if (records && records.length > 0) {
          // Group speakers by category
          const groupedSpeakers = records.reduce((acc, speaker) => {
            const category = speaker.category;
            if (!acc[category]) {
              acc[category] = []
            }

            acc[category].push({
              name: speaker.name,
              role: speaker.role,
              image: speaker.image,
              bio: speaker.bio,
              id: speaker.id,
              collectionId: speaker.collectionId,
              college: speaker.college,
              country: speaker.country,
            })

            return acc
          }, {})

          // Ensure all categories exist in the grouped speakers object
          speakerCategories.forEach(({ id }) => {
            if (!groupedSpeakers[id]) {
              groupedSpeakers[id] = []
            }
          })

          setSpeakers(groupedSpeakers)
        }

        setLoading(false)
      } catch (err) {
        console.error("Failed to fetch speakers:", err)
        setLoading(false)
      }
    }

    fetchSpeakers()
  }, [])

  const handleMoreInfo = (speaker) => {
    setSelectedSpeaker(speaker)
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <section className="py-20 relative bg-gray-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-pretty mb-6 text-gray-900">
            Distinguished Speakers
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mx-auto mb-8 rounded-full"></div>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the brilliant minds shaping the future of multidisciplinary research and innovation
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {speakerCategories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 text-white shadow-lg shadow-pink-500/20"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {category.title}
            </motion.button>
          ))}
        </div>

        {/* Loading state */}
        {loading && (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="relative h-16 w-16">
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-pink-500 animate-spin"></div>
              <div
                className="absolute inset-2 rounded-full border-2 border-transparent border-l-red-500 animate-spin"
                style={{ animationDuration: "1.5s" }}
              ></div>
              <div
                className="absolute inset-4 rounded-full border-2 border-transparent border-r-yellow-500 animate-spin"
                style={{ animationDuration: "2s" }}
              ></div>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="relative bg-red-50 rounded-3xl border border-red-200 p-6 max-w-md mx-auto">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        )}

        {/* Speakers grid */}
        {!loading && !error && (
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {speakers && speakers[activeCategory]?.length > 0 ? (
                speakers[activeCategory].map((speaker, index) => (
                  <motion.div
                    key={speaker.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <SpeakerCard speaker={speaker} onMoreInfo={handleMoreInfo} />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-3 py-12 text-center">
                  <div className="relative bg-white rounded-3xl border border-gray-200 p-6 max-w-md mx-auto">
                    <p className="text-gray-600">speakers would be added soon</p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Speaker detail drawer */}
        <SpeakerDrawer isOpen={isDrawerOpen} onClose={closeDrawer} speaker={selectedSpeaker} />
      </div>
    </section>
  )
}