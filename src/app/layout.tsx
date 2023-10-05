import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from '~/components/header'
import { cn } from '~/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ignite Shop',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('flex flex-col items-start justify-center', inter.className)}>
        <Header />
        {children}
      </body>
    </html>
  )
}
