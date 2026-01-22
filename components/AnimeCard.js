import Link from "next/link"

export default function AnimeCard({ title, image, type }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <span className="text-xs text-gold font-semibold uppercase">
          {type}
        </span>
        <h3 className="text-lg font-bold mt-1">
          {title}
        </h3>

        <Link href="/watch/1">
          <button className="mt-4 w-full border border-gold text-gold hover:bg-gold hover:text-white py-2 rounded-xl">
            Nonton
          </button>
        </Link>
      </div>

    </div>
  )
}
