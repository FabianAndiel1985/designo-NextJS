import React from 'react'
import "./ContactBox.scss"


export const ContactBox = ({address}) => {



   if(address?.companyName) {   
        return (
            <div className='contact-box'>
                <p>{address?.companyName}</p>
                <p>{address?.street}</p>
                <p>{`${address?.city}, ${address?.province} ${address?.zip}`}</p>
            </div>
        )
    }
  
    else if(address?.heading) {

        return (
            <div className='contact-box'>
                <p>{address?.heading}</p>
                <p>{address?.telephonenumber}</p>
                <p>{address?.email}</p>
            </div>
        )
    }

    return null;

}
