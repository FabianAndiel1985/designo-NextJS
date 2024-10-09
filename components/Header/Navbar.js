"use client";

import React from 'react';
import Image from 'next/image';
import "./Navbar.scss";
import NavbarTexts from './NavbarTexts';
import useScreenSize from '@/hooks/useScreenSize';

const Navbar = ({logoSrc, brightLinks, isHeader}) => {
  const screenSize = useScreenSize();
  let showNavbarLinks = true;

  if(!isHeader && screenSize.width <  768  ) {
    showNavbarLinks = false;
  }

  return (
    <>    
    <div className={`navbar ${brightLinks ? 'brightLinks' : 'darkLinks' } ${showNavbarLinks ? '' : 'center-image' }   `}>
      <div>
        <Image
        src={logoSrc}
        width={197}
        height={24}
        /> 
      </div>
        {showNavbarLinks && <NavbarTexts isHeader={isHeader}/>}
    </div>
    </>
  )
}


export default Navbar;
