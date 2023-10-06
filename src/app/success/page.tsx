'use client'

import { redirect, useSearchParams } from 'next/navigation'

import { Result } from '~/features/result'

export default function Success() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  if (!sessionId) {
    redirect('/')
  }

  return (
    <main className="mx-auto flex min-h-[656px] w-full max-w-6xl flex-col items-stretch gap-16 px-4">
      <Result sessionId={sessionId} />
    </main>
  )
}
