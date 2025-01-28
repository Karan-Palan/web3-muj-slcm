export default function Footer() {
    return (
      <div className="w-full py-8 bg-black text-center px-4 text-white">
        <p className="text-lg font-semibold mb-4">
          Explore the <span className="text-orange-400">Arcadia</span> Ecosystem
        </p>
  
        <ul className="flex flex-wrap justify-center space-x-6 mb-4">
          <li>
            <a
              href="https://arcadiapump.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-orange-400 transition-colors"
            >
              arcadia.pump
            </a>
          </li>
          <li>
            <a
              href="https://arcadia-rqjs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-orange-400 transition-colors"
            >
              arcadia
            </a>
          </li>
          <li>
            <a
              href="https://open-campus-edu-app.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-orange-400 transition-colors"
            >
              arcadia.wallet
            </a>
          </li>
        </ul>
  
        <p className="text-sm text-gray-400">
          &copy; 2025 Arcadia Ecosystem. All rights reserved.
        </p>
      </div>
    );
  }
  