import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  title: string
  description?: string
  children: ReactNode
}

export default function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="py-16 px-6 scroll-mt-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight font-serif">{title}</h2>
        {description && (
          <p className="mt-2 text-gray-500">{description}</p>
        )}
        <div className="mt-8">{children}</div>
      </div>
    </section>
  )
}
