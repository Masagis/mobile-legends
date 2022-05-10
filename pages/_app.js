import React from 'react'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'
import { Provider } from 'react-redux'

import store from '../src/store/store'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <DefaultSeo
        title="Mobile Legends: Bang Bang"
        description="Mobile Legends: Bang Bang"
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: '',
          site_name: '',
        }}
      />
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://m.mobilelegends.com/static/images/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          href="https://m.mobilelegends.com/static/images/favicon.ico"
        />
      </Head>
      <Provider store={store()}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
