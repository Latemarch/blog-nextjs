import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import HeaderScroll from '@/components/HeaderScroll'
import { Providers } from './providers'
import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Latemarch',
  description: 'Latemarch blog',
  openGraph: {
    title: 'Latemarch - blog',
    description: 'Front-end developer',
    url: 'https://latemarch.vercel.app/',
    image: '/images/frontend.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="fixed flex inset-0 bg-zinc-50 dark:bg-black sm:px-8 justify-center">
            <div className="justify-center first-letter: w-full max-w-7xl lg:px-8">
              <div className="w-full h-full bg-white dark:bg-zinc-900"></div>
            </div>
          </div>
          <HeaderScroll height={100}>
            <Header />
          </HeaderScroll>
          <div className="relative sm:px-8 ">
            <div className="px-4 sm:px-8 max-w-7xl mx-auto text-zinc-800">
              <div className="mx-auto pt-28 md:px-8">
                <div className="mx-auto items-center max-w-2xl lg:max-w-5xl lg:px-8">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
