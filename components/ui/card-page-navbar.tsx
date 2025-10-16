"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function CardPageNavbar({ onSearch }: { onSearch: (q: string) => void }) {
  const router = useRouter()
  const [query, setQuery] = useState("")

  return (
    <header className="sticky top-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 z-30 bg-black/60 backdrop-blur border-b border-brand-primary/20">
      <div className="flex items-center">
        <button
          onClick={() => router.back()}
          aria-label="Kembali"
          className="p-2 rounded-md bg-black/40 hover:bg-black/50 text-white"
        >
          {/* simple left chevron icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 15.707a1 1 0 01-1.414 0L6.586 11l4.707-4.707a1 1 0 011.414 1.414L9.414 11l3.293 3.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className="flex-1 px-4 md:px-8">
        <div className="max-w-xl mx-auto">
          <label htmlFor="search" className="sr-only">Cari mahasiswa</label>
          <input
            id="search"
            type="search"
            value={query}
            onChange={(e) => { setQuery(e.target.value); onSearch(e.target.value) }}
            placeholder="Cari mahasiswa..."
            className="w-full rounded-md py-2 px-3 bg-white/10 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          />
        </div>
      </div>

      <div className="flex items-center">
        <button className="p-2 rounded-md bg-black/40 hover:bg-black/50 text-white" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </header>
  )
}
