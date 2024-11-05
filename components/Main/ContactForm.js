'use client'
import React from 'react';
import { useFormik } from 'formik';
import Button from './Button';
import "./ContactForm.scss";
import * as Yup from 'yup'; 
import { FormError } from './FormError';




export const ContactForm = () => {

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Can`t be empty'),
    email: Yup.string().email('Invalid email').required('Can`t be empty'),
  });



    const formik = useFormik({
        initialValues: {
          name: '',
          email: '',
          phone:'',
          message:''
        },
        validationSchema,
        onSubmit: values => {
          console.log()
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
          <div className={"form__group"}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={'Name'}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name ? (
             <FormError text={formik.errors.name}/>
           ) : null}
          </div>

         <div className={"form__group"}>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={'Email'}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          
          <div className={"form__group"}>
            <input
              id="phone"
              type="text"
              placeholder={'Phone'}
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
          </div>

          <div className={"form__group"}>
            <textarea
              id="message"
              name="message"
              type="text"
              placeholder={'Message'}
              onChange={formik.handleChange}
              value={formik.values.message}
            />
          </div>
    
          <Button text={"Submit"} type={"submit"} />
        </form>
      );
}
