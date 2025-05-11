import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Footer from '@/components/Footer'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  // Reset scrollu při změně stránky
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      
      <main className="flex-grow relative">
        <Component {...pageProps} />
      </main>

      <Footer />
    </div>
  )
}