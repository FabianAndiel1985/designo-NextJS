import React from 'react'
import { ContactBox } from './ContactBox'


export const ContactBoxes = ({address}) => {

  //other contacts

  return (
    <>
     <div id={"contact-boxes-container"}>
     <ContactBox address={address.PostalAddress}/>
     <ContactBox address={address.otherContacts} />
     </div>
    </>
  )
}
