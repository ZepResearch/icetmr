"use client"
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DownloadCloudIcon } from "lucide-react";
import { pb } from "@/lib/pocketbase";

export default function Buttons() {
  const [materials, setMaterials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        const records = await pb.collection('ICETMR_download_material').getFullList({
          sort: 'created',
          requestKey: null,
        });
        setMaterials(records);
      } catch (err) {
        setError("Failed to load materials");
        console.error("Error fetching materials:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  if (isLoading) {
    return (
      <div className="mx-auto flex min-h-[220px] max-w-7xl items-center justify-center px-4">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[#ffb7b2] border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-[#a33a2f]">
        {error}
      </div>
    );
  }

  return (
    <section className="px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-black/5 bg-white/70 p-6 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] backdrop-blur">
        <div className="mb-6 flex flex-col items-center gap-3 text-center">
          <span className="eyebrow">Resources</span>
          <h2 className="text-3xl font-semibold text-[#292524] sm:text-4xl">
            Download conference materials
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-[#78716c] sm:text-base">
            Keep the essentials close at hand with templates, guidelines, and reference materials for the event.
          </p>
        </div>

        <motion.div
          className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {materials.map((material) => (
            <motion.a
              key={material.id}
              href={`${process.env.NEXT_PUBLIC_POCKETBASE_URL}/api/files/${material.collectionName}/${material.id}/${material.file}`}
              className="flex items-center justify-between rounded-[1.25rem] border border-[#e8efe8] bg-[#fdfcf8] px-4 py-4 text-left text-sm font-semibold text-[#292524] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#efedf4]"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{material.title}</span>
              <DownloadCloudIcon className="h-4 w-4 text-[#ff7a6a]" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}