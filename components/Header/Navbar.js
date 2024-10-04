import React from 'react';
import Image from 'next/image';
import "./Navbar.scss";
import NavbarTexts from './NavbarTexts';



const Navbar = ({logoSrc, brightLinks}) => {
  return (
    <>    
    <div className={`navbar ${brightLinks ? 'brightLinks' : 'darkLinks' }`}>
      <div>
        <Image
        src={logoSrc}
        width={197}
        height={24}
        /> 
      </div>
      <div className="navbar__links">
         <NavbarTexts/>
      </div>
    </div>
    </>
  )
}


export default Navbar;
