'use client'

import { X } from 'lucide-react'

import { useOutsideClick } from '~/hooks/click-outside'
import { cn } from '~/utils/classNames'

interface Props {
  open: boolean
  onClose: () => void
}

export const Cart = ({ open, onClose }: Props) => {
  const { ref } = useOutsideClick(onClose)

  return (
    <section
      ref={ref}
      className={cn(
        'fixed right-0 z-50 flex h-screen w-120 flex-col gap-4 bg-zinc-800 p-8 transition-all',
        open ? 'translate-x-0' : 'translate-x-full',
      )}
    >
      <button className="ml-auto" type="button" onClick={onClose}>
        <X />
      </button>
      <div>
        <h1>Seu carrinho está vazio</h1>
      </div>
      <button
        type="button"
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
