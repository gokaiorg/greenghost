"use client";

import { useState, useEffect } from "react";
import { CartItem } from "@/lib/types";
import Link from "next/link";

interface BagMessagingProps {
  items: CartItem[];
  total: number;
  onClose: () => void;
}
const BagMessaging = ({ items, total, onClose }: BagMessagingProps) => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [addressInfo, setAddressInfo] = useState("");
  const [paymentMethod, setPaymentMethod] = useState<"prepaid" | "cod">(
    "prepaid",
  );
  const [activeTab, setActiveTab] = useState<
    "whatsapp" | "messenger" | "telegram"
  >("whatsapp");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // BagMessaging is always "open" when it's rendered, so we don't need an isOpen prop
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const getItemTotal = (item: CartItem) => {
    if (item.menuType === "Buds" || item.menuType === "Pre-rolls") {
      // Add 20฿ to pre-rolls base price
      const basePrice =
        item.menuType === "Pre-rolls" ? item.price + 20 : item.price;

      if (item.quantity >= 30) {
        return basePrice * item.quantity * 0.7; // 30% off
      } else if (item.quantity >= 10) {
        return basePrice * item.quantity * 0.8; // 20% off
      } else if (item.quantity >= 5) {
        // 5g-9g: (qty - 1) * basePrice (Buy 4 Get 1 Free style)
        return basePrice * (item.quantity - 1);
      } else {
        return basePrice * item.quantity;
      }
    }
    return item.price * item.quantity;
  };

  const orderDetails = `Name: ${name}\nAddress Info: ${addressInfo}\nLocation: ${location}\nPayment Method: ${paymentMethod === "prepaid" ? "Pre-payment (Bank Transfer)" : "Cash on Delivery"}\n\nOrder Details:\n${items
    .map((item) => {
      const itemTotal = getItemTotal(item);
      return `${item.quantity} x ${item.name} (${item.menuType}) - ${itemTotal}฿`;
    })
    .join("\n")}\n\nTotal: ${total}฿`;

  const getMessagingLink = () => {
    const message = encodeURIComponent(orderDetails);

    switch (activeTab) {
      case "whatsapp":
        return `https://wa.me/66874201144?text=${message}`;
      case "messenger":
        return `https://m.me/greenghostdegenCBD?text=${message}`;
      case "telegram":
        return `https://t.me/+66874201144?text=${message}`;
      default:
        return `https://wa.me/66874201144?text=${message}`;
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !location) return;
    window.open(getMessagingLink(), "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className="fixed text-sm h-screen inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative shadow-xl max-w-lg w-full max-h-[95vh] overflow-hidden flex flex-col bg-black">
        <span className="absolute z-50 bg-black top-13 right-0 w-2 h-2"></span>
        <span className="absolute z-50 bg-black top-13 left-0 w-2 h-2"></span>
        <div className="flex justify-between items-center p-4 bg-[#13DE00] border-b-4 border-[#13DE00]">
          <h2 className="text-base md:text-lg font-bold text-black">
            Complete Your Order
          </h2>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-700 text-2xl cursor-pointer font-pixel"
            aria-label="Close order messaging selector"
          >
            X
          </button>
        </div>
        <div className="p-4 flex-1 overflow-y-auto border-4 border-[#13DE00] bg-black text-white">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-white mb-1"
              >
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border-2 border-[#13DE00] bg-black text-white focus:ring-2 focus:ring-[#13DE00] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                htmlFor="addressInfo"
                className="block text-sm font-medium text-white mb-1"
              >
                Address Info (Floor, Room, Door Code)
              </label>
              <input
                type="text"
                id="addressInfo"
                value={addressInfo}
                onChange={(e) => setAddressInfo(e.target.value)}
                placeholder="e.g. 3rd Floor, Room 304"
                className="w-full p-2 border-2 border-[#13DE00] bg-black text-white focus:ring-2 focus:ring-[#13DE00] focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-white mb-1"
              >
                Pinned location (Maps Link) *
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="https://maps.app.goo.gl/..."
                className="w-full p-2 border-2 border-[#13DE00] bg-black text-white focus:ring-2 focus:ring-[#13DE00] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label
                id="payment-method-label"
                className="block text-sm font-medium text-white mb-2"
              >
                Payment Method *
              </label>
              <div
                className="grid grid-cols-2 gap-2"
                role="radiogroup"
                aria-labelledby="payment-method-label"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={paymentMethod === "prepaid"}
                  onClick={() => setPaymentMethod("prepaid")}
                  className={`p-2 text-sm border-2 ${paymentMethod === "prepaid" ? "bg-[#13DE00] text-black border-[#13DE00]" : "bg-black text-white border-gray-600"} hover:border-[#13DE00] transition-colors`}
                >
                  Pre-payment
                </button>
                <button
                  type="button"
                  role="radio"
                  aria-checked={paymentMethod === "cod"}
                  onClick={() => setPaymentMethod("cod")}
                  className={`p-2 text-sm border-2 ${paymentMethod === "cod" ? "bg-[#13DE00] text-black border-[#13DE00]" : "bg-black text-white border-gray-600"} hover:border-[#13DE00] transition-colors`}
                >
                  Cash on Delivery
                </button>
              </div>

              <div className="mt-2 p-2 bg-gray-900 border border-gray-700  text-xs text-gray-300">
                {paymentMethod === "prepaid" ? (
                  <p>
                    Please attach the payment slip in the chat after sending
                    your order.{" "}
                    <Link
                      href="/payment"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#13DE00] underline hover:text-white"
                    >
                      See bank details
                    </Link>
                  </p>
                ) : (
                  <p>Please prepare the exact amount in cash for the driver.</p>
                )}
              </div>
            </div>

            <div className="pt-4">
              <h3
                id="send-order-label"
                className="text-sm font-medium text-white mb-2"
              >
                Send Order Via
              </h3>
              <div
                className="grid grid-cols-3 gap-2"
                role="radiogroup"
                aria-labelledby="send-order-label"
              >
                <button
                  type="button"
                  role="radio"
                  aria-checked={activeTab === "whatsapp"}
                  onClick={() => setActiveTab("whatsapp")}
                  className={`p-3 flex items-center justify-center space-x-2 text-[10px] md:text-sm text-white ${
                    activeTab === "whatsapp"
                      ? "bg-black border-2 border-[#13DE00]"
                      : "bg-black border-2 border-gray-600"
                  } hover:border-[#13DE00] cursor-pointer`}
                >
                  <span>WhatsApp</span>
                </button>

                <button
                  type="button"
                  role="radio"
                  aria-checked={activeTab === "messenger"}
                  onClick={() => setActiveTab("messenger")}
                  className={`p-3 flex items-center justify-center space-x-2 text-[10px] md:text-sm text-white ${
                    activeTab === "messenger"
                      ? "bg-black border-2 border-[#13DE00]"
                      : "bg-black border-2 border-gray-600"
                  } hover:border-[#13DE00] cursor-pointer`}
                >
                  <span>Messenger</span>
                </button>

                <button
                  type="button"
                  role="radio"
                  aria-checked={activeTab === "telegram"}
                  onClick={() => setActiveTab("telegram")}
                  className={`p-3 flex items-center justify-center space-x-2 text-[10px] md:text-sm text-white ${
                    activeTab === "telegram"
                      ? "bg-black border-2 border-[#13DE00]"
                      : "bg-black border-2 border-gray-600"
                  } hover:border-[#13DE00] cursor-pointer`}
                >
                  <span>Telegram</span>
                </button>
              </div>
              <p className="text-xs text-gray-400 mt-2 text-center italic">
                Or screenshot and send on the chat you want
              </p>
            </div>

            <div className="pt-4 flex space-x-3 justify-end">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-sm font-medium text-black bg-gray-200 hover:bg-gray-300 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!name || !location}
                className="px-4 py-2 text-sm font-medium text-black bg-[#13DE00] hover:bg-white hover:text-[#13DE00] disabled:opacity-50 disabled:cursor-not-allowed border border-[#13DE00] cursor-pointer"
              >
                Send Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BagMessaging;
