"use client";

import { useState } from "react";

import { SparklesCore } from "../../components/sparkles";

export default function Web3Chat() {
    const [messages, setMessages] = useState([
        { sender: "EduChain Admin", text: "Welcome to the Web3 Communication Hub!" },
        { sender: "Student", text: "Hey! How does this system work?" },
        { sender: "EduChain Admin", text: "Your Web3 domain is used for secure messaging and document access." },
    ]);

    const [newMessage, setNewMessage] = useState("");

    const sendMessage = () => {
        if (!newMessage.trim()) return;
        setMessages([...messages, { sender: "You", text: newMessage }]);
        setNewMessage("");
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
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
            <div className="flex flex-col items-center justify-center gap-4 relative z-20 text-center">
                <h1 className="cursor-default text-5xl sm:text-5xl md:text-5xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                    arcadia.slcm communication hub
                </h1>
            </div>
            <br />
            <br />

            <div className="w-full max-w-lg bg-black border border-orange-500 rounded-lg shadow-lg p-4 flex flex-col space-y-4 z-20">
                <div className="h-64 overflow-y-auto space-y-2 px-2">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`p-2 rounded-md ${msg.sender === "You" ? "bg-orange-500 text-black self-end" : "bg-gray-800 text-white"
                                }`}
                        >
                            <p className="text-xs text-gray-300">{msg.sender}</p>
                            <p className="text-sm">{msg.text}</p>
                        </div>
                    ))}
                </div>

                {/* Message Input */}
                <div className="flex gap-2 mt-4">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 bg-gray-800 text-white px-3 py-2 rounded-md outline-none border border-gray-600 focus:border-orange-500"
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
