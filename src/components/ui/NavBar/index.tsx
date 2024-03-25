import React from 'react';
import Link from 'next/link';

import CartIcon from '@/components/ui/Icons/24/icons/cart.svg';
import HomeIcon from '@/components/ui/Icons/24/icons/home.svg';
import PlantIcon from '@/components/ui/Icons/24/icons/plant.svg';
import SettingsIcon from '@/components/ui/Icons/24/icons/settings.svg';

import Button from '../Button';

interface SideBarItem {
  link: string;
  icon: any;
}

const SideBarItems: SideBarItem[] = [
  {
    link: '/home',
    icon: <HomeIcon />,
  },
  {
    link: '/plants',
    icon: <PlantIcon />,
  },
  {
    link: '/cart',
    icon: <CartIcon />,
  },
  {
    link: '/settings',
    icon: <SettingsIcon />,
  },
];

const Navbar = () => {
  return (
    <nav className="absolute left-[24px] top-[40px] z-50">
      <div>
        <div className="gap-s8 rounded-full bg-background-white/40 p-s12  md:flex md:flex-col">
          {SideBarItems.map((d) => (
            <Link key={d.link} href={d.link}>
              <Button variant="icon">{d.icon}</Button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
