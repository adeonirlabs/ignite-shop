import { create } from 'zustand'

import type { Product } from '~/models/product'

interface Cart {
  cart: Product[]
  count: number
  add: (product: Product) => void
  remove: (productId: string) => void
}

export const useCartStore = create<Cart>((set, get) => ({
  cart: [],
  count: 0,
  add: (product) => {
    const inCart = get().cart.find((item) => item.id === product.id)
    set((state) =>
      inCart
        ? state
        : {
            cart: [...state.cart, product],
            count: state.count + 1,
          },
    )
  },
  remove: (productId) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
      count: state.count - 1,
    }))
  },
}))
