
import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'Programming Language',
    skills: ['Java'],
  },
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript','TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    title: 'Database & ORM',
    skills: ['MongoDB', 'Mongoose', 'Prisma'],
  },
  {
    title: 'Authentication',
    skills: ['JWT', 'Role-Based Access Control'],
  },
  {
    title: 'Tools & Technologies',
    skills: ['Redux Toolkit', 'Socket.IO', 'Redis', 'Git', 'GitHub'],
  },
]

function Skills() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            What I work with
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Technical <span className="text-violet-400">Skills</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="rounded-2xl border border-white/10 bg-[#11111b] p-6 transition hover:-translate-y-1 hover:border-violet-400/40"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-violet-400/20 bg-violet-400/[0.08] px-3 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
