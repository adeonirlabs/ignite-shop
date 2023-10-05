import Image from 'next/image'
import Link from 'next/link'

import tshirtOne from '~/assets/tshirt-1.png'
import { cn } from '~/utils/classNames'

export default function Home() {
  return (
    <main className="ml-auto flex min-h-[656px] w-full max-w-[calc(100vw-((100vw-1152px)/2))] items-center justify-start gap-10 px-4">
      <Link href="" className="group shrink-0 overflow-hidden pr-4">
        <article className="relative grid content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-16">
          <Image src={tshirtOne} alt="" width={520} height={520} className="object-cover" />
          <footer
            className={cn(
              'absolute inset-x-1 bottom-1 flex items-center justify-between rounded-md bg-zinc-900/70 p-8 opacity-0',
              '-translate-y-[110%] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
            )}
          >
            <strong className="text-xl">Camiseta</strong>
            <span className="text-2xl font-bold text-emerald-500">R$ 80,00</span>
          </footer>
        </article>
      </Link>
    </main>
  )
}
