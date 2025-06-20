import Link from 'next/link'
import { ArrowRight, Calendar, Image, MapPin, Presentation, Sparkles, Trophy, Users } from 'lucide-react'
import React from 'react'
import { cn } from '@/lib/utils'

function CtaHighlight() {
  // Card data with href paths
  const cards = [
    {
      id: 'awards',
      title: 'Awards',
      description: 'Recognizing groundbreaking contributions in Emerging Trends in Multidisciplinary Research, technological advancement, and future-shaping research that drives positive global impact.',
      href: '/awards',
      icon: <Trophy/>
    },
    {
      id: 'venue',
      title: 'Venue',
      description: 'Experience the conference live in Bali, Indonesia or connect virtually through our dynamic online platform—choose the way that suits you best.',
      href: '/venue',
      icon: <MapPin/>
    },
    {
      id: 'sponsorship',
      title: 'Sponsorship',
      description: 'Partner with ICETMR to showcase your organization\'s commitment toEmerging Trends in Multidisciplinary Research and gain visibility among industry leaders.',
      href: '/sponsorship',
      icon: <Presentation/>
    },
    {
      id: 'committee',
      title: 'Committee',
      description: 'Meet our distinguished panel of Emerging Trends experts, researchers, and thought leaders guiding the conference\'s vision and quality standards.',
      href: '/committee',
      icon: <Users/>
    },
    {
      id: 'schedule',
      title: 'Schedule',
      description: 'Explore our comprehensive 2-day agenda featuring keynotes, panel discussions, workshops, and networking events on Emerging Trends in Multidisciplinary Research.',
      href: '/schedule',
      icon: <Calendar/>
    },
    {
      id: 'organizer',
      title: 'Organizer',
      description: 'Learn more about the organizing team behind ICETMR and their commitment to advancing Emerging Trends in Multidisciplinary Research.',
      href: '/about-organizers',
      icon: <Users/>
    }
  ]

  return (
    <div>
      <section className="px-6 lg:px-12 py-16 lg:py-24 relative overflow-hidden">
        {/* Decorative diagonal elements */}
      {/* Grid Background */}
      <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]"
          )} />
        
        {/* Radial gradient for faded look */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16">
            <div>
              
              <h1 className="text-4xl lg:text-5xl font-medium leading-tight ">
                Conference Highlights & 
                <span className="bg-clip-text text-transparent bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500 ">     Key Features</span>
              </h1>
            </div>
           
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {cards.map((card) => (
    <Link key={card.id} href={card.href}>
      <div className="relative border bg-white/20 backdrop-blur-xl  rounded-2xl p-8 hover:bg-white/30 hover:border-white/40 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-xl before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-50 hover:before:opacity-70 before:transition-opacity before:duration-300">
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-6">
            <div className="w-12 h-12 bg-slate-50 backdrop-blur-sm border border-white/30 rounded-lg flex items-center justify-center text-rose-400 shadow-inner ">
              {card.icon}
            </div>
            <div className="w-10 h-10 bg-neutral-900 backdrop-blur-sm border  rounded-lg flex items-center justify-center group-hover:bg-neutral-800 transition-all duration-300 shadow-lg group-hover:shadow-red-400/10">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-4 font-serif text-gray-800">{card.title}</h3>
          <p className="text-gray-600 leading-relaxed">
            {card.description}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>  
        </div>
      </section>
    </div>
  )
}

export default CtaHighlight

// Summary of all cards with their href paths:
/*
1. Awards - href: "/awards"
2. Venue - href: "/venue" 
3. Sponsorship - href: "/sponsorship"
4. Committee - href: "/committee"
5. Schedule - href: "/schedule"
6. Gallery - href: "/gallery"
*/