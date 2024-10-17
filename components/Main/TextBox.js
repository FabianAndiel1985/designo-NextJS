import React from 'react'
import "./TextBox.scss";
import Button from './Button';

export const TextBox = () => {


  return (
    <>
    <div className={"text-box"} >

      <div className={"text-box__first-element"}>
        <div>
          Let`s talk about your project
        </div>
        <div>
         Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.
        </div>  
      </div>  

      <div className={"text-box__second-element"}>
        <div>
          <Button text={"Get in touch".toUpperCase()}/>
        </div>
      </div>
    </div>
    </>
  )
}
