"use client"

import type React from "react"

import { useRef } from "react"
import Image from "next/image"
import { Card, CardHeader, CardContent, CardFooter } from "../../ui/card"

type Props = {
  title: string
  description: string
  tag: string
  imageSrc: string
}

export default function ProjectCard({ title, description, tag, imageSrc }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  function onMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rx = ((y - rect.height / 2) / rect.height) * -8
    const ry = ((x - rect.width / 2) / rect.width) * 8
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
  }

  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = `rotateX(0deg) rotateY(0deg) translateZ(0)`
  }

  return (
    <Card className="group overflow-hidden bg-brand-muted/60 border border-brand-primary/20 neon-border">
      <div ref={ref} className="transition-transform will-change-transform" onMouseMove={onMove} onMouseLeave={onLeave}>
        <div className="relative w-full aspect-[4/3] bg-brand-muted">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={false}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20" />
        </div>

        <CardHeader className="pb-2">
          <div className="text-xs uppercase tracking-wide text-brand-accent">{tag}</div>
          <div className="mt-1 text-lg font-semibold">{title}</div>
        </CardHeader>
        <CardContent className="text-brand-fg/80">{description}</CardContent>
        <CardFooter className="pt-0">
          <div className="text-sm text-brand-primary">View case study →</div>
        </CardFooter>
      </div>
    </Card>
  )
}
