import AnimeCard from '../components/AnimeCard'

export default function Home() {
  const animeList = [
    { id: 1, title: 'Tanah Jiwa', type: 'Donghua', image: '/placeholder.png' },
    { id: 2, title: 'Pertempuran Menembus Langit', type: 'Donghua', image: '/placeholder.png' },
    { id: 3, title: 'Naruto Shippuden', type: 'Anime', image: '/placeholder.png' },
    { id: 4, title: 'Satu Potongan', type: 'Anime', image: '/placeholder.png' },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="px-6 py-4 border-b">
        <h1 className="text-2xl font-bold text-yellow-600">Lydonghua</h1>
      </header>

      <main className="px-6 py-8">
        <input
          placeholder="Cari anime atau donghua..."
          className="w-full border px-4 py-2 rounded mb-6"
        />

        <div className="grid grid-cols-2 gap-4">
          {animeList.map((anime) => (
            <AnimeCard key={anime.id} {...anime} />
          ))}
        </div>
      </main>
    </div>
  )
}
