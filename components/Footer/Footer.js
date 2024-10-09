"use client";
import React from 'react'
import "./Footer.scss";
import Navbar from '../Header/Navbar';
import AddressesSocialMedia from './AddressesSocialMedia';
import NavbarTexts from '../Header/NavbarTexts';
import useScreenSize from '@/hooks/useScreenSize';

const Footer = () => {
  const screenSize = useScreenSize();
  return (
    <div className='footer'>
      <Navbar logoSrc={"/logo-light.png"} brightLinks={true} isHeader={false}/>
      <hr/>
      {screenSize.width < 768 && <NavbarTexts/>}
      <AddressesSocialMedia/>
    </div>
  )
}

export default Footer