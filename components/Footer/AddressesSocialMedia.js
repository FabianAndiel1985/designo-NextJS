import React from 'react'
import { ContactBoxes } from './ContactBoxes'
import SocialMediaIcons from './SocialMediaIcons';


const address = {
    PostalAddress: {
        companyName:  "Designo Central Office",
        street: "3886 Wellington Street",
        city:"Toronto",
        province:"Ontario",
        zip:"M9C 3J5"
    },
    otherContacts: {
        heading :"Contact Us (Central Office)",
        telephonenumber: "+1 253-863-8967",
        email: "contact@designo.co"
    }
};

const AddressesSocialMedia = () => {
  return (
    <div
    id="addressSocialMedia"
    >
        <ContactBoxes address={address}/>
        <SocialMediaIcons/>
    </div>
  )
}
export default AddressesSocialMedia