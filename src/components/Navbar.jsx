
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#09090f]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Chandru
          </span>
          <span className="text-white">.dev</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="mailto:chandruk1307@gmail.com"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-violet-200 md:inline-flex"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="text-white md:hidden"
        >
{menuOpen ? '✕' : '☰'}        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-[#09090f] px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-gray-300 transition hover:text-violet-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

export default Navbar
