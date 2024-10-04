import React from 'react'
import Link from 'next/link';

const NavbarTexts = () => {
    const navbarLinks = [{title:"our company", link:"/"}, {title:"locations", link:"/"}, {title:"contact", link:"/"} ];
    return (
        <>
        {navbarLinks.map(item=><div><Link href={`${item.link}`}> {item.title.toUpperCase()} </Link></div>)}
        </>
  )

}

export default NavbarTexts