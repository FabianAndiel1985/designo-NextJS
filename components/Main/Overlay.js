"use client";
import React from 'react';
import "./Overlay.scss";
import { useContext } from 'react';
import { AppContext } from '@/context/context';


const Overlay = () => {

  const {showBurgerMenu} = useContext(AppContext);
  
  return (
    <div className= {`${!showBurgerMenu && 'hide'} overlay `}></div>
  )
}

export default Overlay