'use client'
import React from 'react'
import { useContext } from "react";
import { AppContext } from "@/context/context";
import "./HamburgerMenu.scss";
import Link from 'next/link';
import { texts } from '@/mocks/BurgerMenuData';

const HamburgerMenu = () => {

  const {showBurgerMenu,toggleBurgerMenu} = useContext( AppContext);

  return (
    <>
      <ul className={`menu-elements ${!showBurgerMenu && "hide-burger-menu"} `}>
          {
              texts.map(e=>(
                  <li> 
                    <Link href={`${e.link}`}
                    onClick={()=>{toggleBurgerMenu(false)}}
                    >{e.heading.toUpperCase()} </Link>
                  </li>
              ))
          }
      </ul>
    </>
  )
}

export default HamburgerMenu