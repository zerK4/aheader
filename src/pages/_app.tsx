import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps, session }: any) {
  return <div className='min-h-screen bg-black text-sm text-gray-300 flex items-center justify-center'>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  </div>
}
