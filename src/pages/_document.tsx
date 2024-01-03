import { Head, Html, Main, NextScript } from 'next/document'

import { getCssText, globalStyles } from '@/styles'

export default function Document() {
  globalStyles()

  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
