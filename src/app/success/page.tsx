'use client'

import { redirect, useSearchParams } from 'next/navigation'

import { Result } from '~/components/result'

export default function Success() {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get('session_id')

  if (!sessionId) {
    redirect('/')
  }

  return (
    <main className="mx-auto min-h-164 w-full max-w-6xl px-4">
      <Result sessionId={sessionId} />
    </main>
  )
}
