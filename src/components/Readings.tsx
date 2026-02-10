import { books } from '../data/readings'

export default function Readings() {
  return (
    <div className="space-y-4">
      {books.map((book) => (
        <div
          key={book.title}
          className="py-3 border-b border-gray-50 last:border-0"
        >
          <span className="font-medium text-gray-900">{book.title}</span>
          <span className="ml-2 text-sm text-gray-400">{book.author}</span>
        </div>
      ))}
    </div>
  )
}
