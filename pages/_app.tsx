import React from 'react';
import { AppProps } from 'next/app';
import AuthProvider from '@context/auth';

import '@src/styles/globals.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}

export default App;
