"use client";

import React, { useRef, useEffect, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/lib/types";
import BagQuantity from "./BagQuantity";

interface BagAddButtonProps {
  product: Product;
  category?: string;
  className?: string;
  compact?: boolean;
}

const BagAddButton: React.FC<BagAddButtonProps> = ({
  product,
  category,
  className = "",
  compact = false,
}) => {
  const { state, addItem, updateQuantity, removeItem } = useCart();
  const [userInteracted, setUserInteracted] = useState(false);

  // Determine the category to use (prop or product.type)
  const itemCategory = category || product.type;

  // Find item in cart
  const cartItem = state.items.find(
    (item) => item.id === product.id && item.menuType === itemCategory,
  );

  // Track previous cart state to detect transitions
  const wasInCartRef = useRef(!!cartItem);
  const justAdded = !!cartItem && !wasInCartRef.current && userInteracted;

  useEffect(() => {
    wasInCartRef.current = !!cartItem;
  }, [cartItem]);

  const handleQuantityChange = (newQuantity: number) => {
    if (!cartItem) return;

    let finalQuantity = newQuantity;

    if (
      itemCategory === "Strains" ||
      itemCategory === "Buds" ||
      itemCategory === "Pre-rolls"
    ) {
      const maxQuantity = 30;
      const oldQuantity = cartItem.quantity;
      const isIncrementing = newQuantity > oldQuantity;

      if (isIncrementing) {
        // Skip 4g and 9g when incrementing
        if (oldQuantity === 3) {
          finalQuantity = 5;
        } else if (oldQuantity === 8) {
          finalQuantity = 10;
        } else if (oldQuantity < 10) {
          finalQuantity = oldQuantity + 1;
        } else {
          finalQuantity = oldQuantity + 5;
        }
      } else {
        // Skip 4g and 9g when decrementing
        if (oldQuantity === 5) {
          finalQuantity = 3;
        } else if (oldQuantity === 10) {
          finalQuantity = 8;
        } else if (oldQuantity <= 10) {
          finalQuantity = oldQuantity - 1;
        } else {
          finalQuantity = oldQuantity - 5;
        }
      }

      finalQuantity = Math.max(0, Math.min(finalQuantity, maxQuantity));
    } else {
      // Standard logic
      finalQuantity = Math.max(0, Math.min(newQuantity, product.stock));
    }

    if (finalQuantity <= 0) {
      removeItem(product.id, itemCategory);
    } else {
      updateQuantity(product.id, finalQuantity, itemCategory);
    }
  };

  if (cartItem) {
    return (
      <div
        className={`flex items-center justify-center relative z-20 ${className}`}
      >
        <BagQuantity
          quantity={cartItem.quantity}
          onIncrease={() => handleQuantityChange(cartItem.quantity + 1)}
          onDecrease={() => handleQuantityChange(cartItem.quantity - 1)}
          size={compact ? "sm" : "md"}
          itemName={product.name}
          autoFocus={justAdded}
        />
      </div>
    );
  }

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setUserInteracted(true);
        addItem(product, itemCategory);
      }}
      disabled={product.status !== "In stock"}
      className={`
        bg-[#13DE00] text-black font-bold hover:bg-white hover:text-[#13DE00] transition-colors cursor-pointer relative z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black
        ${compact ? "px-3 py-1 text-sm" : "px-6 py-2 text-base"}
        ${product.status !== "In stock" ? "opacity-50 cursor-not-allowed bg-gray-500" : ""}
        ${className}
      `}
      aria-label={
        product.status === "In stock"
          ? `Add ${product.name} to bag`
          : `${product.name} is sold out`
      }
    >
      {product.status === "In stock" ? "Buy" : "Sold Out"}
    </button>
  );
};

export default BagAddButton;
