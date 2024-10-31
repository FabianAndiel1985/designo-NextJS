import React from 'react';
import Image from 'next/image';
import "./Navbar.scss";
import NavbarTexts from './NavbarTexts';
import NavbarBurgerMenu from './NavbarBurgerMenu';


const Navbar = ({logoSrc, isHeader, brightLinks, hideOnMobile}) => {

  

  return (
    <>    
    <div className={`navbar ${hideOnMobile && !isHeader && 'center-image'}`}>
      <div>
        <Image
        src={logoSrc}
        width={197}
        height={24}
        /> 
      </div>
          <NavbarTexts isHeader={isHeader} brightLinks={brightLinks} hideOnMobile={hideOnMobile} />
          <NavbarBurgerMenu/>

    </div>
    </>
  )
}


export default Navbar;
