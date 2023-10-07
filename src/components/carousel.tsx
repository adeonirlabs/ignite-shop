'use client'

import 'swiper/css'

import { Eye, Loader, ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import type { Product } from '~/types'
import { cn } from '~/utils/classNames'
import { formatMoney } from '~/utils/formatMoney'

export const Carousel = () => {
  const [products, setProducts] = useState<Product[]>([])

  const getData = async () => {
    return await fetch('/api/products').then((res) => res.json())
  }

  useEffect(() => {
    getData().then((data) => setProducts(data))
  }, [])

  const handleAddToCart = async (id: string) => {
    console.log(id)
  }

  if (products.length === 0) {
    return (
      <div className="grid h-full w-full place-content-center">
        <Loader className="h-8 w-8 animate-spin text-teal-500" />
      </div>
    )
  }

  return (
    <Swiper spaceBetween={40} width={656}>
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <article className="group relative grid place-content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-16">
            <Image src={product.image} alt="" width={520} height={520} className="object-cover" />
            <footer
              className={cn(
                'absolute inset-x-1 bottom-1 flex items-center justify-between gap-2 rounded-md bg-zinc-900/70 p-6 opacity-0',
                '-translate-y-[110%] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
              )}
            >
              <div className="flex flex-1 flex-col">
                <strong className="select-none text-xl">{product.name}</strong>
                <span className="select-none text-2xl text-teal-500">{formatMoney(product.price)}</span>
              </div>
              <Link
                href={`/products/${product.id}`}
                title="Ir para a página do produto"
                className="rounded-md bg-teal-600 p-2 transition hover:bg-teal-500"
                prefetch={false}
              >
                <Eye className="h-8 w-8" />
              </Link>
              <button
                title="Colocar na sacola"
                className="rounded-md bg-teal-600 p-2 transition hover:bg-teal-500"
                onClick={() => handleAddToCart(product.id)}
              >
                <ShoppingBag className="h-8 w-8" />
              </button>
            </footer>
          </article>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
