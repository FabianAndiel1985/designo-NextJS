import Image from 'next/image';
import React from 'react';
import "./AttributeElement.scss";


const AttributeElement = ({element}) => {
  return (
    <div className={"attribute-element"}>
        <Image
        src={element.imgSrc}
        width={202}
        height={202}
        />
        <div className={"attribute-element__texts"}>
            <h1> {element.heading.toUpperCase()} </h1>
            <p> {element.text}</p>
        </div>
    </div>
  )
}

export default AttributeElement