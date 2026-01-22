export default function Home() {
  return (
    <div className="min-h-screen bg-white text-dark">

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

      <main className="text-center mt-24 px-4">
        <h2 className="text-4xl font-extrabold mb-4">
          Stream Anime & Donghua
        </h2>
        <p className="text-gray-600 mb-6">
          Elegan • Cepat • Berkualitas
        </p>
        <button className="bg-gold hover:bg-golddark text-white px-8 py-3 rounded-xl shadow-lg">
          Mulai Nonton
        </button>
      </main>

    </div>
  )
}
