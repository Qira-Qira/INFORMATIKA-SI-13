"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)


  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-brand/40 bg-brand/60 border-b border-brand-primary/20">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <div className="flex-1 flex items-center">
          
          <Link href="#home" className="flex items-center gap-3">
          <div className="relative w-28 sm:w-36 md:w-44 h-12 sm:h-14 md:h-16">
            <Image
              src="/logo/logo-uisi.png"
              alt="Departemen Informatika"
              fill
              sizes="(max-width: 640px) 120px, 170px"
              className="object-contain cursor-pointer"
            />
          </div>
            <Image
              src="/logo/logo-informatika.png"
              alt="Departemen Informatika"
              width={170}
              height={48}
              className="object-contain h-32 w-auto cursor-pointer"
            />
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm flex-1 justify-center">
          <a href="#" className="hover:text-brand-primary transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-brand-primary transition-colors">
            Info
          </a>
          <a href="#gallery" className="hover:text-brand-primary transition-colors">
            Gallery
          </a>
          <a href="#cta" className="hover:text-brand-primary transition-colors">
            Community
          </a>
        </nav>
        <div className="flex-1 flex items-center justify-end">
          {/* mobile actions */}
          <div className="md:hidden">
            <button
              aria-label="menu"
              onClick={() => setOpen((v) => !v)}
              className="p-2 rounded-md bg-black/30 text-white"
            >
              {open ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* mobile menu panel */}
        {open && (
          <div className="absolute left-0 right-0 top-full bg-black text-brand border-t border-brand-primary/20 md:hidden">
              <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                <a href="#" onClick={() => setOpen(false)} className="block py-2 hover:text-brand-primary">Home</a>
                <a href="#about" onClick={() => setOpen(false)} className="block py-2 hover:text-brand-primary">Info</a>
                <a href="#gallery" onClick={() => setOpen(false)} className="block py-2 hover:text-brand-primary">Gallery</a>
                <a href="#cta" onClick={() => setOpen(false)} className="block py-2 hover:text-brand-primary">Community</a>
              </div>
          </div>
        )}
      </div>
    </header>
  )
}
