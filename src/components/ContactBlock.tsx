"use client";

import Link from "next/link";
import { PHONE_NUMBER } from "@/lib/constants";

export default function ContactBlock() {
  return (
    <div className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
            <span className="text-white">Contact</span>{" "}
            <span className="text-[#13DE00]">Us</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Have questions or need help with your order? Our team is here to
            assist you.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-[#13DE00] hover:bg-[#10c500] text-black font-bold py-4 px-8 text-lg transition-colors duration-300"
              aria-label="Get in touch with Green Ghost"
              title="Get in Touch"
            >
              Get in Touch
            </Link>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="mt-4 text-xl text-[#13DE00] hover:text-[#10c500] transition-colors duration-300 block"
              aria-label={`Call us at ${PHONE_NUMBER}`}
              title="Call us"
            >
              +6687-420-1144
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
