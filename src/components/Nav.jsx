"use client"
import { Activity, ChevronDown, Menu } from 'lucide-react'
import React, { useRef, useState } from 'react'
import { Button } from './ui/button'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  {
    title: 'ABOUT',
    href: '#',
    dropdown: [
      { href: '/about-conference', title: 'About Conference' },
      { href: '/about-organizers', title: 'About Organizers' },
      { href: '/about-co-organizers', title: 'About Co-Organizers' },
    ],
  },
  {
    title: 'PROGRAM',
    href: '#',
    dropdown: [
      { href: '/theme-and-topics', title: 'Themes and Topics' },
      { href: '/papers-format', title: 'Paper Formats' },
      { href: '/mode-of-presentation', title: 'Mode of Presentation' },
      { href: '/schedule', title: 'Conference Schedule' },
      { title: 'gallery', href: '/gallery' },
      { title: 'awards', href: '/awards' },
    ],
  },
  {
    title: 'SPEAKERS',
    href: '#',
    dropdown: [
      { href: '/key-speaker', title: 'Keynote Speakers' },
      { href: '/distinct-speakers', title: 'Distinguished  Speakers' },
    ],
  },
  { title: 'COMMITTEE', href: '/committee' },
  { title: 'SUBMISSION', href: '/submission' },
  { title: 'JOURNAL', href: '/journals' },
  { title: 'VENUE', href: '/venue' },
  { title: 'CONTACT', href: '/contact' },
  { title: 'PROCEEDINGS', href: '/proceedings' },
  { title: 'SPONSORSHIP', href: '/exhibit-and-sponsor' },
]

function Nav() {
  const [openDropdown, setOpenDropdown] = useState(null)
  const closeTimeout = useRef(null)

  const handleEnter = (title) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current)
    setOpenDropdown(title)
  }

  const handleLeave = () => {
    closeTimeout.current = setTimeout(() => setOpenDropdown(null), 150)
  }

  return (
    <div className="max-w-screen-2xl mx-auto">
      <header className="flex items-center justify-between px-4 py-4 lg:px-6">
        <Link href={"/"}>
          <div className="flex items-center space-x-2 mr-4">
            <Image src={"/logo.svg"} alt='logo' height={300} width={300} className=" text-white" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-gray-50 px-8 py-3 rounded-full border text-xs">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.title}
                className="relative"
                onMouseEnter={() => handleEnter(link.title)}
                onMouseLeave={handleLeave}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 px-4 py-2 hover:bg-gray-100 rounded text-gray-700 text-xs"
                  aria-expanded={openDropdown === link.title}
                >
                  {link.title}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${openDropdown === link.title ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {openDropdown === link.title && (
                  <div className="absolute left-0 top-full mt-1.5 min-w-[200px] bg-white border rounded-md shadow-lg py-2 z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-100 rounded text-gray-700 text-xs"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.title}
                href={link.href}
                className="px-4 py-2 hover:bg-gray-100 rounded text-gray-700 text-xs"
              >
                {link.title}
              </Link>
            )
          )}
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-900">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-2 px-6 py-4 border-b">
                  <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">Emerging Trends <span className='text-orange-500'>Conf.</span></span>
                </div>
                <nav className="flex flex-col gap-1 px-6 py-4">
                  {navLinks.map((link) =>
                    link.dropdown ? (
                      <div key={link.title} className="mb-2">
                        <div className="font-medium text-gray-900 mb-1">{link.title}</div>
                        <div className="flex flex-col pl-2">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="py-2 text-gray-700 hover:text-orange-500 text-sm"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        key={link.title}
                        href={link.href}
                        className="py-2 text-gray-700 hover:text-orange-500 text-sm"
                      >
                        {link.title}
                      </a>
                    )
                  )}
                </nav>
                <div className="mt-auto px-6 pb-6">
                  <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white py-2 rounded-lg">REGISTER NOW</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Register Button (always visible) */}
        <div className="hidden md:block">
          <Link href={'/registration'}>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-lg ">REGISTER NOW</Button>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Nav