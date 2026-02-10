import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <div className="space-y-6">
      {experiences.map((exp) => (
        <div key={exp.company} className="flex gap-4">
          <img src={exp.logo} alt={exp.company} className="w-8 h-8 rounded-md object-contain shrink-0 mt-0.5" />
          <div>
            <div className="flex flex-wrap items-baseline gap-x-2">
              {exp.url ? (
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  {exp.company}
                </a>
              ) : (
                <span className="font-medium text-gray-900">{exp.company}</span>
              )}
              <span className="text-sm text-gray-400">{exp.role}</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
