import React from "react";
import { LocationData } from "@/lib/bigquery-types";
import { parseHoursString } from "@/lib/utils/hours";

interface LocationFAQProps {
  location: LocationData;
}

export default function LocationFAQ({ location }: LocationFAQProps) {
  const today = new Date()
    .toLocaleDateString("en-US", { weekday: "long", timeZone: "Asia/Bangkok" })
    .toLowerCase();

  // Parse hours from string
  const hoursObj = parseHoursString(location.hours);
  // @ts-expect-error: accessing via formatted date key might not match strict Hours type keys
  const todayHours = hoursObj[today];

  // Determine open status text
  const openStatusText =
    todayHours &&
      todayHours.toLowerCase() !== "closed" &&
      todayHours.toLowerCase() !== "close"
      ? `Yes, we are open today from ${todayHours}.`
      : "We are currently closed today.";

  // Determine delivery text
  const region =
    location.region ||
    location.address.split(",").slice(-2)[0]?.trim() ||
    "Phuket";
  const deliveryText = `Yes, we offer fast and discreet delivery services in ${region} and surrounding areas.`;

  const faqs = [
    {
      question: `Is ${location.name} open today?`,
      answer: openStatusText,
    },
    {
      question: "Do you offer delivery?",
      answer: deliveryText,
    },
    {
      question: `Where is ${location.name} located?`,
      answer: `We are located at ${location.address}. You can find us easily on Google Maps.`,
    },
  ];

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#13DE00] mb-6">
          Frequently Asked Questions
        </h2>
        <ul className="space-y-4 list-none m-0 p-0">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="bg-[#13DE00]/5 border border-[#13DE00]/21 overflow-hidden"
            >
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-4 text-white hover:text-[#13DE00] transition-colors">
                  <span>{faq.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height="24"
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width="24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <div className="text-gray-300 px-4 pb-4 animate-fadeIn">
                  <p>{faq.answer}</p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
