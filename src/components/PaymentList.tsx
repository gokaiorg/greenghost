"use client";

import { useState } from "react";
import Image from "next/image";
import { PaymentData } from "@/lib/bigquery-types";
import { sanitizeUrl } from "@/lib/utils/url";

interface PaymentListProps {
  payments: PaymentData[];
}

export default function PaymentList({ payments }: PaymentListProps) {
  const [activeTab, setActiveTab] = useState(0);

  const activePayment = payments[activeTab];
  const imageName = activePayment.name.toLowerCase();
  const imagePath = `/images/payments/${imageName}-qr-payment-green-ghost.avif`;

  // Check if image exists by trying to load it
  const hasImage = ["thai", "revolut", "russian", "crypto", "paypal"].includes(
    imageName,
  );

  return (
    <div className="max-w-6xl mx-auto mt-12 mb-16">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {payments.map((payment, index) => (
          <button
            key={payment.name}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 font-bold transition-colors cursor-pointer ${
              activeTab === index
                ? "bg-[#13DE00] text-black"
                : "bg-[#13DE00]/13 text-white hover:bg-[#13DE00]/20"
            }`}
          >
            {payment.name}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-black border border-[#13DE00] p-8">
        {/* Description */}
        <div className="mb-6">
          <p className="text-white text-base text-center leading-relaxed break-words">
            {activePayment.description}
          </p>
        </div>

        {/* Image */}
        {hasImage && (
          <div className="mb-6 flex justify-center">
            <div className="relative w-full max-w-[200px] aspect-square">
              <Image
                src={imagePath}
                alt={`${activePayment.name} QR Code`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 200px"
              />
            </div>
          </div>
        )}

        {/* Subtitle */}
        {activePayment.subtitle && (
          <div className="mb-6 text-center">
            <p className="text-[#13DE00] font-bold text-lg">
              {activePayment.subtitle}
            </p>
          </div>
        )}

        {/* Link */}
        {activePayment.link && (
          <div className="text-center">
            <a
              href={sanitizeUrl(activePayment.link)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#13DE00] text-black px-8 py-3 font-bold hover:bg-[#13DE00]/80 transition-colors"
            >
              Visit {activePayment.name}
            </a>
          </div>
        )}
      </div>

      {/* Converter Link */}
      <div className="text-center my-6">
        <a
          href="https://www.coinbase.com/converter/thb/usd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#13DE00] hover:text-[#13DE00]/80 underline font-bold transition-colors"
        >
          Currency Converter
        </a>
      </div>
    </div>
  );
}
