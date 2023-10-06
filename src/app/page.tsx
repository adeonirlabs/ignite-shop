import type { Metadata } from 'next'

import { Carousel } from '~/features/carousel'
import { cn } from '~/utils/classNames'

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description: 'Explore o nosso catálogo de camisetas temáticas e mostre a sua paixão pela informática.',
}

export default function Home() {
  return (
    <main
      className={cn(
        'ml-auto flex w-full items-center justify-start px-4',
        'min-h-[656px] max-w-[calc(100vw-((100vw-1152px)/2))]',
      )}
    >
      <Carousel />
    </main>
  )
}
