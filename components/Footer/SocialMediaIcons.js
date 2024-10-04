'use client'

import React from 'react'
import "./SocialMediaIcons.scss"
import Image from 'next/image'

const SocialMediaIcons = () => {

 const icons = ["facebook","youtube","twitter","pinterest","instagram"];

  return (
    <div id='social-media-icons'>
      { icons.map((e)=>(
        <Image
            src={"/icon-" +e+".svg"}
            width={24}
            height={24}
        />
    )
    )
    }
    </div>
  )
}
export default SocialMediaIcons