import type { Metadata } from 'next'
import './globals.css'
import { Cormorant_Garamond, Great_Vibes } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Our Wedding',
  description: 'Join us in celebrating our special day',
}

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-cursive',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${greatVibes.variable}`}>{children}</body>
    </html>
  )
}
