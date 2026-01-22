import { useRouter } from "next/router"

export default function WatchPage() {
  const router = useRouter()
  const { id } = router.query

  // Dummy data episode
  const episodes = [
    {
      episode: 1,
      title: "Episode 1",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
    },
    {
      episode: 2,
      title: "Episode 2",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID"
    }
  ]

  return (
    <div className="min-h-screen bg-white text-black dark:bg-dark dark:text-white px-4 py-6">

      <h1 className="text-2xl font-bold text-gold mb-4">
        Lydonghua • Episode {id}
      </h1>

      {/* Video Player */}
      <div className="w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src={episodes[0].videoUrl}
          title="Video Player"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      {/* Episode List */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-3">
          Daftar Episode
        </h2>

        <div className="grid grid-cols-3 gap-3">
          {episodes.map((ep) => (
            <button
