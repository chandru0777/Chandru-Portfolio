
function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <a href="#home" className="text-lg font-bold">
          <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
            Chandru
          </span>
          <span className="text-white">.dev</span>
        </a>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Chandru K. All rights reserved.
        </p>

        <a
          href="#home"
          className="text-sm text-gray-400 transition hover:text-violet-300"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}

export default Footer
