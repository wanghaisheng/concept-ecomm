import type { AppProps } from 'next/app';

import '@/styles/globals.css';

export const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
