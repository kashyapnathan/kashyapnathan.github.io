import { interests } from '../data/about'

export default function About() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {interests.map((item) => (
        <div
          key={item.title}
          className="group rounded-xl border border-cream-dark bg-cream-dark p-5 hover:border-gray-300 hover:shadow-sm transition-all"
        >
          <h3 className="font-medium text-gray-900">{item.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{item.subtitle}</p>
          {item.link ? (
            <a
              href={item.link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-indigo-600 hover:text-indigo-700"
            >
              {item.detail} &rarr;
            </a>
          ) : (
            <p className="mt-3 text-sm text-gray-400">{item.detail}</p>
          )}
        </div>
      ))}
    </div>
  )
}
