import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { create } from '../../contact/api-contact.js';

const Contacts = () => {
  const [values, setValues] = useState({
    typeOfService: "",
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
  });

  const { register, handleSubmit, formState: { errors } } = useForm();

  const submitForm = () => {
    const contact = {
      typeOfService: values.typeOfService || undefined,
      firstname: values.firstname || undefined,
      lastname: values.lastname || undefined,
      email: values.email || undefined,
      comments: values.comments || undefined,
    };
    console.log(contact);
    create(contact);
  };

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const resetForm = () => {
    setValues({
      typeOfService: "",
      firstname: "",
      lastname: "",
      email: "",
      comments: "",
    });
  };

  return (
    <>
      <main>
        <h1>Contact Page</h1>
        <form className="contact-form" onSubmit={handleSubmit(submitForm)}>
          <label htmlFor="typeOfService">Type of Service:</label>
          <select 
            {...register("typeOfService", { required: "Type of service is required" })}
            value={values.typeOfService} 
            onChange={handleChange('typeOfService')}
          >
            <option value="">Select a service...</option>
            <option value="test1">Mural Commissions</option>
            <option value="test2">Interior Artworks</option>
            <option value="test3">Event Live Painting</option>
            <option value="test4">Custom Designs</option>
          </select>
          {errors.typeOfService && <p>{errors.typeOfService.message}</p>}
          <br /><br />

          <label htmlFor="firstname">First Name:</label>
          <input
            {...register("firstname", { required: "First name is required" })}
            value={values.firstname} 
            onChange={handleChange('firstname')}
          />
          {errors.firstname && <p>{errors.firstname.message}</p>}
          <br /><br />

          <label htmlFor="lastname">Last Name:</label>
          <input
            {...register("lastname", { required: "Last name is required" })}
            value={values.lastname} 
            onChange={handleChange('lastname')}
          />
          {errors.lastname && <p>{errors.lastname.message}</p>}
          <br /><br />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            value={values.email} 
            onChange={handleChange('email')}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <br /><br />

          <label htmlFor="comments">Comments:</label>
          <textarea
            {...register("comments")}
            value={values.comments} 
            onChange={handleChange('comments')}
          ></textarea>
          <br /><br />

          <button type="submit">Submit</button>
          <button type="button" onClick={resetForm}>Reset</button>
        </form>
      </main>
    </>
  );
};

export default Contacts;
