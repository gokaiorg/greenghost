"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { PHONE_NUMBER_WHATSAPP } from "@/lib/constants";

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${PHONE_NUMBER_WHATSAPP}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-15 w-15 items-center justify-center bg-[#13DE00] text-black p-4 shadow-lg hover:bg-[#13DE00]/90 transition-colors border-2 border-[#13DE00] cursor-pointer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <Phone className="h-6 w-6" />
    </Link>
  );
}
