import AnimeCard from '../components/AnimeCard'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-dark">

      {/* Navbar */}
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <h1 className="text-2xl font-bold text-gold">
          Lydonghua
        </h1>
        <nav className="space-x-4 text-sm">
          <span className="hover:text-gold cursor-pointer">Home</span>
          <span className="hover:text-gold cursor-pointer">Anime</span>
          <span className="hover:text-gold cursor-pointer">Donghua</span>
        </nav>
      </header>

      {/* Section */}
      <main className="px-6 mt-10">

        <h2 className="text-3xl font-extrabold mb-6">
          Popular Donghua
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimeCard
            title="Soul Land"
            type="Donghua"
            image="https://i.imgur.com/6Xy0YqR.jpg"
          />
          <AnimeCard
            title="Battle Through The Heavens"
            type="Donghua"
            image="https://i.imgur.com/WvT0m0C.jpg"
          />
          <AnimeCard
            title="Naruto Shippuden"
            type="Anime"
            image="https://i.imgur.com/z5Q7GkG.jpg"
          />
          <AnimeCard
            title="One Piece"
            type="Anime"
            image="https://i.imgur.com/J5LVHEL.jpg"
          />
        </div>

      </main>

    </div>
  )
              }
