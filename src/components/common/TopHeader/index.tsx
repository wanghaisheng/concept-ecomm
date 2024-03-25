import React from 'react';

import Button from '@/components/ui/Button';
import CategoryIcon from '@/components/ui/Icons/24/icons/category.svg';
import FilterIcon from '@/components/ui/Icons/24/icons/filter.svg';
import NotificationIcon from '@/components/ui/Icons/24/icons/notification.svg';
import { SearchBar } from '@/components/ui/SearchBar';

export const TopHeader = () => (
  <div className="z-50 flex h-s88  max-h-s88  w-full items-center justify-between bg-transparent p-s24">
    <div className="flex w-full justify-between">
      <div className="flex gap-s8">
        <Button variant="icon">
          <CategoryIcon />
        </Button>
        <Button variant="icon">
          <NotificationIcon />
        </Button>
        <Button variant="icon">
          <FilterIcon />
        </Button>
      </div>
      <div>
        <SearchBar name="Home" variant="light" />
      </div>
    </div>
  </div>
);
