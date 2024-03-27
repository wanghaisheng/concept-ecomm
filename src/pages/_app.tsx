import { ReactElement, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import { store } from '@/redux';

import '@/styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  const persister = persistStore(store);

  return getLayout(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Component {...pageProps} />
        <Toaster position="top-center" />
      </PersistGate>
    </Provider>
  );
};

export default App;
