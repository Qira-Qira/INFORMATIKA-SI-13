import SiteHeader from "@/components/landing/site-header"
import Hero from "@/components/landing/hero"
import About from "@/components/landing/about"
import Gallery from "@/components/landing/gallery"
import Credit from "@/components/landing/credit"



export default function home() {
    return (
        <>
           <div className="min-h-screen bg-brand text-brand-fg">
      <SiteHeader />
      
        {/* HERO (static) */}
       <Hero/>

        {/* ABOUT / CARDS */}
       <About/>
       
        {/* PROJECTS optional */}
        
        {/* GALLERY */}
        <Gallery/>
        
        {/* CREDIT */}
        <Credit/>
        </div>
        </>
    )
}