import '../styles/globals.css'
import Navbar from '../components/Navbar'
import React from 'react'
import { NextUIProvider } from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider>
      <Navbar />
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
