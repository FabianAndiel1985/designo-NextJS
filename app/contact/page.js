import React from 'react'
import ContactUsBox from '@/components/Main/ContactUsBox'
import "./contact-page.scss";
import BoxesWithInfo from '@/components/Main/BoxesWithInfo';
import { locationElementContent } from '@/mocks/LocationData';

const Contact = () => {
    console.log("Contact page gets rerendered again");
  return (
    <div id={"contact-page"}>
      <ContactUsBox/>
      <BoxesWithInfo data={locationElementContent}/>
    </div>
  )
}

export default Contact