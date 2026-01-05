'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/contexts/CartContext'
import { CartItem } from '@/lib/types'
import BagMessaging from './BagMessaging'
import BagQuantity from './BagQuantity'

interface BagPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function BagPopup({ isOpen, onClose }: BagPopupProps) {
  const router = useRouter()
  const { state, removeItem, updateQuantity, getTotal } = useCart()
  const { items } = state
  const total = getTotal()
  const [showMessagingSelector, setShowMessagingSelector] = useState(false)

  const getItemTotal = (item: CartItem) => {
    if (item.menuType === 'Buds' || item.menuType === 'Pre-rolls') {
      // Add 20฿ to pre-rolls base price
      const basePrice = item.menuType === 'Pre-rolls' ? item.price + 20 : item.price;

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
    return item.price * item.quantity
  }

  if (!isOpen) return null

  if (showMessagingSelector) {
    return (
      <BagMessaging
        items={items}
        total={total}
        onClose={() => setShowMessagingSelector(false)}
      />
    )
  }

  const handleQuantityChange = (id: string, requestedNewQuantity: number, oldQuantity: number, menuType: string) => {
    const item = items.find(i => i.id === id && i.menuType === menuType)
    if (!item) return; // Should not happen if item is in cart

    let newQuantity = oldQuantity; // Start with oldQuantity and adjust

    if (item.menuType === 'Buds' || item.menuType === 'Pre-rolls') {
      const maxQuantity = 30; // Strains have a max of 30

      if (requestedNewQuantity > oldQuantity) { // Incrementing
        // Skip 4g and 9g when incrementing
        if (oldQuantity === 3) {
          newQuantity = 5;
        } else if (oldQuantity === 8) {
          newQuantity = 10;
        } else if (oldQuantity < 10) {
          newQuantity = oldQuantity + 1;
        } else { // oldQuantity >= 10
          newQuantity = oldQuantity + 5;
        }
      } else { // Decrementing
        // Skip 4g and 9g when decrementing
        if (oldQuantity === 5) {
          newQuantity = 3;
        } else if (oldQuantity === 10) {
          newQuantity = 8;
        } else if (oldQuantity <= 10) {
          newQuantity = oldQuantity - 1;
        } else { // oldQuantity > 10
          newQuantity = oldQuantity - 5;
        }
      }

      // Ensure newQuantity doesn't go below 1 and respects maxQuantity
      newQuantity = Math.max(1, Math.min(newQuantity, maxQuantity));

    } else { // For other menu types, use default increment/decrement by 1
      newQuantity = requestedNewQuantity;
      // Ensure newQuantity doesn't go below 1 and respects item.stock
      newQuantity = Math.max(1, Math.min(newQuantity, item.stock));
    }

    if (newQuantity <= 0) {
      removeItem(id, item.menuType)
    } else {
      updateQuantity(id, newQuantity, item.menuType)
    }
  }

  return (
    <div className="fixed h-screen inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bag-process">
      <div className="relative bg-black shadow-xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col">
        <span className="absolute z-50 bg-black top-13 right-0 w-2 h-2"></span>
        <span className="absolute z-50 bg-black top-13 left-0 w-2 h-2"></span>
        <div className="flex justify-between items-center p-4 bg-[#13DE00] border-b-4 border-[#13DE00]">
          <h2 className="text-base md:text-lg font-bold text-black">Your Bag</h2>
          <button
            onClick={onClose}
            className="text-black hover:text-gray-700 text-2xl cursor-pointer font-pixel"
            aria-label="Close cart"
          >
            X
          </button>

        </div>

        <div className="p-4 flex-1 overflow-y-auto min-h-[300px] flex flex-col bg-black border-4 border-[#13DE00]">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center">
              <p className="text-gray-400 text-center mb-4">Your bag is empty</p>
              <button
                onClick={() => {
                  onClose()
                  router.push('/menu')
                }}
                className="bg-[#13DE00] text-black py-2 px-4 hover:bg-white hover:text-[#13DE00] text-center w-full cursor-pointer"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-2">
                {items.map((item: CartItem) => (
                  <div key={`${item.id}-${item.menuType}`} className="flex items-center justify-between py-1 border-b border-gray-200">
                    <div className="flex-1 min-w-0 mr-2">
                      <h3 className="font-medium text-sm truncate">{item.name}</h3>
                      <p className="text-xs text-gray-400">{item.menuType}</p>
                      <p className="text-[#13DE00] font-semibold text-sm">{getItemTotal(item)}฿</p>
                    </div>
                    <div className="flex items-center mb-2">
                      <BagQuantity
                        quantity={item.quantity}
                        onIncrease={() => handleQuantityChange(item.id, item.quantity + 1, item.quantity, item.menuType)}
                        onDecrease={() => handleQuantityChange(item.id, item.quantity - 1, item.quantity, item.menuType)}
                        size="sm"
                        itemName={item.name}
                      />
                      <button
                        onClick={() => removeItem(item.id, item.menuType)}
                        className="text-red-500 text-right hover:text-red-700 text-xl ml-4 cursor-pointer font-pixel"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        X
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">Total:</span>
                  <span className="font-bold text-[#13DE00]">{total}฿</span>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowMessagingSelector(true)}
                    className="bg-[#13DE00] text-black py-2 px-4 hover:bg-white hover:text-[#13DE00] text-center w-full cursor-pointer"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
