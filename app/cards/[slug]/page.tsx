import { notFound } from 'next/navigation'

interface Params {
  params: { slug: string }
}

const CARDS = [
  { slug: 'profil-mahasiswa', title: 'Profil Mahasiswa', body: 'Detail profil mahasiswa...' },
  { slug: 'lomba', title: 'Lomba', body: 'Detail lomba dan prestasi...' },
  { slug: 'vision-informatika', title: 'Vision Informatika', body: 'Visi dan misi departemen Informatika.' },
]

export default function CardPage({ params }: Params) {
  const { slug } = params
  const card = CARDS.find((c) => c.slug === slug)

  if (!card) return notFound()

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">{card.title}</h1>
      <p className="text-lg text-brand-fg/80">{card.body}</p>

      <div className="mt-8">
        <a href="/" className="text-sm text-brand-primary underline">Kembali ke beranda</a>
      </div>
    </main>
  )
}
