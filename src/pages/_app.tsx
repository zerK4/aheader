import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className='min-h-screen bg-black text-sm text-gray-300 flex items-center justify-center'>
    <Component {...pageProps} />
  </div>
}
