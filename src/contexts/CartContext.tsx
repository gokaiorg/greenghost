'use client'

import { createContext, useContext, useReducer, ReactNode, useEffect, useState, useMemo, useCallback } from 'react'
import { Product, CartItem } from '@/lib/types'

interface CartState {
  items: CartItem[]
}

type CartAction =
  | { type: 'ADD_ITEM'; product: Product; menuType: string }
  | { type: 'REMOVE_ITEM'; id: string; menuType: string }
  | { type: 'UPDATE_QUANTITY'; id: string; quantity: number; menuType: string }
  | { type: 'CLEAR_CART' }
  | { type: 'HYDRATE_CART'; items: CartItem[] }

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'HYDRATE_CART':
      return { ...state, items: action.items }
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
        // Optimization: Batch hydration into a single dispatch to prevent N+1 re-renders
        if (Array.isArray(parsed.items) && parsed.items.length > 0) {
          dispatch({ type: 'HYDRATE_CART', items: parsed.items })
        }
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

  const addItem = useCallback((product: Product, menuType: string) => dispatch({ type: 'ADD_ITEM', product, menuType }), [])
  const removeItem = useCallback((id: string, menuType: string) => dispatch({ type: 'REMOVE_ITEM', id, menuType }), [])
  const updateQuantity = useCallback((id: string, quantity: number, menuType: string) => dispatch({ type: 'UPDATE_QUANTITY', id, quantity, menuType }), [])
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), [])

  // Calculate totals only when items change
  const total = useMemo(() => state.items.reduce((total, item) => {
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
  }, 0), [state.items])

  const itemCount = useMemo(() => state.items.reduce((count, item) => count + item.quantity, 0), [state.items])

  const getTotal = useCallback(() => total, [total])
  const getItemCount = useCallback(() => itemCount, [itemCount])

  const contextValue = useMemo(() => ({
    state,
    dispatch,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getTotal,
    getItemCount
  }), [state, addItem, removeItem, updateQuantity, clearCart, getTotal, getItemCount])

  return (
    <CartContext.Provider value={contextValue}>
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
