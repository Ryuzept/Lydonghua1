export default function AnimeCard({ title, image, type }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs text-gold font-semibold uppercase">
          {type}
        </span>
        <h3 className="text-lg font-bold mt-1">
          {title}
        </h3>

        <button className="mt-4 w-full border border-gold text-gold hover:bg-gold hover:text-white transition py-2 rounded-xl">
          Lihat Detail
        </button>
      </div>
    </div>
  )
}
