"use client"

import { useState } from 'react'
import Button from "@/components/ui/button"


export default function credit(){
  const [active, setActive] = useState<'discord'|'whatsapp'|'tiktok'>('discord')
  return(
    <>
        <section id="cta" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-accent">Server Community</h2>
            <p className="mt-2 text-brand-fg/80">Join our community to connect, explore, and shape the future of MafiaPS!</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => setActive('discord')}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${active === 'discord' ? 'bg-indigo-400 text-white' : 'bg-white/6 text-brand-fg'}`}>
                <img src="/logo/discord.png" alt="Discord" className="w-4 h-4 object-contain" />
                <span>Discord</span>
              </button>
              <button
                onClick={() => setActive('whatsapp')}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${active === 'whatsapp' ? 'bg-pink-600 text-white' : 'bg-white/6 text-brand-fg'}`}>
                  <img src="/logo/instagram.png" alt="WhatsApp" className="w-4 h-4 object-contain" />
               <span>Instagram A</span> 
              </button>
              <button
                onClick={() => setActive('tiktok')}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${active === 'tiktok' ? 'bg-pink-600 text-white' : 'bg-white/6 text-brand-fg'}`}>
                  <img src="/logo/instagram.png" alt="TikTok" className="w-4 h-4 object-contain" />
                <span>Instagram B</span> 
              </button>
            </div>
          </div>
          <div className="rounded-xl p-6 md:p-10 bg-brand-muted/60 border border-brand-primary/20 neon-border backdrop-blur-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Left column: text + CTA */}
              <div className="md:col-span-2 p-4">
                {active === 'discord' && (
                  <>
                    <h3 className="text-2xl md:text-4xl font-semibold text-balance">Join Our Discord Community</h3>
                    <p className="mt-3 text-brand-fg/80 max-w-2xl">Connect with other players, get support, and stay updated with all the latest news and events! Our community is growing every day — join now to participate in events and meet other players worldwide.</p>
                    <div className="mt-6 flex items-center gap-3">
                      <Button className="bg-indigo-400 text-white hover:bg-indigo-400 neon-border-sm">Join Discord</Button>
                    </div>
                  </>
                )}

                {active === 'whatsapp' && (
                  <>
                    <h3 className="text-2xl md:text-4xl font-semibold text-balance">Join Our WhatsApp Community</h3>
                    <p className="mt-3 text-brand-fg/80 max-w-2xl">Get quick updates and chat with community members directly on WhatsApp. Perfect for announcements and short discussions.</p>
                    <div className="mt-6 flex items-center gap-3">
                      <Button className="bg-pink-600 text-white hover:bg-pink-600 neon-border-sm">Join WhatsApp</Button>
                      <Button className="bg-transparent border border-white/10 text-brand-fg/80 hover:bg-white/6">Learn More</Button>
                    </div>
                  </>
                )}

                {active === 'tiktok' && (
                  <>
                    <h3 className="text-2xl md:text-4xl font-semibold text-balance">Follow us on TikTok</h3>
                    <p className="mt-3 text-brand-fg/80 max-w-2xl">Short-form videos, highlights, and community clips — follow our TikTok for quick updates and fun content.</p>
                    <div className="mt-6 flex items-center gap-3">
                      <Button className="bg-pink-600 text-white hover:bg-pink-600 neon-border-sm">Follow on TikTok</Button>
                      <Button className="bg-transparent border border-white/10 text-brand-fg/80 hover:bg-white/6">Learn More</Button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      

      <footer className="container mx-auto px-4 py-10 text-sm text-brand-fg/70">
        © {new Date().getFullYear()} Created by Divisi Informatika SI 13
      </footer>
    

        </>
    )
}