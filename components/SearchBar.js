export default function SearchBar({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Cari anime atau donghua..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full md:w-1/2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-gold"
    />
  )
}
