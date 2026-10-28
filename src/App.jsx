
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Education from './sections/Education'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />

      <Footer />
    </main>
  )
}

export default App
