
import type { Metadata } from 'next'
import './globals.css'


import PlanProvider from '@/Context/PlanContext'
import Footer from './shared/footer'
import Navbar from './shared/navbar'

export const metadata: Metadata = {
  title: 'FITLOG',
  description: 'Your personal fitness workout tracker',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <PlanProvider>

          <Navbar />

          <main>
            {children}
          </main>

          <Footer />

        </PlanProvider>
      </body>
    </html>
  )
}

