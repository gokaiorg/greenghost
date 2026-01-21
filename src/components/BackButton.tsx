"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-[#13DE00] text-2xl font-bold mr-4 hover:text-green-400 cursor-pointer"
      aria-label="Go back"
    >
      &lt;
    </button>
  );
}
