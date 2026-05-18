import React from 'react'
import ComplaintsPolicy from './Content'
import { Conference } from '@/constants/conference'

export const metadata = {
  title: `Complaints Policy - ${Conference.name}`,
  description: `Join ${Conference.shortForm} ${Conference.year} in ${Conference.venue.location}. A 2-day multidisciplinary conference bringing together 1000+ academics and professionals from 50+ countries for cutting-edge research in emerging trends across disciplines.`,
  keywords: ['ICETMR', 'emerging trends conference', 'multidisciplinary research', 'academic conference Bali', 'research conference 2025'],
  alternates: {
    canonical: 'https://www.emergingtrendsconference.com/complaints-policy',
  },
  openGraph: {
    title: `${Conference.shortForm} ${Conference.year} - ${Conference.name}`,
    description: `Join ${Conference.shortForm} ${Conference.year} in ${Conference.venue.location}. A premier academic conference featuring 30+ workshops and global researchers.`,
   
    type: 'website',
    locale: 'en_US',
    site_name: `${Conference.shortForm} ${Conference.year}`,
  },
}

function page() {
  return (
    <div>
      <ComplaintsPolicy/>
    </div>
  )
}

export default page
