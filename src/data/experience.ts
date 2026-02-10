export interface Experience {
  company: string
  role: string
  description: string
  logo: string
  logoClass?: string
  url?: string
}

export const experiences: Experience[] = [
  {
    company: 'Meridian',
    role: 'Co-founder & CEO',
    description: 'The AI workspace for consulting teams (a16z backed)',
    logo: '/Meridian SS.png',
    logoClass: 'w-12 h-12',
    url: 'https://trymeridian.dev/',
  },
  {
    company: 'OpenAI',
    role: 'Member of Technical Staff Intern',
    description: 'Worked on contextual answers for ChatGPT for Gov + Infra stuff',
    logo: '/logos/openai.svg',
  },
  {
    company: 'Palantir',
    role: 'Forward Deployed Engineer Intern',
    description: 'Built automated diligence systems for ABS traders at a PE firm as an FDSE',
    logo: '/logos/palantir.svg',
  },
  {
    company: 'Amazon',
    role: 'SWE Intern',
    description: 'AWS Global Infrastructure',
    logo: '/logos/aws.svg',
  },
  {
    company: 'DARPA',
    role: 'ML Researcher',
    description: 'Collaborative Knowledge Curation',
    logo: '/logos/darpa.svg',
    logoClass: 'w-12 h-12',
  },
]
