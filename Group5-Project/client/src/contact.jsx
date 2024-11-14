import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {create} from '../contact/api-contact.js'
export default function Contact() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = () => {
    const contact = {
      firstname: values.firstname || undefined,
      lastname: values.lastname || undefined,
      email: values.email || undefined,
    };
    console.log(contact);
    create(contact);
  };
  
  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  };
  const resetForm = () => {
    setValues({
      firstname: "",
      lastname: "",
      email: "",
    });
  };

  return (
    <>
    <main>
     <h1>Contact page will be located here</h1>
    <form onSubmit={handleSubmit(submitForm)}>
      <label htmlFor="firstname">First Name:</label>
      <input
        {...register("firstname", { required: "First name is required" })}
        value={values.firstname} onChange={handleChange('firstname')}
      />
      {errors.firstname && <p>{errors.firstname.message}</p>}
      <br /><br />

      <label htmlFor="lastname">Last Name:</label>
      <input
        {...register("lastname", { required: "Last name is required" })}
        value={values.lastname} onChange={handleChange('lastname')}
      />
      {errors.lastname && <p>{errors.lastname.message}</p>}
      <br /><br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        {...register("email", { required: "Email is required" } )}
        value={values.email} onChange={handleChange('email')}
      />
      {errors.email && <p>{errors.email.message}</p>}
      <br /><br />

      <button type="submit">Submit</button>
      <button type="button" onClick={resetForm}>Reset</button>
    </form>
    </main>
    </>
  );
}
