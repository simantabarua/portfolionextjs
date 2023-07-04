import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Simanta Baura',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={`bg-[#e0e0e0]  m-4  ${inter.className}`}>
      <Navbar />
        {children}</body>
    </html>
  )
}




