
import { motion } from 'framer-motion'

function Education() {
  return (
    <section id="education" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            My background
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Education
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-white/10 bg-[#11111b] p-6 sm:p-8"
        >
          <p className="text-sm font-medium text-violet-300">
            November 2022 – April 2026
          </p>

          <h3 className="mt-3 text-xl font-bold sm:text-2xl">
            B.E. Computer Science and Engineering
          </h3>

          <p className="mt-2 text-gray-300">
            Rathinam Technical Campus, Coimbatore
          </p>

          <p className="mt-4 inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
            CGPA: 7.15
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
