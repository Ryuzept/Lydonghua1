import { useRouter } from "next/router"
import Link from "next/link"
import animeData from "../../data/animeData"

export default function AnimeDetail() {
  const router = useRouter()
  const { id } = router.query

  const anime = animeData.find(a => a.id == id)

  if (!anime) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Anime tidak ditemukan
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white text-dark px-6 py-8">

      {/* Header */}
      <h1 className="text-3xl font-extrabold text-gold mb-6">
        {anime.title}
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        {/* Poster */}
        <div>
          <img
            src={anime.image}
            alt={anime.title}
            className="rounded-2xl shadow-xl"
          />
        </div>

        {/* Info */}
        <div className="md:col-span-2">

          <div className="flex gap-4 mb-4">
            <span className="px-4 py-1 border border-gold text-gold rounded-full">
              {anime.type}
            </span>
            <span className="px-4 py-1 border border-gold text-gold rounded-full">
              {anime.genre}
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            Ini adalah sinopsis dari <b>{anime.title}</b>.  
            Nanti kamu bisa ganti dengan sinopsis asli dari API.
          </p>

          <Link href={`/watch/${anime.id}`}>
            <button className="bg-gold hover:bg-golddark text-white px-8 py-3 rounded-xl shadow-lg">
              ▶ Mulai Nonton
            </button>
          </Link>

        </div>
      </div>

      {/* Episode List */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">
          Daftar Episode
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {[1,2,3,4,5,6].map(ep => (
            <Link key={ep} href={`/watch/${anime.id}`}>
              <button className="border border-gold text-gold py-2 rounded-xl hover:bg-gold hover:text-white transition">
                Ep {ep}
              </button>
            </Link>
          ))}
        </div>
      </div>

    </div>
  )
              }
