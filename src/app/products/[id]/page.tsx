'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import type { Product } from '~/types'
import { formatMoney } from '~/utils/formatMoney'

const getData = async (id: string) => {
  const res = await fetch(`/api/products/${id}`)
  return res.json()
}

export default function Product({ params }: { params: { id: string } }) {
  const id = params.id

  const [product, setProduct] = useState<Product>()

  useEffect(() => {
    getData(id).then((res) => setProduct(res.data))
  }, [id])

  if (!product) {
    return <div>Product not found</div>
  }

  return (
    <main className="mx-auto flex min-h-[656px] w-full max-w-6xl items-stretch gap-12 px-4">
      <picture className="grid h-[656px] w-[656px] shrink-0 content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-16">
        <Image src={product.image} alt="" width={520} height={520} className="object-cover" />
      </picture>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <span className="text-3xl text-emerald-500">{formatMoney(product.price)}</span>
        <span>{product.description}</span>
        <button className="mt-auto rounded-lg bg-emerald-600 p-4 transition hover:bg-emerald-500">Comprar agora</button>
      </div>
    </main>
  )
}
