import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { TopHeader } from '@/components';
import Navbar from '@/components/ui/NavBar';

import { Cart } from './Cart';
import { Home } from './Home';
import { Plant } from './Plant';
import { Settings } from './Settings';

export const FeatureHome = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(router.query.tabs || undefined);

  useEffect(() => {
    if (router.isReady) {
      // Check if the 'tabs' query parameter is present and not undefined
      if (router.query.tabs) {
        setActiveTab(router.query.tabs as string);
      } else {
        // If 'tabs' is not present, set the default tab and update the URL
        setActiveTab('home');
        router.push(
          {
            pathname: router.pathname,
            query: { ...router.query, tabs: 'home' },
          },
          undefined,
          { shallow: true }
        );
      }
    }
  }, [router.isReady, router.query.tabs]);

  const selectTab = (): React.ReactNode => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'plants':
        return <Plant />;
      case 'cart':
        return <Cart />;
      case 'settings':
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-full min-w-full flex-col">
      <TopHeader />
      <div className="relative flex h-full min-w-full items-start justify-center  pt-[40px]">
        <Navbar activeTab={activeTab} />
        <div className="flex h-[calc(100%-40px)] w-full max-w-[1072px] flex-col">{selectTab()}</div>
      </div>
    </div>
  );
};
