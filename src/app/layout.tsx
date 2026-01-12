'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapClient from '@/components/BootstrapClient'
import { I18nProvider } from '@/lib/i18n'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Navbar from '@/components/Navbar'
import GlobalLoading from '@/components/GlobalLoading'
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Hide loading screen after page has loaded
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // Adjust timing as needed

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en">
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <I18nProvider>
          {loading && <GlobalLoading />}
          <Navbar />
          <div style={{ flex: 1 }}>
            {children}
          </div>
          <Footer />
          <WhatsAppButton />
        </I18nProvider>
        <BootstrapClient />
      </body>
    </html>
  )
}
