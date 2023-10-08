import type { Metadata } from 'next'

import { Details } from '~/components/details'

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const id = params.id
  const product = await fetch(`/api/products/${id}`).then((res) => res.json())

  return {
    title: `${product.name} | Ignite Shop`,
    description: 'Explore o nosso catálogo de camisetas temáticas e mostre a sua paixão pela informática.',
  }
}

export default function Product({ params }: { params: { id: string } }) {
  const id = params.id

  return (
    <main className="mx-auto min-h-164 w-full max-w-6xl px-4">
      <Details id={id} />
    </main>
  )
}
