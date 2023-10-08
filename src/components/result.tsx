'use client'

import { ArrowLeft, Loader } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type { Success } from '~/models/success'
import { cn } from '~/utils/classNames'

export const Result = ({ sessionId }: { sessionId: string }) => {
  const [success, setSuccess] = useState<Success>()

  const getData = async (sessionId: string | null) => {
    return await fetch(`/api/success?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((res) => res.data)
  }

  useEffect(() => {
    getData(sessionId).then((data) => setSuccess(data))
  }, [sessionId])

  if (!success) {
    return (
      <div className="grid h-full w-full place-content-center">
        <Loader className="h-8 w-8 animate-spin text-teal-500" />
      </div>
    )
  }

  const { customer, products } = success

  return (
    <div className="flex flex-1 flex-col items-center gap-8">
      <div
        className="relative mt-16 flex h-36 items-center justify-center"
        style={{ width: products.length * 96 + 48 }}
      >
        {products.map((product, index) => (
          <picture
            key={product.id}
            className={cn(
              'shadow-3xl grid h-36 w-36 shrink-0 place-content-center rounded-full',
              'absolute left-0 bg-gradient-to-b from-teal-500 to-violet-500 p-4',
            )}
            style={{ transform: `translateX(${index * 96}px)` }}
          >
            <Image src={product.image} alt="" width={220} height={220} className="object-cover" />
          </picture>
        ))}
      </div>
      <h1 className="mt-4 text-3xl font-bold">Compra efetuada!</h1>
      <p className="mx-auto max-w-md text-center text-xl">
        Uhuul <strong>{customer}</strong>, sua compra de {products.length} camisetas já está a caminho da sua casa.
      </p>
      <Link href="/" className="mt-auto flex items-center gap-2 text-teal-500 transition hover:text-teal-400">
        <ArrowLeft className="h-5 w-5" /> Voltar para a página inicial
      </Link>
    </div>
  )
}
