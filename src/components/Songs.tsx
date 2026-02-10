import { playlists } from '../data/songs'

export default function Songs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {playlists.map((url) => (
        <iframe
          key={url}
          src={url}
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        />
      ))}
    </div>
  )
}
