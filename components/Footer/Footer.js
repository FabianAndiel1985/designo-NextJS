import React from 'react'
import "./Footer.scss";
import Navbar from '../Header/Navbar';
import AddressesSocialMedia from './AddressesSocialMedia';
import NavbarTexts from '../Header/NavbarTexts';


const Footer = ({footerClass}) => {
  return (
   <>      
   <div className={`${footerClass}`}>
      <Navbar logoSrc={"/logo-light.png"} isHeader={false} brightLinks={true} hideOnMobile={true}/>
      <hr/>
      <div className={"hideOnBiggerThanMobile"}>
        <NavbarTexts/>
      </div>
      <AddressesSocialMedia/>
    </div>
  </>

  )
}

export default Footer