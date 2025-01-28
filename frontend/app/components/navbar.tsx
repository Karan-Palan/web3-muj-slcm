export default function Navbar() {
    return (
      <nav className="w-full bg-black text-white px-6 py-4 flex items-center justify-between shadow-md z-20">
        {/* Logo */}
        <a className="text-xl sm:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-yellow-500" href="/">
          Arcadia
        </a>
  
        {/* Links */}
        <ul className="flex flex-wrap space-x-4 sm:space-x-6 text-sm sm:text-base">
          <li>
            <a
              href="https://arcadiapump.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              arcadia.pump
            </a>
          </li>
          <li>
            <a
              href="https://arcadia-rqjs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              arcadia
            </a>
          </li>
          <li>
            <a
              href="https://open-campus-edu-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              arcadia.wallet
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  