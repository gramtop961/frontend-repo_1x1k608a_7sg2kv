export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(234,179,8,0.15),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 relative">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-blue-900">
              Adventure-ready Office Management
            </h1>
            <p className="mt-4 text-blue-800/80 leading-relaxed">
              Set sail with a fun, One Piece–inspired hub to manage tasks, attendance, and announcements. Lightweight, fast, and responsive for any crew.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#dashboard" className="px-5 py-2.5 rounded-md bg-red-500 text-white font-semibold shadow hover:bg-red-600">
                Go to Dashboard
              </a>
              <a href="#employees" className="px-5 py-2.5 rounded-md bg-yellow-400 text-blue-900 font-semibold shadow hover:bg-yellow-500">
                Meet the Crew
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-full bg-gradient-to-br from-blue-200 via-yellow-200 to-red-200 flex items-center justify-center shadow-inner animate-pulse">
              <div className="w-40 h-40 sm:w-52 sm:h-52 bg-[url('https://media.giphy.com/media/USUIWSteF8DJu/giphy.gif')] bg-cover bg-center rounded-full ring-4 ring-white shadow-lg" aria-label="Luffy idle animation" />
            </div>
            <p className="text-center text-sm text-blue-900/70 mt-3">Captain Luffy cheering your productivity!</p>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-8 left-0 right-0 h-16 bg-[url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"1440\" height=\"60\" viewBox=\"0 0 1440 60\"><path fill=\"%23bfdbfe\" d=\"M0,30 C120,50 240,10 360,30 C480,50 600,10 720,30 C840,50 960,10 1080,30 C1200,50 1320,10 1440,30 L1440,60 L0,60 Z\"/></svg>')] bg-repeat-x opacity-70" />
    </section>
  );
}
