import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '~/assets/logo.svg'

export const Header = () => {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between p-4">
      <Link href="/" className="inline-flex">
        <Image src={logo} alt="" width={130} height={52} />
      </Link>
      <Link href="/cart" className="relative rounded-md bg-zinc-700 p-2 transition hover:bg-zinc-600">
        <ShoppingBag className="h-8 w-8" />
        <span className="absolute -right-2.5 -top-2.5 grid h-5 w-5 place-content-center rounded-full bg-teal-500 text-xs">
          3
        </span>
      </Link>
    </header>
  )
}
