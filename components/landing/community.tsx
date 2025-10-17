"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Button from "@/components/ui/button"


export default function credit(){
  const [active, setActive] = useState<'discord'|'instagram'|'tiktok'>('discord')
  return(
    <>
        <section id="cta" className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-extrabold neon-glow-primary">IF SI 13 Community</h2>
            <p className="mt-2 text-brand-fg/80">Bergabunglah dengan komunitas kami untuk terhubung, menjelajahi, dan membentuk masa depan Informatika</p>
            <motion.div className="mt-4 flex items-center justify-center gap-3" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <motion.button
                onClick={() => setActive('discord')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${active === 'discord' ? 'bg-white text-indigo-400' : 'bg-white/6 text-brand-fg'}`}>
                <img src="/logo/discord.png" alt="Discord" className="w-4 h-4 object-contain" />
                <span>Discord</span>
              </motion.button>
              <motion.button
                onClick={() => setActive('instagram')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${active === 'instagram' ? 'bg-white text-pink-600' : 'bg-white/6 text-brand-fg'}`}>
                  <img src="/logo/instagram.png" alt="instagram" className="w-4 h-4 object-contain" />
               <span>Instagram</span> 
              </motion.button>
              <motion.button
                onClick={() => setActive('tiktok')}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${active === 'tiktok' ? 'bg-white text-black' : 'bg-white/6 text-brand-fg'}`}>
                  <img src="/logo/tiktok.png" alt="TikTok" className="w-4 h-4 object-contain" />
                <span>Tiktok</span> 
              </motion.button>
            </motion.div>
          </div>
          <div className="rounded-xl p-6 md:p-10 bg-brand-muted/60 border border-brand-primary/20 neon-border backdrop-blur-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start md:items-center">
              {/* Left column: text + CTA */}
              <div className="md:col-span-2 p-4">
                <AnimatePresence mode="wait">
                  {active === 'discord' && (
                    <motion.div key="discord" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
                      <h3 className="text-2xl md:text-4xl font-semibold text-balance">Gabung komunitas Discord</h3>
                      <p className="mt-3 text-brand-fg/80 max-w-2xl">Satu server, seribu cerita angkatan. </p>
                      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <a
                          href="https://discord.com/invite/tnmxwJAkEp"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm bg-indigo-400 text-white hover:bg-indigo-400 neon-border-sm w-full sm:w-auto"
                        >
                          Join Discord
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {active === 'instagram' && (
                    <motion.div key="instagram" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
                      <h3 className="text-2xl md:text-4xl font-semibold text-balance">Follow kita di Instagram</h3>
                      <p className="mt-3 text-brand-fg/80 max-w-2xl">Satu angkatan, satu cerita, satu feed.</p>
                      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <a
                          href="https://instagram.com/your-instagram"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm bg-pink-600 text-white hover:bg-white hover:text-pink-600 neon-border-sm w-full sm:w-auto"
                        >
                          Follow Instagram IF - A
                        </a>
                        <a
                          href="https://www.instagram.com/codeverse1b?utm_source=ig_web_button_share_sheet&igsh=MWptZW92MzJhbnpnNw=="
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm bg-transparent border border-white/10 text-brand-fg/80 hover:bg-white/6 w-full sm:w-auto"
                        >
                          Follow Instagram IF - B
                        </a>
                      </div>
                    </motion.div>
                  )}

                  {active === 'tiktok' && (
                    <motion.div key="tiktok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
                      <h3 className="text-2xl md:text-4xl font-semibold text-balance">Follow kita di TikTok</h3>
                      <p className="mt-3 text-brand-fg/80 max-w-2xl">Satu angkatan, satu algoritma TikTok.</p>
                      <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        <a
                          href=""
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm bg-white text-black hover:bg-black hover:text-white neon-border-sm w-full sm:w-auto"
                        >
                          Follow on TikTok
                        </a>
                        <a
                          href="#"
                          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm bg-transparent border border-white/10 text-brand-fg/80 hover:bg-white/6 w-full sm:w-auto"
                        >
                          Kita punya tiktok buat satu angkatan tidak?
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      

      <footer className="container mx-auto px-4 py-10 text-sm text-brand-fg/70 text-center">
        © {new Date().getFullYear()} Created by Divisi Informatika SI 13
      </footer>
    

        </>
    )
}