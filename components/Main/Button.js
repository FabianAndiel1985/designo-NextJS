import React from 'react'
import "./Button.scss";


const Button = ({text}) => {
  return (
    <button class={"button"}>
        {text}
    </button>
  )
}

export default Button