import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import {
  domAnimation, LazyMotion
} from 'framer-motion';

import { GlobalMouseMoveProvider } from '../hooks/useGlobalMouseMove';
import { GlobalBackgroundCoordsProvider } from '../hooks/useGlobalBackgroundCenterCoords';

type WrapperProps = {
  children?: React.ReactNode
}

function Wrapper({ children }: WrapperProps) {
  return (
    <GlobalMouseMoveProvider>
      <GlobalBackgroundCoordsProvider>
        <LazyMotion features={domAnimation}>
          {children}
        </LazyMotion>
      </GlobalBackgroundCoordsProvider>
    </GlobalMouseMoveProvider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Wrapper>
      <Head>
        <title>Astronomy</title>
        <meta name="description" content="Appreciating the universe" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="devGridlines centerY"/>
      <div className="devGridlines centerX"/> */}
      <Component {...pageProps} />
    </Wrapper>
  )
}

export default MyApp
