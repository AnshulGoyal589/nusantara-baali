import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './(components)/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Nusantara Travels | Unforgettable Journeys & Packages',
    template: '%s | Nusantara Travels',
  },
  description: 'Discover curated travel packages for Bali and beyond. Specializing in honeymoon, adventure, and family getaways. Book your dream vacation with Nusantara Travels.',
  keywords: ['Bali travel', 'honeymoon packages', 'Indonesia travel', 'vacation deals', 'Nusantara Travels'],
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}