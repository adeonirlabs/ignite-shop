'use client'
import './globals.css'

import { Inter } from 'next/font/google'
import GithubCorner from 'react-github-corner'

import { Header } from '~/components/header'
import { cn } from '~/utils/classNames'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn('flex flex-col items-start justify-center gap-4', inter.className)}>
        <Header />
        {children}
        <GithubCorner href="https://github.com/adeonirlabs/ignite-shop" bannerColor="#000" octoColor="#14b8a6" />
      </body>
    </html>
  )
}
