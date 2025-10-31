import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage() {
  return (
    <main className='homepage container mt-5'>
        <h2 className="mb-4">Homepage</h2>
        <p>Welcome to the Task Manager App! Use the navigation bar to access your to-do list and contact form. Remember, you are expected to complete 3 tasks daily, unless stated otherwise.</p>
    </main>
  );
}

export default Homepage;