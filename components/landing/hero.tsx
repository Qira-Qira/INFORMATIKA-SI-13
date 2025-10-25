"use client"

import TextType from "@/components/ui/TextType"
import TrueFocus from "@/components/ui/TrueFocus"
import Link from "next/link"

import LightRays from "../ui/LightRays"

export default function hero() {
  return (
    <>
  <section className="relative w-full min-h-[80vh] md:h-screen grid place-items-center bg-cover bg-center">
  {/* overlay: above the background image but below the rays */}
  <div className="absolute inset-0 z-0 pointer-events-none" />
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          // position absolutely to avoid affecting document flow and sit behind content
          // use z-0 so it's not pushed behind page backgrounds; hero content will get z-10
          className="absolute inset-0 z-10 custom-rays"
        />

        <div className="text-center px-4 sm:px-6 lg:px-8 relative z-20 max-w-4xl mx-auto">
          <h1>
            <TextType
              text={["Informatika", "Bersama","Kita Bisa","Sampean JOS"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              deletingSpeed={10}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-balance relative font-extrabold"
            />
          </h1>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/cards/profil-mahasiswa"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-black shadow-md hover:brightness-110 neon-border-sm transition"
              aria-label="Profil Mahasiswa"
            >
              Profil Mahasiswa
            </Link>

            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('community')
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-2 text-sm font-semibold text-white hover:bg-white/5 transition"
              aria-label="Go to gallery"
            >
              Join Community
            </button>
          </div>

        </div>
      </section>
    </>
  )
}