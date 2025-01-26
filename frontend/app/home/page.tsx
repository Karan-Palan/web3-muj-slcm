"use client";

import Link from "next/link";
import {useState} from "react";
import { SparklesCore } from "../components/sparkles";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-black text-white items-center justify-center">
      <header className="w-full px-6 py-6 flex justify-between items-center bg-black shadow-md">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500">
          arcadia.slcm
        </h1>
        <nav>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <Link
                href="/about"
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 hover:underline font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 hover:underline font-medium"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 hover:underline font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            className="md:hidden flex items-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"></span>
              <span className="block w-6 h-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"></span>
              <span className="block w-6 h-1 bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500"></span>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black shadow-lg transform transition-transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            } md:hidden`}
        >
          <button
            className="absolute top-4 right-4 text-white text-xl"
            onClick={() => setIsMenuOpen(false)}
          >
            &times;
          </button>
          <ul className="flex flex-col items-center mt-20 space-y-6">
            <li>
              <Link
                href="/about"
                className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 hover:underline font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 hover:underline font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 hover:underline font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>

      <main className="relative w-full h-[45rem] flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlescolorful"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#ff8b00"
            speed={0.5}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 relative z-20">
          <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            arcadia.slcm
          </h1>
          <p className="text-neutral-300 cursor-default text-center">
            a Web3 MUJ SLCM project
          </p>
        </div>
      </main>

      <footer className="w-full py-6 bg-black text-center">
        <p className="text-sm text-gray-400">&copy; 2025 arcadia.slcm. All rights reserved.</p>
      </footer>
    </div>
  );
}
