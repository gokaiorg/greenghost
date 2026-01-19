"use client";

import { useState, useRef, useEffect, memo } from "react";
import { Send, MessageSquare, X } from "lucide-react";
import {
  getStrains,
  findStrain,
  formatStrainInfo,
  escapeHtml,
} from "@/lib/strains";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: 1,
    text: "Hello! I'm Green Ghost's assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
];

// Helper function to create links
const createLink = (path: string, text: string) =>
  `<a href="${path}" class="text-[#13DE00] hover:underline" title="${text}">${text}</a>`;

const RESPONSES = {
  greeting:
    "Hello! Welcome to Green Ghost. I can help you find information about our premium cannabis strains, products, and services. What would you like to know?",
  menu: `Check out our full ${createLink("/menu", "menu")} for a variety of premium cannabis products including flowers, edibles, and concentrates.`,
  delivery: `We offer delivery services! Check out our ${createLink("/delivery", "delivery options")}. We aim to provide fast and discreet service to your location.`,
  wholesale: `For bulk orders and wholesale inquiries, please visit our ${createLink("/wholesale", "wholesale page")}. We offer competitive pricing for bulk purchases.`,
  strains: `We have a wide selection of premium cannabis strains. You can ask me about specific strains like 'Pineapple Express' or 'Mango Sticky Rice', or ask for recommendations based on effects you're looking for. Or browse all our ${createLink("/strains", "strains here")}.`,
  about: `${createLink("/about", "Learn more")} about our cannabis culture and values. We're passionate about quality and responsible consumption.`,
  contact: `You can reach us through our ${createLink("/contact", "contact page")}. Our team is here to help with any questions or concerns.`,
  default: `I'm here to help! You can ask me about our ${createLink("/menu", "products")}, ${createLink("/strains", "strains")}, ${createLink("/delivery", "delivery")}, or ${createLink("/wholesale", "wholesale options")}. For example, you could ask 'What strains do you have for relaxation?' or 'Tell me about Pineapple Express'.`,
};

// Memoized MessageList component to prevent re-renders on input change
const MessageList = memo(function MessageList({
  messages,
}: {
  messages: Message[];
}) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="space-y-4">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[80%] p-3 ${
              message.sender === "user"
                ? "bg-[#13DE00] text-black"
                : "bg-[#13DE00]/13 text-white"
            }`}
          >
            {/* Security Fix: Only render bot messages as HTML, render user messages as text */}
            {message.sender === "user" ? (
              <p className="text-xs whitespace-pre-wrap">{message.text}</p>
            ) : (
              <p
                className="text-xs"
                dangerouslySetInnerHTML={{ __html: message.text }}
              />
            )}
            <p className="text-xs opacity-60 mt-1">
              {message.timestamp.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
});

export default function Chatbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [strains, setStrains] = useState<
    Awaited<ReturnType<typeof getStrains>>
  >([]);
  const hasLoadedStrains = useRef(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      // Small timeout to ensure DOM is ready and transition is complete
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Load strains only when chat is opened
  useEffect(() => {
    if (isOpen && !hasLoadedStrains.current) {
      hasLoadedStrains.current = true;
      const loadStrains = async () => {
        const loadedStrains = await getStrains();
        setStrains(loadedStrains);
      };
      loadStrains();
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Generate and add bot response
    const generateAndAddResponse = async () => {
      const botResponse = await generateResponse(input);
      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    };

    // Small delay for better UX
    setTimeout(generateAndAddResponse, 1000);
  };

  const generateResponse = async (input: string): Promise<string> => {
    const inputLower = input.toLowerCase();

    // Check for greetings
    if (inputLower.match(/\b(?:hello|hi|hey|greetings|what's up)\b/)) {
      return RESPONSES.greeting;
    }

    // Check for menu/products
    if (
      inputLower.match(
        /\b(?:menu|products?|items?|what do you have|what's available)\b/,
      )
    ) {
      return RESPONSES.menu;
    }

    // Check for delivery/shipping
    if (
      inputLower.match(
        /\b(?:deliver|shipping|ship|delivery|where do you deliver)\b/,
      )
    ) {
      return RESPONSES.delivery;
    }

    // Check for wholesale/bulk orders
    if (
      inputLower.match(
        /\b(?:wholesale|bulk|large order|reseller|distributor)\b/,
      )
    ) {
      return RESPONSES.wholesale;
    }

    // Check for about/info
    if (
      inputLower.match(
        /\b(?:about|who are you|what is green ghost|company info|story)\b/,
      )
    ) {
      return RESPONSES.about;
    }

    // Check for contact info
    if (
      inputLower.match(
        /\b(?:contact|email|phone|address|location|hours|open|close)\b/,
      )
    ) {
      return RESPONSES.contact;
    }

    // Handle strain-specific queries
    if (strains.length > 0) {
      // Check for strain names or effects
      const strain = findStrain(strains, inputLower);
      if (strain) {
        return formatStrainInfo(strain);
      }

      // Check for effects
      const effectKeywords = [
        "relax",
        "energy",
        "sleep",
        "pain",
        "stress",
        "anxiety",
        "focus",
        "creative",
      ];
      const matchedEffect = effectKeywords.find((effect) =>
        inputLower.includes(effect),
      );

      if (matchedEffect) {
        const matchingStrains = strains.filter(
          (s) =>
            s.effects.toLowerCase().includes(matchedEffect) ||
            s.relieves.toLowerCase().includes(matchedEffect),
        );

        if (matchingStrains.length > 0) {
          const topStrains = matchingStrains.slice(0, 3);
          const strainList = topStrains
            .map(
              (s) => `- ${escapeHtml(s.name)} (${escapeHtml(s.effects)})`,
            )
            .join("\n");
          return `Here are some strains that might help with ${matchedEffect}:\n\n${strainList}\n\nYou can ask me for more details about any of these strains!`;
        }
      }

      // Check for general strain questions
      if (
        inputLower.match(
          /\b(?:strain|strains|variety|recommend|sativa|indica|hybrid|thc|cbd)\b/,
        )
      ) {
        return RESPONSES.strains;
      }
    }

    // Default response if nothing matches
    return RESPONSES.default;
  };

  return (
    <div className="relative">
      {isOpen ? (
        <div className="bg-black border-2 border-[#13DE00] shadow-lg w-80 h-[500px] flex flex-col">
          <div className="bg-[#13DE00] text-black p-3 flex justify-between items-center">
            <h3 className="font-bold">Green Ghost</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-black hover:text-gray-700 cursor-pointer"
              aria-label="Close chat"
            >
              <X size={20} />
            </button>
          </div>

          <div
            className="flex-1 p-4 overflow-y-auto bg-black text-white"
            role="log"
            aria-live="polite"
            aria-label="Chat history"
            tabIndex={0}
          >
            <MessageList messages={messages} />
          </div>

          <form onSubmit={handleSubmit} className="p-3 bg-[#13DE00]/13">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                aria-label="Type your message"
                className="w-full flex-1 bg-[#13DE00]/13 text-white text-sm px-3 py-2 focus:outline-none focus:border-2 focus:border-[#13DE00]"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className={`bg-[#13DE00] text-black p-2 transition-colors border-2 border-[#13DE00] ${!input.trim() ? "opacity-50 cursor-not-allowed" : "hover:bg-[#13DE00]/90 cursor-pointer"}`}
                aria-label="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#13DE00] text-black p-4 shadow-lg hover:bg-[#13DE00]/90 transition-colors border-2 border-[#13DE00] cursor-pointer"
          aria-label="Open chat"
        >
          <MessageSquare size={24} />
        </button>
      )}
    </div>
  );
}
