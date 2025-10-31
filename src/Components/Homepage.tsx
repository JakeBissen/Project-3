import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePageC.css'

function Homepage() {
  return (
    <main className='HomePage  mt-5'>
     
        <div className='container'>
          <div className='row'>
             <div>
            <div className='text-BOX col-sm-8 col-lg-12 m-12'>
            
            <h2 className="mb-4 text-center">Homepage</h2>
           <p>Welcome to the Task Manager App! Use the navigation bar to access your to-do list and contact form. Remember, you are expected to complete 3 tasks daily, unless stated otherwise. Use the Contact Form to ask us any questions or concerns that may come up as you work. Thank you for your dedication to your work.</p>
            </div>
        </div>
       </div>
       </div>
    </main>
  );
}

export default Homepage;