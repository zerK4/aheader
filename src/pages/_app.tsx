import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from "@/components/Loader/Header/Header.component";

export default function App({ Component, pageProps, session }: any) {
  return (
    <div className="min-h-screen bg-black text-sm text-gray-300 ">
      <SessionProvider session={session}>
        <Header />
        <div className="h-[90vh] flex items-center justify-center">
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </div>
  );
}
