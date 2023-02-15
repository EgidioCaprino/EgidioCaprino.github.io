import React from 'react';
import '../styles/globals.css';
import 'node_modules/highlight.js/styles/solarized-dark.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
