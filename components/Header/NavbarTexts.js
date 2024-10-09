
import React from 'react'
import Link from 'next/link';
import "./NavbarTexts.scss";
import useScreenSize from '@/hooks/useScreenSize';

const NavbarTexts = ({isHeader}) => {
    const navbarLinks = [{title:"our copany", link:"/"}, {title:"locations", link:"/"}, {title:"contact", link:"/"} ];
    return (
        <>
        <div className={`navbar__links ${isHeader ? '' : 'navbar__links__footer'}`}>
          {navbarLinks.map(item=><div><Link href={`${item.link}`}> {item.title.toUpperCase()} </Link></div>)}
        </div>
        </>
  )

}

export default NavbarTexts