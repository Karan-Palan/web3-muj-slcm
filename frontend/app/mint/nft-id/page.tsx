// "use client";

// import { useState, useEffect } from "react";
// // import { EduChainClient } from "@educhain/sdk";

// const EDUCHAIN_RPC_URL = "https://rpc.educhain.network"; 
// const educhainClient = new EduChainClient(EDUCHAIN_RPC_URL);

// export default function MintNFTStudentID() {
//   const [walletAddress, setWalletAddress] = useState<string | null>(null);
//   const [status, setStatus] = useState("");

//   // Connect to EduChain Wallet
//   const connectWallet = async () => {
//     try {
//       if (!window.educhain) throw new Error("EduChain wallet not found!");
//       const response = await window.educhain.connect();
//       setWalletAddress(response.address);
//     } catch (error: any) {
//       setStatus(`Wallet Error: ${error.message}`);
//     }
//   };

//   // Mint NFT function
//   const mintNFT = async () => {
//     try {
//       if (!walletAddress) {
//         setStatus("Please connect your wallet first!");
//         return;
//       }

//       setStatus("Minting NFT...");

//       const transaction = {
//         sender: walletAddress,
//         contract: "0xYourEduChainContractAddress",
//         function: "mint_nft",
//         arguments: ["LPU Student ID NFT", "https://example.com/metadata.json"], // Replace with real metadata
//       };

//       const response = await window.educhain.signAndSubmitTransaction(transaction);
//       await educhainClient.waitForTransaction(response.txHash);

//       setStatus(`NFT Minted Successfully! Transaction: ${response.txHash}`);
//     } catch (error: any) {
//       setStatus(`Error: ${error.message}`);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
//       <h1 className="text-3xl font-bold text-orange-500">Mint Your NFT Student ID</h1>

//       {!walletAddress ? (
//         <button
//           onClick={connectWallet}
//           className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mt-4"
//         >
//           Connect EduChain Wallet
//         </button>
//       ) : (
//         <>
//           <button
//             onClick={mintNFT}
//             className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg mt-4"
//           >
//             Mint NFT
//           </button>
//           {status && <p className="mt-2 text-gray-300">{status}</p>}
//         </>
//       )}
//     </div>
//   );
// }
