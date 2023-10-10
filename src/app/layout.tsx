import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Planning Poker',
  description: 'The new and improved planning poker tool for your team.'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='bg-sky-50 container mx-auto'>
        {children}
      </body>
    </html>
  )
}
