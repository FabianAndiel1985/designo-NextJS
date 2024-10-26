import React from 'react';
import "./TopBox.scss";
import Button from './Button';
import Image from 'next/image';


export const TopBox = () => {
  return (
    <div className={"top-box"}>
        <div className={"top-box__text-box"}>
            <h1>Award-winning custom designs and digital branding solutions</h1>
            <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
            <Button text={"learn more"} />
        </div>

        <div className={"top-box__image-box"}>
            <Image 
            src={"/image-hero-phone.png"}
            fill={true}
            />
        </div>
    </div>
  )
}


