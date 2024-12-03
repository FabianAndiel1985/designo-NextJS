import React from 'react'
import Link from 'next/link';
import "./NavbarTexts.scss";

const NavbarTexts = ({isHeader, brightLinks, hideOnMobile}) => {
    const navbarLinks = [{title:"our copany", link:"/"}, {title:"locations", link:"/"}, {title:"contact", link:"/contact"} ];
    return (
        <>
        <div className={`navbar__links ${isHeader ? '' : 'navbar__links__footer'} ${brightLinks ? 'brightLinks' : 'darkLinks'} ${hideOnMobile && 'hideLinks'} ` }>
          {navbarLinks.map(item=><div><Link href={`${item.link}`}> {item.title.toUpperCase()} </Link></div>)}
        </div>
        </>
  )

}

export default NavbarTexts