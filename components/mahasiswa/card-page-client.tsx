"use client"

import { useState, useMemo } from "react"
import CardPageNavbar from "@/components/ui/card-page-navbar"
import { STUDENTS } from "@/lib/students"
import ProfileCard from "./profile-card"

export default function CardPageClient({ title }: { title: string }) {
  const [query, setQuery] = useState("")

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return STUDENTS
    return STUDENTS.filter((s) => s.name.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="relative min-h-screen">
      <CardPageNavbar onSearch={setQuery} />

  <section className="mx-auto px-4 md:px-8 lg:px-0 pt-28 pb-16">
        <h1 className="text-3xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-white/50 mb-6">Cari mahasiswa berdasarkan nama. Hasil akan ditampilkan di bawah.</p>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center justify-items-center">
          {results.map((s) => {
            const student: any = s as any
            const avatar = student.avatar ?? '/avatar/default.jpg'
            const mini = '/logo/instagram.png'

            return (
              
                <div key={s.id} className="p-2 flex justify-center">
                  <ProfileCard
                    avatarUrl={avatar}
                    miniAvatarUrl={mini}
                    handle={s.handle}
                    name={s.name}
                    title={s.program}
                    contactText={'Follow'}
                    className="max-w-[360px] w-full sm:w-[360px]"
                    showUserInfo={true}
                    showBehindGradient={true}
                    behindGradient={'radial-gradient(circle at 20% 20%, rgba(0,255,200,0.15) 0%, rgba(0,0,0,0) 40%), radial-gradient(circle at 80% 80%, rgba(112,69,255,0.12) 0%, rgba(0,0,0,0) 50%)'}
                    innerGradient={'linear-gradient(180deg, rgba(10,10,30,0.6) 0%, rgba(5,5,15,0.85) 100%)'}
                  />
                </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}


