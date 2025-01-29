"use client";

import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white text-center">
      <h1 className="text-5xl font-bold text-orange-500">
        We're Building This Page for You!
      </h1>
      <p className="text-gray-300 mt-4 text-lg">
        Thank you for your patience. We're working hard to bring this feature to
        life.
      </p>

      {/* Animated Loading Icon */}
      <div className="mt-6 animate-pulse">
        <svg
          className="w-16 h-16 text-orange-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>

      <p className="text-gray-400 mt-4 italic">
        In the meantime, explore other parts of our platform.
      </p>

      <Link
        href="/"
        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg transition-transform transform hover:scale-105"
      >
        Return to Home
      </Link>
    </div>
  );
}
