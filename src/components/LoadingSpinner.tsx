import Image from "next/image";

export default function LoadingSpinner() {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-[100]"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
    >
      <div className="relative w-20 h-20 animate-pulse">
        <Image
          src="/images/green-ghost-degen-weed-shop.avif"
          alt=""
          fill
          className="object-contain"
          priority
        />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
