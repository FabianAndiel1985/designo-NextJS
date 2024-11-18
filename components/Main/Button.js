import React from 'react'
import "./Button.scss";


const Button = ({text, type, color="silver"}) => {
  return (
    <button class={`button ${color=='silver' ? 'silver':'orange'}`} type={type}>
        {text}
    </button>
  )
}

export default Button