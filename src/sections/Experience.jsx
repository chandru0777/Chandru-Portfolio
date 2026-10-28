
import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'MERN Stack Developer Intern',
    company: 'App Innovation Technologies',
    location: 'Coimbatore',
    duration: 'Sep 2026 – Oct 2026',
    type: 'Internship',
    points: [
      'Developed full-stack web applications using the MERN stack.',
      'Worked with Socket.IO, Redux Toolkit, and Redis.',
      'Implemented Cloudinary and Multer file uploads.',
      'Improved application performance and used Git/GitHub for version control.',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'Redux Toolkit',
      'Redis',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'Zaalima Technologies',
    location: 'Bangalore',
    duration: 'Apr 2026 – Jul 2026',
    type: 'Internship',
    points: [
      'Developed full-stack web applications using the MERN stack.',
      'Built REST APIs and worked with MongoDB and Mongoose.',
      'Implemented JWT authentication and Multer file uploads.',
      'Used Git and GitHub for version control.',
    ],
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT',
      'Multer',
    ],
  },
  {
    role: 'Web Developer Trainee',
    company: 'CloudSwan',
    location: 'Coimbatore',
    duration: 'Aug 2024 – Sep 2024',
    type: 'Training',
    points: [
      'Developed responsive web interfaces.',
      'Worked with HTML, CSS, JavaScript, and React.js.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
  },
]

function Experience() {
  return (
    <section
      id="experience"
      className="px-5 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            My professional journey
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Internship &{' '}
            <span className="text-violet-400">Experience</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            My experience building web applications, working with
            backend services, and developing full-stack solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-14">
          <div className="absolute bottom-0 left-[9px] top-0 w-px bg-gradient-to-b from-violet-500 via-pink-500 to-transparent sm:left-[15px]" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.article
                key={experience.company}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="relative pl-9 sm:pl-12"
              >
                {/* Timeline marker */}
                <span className="absolute left-0 top-7 h-5 w-5 rounded-full border-4 border-[#09090f] bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,0.5)] sm:left-[6px]" />

                <div className="rounded-2xl border border-white/10 bg-[#11111b] p-6 transition duration-300 hover:border-violet-400/40 sm:p-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1 text-xs font-medium text-violet-300">
                        {experience.type}
                      </span>

                      <h3 className="mt-4 text-xl font-bold sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-lg text-gray-300">
                        {experience.company}
                      </p>

                      <p className="mt-1 text-sm text-gray-500">
                        {experience.location}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm font-medium text-violet-300">
                      {experience.duration}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {experience.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-7 text-gray-400 sm:text-base"
                      >
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-pink-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
