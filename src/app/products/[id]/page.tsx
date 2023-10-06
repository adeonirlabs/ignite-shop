'use client'

import { Loader } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import type { Product } from '~/types'
import { cn } from '~/utils/classNames'
import { formatMoney } from '~/utils/formatMoney'

const getData = async (id: string) => {
  const response = await fetch(`/api/products/${id}`)
  return response.json()
}

export default function Product({ params }: { params: { id: string } }) {
  const id = params.id
  const [product, setProduct] = useState<Product>()
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: product?.id,
          priceId: product?.priceId,
        }),
      })

      const url = await response.json()
      window.location.href = url
    } catch (error) {
      setLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    getData(id).then((res) => setProduct(res.data))
  }, [id])

  return (
    <main className="mx-auto flex min-h-[656px] w-full max-w-6xl items-stretch gap-12 px-4">
      {!product ? (
        <div className="grid h-full w-full place-content-center">
          <Loader className="h-8 w-8 animate-spin text-emerald-500" />
        </div>
      ) : (
        <>
          <picture className="grid h-[656px] w-[656px] shrink-0 place-content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-16">
            <Image src={product.image} alt="" width={520} height={520} className="object-cover" />
          </picture>
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <span className="text-3xl text-emerald-500">{formatMoney(product.price)}</span>
            <span>{product.description}</span>
            <button
              className={cn(
                'mt-auto rounded-lg bg-emerald-600 p-4 transition',
                'enabled:hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60',
              )}
              type="button"
              disabled={loading}
              onClick={handleCheckout}
            >
              Comprar agora
            </button>
          </div>
        </>
      )}
    </main>
  )
}
