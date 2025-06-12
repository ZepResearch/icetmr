"use client"
import { Activity, BrainCircuit, ChartNoAxesColumnIncreasingIcon, Menu, TrendingUp } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from './ui/navigation-menu'
import { Sheet, SheetTrigger, SheetContent } from './ui/sheet'
import Link from 'next/link'

const navLinks = [
  {
    title: 'ABOUT',
    href: '#',
    dropdown: [
      { href: '/about-conference', title: 'About Conference' },
      { href: '/about-organizers', title: 'About Organizers' },
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
    ],
  },
  { title: 'COMMITTEE', href: '/committee' },
  { title: 'SUBMISSION', href: '/submission' },
  // { title: 'GALLERY', href: '/gallery' },
  { title: 'VENUE', href: '/venue' },
  { title: 'AWARDS', href: '/awards' },
  { title: 'CONTACT', href: '/contact' },
  { title: 'EXHIBIT & SPONSOR', href: '/exhibit-and-sponsor' },
]

function Nav() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <header className="flex items-center justify-between px-6 py-4 lg:px-12">
          <Link href={"/"}>
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-tl from-pink-500 via-red-500 to-yellow-500   rounded-lg flex items-center justify-center">
            {/* <Image src={"/assets/logo.png"} alt='logo' height={500} width={500} className="w-6 h-6 text-white" /> */}
            <TrendingUp className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-semibold text-gray-900 ">Emerging Trends <span className="bg-clip-text text-transparent bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500  " >Conf.</span></span>
        </div>
          </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-7 bg-gray-50 px-8 py-3 rounded-full border text-xs">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) =>
                link.dropdown ? (
                  <NavigationMenuItem key={link.title}>
                    <NavigationMenuTrigger className={`text-xs`}>{link.title}</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-[200px]">
                      <div className="flex flex-col py-2">
                        {link.dropdown.map((item) => (
                          <NavigationMenuLink
                            key={item.href}
                            href={item.href}
                            className="px-4 py-2 hover:bg-gray-100 rounded text-gray-700 text-xs"
                          >
                            {item.title}
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.title}>
                    <NavigationMenuLink
                      href={link.href}
                      className="px-4 py-2 hover:bg-gray-100 rounded text-gray-700 text-xs"
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
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