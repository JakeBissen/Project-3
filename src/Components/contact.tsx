import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactC.css';


function Contact() {
  return (

    <div className='BODY'>
    <div className='container'>
    <div className='form-backdrop '>
      <div className='col-12 p-4 row text-center'>
  <h1 className="mb-4">Contact Form</h1>
  <form 
  className="contact-forms col-sm-12 col-lg-12 col-m-12 "
  action='https://formspree.io/f/xyzbjndw' 
  method='POST'>
    

    <div className="form-group ">
      <label htmlFor="FirstName" className="form-label">
        First Name</label>
      <input
        type="text"
        className="form-control"
        id="FirstName"
        name='FirstName'
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
          name='LastName'
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
        name='email'
        placeholder="Enter your work email"
      />
    </div>


    <div className="form-group mb-4 ">
      <label htmlFor="text-box" className="form-label">Comments / Questions</label>
      <textarea
        className="form-control"
        id="text-box"
        name='text-box'
        placeholder="Enter any comments, questions, or concerns with the tasks you are expected to complete."
      ></textarea>
    </div>

    <button type="submit" className="btn btn">Submit</button>
  </form>
</div>
</div>
    </div>
    </div>
  );
}


export default Contact;