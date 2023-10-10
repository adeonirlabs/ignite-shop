'use client'

import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import logo from '~/assets/logo.svg'
import { Cart } from '~/components/cart'
import { useCartStore } from '~/store/cart'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const count = useCartStore((state) => state.count)

  return (
    <>
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between p-4">
        <Link href="/" className="inline-flex">
          <Image src={logo} alt="" width={130} height={52} />
        </Link>
        <button
          className="relative rounded-md bg-zinc-700 p-2 transition hover:bg-zinc-600"
          onClick={() => setIsOpen(true)}
        >
          <ShoppingBag className="h-8 w-8" />
          <span className="absolute -right-2.5 -top-2.5 grid h-5 w-5 place-content-center rounded-full bg-teal-500 text-xs font-bold">
            {count}
          </span>
        </button>
      </header>
      <Cart isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
