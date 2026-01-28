'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import BootstrapClient from '@/components/BootstrapClient'
import { I18nProvider } from '@/lib/i18n'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Navbar from '@/components/Navbar'
import GlobalLoading from '@/components/GlobalLoading'
import { useState, useEffect } from 'react'
import { initSlowScroll } from '../lib/slowScrollInit';


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
      setLoading(false);
    }, 1500); // Show loading for 1.5 seconds

    // Override all scrollTo/scrollBy for slow scroll everywhere
    if (typeof window !== 'undefined') {
      // Import slowScrollTo dynamically to avoid SSR issues
      import('../lib/slowScroll').then(({ slowScrollTo }) => {
        const originalScrollTo = window.scrollTo.bind(window);
        function scrollToOverride(options?: ScrollToOptions): void;
        function scrollToOverride(x: number, y: number): void;
        function scrollToOverride(xOrOptions?: number | ScrollToOptions, y?: number): void {
          if (typeof xOrOptions === 'object' && xOrOptions !== null && 'top' in xOrOptions) {
            slowScrollTo(xOrOptions.top ?? 0, 3000);
          } else if (typeof xOrOptions === 'number') {
            slowScrollTo(typeof y === 'number' ? y : 0, 3000);
          } else {
            originalScrollTo(xOrOptions as any, y as any);
          }
        }
        window.scrollTo = scrollToOverride as typeof window.scrollTo;

        const originalScrollBy = window.scrollBy.bind(window);
        function scrollByOverride(options?: ScrollToOptions): void;
        function scrollByOverride(x: number, y: number): void;
        function scrollByOverride(xOrOptions?: number | ScrollToOptions, y?: number): void {
          if (typeof xOrOptions === 'object' && xOrOptions !== null && 'top' in xOrOptions) {
            slowScrollTo(window.scrollY + (xOrOptions.top ?? 0), 3000);
          } else if (typeof xOrOptions === 'number') {
            slowScrollTo(window.scrollY + (typeof y === 'number' ? y : 0), 3000);
          } else {
            originalScrollBy(xOrOptions as any, y as any);
          }
        }
        window.scrollBy = scrollByOverride as typeof window.scrollBy;
      });
      initSlowScroll();
    }

    return () => clearTimeout(timer)
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/kaya.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <title>Kaya Travel - Your Trusted Immigration & Visa Partner</title>
        <meta name="description" content="Kaya Travel - Expert visa and immigration services for USA, Canada, UK, Europe and more" />
      </head>
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }} suppressHydrationWarning>
        <I18nProvider>
          {loading && <GlobalLoading />}
          <div style={{ visibility: loading ? 'hidden' : 'visible' }}>
            <Navbar />
            <div style={{ flex: 1, paddingTop: '73px' }}>
              {children}
            </div>
            <Footer />
            <WhatsAppButton />
          </div>
        </I18nProvider>
        <BootstrapClient />
      </body>
    </html>
  )
}
