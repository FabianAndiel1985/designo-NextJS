'use client'

import React from 'react'
import { useContext } from "react";
import { AppContext } from "@/context/context";
import "./HamburgerMenu.scss";


const HamburgerMenu = () => {

    const {showBurgerMenu} = useContext( AppContext);
    const texts = ["our company", "locations", "contact"]

  return (
    <>
      <ul className={`menu-elements ${!showBurgerMenu && "hide-burger-menu"} `}>
          {
              texts.map(e=>(
                  <li> {e.toUpperCase()} </li>
              ))
          }
      </ul>
    </>
  )
}

export default HamburgerMenu