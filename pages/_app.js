import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return <>
    <div>
      <Head>
        <title>Saihaj Gill</title>
        <link
          rel='preload'
          href='/fonts/Circular/CircularStd-Book.otf'
          as='font'
          crossOrigin=''
        />
      </Head>
    </div>
  <Component {...pageProps} />
  </>
}

export default MyApp
