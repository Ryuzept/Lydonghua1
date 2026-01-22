import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { useState } from "react"
import AnimeCard from "../components/AnimeCard"
import SearchBar from "../components/SearchBar"
import GenreFilter from "../components/GenreFilter"
import animeData from "../data/animeData"

export default function Home() {
  const [search, setSearch] = useState("")
  const [genre, setGenre] = useState("All")
  const { dark, toggleTheme } = useContext(ThemeContext)

  const genres = ["All", ...new Set(animeData.map(a => a.genre))]

  const filteredAnime = animeData.filter((anime) => {
    const matchSearch = anime.title.toLowerCase().includes(search.toLowerCase())
    const matchGenre = genre === "All" || anime.genre === genre
    return matchSearch && matchGenre
  })

  return (
    <div className="min-h-screen bg-white text-black dark:bg-dark dark:text-white">

      {/* Navbar */}
      <header className="px-6 py-4 border-b bg-white dark:bg-dark">
  <h1 className="text-2xl font-bold text-gold">
    DARK MODE TEST
  </h1>
</header>
    Lydonghua
  </h1>

  <button
    onClick={toggleTheme}
    className="border border-gold px-4 py-2 rounded-xl text-gold hover:bg-gold hover:text-white transition"
  >
    {dark ? "☀️ Light" : "🌙 Dark"}
  </button>
</header>

      {/* Search & Filter */}
      <main className="px-6 mt-8">

        <SearchBar value={search} onChange={setSearch} />
        <GenreFilter
          genres={genres}
          selected={genre}
          onSelect={setGenre}
        />

        {/* Grid */}
        <div className="min-h-screen bg-white text-dark dark:bg-dark dark:text-white">
          {filteredAnime.map((anime) => (
            <AnimeCard
              key={anime.id}
              id={anime.id}
              title={anime.title}
              type={anime.type}
              image={anime.image}
            />
          ))}
        </div>

        {filteredAnime.length === 0 && (
          <p className="text-center mt-10 text-gray-500">
            Anime tidak ditemukan
          </p>
        )}

      </main>
    </div>
  )
            }
