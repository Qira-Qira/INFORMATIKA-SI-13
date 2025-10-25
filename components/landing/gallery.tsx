import DomeGallery from "../ui/DomeGallery"


export default function gallery() {
  return (
    <>
      <section id="gallery" className="px-0 py-8 sm:py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            Gallery
            <span className="ml-2 text-brand-primary">— Foto Random</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-brand-fg/80">Setiap Pertemuan Pasti ada Perpisahan, jadi abadikan moment itu dengan foto</p>
        </div>

        {/* Responsive gallery canvas wrapper. On mobile we limit height and show a tidy container; on desktop we allow taller display. */}
        <div className="mt-6">
          <div className="w-full mx-auto relative overflow-hidden">
            {/* Use responsive heights so the canvas doesn't force full viewport on mobile */}
            <div className="w-full h-[40vh] sm:h-[50vh] md:h-[70vh] lg:h-[80vh] max-h-[90vh]">
              <DomeGallery />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}