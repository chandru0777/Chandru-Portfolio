
import { useState } from 'react'
import { motion } from 'framer-motion'

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const subject = encodeURIComponent(
      `Portfolio Contact from ${form.name}`
    )

    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )

    window.location.href =
      `mailto:chandruk1307@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
            Let's connect
          </p>

          <h2 className="text-3xl font-bold sm:text-5xl">
            Get In <span className="text-violet-400">Touch</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-7 text-gray-400">
            I'm interested in entry-level software developer opportunities
            and collaborating on interesting projects. Feel free to contact me.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <a
              href="mailto:chandruk1307@gmail.com"
              className="block rounded-2xl border border-white/10 bg-[#11111b] p-6 transition hover:border-violet-400/40"
            >
              <p className="text-sm text-gray-500">Email me</p>
              <p className="mt-2 break-all font-medium text-white">
                chandruk1307@gmail.com
              </p>
            </a>

            <a
              href="https://github.com/chandru0777"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-white/10 bg-[#11111b] p-6 transition hover:border-violet-400/40"
            >
              <p className="text-sm text-gray-500">GitHub</p>
              <p className="mt-2 font-medium text-white">
                github.com/chandru0777 ↗
              </p>
            </a>

            <a
              href="https://linkedin.com/in/chandru-k-26865735a"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-white/10 bg-[#11111b] p-6 transition hover:border-violet-400/40"
            >
              <p className="text-sm text-gray-500">LinkedIn</p>
              <p className="mt-2 font-medium text-white">
                Connect with me ↗
              </p>
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-[#11111b] p-6 sm:p-8"
          >
            <h3 className="text-xl font-bold">Send a message</h3>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-400"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your opportunity..."
                  className="w-full resize-y rounded-xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-violet-400"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-pink-500 px-6 py-3.5 font-semibold text-white transition hover:opacity-90"
              >
                Open Email to Send Message ↗
              </button>

              <p className="text-xs leading-5 text-gray-500">
                This form opens your default email application with the
                message filled in. It does not send or store messages itself.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
