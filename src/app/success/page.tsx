'use client'

import { ArrowLeft, Loader } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import type { Success } from '~/types'

const getData = async (sessionId: string | null) => {
  const response = await fetch(`/api/success?session_id=${sessionId}`)
  return response.json()
}

export default function Success() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')
  const [success, setSuccess] = useState<Success>()

  useEffect(() => {
    getData(sessionId).then((res) => setSuccess(res.data))
  }, [sessionId])

  if (!sessionId) {
    redirect('/')
  }

  return (
    <main className="mx-auto flex min-h-[656px] w-full max-w-6xl flex-col items-stretch gap-16 px-4">
      {!success ? (
        <div className="grid h-full w-full place-content-center">
          <Loader className="h-8 w-8 animate-spin text-teal-500" />
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-bold">Compra efetuada!</h1>
          <div className="flex flex-1 flex-col items-center gap-8">
            <picture className="mt-16 grid h-48 w-48 shrink-0 place-content-center rounded-lg bg-gradient-to-b from-teal-500 to-violet-500 p-4">
              <Image src={success?.product.image} alt="" width={220} height={220} className="object-cover" />
            </picture>
            <p className="mx-auto max-w-md text-center text-xl">
              Uhuul <strong>{success?.customer}</strong>, sua <strong>{success?.product.name}</strong> já está a caminho
              da sua casa.
            </p>
            <Link href="/" className="mt-auto flex items-center gap-2 text-teal-500 transition hover:text-teal-400">
              <ArrowLeft className="h-5 w-5" /> Voltar para a página inicial
            </Link>
          </div>
        </>
      )}
    </main>
  )
}
