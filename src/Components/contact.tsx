import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactC.css';


function Contact() {
  return (

    <div className="container mt-5 col-12 col-md-6">
  <h1 className="mb-4">Contact Form</h1>
  <form className="contact-forms">
    

    <div className="form-group mb-3 ">
      <label htmlFor="FirstName" className="form-label">
        First Name</label>
      <input
        type="text"
        className="form-control"
        id="FirstName"
        placeholder="Enter your first name"
      />
    </div>

    <div className="form-group mb-3">
      <label htmlFor="LastName" className="form-label">
        Last Name</label>
      <input
        type="text"
        className="form-control"
        id="LastName"
        placeholder="Enter your last name"
      />
    </div>

    <div className="form-group mb-3 ">
      <label htmlFor="email" className="form-label">
        Work Email</label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Enter your work email"
      />
    </div>


    <div className="form-group mb-4 ">
      <label htmlFor="text-box" className="form-label">Comments / Questions</label>
      <textarea
        className="form-control"
        id="text-box"
        placeholder="Enter any comments, questions, or concerns with the tasks you are expected to complete."
      ></textarea>
    </div>

    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>
      
  );
}


export default Contact;