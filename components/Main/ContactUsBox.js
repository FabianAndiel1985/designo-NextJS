import React from 'react';
import "./ContactUsBox.scss";
import { ContactForm } from './ContactForm';




const ContactUsBox = () => {
  return (
    <div className={"contact-us-box"}>
        <div className={"contact-us-box__text-box"}>
            <h1>Contact Us</h1>
            <p>
            Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow.
            If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
            </p>
        </div>

        <div className={"contact-us-box__form"}>
            <ContactForm/>
        </div>


    </div>
  )
}

export default ContactUsBox