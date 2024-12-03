'use client';
import React from 'react'
import Image from 'next/image';
import { useContext} from "react";
import { AppContext } from "@/context/context";



const NavbarBurgerMenu = ({isHeader}) => {

  const {toggleBurgerMenu, showBurgerMenu} = useContext(AppContext);

  return (
   <>
   { !showBurgerMenu  && isHeader &&
          <Image
            src={"/icon-hamburger.svg"}
            width={16}
            height={16}
            className='navbar__hamburger-icon'
            onClick={()=>{toggleBurgerMenu(true)}}
          />
          }
          {
            showBurgerMenu && isHeader &&
          <Image
            src={"/icon-close.svg"}
            width={20}
            height={20}
            onClick={()=>{toggleBurgerMenu(false) }}        
            className='navbar__close-icon'
          />
        }
   </>
  )
}

export default NavbarBurgerMenu