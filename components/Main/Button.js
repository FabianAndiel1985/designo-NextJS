import React from 'react'
import "./Button.scss";


const Button = ({text, type, color="silver", fontColor="black"}) => {
  return (
    <button class={`button ${color=='silver' ? 'silver':'orange'} ${fontColor== 'black' ? 'font-black':'font-white'}`} type={type}>
        {text}
    </button>
  )
}

export default Button