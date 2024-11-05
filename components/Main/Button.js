import React from 'react'
import "./Button.scss";


const Button = ({text, type}) => {
  return (
    <button class={"button"} type={type}>
        {text}
    </button>
  )
}

export default Button