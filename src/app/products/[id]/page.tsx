import type { Metadata } from 'next'

import { Details } from '~/features/details'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id
  const product = await fetch(`${process.env.BASE_URL}/api/products/${id}`).then((res) => res.json())

  return {
    title: `${product.name} | Ignite Shop`,
    description: 'Explore o nosso catálogo de camisetas temáticas e mostre a sua paixão pela informática.',
  }
}

export default function Product({ params }: { params: { id: string } }) {
  const id = params.id

  return (
    <main className="mx-auto flex min-h-[656px] w-full max-w-6xl items-stretch gap-12 px-4">
      <Details id={id} />
    </main>
  )
}
