import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ReactElement, ReactNode, useEffect, useRef } from "react";
import { NextPage } from "next";
import global from "@/state/global";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps, session }: any) {
  const getLayout = Component.getLayout ?? ((page: any) => page);
  const { completeOverflowOff } = global();
  useEffect(() => {
    completeOverflowOff
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [completeOverflowOff]);

  return (
    <div
      onClick={() => global.setState({ userPopup: { active: false } })}
      className="min-h-screen bg-[#111111] text-sm text-gray-300 "
    >
      <SessionProvider session={session}>
        {getLayout(<Component {...pageProps} />)}
      </SessionProvider>
    </div>
  );
}
