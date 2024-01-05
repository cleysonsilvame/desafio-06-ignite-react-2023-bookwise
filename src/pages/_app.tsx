import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      <Head>
        <title>BookWise</title>
        <meta
          name="description"
          content="BookWise é uma aplicação web para avaliação e gerenciamento de leituras."
        />
      </Head>

      <main className={inter.className} style={{ flex: 1 }}>
        <Component {...pageProps} />
      </main>
    </>,
  )
}
