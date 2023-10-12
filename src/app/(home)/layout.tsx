import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description: 'Um e-commerce integrado ao Stripe com Zustand para gerenciamento de estado global.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
