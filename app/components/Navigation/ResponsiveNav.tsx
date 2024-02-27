'use client'
import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const handleMenuClick = () => setIsOpenMenu(!isOpenMenu);

  return (
    <div>
      <Nav openMenu={handleMenuClick} />
      <MobileNav closeMenu={handleMenuClick} isOpen={isOpenMenu} />
    </div>
  )
}

export default ResponsiveNav
