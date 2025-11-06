const crew = [
  { name: 'Monkey D. Luffy', position: 'Captain', contact: 'luffy@strawhat.pirates' },
  { name: 'Roronoa Zoro', position: 'Swordsman', contact: 'zoro@strawhat.pirates' },
  { name: 'Nami', position: 'Navigator', contact: 'nami@strawhat.pirates' },
  { name: 'Usopp', position: 'Sniper', contact: 'usopp@strawhat.pirates' },
  { name: 'Sanji', position: 'Cook', contact: 'sanji@strawhat.pirates' },
  { name: 'Tony Tony Chopper', position: 'Doctor', contact: 'chopper@strawhat.pirates' },
  { name: 'Nico Robin', position: 'Archaeologist', contact: 'robin@strawhat.pirates' },
  { name: 'Franky', position: 'Shipwright', contact: 'franky@strawhat.pirates' },
  { name: 'Brook', position: 'Musician', contact: 'brook@strawhat.pirates' },
];

export default function Employees() {
  return (
    <section id="employees" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">🏴‍☠️</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">The Crew</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {crew.map((m) => (
          <div key={m.name} className="p-5 rounded-xl border bg-white shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-200 to-red-200 ring-2 ring-white shadow-inner" />
              <div>
                <p className="font-semibold text-blue-900">{m.name}</p>
                <p className="text-sm text-blue-900/70">{m.position}</p>
              </div>
            </div>
            <div className="mt-4">
              <a href={`mailto:${m.contact}`} className="text-sm text-blue-700 hover:underline">
                {m.contact}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
