"use client";

import { useRouter } from "next/navigation";

export default function MintSelection() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold text-orange-500">Mint Your Web3 Identity</h1>
      <p className="text-gray-300 mt-2">Choose what you want to mint:</p>

      <div className="mt-6 flex flex-col gap-4">
        <button
          onClick={() => router.push("/mint/nft-id")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
        >
          NFT Student ID
        </button>
        <button
          onClick={() => router.push("/mint/documents")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
        >
          NFT Documents
        </button>
        <button
          onClick={() => router.push("/mint/content")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
        >
          Access Exclusive Content
        </button>
        <button
          onClick={() => router.push("/mint/communication")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-transform transform hover:scale-105"
        >
          Web3 Communication
        </button>
      </div>
    </div>
  );
}
