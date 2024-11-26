import React from 'react'
import Button from './Button'
import "./BoxWithInfo.scss"
import Image from 'next/image'

const BoxWithInfo = ({element}) => {

    console.log(element);

  return (
    <div className={`box-with-info ${element.type !== 'country' ? 'attribute' : ''}`}>
        <div className={"box-with-info__image"}>
           <Image
            src={element.imgSrc}
            fill
           /> 
        </div>
        <div className={`box-with-info__sub`}>
            <h1>{element.heading.toUpperCase()}</h1>
            <Button text={"see Location"} color={"orange"} fontColor={"white"}/>
        </div>
    </div>
  )
}

export default BoxWithInfo