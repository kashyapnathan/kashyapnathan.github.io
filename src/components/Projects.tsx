import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <div
          key={project.name}
          className="rounded-xl border border-cream-dark bg-cream-dark p-5 hover:border-gray-300 hover:shadow-sm transition-all"
        >
          <h3 className="font-medium text-gray-900">{project.name}</h3>
          <p className="mt-2 text-sm text-gray-500">{project.description}</p>
        </div>
      ))}
    </div>
  )
}
