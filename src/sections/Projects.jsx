
import { motion } from 'framer-motion'

import shopeaseImage from '../assets/images/shopease.png'
import spotifyImage from '../assets/images/spotify.png'
import frostSwirlImage from '../assets/images/frost-swirl.png'

const projects = [
  {
    title: 'ShopEase',
    category: 'Full-Stack E-Commerce',
    description:
      'A multi-vendor e-commerce platform built with the MERN stack, featuring JWT authentication, role-based access control, and REST APIs.',
    image: shopeaseImage,
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
    ],
    demo: 'https://multi-tenant-ecommerce-alpha.vercel.app/',

    github: null,
    demoLabel: 'GitHub Repository',
  },
  {
    title: 'Spotify Clone',
    category: 'Music Streaming UI',
    description:
      'A Spotify-inspired music application with audio playback, progress tracking, responsive UI, and React-based navigation.',
    image: spotifyImage,
    technologies: [
      'React.js',
      'Tailwind CSS',
      'React Router',
      'Context API',
    ],
    github: null,
    demo: 'https://spotify-clone-five-theta-62.vercel.app/',
    demoLabel: 'Live Demo',
  },
  {
    title: 'Frost & Swirl',
    category: 'Ice Cream Website',
    description:
      'A mobile-responsive ice cream parlor website designed to present the brand and its products with an attractive interface.',
    image: frostSwirlImage,
    technologies: ['HTML', 'CSS', 'Responsive Design'],
    github: null,
    demo: 'https://chandru0777.github.io/frost-and-swirl/',
    demoLabel: 'Live Demo',
  },
]

function Projects() {
  return (
    <section id="projects" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            What I've built
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Featured <span className="text-violet-400">Projects</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            A selection of projects where I have applied my frontend
            and full-stack development skills.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#11111b] transition duration-300 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/20"
            >
              {/* Screenshot */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  loading="lazy"
                  className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#11111b]/70 to-transparent opacity-70" />

                <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur">
                  {project.category}
                </span>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white transition group-hover:text-violet-300">
                  {project.title}
                </h3>

                <p className="mt-3 min-h-24 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technology tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-violet-400/15 bg-violet-400/[0.06] px-2.5 py-1.5 text-xs text-violet-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Project links */}
                <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                 

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {!project.github && !project.demo && (
                    <span className="text-sm text-gray-500">
                      Demo coming soon
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
