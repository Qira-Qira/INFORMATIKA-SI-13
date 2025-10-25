import SiteHeader from "@/components/landing/site-header"
import Hero from "@/components/landing/hero"
import Gallery from "@/components/landing/gallery"
import Community from "@/components/landing/community"
import Particles from "../ui/Particles"



export default function home() {
    return (
        <>
          <div className="min-h-screen bg-brand text-brand-fg relative overflow-hidden">

            {/* Particles background: absolutely positioned and behind all content */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <Particles
                particleColors={["#ffffff", "#ffffff"]}
                particleCount={800}
                particleSpread={10}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
              />
            </div>
            <div className="relative z-10">
              <SiteHeader />

              {/* HERO (static) */}
              <Hero/>

              {/* GALLERY */}
              <Gallery/>

              {/* Community */}
              <Community/>
            </div>
        </div>
        </>
    )
}