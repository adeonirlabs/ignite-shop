'use client'

import { Trash2, X } from 'lucide-react'

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
      <div className="flex flex-col gap-6">
        <h1 className="mb-4 text-xl font-bold">Sacola de compras</h1>
        <article className="hover: hover: hover: flex items-start gap-4 rounded-md transition-all hover:bg-zinc-900/30 hover:ring-8 hover:ring-zinc-900/30">
          <picture className="grid h-24 w-24 shrink-0 place-content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-4">
            {/* <Image src={product.image} alt="" width={220} height={220} className="object-cover" /> */}
          </picture>
          <div className="flex w-full flex-col">
            <span className="text-lg">Camiseta</span>
            <span className="text-lg font-bold">R$ 79,00</span>
          </div>
          <button type="button" className="ml-auto mt-2 p-1 text-teal-600 transition hover:text-teal-500">
            <Trash2 className="h-5 w-5" />
          </button>
        </article>
        <article className="hover: hover: hover: flex items-start gap-4 rounded-md transition-all hover:bg-zinc-900/30 hover:ring-8 hover:ring-zinc-900/30">
          <picture className="grid h-24 w-24 shrink-0 place-content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-4">
            {/* <Image src={product.image} alt="" width={220} height={220} className="object-cover" /> */}
          </picture>
          <div className="flex w-full flex-col">
            <span className="text-lg">Camiseta</span>
            <span className="text-lg font-bold">R$ 79,00</span>
          </div>
          <button type="button" className="ml-auto mt-2 p-1 text-teal-600 transition hover:text-teal-500">
            <Trash2 className="h-5 w-5" />
          </button>
        </article>
        <article className="hover: hover: hover: flex items-start gap-4 rounded-md transition-all hover:bg-zinc-900/30 hover:ring-8 hover:ring-zinc-900/30">
          <picture className="grid h-24 w-24 shrink-0 place-content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-4">
            {/* <Image src={product.image} alt="" width={220} height={220} className="object-cover" /> */}
          </picture>
          <div className="flex w-full flex-col">
            <span className="text-lg">Camiseta</span>
            <span className="text-lg font-bold">R$ 79,00</span>
          </div>
          <button type="button" className="ml-auto mt-2 p-1 text-teal-600 transition hover:text-teal-500">
            <Trash2 className="h-5 w-5" />
          </button>
        </article>
        <article className="hover: hover: hover: flex items-start gap-4 rounded-md transition-all hover:bg-zinc-900/30 hover:ring-8 hover:ring-zinc-900/30">
          <picture className="grid h-24 w-24 shrink-0 place-content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-4">
            {/* <Image src={product.image} alt="" width={220} height={220} className="object-cover" /> */}
          </picture>
          <div className="flex w-full flex-col">
            <span className="text-lg">Camiseta</span>
            <span className="text-lg font-bold">R$ 79,00</span>
          </div>
          <button type="button" className="ml-auto mt-2 p-1 text-teal-600 transition hover:text-teal-500">
            <Trash2 className="h-5 w-5" />
          </button>
        </article>
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
