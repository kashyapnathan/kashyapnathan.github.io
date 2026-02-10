export interface Interest {
  title: string
  subtitle: string
  detail: string
  link?: { url: string; label: string }
}

export const interests: Interest[] = [
  {
    title: 'Running',
    subtitle: 'Strava',
    detail: 'Follow me on Strava',
    link: { url: 'https://www.strava.com/athletes/98725683', label: 'Strava' },
  },
  {
    title: 'Music',
    subtitle: 'Love UKG, techno, and whatever Kettama is playing',
    detail: 'Follow me on Spotify',
    link: {
      url: 'https://open.spotify.com/user/kashyapnathan2?si=73465f495e81460c',
      label: 'Spotify',
    },
  },
  {
    title: 'Skiing',
    subtitle: 'Do you have an Ikon pass? Are you single?',
    detail: 'Do not rest your snowboard on my skis',
  },
  {
    title: 'Cooking & Eating',
    subtitle: 'Been cooking since 6th grade',
    detail: 'Follow my Beli',
    link: { url: 'https://beliapp.co/app/kashnthn', label: 'Beli' },
  },
]
