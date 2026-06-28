"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import dynamic from "next/dynamic";
import { Message } from "@/lib/types";

const ChatWindow = dynamic(() => import("./ChatWindow"), {
  loading: () => (
    <div className="bg-black border-2 border-[#13DE00] shadow-lg w-80 h-[500px] flex items-center justify-center text-[#13DE00]">
      <div className="animate-pulse">Loading Chat...</div>
    </div>
  ),
});

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Hello! I'm Green Ghost's assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
];

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);

  return (
    <div className="relative">
      {isOpen ? (
        <ChatWindow
          messages={messages}
          setMessages={setMessages}
          onClose={() => setIsOpen(false)}
        />
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#13DE00] text-black p-4 shadow-lg hover:bg-[#13DE00]/90 transition-colors border-2 border-[#13DE00] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
