export default function GenreFilter({ genres, selected, onSelect }) {
  return (
    <div className="flex gap-3 flex-wrap mt-4">
      {genres.map((genre) => (
        <button
          key={genre}
          onClick={() => onSelect(genre)}
          className={`px-4 py-2 rounded-full border transition
            ${selected === genre
              ? "bg-gold text-white border-gold"
              : "border-gold text-gold hover:bg-gold hover:text-white"}
          `}
        >
          {genre}
        </button>
      ))}
    </div>
  )
}
