import React, { useEffect, useRef } from "react";

interface BagQuantityProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  className?: string;
  size?: "sm" | "md";
  itemName?: string;
  autoFocus?: boolean;
}

const BagQuantity: React.FC<BagQuantityProps> = ({
  quantity,
  onIncrease,
  onDecrease,
  className = "",
  size = "md",
  itemName,
  autoFocus = false,
}) => {
  const decreaseBtnRef = useRef<HTMLButtonElement>(null);
  const buttonSize = size === "sm" ? "w-6 h-6 text-xs" : "w-8 h-8 text-lg";
  const textSize = size === "sm" ? "text-sm w-6" : "text-xl w-8";

  useEffect(() => {
    if (autoFocus && decreaseBtnRef.current) {
      decreaseBtnRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <div className={`flex items-center space-x-2 bg-black ${className}`}>
      <button
        ref={decreaseBtnRef}
        onClick={(e) => {
          e.stopPropagation();
          onDecrease();
        }}
        className={`${buttonSize} bg-[#13DE00] text-black flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors font-bold`}
        aria-label={
          itemName ? `Decrease quantity of ${itemName}` : "Decrease quantity"
        }
      >
        -
      </button>
      <span
        className={`${textSize} font-pixel text-white text-center font-bold`}
      >
        {quantity}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onIncrease();
        }}
        className={`${buttonSize} bg-[#13DE00] text-black flex items-center justify-center hover:bg-green-700 cursor-pointer transition-colors font-bold`}
        aria-label={
          itemName ? `Increase quantity of ${itemName}` : "Increase quantity"
        }
      >
        +
      </button>
    </div>
  );
};

export default BagQuantity;
