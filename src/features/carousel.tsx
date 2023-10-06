'use client'

import 'swiper/css'

import { Loader } from 'lucide-react'
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
    const response = await fetch('/api/products')
    return await response.json()
  }

  useEffect(() => {
    getData().then((res) => setProducts(res.data))
  }, [])

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
          <Link href={`/products/${product.id}`} className="group shrink-0 overflow-hidden" prefetch={false}>
            <article className="relative grid place-content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-16">
              <Image src={product.image} alt="" width={520} height={520} className="object-cover" />
              <footer
                className={cn(
                  'absolute inset-x-1 bottom-1 flex items-center justify-between rounded-md bg-zinc-900/70 p-8 opacity-0',
                  '-translate-y-[110%] transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100',
                )}
              >
                <strong className="text-xl">{product.name}</strong>
                <span className="text-2xl font-bold text-teal-500">{formatMoney(product.price)}</span>
              </footer>
            </article>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
