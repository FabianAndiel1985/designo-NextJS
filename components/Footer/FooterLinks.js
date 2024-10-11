import React from 'react';
import Image from 'next/image';
import "./Navbar.scss";
import NavbarTexts from './NavbarTexts';

const FooterLinks = ({logoSrc, brightLinks, isHeader}) => {

  return (
    <>    
    <div>
      <div>
        <Image
        src={logoSrc}
        width={197}
        height={24}
        /> 
      </div>
        <NavbarTexts isHeader={isHeader}/>
    </div>
    </>
  )
}


export default FooterLinks;