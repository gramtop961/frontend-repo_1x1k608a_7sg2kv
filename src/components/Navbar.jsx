import { useState } from 'react';
import { Home, LayoutDashboard, Users, Info, Mail } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home', Icon: Home },
  { href: '#dashboard', label: 'Dashboard', Icon: LayoutDashboard },
  { href: '#employees', label: 'Employees', Icon: Users },
  { href: '#about', label: 'About', Icon: Info },
  { href: '#contact', label: 'Contact', Icon: Mail },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-blue-100">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🏴‍☠️</span>
          <span className="font-extrabold tracking-tight text-blue-700">StrawHat Office</span>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-blue-700 hover:bg-blue-50"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                className="group inline-flex items-center gap-2 text-sm font-medium text-blue-900 hover:text-blue-700"
              >
                <Icon className="h-4 w-4 text-blue-500 group-hover:text-blue-600" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="md:hidden border-t border-blue-100 bg-white/80">
          <ul className="max-w-6xl mx-auto px-4 py-3 grid gap-2">
            {links.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-blue-50 text-blue-900"
                >
                  <Icon className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
