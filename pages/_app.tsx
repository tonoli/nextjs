import React from 'react';
import { AppProps } from 'next/app';

import '@src/styles/globals.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default App;
