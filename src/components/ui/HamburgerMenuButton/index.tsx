import React, { useState } from 'react';

import Button from '../Button';

const HamburgerMenuButton = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOnClick = () => {
    // setIsActive(!isActive);
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <Button
      variant="unstyled"
      className={`h-[44px] w-[44px] rounded-none hover:bg-white/40  ${menuIsOpen ? 'active' : ''} `}
      onClick={handleOnClick}
      datatype="hamburger-menu"
    >
      <div className="ham-bgr-btn relative h-full w-full">
        <b
          style={{
            transform: menuIsOpen ? 'rotate(-45deg)' : 'none',
            top: menuIsOpen ? '50%' : '20%',
            color: 'white',
          }}
        />
        <b style={{ opacity: menuIsOpen ? 0 : 1 }} />
        <b
          style={{
            transform: menuIsOpen ? 'rotate(45deg)' : 'none',
            top: menuIsOpen ? '50%' : '80%',
          }}
        />
      </div>
    </Button>
  );
};

HamburgerMenuButton.displayName = 'HamburgerMenuButton';
export default HamburgerMenuButton;
