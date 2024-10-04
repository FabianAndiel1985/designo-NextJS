import React from 'react'
import "./Footer.scss";
import Navbar from '../Header/Navbar';
import AddressesSocialMedia from './AddressesSocialMedia';

const Footer = () => {
  return (
    <div className='footer'>
      <Navbar logoSrc={"/logo-light.png"} brightLinks={true}/>
      <hr/>
      <AddressesSocialMedia/>
    </div>
  )
}

export default Footer