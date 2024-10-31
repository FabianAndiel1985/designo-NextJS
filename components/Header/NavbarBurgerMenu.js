'use client';
import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

const NavbarBurgerMenu = () => {
    const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  return (
   <>
   { !showBurgerMenu &&
          <Image
            src={"/icon-hamburger.svg"}
            width={16}
            height={16}
            className='navbar__hamburger-icon'
            onClick={()=>{ setShowBurgerMenu(true)}}
          />
          }
          {
            showBurgerMenu &&
          <Image
            src={"/icon-close.svg"}
            width={20}
            height={20}
            onClick={()=>{ setShowBurgerMenu(false)}}        
            className='navbar__close-icon'
          />
        }
   </>
  )
}

export default NavbarBurgerMenu