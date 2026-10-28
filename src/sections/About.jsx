
import { motion } from 'framer-motion'

const stats = [
  { value: '3', label: 'Internship / Training Experiences' },
  { value: '3', label: 'Featured Projects' },
  { value: 'MERN', label: 'Full-Stack Technology' },
]

function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            About <span className="text-violet-400">Me</span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            I'm Chandru K, a Computer Science and Engineering graduate
            with hands-on experience building responsive web applications.
            I enjoy developing useful products, connecting frontend
            interfaces to backend services, and learning new technologies.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-violet-400/40"
            >
              <h3 className="text-3xl font-bold text-violet-300">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
