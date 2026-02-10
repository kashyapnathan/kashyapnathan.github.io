import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Readings from './components/Readings'
import Movies from './components/Movies'
import Songs from './components/Songs'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-gray-900">
      <Navbar />
      <Hero />

      <Section id="about" title="About" description="I'm from Philly (go birds). I went to Georgia Tech in Atlanta (on leave) where I studied computer science and DJ'd on the weekends.">
        <About />
      </Section>

      <Section id="experience" title="Experience" description="Some of the companies I've worked at - was also a 2025 Greylock Fellow">
        <Experience />
      </Section>

      <Section id="projects" title="Projects" description="Things I've built and learned from.">
        <Projects />
      </Section>

      <Section id="readings" title="Readings" description="Books I liked.">
        <Readings />
      </Section>

      <Section id="movies" title="Movies" description="Films I keep coming back to.">
        <Movies />
      </Section>

      <Section id="songs" title="Songs" description="Spotify playlists on rotation.">
        <Songs />
      </Section>

      <Footer />
    </div>
  )
}
