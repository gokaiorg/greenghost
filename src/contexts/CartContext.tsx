'use client'

import { createContext, useContext, useReducer, ReactNode, useEffect } from 'react'
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
  const savedCart = typeof window !== 'undefined' ? localStorage.getItem('cart') : null
  const initialState: CartState = savedCart ? JSON.parse(savedCart) : { items: [] }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state))
  }, [state])

  const addItem = (product: Product, menuType: string) => dispatch({ type: 'ADD_ITEM', product, menuType })
  const removeItem = (id: string, menuType: string) => dispatch({ type: 'REMOVE_ITEM', id, menuType })
  const updateQuantity = (id: string, quantity: number, menuType: string) => dispatch({ type: 'UPDATE_QUANTITY', id, quantity, menuType })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const getTotal = () => state.items.reduce((total, item) => {
    if (item.menuType === 'Buds' || item.menuType === 'Pre-rolls') {
      if (item.quantity >= 30) {
        // Apply flat 30% discount for quantities >= 30
        return total + item.price * item.quantity * 0.875;
      } else {
        // Apply "buy 5 get 1 free" logic for quantities < 30
        const free = Math.floor(item.quantity / 5);
        const paid = item.quantity - free;
        return total + item.price * paid;
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
