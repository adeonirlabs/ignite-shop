'use client'

import { Trash2, X } from 'lucide-react'
import Image from 'next/image'

import { useOutsideClick } from '~/hooks/click-outside'
import { useCartStore } from '~/store/cart'
import { cn } from '~/utils/classNames'
import { formatMoney } from '~/utils/formatMoney'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const Cart = ({ isOpen, onClose }: Props) => {
  const { ref } = useOutsideClick(onClose)
  const { cart, remove } = useCartStore((state) => ({ cart: state.cart, remove: state.remove }))

  return (
    <section
      ref={ref}
      className={cn(
        'fixed right-0 z-50 flex h-screen w-120 flex-col gap-4 bg-zinc-800 p-8 transition-all',
        isOpen ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <button className="ml-auto" type="button" onClick={onClose}>
        <X />
      </button>
      <div className="flex flex-col gap-6">
        <h1 className="mb-4 text-xl font-bold text-teal-500">Sacola de compras</h1>
        {cart.length === 0 && <span>Nenhum produto na sacola</span>}
        {cart.map((product) => (
          <article
            key={product.id}
            className="hover: hover: hover: flex items-start gap-4 rounded-md transition-all hover:bg-zinc-900/30 hover:ring-8 hover:ring-zinc-900/30"
          >
            <picture className="grid h-24 w-24 shrink-0 place-content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-2">
              <Image src={product.image} alt="" width={220} height={220} className="object-cover" />
            </picture>
            <div className="flex w-full flex-col">
              <span className="text-lg">{product.name}</span>
              <span className="text-lg font-bold">{formatMoney(product.price)}</span>
            </div>
            <button
              type="button"
              className="ml-auto p-2 text-teal-600 transition hover:text-teal-500"
              onClick={() => remove(product.id)}
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </article>
        ))}
      </div>
      <button
        type="button"
        disabled={cart.length === 0}
        className={cn(
          'mt-auto w-full rounded-lg bg-teal-600 p-4 transition',
          'enabled:hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-60',
        )}
      >
        Finalizar compra
      </button>
    </section>
  )
}
