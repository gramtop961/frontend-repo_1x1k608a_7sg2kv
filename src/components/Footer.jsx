export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t bg-gradient-to-t from-blue-50 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <p className="font-extrabold text-blue-800">StrawHat Office</p>
          <p className="text-sm text-blue-900/70 mt-2">Sailing productivity seas with a fun, professional vibe.</p>
        </div>
        <div>
          <p className="font-semibold text-blue-900">About</p>
          <p id="about" className="text-sm text-blue-900/70 mt-2">
            Built with a One Piece aesthetic: warm reds, ocean blues, and golden accents. Subtle wave patterns and playful mascot animations keep things lively without distractions.
          </p>
        </div>
        <div>
          <p className="font-semibold text-blue-900">Contact</p>
          <ul className="text-sm text-blue-900/80 mt-2 space-y-1">
            <li>Email: hello@strawhat.office</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Grand Line HQ, East Blue</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-blue-900/60 py-4">© {new Date().getFullYear()} StrawHat Office. All rights reserved.</div>
    </footer>
  );
}
