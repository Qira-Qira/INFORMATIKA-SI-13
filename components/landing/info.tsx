"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion } from 'motion/react'
import ScrollFloat from "../ui/ScrollFloat"
import ScrollReveal from "../ui/ScrollReveal"
import CountUp from '@/components/ui/CountUp'
import { Users, Award, Eye } from 'lucide-react'


export default function about() {
  return (
    <>
      <section id="about" className="container mx-auto px-4 py-16 md:py-24">


        <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
          textClassName="font-semibold text-balance neon-glow-primary"
        >
          Informasi
        </ScrollFloat>

        <br />

        <ScrollReveal
          baseOpacity={0}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
          textClassName=""

        >
          Informasi lebih lanjut mengenai Mahasiswa, Lomba, dan Vision Bisa dilihat dibawah ini
        </ScrollReveal>



  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {[
            {
              title: "56",
              body: "Profil Mahasiswa",
              slug: "profil-mahasiswa",
              icon: Users
            },
            {
              title: "0",
              body: "Lomba",
              slug: "lomba",
              icon: Award
            },
            {
              title: "4",
              body: "Vision Informatika",
              slug: "vision-informatika",
              icon: Eye
            }
          ].map((card, index) => (
            <Link key={card.slug} href={`/cards/${card.slug}`} className="block">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
                className="w-full h-full"
              >
                <Card
                  className={cn(
                    "h-full bg-brand-muted/60 border border-brand-primary/30 neon-border hover:scale-[1.01] transition-transform",
                  )}
                >
                  <CardContent className="p-6 h-full flex flex-col items-center justify-center text-center">
                    <div className="flex flex-col items-center">
                      <div className="p-3 bg-brand-primary/10 rounded-full mb-3">
                        <card.icon className="w-8 h-8 text-brand-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-brand-primary">
                        <CountUp
                          to={Number(card.title)}
                          from={0}
                          duration={1.6}
                          className="inline-block"
                          repeat={true}
                        />
                      </h3>
                    </div>
                    <p className="mt-2 text-brand-fg/80">{card.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

    </>
  )
}