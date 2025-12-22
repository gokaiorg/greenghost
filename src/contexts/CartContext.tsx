'use client'

import { createContext, useContext, useReducer, ReactNode, useEffect, useState } from 'react'
import { Product, CartItem } from '@/lib/types'

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; menuType: string }
  | { type: 'REMOVE_ITEM'; id: string; menuType: string }
  | { type: 'UPDATE_QUANTITY'; id: string; quantity: number; menuType: string }
  | { type: 'CLEAR_CART' }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.product.id && item.menuType === action.menuType)
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.product.id && item.menuType === action.menuType
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.product, quantity: 1, menuType: action.menuType }]
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id || item.menuType !== action.menuType)
      }
    case 'UPDATE_QUANTITY':
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.id || item.menuType !== action.menuType)
        }
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.id && item.menuType === action.menuType ? { ...item, quantity: action.quantity } : item
        )
      }
    case 'CLEAR_CART':
      return { items: [] }
    default:
      return state
  }
}

const CartContext = createContext<{
  state: CartState
  dispatch: React.Dispatch<CartAction>
  addItem: (product: Product, menuType: string) => void
  removeItem: (id: string, menuType: string) => void
  updateQuantity: (id: string, quantity: number, menuType: string) => void
  clearCart: () => void
  getTotal: () => number
  getItemCount: () => number
} | null>(null)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Always start with empty cart to prevent hydration mismatch
  const [state, dispatch] = useReducer(cartReducer, { items: [] })
  const [isHydrated, setIsHydrated] = useState(false)

  // Hydrate from localStorage after mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      try {
        const parsed = JSON.parse(savedCart)
        // Restore each item to the cart
        parsed.items?.forEach((item: CartItem) => {
          dispatch({ type: 'ADD_ITEM', product: item, menuType: item.menuType })
          // Adjust quantity if needed
          if (item.quantity > 1) {
            dispatch({ type: 'UPDATE_QUANTITY', id: item.id, quantity: item.quantity, menuType: item.menuType })
          }
        })
      } catch (e) {
        console.error('Failed to parse saved cart:', e)
      }
    }
    setIsHydrated(true)
  }, [])

  // Save to localStorage whenever cart changes (only after hydration)
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('cart', JSON.stringify(state))
    }
  }, [state, isHydrated])

  const addItem = (product: Product, menuType: string) => dispatch({ type: 'ADD_ITEM', product, menuType })
  const removeItem = (id: string, menuType: string) => dispatch({ type: 'REMOVE_ITEM', id, menuType })
  const updateQuantity = (id: string, quantity: number, menuType: string) => dispatch({ type: 'UPDATE_QUANTITY', id, quantity, menuType })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const getTotal = () => state.items.reduce((total, item) => {
    if (item.menuType === 'Buds' || item.menuType === 'Pre-rolls') {
      // Add 20฿ to pre-rolls base price
      const basePrice = item.menuType === 'Pre-rolls' ? item.price + 20 : item.price;

      if (item.quantity >= 30) {
        return total + (basePrice * item.quantity * 0.7); // 30% off
      } else if (item.quantity >= 10) {
        return total + (basePrice * item.quantity * 0.8); // 20% off
      } else if (item.quantity >= 5) {
        // 5g-9g: (qty - 1) * basePrice (Buy 4 Get 1 Free style)
        return total + (basePrice * (item.quantity - 1));
      } else {
        return total + (basePrice * item.quantity);
      }
    }
    return total + item.price * item.quantity
  }, 0)
  const getItemCount = () => state.items.reduce((count, item) => count + item.quantity, 0)

  return (
    <CartContext.Provider value={{
      state,
      dispatch,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      getTotal,
      getItemCount
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    // Return default implementation to prevent errors during SSR
    return {
      state: { items: [] },
      dispatch: () => { },
      addItem: () => { },
      removeItem: () => { },
      updateQuantity: () => { },
      clearCart: () => { },
      getTotal: () => 0,
      getItemCount: () => 0
    }
  }
  return context
}
