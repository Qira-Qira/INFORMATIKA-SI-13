"use client"

import Image from "next/image"
import { useMemo } from "react"

type Props = {
  images: string[]
  rows?: number
  speedMsPerRow?: number // optional speed per row
}

export default function GalleryCarousel({ images, rows = 2, speedMsPerRow = 30000 }: Props) {
  const perRow = Math.ceil(images.length / rows)
  const slices = useMemo(() => {
    const s: string[][] = []
    for (let i = 0; i < rows; i++) {
      s.push(images.slice(i * perRow, i * perRow + perRow))
    }
    return s
  }, [images, perRow, rows])

  return (
    <div className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-brand to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand to-transparent" />

      <div className="flex flex-col gap-6 py-6">
        {slices.map((row, idx) => {
          const dir = idx % 2 === 0 ? "left" : "right"
          const duration = speedMsPerRow + idx * 3000
          return (
            <div
              key={idx}
              className={`carousel-row ${dir === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
              style={{ animationDuration: `${duration}ms` }}
            >
              {[...row, ...row].map((src, i) => (
                <div key={`${src}-${i}`} className="mx-3">
                  <div className="relative w-[160px] md:w-[220px] aspect-[3/4] rounded-lg overflow-hidden bg-brand-muted neon-border-sm">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Portrait ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 160px, 220px"
                      priority={i < 4}
                    />
                  </div>
                </div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}
