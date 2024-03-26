import React, { useRef } from 'react';
import { useRouter } from 'next/router';

import CartIcon from '@/components/ui/Icons/24/icons/cart.svg';
import HomeIcon from '@/components/ui/Icons/24/icons/home.svg';
import PlantIcon from '@/components/ui/Icons/24/icons/plant.svg';
import SettingsIcon from '@/components/ui/Icons/24/icons/settings.svg';

interface VerticalTabItem {
  link: string;
  icon: any;
}

interface NavbarProps {
  activeTab: string | string[] | undefined;
}

const tabItems: VerticalTabItem[] = [
  {
    link: 'home',
    icon: <HomeIcon />,
  },
  {
    link: 'plants',
    icon: <PlantIcon />,
  },
  {
    link: 'cart',
    icon: <CartIcon />,
  },
  {
    link: 'settings',
    icon: <SettingsIcon />,
  },
];

const Navbar = ({ activeTab }: NavbarProps) => {
  const router = useRouter();
  const activeTabRef = useRef<HTMLDivElement | null>(null);

  const handleTabClick = (tab: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, tabs: tab },
      },
      undefined,
      { shallow: true }
    );
  };
  const handleKeyDown = (event: React.KeyboardEvent, tab: string): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleTabClick(tab);
    }
  };

  return (
    <nav className="absolute left-[24px] top-[40px] z-50">
      <div>
        <div className="gap-s8 rounded-full bg-background-white/40 p-s12  md:flex md:flex-col">
          {tabItems.map((d) => (
            <div
              key={d.link}
              ref={activeTab === d.link ? activeTabRef : null}
              className={`flex h-[44px] w-[44px] cursor-pointer items-center justify-center rounded-full hover:bg-white ${activeTab === d.link ? 'bg-white/40 shadow-lg' : ''}`}
              onClick={() => handleTabClick(d.link)}
              onKeyDown={(event) => handleKeyDown(event, d.link)}
              role="button"
              tabIndex={0}
            >
              {d.icon}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
