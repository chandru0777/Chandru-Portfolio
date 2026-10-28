
import { motion } from 'framer-motion'
const Github = () => <span>GH</span>
const Linkedin = () => <span>in</span>
const Mail = () => <span>✉</span>
const ArrowRight = () => <span>→</span>
const ArrowDown = () => <span>↓</span>

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/chandru0777',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/chandru-k-26865735a',
    icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:chandruk1307@gmail.com',
    icon: Mail,
  },
]

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8"
    >
      {/* Background glow effects */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-10 h-72 w-72 rounded-full bg-pink-600/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for opportunities
          </div>

          <p className="mb-3 text-lg text-gray-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            Chandru K
            <span className="mt-2 block bg-gradient-to-r from-violet-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I build responsive web applications using React, Node.js,
            Express.js, and MongoDB. I enjoy creating clean user interfaces
            and connecting them with reliable backend services.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3.5 font-semibold transition hover:scale-105 hover:shadow-lg hover:shadow-violet-500/20"
            >
              Explore My Work <ArrowRight size={18} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 font-semibold text-gray-200 transition hover:border-violet-400 hover:text-violet-300"
            >
              Contact Me <ArrowDown size={18} />
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={label !== 'Email' ? '_blank' : undefined}
                rel={label !== 'Email' ? 'noreferrer' : undefined}
                className="rounded-full border border-white/10 bg-white/5 p-3 text-gray-400 transition hover:border-violet-400/50 hover:text-violet-300"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Developer code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 25 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-violet-600/40 to-pink-500/40 opacity-50 blur-2xl" />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#11111b] shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-sm text-gray-500">
                developer.js
              </span>
            </div>

            <div className="overflow-x-auto p-6 font-mono text-sm leading-8 sm:p-8 sm:text-base">
              <p className="text-gray-500">// A little about me</p>
              <p>
                <span className="text-pink-400">const</span>{' '}
                <span className="text-violet-300">developer</span> = {'{'}
              </p>
              <p className="pl-5">
                <span className="text-sky-300">name</span>:{' '}
                <span className="text-green-300">'Chandru K'</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">role</span>:{' '}
                <span className="text-green-300">'MERN Developer'</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">frontend</span>:{' '}
                <span className="text-green-300">'React.js'</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">backend</span>:{' '}
                <span className="text-green-300">'Node.js'</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">database</span>:{' '}
                <span className="text-green-300">'MongoDB'</span>,
              </p>
              <p className="pl-5">
                <span className="text-sky-300">passion</span>:{' '}
                <span className="text-green-300">'Building things'</span>
              </p>
              <p>{'}'}</p>
              <p className="mt-4 text-gray-500">
                // Turning ideas into applications
              </p>
              <p>
                <span className="text-violet-300">developer</span>.
                <span className="text-sky-300">build</span>()
                <span className="animate-pulse text-pink-400">_</span>
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-xs text-gray-500">
              <span>JavaScript · React · Node.js</span>
              <span className="text-green-400">● Ready to build</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
