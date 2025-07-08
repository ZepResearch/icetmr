import React from 'react'
import ComplaintsPolicy from './Content'

export const metadata = {
  title: 'Complaints Policy - International Conference on Emerging Trends in Multidisciplinary Research',
  description: 'Join ICETMR 2025 in Bali, Indonesia. A 2-day multidisciplinary conference bringing together 1000+ academics and professionals from 50+ countries for cutting-edge research in emerging trends across disciplines.',
  keywords: ['ICETMR', 'emerging trends conference', 'multidisciplinary research', 'academic conference Bali', 'research conference 2025'],
  alternates: {
    canonical: 'https://www.emergingtrendsconference.com/complaints-policy',
  },
  openGraph: {
    title: 'ICETMR 2025 - International Conference on Emerging Trends in Multidisciplinary Research',
    description: 'Join ICETMR 2025 in Bali, Indonesia. A premier academic conference featuring 30+ workshops and global researchers.',
   
    type: 'website',
    locale: 'en_US',
    site_name: 'ICETMR 2025',
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
