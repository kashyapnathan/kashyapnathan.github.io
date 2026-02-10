import { movies } from '../data/movies'

export default function Movies() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {movies.map((movie) => (
        <a
          key={movie.title}
          href={movie.imdbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-baseline justify-between rounded-lg border border-cream-dark bg-cream-dark px-5 py-4 hover:border-gray-300 hover:shadow-sm transition-all"
        >
          <span className="font-medium text-gray-900 group-hover:text-indigo-600 transition-colors">
            {movie.title}
          </span>
          <span className="text-xs text-gray-400 group-hover:text-indigo-500 transition-colors">
            IMDB &rarr;
          </span>
        </a>
      ))}
    </div>
  )
}
