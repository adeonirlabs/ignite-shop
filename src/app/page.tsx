import type { Metadata } from 'next'

import { Carousel } from '~/components/carousel'
import { cn } from '~/utils/classNames'

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description: 'Explore o nosso catálogo de camisetas temáticas e mostre a sua paixão pela informática.',
}

export default function Home() {
  return (
    <main className={cn('max-w-full-end min-h-164 ml-auto w-full px-4')}>
      <Carousel />
    </main>
  )
}
