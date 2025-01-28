import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";


interface WalletButtonProps {
  children?: React.ReactNode;
}

export default function WalletButton({ children }: WalletButtonProps) {
  const [wallet, setWallet] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [userID, setUserID] = useState<string>("");

  // Load wallet state from localStorage
  useEffect(() => {
    const savedWallet = localStorage.getItem("wallet");
    const savedAddress = localStorage.getItem("walletAddress");
    if (savedWallet && savedAddress) {
      setWallet(savedWallet);
      setWalletAddress(savedAddress);
    }
  }, []);

  // Save wallet state to localStorage on connection
  const saveWallet = (walletType: string, address: string) => {
    localStorage.setItem("wallet", walletType);
    localStorage.setItem("walletAddress", address);
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    setWallet(null);
    setWalletAddress("");
    localStorage.removeItem("wallet");
    localStorage.removeItem("walletAddress");
  };

  // Connect wallets
  const connectWallet = async (walletType: string) => {
    try {
      if (walletType === "Metamask") {
        if (!window.ethereum) throw new Error("Metamask not installed");
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const address = accounts[0];
        setWallet("Metamask");
        setWalletAddress(address);
        saveWallet("Metamask", address);
      } else if (walletType === "Phantom" || walletType === "Backpack") {
        if (!window.solana) throw new Error(`${walletType} wallet not installed`);
        const resp = await window.solana.connect();
        setWallet(walletType);
        setWalletAddress(resp.publicKey.toString());
        saveWallet(walletType, resp.publicKey.toString());
      } else if (walletType === "Petra" || walletType === "Martian") {
        if (!window.aptos) throw new Error(`${walletType} wallet not installed`);
        const resp = await window.aptos.connect();
        setWallet(walletType);
        setWalletAddress(resp.address);
        saveWallet(walletType, resp.address);
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsDropdownOpen(false); // Close dropdown after selection
    }
  };

  const router = useRouter();

  const navigateToMint = () => {
    router.push("/mint");
  };

  return (
    <div className="relative flex flex-col items-center gap-6 text-center">
      {/* Wallet Connection */}
      {!walletAddress ? (
        <button
          className="bg-gradient-to-r from-black to-orange-500 hover:from-gray-900 hover:to-orange-400 text-white font-bold py-3 px-6 rounded-full shadow-xl transition-transform transform hover:scale-105 border border-orange-500"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          Connect Wallet
        </button>
      ) : (
        <div className="p-4 bg-black border border-orange-500 text-white rounded-md shadow-lg text-center">
          <p className="font-semibold text-lg text-orange-400">Wallet Connected: {wallet}</p>
          <p className="text-sm mt-1 text-gray-300">
            User Address: <span className="font-mono text-yellow-400">{walletAddress}</span>
          </p>
        </div>
      )}

      {/* Wallet Selection Dropdown */}
      {isDropdownOpen && (
        <div className="absolute mt-2 bg-black border border-orange-500 shadow-xl rounded-md p-4 w-64 z-10 text-white">
          <p className="font-semibold mb-2 text-orange-400">Select a Wallet</p>
          <ul>
            {["Metamask", "Phantom", "Petra", "Martian", "Backpack"].map((type) => (
              <li
                key={type}
                className="cursor-pointer text-sm text-gray-200 hover:bg-orange-500 hover:text-black p-2 rounded-md transition-colors"
                onClick={() => connectWallet(type)}
              >
                {type}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Student ID Input - Only Shown if Wallet is Connected */}
      {walletAddress && (
        <div className="flex flex-col items-center gap-2 mt-4">
          <label className="text-sm text-gray-400">Enter your student ID:</label>
          <div className="flex items-center bg-black text-white px-4 py-2 rounded-md shadow-md border border-orange-500">
            <input
              type="text"
              placeholder="Enter your ID"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
              className="bg-transparent outline-none text-sm w-full text-white placeholder-gray-500"
            />
            <span className="text-sm text-orange-400">@muj.manipal.edu</span>
          </div>
        </div>
      )}

      {/* MINT BUTTON - Appears Only When Wallet is Connected */}
      {walletAddress && (
        <button
          onClick={navigateToMint}
          className="bg-gradient-to-r from-orange-800 to-orange-500 hover:from-orange-900 hover:to-orange-400 text-white font-bold py-3 px-6 rounded-full shadow-xl transition-transform transform hover:scale-105 border border-orange-500 mt-4"
        >
          Mint NFT
        </button>
      )}

      {/* Disconnect Button - Always Visible When Wallet is Connected */}
      {walletAddress && (
        <button
          onClick={disconnectWallet}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md mt-4 transition-transform transform hover:scale-105"
        >
          Disconnect Wallet
        </button>
      )}

      {/* Error Message */}
      {error && (
        <p className="text-red-500 mt-2 text-sm font-medium">{error}</p>
      )}
    </div>
  );
}
