'use client'

import { Loader } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import type { Product } from '~/models/product'
import { cn } from '~/utils/classNames'
import { formatMoney } from '~/utils/formatMoney'

export const Details = ({ id }: { id: string }) => {
  const [product, setProduct] = useState<Product>()
  const [loading, setLoading] = useState(false)

  const getData = async (id: string) => {
    return await fetch(`/api/products/${id}`).then((res) => res.json())
  }

  useEffect(() => {
    getData(id).then((data) => setProduct(data))
  }, [id])

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

  if (!product) {
    return (
      <div className="grid h-full w-full place-content-center">
        <Loader className="h-8 w-8 animate-spin text-teal-500" />
      </div>
    )
  }

  return (
    <section className="flex items-stretch gap-12">
      <picture className="grid h-[656px] w-[656px] shrink-0 place-content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-16">
        <Image src={product.image} alt="" width={520} height={520} className="object-cover" />
      </picture>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <span className="text-3xl text-teal-500">{formatMoney(product.price)}</span>
        <span>{product.description}</span>
        <button
          className={cn(
            'mt-auto rounded-lg bg-teal-600 p-4 transition',
            'enabled:hover:bg-teal-500 disabled:cursor-not-allowed disabled:opacity-60',
          )}
          type="button"
          disabled={loading}
          onClick={handleCheckout}
        >
          Colocar na sacola
        </button>
      </div>
    </section>
  )
}
