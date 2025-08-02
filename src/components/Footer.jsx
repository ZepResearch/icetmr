
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowUp,
  Calendar,
  MapPin,
  Youtube,
  Mail,
  Contact,
  TrendingUp
} from "lucide-react"

export default function ConferenceFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Navigation links grouped for footer
  const footerLinks = [
    {
      title: "About",
      links: [
        { href: "/about-conference", label: "About Conference" },
        { href: "/about-organizers", label: "About Organizers" },
      ],
    },
    {
      title: "Program",
      links: [
        { href: "/theme-and-topics", label: "Themes and Topics" },
        { href: "/papers-format", label: "Paper Formats" },
        { href: "/mode-of-presentation", label: "Mode of Presentation" },
        { href: "/schedule", label: "Conference Schedule" },
      ],
    },
    {
      title: "Participate",
      links: [
        { href: "/committee", label: "Committee" },
        { href: "/submission", label: "Submission" },
        { href: "/venue", label: "Venue" },
        { href: "/awards", label: "Awards" },
      ],
    },
    {
      title: "Connect",
      links: [
        { href: "/contact", label: "Contact" },
        { href: "/exhibit-and-sponsor", label: "Exhibit & Sponsor" },
        { href: "/registration", label: "Registration" },
        // { href: "/privacy-policy", label: "Privacy Policy" },
      ],
    },
  ]

  // Conference information cards
  const conferenceCards = [
    // {
    //   title: "NextGen-Synergy 2025",
    //   logo: "/conf/nextgen.ico?height=40&width=40",
    //   location: "Delhi, India",
    //   date: "August 21st -22nd , 2025",
    //   href: "https://www.thenextgensynergy.com/",
    // },
    {
      title: "Wfcces 2025",
      logo: "/conf/wfcces.png?height=40&width=40",
      location: "Kuala Lumpur, Malaysia",
      date: "May 22nd - 23rd, 2025",
      href: "https://www.wfcces.com/",
    },
    {
      title: "ICEMSS 2025",
      logo: "/conf/icemss.ico?height=40&width=40",
      location: "Goa, India",
      date: "December 22-23, 2025",
      href: "https://www.icemss.in",
    },
  ]

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-neutral-950 text-white overflow-hidden">
      {/* 3D Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large sphere */}
        <div
          className="absolute -right-20 -bottom-40 w-80 h-80 rounded-full  bg-gradient-to-tl from-pink-500/30 via-red-500/40 to-yellow-500/30 "
          style={{ filter: "blur(40px)" }}
        ></div>
        
        {/* Small floating circles */}
        <div
          className="absolute left-1/4 top-1/4 w-16 h-16 rounded-full bg-[#d3e4c5]/10 animate-float-slow"
          style={{ animationDelay: "0s" }}
        ></div>
        
        <div
          className="absolute right-1/3 top-1/2 w-12 h-12 rounded-full bg-[#d3e4c5]/10 animate-float"
          style={{ animationDelay: "-2s" }}
        ></div>
        
        <div
          className="absolute left-1/2 bottom-1/4 w-20 h-20 rounded-full bg-[#d3e4c5]/10 animate-float-slow"
          style={{ animationDelay: "-1s" }}
        ></div>
        
        {/* Geometric shapes */}
        <div
          className="absolute left-10 bottom-10 w-32 h-32 bg-[#d3e4c5]/5"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            transform: "rotate(15deg)",
          }}
        ></div>
        
        <div
          className="absolute right-1/4 top-10 w-24 h-24 bg-[#d3e4c5]/5"
          style={{
            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            transform: "rotate(-10deg)",
          }}
        ></div>
        
        {/* Subtle grid lines */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-px w-full bg-white absolute top-1/4"></div>
          <div className="h-px w-full bg-white absolute top-2/4"></div>
          <div className="h-px w-full bg-white absolute top-3/4"></div>
          <div className="w-px h-full bg-white absolute left-1/4"></div>
          <div className="w-px h-full bg-white absolute left-2/4"></div>
          <div className="w-px h-full bg-white absolute left-3/4"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Top Section with Logo/Description on left and Conference Cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-12 mb-16">
          {/* Left Side - Logo, Name, Description, Social Links */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
            <Link href={"/"}>
        <div className="flex items-center space-x-2">
          {/* <div className="w-10 h-10 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500   rounded-lg flex items-center justify-center"> */}
            <Image src={"/logowhite.svg"} alt='logo' height={500} width={400} className=" text-white" />
            {/* <TrendingUp className="w-6 h-6 text-white" /> */}
          {/* </div> */}
          {/* <span className="text-xl font-semibold text-gray-50 ">Emerging Trends <span className="bg-clip-text text-transparent bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500  " >Conf.</span></span> */}
        </div>
          </Link>
            </div>
            <p className="text-white/80 mb-6 max-w-xl">
              International Conference on Emerging Trends in Multidisciplinary Research. Join us October 10th - 11th,
              2025 in Bali, Indonesia for a transformative experience bringing together experts, researchers, and
              industry leaders to explore groundbreaking advancements in multidisciplinary research and innovation.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61561809783777"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/zepresearch/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://x.com/Zepresearch"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/zep-research/"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://www.youtube.com/@Zepresearch"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
            <div className="mt-4">
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <div className="space-y-1">
                  
                  <a
                    href="mail:info@emergingtrendsconference.com"
                    className="inline-flex gap-4 text-white/70 hover:text-white transition-colors hover:underline "
                  >
                   <Mail/> info@emergingtrendsconference.com
                  </a>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  {/* <p className="text-[#d3e4c5] text-sm">Phone</p> */}
                  <a
                    href="tel:+919237388328"
                    className="inline-flex gap-2 text-white/70 hover:text-white transition-colors hover:underline "
                  >
                    <Contact/>+91 92373 88328
                  </a>
                </div>
              </li>
              <li>
                <div className="space-y-1">
                  <p className="text-white/70 inline-flex gap-2">
                   <MapPin/>Bali, Indonesia
                  </p>
                </div>
              </li>
            </ul>
          </div>
          </div>

          {/* Right Side - Conference Cards */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {conferenceCards.map((card, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 relative mr-2">
                    <Image
                      src={card.logo || "/placeholder.svg"}
                      alt={`${card.title} Logo`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-base font-bold">{card.title}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 text-[#d3e4c5] mr-2 flex-shrink-0" />
                    <span className="text-white/80">{card.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 text-[#d3e4c5] mr-2 flex-shrink-0" />
                    <span className="text-white/80">{card.location}</span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/10">
                  <Link
                    href={`${card.href}`}
                    className="text-[#d3e4c5] hover:text-white text-sm flex items-center group-hover:underline"
                  >
                    View Details
                    <ArrowUp className="h-3 w-3 ml-1 rotate-45" />
                  </Link>
                </div>
              </div>
            ))}
          </div> */}
        

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 ">
          {/* Contact Information */}
          
          {footerLinks.map((group, index) => (
            <div key={index}>
              <h4 className="font-bold text-lg mb-4">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link href={link.href} className="text-white/70 hover:text-white transition-colors hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>

        {/* Contact Information */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 rounded-2xl p-5 backdrop-blur-sm">
            <div className="w-6 h-6 mb-3 text-[#d3e4c5] flex items-center justify-center">
              <span className="text-xl font-bold">📧</span>
            </div>
            <h4 className="font-medium mb-1">Email Us</h4>
            <p className="text-white/70">info@icsift.org</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 backdrop-blur-sm">
            <div className="w-6 h-6 mb-3 text-[#d3e4c5] flex items-center justify-center">
              <span className="text-xl font-bold">📍</span>
            </div>
            <h4 className="font-medium mb-1">Location</h4>
            <p className="text-white/70">Queen Sirikit National Convention Center, Bangkok, Thailand</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 backdrop-blur-sm">
            <div className="w-6 h-6 mb-3 text-[#d3e4c5] flex items-center justify-center">
              <span className="text-xl font-bold">📅</span>
            </div>
            <h4 className="font-medium mb-1">Conference Dates</h4>
            <p className="text-white/70">December 26-27, 2024</p>
          </div>
        </div> */}

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2025 ICSIFT. All rights reserved. Designed with sustainability in mind.
          </p>
          <div className="grid md:grid-cols-4 grid-cols-2  gap-8 text-center">
            <Link href="/terms-and-conditions" className="text-white/60 text-sm hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="text-white/60 text-sm hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/cancellation-policy" className="text-white/60 text-sm hover:text-white transition-colors">
              Cancellation Policy
            </Link>
            <Link href="/complaints-policy" className="text-white/60 text-sm hover:text-white transition-colors">
                Complaints-Policy
            </Link>
          


        
            <Link href="/disability-discrimination-policy" className="text-white/60 text-sm hover:text-[#00adef] transition-colors ">
             Disability Discrimination Policy
            </Link>
            <Link href="/health-and-safety-policy" className="text-white/60 text-sm hover:text-[#00adef] transition-colors">
             Health and Safety Policy
            </Link>
            <Link href="/equal-treatment-policy" className="text-white/60 text-sm hover:text-[#00adef] transition-colors">
             Equal Treatment Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-28 bottom-6 w-12 h-12 rounded-full bg-[#241f1f] text-[#c2c2c2] flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  )
}
