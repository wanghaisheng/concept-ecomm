import React, { useState } from 'react';

import Button from '@/components/ui/Button';
import HamburgerMenuButton from '@/components/ui/HamburgerMenuButton';
import CategoryIcon from '@/components/ui/Icons/24/icons/category.svg';
import FilterIcon from '@/components/ui/Icons/24/icons/filter.svg';
import NotificationIcon from '@/components/ui/Icons/24/icons/notification.svg';
import MenuDrawer from '@/components/ui/MenuDrawer';
import { SearchBar } from '@/components/ui/SearchBar';

export const TopHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="z-50 flex h-s88  max-h-s88  w-full items-center justify-between bg-transparent p-s24">
        <div className="flex w-full justify-between  md:justify-between lg:justify-between">
          <div className="flex md:hidden lg:hidden">
            <HamburgerMenuButton handleOnClick={toggleDrawer} menuIsOpen={isDrawerOpen} />
          </div>
          <div className="hidden gap-s8  md:flex lg:flex">
            <Button size={48} variant="icon">
              <CategoryIcon />
            </Button>
            <Button size={48} variant="icon">
              <NotificationIcon />
            </Button>
            <Button size={48} variant="icon">
              <FilterIcon />
            </Button>
          </div>
          <div>
            <SearchBar name="Home" variant="light" />
          </div>
        </div>
      </div>
      <MenuDrawer isOpen={isDrawerOpen} />
    </>
  );
};
