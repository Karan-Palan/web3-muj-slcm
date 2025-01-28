"use client";

import Link from "next/link";
import { useState } from "react";
import { SparklesCore } from "../components/sparkles";
import { ChevronRight, Loader2, Mail } from "lucide-react";

import WalletButton from "../components/walletButton";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <main className="relative w-full flex-1 flex flex-col items-center justify-center overflow-hidden rounded-md px-4">
        {/* Background sparkles */}
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

        {/* Content */}
        <div className="flex flex-col items-center justify-center gap-4 relative z-20 text-center">
          <h1 className="cursor-default text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            arcadia.slcm
          </h1>
          <p className="text-neutral-300 cursor-default text-base sm:text-lg md:text-xl">
            a Web3 MUJ SLCM project
          </p>
          <WalletButton>Connect to Wallet</WalletButton>
        </div>
      </main>

      
    </div>
  );
}
