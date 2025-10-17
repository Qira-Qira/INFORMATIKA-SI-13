"use client"

import TextType from "@/components/ui/TextType"
import TrueFocus from "@/components/ui/TrueFocus"

import LightRays from "../ui/LightRays"

export default function hero() {
  return (
    <>
    <section className="relative w-full h-screen grid place-items-center bg-[url('/hero/all-1.jpg')] bg-cover bg-center">
  {/* overlay: above the background image but below the rays */}
  <div className="absolute inset-0 bg-black/85 z-0 pointer-events-none" />
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
              text={["Selamat Datang di Informatika SI 13", "Melalui Teknologi","We Program We Develop", "Dengan Logika, Kami Menentukan Takdir Dunia Digital"]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              deletingSpeed={10}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-balance neon-glow-primary relative font-extrabold"
            />
          </h1>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-gray-200">
            <TrueFocus
              sentence="Bersama kita bisa Sampean JOS"
              manualMode={false}
              borderColor="neon-glow-primary"
              blurAmount={5}
              animationDuration={0.5}
              pauseBetweenAnimations={1}
            />
          </p>
        </div>
      </section>
    </>
  )
}