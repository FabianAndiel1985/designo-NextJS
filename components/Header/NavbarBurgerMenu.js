'use client';
import React from 'react'
import Image from 'next/image';
import { useContext, useState} from "react";
import { AppContext } from "@/context/context";



const NavbarBurgerMenu = ({isHeader}) => {


  const [showBurgerIcon, setShowBurgerIcon] = useState(true);
  const {toggleBurgerMenu} = useContext(AppContext);


  return (
   <>
   { showBurgerIcon && isHeader &&
          <Image
            src={"/icon-hamburger.svg"}
            width={16}
            height={16}
            className='navbar__hamburger-icon'
            onClick={()=>{ setShowBurgerIcon(false);toggleBurgerMenu(true)}}
          />
          }
          {
            !showBurgerIcon && isHeader &&
          <Image
            src={"/icon-close.svg"}
            width={20}
            height={20}
            onClick={()=>{  setShowBurgerIcon(true);toggleBurgerMenu(false) }}        
            className='navbar__close-icon'
          />
        }
   </>
  )
}

export default NavbarBurgerMenu