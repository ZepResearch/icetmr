"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, MapPin, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { pb } from "@/lib/pocketbase"

const speakerCategories = [
  { id: "Guest Speaker", title: "Guest Speaker" },
  { id: "Organizing Secretary", title: "Organizing Secretary" },
  { id: "Conference Chair", title: "Conference Chair" },
  { id: "Conference Co-Chair", title: "Conference Co-Chair" },
  { id: "Keynote Speaker", title: "Keynote Speaker" },
  { id: "Session Chair", title: "Session Chair" },
  { id: "Panel Speaker", title: "Panel Speaker" },
]

const SpeakerCard = ({ speaker, onMoreInfo }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="overflow-hidden rounded-[1.75rem] border border-[#e8efe8] bg-[#fcfbf7] shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)]"
    >
      <div className="relative h-[280px] w-full overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`}
          alt={speaker.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#292524]">{speaker.name}</h3>
        <p className="mt-1 text-sm font-medium text-[#ff7a6a]">{speaker.role}</p>
        <div className="mt-3 flex items-center gap-2 text-sm text-[#78716c]">
          <GraduationCap className="h-4 w-4" />
          <span>{speaker.college}</span>
        </div>
        <div className="mt-2 flex items-center gap-2 text-sm text-[#78716c]">
          <MapPin className="h-3.5 w-3.5" />
          <span>{speaker.country}</span>
        </div>
        <Button
          onClick={() => onMoreInfo(speaker)}
          className="mt-5 w-full rounded-full bg-[#292524] text-white hover:bg-[#1f1c1a]"
        >
          View profile
        </Button>
      </div>
    </motion.div>
  )
}

const SpeakerDrawer = ({ isOpen, onClose, speaker }) => (
  <AnimatePresence>
    {isOpen && speaker && (
      <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="fixed right-0 top-0 z-[100] h-full w-full overflow-y-auto bg-[#fdfcf8] shadow-2xl sm:w-[450px]"
        >
          <div className="relative flex h-full flex-col p-6 pt-24">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#efedf4] text-[#292524]"
              aria-label="Close drawer"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative mb-6 h-[300px] w-full overflow-hidden rounded-[1.75rem] border border-[#e8efe8]">
              <Image
          src={`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`}
           
          //src={`https://icetmr-icgewee.pockethost.io/api/files/${speaker.collectionId}/${speaker.id}/${speaker.image}`}
                alt={speaker.name}
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-semibold text-[#292524]">{speaker.name}</h2>
            <h3 className="mt-1 text-lg text-[#ff7a6a]">{speaker.role}</h3>
            <div className="mt-4 flex items-center gap-2 text-sm text-[#78716c]">
              <GraduationCap className="h-4 w-4" />
              <span>{speaker.college}</span>
            </div>
            <div className="mt-2 flex items-center gap-2 text-sm text-[#78716c]">
              <MapPin className="h-4 w-4" />
              <span>{speaker.country}</span>
            </div>

            <div className="my-6 h-px w-full bg-[#e8efe8]" />
            <h4 className="text-lg font-semibold text-[#292524]">Biography</h4>
            <p className="mt-3 flex-grow text-sm leading-7 text-[#78716c]">{speaker.bio}</p>

            <Button onClick={onClose} className="mt-6 rounded-full bg-[#292524] text-white hover:bg-[#1f1c1a]">
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
    <section className="px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="section-shell reveal-on-scroll overflow-hidden p-6 sm:p-8 lg:p-10">
          <div className="mb-8 text-center">
            <span className="eyebrow">Speakers</span>
            <h2 className="mt-4 text-3xl font-semibold text-[#292524] sm:text-4xl">
              Distinguished voices shaping the conversation
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-[#78716c] sm:text-base">
              Meet the researchers and thought leaders bringing depth, energy, and perspective to the event.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {speakerCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#292524] text-white"
                    : "bg-[#fdfcf8] text-[#78716c] ring-1 ring-[#e8efe8] hover:bg-[#efedf4]"
                }`}
              >
                {category.title}
              </motion.button>
            ))}
          </div>

          {loading && (
            <div className="flex min-h-[220px] items-center justify-center">
              <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#ffb7b2] border-t-transparent" />
            </div>
          )}

          {error && (
            <div className="rounded-[1.5rem] border border-[#ffb7b2]/30 bg-[#fff5f2] p-6 text-center text-[#a33a2f]">
              {error}
            </div>
          )}

          {!loading && !error && (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
              >
                {speakers && speakers[activeCategory]?.length > 0 ? (
                  speakers[activeCategory].map((speaker, index) => (
                    <motion.div
                      key={speaker.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                    >
                      <SpeakerCard speaker={speaker} onMoreInfo={handleMoreInfo} />
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full rounded-[1.5rem] border border-dashed border-[#e8efe8] bg-[#fcfbf7] p-8 text-center text-[#78716c]">
                    Speakers will be added soon.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
      <SpeakerDrawer isOpen={isDrawerOpen} onClose={closeDrawer} speaker={selectedSpeaker} />
    </section>
  )
}