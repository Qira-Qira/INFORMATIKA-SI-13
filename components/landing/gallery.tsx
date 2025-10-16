import GalleryCarousel from "@/components/landing/lib/gallery-carousel"


export default function gallery(){
    return(
        <>
        <section id="gallery" className="px-0 py-16 md:py-24 bg-brand-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-semibold text-balance">
              Gallery
              <span className="ml-2 text-brand-primary">— Foto Random</span>
            </h2>
            <p className="mt-3 text-brand-fg/80">Setiap Pertemuan Pasti ada Perpisahan, jadi abadikan moment itu dengan foto</p>
          </div>
          <div className="mt-8">
            <GalleryCarousel
              rows={2}
              images={[
                "/portrait-neon-01.jpg",
                "/portrait-neon-02.jpg",
                "/portrait-neon-03.jpg",
                "/portrait-neon-04.jpg",
                "/portrait-neon-05.jpg",
                "/portrait-neon-06.jpg",
                "/portrait-neon-07.jpg",
                "/portrait-neon-08.jpg",
                "/portrait-neon-09.jpg",
                "/portrait-neon-10.jpg",
                "/portrait-neon-11.jpg",
                "/portrait-neon-12.jpg",
              ]}
            />
          </div>
        </section>

        
        </>
    )
}