import Image from 'next/image';
import React from 'react';
import "./AttributeElement.scss";


const AttributeElement = ({element}) => {
  return (
    <div className={"Attribute_Element"}>
        <Image
        src={element.imgSrc}
        width={202}
        height={202}
        />
        <h1> {element.heading.toUpperCase()} </h1>
        <p> {element.text}</p>
    </div>
  )
}

export default AttributeElement