"use client";
import React from 'react'
import { usePathname } from 'next/navigation';
import Footer from './Footer';

const FooterParent = () => {
    const pathname = usePathname();
  return (
    <>
    {pathname === "/" ? <Footer footerClass={"footer"}/> : <Footer footerClass={"footer conact-footer"}/>}
    </>
  )
}

export default FooterParent;