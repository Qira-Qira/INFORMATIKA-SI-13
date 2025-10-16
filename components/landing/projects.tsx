

export default function projects(){
    return(
        <>
        <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-3xl md:text-5xl font-semibold text-balance">
                      Selected Work
                      <span className="ml-2 text-brand-accent">— Neon</span>
                    </h2>
                    
                      <Button className="bg-brand-primary text-black hover:bg-brand-primary/90 neon-border-sm">Contact</Button>
                  
                  </div>
        
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        title: "Interactive Product Launch",
                        desc: "3D hero with scroll-driven narrative and reactive materials.",
                        tag: "3D / R3F",
                        img: "/3d-interactive-product-launch.jpg",
                      },
                      {
                        title: "Neon Portfolio",
                        desc: "Motion-first personal site with neon glow systems and a11y.",
                        tag: "Next.js",
                        img: "/neon-portfolio-design.jpg",
                      },
                      {
                        title: "Immersive Data Story",
                        desc: "Layered charts + parallax storytelling with performant scrolling.",
                        tag: "Motion / Data",
                        img: "/immersive-data-story.jpg",
                      },
                    ].map((p) => (
                      <ProjectCard key={p.title} title={p.title} description={p.desc} tag={p.tag} imageSrc={p.img} />
                    ))}
                  </div>
                </section>
        
        </>
    )
}