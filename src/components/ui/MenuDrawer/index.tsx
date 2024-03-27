import React from 'react';

import CategoryIcon from '@/components/ui/Icons/24/icons/category.svg';
import FilterIcon from '@/components/ui/Icons/24/icons/filter.svg';
import NotificationIcon from '@/components/ui/Icons/24/icons/notification.svg';

import Button from '../Button';

const drawerItems = [
  {
    id: '1',
    icon: <CategoryIcon />,
    label: 'Category',
  },
  {
    id: '2',
    icon: <NotificationIcon />,
    label: 'Notification',
  },
  {
    id: '3',
    icon: <FilterIcon />,
    label: 'Filter',
  },
];

interface MenuDrawerProps {
  isOpen: boolean;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed left-0 top-[12%] z-[60] h-full w-[99%] transform overflow-y-auto rounded-2xl transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} bg-white p-4`}
      tabIndex={-1}
    >
      <div className="flex h-full w-full flex-col gap-s16 pt-20">
        {drawerItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-2 rounded-lg bg-primary-gray/10 px-s16 py-s8 hover:bg-gray-400/10 hover:shadow-lg"
          >
            <Button variant="icon">{item.icon}</Button>
            <div className="flex w-full items-center px-s4 text-black">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuDrawer;
