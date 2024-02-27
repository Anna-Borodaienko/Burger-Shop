'use client';
import { useState } from 'react';

import MobileNav from './MobileNav';
import Nav from './Nav';

const ResponsiveNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleMenuClick = () => setIsOpenMenu(!isOpenMenu);

  return (
    <div>
      <Nav openMenu={handleMenuClick} />
      <MobileNav
        closeMenu={handleMenuClick}
        isOpen={isOpenMenu}
      />
    </div>
  );
};

export default ResponsiveNav;
