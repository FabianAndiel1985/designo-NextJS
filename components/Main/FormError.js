import React from 'react';
import Image from 'next/image';
import "./FormError.scss";

export const FormError = ({text}) => {
  return (
    <div className={"form-error"}>
        <p>{text}</p>
        <Image
            src={"/icon-error.svg"}
            width={20}
            height={20}
        />
    </div>
  )
}
