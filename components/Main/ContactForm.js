import React from 'react'

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
      return (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
    
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
    
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />

        <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
    
          <button type="submit">Submit</button>
        </form>
      );
}
