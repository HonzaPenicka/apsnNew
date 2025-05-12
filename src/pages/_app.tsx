import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col h-screen">
      <main className="flex-grow h-full overflow-auto">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

