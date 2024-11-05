'use client'
import React from 'react';
import { useFormik } from 'formik';
import Button from './Button';
import "./ContactForm.scss";

export const ContactForm = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone:'',
          message:''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });

      const handleFocus=(attributeName)=>{
         // console.log(attributeName);
      }

      const handleBlur=(attributeName)=>{
        console.log(attributeName);
    }

      
      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            onFocus={(e)=> {handleFocus(e.target.name)}}
            onBlur={(e)=> {handleBlur(e.target.name)}}
          />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onFocus={(e)=> {handleFocus(e.target.name)}}
            onBlur={(e)=> {handleBlur(e.target.name)}}
          />
    
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onFocus={(e)=> {handleFocus(e.target.name)}}
            onBlur={(e)=> {handleBlur(e.target.name)}}
          />

        <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.message}
            onFocus={(e)=> {handleFocus(e.target.name)}}
            onBlur={(e)=> {handleBlur(e.target.name)}}
          />
    
          <Button text={"Submit"} type={"submit"} />
        </form>
      );
}
